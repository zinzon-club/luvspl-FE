import * as _ from './style';
import { data } from './data';
import { useRouter } from 'next/navigation';
import { BtnPrimary } from '@/components/button';
import AnalyzingResult from '@/components/analyzingResult';

export default function Result() {
    const router = useRouter();

    return (
        <_.Container>
            <_.Wrapper>
                <_.Title>나의 언어습관은</_.Title>
                {data.map(item => (
                    <_.Group key={item.id}>
                        <_.SubTitle>{item.title}</_.SubTitle>
                        <AnalyzingResult
                            type={item.type as 'stat' | 'advice'}
                            often={item.often}
                            advice={item.advice}
                        />
                    </_.Group>
                ))}
            </_.Wrapper>
            <BtnPrimary onClick={() => router.push('/home')}>홈으로</BtnPrimary>
        </_.Container>
    );
}