interface IconCardProps {
	name: string;
	svg: string;
}

const IconCard: React.FC<IconCardProps> = ({ name, svg }) => {
	return (
		<div
			className="md:text-5xl lg:text-6xl p-3 rounded-lg tooltip tooltip-top"
			data-tip={name}
		>
			<i className={svg} aria-label={name}></i>
		</div>
	);
};

export default IconCard;
