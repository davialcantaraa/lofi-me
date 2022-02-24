import Player from './components/Player';
import Footer from './components/Footer';
import HiddenWindowRight from './components/HiddenWindowRight';
import HiddenWindowLeft from './components/HiddenWindowLeft';
import { ErrorBoundary } from 'react-error-boundary';

import { PlayingProvider } from './contexts/PlayingContext';

import './styles/global.scss';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function ErrorFallback({ error, resetErrorBoundary }) {
	localStorage.removeItem('currentSong');
	localStorage.removeItem('currentSOngIndex');
	setTimeout(() => {
		window.location.reload();
	}, 3000);
	return (
		<div role="alert" className="wrapper error">
			<AiOutlineLoading3Quarters className="loading" />
		</div>
	);
}

function App() {
	return (
		<div className="App">
			<HiddenWindowRight />
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<div className="wrapper">
					<PlayingProvider>
						<Player />
						<Footer />
					</PlayingProvider>
				</div>
			</ErrorBoundary>
			<HiddenWindowLeft />
		</div>
	);
}

export default App;
