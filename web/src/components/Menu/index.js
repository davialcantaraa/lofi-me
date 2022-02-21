/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef, useState } from 'react';
import styles from './styles.module.scss';
import useOutsideClick from '../../hooks/useOutsideClick';

import { RiCommandLine } from 'react-icons/ri';
import {
	BsGithub,
	BsPatchQuestionFill,
	BsFillPersonFill,
	BsFillFileMusicFill,
	BsHouseDoorFill,
	BsHeartFill,
} from 'react-icons/bs';
import Link from 'next/link';

function Menu() {
	const menuRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	useOutsideClick(menuRef, isOpen, setIsOpen);

	return (
		<>
			<nav className={styles.navbar} ref={menuRef}>
				<button onClick={toggleMenu}>
					<RiCommandLine size={25} />
				</button>
				<ul className={isOpen ? styles.active : undefined}>
					<li>
						<Link href="/">
							<a onClick={toggleMenu}>
								<BsHouseDoorFill />
								<p>home</p>
							</a>
						</Link>
					</li>
					<li>
						<Link href="/playlists">
							<a onClick={toggleMenu}>
								<BsFillFileMusicFill />
								<p>playlists</p>
							</a>
						</Link>
					</li>
					<li>
						<Link href="/how-to-use">
							<a onClick={toggleMenu}>
								<BsPatchQuestionFill />
								<p>how to use</p>
							</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a onClick={toggleMenu}>
								<BsFillPersonFill />
								<p>about</p>
							</a>
						</Link>
					</li>
					<li>
						<a href="/asd" onClick={toggleMenu} className={styles.support}>
							<BsHeartFill />
							<p>support</p>
						</a>
					</li>
					<li>
						<button>
							<a
								href="https://github.com/divinurised/lofi-me"
								onClick={toggleMenu}
							>
								<BsGithub />
								<p>source</p>
							</a>
						</button>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Menu;
