import styled from "@emotion/styled";
import { ABeePudding } from "@/styles/Font";
import { keyframes } from "@emotion/react";

const Basic = `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  ${Basic}
  width: 100%;
  max-width: 400px;
  height: 100vh;
  row-gap: 3rem;
`;

export const Wrapper = styled.div`
  ${Basic}
  width: 100%;
  row-gap: 2rem;
`;

export const TextGroup = styled.div`
  ${Basic}
  width: 100%;
  text-align: center;
  row-gap: 1rem;
`;

const Animation = keyframes`
  0%   { content: "."; }
  33%  { content: ".."; }
  66%  { content: "..."; }
`;

export const Title = styled.div`
  ${ABeePudding}
  font-size: 3rem;

  &::after {
    content: ".";
    animation: ${Animation} 1.5s infinite steps(1, end);
  }
`;

export const SubTitle = styled.div`
  font-size: 1.75rem;
  color: #B2B7B2;
`;

export const Guide = styled.div`
  font-size: 1.5rem;
  color: #828282;
  text-align: center;
`;

export const Group = styled.div`
  ${Basic}
  row-gap:0.75rem;
`;

export const WithImage = styled.div`
  display: flex;
  gap: 0.5rem;
`;