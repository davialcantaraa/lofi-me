import { useState, useEffect } from 'react';

function usePlayerState($audioPlayer, value) {
	const [isPlaying, setIsPlaying] = useState(false);
	useEffect(() => {
		isPlaying ? $audioPlayer.current.play() : $audioPlayer.current.pause();
	}, [isPlaying, $audioPlayer]);

	const ToggleAudioPlay = () => {
		$audioPlayer.current.volume = value / 100;
		setIsPlaying(!isPlaying);
	};

	return {
		isPlaying,
		ToggleAudioPlay,
	};
}

export default usePlayerState;
