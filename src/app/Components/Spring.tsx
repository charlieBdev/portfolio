import { animated, useSpring } from "@react-spring/web"
import { String } from "aws-sdk/clients/batch"


// export default function Spring(target: String) {
export default function Spring() {

  const styles = useSpring({
    loop: { reverse: true },
    from: { opacity: 1 },
    to: { opacity: 0 },
    delay: 500
  })

  return (
    <animated.p
      style={styles}
    >
      _
    </animated.p>
  )
}
