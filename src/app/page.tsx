import Image from "next/image";
import bg from "../../public/bg.jpg"
import Link from "next/link";

export default function Home() {

  return (
    <section className="flex flex-col">
      <Image
        src={bg}
        alt="Luminous Eat Sleep Code Repeat text displayed on a phone being held in a dark room"
        priority={true}
        placeholder = 'blur'
      />
      <p className="text-sm text-right text-neutral-500 mr-6">
        Photo by <Link href="https://unsplash.com/@synkevych?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Roman Synkevych
        </Link>
        on <Link href="https://unsplash.com/photos/vXInUOv1n84?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </Link>
      </p>
    </section>
  )
}
