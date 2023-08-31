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
    <article className="rounded-lg flex flex-col items-center p-3  shadow hover:shadow-lg h-full">
        <div className="space-y-3">
          <h3 className="text-green-500 text-lg p1">{name}</h3>
            <Image
                src={imgURL}
                width={200}
                height={400}
                alt={name}
                loading="lazy"  
                className="rounded-lg shadow-lg"
            />
            <p className="text-left">{desc}</p>
            <ul className="flex flex-wrap gap-1">
                {tags.map(tag => (
                    <li key={tag} className="border border-neutral-400 rounded-lg text-neutral-400 font-light text-sm px-1 hover:animate-pulse">{tag}</li>
                ))}
            </ul>
        </div>
        <div className="flex flex-col space-y-3 items-center mt-auto">
            <Link href={btnLink} target="_blank" className="items-center">
                <Button btnText={btnText}/>
            </Link>
        </div>
    </article>
  )
}

export default ProjectCard