import { useState, useRef, useEffect, useContext } from 'react';

import Menu from '../Menu';
import { PlayingContext } from '../../contexts/PlayingContext';

import api from '../../services/api';

import './styles.scss';
import {
	FiSkipBack,
	FiSkipForward,
	FiChevronDown,
	FiChevronUp,
	FiPause,
	FiPlay,
	FiVolume2,
} from 'react-icons/fi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { CgArrowsShrinkH } from 'react-icons/cg';
import { FaRandom } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function Player() {
	const previousVolume = parseInt(localStorage.getItem('currentVolume'));
	const previousSong = localStorage.getItem(JSON.stringify('currentSong'));
	const previousSongIndex = localStorage.getItem('currentSongIndex');

	const { isPlaying, setIsPlaying } = useContext(PlayingContext);
	const [playlist, setPlaylist] = useState([]);
	const [playlistTwo, setPlaylistTwo] = useState([]);
	const [playlistThree, setPlaylistThree] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentSongIndex, setCurrentSongIndex] = useState(
		previousSongIndex || 0
	);
	const [currentSong, setCurrentSong] = useState(previousSong || {});
	const [value, setValue] = useState(previousVolume || 50);
	const [isOpen, setIsOpen] = useState(false);
	const $audioPlayer = useRef(null);

	useEffect(() => {
		async function getData() {
			const response = await api.get('/relax');
			// const responseTwo = await api.get('/jazz');
			// const responseThree = await api.get('/sleepy');
			setPlaylist(response.data);
			// setPlaylistTwo(responseTwo.data);
			// setPlaylistThree(responseThree.data);
			setIsLoading(false);
		}
		getData();
	}, []);

	useEffect(() => {
		setCurrentSong(playlist[currentSongIndex]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [playlist]);

	// const changePlaylist = async (playlist) => {
	// 	console.log(playlist);
	// 	setIsLoading(true);
	// 	const response = await api.get(`${playlist}`);
	// 	setPlaylist(response.data);
	// 	console.log(response.data);
	// 	$audioPlayer.current.load();
	// 	isPlaying ? $audioPlayer.current.play() : $audioPlayer.current.pause();
	// };

	const handleChange = (event, newValue) => {
		setValue(newValue);
		$audioPlayer.current.volume = value / 100;
		localStorage.setItem('currentVolume', value);
	};

	const toggleAudioPlay = () => {
		$audioPlayer.current.play();
		$audioPlayer.current.volume = value / 100;
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
				$audioPlayer.current.pause();
				$audioPlayer.current.load();
				isPlaying ? $audioPlayer.current.play() : $audioPlayer.current.pause();
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
				$audioPlayer.current.pause();
				$audioPlayer.current.load();
				isPlaying ? $audioPlayer.current.play() : $audioPlayer.current.pause();
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
		$audioPlayer.current.pause();
		$audioPlayer.current.load();
		isPlaying ? $audioPlayer.current.play() : $audioPlayer.current.pause();
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

	// window.onload = () => {
	// 	document.getElementById('relax').addEventListener('click', () => {
	// 		$audioPlayer.current.pause();
	// 		changePlaylist('relax');
	// 		setIsLoading(false);
	// 	});
	// 	document.getElementById('jazz').addEventListener('click', () => {
	// 		$audioPlayer.current.pause();
	// 		changePlaylist('jazz');
	// 		setIsLoading(false);
	// 	});
	// 	document.getElementById('sleepy').addEventListener('click', () => {
	// 		$audioPlayer.current.pause();
	// 		changePlaylist('sleepy');
	// 		setIsLoading(false);
	// 	});
	// };

	const toggleMenuClose = () => {
		if (isOpen === true) {
			document.getElementById('toggler').style.display = 'none';
			document.getElementById('footer').style.display = 'none';
			document.getElementById('closeMenuButton').style.display = 'none';
			document.getElementById('openMenuButton').style.display = 'inline';
			setIsOpen(false);
		}
		console.log(isOpen);
	};

	return (
		<div className="player">
			<div className="title-container">
				<p title="teste">{isLoading ? 'Loading...' : currentSong.title}</p>
				<button id="hideWindowButton" onClick={toggleMenuClose}>
					<CgArrowsShrinkH />
				</button>
			</div>
			<div className="audio-container">
				<div>
					<button onClick={() => skipSong(false)}>
						<FiSkipBack />
					</button>
					<button id="play-pause-button">
						{isLoading ? (
							<AiOutlineLoading3Quarters className="play-loading" />
						) : isPlaying ? (
							<FiPause onClick={toggleAudioPause} />
						) : (
							<FiPlay onClick={toggleAudioPlay} />
						)}
					</button>
					<button onClick={() => skipSong()}>
						<FiSkipForward />
					</button>
					<button onClick={handleRandomize}>
						<FaRandom size={15} />
					</button>
				</div>
				<Box className="volume-container" sx={{ width: 200 }}>
					<FiVolume2 size={20} />
					<Slider
						size="small"
						aria-label="volume"
						valueLabelDisplay="auto"
						value={value}
						onChange={handleChange}
					/>
					<button>
						<FiChevronDown onClick={toggleMenu} id="openMenuButton" />
						<FiChevronUp onClick={toggleMenu} id="closeMenuButton" />
					</button>
				</Box>
				{isLoading ? (
					<AiOutlineLoading3Quarters className="play-loading" />
				) : (
					<audio ref={$audioPlayer} id="player">
						<source type="audio/mp3" src={currentSong.uri} />
					</audio>
				)}
			</div>
			<Menu isPlaying={isPlaying} />
		</div>
	);
}

export default Player;
