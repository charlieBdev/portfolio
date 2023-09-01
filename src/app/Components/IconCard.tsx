interface IconCardProps {
    name: string;
    svg: string;
}

const IconCard: React.FC<IconCardProps> = ({ name, svg }) => {
  return (
    <div className="text-4xl md:text-5xl lg:text-6xl p-3 rounded-lg hover:shadow-lg">
        <i className={svg} aria-label={name}></i>
    </div>
  )
}

export default IconCard
