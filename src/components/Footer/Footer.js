import React from "react"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

import { SocialIcons } from "../Header/HeaderStyles"
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles"

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+923413542008">+92-341-3542008</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
            {process.env.NEXT_PUBLIC_EMAIL}
          </LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  )
}

export default Footer
