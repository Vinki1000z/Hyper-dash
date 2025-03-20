import AirXHero from "./components/AirXHero";
import AirXSpecifications from "./components/AirXSpecifications";
import EVSection4Footer from "./components/EVSection4Footer";
import EVSection22Features from "./components/EVSectionFeatures";
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import Stories from "./components/Stories";
import VehicleShowcase from "./components/VehicleShowcase";
import VehicleSpecs from "./components/VehicleSpecs";

export default function page() {
  return (
    <>
    <HeroSection/>
    <AirXHero/>
    <EVSection22Features/>
    <HeroSection2/>
    <AirXSpecifications/>
    <VehicleSpecs/>
    <VehicleShowcase/>
    <Stories/>
    <EVSection4Footer/>
    </>
  )
}
