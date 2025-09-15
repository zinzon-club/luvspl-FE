import styled from "@emotion/styled";
import type { BtnProps } from "@/types/types";
import { ABeePudding } from "@/styles/Font";

export default function Btn({ children, onClick }: BtnProps) {
  return (
    <Container>
      <Button onClick={onClick}>{children}</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  display: flex;
  width: 90%;
  justify-content: center;
  padding: 0.8rem;
  border: none;
  background-color: #829671;
  color: #f8ffed;
  border-radius: 2rem;
  font-size: 1.25rem;
  cursor: pointer;
  ${ABeePudding}
`;
