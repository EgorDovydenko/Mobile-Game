import { TextInput, View, Text } from "react-native";

import { FC, useEffect, useState } from "react";
import { emailRegStyles } from "./styles";

import * as SecureStore from "expo-secure-store";

import useSWRMutation from "swr/mutation";
import { UserEnterFormProps, ValidationErrorModel } from "./types";
import { useKeyboardCheck } from "../../../hooks/useKeyboardCheck";
import { UserModel } from "../../../types/user";
import HTTPService from "../../../utils/HTTPService";
import { commonStyles } from "../../../styles";
import { BaseButton } from "../../../components/Buttons/BaseButton/BaseButton";
import { useAtom } from "jotai";
import { userAtom } from "../../../store";

export const UserEnterForm: FC<UserEnterFormProps> = ({ isLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [_, setUser] = useAtom(userAtom);
  const isKeyboardOpen = useKeyboardCheck();

  const {
    data: registerData,
    error: registerError,
    trigger: handleRegister,
  } = useSWRMutation(
    { url: `auth/register`, body: { email, password, name } },
    HTTPService.postFetcher<UserModel>
  );

  const {
    data: loginData,
    error: loginError,
    trigger: handleLogin,
  } = useSWRMutation(
    { url: `auth/login`, body: { email, password } },
    HTTPService.postFetcher<UserModel>
  );

  const error = isLogin ? loginError : registerError;
  const data = isLogin ? loginData : registerData;

  const handleBtnClick = () => {
    isLogin ? handleLogin() : handleRegister();
  };

  const validationErrors = error as ValidationErrorModel | undefined;

  const saveUserTokenToStorage = async (token: string) => {
    await SecureStore.setItemAsync("auth_token", token);
    setUser(isLogin ? loginData : registerData);
  };

  useEffect(() => {
    data && saveUserTokenToStorage(data.token);
  }, [data]);

  return (
    <View style={commonStyles.content}>
      {isKeyboardOpen ? null : (
        <Text style={[commonStyles.p, emailRegStyles.p]}>
          Для входа в игровой мир введите свой email, придумайте пароль и имя
          игрового персонажa
        </Text>
      )}
      <TextInput
        style={[
          commonStyles.input,
          emailRegStyles.input,
          validationErrors?.email ? emailRegStyles.inputError : null,
        ]}
        onChangeText={(e) => setEmail(e)}
        value={email}
        placeholder="Электронная почта..."
      />
      {validationErrors?.email && (
        <Text style={emailRegStyles.errorMessage}>
          {validationErrors.email}
        </Text>
      )}
      {!isLogin && (
        <>
          <TextInput
            style={[
              commonStyles.input,
              emailRegStyles.input,
              validationErrors?.name ? emailRegStyles.inputError : null,
            ]}
            onChangeText={(e) => setName(e)}
            value={name}
            placeholder="Имя игрового персонажа..."
          />
          {validationErrors?.name && (
            <Text style={emailRegStyles.errorMessage}>
              {validationErrors.name}
            </Text>
          )}
        </>
      )}
      <TextInput
        style={[
          commonStyles.input,
          emailRegStyles.input,
          validationErrors?.password ? emailRegStyles.inputError : null,
        ]}
        onChangeText={(e) => setPassword(e)}
        value={password}
        placeholder="Пароль..."
        secureTextEntry
      />
      {validationErrors?.password && (
        <Text style={emailRegStyles.errorMessage}>
          {validationErrors.password}
        </Text>
      )}
      {error?.message && (
        <Text style={emailRegStyles.errorMessage}>{error.message}</Text>
      )}
      <BaseButton
        style={emailRegStyles.startAdvText}
        onClick={handleBtnClick}
        text={isLogin ? "Войти" : "Зарегистрироваться"}
      />
    </View>
  );
};
