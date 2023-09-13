interface IconCardProps {
	name: string;
	svg: string;
}

const IconCard: React.FC<IconCardProps> = ({ name, svg }) => {
	return (
		<div
			className="text-3xl md:text-4xl lg:text-5xl tooltip tooltip-top"
			data-tip={name}
		>
			<i className={svg} aria-label={name}></i>
		</div>
	);
};

export default IconCard;
