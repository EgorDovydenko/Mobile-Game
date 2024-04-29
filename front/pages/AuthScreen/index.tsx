import { Text, View } from "react-native";
import { FC, useState } from "react";
import { authScreenStyles } from "./styles";
import { WithGetUser } from "../types";
import { commonStyles } from "../../styles";
import { BaseButton } from "../../components/Buttons/BaseButton/BaseButton";
import { UserEnterForm } from "./UserEnterForm";

export const AuthScreen: FC<WithGetUser> = ({ getUser }) => {
  const [isUserEnterForm, setIsUserEnterForm] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return !isUserEnterForm ? (
    <View style={commonStyles.content}>
      <Text style={[commonStyles.p, authScreenStyles.p]}>
        Приветствую, искатель приключений. {"\n"}Добро пожаловать в Миру -
        место, где твой выбор решает всё. {"\n"}
        Погрузись в увлекательное путешествие и стань героем своей собственной
        истории.
      </Text>
      <BaseButton onClick={() => setIsUserEnterForm(true)} text="Регистрация" />
      <BaseButton
        style={authScreenStyles.btn}
        onClick={() => {
          setIsUserEnterForm(true);
          setIsLogin(true);
        }}
        text="Вход"
      />
    </View>
  ) : (
    <UserEnterForm isLogin={isLogin} getUser={getUser} />
  );
};
