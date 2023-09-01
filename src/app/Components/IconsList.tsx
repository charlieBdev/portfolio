import icons from "@/data/iconsArr"
import IconCard from "./IconCard"

const IconsList = () => {
  return (
    <div className="rounded-lg flex flex-wrap justify-center mt-3 shadow hover:shadow-lg dark:border dark:border-neutral-900">
        {icons.map(icon => (
            <IconCard key={icon.name} name={icon.name} svg={icon.svg} />
        ))}
    </div>
  )
}

export default IconsList
