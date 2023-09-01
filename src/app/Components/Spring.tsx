import { animated, useSpring } from "@react-spring/web"


export default function Spring() {

  const styles = useSpring({
    loop: { reverse: true },
    from: { opacity: 1 },
    to: { opacity: 0 },
    delay: 500
  })

  return (
    // <div className="text-6xl text-center flex">
    <>
      {/* <p>repeat</p> */}
      <animated.p
        style={styles}
      >
        _
      </animated.p>
    </>
  )
}
