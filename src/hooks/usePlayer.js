import { useState, useEffect } from 'react';

function usePlayerState($audioPlayer, value, playlist) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [currentSong, setCurrentSong] = useState(playlist[currentSongIndex]);
	useEffect(() => {
		isPlaying ? $audioPlayer.current.play() : $audioPlayer.current.pause();
	}, [isPlaying, $audioPlayer]);

	const ToggleAudioPlay = () => {
		$audioPlayer.current.volume = value / 100;
		setIsPlaying(!isPlaying);
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

	return {
		isPlaying,
		ToggleAudioPlay,
		currentSong,
		skipSong,
	};
}

export default usePlayerState;
