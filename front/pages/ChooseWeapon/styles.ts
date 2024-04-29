import { StyleSheet } from "react-native";

export const createCharacterStyles = StyleSheet.create({
  title: {
    marginBottom: 20,
    textAlign: "center",
  },
  weaponsContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  weaponsRow: {
    flexDirection: "row",
    gap: 20,
  },
  pressableScroll: {
    flex: 1,
    width: "100%",
    height: "100%",
    aspectRatio: 1 / 1,
  },
  singleScrollBg: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  weaponDescription: {
    textAlign: "center",
    fontSize: 19,
  },
});
