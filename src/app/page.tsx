import Image from "next/image";
import bg from "../../public/bg.jpg"

export default function Home() {

  return (
    <main className="flex flex-col h-screen justify-center bg-neutral-950">
      <Image
        src={bg}
        // width={500}
        // height={500}
        alt="Luminous Eat Sleep Code Repeat text displayed on a phone being held in a dark room"
        className="max-h-full object-scale-down mx-auto"
        priority={true}
        placeholder = 'blur'
      />
      {/* <p className="text-sm text-right text-neutral-700 mr-3">
        Photo by <a href="https://unsplash.com/@synkevych?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Roman Synkevych
        </a>
         on <a href="https://unsplash.com/photos/vXInUOv1n84?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p> */}
    </main>
  )
}
