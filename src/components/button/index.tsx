import styled from "@emotion/styled";
import type { BtnProps } from "@/types/types";
import { ABeePudding } from "@/styles/Font";
import { color } from "@/styles/theme";

export function BtnPrimary({ children, onClick }: BtnProps) {
  return (
    <BtnContainer>
      <StyledPrimary onClick={onClick}>{children}</StyledPrimary>
    </BtnContainer>
  );
}

export function BtnSecondary({ children, onClick }: BtnProps) {
  return (
    <BtnContainer>
      <StyledSecondary onClick={onClick}>{children}</StyledSecondary>
    </BtnContainer>
  );
}

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledPrimary = styled.button`
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

const StyledSecondary = styled.button`
  display: flex;
  width: 90%;
  justify-content: center;
  padding: 0.8rem;
  border: 1px solid ${color.primary};
  background-color: #fafafa;
  color: ${color.primary};
  border-radius: 2rem;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  transform: scale(1);
  cursor: pointer;
  ${ABeePudding}

  &:hover {
    background-color: ${color.gray100};
    transform: scale(1.05);
  }
`;