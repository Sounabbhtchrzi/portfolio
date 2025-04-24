"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { CardContainer, CardBody, CardItem } from "../../components/3d-card"
import { Monitor, Atom, Hexagon, Mail, Linkedin, Github } from "lucide-react"

const backgrounds = [
  "/home-bg3.jpg?height=1080&width=1920",
  "",
  "",
  "/home-bg.jpg?height=1080&width=1920&text=Fourth+Background",
]

const projects = [
  {
    id: 1,
    title: "Genius Gen",
    category: "Web Development",
    image: "/project1.png?height=600&width=1000",
    link: "https://genius-gen.vercel.app",
    description: "Genius Gen is a comprehensive learning platform that offers AI-generated blog posts and interactive quizzes on various topics. Whether you're a curious learner or an avid quiz enthusiast, Genius Gen provides a personalized and engaging learning experience."
  },
  {
    id: 2,
    title: "Collab Code",
    category: "Web Development",
    image: "/project2.png?height=600&width=1000",
    link: "https://collab-code-s3.vercel.app",
    description:"A Collaborative Coding Platform with added features like whiteboard, chat and ai chatbot support"
  },
  {
    id: 3,
    title: "Buzz",
    category: "Web Development",
    image: "/project3.png?height=600&width=1000",
    link: "https://buzz-s3.vercel.app",
    description: "Buzz is a social platform where users can post anonymously, engage through likes and comments, and explore new daily themes. Every day, Buzz introduces a fresh theme, encouraging users to share ideas and spark creative conversations."
  },
  {
    id: 4,
    title: "Brick-Breaker Game",
    category: "Game Development",
    image: "/project4.png?height=600&width=1000",
    link: "https://github.com/Sounabbhtchrzi/BrickBreaker",
    description:"A fun and visually appealing Brick Breaker Game developed in Java using Swing and AWT. The game features multiple levels, dynamic high scores, cool sound effects, and smooth animations."
  }
  
]

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
      { threshold: 0.5 },
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main className="min-h-screen">
      <div className="fixed inset-0 z-[-1] transition-opacity duration-1000">
        <Image
          src={backgrounds[0] || "/placeholder.svg"}
          alt="Background 1"
          fill
          style={{
            objectFit: "cover",
            objectPosition: `center ${50 + scrollProgress * 50}%`,
            transform: "scale(1.1)",
            opacity: 1 - scrollProgress,
          }}
          className="transition-all duration-300 ease-out"
          priority
        />
        <div
          className="absolute inset-0 bg-purple-800"
          style={{
            opacity: scrollProgress * 0.5,
          }}
        />
        {backgrounds.slice(1).map((bg, index) => {
          if (index + 1 === 1 || index + 1 === 2) return null
          return (
            <Image
              key={bg}
              src={bg || "/placeholder.svg"}
              alt={`Background ${index + 2}`}
              fill
              style={{ objectFit: "cover" }}
              className={`transition-opacity duration-1000 ${
                index + 1 === currentBackground ? "opacity-100" : "opacity-0"
              }`}
            />
          )
        })}
      </div>
      <Header />
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="min-h-screen flex items-center justify-center p-4 sm:p-8"
        id="home"
      >
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-8 text-white">
            SOUNAB
            <br />
            BHATTACHARJEE
          </h1>
          <p className="text-base sm:text-xl text-white mb-4 sm:mb-8">
            I AM AN UNDERGRAD STUDENT PURSUING COMPUTER SCIENCE ENGINEERING IN TECHNO MAIN SALT LAKE AND AN ASPIRING
            FULL STACK WEB DEVELOPER. I LOVE ANIME WHICH EXPLAINS THE DESIGN FOR THIS WEBSITE.
          </p>
          <a href="/SB-Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-opacity-90 transition-colors">
              My Resume
            </button>
          </a>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-purple-900 bg-opacity-50"
        id="about-me"
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="md:w-1/2">
            <div className="relative p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  About <span className="text-yellow-400">Me</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-300 mb-4 sm:mb-8">
                  I am a passionate and dedicated 3rd-year B.Tech student majoring in Computer Science from Kolkata,
                  India. With a strong foundation in full-stack web development, I have worked on some projects, hence
                  honing my skills. Beyond coding, I enjoy playing football, which keeps me active and disciplined, and
                  watching anime, which inspires my creativity and storytelling perspective. I am driven by a love for
                  learning and a commitment to building impactful digital solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <CardContainer className="inter-var">
              <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] w-full max-w-sm aspect-[2/3] rounded-xl p-6 border">
                <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full h-full">
                  <div className="w-full h-full rounded-xl flex items-center justify-center">
                    <Image
                      src="/sounab.jpg"
                      height={800}
                      width={500}
                      className="h-64 w-64 object-cover"
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
        className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 bg-black bg-opacity-50"
        id="skills"
      >
       <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 sm:mb-16 relative z-10">
          My <span className="text-yellow-400">Skills</span>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl w-full">
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-gray-600 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="w-6 h-6 text-white" />
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Software
                <span className="block text-red-500">Development</span>
              </h3>
            </div>
            <div className="font-mono text-xs sm:text-sm text-gray-400">
              <span className="text-gray-500">&lt;h3&gt;</span>
              <p className="px-4 py-2">
                Experienced in both
                <br />
                functional and OOP: Python,
                <br />
                Java, C, JavaScript,
                <br />
                TypeScript.
              </p>
              <span className="text-gray-500">&lt;/h3&gt;</span>
            </div>
          </div>
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-gray-600 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Atom className="w-6 h-6 text-white" />
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Frontend Dev
                <span className="block text-red-500">React, NextJS</span>
              </h3>
            </div>
            <div className="font-mono text-xs sm:text-sm text-gray-400">
              <span className="text-gray-500">&lt;h3&gt;</span>
              <p className="px-4 py-2">
                Passionate and aspiring about UI/UX.
                <br />
                Still learning about development
                <br />
                in HTML, CSS, JS,
                <br />
                React and NextJS frameworks.
              </p>
              <span className="text-gray-500">&lt;/h3&gt;</span>
            </div>
          </div>
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-gray-600 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Hexagon className="w-6 h-6 text-white" />
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Backend Dev
                <span className="block text-red-500">NodeJs, MongoDB, Fast API</span>
              </h3>
            </div>
            <div className="font-mono text-xs sm:text-sm text-gray-400">
              <span className="text-gray-500">&lt;h3&gt;</span>
              <p className="px-4 py-2">
                Skilled in developing
                <br />
                scalable backend systems
                <br />
                and API solutions using
                <br />
                NodeJs,Fast API and MongoDB, delivering
                <br />
                efficient server-side applications
              </p>
              <span className="text-gray-500">&lt;/h3&gt;</span>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="min-h-screen flex flex-col items-center justify-start px-2 sm:px-4 py-6 sm:py-8 bg-black bg-opacity-50"
        id="projects"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 sm:mb-16 relative z-10">
          My <span className="text-yellow-400">Projects</span>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-y-14 sm:gap-x-16 w-full max-w-5xl">
          {projects.map(project => ({
            ...project,
            description: project.description || "Project details coming soon."
          })).map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[9/5] bg-gray-900 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:z-10 border border-gray-800 hover:border-blue-500 shadow-lg hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity"></div>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Overlay that slides up on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end p-4">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-xs sm:text-sm text-blue-300 mb-2">{project.category}</p>
                <p className="text-gray-300 text-xs mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">{project.description}</p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center justify-center py-1.5 px-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-all w-fit"
                >
                  View Project 
                  <svg className="w-3 h-3 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
              
              {/* Smaller glowing accent */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500 opacity-30 blur-2xl rounded-full transform group-hover:scale-150 group-hover:opacity-40 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </section>
        <section
        ref={(el) => (sectionRefs.current[5] = el)}
        className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 bg-black relative overflow-hidden"
        id="contact-me"
      >
        {/* Floating animated elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen opacity-10 animate-float1"></div>
        <div className="absolute bottom-10 -right-10 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen opacity-10 animate-float2"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-yellow-400 rounded-full mix-blend-screen opacity-10 animate-float3"></div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 sm:mb-16 relative z-10">
          Let's <span className="text-yellow-400">Connect</span>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
        </h2>

        <div className="flex flex-col lg:flex-row w-full max-w-6xl items-start relative z-10 gap-8">
          {/* Contact Form - Now with more personality */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-0.5 rounded-xl">
              <div className="bg-gray-900 p-6 sm:p-8 rounded-xl relative overflow-hidden">
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-yellow-400 rounded-tl-xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-yellow-400 rounded-br-xl"></div>
                
                <h3 className="text-2xl sm:text-3xl text-white mb-6 font-mono">
                  <span className="text-yellow-400">$</span> Send me a message_
                </h3>
                
                <form 
                  action="https://formspree.io/f/xbljekzp" 
                  method="POST" 
                  className="space-y-6"
                >
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 peer placeholder-transparent"
                      placeholder="Your Name"
                    />
                    <label className="absolute left-4 -top-3 bg-gray-900 px-2 text-yellow-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-yellow-400 peer-focus:text-sm">
                      Name
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 peer placeholder-transparent"
                      placeholder="Your Email"
                    />
                    <label className="absolute left-4 -top-3 bg-gray-900 px-2 text-yellow-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-yellow-400 peer-focus:text-sm">
                      Email
                    </label>
                  </div>
                  
                  <div className="relative">
                    <textarea
                      name="message"
                      required
                      rows="5"
                      className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 peer placeholder-transparent"
                      placeholder="Your Message"
                    ></textarea>
                    <label className="absolute left-4 -top-3 bg-gray-900 px-2 text-yellow-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-yellow-400 peer-focus:text-sm">
                      Message
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="relative overflow-hidden group w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-all hover:shadow-lg hover:shadow-yellow-500/30"
                  >
                    <span className="relative z-10">Send Message</span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Social Links - More interactive */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-0.5 rounded-xl h-full">
              <div className="bg-gray-900 p-6 sm:p-8 rounded-xl h-full flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl text-white mb-6 font-mono">
                  <span className="text-yellow-400">#</span> Find me online_
                </h3>
                
                <div className="space-y-6">
                  <a
                    href="mailto:sounabbhattacharjee@gmail.com"
                    className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all group"
                  >
                    <div className="relative">
                      <Mail className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform" />
                      <div className="absolute -inset-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-10 blur-sm transition-opacity"></div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email me at</p>
                      <p className="text-white group-hover:text-yellow-400 transition-colors">sounabbhattacharjee@gmail.com</p>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/sounab-bhattacharjee-aa3b3b266"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all group"
                  >
                    <div className="relative">
                      <Linkedin className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                      <div className="absolute -inset-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-10 blur-sm transition-opacity"></div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Connect on</p>
                      <p className="text-white group-hover:text-blue-400 transition-colors">LinkedIn</p>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </a>
                  
                  <a
                    href="https://github.com/sounabbhtchrzi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all group"
                  >
                    <div className="relative">
                      <Github className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                      <div className="absolute -inset-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-10 blur-sm transition-opacity"></div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Check my</p>
                      <p className="text-white group-hover:text-purple-400 transition-colors">GitHub</p>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </a>
                </div>
                
                {/* Fun decorative element */}
                <div className="mt-12 relative">
                  <div className="absolute -left-8 top-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></div>
                  <p className="text-gray-400 text-center font-mono">Or send a carrier pigeon</p>
                  <div className="absolute -right-8 top-1/2 w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-10 backdrop-blur-sm p-4 md:p-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Not found" width={40} height={40} />
        <span className="text-white text-base sm:text-lg font-semibold ml-2">Sounab's Portfolio</span>
      </div>

      <nav
        className={`${isMenuOpen ? "block" : "hidden"} md:block absolute md:relative top-full left-0 right-0 bg-black md:bg-transparent p-4 md:p-0`}
      >
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-white">
          {["Home", "About Me", "Skills", "Projects", "Contact Me"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="relative hover:text-yellow-400 transition-colors after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-yellow-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </header>
  )
}
