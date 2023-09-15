interface SkillsCardProps {
	topic: string;
	skills: string[];
	svg: JSX.Element;
}

export const SkillsCard: React.FC<SkillsCardProps> = ({
	topic,
	skills,
	svg,
}) => {
	return (
		<div className="p-3 pt-2 w-full h-44 text-sm rounded-lg shadow dark:border dark:border-neutral-800 hover:shadow-xl">
			<div className="flex flex-row items-center justify-center text-green-500">
				{svg}
				<p className="text-lg text-green-500 p-1">{topic}</p>
			</div>
			<ul className="text-md space-y-1 text-center">
				{skills.map((skill) => (
					<li key={skill} className="">
						{skill}
					</li>
				))}
			</ul>
		</div>
	);
};
