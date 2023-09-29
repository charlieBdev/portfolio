import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';

interface ProjectCardProps {
	name: string;
	desc: string;
	imgURL: string;
	tags: string[];
	btnText: string;
	btnLink: string;
	selectedTag: string;
	toggleTag: (tag: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	name,
	desc,
	imgURL,
	tags,
	btnText,
	btnLink,
	selectedTag,
	toggleTag,
}) => {
	return (
		<article className="space-y-3 rounded-lg flex flex-col align-center p-3 shadow hover:shadow-xl w-full">
			<div className="flex-grow space-y-3">
				<Image
					src={imgURL}
					width={150}
					height={300}
					alt={name}
					loading="lazy"
					className="rounded-lg shadow-lg w-2/4 mx-auto max-w-64"
				/>
				<div className="space-y-3">
					<h3 className="text-green-500 text-lg">{name}</h3>
					<p className="">{desc}</p>
					<div className="flex flex-wrap gap-1">
						{tags.map((tag) => (
							<button
								key={tag}
								onClick={() => {
									toggleTag(tag);
								}}
								className={`border border-neutral-400 rounded-lg text-neutral-400 font-light text-sm px-2 py-1 hover:shadow-lg ${
									tag === selectedTag ? 'selected' : ''
								}`}
								aria-label={tag}
							>
								{tag}
							</button>
						))}
					</div>
				</div>
			</div>
			<div className="mx-auto" aria-label={btnText}>
				<Link href={btnLink} target="_blank">
					<Button btnText={btnText} />
				</Link>
			</div>
		</article>
	);
};

export default ProjectCard;
