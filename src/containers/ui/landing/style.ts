import styled from "@emotion/styled";
import { ABeePudding } from "@/styles/Font";

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
  row-gap: 10rem;
  cursor: pointer;
`;

export const Group = styled.div`
  ${Basic}
  height: 30vh;
  row-gap: 0.8rem;
`;

export const Box = styled.div`
  width: 50%;
  height: 12vh;
  background-color: #829671;
`;

export const TextGroup = styled.div`
  ${Basic}
  width: 100%;
`;

export const Title = styled.div`
  ${ABeePudding}
  font-size: 3rem;
`;

export const SubTitle = styled.div`
  font-size: 1.75rem;
  color: #828282;
`;

export const Login = styled.button`
  font-size: 1.5rem;
  color: #B2B7B2;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;