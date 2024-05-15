import { useEffect } from "react";
import { ImageBackground, Animated } from "react-native";
import { registrationStyles } from "./styles";

import { AuthScreen } from "./AuthScreen";
import { ChooseWeaponScreen } from "./ChooseWeapon";
import HTTPService from "../utils/HTTPService";
import { UserModel } from "../types/user";
import useSWR from "swr";
import { Text } from "react-native-svg";
import { useAtom } from "jotai";
import { stepAtom, userAtom } from "../store";

export default function MainPage() {
  const [user, setUser] = useAtom(userAtom);
  const [step, setStep] = useAtom(stepAtom);

  const { data, isLoading } = useSWR(
    { url: `user/info` },
    HTTPService.getFetcher<UserModel>,
    {
      errorRetryCount: 0,
    }
  );

  useEffect(() => {
    user && setStep(user.step);
  }, [user]);

  useEffect(() => {
    !isLoading && setUser(data);
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
            {step === 0 && <AuthScreen />}
            {step === 1 && user && <ChooseWeaponScreen userName={user.name} />}
            {step === 2 && <Text>Coming soon</Text>}
          </>
        )}
      </ImageBackground>
    </Animated.View>
  );
}
