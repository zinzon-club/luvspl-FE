import * as _ from "./style";
import { useUserStore } from "@/store/user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Btn from "@/components/button";

const ProfileEdit = () => {
  const user = useUserStore((s) => s.user);
  const setUser = useUserStore((s) => s.setUser);
  // setUser: (u: User) => void;
  const [name, setName] = useState(user.name);
  const [mail, setMail] = useState(user.mail);
  const userInput = [
    {
      name: "이름",
      value: name,
      setValue: setName,
    },
    {
      name: "계정",
      value: mail,
      setValue: setMail,
    },
  ];
  const router = useRouter();
  const handleSubmit = () => {
    setUser({
      img: user.img,
      name: name,
      mail: mail,
    });
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
                type={"text"}
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
