import * as _ from "./style";
import { useUserStore } from "@/store/user";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Profile = () => {
  const user = useUserStore((s) => s.user);
  const router = useRouter();
  return (
    <_.Container>
      <_.NavDeco onClick={() => router.push(`/mypage`)}>{"<"}</_.NavDeco>
      <Image
        src={user.img}
        alt={"프로필사진"}
        width={150}
        height={150}
        style={{ borderRadius: "100px" }}
      />
      <_.SubContainer>
        <_.InfoSet>
          <_.MailText>{user.mail}</_.MailText>
          <_.NameText>{user.name}</_.NameText>
        </_.InfoSet>
        <_.EditButton onClick={() => router.push("/profile/edit")}>
          내 정보 수정
        </_.EditButton>
      </_.SubContainer>
    </_.Container>
  );
};
export default Profile;
