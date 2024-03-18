import styled from "styled-components";
import IconsCards from "./IconsCards";
import laptop from "../general/utils/laptop";
import desktop from "../general/utils/desktop";

const StyledContent = styled.div`
  text-align: center;
  ${laptop} {
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-family: "Baloo 2";
  color: ${(props) => props.theme.colors.baseTitle};
  margin-bottom: 16px;
  line-height: 2.6rem;

  ${laptop} {
    font-size: 4.4rem;
    line-height: 4.6rem;
  }
  ${desktop} {
    font-size: 4.8rem;
  }
`;

const P = styled.p`
  font-size: 2rem;
  font-family: "Roboto";
  line-height: 2.4rem;
  color: ${(props) => props.theme.colors.baseSubTitle};
  ${laptop} {
    font-size: 2rem;
    line-height: 2.6rem;
  }
`;

const Content = () => {
  return (
    <StyledContent>
      <Title>Encontre o café perfeito para qualquer hora do dia</Title>
      <P>
        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
      </P>
      <IconsCards />
    </StyledContent>
  );
};

export default Content;
