import { useAuth } from "@/core/store/auth";

import { Text, View } from "@/ui";

const LoginForm = ({ onSubmit = () => {} }) => {
  return (
    <View className="flex-1 justify-center p-4">
      <Text testID="form-title" variant="h1" className="pb-6 text-center">
        Sign In
      </Text>
    </View>
  );
};

export const Login = () => {
  const signIn = useAuth.use.signIn();

  const onSubmit = () => {
    signIn({ access: "access-token", refresh: "refresh-token" });
  };
  return (
    <>
      <LoginForm onSubmit={onSubmit} />
    </>
  );
};
