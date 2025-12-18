import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { AspectRatio } from '../ui/aspect-ratio';

import Image from 'next/image';

import type { ProjectType } from '@/lib/lists/project-list';


const ProjectCard = ({ title, desc, tools, linkButton, img }: ProjectType) => {
  return (
    <Card className='w-full max-w-2xl border-none hover:bg-secondary transition-colors shadow-xl'>
      <CardHeader>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={img}
            fill
            alt={title}
            className='object-contain rounded-lg'
          />
        </AspectRatio>
        <CardTitle className='text-xl'>{title}</CardTitle>
        <CardDescription>{tools}</CardDescription>
      </CardHeader>

      <CardContent>
        <p>{desc}</p>
      </CardContent>

      <CardFooter>
        {linkButton}
      </CardFooter>
    </Card>
  )
}

export default ProjectCard