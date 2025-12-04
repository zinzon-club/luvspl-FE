import * as _ from "./style";
import { InputPrimary } from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Papa from "papaparse";
import { useAnalyzeStore } from "@/store/useAnalyzeStore";
import { CsvRow } from "@/types/analyze";

export default function Main() {
  const router = useRouter();
  const setFile = useAnalyzeStore((s) => s.setFile);
  const clearAnalyze = useAnalyzeStore((s) => s.clear);

  const handleAnalyze = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse<CsvRow>(file, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true, // 숫자 자동 변환
      complete: (results: Papa.ParseResult<CsvRow>) => {
        if (!results.data?.length) {
          alert("유효한 CSV 데이터를 찾지 못했어요.");
          return;
        }
        clearAnalyze();
        setFile(file);
        router.push("/analyzing");
      },
      error: () => alert("파일을 불러오지 못했어요. 다시 시도해주세요."),
    });

    e.target.value = "";
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
