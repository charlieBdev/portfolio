export default function getRandomSong() {
	const songs = [
		"https://www.youtube.com/watch?v=RcvZxTiy9Ss",
		"https://www.youtube.com/watch?v=efdcTEAhLkE",
	];
	const randomNum = Math.round(Math.random() * songs.length);
	return songs[randomNum];
}
