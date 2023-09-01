export default function getRandomSong() {
    const songs = [
        "https://www.youtube.com/watch?v=Sfz9jQ3KI5k",
        "https://www.youtube.com/watch?v=S8gymPzmtZs",
        "https://www.youtube.com/watch?v=sgyNTvovQTg",
        "https://www.youtube.com/watch?v=VKF5LCHZREg"
    ]
    const randomNum = Math.round(Math.random() * songs.length)
    return songs[randomNum]
}