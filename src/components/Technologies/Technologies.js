import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
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
            Experience with <br/>
            React.js <br/>
            Next.js <br/>
            Tailwind <br/>
            Redux <br/>
            Hooks <br/>
            Context API <br/>
            Jest <br/>
            Cypress <br/>
            Yum <br/>
            Axios <br/>
            TypeScript <br/>
            JavaScript <br/>
            HTML <br/>
            CSS <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node and Databases <br/>
            Mongo <br/>
            Express <br/>
            AWS <br/>
            SQL <br/>
            PostgreSQL <br/>
            Docker <br/>
            Git CLI <br/>
            GitHub <br/>
            VS Code <br/>
            Vercel <br/>
            Heroku <br/>
            Netlify <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
