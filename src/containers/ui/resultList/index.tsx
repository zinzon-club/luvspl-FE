import { useEffect, useState } from "react";
import Image from "next/image";
import * as _ from "./style";
import { useRouter } from "next/navigation";
import AnalyzingResult from "@/components/analyzingResult";
import Loading from "@/components/Loading";
import { useUserStore } from "@/store/useUserStore";
import { useAnalyzeHistory } from "@/hooks/useAnalyzeHistory";

const ResultList = () => {
  const router = useRouter();
  const user = useUserStore((s) => s.user);
  const setUser = useUserStore((s) => s.setUser);
  const [userId, setUserId] = useState<number | null>(user?.id ?? null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (user?.id) {
      setUserId(user.id);
      return;
    }

    const saved = localStorage.getItem("user");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed?.id) {
          const parsedUser = { ...parsed, id: Number(parsed.id) };
          setUser(parsedUser);
          setUserId(parsedUser.id);
          return;
        }
      } catch (err) {
        console.error("Failed to restore user", err);
      }
    }

    router.replace("/auth");
  }, [router, setUser, user]);

  const { data, isLoading, isError } = useAnalyzeHistory(userId);

  if (isLoading) return <Loading />;

  if (isError || !data?.length) {
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
          <_.Message>저장된 분석 결과가 없어요.</_.Message>
        </_.ResultSet>
      </_.Container>
    );
  }

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
            <_.ResultItem key={item.id ?? i}>
              <_.ToggleSet
                onClick={() => setOpenIndex(isOpen ? null : i)}
                role="button"
                aria-expanded={isOpen}
              >
                <_.ToggleImage isOpen={isOpen}>
                  <Image src="assets/toggle.svg" alt="토글" width={24} height={24} />
                </_.ToggleImage>
                <_.ToggleDate>{item.date ?? "최근 기록"}</_.ToggleDate>
              </_.ToggleSet>
              {isOpen &&
                item.items.map((it, j) => (
                  <_.Group key={it.id ?? j}>
                    <_.SubTitle>{it.title}</_.SubTitle>
                    <AnalyzingResult
                      type={it.type as "stat" | "advice"}
                      often={it.often}
                      min={it.min}
                      max={it.max}
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
