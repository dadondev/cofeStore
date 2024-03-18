import React from "react";
import styled from "styled-components";
import laptop from "../utils/laptop";
import desktop from "../utils/desktop";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const StyledConatiner = styled.div`
  padding-inline: 24px;
  margin: 0 auto;
  max-width: 100%;

  ${laptop} {
    max-width: 990px;
  }
  ${desktop} {
    max-width: 1150px;
  }
`;

const Container: React.FC<Props> = ({ className, children }) => {
  return <StyledConatiner className={className}>{children}</StyledConatiner>;
};

export default Container;
