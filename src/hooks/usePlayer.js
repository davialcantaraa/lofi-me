import { useState, useEffect } from 'react';

function usePlayer($audioPlayer, value, playlist, isPlaying, setIsPlaying) {
	const previousSong = localStorage.getItem(JSON.stringify('currentSong'));
	const previousSongIndex = localStorage.getItem('currentSongIndex');
	const [currentSongIndex, setCurrentSongIndex] = useState(
		previousSongIndex || 0
	);
	const [currentSong, setCurrentSong] = useState(
		previousSong || playlist[currentSongIndex]
	);

	useEffect(() => {
		isPlaying ? $audioPlayer.current.play() : $audioPlayer.current.pause();
		// isPlaying ? console.log('sim') : console.log('não');
	}, [isPlaying, $audioPlayer]);

	const ToggleAudioPlay = () => {
		$audioPlayer.current.volume = value / 100;
		setIsPlaying(!isPlaying);
		localStorage.setItem('currentSong', JSON.stringify(currentSong));
		localStorage.setItem('currentSongIndex', currentSongIndex);
	};

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
		$audioPlayer.current.pause();
		$audioPlayer.current.load();
		isPlaying ? $audioPlayer.current.play() : $audioPlayer.current.pause();
	};

	return {
		isPlaying,
		ToggleAudioPlay,
		currentSong,
		skipSong,
		handleRandomize,
	};
}

export default usePlayer;
