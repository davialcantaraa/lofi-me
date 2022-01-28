import { useContext, useEffect, useRef, useState } from 'react';

import { PlayingContext } from '../../contexts/PlayingContext';
import useMenuPlayer from '../../hooks/useMenuPlayer';

import './styles.scss';
import { BsFillCloudRainHeavyFill } from 'react-icons/bs';
import { MdLocalFireDepartment } from 'react-icons/md';
import { FaCity } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import noises from '../../noises.json';

function Menu() {
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

	const { handleChangeCity, handleChangeFire, handleChangeRain } =
		useMenuPlayer(
			$rainPlayer,
			$cityPlayer,
			$firePlayer,
			isPlaying,
			rainValue,
			setRainValue,
			cityValue,
			setCityValue,
			fireValue,
			setFireValue
		);

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
				<button className="category-button active">Sleepy</button>
				<button className="category-button">Jazz</button>
				<button className="category-button">Chill</button>
			</div>
			<audio loop ref={$rainPlayer} id="player">
				<source type="audio/mp3" src={noises[0].url} />
			</audio>
			<audio loop ref={$cityPlayer} id="player">
				<source type="audio/mp3" src={noises[1].url} />
			</audio>
			<audio loop ref={$firePlayer} id="player">
				<source type="audio/mp3" src={noises[2].url} />
			</audio>
		</div>
	);
}

export default Menu;
