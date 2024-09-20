import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { router } from "expo-router";

const BayWatch = () => {
  const [fontsLoaded] = useFonts({
    Smooch: require("@/assets/fonts/Smooch-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Or a loading indicator
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>BayWatch</Text>
        <Text style={styles.tagline}>Explore sandy shores effortlessly</Text>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.Ol_8NEe5B_J6JDG8-fHcSAHaHa?rs=1&pid=ImgDetMain",
          }}
          style={styles.illustration}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.push("/login");
          }}
        >
          <Text style={styles.buttonText}>Explore now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    fontFamily: "Smooch",
    fontSize: 48,
    color: "#2E8B57",
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
  },
  illustration: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#2E8B57",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default BayWatch;
