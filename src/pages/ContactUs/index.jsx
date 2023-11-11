import Layout from "../../components/Layout";
import LookingToGoElseWhere from "../Home/components/LookingToGoElsewhere"
import JoinUs from "../Home/components/JoinUsSection"
import Introduction from "../AboutUs/components/Introduction";
import image from './ContactUsImage/ContactUsIntroduction.png'
import { MailContactSection } from "./MailContactSection";

export default function ContactUs() {
  return (
    <Layout>
      <Introduction img={image} title='Contact us' description='Your Journey Begins with a Conversation - Reach Out to Us Today!' />
      <MailContactSection />
      <LookingToGoElseWhere />
      <JoinUs />
    </Layout>
  )
}