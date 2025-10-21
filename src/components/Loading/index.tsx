"use client";

import Image from "next/image";
import styled from "@emotion/styled";

export default function Loading() {
  return (
    <Container>
      <Image src="/assets/gif/cup.gif" alt="cup" width={220} height={220} style={{ transform: "rotate(-8deg)", filter: "drop-shadow(0 0.2rem 2rem rgba(86, 115, 78, 0.42))", }} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  row-gap: 4rem;
  mask-repeat: no-repeat;
`;