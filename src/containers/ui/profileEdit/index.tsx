import * as _ from "./style";
import { useUserStore } from "@/store/user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
      <Image
        src={user.img}
        alt={"프로필사진"}
        width={150}
        height={150}
        style={{ borderRadius: "100px" }}
      />
      <div>
        {userInput.map((item, i) => (
          <div key={i}>
            <div>{item.name}</div>
            <input
              type={"text"}
              value={item.value}
              onChange={(e) => item.setValue(e.target.value)}
            />
          </div>
        ))}
      </div>
      <div onClick={handleSubmit}>수정하기</div>
    </_.Container>
  );
};
export default ProfileEdit;
