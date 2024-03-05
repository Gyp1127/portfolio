"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {

  const { ref } = useSectionInView("About")

  return (
    <motion.section
        className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.175}}
        id="about"
        ref={ref}>
        <SectionHeading>
        About Me
        </SectionHeading>

        <p className="mb-3">Having attended my first hackathon in University, I continued on to host a range of accessible educational and competitive events catering to students interested in learning about the world of tech and seasoned hackers looking for a challenge. I also lent my expertise to other clubs to help them run smoother and more impactful events. </p>
        <p>My time as the President of HackMelbourne and Treasurer of Women In Technology at the University of Melbourne allowed me to shape the landscape of events on Campus, proving that no event is too small to make a difference in people&apos;s academic and social life</p>

    </motion.section>
  )
}
