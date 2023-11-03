'use client';

import icons from '@/data/iconsArr';
import IconCard from './IconCard';

const IconsList = () => {
	return (
		<div className='carousel carousel-center justify-center gap-3 p-3 lg:gap-6 rounded-lg shadow hover:shadow-xl'>
			{icons.map((icon) => (
				<IconCard key={icon.name} name={icon.name} svg={icon.svg} />
			))}
		</div>
	);
};

export default IconsList;
