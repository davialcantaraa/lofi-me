import { createContext, useState } from 'react';

export const PlayingContext = createContext();

export const PlayingProvider = (props) => {
	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<PlayingContext.Provider value={{ isPlaying, setIsPlaying }}>
			{props.children}
		</PlayingContext.Provider>
	);
};
