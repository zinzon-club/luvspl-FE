import * as _ from './style';
import { data } from './data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Btn from '@/components/button/button';

export default function Result() {
    const router = useRouter();

    return (
        <_.Container>
            <_.Wrapper>
                <_.Title>나의 언어습관은</_.Title>
                {data.map(item =>
                    <_.Group key={item.id}>
                        <_.SubTitle>{item.title}</_.SubTitle>
                        {item.type === "stat" ? (
                            <_.Part>
                                <_.Often>{item.often}</_.Often>
                                <_.ResultImage />
                                <_.NumberGroup>
                                    <_.Number>{item.min}</_.Number>
                                    <_.Number>{item.max}</_.Number>
                                </_.NumberGroup>
                            </_.Part>
                        ) : (
                            <_.AdviceGroup>
                                {item.advice?.map((text, idx) => (
                                    <_.WithImage key={idx}>
                                        <Image src="/assets/band.svg" alt="band" width={30} height={30} />
                                        <_.Guide>{text}</_.Guide>
                                    </_.WithImage>
                                ))}
                            </_.AdviceGroup>
                        )}
                    </_.Group>
                )}
            </_.Wrapper>
            <Btn onClick={() => router.push('/main')}>홈으로</Btn>
        </_.Container>
    );
}