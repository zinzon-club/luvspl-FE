"use client";
import * as _ from "./style";
import data from "@/store/resultList";
import { useRouter } from "next/navigation";
// import Btn from "@/components/button/button";
import AnalyzingResult from "@/components/analyzingResult/analyzingResult";

type Props = {
  id: string;
};

export default function ResultDetail({ id }: Props) {
  const router = useRouter(); // 안 쓰면 지워도 됨
  const idx = Number(id);
  if (!Number.isInteger(idx) || idx < 0 || idx >= data.length) {
    return <_.Container>잘못된 id 입니다.</_.Container>;
  }

  const target = data[idx]; // 해당 인덱스만 선택

  return (
    <_.Container>
      <_.Wrapper>
        <_.NavSet>
          <_.NavDeco onClick={() => router.push(`/resultList`)}>
            {"<"}
          </_.NavDeco>
          <_.Title>저장된 분석 결과</_.Title>
        </_.NavSet>
        {target.item.map((it, i) => (
          <_.Group key={i}>
            <_.SubTitle>{it.title}</_.SubTitle>
            <AnalyzingResult
              type={it.type as "stat" | "advice"}
              often={it.often}
              advice={it.advice}
            />
          </_.Group>
        ))}
      </_.Wrapper>
    </_.Container>
  );
}
