"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function OurTeam() {
  const teamMembers = [
    { name: "Murali Mohan Konareddy", role: "Founder", img: "/Team/img1.png" },
    { name: "Rishab Verma", role: "Trainer", img: "/Team/img2.jpg" },
    { name: "Krati", role: "Trainer", img: "/Team/img3.jpg" },
    { name: "Ravi K R", role: "Trainer", img: "/Team/img4.jpg" },
    { name: "Murali Mohan Konareddy", role: "Founder", img: "/Team/img1.png"},
    { name: "Rishab Verma", role: "Trainer", img: "/Team/img2.jpg" },
  ];

  return (
    <div
      className="pt-8 pb-20 px-4"
      style={{ backgroundColor: "#e7ebf3ff", fontFamily: "'Roboto', sans-serif" }}
    >
      {/* Title */}
      <h3 className="text-4xl font-bold text-center">
        <span className="text-[#0f8ddf]">Our</span>{" "}
        <span className="text-[#0f8ddf]">Team</span>
      </h3>

      {/* About Text */}
      <p className="text-[#4b5563] mt-4 text-lg max-w-3xl mx-auto leading-relaxed text-center md:text-justify">
        At the heart of our organization is a team of vision-driven leaders, passionate educators,
        and industry professionals committed to shaping the future of talent. Together, we make
        skill development impactful, accessible, and transformative.
      </p>

      {/* Slider */}
      <div className="max-w-7xl mx-auto mt-14">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1800, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          spaceBetween={30}
          className="pb-10"
        >
          {teamMembers.map((member, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-2xl shadow-md p-6 text-center transition hover:shadow-xl hover:-translate-y-2 duration-300">

                {/* Image Box */}
                <div className="flex justify-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-40 h-48 object-cover rounded-lg shadow-md border border-[#dcdcdc]"
                  />
                </div>

                {/* Name */}
                <h4 className="text-lg font-semibold mt-5 text-[#1e1f24]">
                  {member.name}
                </h4>

                {/* Role */}
                <p className="text-[#69aad1] font-medium text-sm mt-1">
                  {member.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-10">
        <button
          className="px-8 py-3 rounded-full font-semibold text-white text-lg shadow-lg transition-all duration-300 hover:scale-[1.08] hover:shadow-xl"
          style={{ background: "linear-gradient(90deg, #0f8ddf, #0077c8)" }}
        >
           Join Our Team
        </button>
      </div>
    </div>
  );
}