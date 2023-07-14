import { User } from "@/model/user";
import Avatar from "./Avatar";

type Props = {
  user: User;
};

export default function SideBar({
  user: { name, username, email, image },
}: Props) {
  return (
    <>
      <div>
        {image && <Avatar image={image} />}
        <p>{username}</p>
        <p>{name}</p>
      </div>
      <p>
        About ・ Help ・ Press ・ API ・ Jobs ・ Privacy ・ Terms ・ Location ・
        Language
      </p>
      <p>@Copyright INSTANTGRAM from METAL</p>
    </>
  );
}
