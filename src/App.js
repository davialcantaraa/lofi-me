import Footer from './components/Footer';
import Player from './components/Player';

import { PlayingProvider } from './contexts/PlayingContext';

import './styles/global.scss';

function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<PlayingProvider>
					<Player />
					<Footer />
				</PlayingProvider>
			</div>
		</div>
	);
}

export default App;
