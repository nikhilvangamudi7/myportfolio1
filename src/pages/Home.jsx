import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import "../CSS/Home.css"
import '../index.css' 
import FluidCursor from '../components/FluidCursor.jsx'


// 🖼️ Import Assets
import photo from '../../public/photo.jpg'
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'
import whatsappLogo from '../../public/whatsapp.png'
import instagramLogo from '../../public/insta.png'
import facebookLogo from '../../public/facebook.png'

export default function Home() {
  const professions = [
    'Cybersecurity',
    'Networking',
    "Backend & Web Technologies",
    'Frontend & UI/UX',
    'Cloud & DevOps',
  ]

  const quickLinks = [
    { img: githubLogo, title: "GitHub", link: "https://github.com/nikhilvangamudi7" },
    { img: linkedinLogo, title: "LinkedIn", link: "https://www.linkedin.com/in/nikhilvangamudi-info/" },
    { img: gmailLogo, title: "Email", link: "mailto:nikhilvangamudi7@gmail.com" },
    { img: whatsappLogo, title: "WhatsApp", link: "https://wa.me/+916301862793" },
    { img: instagramLogo, title: "Instagram", link: "https://www.instagram.com/nikhilnikky.info/" },
    { img: facebookLogo, title: "Facebook", link: "https://www.facebook.com/nikhil.vangamudi.2025" },
  ];

  // --- Background illusion state + motion values ---
  const containerRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  // framer-motion values that follow cursor inside container
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // small transforms to create parallax for each blob
  const blob1X = useTransform(mouseX, (x) => (x - 0.5) * 40) // -20..20 if normalized
  const blob1Y = useTransform(mouseY, (y) => (y - 0.5) * 40)
  const blob2X = useTransform(mouseX, (x) => (x - 0.5) * -60)
  const blob2Y = useTransform(mouseY, (y) => (y - 0.5) * 30)
  const blob3X = useTransform(mouseX, (x) => (x - 0.5) * 30)
  const blob3Y = useTransform(mouseY, (y) => (y - 0.5) * -50)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    function handleMove(e) {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width // 0..1
      const y = (e.clientY - rect.top) / rect.height // 0..1
      mouseX.set(x)
      mouseY.set(y)
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseenter', () => setIsHovering(true))
    el.addEventListener('mouseleave', () => {
      setIsHovering(false)
      // move to center on leave
      mouseX.set(0.5)
      mouseY.set(0.5)
    })

    // init to center
    mouseX.set(0.5)
    mouseY.set(0.5)

    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseenter', () => setIsHovering(true))
      el.removeEventListener('mouseleave', () => setIsHovering(false))
    }
  }, [mouseX, mouseY])

  return (
    <section className="home-section" ref={containerRef}>
      {/* Background illusion layer */}
      <div className={`background-illusion ${isHovering ? 'active' : ''}`} aria-hidden>
        <motion.div
          className="blob blob-1"
          style={{
            translateX: blob1X,
            translateY: blob1Y,
            scale: isHovering ? 1.12 : 0.95,
            opacity: isHovering ? 0.95 : 0.5,
          }}
          transition={{ type: 'spring', stiffness: 90, damping: 14 }}
        />
        <motion.div
          className="blob blob-2"
          style={{
            translateX: blob2X,
            translateY: blob2Y,
            scale: isHovering ? 1.06 : 0.9,
            opacity: isHovering ? 0.85 : 0.45,
          }}
          transition={{ type: 'spring', stiffness: 70, damping: 16 }}
        />
        <motion.div
          className="blob blob-3"
          style={{
            translateX: blob3X,
            translateY: blob3Y,
            scale: isHovering ? 1.14 : 0.88,
            opacity: isHovering ? 0.9 : 0.4,
          }}
          transition={{ type: 'spring', stiffness: 60, damping: 18 }}
        />
      </div>

      {/* Typing Effect Styles */}
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      {/* Top Section: Photo + Info */}
      <div className="home-top">
        {/* Left: Glowing Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="photo-ring"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="photo-frame"
          >
            <motion.img
              src={photo}
              alt="Nikkhil Vangamudi"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* Right: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I’m{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="home-name"
            >
              Nikhil Vangamudi
            </motion.span>
          </h1>

          {/* Typing Animated Text */}
          <p className="typing-effect">
            Cybersecurity Engineer | Web Developer | DevSecOps | PHP/MySQL 
          </p>

          {/* Profession Tags */}
          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05, background: 'linear-gradient(90deg,var(--accent),var(--accent-2))' }} transition={{ type: 'spring', stiffness: 200 }} className="profession-tag">
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div className="info-cards">
            {[
              { label: '📍 Location', value: 'Charleston, Illinois, USA' },
              { label: '💼 Expertise', value: 'AI/ML, Problem Solving' },
              { label: '📧 Contact', value: 'nikhilvangamudi7@gmail.com' },
            ].map((info, i) => (
              <motion.div key={i} whileHover={{ y: -4, scale: 1.05 }} transition={{ type: 'spring', stiffness: 250 }} className="info-card">
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Quick Links */}
      <motion.div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{ filter: 'drop-shadow(0 0 15px var(--accent)) brightness(1.2)' }}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
