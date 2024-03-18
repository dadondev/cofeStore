import styled from "styled-components";

const Button = styled.button`
  position: relative;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.yellowLight};
  padding: 9px;
  & > img {
    min-width: 20px;
  }
  & > p {
    transition: 500ms all;
    transform: scale(1);
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
  return (
    <Button>
      <img src="/cart.svg" alt="cart" />
      <p>3</p>
    </Button>
  );
};

export default HeaderCart;
