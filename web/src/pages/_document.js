import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
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
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
