import Image from 'next/image';
import Link from 'next/link';

export function TeamMemberCard({ id, name, title, image, backgroundGradient = 'bg-orange-500' }) {
  // Define a unique ID for the clip path for each card
  const clipPathId = `clip-path-${id}`;

  return (
    <Link href={`/member/${id}`} className="block">
      <div className={`relative rounded-2xl overflow-hidden aspect-[1/1.4] w-full max-w-[280px] sm:max-w-none mx-auto ${backgroundGradient}`}>
        {/* SVG for complex clip path */}
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <clipPath id={clipPathId} clipPathUnits="objectBoundingBox">
              {/* This path creates a custom curve at the bottom for the image */}
              <path d="M0,0 H1 V0.8 C0.8,1 0.2,1 0,0.8 V0" />
            </clipPath>
          </defs>
        </svg>

        {/* Organic shapes for the background */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Main bottom shape (darker blue) */}
          <div className="absolute bottom-0 left-0 w-full h-[60%] bg-[#364075] rounded-tl-[50%] rounded-tr-[50%]"></div>
          {/* Top accent shape (gradient from orange to blue) */}
          <div className="absolute top-0 right-0 w-[80%] h-[50%] rotate-[15deg] [background:linear-gradient(51deg,#FFA97E_42.3%,#364075_99.14%)] rounded-[50%] opacity-70"></div>
          {/* A smaller, more subtle accent shape */}
          <div className="absolute top-[20%] left-[10%] w-[40%] h-[30%] rotate-[-20deg] bg-white opacity-10 rounded-[50%]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-start h-full p-4 pb-0">
          {/* Image container with custom clip path */}
          <div className="relative w-[85%] h-[65%] mt-4 flex items-end justify-center overflow-hidden" style={{ clipPath: `url(#${clipPathId})` }}>
            <Image src={image || '/placeholder.svg'} alt={name} fill className="object-cover object-top scale-110" />
          </div>
          {/* Text content */}
          <div className="relative z-20 mt-auto pt-4 pb-6 text-center w-full bg-[#364075] rounded-b-2xl">
            <h3 className="text-lg sm:text-xl font-bold mb-1 text-white">{name}</h3>
            <p className="text-sm text-white/90">{title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
