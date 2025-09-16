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
  padding-top: 10vh;
  flex-direction: column;
  gap: 4rem;
  cursor: default;
`;

export const NavSet = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  gap: 7.5rem;
`;
export const ResultSet = styled.div`
  display: flex;
  //align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 2.5rem;
`;
export const ResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  width: 100%;
  color: ${color.gray600};
  font-size: 1.25rem;
`;
export const NavDeco = styled.div`
  color: ${color.gray400};
  font-size: 1.5rem;
  cursor: pointer;
`;
export const Title = styled.div`
  color: ${color.black};
  font-size: 1.5rem;
`;
export const SubTitle = styled.div`
  color: ${color.gray500};
  font-size: 1rem;
`;
export const TitleSet = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
