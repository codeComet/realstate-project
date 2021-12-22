import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-top: 0;
    grid-template-rows: 500px;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const Button = styled.button`
  background: hsl(210, 100%, 5%);
  white-space: nowrap;
  border: none;
  outline: none;
  min-width: 150px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 20px;
  color: #fff;
  font-size: 16px;
}

&:hover {
  transform: translateY(-2px);
}
`;

const Info = ({ heading, paraOne, paraTwo, buttonLabel, image, reverse }) => {
  return (
    <Section>
      <Container>
        <ColumnLeft reverse={reverse}>
          <Fade left>
            <h1>{heading}</h1>
            <p>{paraOne}</p>
            <p>{paraTwo}</p>
            <Button>{buttonLabel}</Button>
          </Fade>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <Slide right>
            <img src={image} alt="img" />
          </Slide>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Info;
