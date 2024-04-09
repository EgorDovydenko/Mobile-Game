import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  },
  content: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  p: {
    fontSize: 30,
    lineHeight: 27,
    fontFamily: "Beaumarchais",
    margin: 0,
    padding: 0,
    color: "#552600",
  },
  button: {
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    fontFamily: "Beaumarchais",
  },
  input: {
    height: 40,
    borderRadius: 10,
    fontSize: 18,
    fontFamily: "Beaumarchais",
    backgroundColor: "#fae6b4",
    borderColor: "gray",
    color: "#552600",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
