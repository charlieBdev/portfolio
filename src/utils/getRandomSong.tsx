export default function getRandomSong() {
	const songs = [
		"https://www.youtube.com/watch?v=RcvZxTiy9Ss",
		"https://www.youtube.com/watch?v=efdcTEAhLkE",
		"https://www.youtube.com/watch?v=UvIjTP57ByE",
		"https://www.youtube.com/watch?v=Y_Xcp5Ek7yU",
	];
	const randomNum = Math.round(Math.random() * songs.length);
	return songs[randomNum];
}
