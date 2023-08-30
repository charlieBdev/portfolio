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
    <article className="border rounded-lg flex flex-col items-center p-3 space-y-3 m-w-xl">
        <h2 className="text-green-400">{name}</h2>
        <Image
            src="https://images.unsplash.com/photo-1636654129379-e7ae6f30bfd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29taW5nJTIwc29vbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width={300}
            height={600}
            alt="Project Image"
            loading="lazy"  
            className="rounded-lg"  
        />
        <p className="text-left px-6">{desc}</p>
        <div>
            <ul className="flex flex-wrap gap-3">
                {tags.map(tag => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        </div>
        <Link href={btnLink}>
            <Button btnText={btnText} />
        </Link>
    </article>
  )
}

export default ProjectCard