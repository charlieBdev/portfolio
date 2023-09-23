'use client'
import { animated, useSpring } from "@react-spring/web";
import Link from "next/link";

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
    <div className="flex flex-col items-start gap-2 select-none p-6 xl:px-24">
      <p className="text-3xl relative">
        ea
        {/* <Link href="/about" className="text-purple-300">
          a
        </Link> */}
        t
      </p>
      <p className="text-5xl relative">
        sleep
        {/* <Link href="/projects" className="text-purple-300">
          p
        </Link> */}
      </p>
      <p className="text-7xl relative">
        {/* <Link href="/contact" className="text-purple-300">
          c
        </Link> */}
        code
      </p>
      <animated.p style={flickerAnimation} className="text-9xl relative">
        Hello
      </animated.p>
      
    </div>
  );
};
