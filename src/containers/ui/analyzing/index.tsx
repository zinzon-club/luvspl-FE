import { useEffect, useState } from "react";
import * as _ from "./style";
import Image from "next/image";
import Btn from "@/components/button/button";
import { useRouter } from 'next/navigation';
import { data } from './data';

export default function Analyzing() {
    const router = useRouter();
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowResult(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <_.Container>
            <_.Wrapper>
                <Image src="/assets/gif/record.gif" alt="record" width={250} height={250} style={{borderRadius: "4px"}} />
                <_.TextGroup>
                    <_.Title>분석 중</_.Title>
                    <_.SubTitle>평소 사용하는 언어를 확인하고 있어요</_.SubTitle>
                </_.TextGroup>
                <_.Group>
                    {data.map(
                        (text, index) => (text !== "분석완료!" || showResult) && (
                            <_.WithImage key={index}>
                                <Image src="/assets/band.svg" alt="band" width={30} height={30} />
                                <_.Guide>{text}</_.Guide>
                            </_.WithImage>
                        ))}
                </_.Group>
            </_.Wrapper>
            {showResult && <Btn onClick={() => router.push('/result')}>결과보기</Btn>}
        </_.Container>
    );
}