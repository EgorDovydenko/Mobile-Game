import { StyleSheet } from "react-native";

export const registartionStyles = StyleSheet.create({
  // common
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  mainBgBlock: {
    width: "100%",
    height: "100%",
  },
  content: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  // registration

  input: {
    height: 40,
    width: "80%",
    backgroundColor: "#fae6b4",
    borderColor: "gray",
    borderWidth: 1,
    color: "#552600",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: "auto",
  },
  // second screen
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
});
