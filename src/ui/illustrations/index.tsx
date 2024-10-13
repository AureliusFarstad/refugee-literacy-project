import AvatarFemaleA from "assets/illustrations/avatar-f-a.svg";
import AvatarMaleA from "assets/illustrations/avatar-m-a.svg";

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
