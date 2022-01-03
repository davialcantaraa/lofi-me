import { useState } from 'react';
import { BsHeartFill, BsGithub } from 'react-icons/bs';
import Support from '../Support';
import './styles.scss';

function Footer() {
	const [isSupportOpen, setIsSupportOpen] = useState(true);

	const toggleSupport = () => {
		if (isSupportOpen === true) {
			document.getElementById('support').style.display = 'flex';
		} else {
			document.getElementById('support').style.display = 'none';
		}
		setIsSupportOpen(!isSupportOpen);
	};
	return (
		<>
			<div id="footer">
				<div>
					<p>☕ Lofi.me</p>
					<div>
						<BsHeartFill onClick={toggleSupport} />
						<BsGithub />
					</div>
				</div>
			</div>
			<Support />
		</>
	);
}

export default Footer;
