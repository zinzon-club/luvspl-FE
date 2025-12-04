import * as _ from "./style";
import Image from "next/image";
import type { AnalyzingResultprops } from "@/types/types";

export default function AnalyzingResult({
  type,
  often,
  min,
  max,
  advice,
}: AnalyzingResultprops) {
  if (type === "stat") {
    return (
      <_.Part>
        <_.Often>{often}</_.Often>
        <_.ResultImage />
        <_.NumberGroup>
          <_.Number>{min}</_.Number>
          <_.Number>{max}</_.Number>
        </_.NumberGroup>
      </_.Part>
    );
  }

  return (
    <_.AdviceGroup>
      {(advice?.length ? advice : ["피드백이 아직 없어요."]).map((text, idx) => (
        <_.WithImage key={idx}>
          <Image src="/assets/band.svg" alt="band" width={30} height={30} />
          <_.Guide>{text}</_.Guide>
        </_.WithImage>
      ))}
    </_.AdviceGroup>
  );
}
