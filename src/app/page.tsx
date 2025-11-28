
import VideoSection from '../Pages/videopage';
import JobSection from '../Components/Jobsection/JobSection';
import CorporatePage from './Corporate/page';
import HeroSection from '../Components/Hero/HeroSection';
import StatsSection from '../Components/Stats/StatsSection';
import EcosystemSection from '../Components/Ecosystem/EcosystemSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <EcosystemSection />
      <JobSection />
      <VideoSection />
    </div>  
  );
}