import './styles.scss';
import { SiKofi } from 'react-icons/si';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { IoMdShirt } from 'react-icons/io';

function Support() {
	return (
		<div id="support">
			<div className="support-wrapper">
				<h3>Support me!</h3>
				<div className="support-icons-container">
					<div className="support-content">
						<a href="/">
							<SiKofi />
							<h4>Donation</h4>
						</a>
					</div>
					<div className="support-content">
						<a href="/">
							<MdOutlineAttachMoney />
							<h4>Ads</h4>
						</a>
					</div>
					<div className="support-content">
						<a href="/">
							<IoMdShirt />
							<h4>Merch</h4>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Support;
