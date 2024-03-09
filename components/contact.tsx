"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'

export default function Contact() {

    const { ref } = useSectionInView("Contact")

  return (
    <motion.section id="contact"
        ref={ref}
        className='mb-20 sm:mb-28 w-[min(100%,38rem)]'   
        initial={{
            opacity:0
        }} 
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:1
        }}
        viewport={{
            once:true
        }}
    >
        <SectionHeading>Contact Me</SectionHeading>
        <p className='text-stone-700 -mt-5'
        >Contact me directly at <a href="mailto:yupin.gan@gmail.com" className='underline'>yupin.gan@gmail.com</a></p>

        <form className='mt-10 flex flex-col'
        action={async formData=> {
            await sendEmail(formData)
        }}>
            <input className="h-14 px-4 rounded-lg borderBlack outline-none"
            name="senderEmail" 
            type="email" 
            placeholder='Your Email'
            required
            maxLength={500}/>
            <textarea className='h-52 my-3 rounded-lg borderBlack p-4 outline-none'
            name="message" 
            placeholder='Your Message' 
            required
            maxLength={1000}/>
            <button type='submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-stone-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-stone-950 active:scale-105'>Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:tramslate-x-1 group-hover:-translate-y-1' /></button>
        </form>
    </motion.section>
  )
}
