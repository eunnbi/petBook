import { PropsWithChildren } from "react";
import styled from "styled-components";

const TopNavContainer = styled.nav`
  display: flex;
  justify-content: center;

  width: 100%;
`;

const TopNavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1315px;
  height: 60px;

  background-color: #fff;

  .TopNav__Search__Icon {
    width: 20px;
    height: 20px;
  }
`;

const TopNavWrap = (props: PropsWithChildren<any>) => {
  const { children } = props;

  return (
    <TopNavContainer>
      <TopNavBox {...props}>{children}</TopNavBox>
    </TopNavContainer>
  );
};

export default TopNavWrap;
