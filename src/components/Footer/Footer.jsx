import React from "react";
import styled from "styled-components";
import { FooterData } from "../../Data/FooterData";

const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background: #000;
`;
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    padding-top: 1rem;
    justify-content: center;
  }
`;
const LeftColumn = styled.div``;
const RightColumn = styled.div``;
const Socials = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const SocialLink = styled.div`
  font-size: 2rem;
  margin-right: 3rem;
  color: #ff8100;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
  }
`;
const Heading = styled.h1`
  font-size: clamp(1.5rem, 5vw, 6rem);
  color: #fff;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    margin-top: 3rem;
    justify-content: space-between;
  }

  h3 {
    font-size: clamp(1rem, 4vw, 2rem);
    color: #fff;
  }

  p {
    font-size: 18px;
    color: gray;
    margin: 10px 0px 10px 5px;
    transition: 0.3s;

    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
`;
const Contact = styled.div`
  margin-right: 3rem;
`;
const Office = styled.div``;
const ContactLink = styled.div``;

const Footer = () => {
  return (
    <Section>
      <Container>
        <LeftColumn>
          <Heading>{FooterData.title}</Heading>
          <Socials>
            {FooterData.social.map((item, idx) => (
              <SocialLink key={idx}>{item.logo}</SocialLink>
            ))}
          </Socials>
        </LeftColumn>
        <RightColumn>
          <Wrapper>
            <Contact>
              <h3>Contact</h3>
              {FooterData.contact.map((item, idx) => (
                <ContactLink key={idx}>
                  <p>{item.title}</p>
                </ContactLink>
              ))}
            </Contact>
            <Office>
              <h3>Office</h3>
              {FooterData.office.map((item, idx) => (
                <ContactLink key={idx}>
                  <p>{item.title}</p>
                </ContactLink>
              ))}
            </Office>
          </Wrapper>
        </RightColumn>
      </Container>
    </Section>
  );
};

export default Footer;
