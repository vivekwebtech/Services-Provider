import RioGramHero from './Section1/section1';
import DigitalInnovation from './Section2/section2'; 
import Timeline from './Section3/section3';
import StatsSection from './Section4/section4'; 
import CoreValues from './Section5/section5';
import RioGramServices from './Section7/section7';
import Testimonials from './Section8/section8';
import RioGramContact from './Section9/section9';


export default function AboutUs() {
  return (
    <main>
      <RioGramHero />
      <DigitalInnovation />
      <Timeline />
      <StatsSection />
      <CoreValues />
      <RioGramServices />
      <Testimonials />
      <RioGramContact />

    </main>
  );
}