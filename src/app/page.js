'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { CardContainer, CardBody, CardItem } from '../../components/3d-card'
import { Monitor, Atom, Hexagon, Mail, Linkedin, Github } from 'lucide-react'

const backgrounds = [
  '/home-bg3.jpg?height=1080&width=1920',
  '/hme-bg1.png?height=1080&width=1920&text=Second+Background',
  '/hme-bg1.png?height=1080&width=1920&text=Third+Background',
  '/home-bg.jpg?height=1080&width=1920&text=Fourth+Background',
]


const projects = [
  {
    id: 1,
    title: "Genius Gen",
    category: "Web Development",
    image: "/project1.png?height=600&width=800",
    link: "https://genius-gen.vercel.app"
  },
  {
    id: 2,
    title: "Code Unity",
    category: "Web Development",
    image: "/project2.png?height=600&width=800",
    link: "https://code-unity.vercel.app"
  },
  {
    id: 3,
    title: "Buzz",
    category: "Web Development",
    image: "/project3.png?height=600&width=800",
    link: "https://buzz-s3.vercel.app"
  }
]

const categories = ["All", "Web Development", "Data Visualization"]

export default function Home() {
  const [currentBackground, setCurrentBackground] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRefs = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const secondSectionTop = sectionRefs.current[2]?.offsetTop || windowHeight * 2
      const progress = Math.min(scrollPosition / secondSectionTop, 1)
      setScrollProgress(progress)
    }

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

    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <main className="min-h-screen">
      <div className="fixed inset-0 z-[-1] transition-opacity duration-1000">
        <Image
          src={backgrounds[0]}
          alt="Background 1"
          fill
          style={{ 
            objectFit: 'cover',
            objectPosition: `center ${50 + scrollProgress * 50}%`,
            transform: 'scale(1.1)',
            opacity: 1 - scrollProgress
          }}
          className="transition-all duration-300 ease-out"
          priority
        />
        <div 
          className="absolute inset-0 bg-purple-800"
          style={{
            opacity: scrollProgress * 0.5
          }}
        />
        {backgrounds.slice(1).map((bg, index) => {
          if (index + 1 === 1 || index + 1 === 2) return null;
          return (
            <Image
              key={bg}
              src={bg}
              alt={`Background ${index + 2}`}
              fill
              style={{ objectFit: 'cover' }}
              className={`transition-opacity duration-1000 ${
                index + 1 === currentBackground ? 'opacity-100' : 'opacity-0'
              }`}
            />
          );
        })}

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
            I AM AN UNDERGRAD STUDENT PURSUING COMPUTER SCIENCE ENGINEERING IN TECHNO MAIN SALT LAKE AND AN ASPIRING FULL STACK WEB DEVELOPER. I LOVE ANIME WHICH EXPLAINS THE DESIGN FOR THIS WEBSITE.
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
        className="min-h-screen flex items-center justify-center p-8 bg-purple-900 bg-opacity-50"
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
        className="min-h-screen flex flex-col items-center justify-center p-8 bg-black bg-opacity-50"
      >
        <h2 className="text-6xl font-bold text-white mb-16">My Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white">
                Software
                <span className="block text-red-500">Development</span>
              </h3>
            </div>
            <div className="font-mono text-sm text-gray-400">
              <span className="text-gray-500">&lt;h3&gt;</span>
              <p className="px-4 py-2">
                Experienced in both<br />
                functional and OOP: Python,<br />
                Java, C, JavaScript,<br />
                TypeScript.
              </p>
              <span className="text-gray-500">&lt;/h3&gt;</span>
            </div>
          </div>
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Atom className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white">
                Frontend Dev
                <span className="block text-red-500">React, NextJS</span>
              </h3>
            </div>
            <div className="font-mono text-sm text-gray-400">
              <span className="text-gray-500">&lt;h3&gt;</span>
              <p className="px-4 py-2">
                Passionate and aspiring about UI/UX.<br />
                Still learning about development<br />
                in HTML, CSS, JS,<br />
                React and NextJS frameworks.
              </p>
              <span className="text-gray-500">&lt;/h3&gt;</span>
            </div>
          </div>
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Hexagon className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white">
                Backend Dev
                <span className="block text-red-500">NodeJs, MongoDB</span>
              </h3>
            </div>
            <div className="font-mono text-sm text-gray-400">
              <span className="text-gray-500">&lt;h3&gt;</span>
              <p className="px-4 py-2">
                Skilled in developing<br />
                scalable backend systems<br />
                and API solutions using<br />
                NodeJs and MongoDB, delivering<br />
                efficient server-side applications
              </p>
              <span className="text-gray-500">&lt;/h3&gt;</span>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="min-h-screen flex flex-col items-center justify-start p-8 bg-black bg-opacity-50"
      >
        <h2 className="text-6xl font-bold text-white mb-8">My Projects</h2>
        <br/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-gray-600 transition-colors"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.category}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section
      ref={(el) => (sectionRefs.current[5] = el)}
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-black"
    >
      <h2 className="text-6xl font-bold text-white mb-16">Contact Me</h2>
      <div className="flex flex-col md:flex-row md:space-x-16 w-full max-w-6xl items-start">
        {/* Left side - Contact Form */}
        <div className="w-full md:w-1/2 bg-gray-800 p-8 rounded-lg">
          <h3 className="text-3xl text-white mb-6">Send me a message</h3>
          <form
            action="https://formspree.io/f/xbljekzp" 
            method="POST"
            className="space-y-4"
          >
            <div>
              <label className="block text-white text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-400"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-400"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-black py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right side - Social Links */}
        <div className="w-full md:w-1/2 flex flex-col items-center space-y-8 mt-8 md:mt-0 pt-40 ">
          <a
            href="mailto:sounabbhattacharjee@gmail.com"
            className="flex items-center space-x-4 text-white hover:text-yellow-400 transition-colors"
          >
            <Mail className="w-8 h-8" />
            <span className="text-xl">sounabbhattacharjee@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sounab-bhattacharjee-aa3b3b266"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 text-white hover:text-yellow-400 transition-colors"
          >
            <Linkedin className="w-8 h-8" />
            <span className="text-xl">LinkedIn</span>
          </a>
          <a
            href="https://github.com/sounabbhtchrzi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 text-white hover:text-yellow-400 transition-colors"
          >
            <Github className="w-8 h-8" />
            <span className="text-xl">GitHub</span>
          </a>
        </div>
      </div>
    </section>

    </main>
  )
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 backdrop-blur-sm p-4 md:p-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Not found" width={50} height={50} />
        <span className="text-white text-lg font-semibold ml-2">Sounab's Portfolio</span>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="hidden md:flex space-x-6 text-white">
          {["Home", "About Me", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="relative hover:text-yellow-400 transition-colors after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-yellow-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
