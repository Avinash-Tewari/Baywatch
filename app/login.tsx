import React from "react";
import { useFonts } from "expo-font";
import {
  View,Text,
  TextInput,TouchableOpacity,
  StyleSheet,Image,
} from "react-native";
import { router } from "expo-router";

const LoginScreen = () => {
  const [fontsLoaded] = useFonts({
    Smooch: require("@/assets/fonts/Smooch-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null; // Or a loading indicator
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvy0qL4MGE5fWf3ANXRgT5oSDuvLG01d8S1hSTufCZGkp9Qnt",
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>BayWatch</Text>
      <Text style={styles.subtitle}>
        Discover Beautiful Beaches 
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => {
        router.push("/home")
      }} >
        <Text style={styles.loginButtonText}>LOGIN</Text>

      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.orLine} />
      </View>

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E8B57",
    marginBottom: 10,
    fontFamily: "Smooch",
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#F0F0F0",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  forgotPassword: {
    color: "#2E8B57",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#2E8B57",
    borderRadius: 5,
    padding: 15,
    width: "100%",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: 10,
    color: "#999",
  },
  socialLoginContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: "#2E8B57",
    borderRadius: 5,
    padding: 15,
    width: "48%",
    alignItems: "center",
  },
  socialButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  signUpText: {
    color: "#2E8B57",
    fontSize: 16,
  },
});

export default LoginScreen;
