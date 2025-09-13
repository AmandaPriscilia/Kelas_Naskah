import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
export default function Partnerships() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/hero-bg.png"
          alt="Partnerships and Collaborations"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Partners</h1>
          <p className="text-xl">Collaborating for a better future in scriptwriting</p>
        </div>
      </section>

      {/* Current Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Current Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Partner cards from your home page */}
            <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">indonesia</span>
            </div>
            <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">indonesia</span>
            </div>
            <div className="w-full h-48 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">indonesia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                KELAS
                <br />
                NASKAH
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo molestie tempor.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>📧 XXXXX</p>
                <p>📱 XXXXX</p>
                <p>📍 XXXXX</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Social Media</h4>
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/kelasnaskah.id/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:opacity-80">
                    <span className="text-white">@</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Kelas naskah. All Right Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 