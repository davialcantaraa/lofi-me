import { motion } from 'framer-motion';

import { FiChevronsLeft } from 'react-icons/fi';
import './styles.scss';

function HiddenWindowRight() {
	return (
		<div id="hiddenWindowRight">
			<motion.button>
				<FiChevronsLeft size={30} />
			</motion.button>
		</div>
	);
}

export default HiddenWindowRight;
