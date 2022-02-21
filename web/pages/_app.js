import Head from 'next/head';
import '../styles/global.scss';
import Menu from '../components/Menu';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charset="utf-8" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Menu />
			<Component {...pageProps} />
			<NextNProgress color="#9345d3" />
		</>
	);
}

export default MyApp;
