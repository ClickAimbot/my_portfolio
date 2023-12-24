import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      Coming from a Full Stack Web Development Course, I have a great understanding of both front and back end technologies.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js <br/>
            Next.js <br/>
            TailwindCSS <br/>
            JavaScript <br/>
            TypeScript <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js <br/>
            MongoDB <br/>
            Express <br/>
            AWS <br/>
            SQL <br/>
            PostgreSQL <br/>
            Docker <br/>
            Vercel <br/>
            Aircode.io <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            VS Code <br/>
            Git CLI <br/>
            GitHub <br/>
            Figma <br/>
            Canva <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
