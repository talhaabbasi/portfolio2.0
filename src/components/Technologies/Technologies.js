import React from "react"
import { DiDatabase, DiReact } from "react-icons/di"
import { BsCode, BsCloudFill } from "react-icons/bs"
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents"
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles"

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Front-end to Back-end delivering complete features.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React along with frameworks like Gatsby and Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BsCode size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Python and ASP.Net
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDb, DynamoDb and Microsoft SQL Server
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BsCloudFill size="3rem" />
        <ListContainer>
          <ListTitle>Cloud Services</ListTitle>
          <ListParagraph>
            Experience with <br />
            Amazon Web Services
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Technologies
