import React from "react"

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents"
import Button from "../../styles/GlobalComponents/Button"
import { LeftSection } from "./HeroStyles"

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there! <br />I am Talha Abbasi
      </SectionTitle>
      <a
        href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Get in touch</Button>
      </a>
    </LeftSection>
  </Section>
)

export default Hero
