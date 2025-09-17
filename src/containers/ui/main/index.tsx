import * as _ from "./style";
import Btn from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();

  return (
    <_.Container>
      <_.Wrapper>
        <_.Group>
          <Image
            src="/assets/gif/know.gif"
            alt="know"
            width={210}
            height={210}
            style={{
              filter: "drop-shadow(0 0.2rem 0.75rem rgba(86, 115, 78, 0.494))",
            }}
          />
          <_.Inner>
            <_.TextGroup>
              <_.Title>알아가기</_.Title>
              <_.SubTitle>
                나를 사랑하는 첫 걸음은
                <br />
                우선 가장 먼저 나를 알아야 하는 법
              </_.SubTitle>
            </_.TextGroup>
            <_.Guide>
              데이터 저장 방법 <br /> 채팅 {">"} 설정 {">"} 대화 내용 내보내기{" "}
              {">"} <br /> {">"} 텍스트만 내보내기
            </_.Guide>
          </_.Inner>
        </_.Group>
      </_.Wrapper>
      <Btn onClick={() => router.push("/analyzing")}>데이터 삽입</Btn>
    </_.Container>
  );
}
