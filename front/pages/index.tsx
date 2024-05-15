import { useEffect } from "react";
import { Animated, ImageBackground, View } from "react-native";

import { AuthScreen } from "./AuthScreen";
import { ChooseWeaponScreen } from "./ChooseWeapon";
import HTTPService from "../utils/HTTPService";
import { UserModel } from "../types/user";
import useSWR from "swr";
import { useAtom } from "jotai";
import { stepAtom, userAtom } from "../store";
import { Step_1 } from "./Step_1";
import { commonStyles } from "../styles";
import { useFadeAnim } from "../hooks/useFadeAnim";

export default function MainPage() {
  const [user, setUser] = useAtom(userAtom);
  const [step, setStep] = useAtom(stepAtom);

  const fadeAnim = useFadeAnim(3000);

  const { data, isLoading } = useSWR(
    { url: `user/info` },
    HTTPService.getFetcher<UserModel>,
    {
      errorRetryCount: 0,
    }
  );

  useEffect(() => {
    !isLoading && setStep(user ? user.step : 0);
  }, [user, isLoading]);

  useEffect(() => {
    !isLoading && setUser(data);
  }, [data, isLoading]);

  return step !== null ? (
    <Animated.View
      style={[
        commonStyles.container,
        {
          opacity: fadeAnim,
        },
      ]}
    >
      {step < 2 && (
        <ImageBackground
          source={require("../assets/mainScreen/paper.png")}
          style={commonStyles.content}
        >
          {step === 0 && <AuthScreen />}
          {step === 1 && user && <ChooseWeaponScreen userName={user.name} />}
        </ImageBackground>
      )}
      {step === 2 && <Step_1 />}
    </Animated.View>
  ) : null;
}
