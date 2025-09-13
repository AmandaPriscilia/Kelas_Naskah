'use client';

import { useState } from 'react';
import { TeamMemberCard } from './MemberCard';
import { teamMembers } from '../data/members';

export function Members() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Founder',
    'Graphic Design & Web Design',
    'Website Development',
    'Event and Marketing',
    'Communication and Content',
  ];

  // Ambil hanya satu orang per kategori untuk "All"
  const uniqueMembersForAll = Object.values(
    teamMembers.reduce((acc, member) => {
      if (!acc[member.category]) {
        acc[member.category] = member; // simpan satu per kategori
      }
      return acc;
    }, {}),
  );

  const filteredMembers =
    selectedCategory === 'All'
      ? uniqueMembersForAll
      : teamMembers.filter((m) => m.category === selectedCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Team</h2>

          {/* Kategori */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer transition-colors ${
                  selectedCategory === category
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid anggota */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              id={member.id}
              name={member.name}
              title={member.title}
              image={member.image}
              backgroundGradient={member.backgroundGradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
