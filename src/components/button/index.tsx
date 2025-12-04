import styled from "@emotion/styled";
import { BtnProps, InputProps } from "@/types/types";
import { ABeePudding } from "@/styles/Font";
import { color } from "@/styles/theme";

export function InputPrimary({ children, onChange }: InputProps) {
  return (
    <BtnContainer>
      <InputStyledPrimary
        id="csvInput"
        type="file"
        accept=".csv"
        onChange={onChange}
      />
      <FlietyledPrimary htmlFor="csvInput">{children}</FlietyledPrimary>
    </BtnContainer>
  );
}
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

const InputStyledPrimary = styled.input`
  display: none;
`;
const FlietyledPrimary = styled.label`
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
    background-color: #6b7d5c;
    transform: scale(1.05);
  }
`;
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
    background-color: #6b7d5c;
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
