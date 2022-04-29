import { motion } from 'framer-motion';
import malarkey from 'malarkey';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { BsApple, BsFileMusicFill, BsGithub, BsWindows } from 'react-icons/bs';
import { CgArrowsShrinkH, CgPlayList } from 'react-icons/cg';
import { FaLinux } from 'react-icons/fa';
import { FiChevronsLeft } from 'react-icons/fi';
import { GiVampireDracula } from 'react-icons/gi';
import { SiSupabase } from 'react-icons/si';
import Footer from '../components/Footer';
import Player from '../components/Player/Player';
import styles from '../styles/home.module.scss';

export default function Home() {
	const constraintsRef = useRef(null);
	const showWindowButton = useRef(null);
	const [userOS, setUserOS] = useState('win');

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

	useEffect(() => {
		if (window.navigator.platform.includes('linux')) {
			setUserOS('linux');
		}
		if (window.navigator.platform.includes('mac')) {
			setUserOS('mac');
		}
	}, []);

	console.log(userOS);

	return (
		<>
			<Head>
				<title>lofi me</title>
			</Head>
			<main className={styles.main}>
				<div className={styles.container}>
					<h1>☕lofi me</h1>
					<p>a simple lofi player for desktop.</p>
					<p>
						beats to <span className="typewriter"></span> to
						<span>.</span>
					</p>
					<div className={styles.githubContainer}>
						<a
							href="https://github.com/divinurised/lofi-me/releases"
							target="_blank"
							rel="noreferrer"
						>
							<button>
								{userOS === 'linux' ? (
									<FaLinux size={25} />
								) : userOS === 'mac' ? (
									<BsApple size={25} />
								) : (
									<BsWindows size={25} />
								)}
								download
							</button>
						</a>
						<a
							href="https://github.com/divinurised/lofi-me"
							target="_blank"
							rel="noreferrer"
						>
							<button className={styles.sourceButton}>
								<BsGithub size={25} />
								source
							</button>
						</a>
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
				<p className={styles.disclaimer}>
					this is just an example,{' '}
					<a
						href="https://github.com/divinurised/lofi-me/releases"
						target="_blank"
						ref="noreferrer"
					>
						download
					</a>{' '}
					for all the features
				</p>
			</section>
			<section className={`${styles.preview} ${styles.features}`}>
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
							<Link href="/how-to-use">
								<a>learn how to use</a>
							</Link>
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
							<Link href="/playlists">
								<a>learn more about playlists</a>
							</Link>
						</div>
					</div>
					<div>
						<div>
							<BsGithub size={30} />
							<h3>open source</h3>
							<p>
								built with popular <span>javascript</span> frameworks, libraries
								and tools
							</p>
							<Link href="/about">
								<a>learn more about the creation process</a>
							</Link>
						</div>
					</div>
				</section>
				<section className={styles.upcomingFeatures}>
					<div>
						<h1>upcoming features</h1>
						<p>stay in touch! give us your e-mail </p>
						<a href="#newsletter">here</a>
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
							<a
								href="https://github.com/divinurised/lofi-me/blob/main/CONTRIBUTING.md"
								className={styles.upcomingAnchor}
							>
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
							<a
								href="https://github.com/divinurised/lofi-me/blob/main/CONTRIBUTING.md"
								className={styles.upcomingAnchor}
							>
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
									<a
										target="_blank"
										rel="noreferrer"
										href="https://github.com/dracula/dracula-theme"
									>
										dracula
									</a>
								</li>
								<li>
									<a
										target="_blank"
										href="https://github.com/getomni/omni"
										rel="noreferrer"
									>
										omni
									</a>
								</li>
								<li>
									<a
										target="_blank"
										href="https://github.com/daltonmenezes/aura-theme"
										rel="noreferrer"
									>
										aura
									</a>
								</li>
							</ul>
							<a
								href="https://github.com/divinurised/lofi-me/blob/main/CONTRIBUTING.md"
								className={styles.upcomingAnchor}
							>
								contribute here
							</a>
						</div>
					</div>
				</section>
			</section>
			<Footer />
		</>
	);
}
