'use client'

import { useSectionInView } from '@/hooks/use-section-in-view'
import { siteConfig } from '@/lib/site-config'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeading from './section-heading'
import Skills from './skills'

export default function AboutSection() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I’m coding for over 3 years of hands-on experience in building
          dynamic, high-performance web applications. I’m passionate about
          turning complex problems into elegant, efficient solutions — that
          moment of cracking a tough challenge is what keeps me hooked on
          coding.I’m always eager to learn, collaborate, and push the limits of
          what’s possible with modern technologies.
        </p>
        <p>
          I’m currently open to exciting opportunities where I can contribute my
          skills, grow as a developer, and create meaningful digital
          experiences.{" "}
          <Link
            className="underline-offset-4 hover:underline"
            href={siteConfig.links.contactForm}
          >
            contact
          </Link>{" "}
          me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
}
