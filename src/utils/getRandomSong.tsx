export default function getRandomSong() {
    const songs = [
        "https://www.youtube.com/watch?v=Sfz9jQ3KI5k",
        "https://www.youtube.com/watch?v=S8gymPzmtZs",
        "https://www.youtube.com/watch?v=sgyNTvovQTg",
        "https://www.youtube.com/watch?v=VKF5LCHZREg",
        "https://www.youtube.com/watch?v=NOG3eus4ZSo",
        "https://www.youtube.com/watch?v=SH4RnGNBNxo",
        "https://www.youtube.com/watch?v=Ds0jtuyslbI",
        "https://www.youtube.com/watch?v=kBOaLjtR4mw",
        "https://www.youtube.com/watch?v=BI2Et19vDCM"
    ]
    const randomNum = Math.round(Math.random() * songs.length)
    return songs[randomNum]
}
