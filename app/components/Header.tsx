import Link from "next/link";
import styled from "styled-components";
import Container from "../general/components/Container";
import HeaderLocation from "./HeaderLocation";
import HeaderCart from "./HeaderCart";

const StyledHeader = styled.header`
  transition: 500ms all;
  position: sticky;
  top: 0;
  padding-block: 15px;
  background-color: ${(props) => props.theme.colors.back};
  width: 100%;
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
    gap: 12px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Link href={"/"}>
          <img src="/logo.svg" alt="logo" />
        </Link>
        <div>
          <HeaderLocation />
          <HeaderCart />
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
