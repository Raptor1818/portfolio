import React from 'react'
import ProjectCard from '../ProjectCard'
import { GameProjectList, WebProjectList } from '@/lib/lists/project-list'

type Props = {}

const ProjectSection = (_props: Props) => {
  return (
    <div className='flex flex-col justify-start items-center gap-12 md:gap-20 pt-12 md:pt-24' id='projects'>
      <h1>Projects</h1>
      <div className='flex flex-col justify-start items-center gap-8 md:gap-12'>
        <h2>Game Jams</h2>
        <div className="w-full justify-evenly item-center flex flex-wrap gap-y-8 md:gap-y-20">
          {
            GameProjectList.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))
          }
        </div>
        <h2 className='mt-8'>Websites</h2>
        <div className="w-full justify-evenly item-center flex flex-wrap gap-y-8 md:gap-y-20">
          {
            WebProjectList.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectSection