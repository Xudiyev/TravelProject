import Layout from "../../components/Layout";
import LookingToGoElseWhere from "../Home/components/LookingToGoElsewhere"
import JoinUs from "../Home/components/JoinUsSection"
import Introduction from "../AboutUs/components/Introduction";
import blogImage from './imagesBlog/blog.png'
import Categories from "./CategoriesSection";
import BlogCards from "./BlogCardsSection";
export default function Blog() {
  return (
    <Layout>
      <Introduction img={blogImage} title='Blog' description = 'Blog articles for "Inspiration".' />
      <Categories/>
      <BlogCards/>
      <LookingToGoElseWhere />
      <JoinUs />
    </Layout>
  )
}