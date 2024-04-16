import { useEffect, useState } from "react";
import { ImageBackground, Animated } from "react-native";
import { registartionStyles } from "./styles";

import { AuthScreen } from "./AuthScreen";
import { CreateCharacterScreen } from "./CreateCharacterScreen";
import HTTPService from "../utils/HTTPService";
import { UserModel } from "../types/user";
import useSWR from "swr";
import { Text } from "react-native-svg";

export default function MainPage() {
  const [step, setStep] = useState(0);

  const { data, isLoading } = useSWR(
    { url: `user/info` },
    HTTPService.getFetcher<UserModel>
  );

  useEffect(() => {
    setStep(data ? data.step : 0);
  }, [data]);

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
        registartionStyles.container,
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
        style={registartionStyles.mainBgBlock}
      >
        {isLoading ? (
          <></>
        ) : (
          <>
            {step === 0 && <AuthScreen setStep={setStep} />}
            {step === 1 && <CreateCharacterScreen />}
          </>
        )}
      </ImageBackground>
    </Animated.View>
  );
}
