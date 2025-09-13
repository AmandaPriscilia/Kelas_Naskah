import Image from "next/image";
import Navbar from "@/components/Navbar";
import { teamMembers } from "@/data/members";

// Get member data from our existing data
const getMemberData = (slug) => {
  return teamMembers.find(member => member.id === slug);
};

export default function MemberProfile({ params }) {
  const member = getMemberData(params.slug);

  if (!member) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Member not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="relative w-[300px] h-[400px] shrink-0 overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2">{member.name}</h1>
                <p className="text-xl text-gray-600 mb-6">{member.title}</p>
                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Role & Responsibilities */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Role & Responsibilities</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="prose prose-lg">
              <ul className="space-y-2">
                {member.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className={`${member.backgroundGradient} text-white rounded-xl p-8`}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-white/80 mb-2">Instagram</p>
                <p className="text-lg">@kelasnaskah.id</p>
              </div>
              <div>
                <p className="text-white/80 mb-2">Location</p>
                <p className="text-lg">Ambon, Maluku, Indonesia</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 