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
  margin-top: 35vh;
  flex-direction: column;
  gap: 2rem;
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
  font-size: 2rem;
`;
export const EditButton = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 10rem;
  color: ${color.gray500};
  background-color: #eef5e3;
  &:hover {
    cursor: pointer;
    color: ${color.white};
    background-color: ${color.primary};
  }
`;
