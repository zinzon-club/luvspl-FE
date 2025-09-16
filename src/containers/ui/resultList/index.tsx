import * as _ from "./style";
import data from "@/store/resultList";
import { useRouter } from "next/navigation";

const ResultList = () => {
  const router = useRouter();
  return (
    <_.Container>
      <_.NavSet>
        <_.NavDeco onClick={() => router.push(`/mypage`)}>{"<"}</_.NavDeco>
        <_.Title>저장된 분석 결과</_.Title>
      </_.NavSet>
      <_.ResultSet>
        {data.map((item, i) => (
          <_.ResultItem key={i} onClick={() => router.push(`resultList/${i}`)}>
            ‣ {item.date}
          </_.ResultItem>
        ))}
      </_.ResultSet>
    </_.Container>
  );
};
export default ResultList;
