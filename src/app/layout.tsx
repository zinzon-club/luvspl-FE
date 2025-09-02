"use client";

import '@/styles/GlobalStyle';
import styled from '@emotion/styled';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  max-height: 100vh;
  padding: 0.5rem 0.2rem;
  margin: 0 auto;
  row-gap: 4rem;
  background-color: #999;

  @media (min-width: 1024px) {
    max-width: 600px;
  }

  @media (max-width: 600px) {
    max-width: 100vw;
  }
`;