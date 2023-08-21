import Image from "next/image";
import bg from "../../public/bg.jpg"

export default function Home() {

  return (
    <main className="flex-grow">
        <Image
          src={bg}
          // width={500}
          // height={500}
          alt="Picture of the author"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <p className="text-sm text-right text-neutral-800">Photo by <a href="https://unsplash.com/@synkevych?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Roman Synkevych</a> on <a href="https://unsplash.com/photos/vXInUOv1n84?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
    </main>
  )
}
