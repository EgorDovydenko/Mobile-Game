import { Animated, ImageBackground } from "react-native";
import { commonStyles } from "../../styles";
import { useFadeAnim } from "../../hooks/useFadeAnim";

export const Step_3 = () => {
  const fadeAnim1 = useFadeAnim(1500);

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
      ></ImageBackground>
    </Animated.View>
  );
};
