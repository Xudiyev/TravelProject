import Layout from "../../components/Layout";
import Introduction from './components/Introduction'
import SectionWithInformation from "./components/SectionWithInformation";
import WhyUsSection from "../Home/components/WhyUsSection"
import OurLocalExperts from "../Home/components/OurLocalExperts"
import LookingToGoElseWhere from "../Home/components/LookingToGoElsewhere"
import JoinUs from "../Home/components/JoinUsSection"
import image from '../AboutUs/components/Introduction/AboutUsImages/about.png'

export default function AboutUs() {
  return (
    <Layout>
      <Introduction img={image} title='About us' description = 'Discover Our Passion for Travel and Adventure.' />
      <SectionWithInformation />
      <WhyUsSection />
      <OurLocalExperts />
      <LookingToGoElseWhere />
      <JoinUs />
    </Layout>
  )
}