"use client";
import styled from "styled-components";
import Container from "../general/components/Container";
import tablet from "../general/utils/tablet";
import laptop from "../general/utils/laptop";
import CoffeeCard from "./CoffeeCard";
import { useSelector } from "react-redux";

const StyledMain = styled.main`
  height: 100%;
  padding-top: 30px;
  ${tablet} {
    padding-top: 0;
  }
`;

const Title = styled.h1`
  font-family: "Baloo 2";
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 54px;
  ${laptop} {
    font-size: 3.2rem;
    text-align: left;
  }
`;
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 50px 32px;
`;

const Main = () => {
  const coffeeList = useSelector(
    (state: { allProducts: any[] }) => state.allProducts
  );
  return (
    <StyledMain>
      <Container>
        <Title>Nossos cafés</Title>
        <CardsContainer>
          {coffeeList.map((e, i) => (
            <CoffeeCard key={i} name={e.name} price={e.price} id={i} />
          ))}
        </CardsContainer>
      </Container>
    </StyledMain>
  );
};

export default Main;
