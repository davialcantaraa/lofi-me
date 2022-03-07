import { useRef } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FiChevronsLeft } from 'react-icons/fi';
import Player from '../../components/Player/Player';
import styles from '../../styles/home.module.scss';
import howToUseStyles from './styles.module.scss';

import { CgArrowsShrinkH } from 'react-icons/cg';
import { BsCursorFill, BsExclamationTriangleFill } from 'react-icons/bs';
import Footer from '../../components/Footer';

function HowToUse() {
	const constraintsRef = useRef(null);
	const showWindowButton = useRef(null);

	const showWindow = () => {
		document.getElementById('menu-container').style.right = 'auto';
		document.getElementById('menu-container').style.display = 'block';
		document.getElementById('showWindow').style.display = 'none';
	};

	return (
		<>
			<Head>
				<title>☕lofi me | how to use</title>
			</Head>
			<main>
				<section className={styles.preview}>
					<section>
						<div>
							<h1>how to use</h1>
							<p>mouse over elements to show the description</p>
						</div>
						<motion.div
							ref={constraintsRef}
							className={styles.desktopContainer}
						>
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
						this is just an example, <a href="/">download</a> for all the
						features
					</p>
				</section>
				<section className={`${styles.preview} ${howToUseStyles.usageSection}`}>
					<section>
						<div>
							<div>
								<BsCursorFill size={30} />
								<h1>grabbing window</h1>
							</div>
							<p>
								you can grab window just by clicking and holding the song title.
							</p>
						</div>
						<div>
							<div>
								<CgArrowsShrinkH size={30} />
								<h1>hiding window</h1>
							</div>
							<p>this button will hide the window to right.</p>
						</div>
						<div>
							<div>
								<BsExclamationTriangleFill size={30} />
								<h1>if the window disappeared</h1>
							</div>
							<p>
								click in the icon in your taskbar and then click 'reset
								position'.
							</p>
						</div>
					</section>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default HowToUse;
