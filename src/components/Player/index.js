import { useState, useRef } from 'react';
import usePlayerState from '../../hooks/usePlayerState';
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
	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [currentSong, setCurrentSong] = useState(playlist[currentSongIndex]);
	const $audioPlayer = useRef(null);
	const { isPlaying, ToggleAudioPlay } = usePlayerState($audioPlayer, value);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		console.log(newValue);
		$audioPlayer.current.volume = value / 100;
	};

	const skipSong = (forwards = true) => {
		if (forwards) {
			setCurrentSongIndex(() => {
				let temp = currentSongIndex;
				temp++;
				console.log(temp);
				if (temp > playlist.length - 1) {
					temp = 0;
				}
				setCurrentSong(playlist[temp]);
				$audioPlayer.current.pause();
				$audioPlayer.current.load();
				$audioPlayer.current.play();
				return temp;
			});
		} else {
			setCurrentSongIndex(() => {
				console.log('ANTERIOR');
				let temp = currentSongIndex;
				temp--;
				console.log(temp);
				setCurrentSong(temp);
				if (temp < 0) {
					temp = playlist.length - 1;
				}
				setCurrentSong(playlist[temp]);
				$audioPlayer.current.pause();
				$audioPlayer.current.load();
				$audioPlayer.current.play();
				return temp;
			});
		}
	};

	return (
		<div className="player">
			<div className="title-container">
				<p title={currentSong.name}>{currentSong.name}</p>
				<button>
					<FiChevronDown />
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
		</div>
	);
}

export default Player;
