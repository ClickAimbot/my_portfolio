import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import Link from 'next/link';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:510-673-7239">510-673-7239</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:austin.amaral3@gmail.com">austin.amaral3@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Working every day to be 1% better</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="http://github.com/ClickAimbot">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="http://linkedin.com/in/austin-amaral3">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          {/* <SocialIcons href="http://instagram.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
