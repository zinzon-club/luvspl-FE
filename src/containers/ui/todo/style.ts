import styled from "@emotion/styled";
import { color } from "@/styles/theme";
import Image from "next/image";
import isPropValid from "@emotion/is-prop-valid";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 70vh;
  padding-top: 1vh;
  flex-direction: column;
  gap: 2rem;
  cursor: default;
`;

export const NavSet = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  gap: 6.5rem;
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

export const Clover = styled(Image, {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "done",
}) <{ done: boolean }>`
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: ${({ done }) => (done ? "rotate(-15deg) scale(0.9)" : "rotate(0deg) scale(1)")};

  &:hover {
    transform: ${({ done }) =>
    done ? "rotate(-20deg) scale(0.95)" : "rotate(10deg) scale(1.05)"};
  }
`;