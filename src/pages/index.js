import Accomplishments from "../components/Accomplishments/Accomplishments"
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation"
import Hero from "../components/Hero/Hero"
import Projects from "../components/Projects/Projects"
import Technologies from "../components/Technologies/Technologies"
import Timeline from "../components/TimeLine/TimeLine"
import Courses from "../components/Courses/Courses"
import { Layout } from "../layout/Layout"
import { Section } from "../styles/GlobalComponents"

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Timeline />
      <Projects />
      <Technologies />
      <Courses />
      <Accomplishments />
    </Layout>
  )
}

export default Home
