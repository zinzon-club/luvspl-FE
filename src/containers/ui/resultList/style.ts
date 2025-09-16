import styled from "@emotion/styled";
import { color } from "@/styles/theme";

const Basic = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  padding-top: 15vh;
  flex-direction: column;
  gap: 4rem;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const NavSet = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  gap: 8rem;
`;
export const ResultSet = styled.div`
  display: flex;
  //align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 2.5rem;
`;
export const ResultItem = styled.div`
  width: 100%;
  color: ${color.gray600};
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  cursor: pointer;
`;
export const NavDeco = styled.div`
  color: ${color.gray400};
  font-size: 1.5rem;
`;
export const Title = styled.div`
  color: ${color.black};
  font-size: 1.5rem;
`;
export const SubTitle = styled.div`
  font-size: 1.75rem;
  color: #545654;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 2.25rem;
`;
export const ToggleSet = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  row-gap: 0.5rem;
`;
export const ToggleDate = styled.div`
  color: ${color.gray500};
  font-size: 1.2rem;
`;
