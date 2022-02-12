import { useContext, useEffect, useRef, useState } from 'react';

import { PlayingContext } from '../../contexts/PlayingContext';

import './styles.scss';
import { BsFillCloudRainHeavyFill } from 'react-icons/bs';
import { MdLocalFireDepartment } from 'react-icons/md';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaCity } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import api from '../../services/api';

function Menu() {
	const [noises, setNoises] = useState([]);
	const [isLoading, setisLoading] = useState(true);
	const previousPlaylist = localStorage.getItem('currentPlaylist') || 'relax';
	console.log(previousPlaylist);

	useEffect(() => {
		async function getData() {
			const response = await api.get('/noises');
			setNoises(response.data);
			setisLoading(false);
		}
		getData();
	}, []);

	const $rainPlayer = useRef(null);
	const $cityPlayer = useRef(null);
	const $firePlayer = useRef(null);

	const previousRainVolume = parseInt(
		localStorage.getItem('currentRainVolume')
	);
	const previousCityVolume = parseInt(
		localStorage.getItem('currentCityVolume')
	);
	const previousFireVolume = parseInt(
		localStorage.getItem('currentFireVolume')
	);

	const [rainValue, setRainValue] = useState(previousRainVolume || 0);
	const [cityValue, setCityValue] = useState(previousCityVolume || 0);
	const [fireValue, setFireValue] = useState(previousFireVolume || 0);

	const { isPlaying } = useContext(PlayingContext);

	useEffect(() => {
		if (isPlaying) {
			$rainPlayer.current.play();
			$rainPlayer.current.volume = rainValue / 100;
			$cityPlayer.current.play();
			$cityPlayer.current.volume = cityValue / 100;
			$firePlayer.current.play();
			$firePlayer.current.volume = fireValue / 100;
			document.getElementById('bgVolume').style.pointerEvents = 'auto';
			document.getElementById('bgVolume').style.filter = 'brightness(1)';
		} else {
			$rainPlayer.current.pause();
			$cityPlayer.current.pause();
			$firePlayer.current.pause();
			document.getElementById('bgVolume').style.pointerEvents = 'none';
			document.getElementById('bgVolume').style.filter = 'brightness(0.3)';
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isPlaying]);

	useEffect(() => {
		const buttons = document.getElementsByClassName('category-button');
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', function () {
				var current = document.getElementsByClassName('active-playlist');
				current[0].className = current[0].className.replace(
					' active-playlist',
					''
				);
				this.className += ' active-playlist';
			});
		}
	}, []);

	const handleChangeRain = (event, newValue) => {
		setRainValue(newValue);
		$rainPlayer.current.volume = rainValue / 100;
		localStorage.setItem('currentRainVolume', rainValue);
		if (rainValue === 0) {
			$rainPlayer.current.pause();
		} else {
			$rainPlayer.current.play();
		}
	};

	const handleChangeCity = (event, newValue) => {
		setCityValue(newValue);
		$cityPlayer.current.volume = cityValue / 100;
		localStorage.setItem('currentCityVolume', cityValue);
		if (cityValue === 0) {
			$cityPlayer.current.pause();
		} else {
			$cityPlayer.current.play();
		}
	};

	const handleChangeFire = (event, newValue) => {
		setFireValue(newValue);
		$firePlayer.current.volume = fireValue / 100;
		localStorage.setItem('currentFireVolume', fireValue);
		if (fireValue === 0) {
			$firePlayer.current.pause();
		} else {
			$firePlayer.current.play();
		}
	};

	return (
		<div transition={{ delay: 1 }} className="menu" id="toggler">
			<div>
				<p>Background noises</p>
				<div className="background-sounds-container" id="bgVolume">
					<Box className="volume-container" sx={{ width: 200 }}>
						<BsFillCloudRainHeavyFill />
						<Slider
							size="small"
							aria-label="volume"
							value={rainValue}
							valueLabelDisplay="auto"
							onChange={handleChangeRain}
						/>
					</Box>
					<Box className="volume-container" sx={{ width: 200 }}>
						<FaCity />
						<Slider
							size="small"
							value={cityValue}
							aria-label="volume"
							valueLabelDisplay="auto"
							onChange={handleChangeCity}
						/>
					</Box>
					<Box className="volume-container" sx={{ width: 200 }}>
						<MdLocalFireDepartment />
						<Slider
							size="small"
							value={fireValue}
							aria-label="volume"
							valueLabelDisplay="auto"
							onChange={handleChangeFire}
						/>
					</Box>
				</div>
			</div>
			<div className="category-container">
				<button
					className={previousPlaylist === 'relax' ? 'active-playlist' : null}
					id="relax"
				>
					Relax
				</button>
				<button
					className={previousPlaylist === 'jazz' ? 'active-playlist' : null}
					id="jazz"
				>
					Jazz
				</button>
				<button
					className={previousPlaylist === 'sleepy' ? 'active-playlist' : null}
					id="sleepy"
				>
					Sleepy
				</button>
			</div>

			{isLoading ? (
				<>
					<AiOutlineLoading3Quarters className="play-loading" />

					<audio loop ref={$rainPlayer} id="player"></audio>
					<audio loop ref={$cityPlayer} id="player"></audio>
					<audio loop ref={$firePlayer} id="player"></audio>
				</>
			) : (
				<>
					<audio loop ref={$rainPlayer} id="player">
						<source type="audio/mp3" src={noises[0].uri} />
					</audio>
					<audio loop ref={$cityPlayer} id="player">
						<source type="audio/mp3" src={noises[1].uri} />
					</audio>
					<audio loop ref={$firePlayer} id="player">
						<source type="audio/mp3" src={noises[2].uri} />
					</audio>
				</>
			)}
		</div>
	);
}

export default Menu;
