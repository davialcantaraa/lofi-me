import { useState, useRef, useEffect, useContext } from 'react';

import Menu from '../Menu';
import { PlayingContext } from '../../contexts/PlayingContext';

import api from '../../services/api';

import './styles.scss';
import {
	FaAngleDoubleLeft,
	FaAngleDoubleRight,
	FaAngleDown,
	FaAngleUp,
	FaPause,
	FaPlay,
	FaVolumeUp,
	FaRandom,
} from 'react-icons/fa';
import { CgArrowsShrinkH } from 'react-icons/cg';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function Player() {
	const previousVolume = parseInt(localStorage.getItem('currentVolume'));
	const previousSong = localStorage.getItem(JSON.stringify('currentSong'));
	const previousSongIndex = localStorage.getItem('currentSongIndex');
	const previousPlaylist = localStorage.getItem('currentPlaylist') || 'relax';

	const { isPlaying, setIsPlaying } = useContext(PlayingContext);
	const [playlist, setPlaylist] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentSongIndex, setCurrentSongIndex] = useState(
		previousSongIndex || 0
	);
	const [currentSong, setCurrentSong] = useState(previousSong || {});
	const [value, setValue] = useState(previousVolume || 50);
	const [isOpen, setIsOpen] = useState(false);
	const $audioPlayer = useRef(null);
	const audioControlRef = useRef(null);

	useEffect(() => {
		async function getData(previousPlaylist) {
			const response = await api.get(`${previousPlaylist}`);
			setPlaylist(response.data);
			setIsLoading(false);
		}
		getData(previousPlaylist);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setCurrentSong(playlist[currentSongIndex]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [playlist]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		$audioPlayer.current.volume = value / 300;
		localStorage.setItem('currentVolume', value);
	};

	const toggleAudioPlay = () => {
		$audioPlayer.current.play();
		$audioPlayer.current.volume = value / 300;
		setIsPlaying(!isPlaying);
		localStorage.setItem('currentSong', JSON.stringify(currentSong));
		localStorage.setItem('currentSongIndex', currentSongIndex);
	};

	const toggleAudioPause = () => {
		$audioPlayer.current.pause();
		setIsPlaying(!isPlaying);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const skipSong = (forwards = true) => {
		if (forwards) {
			setCurrentSongIndex(() => {
				let temp = currentSongIndex;
				temp++;
				if (temp > playlist.length - 1) {
					temp = 0;
				}
				setCurrentSong(playlist[temp]);
				localStorage.setItem('currentSong', JSON.stringify(playlist[temp]));
				localStorage.setItem('currentSongIndex', temp);
				return temp;
			});
		} else {
			setCurrentSongIndex(() => {
				let temp = currentSongIndex;
				temp--;
				setCurrentSong(temp);
				if (temp < 0) {
					temp = playlist.length - 1;
				}
				setCurrentSong(playlist[temp]);
				localStorage.setItem('currentSong', JSON.stringify(playlist[temp]));
				localStorage.setItem('currentSongIndex', temp);
				return temp;
			});
		}
	};

	const handleRandomize = () => {
		const randomNumber = Math.floor(Math.random() * playlist.length);
		setCurrentSong(playlist[randomNumber]);
		setCurrentSongIndex(randomNumber);
		localStorage.setItem('currentSong', JSON.stringify(currentSong));
		localStorage.setItem('currentSongIndex', currentSongIndex);
	};

	useEffect(() => {
		const currentAudio = document.getElementById('player');
		isLoading
			? console.log('loading')
			: (currentAudio.onended = () => skipSong());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [skipSong]);

	const toggleMenu = () => {
		if (isOpen === false) {
			document.getElementById('toggler').style.display = 'block';
			document.getElementById('footer').style.display = 'flex';
			document.getElementById('closeMenuButton').style.display = 'inline';
			document.getElementById('openMenuButton').style.display = 'none';
		} else {
			document.getElementById('toggler').style.display = 'none';
			document.getElementById('footer').style.display = 'none';
			document.getElementById('closeMenuButton').style.display = 'none';
			document.getElementById('openMenuButton').style.display = 'inline';
		}
		setIsOpen(!isOpen);
	};

	const changePlaylist = async (playlist) => {
		setIsLoading(true);
		localStorage.setItem('currentPlaylist', playlist);
		localStorage.setItem('currentSong', JSON.stringify(currentSong));
		localStorage.setItem('currentSongIndex', currentSongIndex);
		const response = await api.get(`${playlist}`);
		setPlaylist(response.data);
	};

	useEffect(() => {
		$audioPlayer.current.volume = value / 300;
		$audioPlayer.current.pause();
		$audioPlayer.current.load();
		isPlaying ? $audioPlayer.current.play() : $audioPlayer.current.pause();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentSong]);

	window.addEventListener('load', () => {
		document.getElementById('relax').addEventListener('click', async () => {
			await changePlaylist('relax');
			setIsLoading(false);
		});
		document.getElementById('jazz').addEventListener('click', async () => {
			await changePlaylist('jazz');
			setIsLoading(false);
		});
		document.getElementById('sleepy').addEventListener('click', async () => {
			await changePlaylist('sleepy');
			setIsLoading(false);
		});
	});

	const toggleMenuClose = () => {
		if (isOpen === true) {
			document.getElementById('toggler').style.display = 'none';
			document.getElementById('footer').style.display = 'none';
			document.getElementById('closeMenuButton').style.display = 'none';
			document.getElementById('openMenuButton').style.display = 'inline';
			setIsOpen(false);
		}
	};

	useEffect(() => {
		isLoading ? setIsPlaying(false) : setIsPlaying(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading]);

	useEffect(() => {
		if (isLoading) {
			audioControlRef.current.style.pointerEvents = 'none';
			audioControlRef.current.style.filter = 'brightness(0.3)';
		} else {
			audioControlRef.current.style.pointerEvents = 'auto';
			audioControlRef.current.style.filter = 'brightness(1)';
		}
	}, [isLoading]);

	return (
		<>
			<div className="player">
				<div className="title-container">
					<p>{isLoading ? 'loading...' : currentSong.title}</p>
					<button id="hideWindowButton" onClick={toggleMenuClose}>
						<CgArrowsShrinkH />
					</button>
				</div>
				<div id="audio-container" ref={audioControlRef}>
					<div>
						<button onClick={() => skipSong(false)}>
							<FaAngleDoubleLeft />
						</button>
						<button id="play-pause-button">
							{isPlaying ? (
								<FaPause onClick={toggleAudioPause} />
							) : (
								<FaPlay onClick={toggleAudioPlay} />
							)}
						</button>
						<button onClick={() => skipSong()}>
							<FaAngleDoubleRight />
						</button>
						<button onClick={handleRandomize}>
							<FaRandom size={15} />
						</button>
					</div>
					<Box className="volume-container" sx={{ width: 200 }}>
						<FaVolumeUp size={20} />
						<Slider
							size="small"
							aria-label="volume"
							// valueLabelDisplay="auto"
							value={value}
							onChange={handleChange}
						/>
						<button>
							<FaAngleDown onClick={toggleMenu} id="openMenuButton" />
							<FaAngleUp onClick={toggleMenu} id="closeMenuButton" />
						</button>
					</Box>
				</div>
				{isLoading ? (
					<>
						<audio ref={$audioPlayer} id="player">
							<source type="audio/mp3" />
						</audio>
					</>
				) : (
					<audio ref={$audioPlayer} id="player">
						<source type="audio/mp3" src={currentSong.uri} />
					</audio>
				)}
				<Menu isPlaying={isPlaying} />
			</div>
		</>
	);
}

export default Player;
