import React from 'react'

import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { FaItchIo, FaGithub } from "react-icons/fa6";

type Props = {}

const index = (_props: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-9xl">Francesco Nisi</h1>
      <h2>🇮🇹 · Game Dev · Web Dev</h2>
      <div className="flex flex-row gap-2">
        <Button variant="download">Resume <Download /></Button>
        <Button variant="github"><FaGithub /> Github <ExternalLink /></Button>
        <Button variant="itch"><FaItchIo />Itch.io <ExternalLink /></Button>
      </div>
    </div>
  )
}

export default index