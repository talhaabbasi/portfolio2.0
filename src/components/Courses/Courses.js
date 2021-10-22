import React from "react"
import { Section, SectionTitle } from "../../styles/GlobalComponents"
import {
  Box,
  Boxes,
  BoxNum,
  BoxHead,
  BoxText,
  BoxAction,
  BoxIcons,
} from "./CoursesStyles"
import { AiFillGithub, AiFillSafetyCertificate } from "react-icons/ai"
import { courses } from "../../constants/constants"

const Courses = () => {
  return (
    <Section id="courses">
      <SectionTitle>Courses</SectionTitle>
      <Boxes>
        {courses.map(
          ({ id, title, issued_by, description, GH_LINK, CERT_LINK }) => (
            <Box key={id}>
              <BoxHead>{issued_by}</BoxHead>
              <BoxNum>{title}</BoxNum>
              <BoxText>{description}</BoxText>
              <BoxAction>
                {GH_LINK && (
                  <BoxIcons
                    target="_blank"
                    href={GH_LINK}
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub size="4rem" />
                  </BoxIcons>
                )}
                {CERT_LINK && (
                  <BoxIcons
                    target="_blank"
                    href={CERT_LINK}
                    rel="noopener noreferrer"
                  >
                    <AiFillSafetyCertificate size="4rem" />
                  </BoxIcons>
                )}
              </BoxAction>
            </Box>
          )
        )}
      </Boxes>
    </Section>
  )
}

export default Courses
