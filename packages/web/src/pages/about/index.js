import Head from 'next/head';
import Footer from '../../components/Footer';
import styles from '../../styles/home.module.scss';
import aboutStyles from './styles.module.scss';

function About() {
	return (
		<>
			<Head>
				<title>lofi me | about</title>
			</Head>
			<main>
				<section className={`${styles.preview} ${aboutStyles.container}`}>
					<section>
						<div>
							<h1>☕lofi me</h1>
							<p>a simple lofi player for desktop</p>
						</div>
					</section>
					<section className={aboutStyles.text}>
						<h1>Origin Story</h1>
						<p>
							lofi has always been a part of my life, I remember coming home
							from high school and putting on
							<span> lofi playlists </span>
							while I spent all afternoon
							<span> playing games or chatting with my friends on skype.</span>
						</p>
						<p>
							I've always been happy for lofi to be a part of not only the gamer
							community but also the <span> programmers community</span>, in a
							way these worlds are interconnected, it's great to be part of this
							community!
						</p>
						<p>
							<strong>December 21th, 2021</strong> - It was a productive year, I
							was on vacation and a little bored to be honest, so I decided to
							practice some <span>programming skills</span>, as usual,{' '}
							<span> listening to lofi</span>. But I was tired of always having
							to leave a <span> youtube tab open in my browser</span>,{' '}
							<span> or even connected to a discord channel</span>.
						</p>
						<p>
							So I decided to create <span> an app that meets this need</span>,
							where I don't have to worry about browser tabs consuming my RAM,
							or even being stuck with discord channels. It would be a simple
							project, I could keep it for personal use, but maybe it would be a
							great option to practice my knowledge and share with friends and
							the community, so I put some things lol...
						</p>
						<p>I hope the app is as useful to you as it is to me.</p>
					</section>
				</section>
				<Footer />
			</main>
		</>
	);
}

export default About;
