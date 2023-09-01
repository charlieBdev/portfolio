export default function getRandomSong() {
    const songs = [
        "https://www.youtube.com/watch?v=Sfz9jQ3KI5k",
        "https://www.youtube.com/watch?v=S8gymPzmtZs",
        "https://www.youtube.com/watch?v=sgyNTvovQTg",
        "https://www.youtube.com/watch?v=VKF5LCHZREg",
        "https://www.youtube.com/watch?v=NOG3eus4ZSo",
        "https://www.youtube.com/watch?v=qWEtqglTVK0",
        "https://www.youtube.com/watch?v=H67uEgRZs2Y",
        "https://www.youtube.com/watch?v=49FB9hhoO6c",
        "https://www.youtube.com/watch?v=HYwNM1t9ltI",
        "https://www.youtube.com/watch?v=Mgfe5tIwOj0",
        
    ]
    const randomNum = Math.round(Math.random() * songs.length)
    return songs[randomNum]
}
