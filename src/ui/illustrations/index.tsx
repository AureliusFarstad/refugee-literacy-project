import AvatarFemaleA from "assets/images/conversation-profiles/female-yellow.svg";
import AvatarMaleA from "assets/images/conversation-profiles/male-yellow.svg";

type UserAvatarProps = {
  name: "a" | "b";
  gender: "m" | "f";
};

const AVATARS = {
  f: {
    a: AvatarFemaleA,
    b: AvatarMaleA,
  },
  m: {
    a: AvatarFemaleA,
    b: AvatarMaleA,
  },
};

export const UserAvatar = ({ gender, name }: UserAvatarProps) => {
  const Avatar = AVATARS[gender][name] || AvatarFemaleA;

  return <Avatar />;
};
