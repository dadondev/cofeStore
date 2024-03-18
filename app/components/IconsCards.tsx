import styled from "styled-components";
import tablet from "../general/utils/tablet";
import laptop from "../general/utils/laptop";
import desktop from "../general/utils/desktop";

const StyledGroup = styled.div`
  transition: 500ms all;
  margin-top: 20px;
  display: grid;
  gap: 20px;

  @media (width>=660px) {
    grid-template-columns: 300px 300px;
    justify-content: center;
  }
  ${tablet} {
    /* grid-template-rows: 2fr; */
  }
  ${laptop} {
    grid-template-columns: 300px;
    justify-content: start;
  }
  ${desktop} {
    grid-template-columns: 300px 300px;
    margin-top: 66px;
  }
`;

const OneGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  & > img {
    width: 38px;
  }
  & > span {
    color: ${(props) => props.theme.colors.baseText};
    font-size: 1.6rem;
    font-family: Roboto;
  }
`;

const cards = [
  {
    text: "Compra simples e segura",
    url: "/shop.svg",
  },
  {
    text: "Embalagem mantém o café intacto",
    url: "/box.svg",
  },
  {
    text: "Entrega rápida e rastreada",
    url: "/time.svg",
  },
  {
    text: "O café chega fresquinho até você",
    url: "/cafe.svg",
  },
];

const IconsCards = () => {
  return (
    <StyledGroup>
      {cards.map((e, i) => (
        <OneGroup key={i}>
          <img src={e.url} alt="shop" />
          <span>{e.text}</span>
        </OneGroup>
      ))}
    </StyledGroup>
  );
};

export default IconsCards;
