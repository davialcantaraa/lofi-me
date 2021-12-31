import { useEffect, useState } from 'react';

function useMenuPlayer(
	$rainPlayer,
	$cityPlayer,
	$firePlayer,
	previousRainVolume,
	previousCityVolume,
	previousFireVolume,
	isPlaying
) {
	const [rainValue, setRainValue] = useState(previousRainVolume || 0);
	const [cityValue, setCityValue] = useState(previousCityVolume || 0);
	const [fireValue, setFireValue] = useState(previousFireVolume || 0);

	// useEffect(() => {
	// 	isPlaying ? $rainPlayer.current.play() : $rainPlayer.current.pause();
	// 	isPlaying ? $cityPlayer.current.play() : $cityPlayer.current.pause();
	// 	isPlaying ? $firePlayer.current.play() : $firePlayer.current.pause();
	// }, [isPlaying, $rainPlayer, $cityPlayer, $firePlayer]);

	const handleChangeRain = (event, newValue) => {
		setRainValue(newValue);
		$rainPlayer.current.volume = rainValue / 500;
		localStorage.setItem('currentRainVolume', rainValue);
		if ($rainPlayer.current.volume !== 0) {
			$rainPlayer.current.play();
		} else {
			$rainPlayer.current.pause();
		}
	};

	const handleChangeCity = (event, newValue) => {
		setCityValue(newValue);
		$cityPlayer.current.volume = cityValue / 100;
		localStorage.setItem('currentCityVolume', cityValue);
		if ($cityPlayer.current.volume !== 0) {
			$cityPlayer.current.play();
		} else {
			$cityPlayer.current.pause();
		}
	};

	const handleChangeFire = (event, newValue) => {
		setFireValue(newValue);
		$firePlayer.current.volume = fireValue / 100;
		localStorage.setItem('currentFireVolume', fireValue);
		if ($firePlayer.current.volume !== 0) {
			$firePlayer.current.play();
		} else {
			$firePlayer.current.pause();
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
