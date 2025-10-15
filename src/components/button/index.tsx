import styled from "@emotion/styled";
import type { BtnProps } from "@/types/types";
import { ABeePudding } from "@/styles/Font";
import { color } from "@/styles/theme";

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
  background-color: ${color.primary};
  color: #f8ffed;
  border-radius: 2rem;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  transform: scale(1);
  cursor: pointer;
  ${ABeePudding}

  &:hover {
    background-color: #6B7D5C;
    transform: scale(1.05);
  }
`;
