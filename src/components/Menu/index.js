import { motion } from 'framer-motion';
// import Footer from '../Footer';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './styles.scss';

import { BsFillCloudRainHeavyFill } from 'react-icons/bs';
import { MdLocalFireDepartment } from 'react-icons/md';
import { FaCity } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

import noises from '../../noises.json';

function Menu() {
	const $rainPlayer = useRef(null);
	const $cityPlayer = useRef(null);
	const $firePlayer = useRef(null);

	const [rainValue, setRainValue] = useState(0);
	const [cityValue, setCityValue] = useState(0);
	const [fireValue, setFireValue] = useState(0);

	const handleChangeRain = (event, newValue) => {
		setRainValue(newValue);
		$rainPlayer.current.volume = rainValue / 500;
		if ($rainPlayer.current.volume !== 0) {
			$rainPlayer.current.play();
		} else {
			$rainPlayer.current.pause();
		}
	};

	const handleChangeCity = (event, newValue) => {
		setCityValue(newValue);
		$cityPlayer.current.volume = cityValue / 100;
		if ($cityPlayer.current.volume !== 0) {
			$cityPlayer.current.play();
		} else {
			$cityPlayer.current.pause();
		}
	};

	const handleChangeFire = (event, newValue) => {
		setFireValue(newValue);
		$firePlayer.current.volume = fireValue / 100;
		if ($firePlayer.current.volume !== 0) {
			$firePlayer.current.play();
		} else {
			$firePlayer.current.pause();
		}
	};

	useEffect(() => {
		const buttons = document.getElementsByClassName('category-button');
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', function () {
				var current = document.getElementsByClassName('active');
				current[0].className = current[0].className.replace(' active', '');
				this.className += ' active';
			});
		}
	}, []);

	return (
		<motion.div className="menu" id="toggler">
			<div>
				<p>Background noises</p>
				<div className="background-sounds-container">
					<Box className="volume-container" sx={{ width: 200 }}>
						<BsFillCloudRainHeavyFill />
						<Slider
							size="small"
							defaultValue={0}
							aria-label="volume"
							valueLabelDisplay="auto"
							onChange={handleChangeRain}
						/>
					</Box>
					<Box className="volume-container" sx={{ width: 200 }}>
						<FaCity />
						<Slider
							size="small"
							defaultValue={0}
							aria-label="volume"
							valueLabelDisplay="auto"
							onChange={handleChangeCity}
						/>
					</Box>
					<Box className="volume-container" sx={{ width: 200 }}>
						<MdLocalFireDepartment />
						<Slider
							size="small"
							defaultValue={0}
							aria-label="volume"
							valueLabelDisplay="auto"
							onChange={handleChangeFire}
						/>
					</Box>
				</div>
			</div>
			<div className="category-container">
				<button className="category-button active">Sleepy</button>
				<button className="category-button">Jazz</button>
				<button className="category-button">Chill</button>
			</div>
			<audio ref={$rainPlayer} id="player">
				<source type="audio/mp3" src={noises[0].url} />
			</audio>
			<audio ref={$cityPlayer} id="player">
				<source type="audio/mp3" src={noises[1].url} />
			</audio>
			<audio ref={$firePlayer} id="player">
				<source type="audio/mp3" src={noises[2].url} />
			</audio>
		</motion.div>
	);
}

export default Menu;
