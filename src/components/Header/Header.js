import Link from "next/link"
import React from "react"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Logo,
  Span,
} from "./HeaderStyles"

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <Logo src="images/logo.png" /> <Span>Talha Abbasi</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#experience">
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#courses">
          <NavLink>Courses</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#github-stats">
          <NavLink>GitHub Stats</NavLink>
        </Link>
      </li>
      <li>
        <a href="/Talha Abbasi's Resume.pdf" download>
          <NavLink>Resume</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons
        href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href={`https://www.linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN}/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        href={`https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
)

export default Header
