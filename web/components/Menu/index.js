import { Slider } from '@mui/material';
import { Box } from '@mui/system';
import { BsFillCloudRainHeavyFill } from 'react-icons/bs';
import { FaCity } from 'react-icons/fa';
import { MdLocalFireDepartment } from 'react-icons/md';
import Tooltip from '@mui/material/Tooltip';
import styles from './styles.module.scss';

function Menu() {
	return (
		<div transition={{ delay: 1 }} className={styles.menu} id="toggler">
			<div>
				<p>Background noises</p>
				<div className={styles.backgroundSoundsContainer} id="bgVolume">
					<Box className={styles.volumeContainer} sx={{ width: 200 }}>
						<BsFillCloudRainHeavyFill />
						<Tooltip title="rain noise">
							<Slider size="small" aria-label="volume" value={10} />
						</Tooltip>
					</Box>
					<Box className={styles.volumeContainer} sx={{ width: 200 }}>
						<FaCity />
						<Tooltip title="city traffic noise">
							<Slider size="small" value={50} aria-label="volume" />
						</Tooltip>
					</Box>
					<Box className={styles.volumeContainer} sx={{ width: 200 }}>
						<MdLocalFireDepartment />
						<Tooltip title="fireplace noise">
							<Slider size="small" value={30} aria-label="volume" />
						</Tooltip>
					</Box>
				</div>
			</div>
			<div className={styles.categoryContainer}>
				<Tooltip title="relax beats">
					<button className={styles.activePlaylist} id="relax">
						relax
					</button>
				</Tooltip>
				<Tooltip title="jazzy beats">
					<button id="jazz">jazz</button>
				</Tooltip>
				<Tooltip title="sleepy beats">
					<button id="sleepy">sleepy</button>
				</Tooltip>
			</div>
		</div>
	);
}

export default Menu;
