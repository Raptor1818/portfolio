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
            draggable={false}
            className='object-contain rounded-lg select-none'
          />
        </AspectRatio>
        <CardTitle className='text-xl'>{title}</CardTitle>
        <CardDescription>{tools}</CardDescription>
      </CardHeader>

      <CardContent>
        <p>{desc}</p>
      </CardContent>

      <CardFooter className='flex flex-row gap-4'>
        {linkButton}
      </CardFooter>
    </Card>
  )
}

export default ProjectCard