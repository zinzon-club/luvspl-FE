"use client";

import * as _ from "./style";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Btn from "@/components/button";
import { useChangeUserInfo } from "@/hooks/changeUserInfo";

const ProfileEdit = () => {
  const router = useRouter();
  const { user, userInput, apply } = useChangeUserInfo();

  if (!user) return <div>로딩 중...</div>;

  const handleSubmit = async () => {
    await apply();
    router.push("/profile");
  };

  return (
    <_.Container>
      <_.BasicSet>
        <Image
          src={user.img || "/asstes/default.svg"}
          alt="프로필사진"
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