"use client"

import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import { ABeePudding } from "@/styles/Font";
import { color } from "@/styles/theme";

export default function NotFounf() {
    const router = useRouter();

    return (
        <Container>
            <Wrapper>
                <Title>ㅠ.ㅠ</Title>
                <Sub>페이지를 찾을 수 없습니다</Sub>
            </Wrapper>
            <Go onClick={() => router.push("/main")}>홈으로</Go>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    height: 100vh;
    margin-bottom: 3rem;
    flex-direction: column;
    gap: 6rem;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: -1rem;
`;

const Title = styled.div`
    ${ABeePudding}
    display: flex;
    font-size: 5rem;
    font-weight: 900;
`;

const Sub = styled.div`
    ${ABeePudding}
    font-size: 2rem;
    color: ${color.gray600};
`;

const Go = styled.div`
    ${ABeePudding}
    font-size: 1.25rem;
    color: ${color.gray500};
    text-decoration: underline;
    cursor: pointer;

    &:hover{
        color: ${color.gray600};
    }
`;