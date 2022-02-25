import Head from 'next/head';
import Footer from '../../components/Footer';
import styles from '../../styles/home.module.scss';
import playlistStyles from './styles.module.scss';

export default function Playlists() {
	return (
		<>
			<Head>
				<title>☕lofi me | playlists</title>
			</Head>
			<main>
				<section className={`${styles.preview} ${playlistStyles.container}`}>
					<section>
						<div>
							<h1>available playlists</h1>
							<p>most popular lofi playlists on youtube</p>
						</div>
						<div className={playlistStyles.playlistContainer}>
							<div>
								<div>
									<p>Relax</p>
								</div>
								<h3>lofi hip hop radio - beats to relax/study to</h3>
								<a
									target="_blank"
									href="https://www.youtube.com/playlist?list=PLofht4PTcKYnaH8w5olJCI-wUVxuoMHqM"
									rel="noreferrer"
								>
									see all songs here
								</a>
							</div>
							<div className={playlistStyles.playlistImageContainer}></div>
						</div>
						<div className={playlistStyles.playlistContainer}>
							<div>
								<div>
									<p>Jazz</p>
								</div>
								<h3>Jazz Fruits Music 🎺 - Lofi Hip Hop/Jazz Beats</h3>
								<a
									target="_blank"
									href="https://www.youtube.com/playlist?list=PL6fhs6TSspZs8DY0KMvEmsbGFCZrg3n_T"
									rel="noreferrer"
								>
									see all songs here
								</a>
							</div>
							<div className={playlistStyles.playlistImageContainer}></div>
						</div>
						<div className={playlistStyles.playlistContainer}>
							<div>
								<div>
									<p>Sleepy</p>
								</div>
								<h3>lofi hip hop radio - beats to sleep/chill to</h3>
								<a
									target="_blank"
									href="https://www.youtube.com/playlist?list=PLofht4PTcKYkwt9NTxtpfw8VPllgfe-sm"
									rel="noreferrer"
								>
									see all songs here
								</a>
							</div>
							<div className={playlistStyles.playlistImageContainer}></div>
						</div>

						<div className={playlistStyles.mobilePlaylistContainer}>
							<div className={playlistStyles.playlistImageContainer}></div>
							<div className={playlistStyles.playlistTextContainer}>
								<div>
									<p>Sleepy</p>
								</div>
								<h3>lofi hip hop radio - beats to sleep/chill to</h3>
								<a
									target="_blank"
									href="https://www.youtube.com/playlist?list=PLofht4PTcKYkwt9NTxtpfw8VPllgfe-sm"
									rel="noreferrer"
								>
									see all songs here
								</a>
							</div>
						</div>
						<div className={playlistStyles.mobilePlaylistContainer}>
							<div className={playlistStyles.playlistImageContainer}></div>
							<div className={playlistStyles.playlistTextContainer}>
								<div>
									<p>Sleepy</p>
								</div>
								<h3>lofi hip hop radio - beats to sleep/chill to</h3>
								<a
									target="_blank"
									href="https://www.youtube.com/playlist?list=PLofht4PTcKYkwt9NTxtpfw8VPllgfe-sm"
									rel="noreferrer"
								>
									see all songs here
								</a>
							</div>
						</div>
						<div className={playlistStyles.mobilePlaylistContainer}>
							<div className={playlistStyles.playlistImageContainer}></div>
							<div className={playlistStyles.playlistTextContainer}>
								<div>
									<p>Sleepy</p>
								</div>
								<h3>lofi hip hop radio - beats to sleep/chill to</h3>
								<a
									target="_blank"
									href="https://www.youtube.com/playlist?list=PLofht4PTcKYkwt9NTxtpfw8VPllgfe-sm"
									rel="noreferrer"
								>
									see all songs here
								</a>
							</div>
						</div>
					</section>
				</section>
				<section className={styles.preview}>
					<section>
						<div>
							<div className={playlistStyles.linkContainer}>
								<h1>do you have any playlist suggestions?</h1>
								<p>tell us your idea </p>
								<a href="/">here</a>
								<p>.</p>
							</div>
						</div>
					</section>
				</section>
			</main>
			<Footer />
		</>
	);
}
