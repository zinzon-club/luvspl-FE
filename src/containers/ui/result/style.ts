import styled from "@emotion/styled";
import { ABeePudding } from "@/styles/Font";
import { color } from "@/styles/theme";

const Basic = `
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  ${Basic};
  width: 100%;
  max-width: 400px;
  height: 70vh;
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
  ${Basic};
  width: 100%;
  row-gap: 2rem;
`;

export const Title = styled.div`
  ${ABeePudding};
  font-size: 3rem;
  text-align: center;
`;

export const SubTitle = styled.div`
  font-size: 1.75rem;
  color: ${color.gray700};
`;

export const Group = styled.div`
  ${Basic};
  width: 100%;
  row-gap: 2.25rem;
`;