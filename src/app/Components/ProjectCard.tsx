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
    <article className="space-y-3 rounded-lg flex flex-col align-center p-3 shadow dark:border dark:border-neutral-800">
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
          <ul className="flex flex-wrap gap-1">
            {tags.map(tag => (
              <li key={tag} className="border border-neutral-400 rounded-lg text-neutral-400 font-light text-sm px-1">{tag}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto">
        <Link href={btnLink} target="_blank">
          <Button btnText={btnText} />
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard