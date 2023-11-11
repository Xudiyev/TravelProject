import Layout from "../../../components/Layout";
import TopDestination from "../../Destination/TopDestinations";
import JoinUs from "../../Home/components/JoinUsSection";
import LookingToGoElseWhere from "../../Home/components/LookingToGoElsewhere";
import BrandNewTripSection from "../BrandNewTripSection";
import MapSection from "../MapSectioN";
import ReviewsSection from "../ReviewsSection";
import WhyUsWithSixCards from "../WhyUsWithSixCards";
import FirstPageWithBackImg from "./firstPageWithBackImage";


export default function ItalyPage() {
  return (
    <Layout>
      <FirstPageWithBackImg />
      {/* We have the same section like on destination--name top destination consequently i call */}
      <TopDestination heading='Available trips' />
      <MapSection />
      <BrandNewTripSection />
      <ReviewsSection />
      <WhyUsWithSixCards heading='Expert guidance to help you plan your trip' />
      <LookingToGoElseWhere />
      <JoinUs />
    </Layout>
  )
}