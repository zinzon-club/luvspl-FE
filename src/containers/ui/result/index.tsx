import * as _ from './style';
import { data } from './data';
import { useRouter } from 'next/navigation';
import Btn from '@/components/button/button';
import AnalyzingResult from '@/components/analyzingResult/analyzingResult';

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
            <Btn onClick={() => router.push('/main')}>홈으로</Btn>
        </_.Container>
    );
}