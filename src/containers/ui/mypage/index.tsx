import * as _ from "./style";
import { info, settingGroup } from "./data";
import Image from "next/image";
import { useState } from "react";
import Off from "../../../../public/assets/toggleBtn/toggleOff.svg";
import On from "../../../../public/assets/toggleBtn/toggleOn.svg";
import { useRouter } from "next/navigation";

const Mypage = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  return (
    <_.Container>
      <_.NavDeco onClick={() => router.push(`/main`)}>{"<"}</_.NavDeco>
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
                    <_.DecoText>{item.name}</_.DecoText>
                  </_.DecoSet>
                  <_.DecoSpan onClick={() => router.push(item.nav)}>
                    {">"}
                  </_.DecoSpan>
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
