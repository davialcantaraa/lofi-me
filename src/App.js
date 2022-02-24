import { ErrorBoundary } from 'react-error-boundary';

import Player from './components/Player';
import Footer from './components/Footer';
import HiddenWindowRight from './components/HiddenWindowRight';

import { PlayingProvider } from './contexts/PlayingContext';

import './styles/global.scss';

function ErrorFallback({ error, resetErrorBoundary }) {
	localStorage.removeItem('currentSong');
	localStorage.removeItem('currentSongIndex');
	setTimeout(() => {
		window.location.reload();
	}, 3000);
	return (
		<div role="alert" className="wrapper error">
			<Player />
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
		</div>
	);
}

export default App;
