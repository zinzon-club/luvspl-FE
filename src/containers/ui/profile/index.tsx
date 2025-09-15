import { useUserStore } from "@/store/user";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Profile = () => {
  const user = useUserStore((s) => s.user);
  const router = useRouter();
  return (
    <div>
      <Image
        src={user.img}
        alt={"프로필사진"}
        width={150}
        height={150}
        style={{ borderRadius: "100px" }}
      />
      <div>
        <div>
          <div>{user.mail}</div>
          <div>{user.name}</div>
        </div>
        <div onClick={() => router.push("/profile/edit")}>내 정보 수정</div>
      </div>
    </div>
  );
};
export default Profile;
