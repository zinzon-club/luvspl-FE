import * as _ from "./style";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Btn from "@/components/button";
import { useChangeUserInfo } from "@/hooks/changeUserInfo";

const ProfileEdit = () => {
  const router = useRouter();
  const { user, userInput, apply } = useChangeUserInfo();

  const handleSubmit = () => {
    apply(); // 훅에서 스토어 업데이트
    router.push("/profile");
  };

  return (
    <_.Container>
      <_.BasicSet>
        <Image
          src={user.img}
          alt={"프로필사진"}
          width={150}
          height={150}
          style={{ borderRadius: "100px" }}
        />
        <_.EditSet>
          {userInput.map((item, i) => (
            <_.EditItem key={i}>
              <_.EditText>{item.name}</_.EditText>
              <_.EditInput
                type="text"
                value={item.value}
                onChange={(e) => item.setValue(e.target.value)}
              />
            </_.EditItem>
          ))}
        </_.EditSet>
      </_.BasicSet>
      <Btn onClick={handleSubmit}>수정하기</Btn>
    </_.Container>
  );
};

export default ProfileEdit;
