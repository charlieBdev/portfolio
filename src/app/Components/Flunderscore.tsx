"use client"

import { animated, useSpring } from "@react-spring/web"


export default function Flunderscore() {

  const styles = useSpring({
    loop: { reverse: true },
    from: { opacity: 1 },
    to: { opacity: 0 },
    delay: 500
  })

  return (
        <animated.p
          style={styles}
          className="text-6xl"
        >
          _
        </animated.p>
  )
}
