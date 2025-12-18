import React from 'react'
import ProjectCard from '../ProjectCard'
import { GameProjectList } from '@/lib/lists/project-list'

type Props = {}

const ProjectSection = (_props: Props) => {
  return (
    <div className='flex flex-col justify-start items-center gap-12 md:gap-20 pt-12 md:pt-24' id='projects'>
      <h1>Projects</h1>
      <div className='flex flex-col justify-start items-center gap-6 md:gap-12'>
        <h2>Game Jams</h2>
        <div className="w-full justify-evenly item-center flex flex-wrap gap-y-12 md:gap-y-20">
          {
            GameProjectList.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectSection