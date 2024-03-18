"use client";

import { useState } from "react";
import styled from "styled-components";

const CounterMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 23px; */
`;

const PriceColumn = styled.article`
  color: ${(props) => props.theme.colors.baseText};
`;

const Currency = styled.span`
  font-family: Roboto;
  font-size: 1.4rem;
`;
const Price = styled.span`
  font-weight: 700;
  font-family: "Baloo 2";
  font-size: 2.4rem;
`;

const CounterColumn = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Counter = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.baseButton};
  border-radius: 6px;
  padding: 9px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  & > span {
    width: 20px;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.baseTitle};
  }
`;

const CountButton = styled.button`
  padding: 0;
  height: 100%;
`;

const ShopCart = styled.button`
  padding: 8px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.purpleDark};
  transition: 500ms all;
  &:hover {
    opacity: 0.7;
  }
`;

const CardCounter = () => {
  const [count, setCount] = useState(1);
  const minus = () => {
    count - 1 > 0 && setCount(count - 1);
  };
  const plus = () => {
    setCount(count + 1);
  };
  return (
    <CounterMain>
      <PriceColumn>
        <Currency>R$</Currency>
        <Price> 9,90</Price>
      </PriceColumn>
      <CounterColumn>
        <Counter>
          <CountButton onClick={minus}>
            <img src="/minus.svg" alt="minus" />
          </CountButton>
          <span>{count}</span>
          <CountButton onClick={plus}>
            <img src="/plus.svg" alt="plus" />
          </CountButton>
        </Counter>
        <ShopCart>
          <img src="/baseCart.svg" alt="icon" />
        </ShopCart>
      </CounterColumn>
    </CounterMain>
  );
};

export default CardCounter;
