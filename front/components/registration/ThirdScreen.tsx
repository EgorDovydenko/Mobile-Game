import { Animated, ImageBackground, Pressable, Text, View } from "react-native";
import { commonStyles } from "../../styles";
import { registartionStyles } from "../../pages/registration/styles";

import AxeSvg from "../../assets/mainScreen/weapons/axe.svg";
import KnifeSvg from "../../assets/mainScreen/weapons/knife.svg";
import BowSvg from "../../assets/mainScreen/weapons/bow.svg";
import MagicSvg from "../../assets/mainScreen/weapons/magic2.svg";
import { useState } from "react";

export const ThirdRegistrationScreen = () => {
  const scaleValueAxe = new Animated.Value(1);
  const scaleValueKnife = new Animated.Value(1);
  const scaleValueBow = new Animated.Value(1);
  const scaleValueMagic = new Animated.Value(1);

  const name = localStorage.getItem("email");

  const [weapon, setWeapon] = useState("");

  const handlePressIn = (scaleValue: Animated.Value) => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      speed: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (scaleValue: Animated.Value) => {
    Animated.spring(scaleValue, {
      toValue: 1,
      speed: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Text style={[commonStyles.p]}>
        Приветствую, {name}! {"\n"}Как ты предпочитаешь сражаться?
      </Text>
      <View style={registartionStyles.weaponsContainer}>
        <View style={registartionStyles.weaponsRow}>
          <Pressable
            onPress={() => setWeapon("axe")}
            onPressIn={() => handlePressIn(scaleValueAxe)}
            onPressOut={() => handlePressOut(scaleValueAxe)}
            style={registartionStyles.pressableScroll}
          >
            <Animated.View style={{ transform: [{ scale: scaleValueAxe }] }}>
              <ImageBackground
                source={require("../../assets/mainScreen/weapons/list1.png")}
                style={registartionStyles.singleScrollBg}
              >
                <AxeSvg width={100} height={100} />
                <Text style={commonStyles.p}>Ближний бой</Text>
              </ImageBackground>
            </Animated.View>
          </Pressable>
          <Pressable
            onPress={() => setWeapon("knife")}
            onPressIn={() => handlePressIn(scaleValueKnife)}
            onPressOut={() => handlePressOut(scaleValueKnife)}
            style={registartionStyles.pressableScroll}
          >
            <Animated.View style={{ transform: [{ scale: scaleValueKnife }] }}>
              <ImageBackground
                source={require("../../assets/mainScreen/weapons/list2.png")}
                style={registartionStyles.singleScrollBg}
              >
                <KnifeSvg width={100} height={100} />
                <Text style={commonStyles.p}>Скрытность</Text>
              </ImageBackground>
            </Animated.View>
          </Pressable>
        </View>
        <View style={registartionStyles.weaponsRow}>
          <Pressable
            onPress={() => setWeapon("bow")}
            onPressIn={() => handlePressIn(scaleValueBow)}
            onPressOut={() => handlePressOut(scaleValueBow)}
            style={registartionStyles.pressableScroll}
          >
            <Animated.View style={{ transform: [{ scale: scaleValueBow }] }}>
              <ImageBackground
                source={require("../../assets/mainScreen/weapons/list3.png")}
                style={registartionStyles.singleScrollBg}
              >
                <BowSvg width={100} height={100} />
                <Text style={commonStyles.p}>Дальний бой</Text>
              </ImageBackground>
            </Animated.View>
          </Pressable>
          <Pressable
            onPress={() => setWeapon("magic")}
            onPressIn={() => handlePressIn(scaleValueMagic)}
            onPressOut={() => handlePressOut(scaleValueMagic)}
            style={registartionStyles.pressableScroll}
          >
            <Animated.View style={{ transform: [{ scale: scaleValueMagic }] }}>
              <ImageBackground
                source={require("../../assets/mainScreen/weapons/list4.png")}
                style={registartionStyles.singleScrollBg}
              >
                <MagicSvg width={100} height={100} />
                <Text style={commonStyles.p}>Магия</Text>
              </ImageBackground>
            </Animated.View>
          </Pressable>
        </View>
      </View>
    </>
  );
};
