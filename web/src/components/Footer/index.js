import styles from './styles.module.scss';
import { BsGithub, BsHeartFill } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';
import { SiKofi } from 'react-icons/si';
import Form from './Form';
import GitHubButton from 'react-github-button';
import 'react-github-button/assets/style.css';

function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				<div>
					<BsGithub size={40} />
					<h3>star & contribute</h3>
					<div className={styles.iframeContainer}>
						{/* <iframe
							src="https://ghbtns.com/github-btn.html?user=divinurised&repo=lofi-me&type=star&count=true&size=large"
							frameborder="0"
							scrolling="0"
							width="170"
							height="30"
							title="GitHub"
						></iframe>
						<iframe
							src="https://ghbtns.com/github-btn.html?user=divinurised&repo=lofi-me&type=fork&count=true&size=large"
							frameborder="0"
							scrolling="0"
							width="170"
							height="30"
							title="GitHub"
						></iframe> */}
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
						donate
						<SiKofi />
					</button>
				</div>
			</footer>
			<footer className={styles.disclaimer}>
				<p>
					<span>☕lofi me</span>, made with <span title="hope!">⭐</span> by{' '}
					<a href="/" title="<@divinurised/>">
						{' '}
						Davi Alcântara
					</a>
				</p>
			</footer>
		</>
	);
}

export default Footer;
