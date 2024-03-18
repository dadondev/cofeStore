import styled from "styled-components";

const Button = styled.button`
  width: 38px;
  height: 38px;
  max-width: 143px;
  border-radius: 6px;
  padding: 8px;
  display: flex;
  transition: 500ms all;
  gap: 5px;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.purpleLight};
  & > img {
    width: 15px;
  }
  & > span {
    display: none;
    transition: 500ms all;
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.purple};
  }
  @media (width > 400px) {
    width: 100%;
    & > span {
      display: block;
    }
  }
`;

const HeaderLocation = () => {
  return (
    <Button>
      <img src="/location.svg" alt="location" />
      <span>Porto Alegre, RS</span>
    </Button>
  );
};

export default HeaderLocation;
