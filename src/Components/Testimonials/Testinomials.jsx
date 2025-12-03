"use client";

import { useRef, useState } from "react";

export default function Testimonials() {
  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const [isAnyPlaying, setIsAnyPlaying] = useState(false);

  const handlePlay = (currentIndex) => {
    // Pause all other videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== currentIndex) video.pause();
    });

    // Mark that something is playing (this will stop the scrolling)
    setIsAnyPlaying(true);
  };

  const handlePauseOrEnd = () => {
    // If any video is still playing, keep scrolling paused.
    const someonePlaying = videoRefs.current.some(
      (v) => v && !v.paused && !v.ended
    );

    if (!someonePlaying) setIsAnyPlaying(false);
  };

  const videoFiles = [
    "/Testimonial/Testimonial_F.mp4",
    "/Testimonial/Testimonial_2.mp4",
    "/Testimonial/Testimonial_3.mp4",
    "/Testimonial/Testimonial_4.mp4",
    "/Testimonial/Testimonial_5.mp4",
    "/Testimonial/Testimonial_6.mp4",
  ];

  const testimonialTexts = [
    // "Training helped me improve my confidence and skills.",
    "Amazing learning experience with practical exposure.",
    "Supportive trainers and great mentorship.",
    "Helpful for placement and interview preparation.",
    "Gained knowledge beyond the classroom.",
    "Transformed my career prospects positively.",
    "Boosted my skills and job readiness effectively.",
  ];

  const scrollingList = [...videoFiles, ...videoFiles];

  return (
    <div className="bg-[#e9f6f3ff] py-10 px-4 overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-[#0C1B33]">
        Testimonials
      </h2>

      <p className="text-center max-w-3xl mx-auto text-gray-700 mt-2 mb-8 text-base sm:text-lg">
        Hear directly from our learners about their experience and success
        journeys with our training.
      </p>

      <div className="relative w-full overflow-hidden">
        {/* Toggle "paused-by-video" class based on isAnyPlaying */}
        <div
          ref={containerRef}
          className={`flex gap-4 md:gap-6 scroll-animation group touch-pan-x ${
            isAnyPlaying ? "paused-by-video" : ""
          }`}
        >
          {scrollingList.map((file, index) => {
            const realIndex = index % videoFiles.length;
            return (
              <div
                key={index}
                className="testimonial-card backdrop-blur-xl bg-white/50 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl cursor-pointer hover:scale-[1.05] min-w-[75%] sm:min-w-[45%] md:min-w-[320px] p-4"
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-full h-52 sm:h-56 rounded-xl object-cover border border-gray-200 shadow-md"
                  controls
                  onPlay={() => handlePlay(index)}
                  onPause={handlePauseOrEnd}
                  onEnded={handlePauseOrEnd}
                >
                  <source src={file} type="video/mp4" />
                </video>

                <p className="text-sm text-gray-600 mt-3 text-center px-2">
                  {testimonialTexts[realIndex]}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes scrollMobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scrollDesktop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .scroll-animation {
          animation: scrollDesktop 23s linear infinite;
        }

        @media (max-width: 768px) {
          .scroll-animation {
            animation: scrollMobile 25s linear infinite;
          }
        }

        /* Pause the animation while hovered (original behavior) */
        .scroll-animation:hover {
          animation-play-state: paused;
        }

        /* Pause animation while any video is playing */
        .scroll-animation.paused-by-video {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
}
