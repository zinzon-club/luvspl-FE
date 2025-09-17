import styled from "@emotion/styled";
import { color } from "@/styles/theme";

const Basic = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  flex-direction: column;
  padding-top: 12vh;
  gap: 2rem;
`;
export const InfoContainer = styled.div`
  ${Basic};
  width: 100%;
  gap: 0.5rem;
  flex-direction: column;
`;
export const UserName = styled.div`
  font-size: 2.25rem;
  text-align: center;
  color: ${color.black};
  cursor: default;
`;
export const SettingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1.75rem;
`;
export const SettingInfoContainer = styled.div`
  width: 100%;
  padding: 1rem 0.75rem;
  border-radius: 1.5rem;
  background-color: rgba(229, 239, 218, 0.5);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.75rem;
`;
export const SubTitle = styled.div`
  font-size: 1.5rem;
  color: ${color.gray700};
  padding: 0 0.25rem;
  cursor: default;
`;
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const SubItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const DecoSet = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const DecoText = styled.div`
  width: 100%;
  font-size: 1.25rem;
  color: ${color.gray600};
  cursor: default;
`;
export const DecoSpan = styled.div`
  font-size: 1.25rem;
  color: ${color.gray600};
  padding: 0 0.5rem;
  cursor: pointer;
`;
export const NavDeco = styled.div`
  color: ${color.gray400};
  font-size: 1.75rem;
  cursor: pointer;
  width: 100%;
`;
