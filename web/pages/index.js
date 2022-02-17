import Head from 'next/head';
import malarkey from 'malarkey';
import styles from '../styles/home.module.scss';
import { useEffect, useRef } from 'react';
import {
	BsCloudDownloadFill,
	BsGithub,
	BsFillCaretDownFill,
	BsFillHouseDoorFill,
} from 'react-icons/bs';
import { CgArrowsShrinkH } from 'react-icons/cg';
import Player from '../components/Player/Player';
import { motion } from 'framer-motion';

export default function Home() {
	const constraintsRef = useRef(null);
	useEffect(() => {
		const element = document.querySelector('.typewriter');
		function callback(text) {
			element.textContent = text;
		}
		const options = {
			typeSpeed: 80,
			deleteSpeed: 60,
			pauseDuration: 2000,
			repeat: true,
		};
		malarkey(callback, options)
			.type('relax')
			.pause()
			.delete()
			.type('study')
			.pause()
			.delete()
			.type('code')
			.pause()
			.delete()
			.type('game')
			.pause()
			.delete()
			.type('chill')
			.pause()
			.delete()
			.type('sleep')
			.pause()
			.delete();
	}, []);

	return (
		<div>
			<Head>
				<title>lofi me</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charset="utf-8" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<main className={styles.main}>
				<div className={styles.container}>
					<h1>
						☕lofi me<span>.</span>
					</h1>
					<p>a simple lofi player for desktop.</p>
					<p>
						beats to <span className="typewriter"></span> to
						<span>.</span>
					</p>
					<div className={styles.githubContainer}>
						<button>
							<BsCloudDownloadFill size={25} />
							Download
						</button>
						<button>
							<BsGithub size={25} />
							Source
						</button>
					</div>
				</div>
			</main>
			<section className={styles.preview}>
				{/* <BsFillCaretDownFill size={60} className={styles.goDown} /> */}
				<section>
					<div>
						<h1>simple functional player</h1>
						<p>mouse over elements to show the description</p>
					</div>
					<motion.div ref={constraintsRef} className={styles.desktopContainer}>
						<div className={styles.window}>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<motion.div
							drag
							dragConstraints={constraintsRef}
							className={styles.menuContainer}
						>
							<Player />
						</motion.div>
						<div className={styles.taskbar}>
							<div>
								<div>
									<div></div>
								</div>{' '}
								<div>
									<div></div>
									<span></span>
								</div>{' '}
								<div>
									<div></div>
								</div>{' '}
								<div>
									<div></div>
								</div>{' '}
								<div>
									<div></div>
								</div>
							</div>
						</div>
					</motion.div>
				</section>
			</section>
			<section className={`${styles.preview} ${styles.features}`}>
				{/* <BsFillCaretDownFill size={60} className={styles.goDown} /> */}
				<section>
					<div>
						<h1>simple features</h1>
						<p>
							no distractions, create your perfect vibe and become productive
						</p>
					</div>
				</section>
				<section className={styles.featureItems}>
					<div>
						<div>
							<CgArrowsShrinkH />
							<h3>hide window whenever you want</h3>
							<p>you can hide window to avoid distractions</p>
						</div>
					</div>
					<div>
						<div>
							<BsFillHouseDoorFill />
							<h3>build your perfect environment</h3>
							<p>3 playlist according to your mood</p>
							<p>3 background noises to perfect vibe</p>
						</div>
					</div>
					<div>
						<div>
							<BsGithub />
							<h3>Open Source</h3>
							<p>dsfhdkj</p>
						</div>
					</div>
				</section>
			</section>
		</div>
	);
}
