import { BsHeartFill, BsGithub } from 'react-icons/bs';
import './styles.scss';

function Footer() {
	return (
		<div className="footer">
			<div>
				<p>☕ Lofi.me</p>
				<div>
					<BsHeartFill />
					<BsGithub />
				</div>
			</div>
		</div>
	);
}

export default Footer;
