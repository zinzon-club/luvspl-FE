"use client";

import * as _ from './style';
import { useRouter } from 'next/navigation';

export default function Landing() {
  const router = useRouter();

  return (
    <_.Container onClick={() => router.push('/main')}>
      <_.Group>
        <_.Box />
        <_.TextGroup>
          <_.SubTitle>가장 좋아하는 나에게 주는 선물</_.SubTitle>
          <_.Title>사랑의 주문</_.Title>
        </_.TextGroup>
      </_.Group>
      <_.Login>화면 클릭 시 카카오톡 로그인 </_.Login>
    </_.Container>
  );
}