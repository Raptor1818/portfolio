import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { FaGithub, FaGlobe, FaItchIo } from 'react-icons/fa6';
import { ExternalLink } from 'lucide-react';

type Props = {
  link: string;
  variant: 'itch' | 'github' | 'website'
}

const VariableLinkButton = ({ link, variant }: Props) => {
  return (
    <Button variant={variant} asChild>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        {
          variant === 'itch' &&
          <>
            <FaItchIo />
            Itch.io
          </>
        }
        {
          variant === 'github' &&
          <>
            <FaGithub />
            Github
          </>
        }
        {
          variant === 'website' &&
          <>
            <FaGlobe />
            Website
          </>
        }

        <ExternalLink />
      </Link>
    </Button>
  )
}

export default VariableLinkButton