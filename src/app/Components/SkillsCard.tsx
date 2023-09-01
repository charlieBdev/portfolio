interface SkillsCardProps {
  topic: string;
  skills: string[];
}

const SkillsCard: React.FC<SkillsCardProps> = ({ topic, skills }) => {
  return (
    <div className="rounded-lg p-3 pt-1 w-full h-44 text-sm sm:w-auto shadow hover:shadow-lg">
        <p className="text-center text-lg text-green-500 p-1">{topic}</p>
        <ul className="text-md space-y-1">
            {skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
        </ul>
    </div>
  )
}

export default SkillsCard