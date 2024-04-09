import { Text, TouchableOpacity, View } from "react-native";
import { commonStyles } from "../../../styles";
import { LinearGradient } from "expo-linear-gradient";
import { useKeyboardCheck } from "../../../hooks/useKeyboardCheck";
import { FC, useState } from "react";
import { firstRegScreenStyles } from "./styles";
import { WithSetStep } from "../../../pages/registration/types";
import { EmailRegistrationPage } from "./EmailRegistration/EmailRegistration";

export const FirstRegistrationScreen: FC<WithSetStep> = ({ setStep }) => {
  const isKeyboardOpen = useKeyboardCheck();
  const [isEmailReg, setIsEmailReg] = useState(false);

  return !isEmailReg ? (
    <View style={commonStyles.content}>
      {isKeyboardOpen ? null : (
        <Text style={[commonStyles.p, firstRegScreenStyles.p]}>
          Приветствую, искатель приключений. {"\n"}Добро пожаловать в Миру -
          место, где твой выбор решает всё. {"\n"}
          Погрузись в увлекательное путешествие и стань героем своей собственной
          истории.
        </Text>
      )}
      <TouchableOpacity
        onPress={() => setIsEmailReg(true)}
        activeOpacity={0.6}
        style={firstRegScreenStyles.emailBtn}
      >
        <LinearGradient
          style={[commonStyles.button]}
          start={{ x: 0.0, y: 0.1 }}
          end={{ x: 0.5, y: 3.0 }}
          locations={[0, 0.4, 0.8]}
          colors={["#6B2E02", "#BC8f5F", "#6B2E02"]}
        >
          <Text style={[commonStyles.p, firstRegScreenStyles.emailRegText]}>
            Регистрация
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  ) : (
    <EmailRegistrationPage setStep={setStep} />
  );
};
