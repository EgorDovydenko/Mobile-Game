import { useState } from "react";
import { ImageBackground, Animated } from "react-native";
import { registartionStyles } from "./styles";
import { FirstRegistrationScreen } from "../../components/registration/FirstScreen/FirstScreen";
import { ThirdRegistrationScreen } from "../../components/registration/ThirdScreen";

export default function MainPage() {
  const [step, setStep] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(
    require("../../assets/mainScreen/paper.png")
  );

  const [animation] = useState(new Animated.Value(0));
  const saveName = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start(() => {
      setBackgroundImage(require("../../assets/mainScreen/paper2.png"));
      // setIsNameSaved(true);

      // Animated.timing(animation, {
      //   toValue: 0,
      //   duration: 0,
      //   useNativeDriver: true,
      // }).start();
    });
  };

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
        source={backgroundImage}
        style={registartionStyles.mainBgBlock}
      >
        {step === 0 && <FirstRegistrationScreen setStep={setStep} />}
      </ImageBackground>
    </Animated.View>
  );
}
