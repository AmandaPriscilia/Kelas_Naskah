'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar'; // perbaikan di sini

export default function Activity() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image src="/pelatihan.png" alt="Our Activities" fill className="object-cover" priority />
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Activities</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our range of programs designed to enhance your scriptwriting skills and
            creative potential
          </p>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-48 relative mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/pelatihan.png"
                    alt="Scriptwriting Workshop"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">Scriptwriting Workshop</h3>
                <p className="text-gray-600 mb-4">
                  Intensive workshops led by industry professionals to develop your scriptwriting
                  skills.
                </p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-48 relative mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/creative.png"
                    alt="Story Development"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">Story Development</h3>
                <p className="text-gray-600 mb-4">
                  Learn the art of crafting compelling narratives and character development.
                </p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-48 relative mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/lots-of-concept.png"
                    alt="Industry Masterclass"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">Industry Masterclass</h3>
                <p className="text-gray-600 mb-4">
                  Connect with industry experts and gain insights into professional scriptwriting.
                </p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="bg-orange-500 text-white p-4 rounded-lg text-center min-w-[100px]">
                    <div className="text-2xl font-bold">15</div>
                    <div className="text-sm">MAR</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Basic Scriptwriting Workshop</h3>
                    <p className="text-gray-600 mb-2">
                      Learn the fundamentals of scriptwriting in this intensive workshop.
                    </p>
                    <div className="text-sm text-gray-500">📍 Ambon, Maluku</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="bg-orange-500 text-white p-4 rounded-lg text-center min-w-[100px]">
                    <div className="text-2xl font-bold">22</div>
                    <div className="text-sm">MAR</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Advanced Story Structure</h3>
                    <p className="text-gray-600 mb-2">
                      Deep dive into advanced storytelling techniques and structure.
                    </p>
                    <div className="text-sm text-gray-500">📍 Ambon, Maluku</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of creative writers and take your first step towards becoming a
            professional scriptwriter.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full">
            Register Now
          </Button>
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
                Developing the next generation of creative scriptwriters in Indonesia.
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
                <Link
                  href="https://www.instagram.com/kelasnaskah.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:opacity-80"
                  >
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
  );
}
