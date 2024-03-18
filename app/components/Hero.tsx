import styled from "styled-components";
import Container from "../general/components/Container";
import Content from "./Content";
import laptop from "../general/utils/laptop";
import tablet from "../general/utils/tablet";

const StyledHero = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  min-height: calc(100vh - 70px);
  padding-top: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ${tablet} {
    padding-top: 0;
  }
`;

const StyledContainer = styled(Container)`
  gap: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;

    & > img {
      max-width: 476px;
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <StyledContainer>
        <img src="/hero-img.png" alt="hero" />
        <Content />
      </StyledContainer>
    </StyledHero>
  );
};

export default Hero;
