import GitHubButton from 'react-github-button';
import 'react-github-button/assets/style.css';
import { BsGithub, BsHeartFill } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';
import { SiKofi } from 'react-icons/si';
import Form from './Form';
import styles from './styles.module.scss';

function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				<div>
					<BsGithub size={40} />
					<h3>star & contribute</h3>
					<div className={styles.iframeContainer}>
						<GitHubButton
							type="stargazers"
							size="large"
							namespace="divinurised"
							repo="lofi-me"
						/>
						<GitHubButton
							type="forks"
							size="large"
							namespace="divinurised"
							repo="lofi-me"
						/>
					</div>
					<p>contributions is always welcome</p>
				</div>
				<div>
					<IoMail size={40} />
					<h3>stay in touch</h3>
					<div className={styles.formContainer} id="newsletter">
						<Form />
					</div>
				</div>
				<div>
					<BsHeartFill size={40} />
					<h3>support</h3>
					<p>if somehow we help you</p>
					<button>
						<a
							href="https://ko-fi.com/divinurised"
							target="_blank"
							rel="noreferrer"
						>
							donate
							<SiKofi />
						</a>
					</button>
				</div>
			</footer>
			<footer className={styles.disclaimer}>
				<p>
					<span>☕ lofi me</span>, made with <span title="hope!">⭐</span> by{' '}
					<a
						href="https://github.com/divinurised"
						title="<@divinurised/>"
						target="_blank"
						rel="noreferrer"
					>
						{' '}
						Davi Alcântara
					</a>
				</p>
			</footer>
		</>
	);
}

export default Footer;
