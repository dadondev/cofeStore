import styled from "styled-components";
import Container from "../general/components/Container";
import tablet from "../general/utils/tablet";

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
`;

const Main = () => {
  return (
    <StyledMain>
      <Container>
        <Title>Nossos cafés</Title>
      </Container>
    </StyledMain>
  );
};

export default Main;
