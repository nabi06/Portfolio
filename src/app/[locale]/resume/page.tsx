import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { ShineBorder } from '@/components/ui/shine-border'
import React from 'react'

const page = () => {
  return (
      <div className='flex flex-col gap-8'>
        <div className='flex justify-end'>
        <InteractiveHoverButton className=''><a href='/images/projects/project-01/Niyaz-Nabi-Resume.pdf' download='/Niyaz-Nabi-Resume.pdf'>Download</a></InteractiveHoverButton>
        </div>
        <ShineBorder
      className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
       <img src='/images/projects/project-01/resumedownload.png' className=' !h-full w-full' alt='resume'/>
      </span>
    </ShineBorder>

    </div>
  )
}

export default page