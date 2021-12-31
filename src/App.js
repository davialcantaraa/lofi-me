import Footer from './components/Footer';
import Player from './components/Player';
import './styles/global.scss';

function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<Player />
				<Footer />
			</div>
		</div>
	);
}

export default App;
