import Layout from "../../components/Layout";
import Section1 from "../Home/components/section1";
import TrendingNow from "./components/TrendingNow";
import BrandNewTrips from "./components/BrandNewTripsSection";
import WhyUs from "./components/WhyUsSection";
import OurLocalExperts from "./components/OurLocalExperts";
import SectionWithNature from "./components/SectionWIthNature";
import Europe from "./components/EuropeSection";
import Asia from "./components/AsiaSection";
import LookingToGoElseWhere from "./components/LookingToGoElsewhere";
import JoinUs from "./components/JoinUsSection";
import RiseToTheTop from "./components/RiseToTheTop";
import {useEffect} from 'react';


export default function Home () {
  useEffect(() => {
    console.log(useEffect);
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [])

  return (
    <Layout>
        <Section1/>
        <TrendingNow/>
        <BrandNewTrips/>
        <WhyUs heading = 'Why us?' />
        <OurLocalExperts/>
        <SectionWithNature/>
        <Europe/>
        <Asia/>
        <LookingToGoElseWhere/>
        <JoinUs/>
        <RiseToTheTop/>
    </Layout>
  )
}