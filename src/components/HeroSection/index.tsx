import React from 'react'

import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { FaItchIo, FaGithub } from "react-icons/fa6";
import Link from 'next/link';

type Props = {}

const index = (_props: Props) => {
  return (
    <div className="w-full h-screen flex justify-center items-start mt-24">
      <div className='flex flex-col justify-between items-start gap-y-32'>
        <div className='w-full flex flex-col gap-4 text-center md:text-start'>
          <h1 className="text-4xl md:text-8xl font-gothic">Francesco Nisi</h1>
          <h2>🇮🇹 · Game Dev · Web Dev</h2>
        </div>
        <div className="w-full flex flex-row justify-center gap-2">
          {/* <Button variant="download">
            {/* TODO (add asChild   ^)*/}
          {/* <Link href="" download={"resume"}>  */}
          {/* Resume <Download /> */}
          {/* </Link> */}
          {/* </Button> */}
          <Button variant="github" asChild>
            <Link href="https://github.com/Raptor1818" target='_blank' rel="noopener noreferrer">
              <FaGithub />Github <ExternalLink />
            </Link>
          </Button>
          <Button variant="itch" asChild>
            <Link href="https://raptor1818.itch.io/" target='_blank' rel="noopener noreferrer">
              <FaItchIo />Itch.io <ExternalLink />
            </Link>
          </Button>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col animate-pulse">
          <span className="text-sm text-gray-400">Projects</span>
          <svg className="w-5 h-5 mx-auto mt-1 text-gray-400" viewBox="0 0 24 24">
            <path d="M12 16l-6-6h12z" fill="currentColor" />
          </svg>

        </div>
      </div>
    </div>
  )
}

export default index