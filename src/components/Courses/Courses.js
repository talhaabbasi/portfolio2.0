import React from "react"
import { Section, SectionTitle } from "../../styles/GlobalComponents"
import {
  Box,
  Boxes,
  BoxNum,
  BoxText,
  BoxAction,
  BoxIcons,
} from "./CoursesStyles"
import { AiFillGithub } from "react-icons/ai"
import { GrCertificate } from "react-icons/gr"
import { courses } from "../../constants/constants"

const Courses = () => {
  return (
    <Section id="courses">
      <SectionTitle>Courses</SectionTitle>
      <Boxes>
        {courses.map(({ id, title, description, GH_LINK, CERT_LINK }) => (
          <Box key={id}>
            <BoxNum>{title}</BoxNum>
            <BoxText>{description}</BoxText>
            <BoxAction>
              <BoxIcons
                target="_blank"
                href={GH_LINK}
                rel="noopener noreferrer"
              >
                <AiFillGithub size="4rem" />
              </BoxIcons>
              <BoxIcons
                target="_blank"
                href={CERT_LINK}
                rel="noopener noreferrer"
              >
                <GrCertificate size="4rem" />
              </BoxIcons>
            </BoxAction>
          </Box>
        ))}
      </Boxes>
    </Section>
  )
}

export default Courses
