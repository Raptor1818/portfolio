import React from 'react'
import { Card } from '../ui/card'
import ProjectCard from '../ProjectCard'

type Props = {}

const index = (_props: Props) => {
  return (
    <div className="w-full justify-evenly item-center flex flex-wrap gap-y-12 md:gap-y-20" id='projects'>
      <ProjectCard title='BingoBango' tools='Godot 4, Blender' desc="ciao" date="01/01/1970"></ProjectCard>
      <ProjectCard title='BingoBango' tools='Godot 4, Blender' desc="ciao" date="01/01/1970"></ProjectCard>
      <ProjectCard title='BingoBango' tools='Godot 4, Blender' desc="ciao" date="01/01/1970"></ProjectCard>
      <ProjectCard title='BingoBango' tools='Godot 4, Blender' desc="ciao" date="01/01/1970"></ProjectCard>
      <ProjectCard title='BingoBango' tools='Godot 4, Blender' desc="ciao" date="01/01/1970"></ProjectCard>
      <ProjectCard title='BingoBango' tools='Godot 4, Blender' desc="ciao" date="01/01/1970"></ProjectCard>
      <ProjectCard title='BingoBango' tools='Godot 4, Blender' desc="ciao" date="01/01/1970"></ProjectCard>
      <ProjectCard title='BingoBango' tools='Godot 4, Blender' desc="ciao" date="01/01/1970"></ProjectCard>
    </div>
  )
}

export default index