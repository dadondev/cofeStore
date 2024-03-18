"use client";

import { useSelector } from "react-redux";
import styled from "styled-components";

interface Props {
  count: boolean;
}

const Button = styled.button<Props>`
  position: relative;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.yellowLight};
  padding: 9px;
  & > img {
    min-width: 20px;
  }
  & > p {
    transition: 500ms all;
    transform: ${(props) => (props.count ? "scale(1)" : "scale(0)")};
    top: -22%;
    right: -22%;
    position: absolute;
    padding: 2px 7px;
    border-radius: 999px;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.yellowDark};
    font-weight: 700;
  }
`;
const HeaderCart = () => {
  const count = useSelector(
    (state: { selectedProducts: number }) => state?.selectedProducts
  );
  return (
    <Button count={count > 0}>
      <img src="/cart.svg" alt="cart" />
      {count > 0 && <p>{count}</p>}
    </Button>
  );
};

export default HeaderCart;
