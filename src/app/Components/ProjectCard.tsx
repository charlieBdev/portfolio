import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import SoundWavesOcean from "../../../public/SoundWaves/SoundWavesOcean.png"
import Button from './Button'

interface ProjectCardProps {
    name: string;
    desc: string;
    imgURL: string;
    tags: string[];
    btnText: string;
    btnLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, desc, imgURL, tags, btnText, btnLink }) => {
  return (
    <article className="rounded-lg flex flex-col p-3 space-y-3 shadow hover:shadow-lg">
        <div className="space-y-3 flex flex-col items-center">
					<Image
							src={imgURL}
							width={200}
							height={400}
							alt={name}
							loading="lazy"  
							className="rounded-lg shadow-lg w-auto h-auto"
					/>
          <h3 className="text-green-500 text-lg">{name}</h3>
					<p className="text-left">{desc}</p>
					<ul className="flex flex-wrap gap-1">
							{tags.map(tag => (
									<li key={tag} className="border border-neutral-400 rounded-lg text-neutral-400 font-light text-sm px-1 hover:animate-pulse">{tag}</li>
							))}
					</ul>
        </div>
        <div className="m-auto">
            <Link href={btnLink} target="_blank">
                <Button btnText={btnText}/>
            </Link>
        </div>
    </article>
  )
}

export default ProjectCard