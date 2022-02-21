import {
	FaAngleDoubleLeft,
	FaAngleDoubleRight,
	FaAngleDown,
	FaAngleUp,
	FaPlay,
	FaVolumeUp,
	FaRandom,
} from 'react-icons/fa';
import { CgArrowsShrinkH } from 'react-icons/cg';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import styles from './styles.module.scss';
import { useState } from 'react';
import Menu from './Menu';

function Player() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		if (isOpen === false) {
			document.getElementById('toggler').style.display = 'flex';
			document.getElementById('closeMenuButton').style.display = 'inline';
			document.getElementById('openMenuButton').style.display = 'none';
		} else {
			document.getElementById('toggler').style.display = 'none';
			document.getElementById('closeMenuButton').style.display = 'none';
			document.getElementById('openMenuButton').style.display = 'inline';
		}
		setIsOpen(!isOpen);
	};

	const hideWindow = () => {
		document.getElementById('menu-container').style.display = 'none';
		document.getElementById('showWindow').style.display = 'flex';
	};

	return (
		<div className={styles.playerContainer}>
			<div className={styles.player}>
				<div className={styles.titleContainer}>
					<Tooltip placement="top" title="click and hold to grab window">
						<p>WYS – Snowman</p>
					</Tooltip>
					<Tooltip placement="top" title="click me to hide window">
						<button onClick={hideWindow}>
							<CgArrowsShrinkH />
						</button>
					</Tooltip>
				</div>
				<div className={styles.audioContainer}>
					<div>
						<Tooltip placement="top" title="previous beat">
							<button>
								<FaAngleDoubleLeft />
							</button>
						</Tooltip>
						<Tooltip
							placement="top"
							title="play/pause"
							className={styles.tooltip}
						>
							<button>
								<FaPlay />
							</button>
						</Tooltip>
						<Tooltip placement="top" title="next beat">
							<button>
								<FaAngleDoubleRight />
							</button>
						</Tooltip>
						<Tooltip placement="top" title="randomize beat">
							<button>
								<FaRandom size={15} />
							</button>
						</Tooltip>
					</div>
					<Box className={styles.volumeContainer}>
						<FaVolumeUp size={20} />
						<Tooltip placement="top" title="increase/ decrease volume">
							<Slider
								size="small"
								aria-label="volume"
								// valueLabelDisplay="auto"
								value={50}
							/>
						</Tooltip>
						<Tooltip placement="top" title="click me to open/ close menu">
							<button>
								<FaAngleDown
									onClick={toggleMenu}
									id="openMenuButton"
									className={styles.openMenuButton}
								/>
								<FaAngleUp
									onClick={toggleMenu}
									id="closeMenuButton"
									className={styles.closeMenuButton}
								/>
							</button>
						</Tooltip>
					</Box>
				</div>
			</div>
			<Menu />
		</div>
	);
}

export default Player;
