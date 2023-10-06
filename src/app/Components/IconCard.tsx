import { motion } from 'framer-motion';

interface IconCardProps {
	name: string;
	svg: string;
}

const IconCard: React.FC<IconCardProps> = ({ name, svg }) => {
	return (
		<motion.div
			className="text-3xl md:text-4xl lg:text-5xl tooltip tooltip-top"
			data-tip={name}
			whileHover={{ scale: 1.3 }}
		>
			<span className={svg} aria-label={name} role="img"></span>
		</motion.div>
	);
};

export default IconCard;
