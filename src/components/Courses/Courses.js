import React, { useState, useEffect } from "react"
import { Section, SectionTitle } from "../../styles/GlobalComponents"
import { Box, Boxes, BoxNum, BoxText } from "./CoursesStyles"
import { AiFillGithub } from "react-icons/ai"

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
            An intuitive course starting from the basic buildings blocks of a
            Blockchain to more advanced topics. Course content consists of
            Blockchain Intuition, Cryptocurrency Intuition, Smart Contracts and
            Alt Coins. Also has a couple of code-along tutorials where students
            are taught to build a Blockchain from scratch, build a
            Cryptocurrency and also, write Smart Contracts.
          </BoxText>
        </Box>
      </Boxes>
    </Section>
  )
}

export default Courses
