import React from 'react'

import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { FaItchIo, FaGithub } from "react-icons/fa6";
import Link from 'next/link';

type Props = {}

const index = (_props: Props) => {
  return (
    <div className="w-full h-screen flex justify-center items-start mt-24">
      <div className='h-1/3 flex flex-col justify-between items-start'>
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
      </div>
    </div>
  )
}

export default index