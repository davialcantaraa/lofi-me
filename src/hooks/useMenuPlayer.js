import { useState } from 'react';

function useMenuPlayer($rainPlayer, $cityPlayer, $firePlayer) {
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

	return { handleChangeCity, handleChangeFire, handleChangeRain };
}

export default useMenuPlayer;
