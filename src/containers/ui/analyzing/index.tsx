import { useEffect, useRef } from "react";
import * as _ from "./style";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAnalyzeStore } from "@/store/useAnalyzeStore";
import { useUserStore } from "@/store/useUserStore";
import { useAnalyze } from "@/hooks/useAnalyze";
import { data } from "./data";

export default function Analyzing() {
  const router = useRouter();
  const user = useUserStore((s) => s.user);
  const setUser = useUserStore((s) => s.setUser);
  const file = useAnalyzeStore((s) => s.file);
  const { mutate, isPending } = useAnalyze();
  const hasRequested = useRef(false);

  useEffect(() => {
    if (!file) {
      router.replace("/main");
      return;
    }

    if (!user?.id) {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        try {
          const parsed = JSON.parse(savedUser);
          if (parsed?.id && parsed?.name) {
            const parsedUser = { ...parsed, id: Number(parsed.id) };
            setUser(parsedUser);
            return;
          }
        } catch (err) {
          console.error("Failed to parse saved user", err);
        }
      }

      alert("로그인이 필요해요. 다시 시도해주세요.");
      router.replace("/auth");
      return;
    }

    if (hasRequested.current) return;
    hasRequested.current = true;

    mutate({ file, userId: user.id, username: user.name });
  }, [file, mutate, router, setUser, user]);

  return (
    <_.Container>
      <_.Wrapper>
        <Image
          src="/assets/gif/record.gif"
          alt="record"
          width={250}
          height={250}
          style={{ borderRadius: "4px" }}
        />
        <_.TextGroup>
          <_.Title>분석 중</_.Title>
          <_.SubTitle>평소 사용하는 언어를 확인하고 있어요</_.SubTitle>
        </_.TextGroup>
        <_.Group>
          {data.map((text, index) => {
            const showComplete = hasRequested.current && !isPending;
            const shouldShow = text !== "분석완료!" || showComplete;
            return (
              shouldShow && (
                <_.WithImage key={index}>
                  <Image src="/assets/band.svg" alt="band" width={30} height={30} />
                  <_.Guide>{text}</_.Guide>
                </_.WithImage>
              )
            );
          })}
        </_.Group>
      </_.Wrapper>
    </_.Container>
  );
}
