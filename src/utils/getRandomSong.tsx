export default function getRandomSong() {
    const songs = [
        "https://www.youtube.com/watch?v=S8gymPzmtZs",
        "https://www.youtube.com/watch?v=sgyNTvovQTg",
        "https://www.youtube.com/watch?v=NOG3eus4ZSo",
        "https://www.youtube.com/watch?v=SH4RnGNBNxo",
    ]
    const randomNum = Math.round(Math.random() * songs.length)
    return songs[randomNum]
}
