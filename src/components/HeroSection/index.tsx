import React from 'react'

import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { FaItchIo, FaGithub } from "react-icons/fa6";

type Props = {}

const index = (_props: Props) => {
  return (
    <div className="w-full h-screen flex justify-center items-start mt-24">
      <div className='h-2/5 flex flex-col justify-between items-start'>
        <div className='flex flex-col gap-4'>
          <h1 className="text-9xl">Francesco Nisi</h1>
          <h2>🇮🇹 · Game Dev · Web Dev</h2>
        </div>
        <div className="flex flex-row gap-2">
          <Button variant="download">Resume <Download /></Button>
          <Button variant="github"><FaGithub /> Github <ExternalLink /></Button>
          <Button variant="itch"><FaItchIo />Itch.io <ExternalLink /></Button>
        </div>
      </div>
    </div>
  )
}

export default index