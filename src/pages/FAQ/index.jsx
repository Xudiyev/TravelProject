import Layout from "../../components/Layout";
import Introduction from '../AboutUs/components/Introduction'
import AccordionSection from "./AccordionSection";
import image from './FaqImg/FAQ.png'

export default function FaqPage() {
  return (
    <Layout>
      <Introduction img={image} title='FAQ' description = 'Unlocking the Mysteries of Travel: Your Questions, Our Journey.' />
      <AccordionSection />
    </Layout>
  )
}