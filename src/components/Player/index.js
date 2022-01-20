import { useState, useRef, useEffect, useContext } from 'react';

import { PlayingContext } from '../../contexts/PlayingContext';
import usePlayer from '../../hooks/usePlayer';
import Menu from '../Menu';

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
import { CgArrowsShrinkH } from 'react-icons/cg';
import { FaRandom } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// import playlist from '../../playlist.json';
import api from '../../services/api';

function Player() {
	// const previousVolume = parseInt(localStorage.getItem('currentVolume'));

	// const { ToggleAudioPlay, currentSong, skipSong, handleRandomize } = usePlayer(
	// 	$audioPlayer,
	// 	value,
	// 	playlist,
	// 	isPlaying,
	// 	setIsPlaying
	// );

	// useEffect(() => {
	// 	const currentAudio = document.getElementById('player');
	// 	currentAudio.onended = () => skipSong();
	// }, [skipSong]);

	const [playlist, setPlaylist] = useState([]);

	useEffect(() => {
		api.get('/').then((response) => {
			// console.log(response.data);
			setPlaylist(response.data);
		});
		console.log(playlist);
	}, []);

	const [value, setValue] = useState(50);
	const [isOpen, setIsOpen] = useState(true);
	const $audioPlayer = useRef(null);

	const { isPlaying, setIsPlaying } = useContext(PlayingContext);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		$audioPlayer.current.volume = value / 100;
		localStorage.setItem('currentVolume', value);
	};

	const toggleMenu = () => {
		if (isOpen === true) {
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

	return (
		<div className="player">
			<div className="title-container">
				<p title="teste">teste</p>
				<button id="hideWindowButton">
					<CgArrowsShrinkH />
				</button>
			</div>
			<div className="audio-container">
				<div>
					<button
					// onClick={() => skipSong(false)}
					>
						<FiSkipBack />
					</button>
					<button
						id="play-pause-button"
						// onClick={ToggleAudioPlay}
					>
						{isPlaying ? <FiPause /> : <FiPlay />}
					</button>
					<button
					// onClick={() => skipSong()}
					>
						<FiSkipForward />
					</button>
					<button
					// onClick={handleRandomize}
					>
						<FaRandom size={15} />
					</button>
				</div>
				<Box className="volume-container" sx={{ width: 200 }}>
					<FiVolume2 size={20} />
					<Slider
						size="small"
						aria-label="volume"
						valueLabelDisplay="auto"
						value={50}
						onChange={handleChange}
					/>
					<button>
						<FiChevronDown onClick={toggleMenu} id="openMenuButton" />
						<FiChevronUp onClick={toggleMenu} id="closeMenuButton" />
					</button>
				</Box>
				<audio ref={$audioPlayer} id="player">
					<source
						type="audio/mp3"
						// src={currentSong.url}
					/>
				</audio>
			</div>
			<Menu isPlaying={isPlaying} />
		</div>
	);
}

export default Player;
