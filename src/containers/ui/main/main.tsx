import * as _ from './sytle';
import Btn from '@/components/button/button';
import Image from 'next/image';

export default function Main() {
  return (
    <_.Container>
      <_.Wrapper>
        <Image src="assets/arrow.svg" alt="arrow" width={24} height={24} style={{cursor:"pointer"}} />
        <_.Group>
          <_.Box />
          <_.TextGroup>
            <_.Title>알아가기</_.Title>
            <_.SubTitle>나를 사랑하는 첫 걸음은<br />우선 가장 먼저 나를 알아야 하는 법</_.SubTitle>
          </_.TextGroup>
          <_.Guide>데이터 저장 방법 <br /> 채팅 {'>'} 설정 {'>'} 대화 내용 내보내기 {'>'} <br /> {'>'} 텍스트만 내보내기</_.Guide>
        </_.Group>
        <Image src="assets/arrow.svg" alt="arrow" width={24} height={24}  style={{transform:"rotate(180deg)", cursor:"pointer"}} />
      </_.Wrapper>
      <Btn>데이터 삽입</Btn>
    </_.Container>
  );
}