import React from 'react';

interface ButtonProps {
	btnText: string;
}

const Button: React.FC<ButtonProps> = ({ btnText }) => {
	return (
		<button
			className='text-center border-2 border-cyan-400 py-2 px-4 rounded-full shadow hover:shadow-lg hover:animate-pulse'
			type='submit'
		>
			{btnText}
		</button>
	);
};

export default Button;
