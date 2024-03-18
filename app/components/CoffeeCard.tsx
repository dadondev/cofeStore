import styled from "styled-components";
import CardCounter from "./CardCounter";

const Card = styled.div`
  padding-inline: 24px;
  padding-block: 112px 20px;
  max-width: 256px;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme.colors.baseCard};
  text-align: center;
  position: relative;
  & > img {
    position: absolute;
    left: 50%;
    top: -15%;
    transform: translate(-50%, 15%);
    max-width: 120px;
  }
`;

const Badge = styled.p`
  padding: 4px 8px;
  background-color: ${(props) => props.theme.colors.yellowLight};
  display: inline-block;
  color: ${(props) => props.theme.colors.yellowDark};
  font-weight: 700;
  margin-bottom: 16px;
  font-size: 1rem;
  border-radius: 100px;
  font-family: Roboto;
  margin: 0 auto;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.colors.baseSubTitle};
  font-size: 2rem;
  font-family: "Baloo 2";
  margin-bottom: 8px;
`;
const P = styled.p`
  font-family: Roboto;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.baseLabel};
  margin-bottom: 25px;
`;

const CoffeeCard = () => {
  return (
    <Card>
      <img src="/cof.svg" alt="coffee" />
      <Badge>Tradicional</Badge>
      <Title>Expresso Tradicional</Title>
      <P>O tradicional café feito com água quente e grãos moídos</P>
      <CardCounter />
    </Card>
  );
};

export default CoffeeCard;
