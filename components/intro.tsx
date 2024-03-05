"use client";

import Image from 'next/image';
import React from 'react';
import profilePic from '@/public/yp image.jpg';
import { motion } from 'framer-motion';
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {

  const { ref } = useSectionInView("Home", 0.5)

  return (
    <section id="home" className='mb-27 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]' ref={ref}>
        <div className="flex items-center justify-center">
            <div className='relative'>
                <motion.div
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                    transition={{type: "tween", duration: 0.2}}
                >
                    <Image src={profilePic}
                    alt="Profile image"
                    quality="95"
                    priority={true}
                    className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl" />
                </motion.div>
                <motion.span 
                   className='absolute bottom-0 right-0 text-4xl '
                   initial={{opacity:0, scale:0}}
                   animate={{opacity:1, scale:1}}
                   transition={{type:'spring', stiffness: 125, delay:0.1, duration: 0.7}}
                >✌</motion.span>
            </div>
        </div>

        <motion.h1 
            className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text4xl'
            initial={{opacity: 0, y: 100}}
            animate={{opacity:1, y:0}}
            >

            {/* Hey there! I am a passionate computer science graduate with a keen interest in <span className='font-bold'>Technology</span> applied across diverse fields such as <span className='italic'>Psychology, Finance, Quantum Computing and ML/AI</span>, with proven <span className='font-bold'>academic excellence and leadership skills</span> demonstrated through <span className='font-bold'>executive roles</span> in tech clubs. 
            I am eager to leverage my technical skills and interdisciplinary knowledge to drive innovation and solve complex challenges at the intersection of computer science and various domains. */}

            Hey there! Having spent a great deal of subjects in my undergraduate degree exploring different fields, I've built an interest in <span className='font-bold'>applying technology across diverse fields</span> such as <span className='italic'>Psychology, Finance, Quantum Computing</span> through <span className='font-bold'>Machine Learning/Artificial Intelligence, and Software Development Skills</span>.
            I've also led tech clubs in the past, allowing me to hone my human-skills and attain great personal milestones.

        </motion.h1>

        <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.1}}>
            <Link 
                href="#contact"
                className='group bg-stone-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-stone-950 active:scale-105 transition cursor-pointer border border-black/10'>
                    Contact Me <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
            </Link>
            <a
                className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10' 
                href="/CV.pdf"
                download>
                    Download CV <HiDownload className="opacity-60 group-hover:translate-x-1 transition"/>
            </a>
            <a className="bg-white p-4 text-stone-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-stone-950 active:scale-105 transition cursor-pointer border border-black/10" 
            href="https://www.linkedin.com/in/ganyupin/"
            target="_blank"><BsLinkedin /></a>
            <a className="bg-white p-4 text-stone-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-stone-950 active:scale-105 transition cursor-pointer border border-black/10" 
            href="https://github.com/Gyp1127"
            target="_blank"><FaGithubSquare /></a>

        </motion.div>
    </section>
  )
}
