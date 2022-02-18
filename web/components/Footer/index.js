import styles from './styles.module.scss';
import { BsGithub } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';
import Form from './Form';

function Footer() {
	return (
		<footer className={styles.footer}>
			<div>
				<BsGithub size={40} />
				<h3>star & contribute</h3>
				<p>asdfasdf</p>
			</div>
			<div>
				<IoMail size={40} />
				<div className={styles.formContainer}>
					<Form />
				</div>
			</div>
			<div>
				<BsGithub size={40} />
				<h3>star & contribute</h3>
				<p>asdfasdf</p>
			</div>
		</footer>
	);
}

export default Footer;
