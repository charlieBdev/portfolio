interface IconCardProps {
	name: string;
	svg: string;
}

const IconCard: React.FC<IconCardProps> = ({ name, svg }) => {
	return (
		<div
			className='carousel-item text-2xl md:text-3xl lg:text-4xl'
			data-tip={name}
		>
			<span className={svg} aria-label={name} role='img'></span>
		</div>
	);
};

export default IconCard;
