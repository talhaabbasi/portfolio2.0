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

const Courses = () => {
  return (
    <Section id="github-stats">
      <SectionTitle>Courses</SectionTitle>
      <Boxes>
        <Box>
          <BoxNum>
            Blockchain A-Z™: Learn How To Build Your First Blockchain
          </BoxNum>
          <BoxText>
            An intuitive course starting from the basic building blocks of a
            Blockchain to more advanced topics. Course content consists of
            Blockchain Intuition, Cryptocurrency Intuition, Smart Contracts and
            Alt Coins. Also has a couple of code-along tutorials where students
            are taught to build a Blockchain from scratch, build a
            Cryptocurrency and also, write Smart Contracts.
          </BoxText>
          <BoxAction>
            <BoxIcons
              target="_blank"
              href={process.env.NEXT_PUBLIC_GH_COURSE_BLOCKCHAIN}
              rel="noopener noreferrer"
            >
              <AiFillGithub size="4rem" />
            </BoxIcons>
            <BoxIcons
              target="_blank"
              href={process.env.NEXT_PUBLIC_UDEMY_CERTIFICATE_BLOCKCHAIN}
              rel="noopener noreferrer"
            >
              <GrCertificate size="4rem" />
            </BoxIcons>
          </BoxAction>
        </Box>
      </Boxes>
    </Section>
  )
}

export default Courses
