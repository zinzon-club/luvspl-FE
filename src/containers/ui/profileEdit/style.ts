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
  height: 66vh;
  flex-direction: column;
  gap: 15rem;
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

export const BasicSet = styled.div`
  ${Basic};
  width: 100%;
  flex-direction: column;
  gap: 2rem;
`;

export const EditSet = styled.div`
  ${Basic};
  width: 100%;
  flex-direction: column;
`;

export const EditItem = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0.75rem 0;
  flex-direction: column;
  gap: 1rem;
`;

export const EditText = styled.div`
  color: ${color.gray600};
  font-size: 1.5rem;
  padding: 0 0.25rem;
`;

export const EditInput = styled.input`
  color: ${color.gray600};
  font-size: 1.5rem;
  padding: 0.75rem 1rem;
  background-color: rgba(229, 239, 218, 0.5);
  border: none;
  border-radius: 1.5rem;
  outline: none;
`;

export const BtnGroup = styled.div`
  display: flex;
  width: 100%;
`;