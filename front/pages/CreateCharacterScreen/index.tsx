import { Animated, ImageBackground, Pressable, Text, View } from "react-native";
import { commonStyles } from "../../styles";
import { registartionStyles } from "../styles";

import AxeSvg from "../../assets/mainScreen/weapons/axe.svg";
import KnifeSvg from "../../assets/mainScreen/weapons/knife.svg";
import BowSvg from "../../assets/mainScreen/weapons/bow.svg";
import MagicSvg from "../../assets/mainScreen/weapons/magic2.svg";
import { useState } from "react";
import { createCharacterStyles } from "./styles";
import useSWR from "swr";
import HTTPService from "../../utils/HTTPService";
import { UserModel } from "../../types/user";

export const CreateCharacterScreen = () => {
  const scaleValueAxe = new Animated.Value(1);
  const scaleValueKnife = new Animated.Value(1);
  const scaleValueBow = new Animated.Value(1);
  const scaleValueMagic = new Animated.Value(1);

  const { data } = useSWR(
    { url: `user/info` },
    HTTPService.getFetcher<UserModel>
  );

  const name = data?.name;

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
    <View style={commonStyles.content}>
      <Text style={[commonStyles.p, createCharacterStyles.title]}>
        Приветствую, {name}! {"\n"}Как ты предпочитаешь сражаться?
      </Text>
      <View style={createCharacterStyles.weaponsContainer}>
        <View style={createCharacterStyles.weaponsRow}>
          <Pressable
            onPress={() => setWeapon("axe")}
            onPressIn={() => handlePressIn(scaleValueAxe)}
            onPressOut={() => handlePressOut(scaleValueAxe)}
            style={createCharacterStyles.pressableScroll}
          >
            <Animated.View style={{ transform: [{ scale: scaleValueAxe }] }}>
              <ImageBackground
                source={require("../../assets/mainScreen/weapons/list1.png")}
                style={createCharacterStyles.singleScrollBg}
              >
                <AxeSvg width={70} height={70} />
                <Text
                  style={[
                    commonStyles.p,
                    createCharacterStyles.weaponDescription,
                  ]}
                >
                  Ближний бой
                </Text>
              </ImageBackground>
            </Animated.View>
          </Pressable>
          <Pressable
            onPress={() => setWeapon("knife")}
            onPressIn={() => handlePressIn(scaleValueKnife)}
            onPressOut={() => handlePressOut(scaleValueKnife)}
            style={createCharacterStyles.pressableScroll}
          >
            <Animated.View style={{ transform: [{ scale: scaleValueKnife }] }}>
              <ImageBackground
                source={require("../../assets/mainScreen/weapons/list2.png")}
                style={createCharacterStyles.singleScrollBg}
              >
                <KnifeSvg width={70} height={70} />
                <Text
                  style={[
                    commonStyles.p,
                    createCharacterStyles.weaponDescription,
                  ]}
                >
                  Скрытность
                </Text>
              </ImageBackground>
            </Animated.View>
          </Pressable>
        </View>
        <View style={createCharacterStyles.weaponsRow}>
          <Pressable
            onPress={() => setWeapon("bow")}
            onPressIn={() => handlePressIn(scaleValueBow)}
            onPressOut={() => handlePressOut(scaleValueBow)}
            style={createCharacterStyles.pressableScroll}
          >
            <Animated.View style={{ transform: [{ scale: scaleValueBow }] }}>
              <ImageBackground
                source={require("../../assets/mainScreen/weapons/list3.png")}
                style={createCharacterStyles.singleScrollBg}
              >
                <BowSvg width={70} height={70} />
                <Text
                  style={[
                    commonStyles.p,
                    createCharacterStyles.weaponDescription,
                  ]}
                >
                  Дальний бой
                </Text>
              </ImageBackground>
            </Animated.View>
          </Pressable>
          <Pressable
            onPress={() => setWeapon("magic")}
            onPressIn={() => handlePressIn(scaleValueMagic)}
            onPressOut={() => handlePressOut(scaleValueMagic)}
            style={createCharacterStyles.pressableScroll}
          >
            <Animated.View style={{ transform: [{ scale: scaleValueMagic }] }}>
              <ImageBackground
                source={require("../../assets/mainScreen/weapons/list4.png")}
                style={createCharacterStyles.singleScrollBg}
              >
                <MagicSvg width={70} height={70} />
                <Text
                  style={[
                    commonStyles.p,
                    createCharacterStyles.weaponDescription,
                  ]}
                >
                  Магия
                </Text>
              </ImageBackground>
            </Animated.View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
