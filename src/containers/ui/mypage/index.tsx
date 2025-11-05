import * as _ from "./style";
import { settingGroup } from "./data";
import Image from "next/image";
import { useState } from "react";
import { useChangeUserInfo } from "@/hooks/changeUserInfo";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

const Mypage = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const { user } = useChangeUserInfo();

  if (!user) return <_.Loading> <Loading /> </_.Loading>;

  return (
    <_.Container>
      <_.InfoContainer>
        <Image
          src={user.img || "/assets/default.svg"}
          alt="프로필사진"
          width={150}
          height={150}
          style={{ borderRadius: "100px" }}
        />
        <_.UserName>{user.name}</_.UserName>
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
                    src={
                      toggle
                        ? "/assets/toggleBtn/toggleOn.svg"
                        : "/assets/toggleBtn/toggleOff.svg"
                    }
                    alt="on"
                    width={36}
                    height={24}
                    onClick={() => setToggle(!toggle)}
                    style={{ cursor: 'pointer' }}
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
