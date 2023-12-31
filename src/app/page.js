import HeroSetion from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className=' container mt-24 mx-auto px-12 py-4'>

      <HeroSetion />
      </div>
    </main>
  )
}
