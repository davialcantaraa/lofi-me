import '../styles/global.scss';
import Menu from '../components/Menu';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Menu />
			<Component {...pageProps} />
			<NextNProgress color="#9345d3" />
		</>
	);
}

export default MyApp;
