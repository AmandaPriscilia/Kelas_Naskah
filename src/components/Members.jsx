'use client';

import { useState } from 'react';
import { TeamMemberCard } from './MemberCard';
import { teamMembers } from '../data/members';

export function Members() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Founder', 'Graphic Design & Web Design', 'Website Development', 'Event and Marketing', 'Communication and Content'];

  // Ambil hanya satu orang per kategori untuk "All"
  const uniqueMembersForAll = Object.values(
    teamMembers.reduce((acc, member) => {
      if (!acc[member.category]) {
        acc[member.category] = member; // simpan satu per kategori
      }
      return acc;
    }, {})
  );

  const filteredMembers = selectedCategory === 'All' ? uniqueMembersForAll : teamMembers.filter((m) => m.category === selectedCategory);

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 md:mb-8">Our Team</h2>

          {/* Kategori */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base text-gray-600 mb-8 md:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer transition-colors px-3 py-1 rounded-full whitespace-nowrap 
                  ${selectedCategory === category ? 'bg-blue-600 text-white font-semibold' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid anggota: Ini yang sudah diubah */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {filteredMembers.map((member) => (
            <TeamMemberCard key={member.id} id={member.id} name={member.name} title={member.title} image={member.image} backgroundGradient={member.backgroundGradient} />
          ))}
        </div>
      </div>
    </section>
  );
}
