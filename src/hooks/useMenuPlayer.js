import { useEffect, useState } from 'react';

function useMenuPlayer($rainPlayer, $cityPlayer, $firePlayer, isPlaying) {
	const [rainValue, setRainValue] = useState(0);
	const [cityValue, setCityValue] = useState(0);
	const [fireValue, setFireValue] = useState(0);

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
		// $rainPlayer.current.volume = 100;
		// $cityPlayer.current.volume = 100;
		// $firePlayer.current.volume = 100;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isPlaying]);

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

	return {
		handleChangeCity,
		handleChangeFire,
		handleChangeRain,
		rainValue,
		cityValue,
		fireValue,
	};
}

export default useMenuPlayer;
