"use client"
import { animated, useSpring } from "@react-spring/web"
import Link from "next/link"


export const MainText = () => {

  const getRandomDelay = () => Math.floor(Math.random() * 1000) + 500; // Adjust delay range as needed

  const flickerAnimation = useSpring({
    to: async (next) => {
      while (true) {
        await next({ opacity: 0.3 });
        await next({ opacity: 1 });
        await next({ opacity: 0.6 });
        await next({ opacity: 1 });
        await next({ opacity: 0.4 });
        await next({ opacity: 1 });
        await next({ opacity: 0.5 });
        await next({ opacity: 1 });
        await next({ opacity: 0.7 });
        await next({ opacity: 1 });

        await new Promise((resolve) => setTimeout(resolve, getRandomDelay()));
      }
    },
    from: { opacity: 1 },
    config: { tension: 200, friction: 10 },
  });
  
  return (
    <>
      <p className="text-6xl text-center relative select-none">
				e
				<Link href="/about" className="text-purple-300">
					a
				</Link>
				t
			</p>
			<p className="text-6xl text-center relative select-none">
				slee
				<Link href="/projects" className="text-purple-300">
					p
				</Link>
			</p>
			<p className="text-6xl text-center relative select-none">
				<Link href="/contact" className="text-purple-300">
					c
				</Link>
				ode
			</p>
			<animated.p className="text-6xl text-center relative select-none" style={flickerAnimation}>
				repe
				{/* <Link onClick={handleClick} href="/" className="text-purple-300">
					e
				</Link> */}
				at
			</animated.p>
			{/* <p className="text-6xl text-center">repeat</p> */}
    </>
  )
}
