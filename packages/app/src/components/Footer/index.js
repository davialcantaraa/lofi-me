import './styles.scss';
import { BsHeartFill, BsGithub } from 'react-icons/bs';

function Footer() {
	return (
		<>
			<div id="footer">
				<div>
					<p id="openWebSiteButton">☕lofi me</p>
					<div>
						<BsHeartFill id="openSupportButton" />
						<BsGithub id="openGithubButton" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
