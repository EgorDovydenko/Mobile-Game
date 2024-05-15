import { FC } from "react";
import { Animated, ImageBackground, Text, View } from "react-native";
import { commonStyles } from "../../styles";
import { useFadeAnim } from "../../hooks/useFadeAnim";
import { step1Styles } from "./styles";

export const Step_1: FC = () => {
  const fadeAnim1 = useFadeAnim(1000);
  const fadeAnim2 = useFadeAnim(2000, 2000);
  const fadeAnim3 = useFadeAnim(2000, 4000);

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
