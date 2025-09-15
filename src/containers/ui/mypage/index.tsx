import * as _ from "./style";
import info from "./data";
import Image from "next/image";
import { DecoSpan } from "./style";

const Mypage = () => {
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
        <_.SettingInfoContainer>
          <_.SubTitle>챌린지</_.SubTitle>
          <_.SubContainer>
            <_.SubItem>
              <_.DecoSet>
                <Image
                  src="/assets/band.svg"
                  alt="band"
                  width={30}
                  height={30}
                />
                <_.DecoText>저장된 분석 결과</_.DecoText>
              </_.DecoSet>
              <_.DecoSpan>{">"}</_.DecoSpan>
            </_.SubItem>
            <_.SubItem>
              <_.DecoSet>
                <Image
                  src="/assets/band.svg"
                  alt="band"
                  width={30}
                  height={30}
                />
                <_.DecoText>투두리스트</_.DecoText>
              </_.DecoSet>
              <_.DecoSpan>{">"}</_.DecoSpan>
            </_.SubItem>
          </_.SubContainer>
        </_.SettingInfoContainer>

        <_.SettingInfoContainer>
          <_.SubTitle>설정</_.SubTitle>
          <_.SubContainer>
            <_.SubItem>
              <_.DecoSet>
                <Image
                  src="/assets/band.svg"
                  alt="band"
                  width={30}
                  height={30}
                />
                <_.DecoText>프로필 정보</_.DecoText>
              </_.DecoSet>
              <_.DecoSpan>{">"}</_.DecoSpan>
            </_.SubItem>
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
              <_.DecoSpan>{">"}</_.DecoSpan>
            </_.SubItem>
          </_.SubContainer>
        </_.SettingInfoContainer>
      </_.SettingContainer>
    </_.Container>
  );
};
export default Mypage;
