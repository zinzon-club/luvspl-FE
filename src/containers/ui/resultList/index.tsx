import * as _ from "./style";
import data from "@/store/resultList";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AnalyzingResult from "@/components/analyzingResult";
import Btoggle from "@/../public/assets/toggle/btoggle.svg";
import Rtoggle from "@/../public/assets/toggle/Rtoggle.svg";
import Image from "next/image";

const ResultList = () => {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null); // 어떤 아이템이 열렸는지

  return (
    <_.Container>
      <_.NavSet>
        <_.NavDeco onClick={() => router.push(`/home`)}>
          <Image
            src="assets/arrow.svg"
            alt="arrow"
            width={24}
            height={24}
            style={{ cursor: "pointer" }}
          />
        </_.NavDeco>
        <_.Title>저장된 분석 결과</_.Title>
      </_.NavSet>

      <_.ResultSet>
        {data.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <_.ResultItem key={i}>
              <_.ToggleSet
                onClick={() => setOpenIndex(isOpen ? null : i)}
                role="button"
                aria-expanded={isOpen}
              >
                <Image src={isOpen ? Btoggle : Rtoggle} alt={"토글"} />
                <_.ToggleDate>{item.date}</_.ToggleDate>
              </_.ToggleSet>
              {isOpen &&
                item.item.map((it, j) => (
                  <_.Group key={j}>
                    <_.SubTitle>{it.title}</_.SubTitle>
                    <AnalyzingResult
                      type={it.type as "stat" | "advice"}
                      often={it.often}
                      advice={it.advice}
                    />
                  </_.Group>
                ))}
            </_.ResultItem>
          );
        })}
      </_.ResultSet>
    </_.Container>
  );
};

export default ResultList;
