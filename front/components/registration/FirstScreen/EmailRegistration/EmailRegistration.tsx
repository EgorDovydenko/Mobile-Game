import { TextInput, TouchableOpacity, View, Text } from "react-native";

import { commonStyles } from "../../../../styles";
import { FC, useState } from "react";
import { useKeyboardCheck } from "../../../../hooks/useKeyboardCheck";
import { emailRegStyles } from "./styles";
import { WithSetStep } from "../../../../pages/registration/types";
import axios from "axios";

import { API_URL } from "@env";

export const EmailRegistrationPage: FC<WithSetStep> = ({ setStep }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [regData, setRegData] = useState();
  const isKeyboardOpen = useKeyboardCheck();

  const onChangeEmail = (e: string) => {
    setEmail(e);
  };

  const onChangePassword = (e: string) => {
    setPassword(e);
  };

  const onChangeName = (e: string) => {
    setName(e);
  };

  const sendRegistrationEmail = async () => {
    try {
      // console.log(`${process.env.REACT_APP_API_URL}/auth/register`);
      await axios
        .post(
          `${API_URL}/auth/register`,
          // `https://10.0.2.2:1000/auth/register`,
          { email, password }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log("2: ", error);
        });
    } catch (error) {
      console.log("3: ", error);
    }
  };

  return (
    <View style={commonStyles.content}>
      {isKeyboardOpen ? null : (
        <Text style={[commonStyles.p, emailRegStyles.p]}>
          Для входа в игру введите свой емайл, придумайте пароль и имя игрового
          персонажа
        </Text>
      )}
      <TextInput
        style={[commonStyles.input, emailRegStyles.input]}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Электронная почта..."
      />
      <TextInput
        style={[commonStyles.input, emailRegStyles.input]}
        onChangeText={onChangeName}
        value={name}
        placeholder="Имя игрового персонажа..."
      />
      <TextInput
        style={[commonStyles.input, emailRegStyles.input]}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Пароль..."
      />
      <TouchableOpacity
        disabled={!email || !password}
        onPress={sendRegistrationEmail}
        style={emailRegStyles.btn}
      >
        <Text style={[commonStyles.button, emailRegStyles.startAdvtext]}>
          ~Зарегистрироваться~
        </Text>
      </TouchableOpacity>
      {regData && <Text>{regData}</Text>}
    </View>
  );
};
