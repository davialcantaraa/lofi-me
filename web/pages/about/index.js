import Head from 'next/head';
import Footer from '../../components/Footer';
import styles from '../../styles/home.module.scss';
import aboutStyles from './styles.module.scss';

function About() {
	return (
		<>
			<Head>
				<title>☕lofi me | about</title>
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
							lofi sempre fez parte da minha vida, lembro de voltar pra casa nas
							aulas do ensino médio e colocar{' '}
							<span>playlists de lofi pra tocar </span>
							enquanto passava a tarde toda{' '}
							<span>jogando ou conversando com meus amigos no skype.</span>
						</p>
						<p>
							Sempre fiquei feliz por lofi fazer parte não só da comunidade
							gamer mas também da <span>comunidade de programadores</span>, de
							certa forma esses mundos estão interligados, é muito bom fazer
							parte dessa comunidade!
						</p>
						<p>
							<strong>Dezembro 21th, 2021</strong> - foi um ano produtivo, eu
							estava de férias e um pouco entediado pra falar a verdade, então
							decidi praticar alguns <span>conhecimentos em programação</span>,
							como sempre, <span>ouvindo lofi</span>. Porém eu tava cansado de
							sempre precisar deixar uma{' '}
							<span>aba do youtube aberta no meu navegador</span>, ou até mesmo
							<span> conectado em algum canal do discord</span>.
						</p>
						<p>
							Então eu decidi criar{' '}
							<span>
								um app que supra essa necessidade, onde não preciso me preocupar
								com abas no navegar consumindo minha memória RAM, ou até mesmo
								ficar preso a canais no discord
							</span>
							. Seria um projeto simples, eu poderia mantê-lo para uso pessoal,
							porém talvez seria uma ótima opção para praticar meus
							conhecimentos e <span>compartilhar amigos e a comunidade</span>,
							então coloquei algumas <span>perfumarias rs</span>...
						</p>
						<p>
							Espero que o app seja <span>útil para você</span> da mesma forma
							que está sendo <span>útil pra mim</span>.
						</p>
						<p>Se de algum modo te ajudei, considere fazer uma doação.</p>
					</section>
				</section>
				<Footer />
			</main>
		</>
	);
}

export default About;
