interface SkillsCardProps {
  topic: string;
  skills: string[];
}

const SkillsCard: React.FC<SkillsCardProps> = ({ topic, skills }) => {
  return (
    <div className="rounded-lg p-3 pt-2 w-full h-44 text-sm shadow hover:shadow-lg dark:border dark:border-neutral-900">
        <p className="text-center text-lg text-green-500 p-1">{topic}</p>
        <ul className="text-md space-y-1 text-center">
            {skills.map(skill => (
              <li key={skill} className="">{skill}</li>
            ))}
        </ul>
    </div>
  )
}

export default SkillsCard