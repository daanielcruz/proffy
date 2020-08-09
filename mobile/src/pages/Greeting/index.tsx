import React from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
import { Video } from "expo-av";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const GreetingPage = () => {
  const navigation = useNavigation();

  function handleNavigateToLanding() {
    navigation.navigate("Landing");
  }

  return (
    <>
      <Video
        source={require("../../assets/video/intro.mp4")}
        rate={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.backgroundVideo}
      />
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
        />
        <Text style={styles.slogan}>Sua plataforma de estudos online!</Text>

        <RectButton style={styles.button} onPress={handleNavigateToLanding}>
          <Text style={styles.buttonText}>COMEÇAR</Text>
        </RectButton>
      </View>
    </>
  );
};

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
  },

  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  slogan: {
    fontFamily: "Archivo_700Bold",
    fontSize: 30,
    textAlign: "center",
    lineHeight: 40,
    color: "#34CB79",
    textShadowColor: "#262626",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 2,
    marginBottom: 20,
  },

  logo: {
    width: 200,
    height: 150,
    marginTop: 20,
  },

  button: {
    backgroundColor: "#34CB79",
    height: 50,
    flexDirection: "row",
    borderRadius: 16,
    overflow: "hidden",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

export default GreetingPage;
