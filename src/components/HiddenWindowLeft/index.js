import { motion } from 'framer-motion';

import { FiChevronsRight } from 'react-icons/fi';
import './styles.scss';

function HiddenWindowLeft() {
	return (
		<div id="hiddenWindowLeft">
			<motion.button>
				<FiChevronsRight size={30} />
			</motion.button>
		</div>
	);
}

export default HiddenWindowLeft;
