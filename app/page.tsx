import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Positioning from '@/components/Positioning'
import Pillars from '@/components/Pillars'
import Experience from '@/components/Experience'
import Achievements from '@/components/Achievements'
import Skills from '@/components/Skills'
import Bonus from '@/components/Bonus'
import ChatSection from '@/components/ChatSection'
import Footer from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Navbar />
      <main>
        <Hero />
        <Positioning />
        <Pillars />
        <Experience />
        <Achievements />
        <Skills />
        <Bonus />
        <ChatSection />
      </main>
      <Footer />
    </>
  )
}
