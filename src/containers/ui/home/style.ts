import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0 0.5rem;

  @media screen and (min-width: 440px) {
    max-width: 430px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const ArrowBtn = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;     
  cursor: pointer;
`;