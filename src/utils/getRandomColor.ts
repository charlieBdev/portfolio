export default function getRandomColor() {
	const colors = [
		'244, 114, 182',
		// cyan
		'34, 211, 238',
		// emerald
		// '16, 185, 129',
		'250, 204, 21',
		'251, 146, 60',
		// purple
		'216, 180, 254',
		// green
		'34, 197, 94',
		// '255, 255, 255',
		// '0, 0, 0',
	];
	const randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
}
