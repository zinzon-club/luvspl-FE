import * as _ from "./style";
import info from "./data";
import Image from "next/image";
import { useState } from "react";
import Off from "@/../public/assets/toggle/toggleOff.svg";
import On from "@/../public/assets/toggle/toggleOn.svg";

const Mypage = () => {
  const [toggle, setToggle] = useState(false);
  const settingGroup = [
    {
      subTitle: "챌린지",
      item: [
        {
          name: "저장된 분석 결과",
          nav: "/result",
        },
        {
          name: "투두리스트",
          nav: "/todo",
        },
      ],
    },
    {
      subTitle: "설정",
      item: [
        {
          name: "프로필 정보",
          nav: "/info",
        },
      ],
    },
  ];
  return (
    <_.Container>
      <_.InfoContainer>
        <Image
          src={info.img}
          alt={"프로필사진"}
          width={150}
          height={150}
          style={{ borderRadius: "100px" }}
        />
        <_.UserName>{info.name}</_.UserName>
      </_.InfoContainer>
      <_.SettingContainer>
        {settingGroup.map((item, i) => (
          <_.SettingInfoContainer key={i}>
            <_.SubTitle>{item.subTitle}</_.SubTitle>
            <_.SubContainer>
              {item.item.map((item, j) => (
                <_.SubItem key={j}>
                  <_.DecoSet>
                    <Image
                      src="/assets/band.svg"
                      alt="band"
                      width={30}
                      height={30}
                    />
                    <_.DecoText>item.name</_.DecoText>
                  </_.DecoSet>
                  <_.DecoSpan>{">"}</_.DecoSpan>
                </_.SubItem>
              ))}
              {i == 1 && (
                <_.SubItem>
                  <_.DecoSet>
                    <Image
                      src="/assets/band.svg"
                      alt="band"
                      width={30}
                      height={30}
                    />
                    <_.DecoText>챗봇 활성화</_.DecoText>
                  </_.DecoSet>
                  <Image
                    src={toggle ? On : Off}
                    alt="on"
                    width={36}
                    onClick={() => setToggle(!toggle)}
                  />
                </_.SubItem>
              )}
            </_.SubContainer>
          </_.SettingInfoContainer>
        ))}
      </_.SettingContainer>
    </_.Container>
  );
};
export default Mypage;
