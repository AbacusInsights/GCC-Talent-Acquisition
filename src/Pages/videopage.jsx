"use client";
import VideoSlider from "../Components/VideoSlider/VideoSlider";

const videos = [
  { id: 1, src: "/videos/video2.mp4", poster: "/videos/poster2.png", title: "Onyx", subtitle: "Onyx Health Best in KLAS for FHIR-based health data interoperability. We power CMS-0057—and help define the standards that shape it." },
  { id: 2, src: "/videos/video1.mp4", poster: "/videos/poster1.jpg", title: "Learners Digital", subtitle: "Learners Digital Celebration Video." },
  { id: 3, src: "/videos/video3.mp4", poster: "/videos/poster3.jpg", title: "Abacus", subtitle: "Abacus Insights simplifies healthcare data with best-in-class data management solutions that improve data quality and drive valuable insights." },
  { id: 4, src: "/videos/video4.mp4", poster: "/videos/poster4.png", title: "Get ToGether of Onyx and NewWave", subtitle: "Teams unite to support special communities" },
  { id: 5, src: "/videos/video5.mp4", poster: "/videos/poster5.png", title: "University Placement Officers MeetUp 2025", subtitle: "Gathering with the placement Officers of differnt Universities." },
//   { id: 6, src: "/videos/video1.mp4", poster: "/videos/poster1.jpg", title: "Intro", subtitle: "Short one-line description" },
//   { id: 7, src: "/videos/video1.mp4", poster: "/videos/poster1.jpg", title: "Intro", subtitle: "Short one-line description" },
];

export default function VideoSection() {
  return (
    <main className="p-8">
      <VideoSlider videos={videos} visibleCount={3} />
    </main>
  );
}
