"use client"
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
const testimonialData = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    feedback:
      "IdeaVault helped me validate my startup concept before investing time and money. The community feedback was incredibly valuable.",
  },
  {
    id: 2,
    name: "Ryan Mitchell",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    feedback:
      "I discovered amazing collaborators through IdeaVault. It’s the perfect place to explore innovative ideas and trends.",
  },
  {
    id: 3,
    name: "Ayesha Khan",
    role: "Tech Entrepreneur",
    image: "https://plus.unsplash.com/premium_photo-1681494639261-7908ef9d2257",
    feedback:
      "The discussions and suggestions from users helped me improve my business model significantly.",
  },
  {
    id: 4,
    name: "David Lee",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    feedback:
      "IdeaVault inspired me to work on projects I never thought about before. The platform feels creative and motivating.",
  },
  {
    id: 5,
    name: "Nusrat Jahan",
    role: "AI Enthusiast",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    feedback:
      "I love how easy it is to share ideas and receive honest opinions from other innovators around the world.",
  },
  {
    id: 6,
    name: "Michael Carter",
    role: "Business Strategist",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    feedback:
      "This platform creates a strong environment for innovation, collaboration, and startup growth.",
  },
];
const Testimonial = () => {
  return (
    <div className="bg-[#0F172A] py-10">
        <h1 className="md:text-4xl text-3xl text-center ">Real Feedback From Creative Minds
            </h1>
      <div className="w-10/12 mx-auto py-20 flex gap-10">
      <Marquee speed={70} gradient={false} pauseOnHover={true}>
        {testimonialData.map((item) => {
          return (
            <div
              key={item.id}
              className="mx-8 bg-white/10 w-96 flex-wrap backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center gap-4 hover:bg-white/20 transition duration-300"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden ">
                <Image
                  className="object-cover"
                  src={item.image}
                  alt="image"
                  height={100}
                  width={100}
                ></Image>
              </div>
              <h2 className="text-xl font-bold">{item.name}</h2>
              <h3 className="text-lg text-[#6f54ef] font-semibold">{item.role}</h3>
              <p className="text-gray-300">{item.feedback}</p>
            </div>
          );
        })}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
