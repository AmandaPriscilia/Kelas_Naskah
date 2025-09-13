'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, UserPlus, Instagram } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <div className="bg-[#121314] text-white text-xs font-semibold px-4 sm:px-6 py-2 flex justify-between items-center">
        <div className="text-sm font-semibold tracking-widest select-none header-logo">
          KELASNASKAH
        </div>
        <div className="text-xs sm:text-sm select-none">Ambon, Maluku, Indonesia</div>
      </div>

      <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 py-1 sm:py-4 relative z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            className="sm:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <ul className="hidden sm:flex space-x-6 text-xs sm:text-sm font-normal text-black flex-wrap">
            <li>
              <Link href="/" className="hover:underline hover:text-[#2F5E35]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline hover:text-[#2F5E35]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/partnerships" className="hover:underline hover:text-[#2F5E35]">
                Partnerships
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:underline hover:text-[#2F5E35]">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/activity" className="hover:underline hover:text-[#2F5E35]">
                Activity
              </Link>
            </li>
            <li>
              <Link href="/other-feature" className="hover:underline hover:text-[#2F5E35]">
                Pengajar
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <Link
              href="https://www.instagram.com/kelasnaskah.id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-orange-500">
                <Instagram className="h-5 w-5" />
              </Button>
            </Link>
            <Button className="bg-[#2F5E35] text-white font-semibold text-xs sm:text-sm px-4 sm:px-6 py-1 sm:py-2 rounded-sm hover:bg-[#2a4f2b] transition-all shadow-md whitespace-nowrap flex items-center justify-center space-x-2">
              <UserPlus className="h-4 w-4 mr-2" />
              <span>Join now</span>
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
            onClick={closeMobileMenu}
          ></div>
        )}

        <ul
          className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg p-4 sm:hidden transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <li className="mb-4 text-right">
            <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
              <X className="h-5 w-5" />
            </Button>
          </li>
          {['/', '/about', '/partnerships', '/gallery', '/activity', '/other-feature'].map(
            (href, i) => (
              <li key={i}>
                <Link
                  href={href}
                  onClick={closeMobileMenu}
                  className="block px-2 py-2 hover:bg-gray-100 rounded"
                >
                  {href === '/' ? 'Home' : href.replace('/', '').replace('-', ' ')}
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>
    </>
  );
}
