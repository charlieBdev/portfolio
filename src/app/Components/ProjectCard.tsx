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
    console.log(imgURL, '<<< imgURL')
  return (
    <article className="mt-3 border border-neutral-600 rounded-lg flex flex-col items-center align-start p-3 space-y-3 m-w-xl">
        <h2 className="text-green-400">{name}</h2>
        <Image
            src={imgURL}
            width={200}
            height={400}
            alt={name}
            loading="lazy"  
            className="rounded-lg"  
        />
        <p className="text-left">{desc}</p>
        <div className="flex flex-col items-center space-y-3">
            <ul className="flex flex-wrap gap-1 justify-start">
                {tags.map(tag => (
                    <li key={tag} className="border border-neutral-600 rounded-lg text-neutral-600 px-1 hover:animate-pulse">{tag}</li>
                ))}
            </ul>
            <Link href={btnLink} target="_blank">
                <Button btnText={btnText}/>
            </Link>
        </div>
        
    </article>
  )
}

export default ProjectCard