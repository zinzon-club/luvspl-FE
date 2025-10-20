'use client'

import GlobalStyle from "@/styles/GlobalStyle";
import styled from "@emotion/styled";
import React from "react";
import Providers from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        <Container>
          <Providers>{children}</Providers>
        </Container>
      </body>
    </html>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
  background-image: url("/assets/BG.svg");
  background-repeat: no-repeat;
  background-position: center;
  overflow-x: auto;
`;
