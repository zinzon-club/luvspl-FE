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
  row-gap: 4rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Group = styled.div`
  ${Basic}
`;

export const Inner = styled.div`
  ${Basic}
  row-gap: 3rem;
`;

export const Box = styled.div`
  width: 100%;
  height: 25vh;
  background-color: #829671;
`;

export const TextGroup = styled.div`
  ${Basic}
  width: 100%;
  text-align: center;
  row-gap: 1.5rem;
`;

export const Title = styled.div`
  ${ABeePudding}
  font-size: 3rem;
`;

export const SubTitle = styled.div`
  font-size: 1.75rem;
  color: #828282;
`;

export const Guide = styled.div`
  font-size: 1.25rem;
  color: #b2b7b2;
  text-align: center;
`;
