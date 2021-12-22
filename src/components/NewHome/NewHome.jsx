import React from "react";
import styled from "styled-components";
import { house1, house2 } from "../../Data/HouseSection";

const Section = styled.section`
  width: 100%;
  height: 100%;
`;
const LeftColumn = styled.div`

    img{
        width: 93%;
        height: 93%
        objcet-fit: cover;
    }

    h1 {
        font-weight: normal;
        margin: 1rem auto;
        font-size: clamp(1.5rem, 5.5vw, 2rem);
    }

`;

const RightColumn = styled.div`
    padding-top: 400px;

    img {
        width: 93%;
        height: 93%
        objcet-fit: cover;       
    }

    h1 {
        font-weight: normal;
        margin: 1rem auto;
        font-size: clamp(1.5rem, 5.5vw, 2rem);
    }

    @media screen and (max-width: 768px) {
        margin: 5rem auto;
        padding-top: 0px;
    }

`;

const Heading = styled.h1`
  margin: 1rem auto;
  font-size: clamp(1.5rem, 6vw, 3rem);
  text-align: left;
  padding-left: 3rem;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    text-align: center;
    padding-left: 0;
    margin-bottom: 3rem;
  }
`;

const Container = styled.div`
  text-align: center;
  padding: 0rem 1rem 5rem;
  display: flex;
  margin-top: -5rem;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 0;
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
  margin: 2rem;
}

&:hover {
  transform: translateY(-2px);
}

 @media screen and (max-width: 768px) {
     margin: 2rem auto;
 }
`;

const NewHome = () => {
  return (
    <Section>
      <Heading>View our newest Homes</Heading>
      <Container>
        <LeftColumn>
          <img src={house1.image} alt="img" />
          <h1>{house1.title}</h1>
          <Button>{house1.buttonLabel}</Button>
        </LeftColumn>
        <RightColumn>
          <img src={house2.image} alt="img" />
          <h1>{house2.title}</h1>
          <Button>{house2.buttonLabel}</Button>
        </RightColumn>
      </Container>
    </Section>
  );
};

export default NewHome;
