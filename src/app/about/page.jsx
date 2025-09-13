import Image from "next/image"

import { Members } from "@/components/Members"
import Navbar from "@/components/Navbar"
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
        <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/hero-bg.png"
          alt="People working on documents and scripts with coffee"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold text-purple-400 mb-8 leading-tight">Kelas Naskah</h1>
              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                <p>
                  Kelas Naskah adalah sebuah organisasi yang didedikasikan untuk mengembangkan kemampuan menulis
                  skenario serta pengetahuan tentang ilmu film dan televisi.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/doa.png"
                  alt="Hands cupping sunlight at sunset"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <Members />

      {/* Future Filled with Hope Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">A Future Filled with Hope</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            At Hope, we are dedicated to uplifting communities through a range of targeted initiatives
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/tangan-rame.png"
                alt="Multiple hands reaching toward center on pink background"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Menjadi organisasi unggulan dalam mewujudkan film sebagai media pembelajaran untuk kemajuan bangsa
                  dengan identitas, budaya, dan potensi lokal melalui karya sinema yang inspiratif dan berkualitas.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>Menyelenggarakan pelatihan dan workshop penulisan skenario;</p>
                <p>
                  Mengadakan berbagai kegiatan dalam bentuk formal, informal dan non formal dan pengembangan potensi
                  sumber daya kreatif yang ada dalam masyarakat;
                </p>
                <p>
                  Mengauli kolaborasi dengan praktisi industri untuk menumbya praktis kreatifasdiseserta; Membering
                  Inovasi dalam pembutan skema yang dapat mengupayakan penulisan positif dan pembangunan di kawasan
                  Timur.
                </p>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo molestie tempor. Aliquam erat
                volutpat. Aliquam erat volutpat, ut aliquam ut pulvinar eu, ac consectetur adipiscing sapien ante.
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
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center">
                  <span className="text-xs">@</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2023 Kelas naskah. All Right Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
