import styled from "@emotion/styled";

const Basic = `
  display: flex;
  flex-direction: column;
`;

export const Part = styled.div`
  ${Basic}
  row-gap: 0.5rem;
`;

export const Often = styled.div`
  font-size: 1.5rem;
  color: #828282;
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

export const AdviceGroup = styled.div`
  ${Basic}
  row-gap: 1.25rem;
`;

export const WithImage = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Guide = styled.div`
  font-size: 1.5rem;
  color: #828282;
`;