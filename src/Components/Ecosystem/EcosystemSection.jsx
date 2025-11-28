"use client";
import Link from "next/link";

export default function JoinOurEcosystem() {
  const corporateItems = [
    { title: "Internship Management", desc: "Streamlined hiring & tracking" },
    { title: "Campus Hiring", desc: "Access top fresh talent" },
    { title: "Corporate Training", desc: "Upskill your workforce" },
    { title: "Talent Pipeline", desc: "Future-ready candidates" },
  ];

  const universityItems = [
    { title: "Curriculum Design", desc: "Industry-aligned syllabus" },
    { title: "Placement Partners", desc: "Boost hiring rates" },
    { title: "Faculty Dev", desc: "Train the trainers" },
    { title: "Student Careers", desc: "Mentoring & guidance" },
  ];

  const MiniCard = ({ item }) => (
    <div className="bg-white p-4 rounded-xl border border-[#d4d7df] shadow-sm hover:shadow-md transition">
      <h4 className="text-base font-semibold text-[#0E1525]">{item.title}</h4>
      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
    </div>
  );

  return (
    <>

      <section className="w-full py-12 px-6 bg-[#e7ebf3ff] font-['Roboto'] flex justify-center">
        <div className="w-full max-w-7xl">
          {/* MAIN TITLE */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-extrabold text-[#0ea5e9]">Join Our Ecosystem</h1>
            <p className="text-gray-600 mt-2 text-base max-w-xl mx-auto">
              Bridging the gap between academics and industry with tailored programs.
            </p>
          </div>

          {/* TWO MAIN BLOCKS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ================= CORPORATES ================= */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-[#d4d7df]">
              {/* HEADER WITH POP ANIMATION */}
              <h2 className="animate-pop flex items-center text-xl font-bold text-[#002d87ff] mb-5">
                <span className="w-9 h-9 bg-[#0ea5e9]/15 text-[#0ea5e9] rounded-lg flex items-center justify-center mr-3">
                  🧳
                </span>
                For Corporates
              </h2>

              {/* CARDS */}
              <div className="grid grid-cols-2 gap-6">
                {corporateItems.map((item) => (
                  <MiniCard key={item.title} item={item} />
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-6">
                <Link
                  href="/Corporate"
                  className="px-5 py-2 bg-[#0E1525] text-white rounded-md text-sm font-semibold hover:bg-[#1b2336] transition"
                >
                  Know More
                </Link>

                <Link
                  href="/partner/corporates"
                  className="px-5 py-2 border border-[#0E1525] text-[#0E1525] rounded-md text-sm font-semibold hover:bg-[#0E1525] hover:text-white transition animate-pulse-scale"
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* ================= UNIVERSITIES ================= */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-[#d4d7df]">
              {/* HEADER WITH POP ANIMATION */}
              <h2 className="animate-pop flex items-center text-xl font-bold text-[#002d87ff] mb-5">
                <span className="w-9 h-9 bg-[#AED57A]/20 text-[#4B7A26] rounded-lg flex items-center justify-center mr-3">
                  🎓
                </span>
                For Universities
              </h2>

              {/* CARDS */}
              <div className="grid grid-cols-2 gap-6">
                {universityItems.map((item) => (
                  <MiniCard key={item.title} item={item} />
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-6">
                <Link
                  href="/University"
                  className="px-5 py-2 bg-[#0E1525] text-white rounded-md text-sm font-semibold hover:bg-[#1b2336] transition"
                >
                  Know More
                </Link>

                <Link
                  href="/partner/universities"
                  className="px-5 py-2 border border-[#0E1525] text-[#0E1525] rounded-md text-sm font-semibold hover:bg-[#0E1525] hover:text-white transition animate-pulse-scale"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}