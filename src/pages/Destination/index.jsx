import Layout from "../../components/Layout";
import CountriesList from "./CountriesListsSection";
import TopDestination from "./TopDestinations";
import TiagoInPortugal from "./localExpertInPortugalSection";
import JoinUs from "../Home/components/JoinUsSection";
import BackgroundGifSection from "./BackgroundGifSection";

export function Destinations(){
        // const [queryParamps,querySetParams]= useSearchParams()
        // console.log(queryParamps.get("sort"));
    return(
        <Layout>
        {/* <Link to='Azerbaijan' >Azerbaijan</Link>
        <Link to='Italy' >Italy</Link>
        <Link to='Turkiye' >Turkiye</Link> */}
        <BackgroundGifSection/>
        <CountriesList/>
        <TopDestination heading = 'Top Destinations' />
        <TiagoInPortugal />
        <JoinUs/>
        </Layout>
    )
}