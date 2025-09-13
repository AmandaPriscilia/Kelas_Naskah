import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
export default function Gallery() {
  return (
      <div className="min-h-screen bg-white">
                <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/dokumentasi.png"
          alt="Gallery of our activities"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl">Capturing moments of creativity and learning</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gallery items */}
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/pelatihan.png"
                alt="Training Session"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Training Session</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/creative.png"
                alt="Creative Workshop"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Creative Workshop</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/lots-of-concept.png"
                alt="Concept Development"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Concept Development</p>
              </div>
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