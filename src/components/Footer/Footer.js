import React from "react"
import {
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
} from "./FooterStyles"
import LinkedInBadge from "./LinkedInBadge"

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
            {process.env.NEXT_PUBLIC_EMAIL}
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkItem>
            <LinkedInBadge />
          </LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  )
}

export default Footer
