import Footer from './components/Footer';
import HiddenWindowRight from './components/HiddenWindowRight';
import HiddenWindowLeft from './components/HiddenWindowLeft';
import Player from './components/Player';

import { PlayingProvider } from './contexts/PlayingContext';

import './styles/global.scss';

function App() {
	return (
		<div className="App">
			<HiddenWindowRight />
			<div className="wrapper">
				<PlayingProvider>
					<Player />
					<Footer />
				</PlayingProvider>
			</div>
			<HiddenWindowLeft />
		</div>
	);
}

export default App;
