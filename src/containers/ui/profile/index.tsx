import * as _ from "./style";
import { useUserStore } from "@/store/useUserStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

const Profile = () => {
  const user = useUserStore((s) => s.user);
  const router = useRouter();

  if (!user) return <_.Loading> <Loading /> </_.Loading>;

  return (
    <_.Container>
      <_.NavDeco onClick={() => router.push(`/home`)}>
        <Image
          src="assets/arrow.svg"
          alt="arrow"
          width={24}
          height={24}
          style={{ cursor: "pointer" }}
        />
      </_.NavDeco>
      <Image
        src={user.profile || "/assets/default.svg"}
        alt="프로필사진"
        width={150}
        height={150}
        style={{ borderRadius: "100px" }}
      />
      <_.SubContainer>
        <_.InfoSet>
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