import { useEffect, useState } from "react";
import { ImageBackground, Animated } from "react-native";
import { registrationStyles } from "./styles";

import { AuthScreen } from "./AuthScreen";
import { ChooseWeaponScreen } from "./ChooseWeapon";
import HTTPService from "../utils/HTTPService";
import { UserModel } from "../types/user";
import useSWR from "swr";
import { Text } from "react-native-svg";

export default function MainPage() {
  const [step, setStep] = useState<number | null>(null);

  const { data, isLoading } = useSWR(
    { url: `user/info` },
    HTTPService.getFetcher<UserModel>
  );

  useEffect(() => {
    !isLoading && setStep(data ? data.step : 0);
  }, [data, isLoading]);

  // setInterval(async () => {
  //   console.log(await SecureStore.getItemAsync("auth_token"), "token");
  // }, 2000);

  // const [backgroundImage, setBackgroundImage] = useState(
  //   require("../../assets/mainScreen/paper.png")
  // );

  // const [animation] = useState(new Animated.Value(0));

  // const saveName = () => {
  //   Animated.timing(animation, {
  //     toValue: 0,
  //     duration: 0,
  //     useNativeDriver: true,
  //   }).start(() => {
  //     setBackgroundImage(require("../../assets/mainScreen/paper2.png"));
  //     setIsNameSaved(true);

  //     Animated.timing(animation, {
  //       toValue: 0,
  //       duration: 0,
  //       useNativeDriver: true,
  //     }).start();
  //   });
  // };

  return (
    <Animated.View
      style={[
        registrationStyles.container,
        // {
        //   transform: [
        //     {
        //       translateX: animation.interpolate({
        //         inputRange: [0, 1],
        //         outputRange: [0, -Dimensions.get("window").width], // Измените на -Dimensions.get('window').width, чтобы сместить изображение вправо
        //       }),
        //     },
        //   ],
        // },
      ]}
    >
      <ImageBackground
        source={require("../assets/mainScreen/paper.png")}
        style={registrationStyles.mainBgBlock}
      >
        {isLoading ? (
          <></>
        ) : (
          <>
            {step === 0 && <AuthScreen setStep={setStep} />}
            {step === 1 && data && (
              <ChooseWeaponScreen userName={data.name} setStep={setStep} />
            )}
            {step === 2 && <Text>Coming soon</Text>}
          </>
        )}
      </ImageBackground>
    </Animated.View>
  );
}
