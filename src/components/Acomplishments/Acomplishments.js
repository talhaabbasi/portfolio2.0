import React, { useState, useEffect } from "react"
import CountUp from "react-countup"
import { Section, SectionTitle } from "../../styles/GlobalComponents"
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles"
import { AiFillGithub } from "react-icons/ai"

async function getContributions(token, username) {
  const headers = {
    Authorization: `bearer ${token}`,
  }
  const body = {
    query: `query {
      user(login: "${username}") {
        name
        contributionsCollection {
          contributionCalendar {
            colors
            totalContributions
            weeks {
              contributionDays {
                color
                contributionCount
                date
                weekday
              }
              firstDay
            }
          }
        }
      }
    }`,
  }
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  })
  const data = await response.json()
  return data
}

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}

const Acomplishments = () => {
  const [user, setUser] = useState(null),
    [totalContributions, setTotalContributions] = useState(null),
    [startingDate, setStartingDate] = useState(null)
  useEffect(async () => {
    const response = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
    )
    response.json().then((data) => {
      setUser(data)
    })
    const contributions = await getContributions(
      process.env.NEXT_PUBLIC_GITHUB_TOKEN,
      process.env.NEXT_PUBLIC_GITHUB_USERNAME
    )
    setTotalContributions(
      contributions?.data?.user?.contributionsCollection?.contributionCalendar
        ?.totalContributions
    )
    var date = new Date(
      contributions?.data?.user?.contributionsCollection?.contributionCalendar?.weeks[0].firstDay
    )
    setStartingDate(date.toLocaleDateString("en-US", options))
  }, [
    process.env.NEXT_PUBLIC_GITHUB_TOKEN,
    process.env.NEXT_PUBLIC_GITHUB_USERNAME,
  ])
  return (
    <Section id="github-stats">
      <SectionTitle>
        GitHub Stats{" "}
        <a
          target="_blank"
          href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <AiFillGithub size="4rem" />
        </a>
      </SectionTitle>
      {user && totalContributions && (
        <Boxes>
          <Box>
            <BoxNum>
              <CountUp end={totalContributions} duration={10} redraw={true} />{" "}
              commits
            </BoxNum>
            <BoxText>since {startingDate}</BoxText>
          </Box>
          <Box>
            <BoxNum>{user.public_repos}</BoxNum>
            <BoxText>public repos</BoxText>
          </Box>
          <Box>
            <BoxNum>{user.followers}</BoxNum>
            <BoxText>followers</BoxText>
          </Box>
          <Box>
            <BoxNum>{user.following}</BoxNum>
            <BoxText>following</BoxText>
          </Box>
        </Boxes>
      )}
    </Section>
  )
}

export default Acomplishments
