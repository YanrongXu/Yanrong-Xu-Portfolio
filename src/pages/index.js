import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import { Container} from "../components/Container"
import SEO from "../components/seo"
import AboutPage from '../components/AboutCard'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <Banner />
      <AboutPage />
    </Container>
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
