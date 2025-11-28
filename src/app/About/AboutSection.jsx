"use client";



import { useState } from "react";

import { FaBullseye, FaLightbulb, FaGlobe } from "react-icons/fa";




export default function AboutSection() {

  const [isVisible, setIsVisible] = useState(true);



  if (!isVisible) return null;



  return (

    <section

      className="relative min-h-screen w-full px-4 sm:px-6 md:px-8 py-16 md:py-20"

      style={{ fontFamily: "'Roboto', sans-serif", backgroundColor: "#e7ebf3ff" }}

    >

      {/* Close Button */}

      {/* <button

        aria-label="Close section"

        className="fixed top-6 right-6 z-50 text-[#9ca3af] hover:text-[#111827] transition-colors text-4xl leading-none bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:shadow-lg"

        onClick={() => setIsVisible(false)}

      >

        ×

      </button> */}



      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <h2 className="text-4xl md:text-5xl font-bold text-[#1588d8] mb-8">

          About Us

        </h2>



      {/* ABOUT CONTENT */}
<div className="space-y-6 text-lg leading-relaxed text-[#1e1f24] text-justify">

<p>
  Learners Digital was founded by{" "}
  <span className="text-[#0f8ddf] font-semibold">Murali Konareddy</span>, an{" "}
  <span className="text-[#0f8ddf] font-semibold">IIT Kanpur alumnus</span>{" "}
  and former senior professional at{" "}
  <span className="text-[#0f8ddf] font-semibold">Infosys</span>, together with
  a team of experienced colleagues from the company. The founding team brought 
  a unique blend of delivery expertise and{" "}
  <span className="text-[#0f8ddf] font-semibold">
    education & research leadership
  </span>
  , enabling Learners Digital to bridge academia and industry. Over the years, 
  we have successfully designed and delivered{" "}
  <span className="text-[#0f8ddf] font-semibold">
    large-scale graduate training programs
  </span>
  , building strong foundations for IT careers.
</p>

<p>
  Murali played a pivotal role in establishing the{" "}
  <span className="text-[#0f8ddf] font-semibold">
    Infosys China Education Center
  </span>{" "}
  in partnership with the Chinese Government — an achievement that earned him
  recognition as an{" "}
  <span className="text-[#0f8ddf] font-semibold">
    Honorary Citizen of China
  </span>.
</p>

<p>
  Today,{" "}
  <span className="text-[#0f8ddf] font-semibold">
    Learners Digital collaborates with corporates and academic institutions
  </span>{" "}
  to bridge the industry–academia gap. In the past three years alone, we have
  recruited and trained over{" "}
  <span className="text-[#0f8ddf] font-semibold">3,000 engineers</span>{" "}
  for our clients, preparing production-ready and future-focused professionals.
</p>

<p className="font-medium text-[#1e1f24]">
  Our mission is simple yet powerful: to{" "}
  <span className="text-[#0f8ddf] font-semibold">
    nurture independent learners
  </span>
  , strengthen fundamentals, and empower individuals to grow into leaders who
  shape the future.
</p>

</div>




        {/* MISSION & VISION BLOCK */}

        <div className="grid md:grid-cols-2 gap-10 mt-14">

          {/* Vision */}

          <div className="bg-[#f7fbff] shadow-lg rounded-2xl p-8 border-l-4 border-[#1588d8]">

            <div className="flex items-center gap-3 mb-4">

              <FaBullseye className="text-[#1588d8] text-3xl" />

              <h3 className="text-2xl font-semibold text-[#1588d8]">Vision</h3>

            </div>

            <p className="text-[#2b2c30] text-justify">

              To build a globally trusted ecosystem where every learner can connect with opportunity and develop world-class skills.

            </p>

          </div>



          {/* Mission */}

          <div className="bg-[#f7fbff] shadow-lg rounded-2xl p-8 border-l-4 border-[#10a7ec]">

            <div className="flex items-center gap-3 mb-4">

              <FaLightbulb className="text-[#10a7ec] text-3xl" />

              <h3 className="text-2xl font-semibold text-[#10a7ec]">Mission</h3>

            </div>

            <p className="text-[#2b2c30] text-justify">

              To empower individuals through validated learning, practical experience, and industry mentorship.

            </p>

          </div>

        </div>



        {/* WHAT WE DO */}

        <div className="mt-20">

          <div className="flex items-center gap-3 mb-4">

            <FaGlobe className="text-[#0f8ddf] text-3xl" />

            <h3 className="text-3xl font-semibold text-[#0f8ddf]">What We Do</h3>

          </div>



          <div className="space-y-6 text-lg leading-relaxed text-[#1e1f24] text-justify">

            <p>

             What We Do

We specialize in acquiring, training, and deploying future-ready IT talent through a completely structured, industry-validated learning and workforce development model. Our purpose is to ensure that every learner becomes employable and every organization gains dependable, project-ready professionals who can contribute from the very first day.

Today, the technology ecosystem is evolving faster than ever  yet companies continue to struggle to find skilled talent, and students continue to graduate without industry-ready skills. We exist to bridge this critical gap by empowering learners with practical, modern, and job-oriented technical skills, and by supporting companies with skilled manpower that performs, grows, and stays.
            </p>

          </div>

        </div>



        {/* ACHIEVEMENTS */}

        <div className="mt-20">

          <div className="flex items-center gap-3 mb-4">

            <span className="text-3xl">🏆</span>

            <h3 className="text-3xl font-semibold text-[#0f8ddf]">

              Achievements & Contributions

            </h3>

          </div>



          <p className="text-lg leading-relaxed text-[#1e1f24] mb-10 text-justify">

          Over the years, we have created a measurable and meaningful impact across the talent development ecosystem. Our work has empowered learners, supported universities, and strengthened corporate hiring pipelines - all through a sustainable model of industry-aligned talent transformation.

Our achievements are not just numbers  they represent lives changed, companies empowered, and careers built.

          </p>



          {/* GRID */}

          <div className="grid md:grid-cols-2 gap-10">



            {/* Card 1 */}

            <div className="bg-[#f7fbff] p-6 rounded-xl shadow-md border-l-4 border-[#0f8ddf]">

              <h4 className="text-xl font-semibold text-[#0f8ddf] mb-3">

                🌏 Received Honorary Citizen Award from Government of China 

              </h4>

              <p className="text-[#2b2c30] text-justify">

               Mr. Murali Mohan Konareddy, Head of Education and Research, Infosys Technologies (China), was conferred the title of "Honorary citizen of Nahu district" by Joaxing Nahu District Peoples's government during the 'Spring in Nanhu' function held in China.

              </p>

            </div>



            {/* Card 2 */}

            <div className="bg-[#f7fbff] p-6 rounded-xl shadow-md border-l-4 border-[#0f8ddf]">

              <h4 className="text-xl font-semibold text-[#0f8ddf] mb-3">

                🧪 Extraordinary Science & Technology Mentor Award

              </h4>

              <p className="text-[#2b2c30] text-justify leading-normal mt-2">
              Mr. Murali has been honored with the Extraordinary Science & Technology Mentor Award 
              for his outstanding dedication to guiding learners, inspiring innovation, and shaping future-ready talent in the field of technology.
  </p>

            </div>



            {/* Card 3 */}

            <div className="bg-[#f7fbff] p-6 rounded-xl shadow-md border-l-4 border-[#0f8ddf]">

              <h4 className="text-xl font-semibold text-[#0f8ddf] mb-3">

                🏫 Founded Learners Pre-University College, Mysore

              </h4>

              <p className="text-[#2b2c30] text-justify">

                Established with a mission to bring world-class learning standards to pre-university education.

              </p>

            </div>



            {/* Card 4 */}

            <div className="bg-[#f7fbff] p-6 rounded-xl shadow-md border-l-4 border-[#0f8ddf]">

              <h4 className="text-xl font-semibold text-[#0f8ddf] mb-3">

                🏅 Infosys Excellence Award for People Development

              </h4>

              <p className="text-[#2b2c30] text-justify">

                Awarded for outstanding contribution to talent development and workforce growth initiatives.

              </p>

            </div>

          </div>

        </div>

      </div>
      <ourTeam/>
   



    </section>

  );

}