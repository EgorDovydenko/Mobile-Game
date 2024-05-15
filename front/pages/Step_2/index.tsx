import { Animated, ImageBackground, Text, View } from "react-native";
import { commonStyles } from "../../styles";
import { useFadeAnim } from "../../hooks/useFadeAnim";
import { step1Styles } from "./styles";
import { stepAtom } from "../../store";
import { useEffect } from "react";
import { useAtom } from "jotai";

export const Step_2 = () => {
  const fadeAnim1 = useFadeAnim(1500);
  const fadeAnim2 = useFadeAnim(2000, 2000);
  const fadeAnim3 = useFadeAnim(2000, 4000);

  const [_, setStep] = useAtom(stepAtom);

  useEffect(() => {
    setTimeout(() => {
      setStep((pv) => pv! + 1);
    }, 10000);
  }, []);

  return (
    <Animated.View
      style={[
        commonStyles.content,
        {
          opacity: fadeAnim1,
        },
      ]}
    >
      <ImageBackground
        style={commonStyles.content}
        source={require("../../assets/mainScreen/map.jpg")}
      >
        <View style={step1Styles.infoBlock}>
          <Animated.Text
            style={[commonStyles.p, step1Styles.p, { opacity: fadeAnim2 }]}
          >
            Добро пожаловать в Миру - место, где ты можешь стать кем угодно!
          </Animated.Text>
          <Animated.Text
            style={[
              commonStyles.p,
              step1Styles.p,
              { opacity: fadeAnim3, marginTop: 20 },
            ]}
          >
            Здесь кроется множество тайн, опасностей и загадок, и ты можешь
            стать тем, кто пройдет все испытания!
          </Animated.Text>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};
