import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import * as _ from "./style";
import { BtnPrimary } from "@/components/button";
import AnalyzingResult from "@/components/analyzingResult";
import { useAnalyzeStore } from "@/store/useAnalyzeStore";
import { AnalyzeResultItem } from "@/types/analyze";

export default function Result() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const result = useAnalyzeStore((s) => s.result);
  const setResult = useAnalyzeStore((s) => s.setResult);

  useEffect(() => {
    if (result?.length) return;

    const cached = queryClient.getQueryData<AnalyzeResultItem[]>([
      "analyzeResult",
    ]);
    if (cached?.length) {
      setResult(cached);
      return;
    }

    router.replace("/main");
  }, [queryClient, result, router, setResult]);

  if (!result?.length) return null;

  return (
    <_.Container>
      <_.Wrapper>
        <_.Title>나의 언어습관은</_.Title>
        {result.map((item, index) => (
          <_.Group key={item.id ?? index}>
            <_.SubTitle>{item.title}</_.SubTitle>
            <AnalyzingResult
              type={item.type}
              often={item.often}
              min={item.min}
              max={item.max}
              advice={item.advice}
            />
          </_.Group>
        ))}
      </_.Wrapper>
      <BtnPrimary onClick={() => router.push("/home")}>홈으로</BtnPrimary>
    </_.Container>
  );
}
