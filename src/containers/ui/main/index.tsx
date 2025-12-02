import * as _ from "./style";
import { InputPrimary } from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";
import Papa from "papaparse";

interface CsvRow {
  Date: string;
  User: number;
  Message: string;
}

export default function Main() {
  const [csvData, setCsvData] = useState<CsvRow[] | null>(null);
  const router = useRouter();
  const handleAnalyze = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse<CsvRow>(file, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true, // 숫자 자동 변환
      complete: (results: Papa.ParseResult<CsvRow>) => {
        console.log(results.data); // 타입이 CsvRow[]로 잡힘
        setCsvData(results.data);
        router.push("/analyzing");
      },
    });
  };
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
      <InputPrimary onChange={handleAnalyze}>데이터 삽입</InputPrimary>
    </_.Container>
  );
}
