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
import { Button } from '../ui/button';
import Link from 'next/link';
import { FaItchIo } from 'react-icons/fa6';
import { ExternalLink } from 'lucide-react';

type Props = {
  title: string;
  desc: string;
  tools: string;
}

const index = ({ title, desc, tools }: Props) => {
  return (
    <Card className='w-full max-w-2xl border-none hover:bg-secondary transition-colors'>
      <CardHeader>
        <AspectRatio ratio={16 / 9}>
          <Image
            src="https://img.itch.zone/aW1hZ2UvMzI4MzE5OC8xOTYzNDM5OC5wbmc=/original/%2B9E%2FOG.png"
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
        <Button variant={'itch'} asChild>
          <Link href={'https://huntoor.itch.io/bloswordy'}><FaItchIo />Itch.io <ExternalLink /></Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default index