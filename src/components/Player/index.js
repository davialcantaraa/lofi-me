import { useState, useRef } from 'react';
import usePlayer from '../../hooks/usePlayer';
import Menu from '../Menu';
import { motion } from 'framer-motion';
import './styles.scss';
import {
	FiSkipBack,
	FiSkipForward,
	FiChevronDown,
	FiPause,
	FiPlay,
	FiVolume2,
} from 'react-icons/fi';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import playlist from '../../playlist.json';

function Player() {
	const [value, setValue] = useState(30);
	const [isOpen, setIsOpen] = useState(true);
	const $audioPlayer = useRef(null);

	const { isPlaying, ToggleAudioPlay, currentSong, skipSong } = usePlayer(
		$audioPlayer,
		value,
		playlist
	);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		console.log(newValue);
		$audioPlayer.current.volume = value / 100;
	};

	const toggleMenu = () => {
		if (isOpen === true) {
			document.getElementById('toggler').style.display = 'block';
		} else {
			document.getElementById('toggler').style.display = 'none';
		}
		setIsOpen(!isOpen);
	};

	return (
		<div className="player">
			<div className="title-container">
				<p title={currentSong.name}>{currentSong.name}</p>
				<button>
					<FiChevronDown onClick={toggleMenu} />
				</button>
			</div>
			<div className="audio-container">
				<div>
					<button>
						<FiSkipBack onClick={() => skipSong(false)} />
					</button>
					<button onClick={ToggleAudioPlay}>
						{isPlaying ? <FiPause /> : <FiPlay />}
					</button>
					<button>
						<FiSkipForward onClick={() => skipSong()} />
					</button>
				</div>
				<Box className="volume-container" sx={{ width: 200 }}>
					<FiVolume2 size={20} />
					<Slider
						size="small"
						defaultValue={70}
						aria-label="volume"
						valueLabelDisplay="auto"
						value={value}
						onChange={handleChange}
					/>
				</Box>
				<audio ref={$audioPlayer} id="player">
					<source type="audio/mp3" src={currentSong.url} />
				</audio>
			</div>
			<Menu />
		</div>
	);
}

export default Player;
