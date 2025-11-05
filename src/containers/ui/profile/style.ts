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
  padding-top: 12.7vh;
  flex-direction: column;
  gap: 1rem;
`;

export const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const SubContainer = styled.div`
  ${Basic};
  flex-direction: column;
  width: 100%;
  gap: 5rem;
`;

export const InfoSet = styled.div`
  ${Basic};
  flex-direction: column;
  width: 100%;
  gap: 0.225rem;
`;

export const MailText = styled.div`
  color: ${color.gray500};
  font-size: 1.5rem;
`;

export const NameText = styled.div`
  color: ${color.black};
  font-size: 2.25rem;
`;

export const EditButton = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 10rem;
  color: ${color.gray500};
  background-color: #eef5e3;
  transition: all 0.3s ease;
  transform: scale(1);

  &:hover {
    cursor: pointer;
    background-color: #e6eeda;
    transform: scale(1.05);
  }
`;

export const NavDeco = styled.div`
  color: ${color.gray400};
  font-size: 1.75rem;
  cursor: pointer;
  width: 100%;
`;
