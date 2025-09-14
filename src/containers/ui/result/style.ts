import styled from "@emotion/styled";
import { ABeePudding } from "@/styles/Font";

const Basic = `
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  ${Basic}
  width: 100%;
  max-width: 400px;
  height: 80vh;
  row-gap: 4rem;
  padding: 0 1rem;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Wrapper = styled.div`
  ${Basic}
  width: 100%;
  row-gap: 2rem;
`;

export const Title = styled.div`
  ${ABeePudding}
  font-size: 3rem;
  text-align: center;
`;

export const SubTitle = styled.div`
  font-size: 1.75rem;
  color: #545654;
`;

export const Group = styled.div`
  ${Basic}
  width: 100%;
  row-gap: 2.25rem;
`;

export const Often = styled.div`
  font-size: 1.5rem;
  color: #828282;
`;

export const Part = styled.div`
  ${Basic}
  row-gap: 0.5rem;
`;

export const ResultImage = styled.div`
  width: 100%;
  height: 4vh;
  border-radius: 99rem;
  background: linear-gradient(to right, #BECAB6, #F8E7EA);
`;

export const Number = styled.div`
  font-size: 1rem;
  color: #B2B7B2;
`;

export const NumberGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Guide = styled.div`
  font-size: 1.5rem;
  color: #828282;
`;

export const WithImage = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const AdviceGroup = styled.div`
  ${Basic}
  row-gap: 1.25rem;
`;