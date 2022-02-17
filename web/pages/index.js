import Head from 'next/head';
import malarkey from 'malarkey';
import styles from '../styles/home.module.scss';
import { useEffect, useRef } from 'react';
import {
	BsCloudDownloadFill,
	BsGithub,
	BsFillHouseDoorFill,
	BsWindows,
	BsFileMusicFill,
} from 'react-icons/bs';
import { GiVampireDracula } from 'react-icons/gi';
import { SiSupabase } from 'react-icons/si';
import { FiChevronsLeft } from 'react-icons/fi';
import { CgArrowsShrinkH, CgPlayList } from 'react-icons/cg';
import Player from '../components/Player/Player';
import { motion } from 'framer-motion';

export default function Home() {
	const constraintsRef = useRef(null);
	const showWindowButton = useRef(null);

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

	const showWindow = () => {
		document.getElementById('menu-container').style.right = 'auto';
		document.getElementById('menu-container').style.display = 'block';
		document.getElementById('showWindow').style.display = 'none';
	};

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
							<BsWindows size={25} />
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
						<div className={styles.showWindowContainer}>
							<div className={styles.hideWindow} id="showWindow">
								<button ref={showWindowButton} onClick={showWindow}>
									<FiChevronsLeft size={30} />
								</button>
							</div>
						</div>
						<motion.div
							drag
							dragConstraints={constraintsRef}
							className={styles.menuContainer}
							id="menu-container"
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
							<CgArrowsShrinkH size={30} />
							<h3>hide whenever you want</h3>
							<p>
								you can hide window to <span>avoid distractions</span>
							</p>
							<a href="/">learn how to use</a>
						</div>
					</div>
					<div>
						<div>
							<CgPlayList size={30} />
							<h3>choose your mood</h3>
							<p>
								3 options based on <span>popular lofi playlists</span> from
								youtube
							</p>
							<a href="/">learn more about playlists</a>
						</div>
					</div>
					<div>
						<div>
							<BsGithub size={30} />
							<h3>open Source</h3>
							<p>
								built with popular <span>javascript</span> frameworks, libraries
								and tools
							</p>
							<a href="/">learn more about the creation process</a>
						</div>
					</div>
				</section>
				<section className={styles.upcomingFeatures}>
					<div>
						<h1>upcoming features</h1>
						<p>stay in touch! give us your e-mail </p>
						<a href="/">here</a>
						<p>.</p>
					</div>
				</section>
				<section className={styles.featureItems}>
					<div>
						<div>
							<BsFileMusicFill size={30} />
							<h3>new playlists</h3>
							<ul>
								<li>piano lofi</li>
								<li>anime lofi</li>
								<li>games lofi</li>
							</ul>
							<a href="/" className={styles.upcomingAnchor}>
								contribute here
							</a>
						</div>
					</div>
					<div>
						<div>
							<SiSupabase size={30} />
							<h3>new background noises</h3>
							<ul>
								<li>thunders</li>
								<li>ocean</li>
								<li>forest</li>
							</ul>
							<a href="/" className={styles.upcomingAnchor}>
								contribute here
							</a>
						</div>
					</div>
					<div>
						<div>
							<GiVampireDracula size={30} />
							<h3>themes</h3>
							<ul>
								<li>
									<a href="/">dracula</a>
								</li>
								<li>
									<a href="/">omni</a>
								</li>
								<li>
									<a href="/">aura</a>
								</li>
							</ul>
							<a href="/" className={styles.upcomingAnchor}>
								contribute here
							</a>
						</div>
					</div>
				</section>
			</section>
		</div>
	);
}
