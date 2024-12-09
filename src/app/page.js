'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { CardContainer,CardBody, CardItem } from '../../components/3d-card'

const backgrounds = [
  '/home-bg.jpg?height=1080&width=1920',
  '/hme-bg1.png?height=1080&width=1920&text=Second+Background',
  '/home-bg2.png?height=1080&width=1920&text=Third+Background',
]

export default function Home() {
  const [currentBackground, setCurrentBackground] = useState(0)
  const sectionRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target)
            setCurrentBackground(index)
          }
        })
      },
      { threshold: 0.5 }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen">
      <div className="fixed inset-0 z-[-1] transition-opacity duration-1000">
        {backgrounds.map((bg, index) => (
          <Image
            key={bg}
            src={bg}
            alt={`Background ${index + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            className={`transition-opacity duration-1000 ${
              index === currentBackground ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === 0}
          />
        ))}
      </div>
      <Header />
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="min-h-screen flex items-center justify-center p-8"
      >
        <div className="max-w-4xl">
          <h1 className="text-7xl font-bold mb-8 text-white ">
            SOUNAB
            <br />
            BHATTACHARJEE
          </h1>
          <p className="text-xl text-white mb-8">
            I AM AN UNDERGRAD STUDENT AND AN ASPIRING UX/UI FULL STACK WEB DEVELOPER. I HAVE MANY YEARS OF EXPERIENCE IN
            CONSULTING IN ALL AREAS OF DIGITAL. I LOVE MINIMAL AND BRUTALIST DESIGN. I LOVE ANIME,
            .
          </p>
          <a
            href="/SB-Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors">
              My Resume
            </button>
          </a>
        </div>
      </section>
      <section
      ref={(el) => (sectionRefs.current[1] = el)}
      className="min-h-screen flex items-center justify-center p-8 bg-opacity-50"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-xl text-white mb-8">
            I AM A DEVELOPER AND UX/UI DESIGNER BASED IN ITALY. I HAVE MANY YEARS OF EXPERIENCE IN
            CONSULTING IN ALL AREAS OF DIGITAL. I LOVE MINIMAL AND BRUTALIST DESIGN. I LOVE NATURE,
            PIZZA AND ART.
          </p>
        </div>
        <div className="">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] w-full max-w-sm aspect-[2/3] rounded-xl p-6 border">
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full h-full"
              >
                <div className="w-full h-full rounded-xl flex items-center justify-center">
                  <Image
                    src="/sounab.jpg"
                    height={800}
                    width={500}
                    className="h-64 w-64 object-cover "
                    alt="Sounab Bhattacharjee"
                  />
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="min-h-screen flex items-center justify-center p-8 bg-black bg-opacity-50"
      >
        <h2 className="text-5xl font-bold text-white">My Projects</h2>
        <p className="text-xl text-white mb-8">
            I AM A DEVELOPER AND UX/UI DESIGNER BASED IN ITALY. I HAVE MANY YEARS OF EXPERIENCE IN
            CONSULTING IN ALL AREAS OF DIGITAL. I LOVE MINIMAL AND BRUTALIST DESIGN. I LOVE NATURE,
            PIZZA AND ART.
          </p>
      </section>
    </main>
  )
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 p-6 flex justify-between items-center bg-opacity-85">
      <div className="text-white text-xl font-semibold">Sounab Bhattacharjee</div>
      <nav>
        <ul className="flex space-x-6 text-white">
          <li>
            <a
              href="#"
              className="relative hover:text-yellow-400 transition-colors after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative hover:text-yellow-400 transition-colors after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative hover:text-yellow-400 transition-colors after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative hover:text-yellow-400 transition-colors after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>    
    
  )
}
