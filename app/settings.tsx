import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const SettingsScreen = () => {
  const settingsOptions = [
    { icon: "key", title: "Account" },
    { icon: "lock", title: "Privacy" },
    { icon: "info", title: "About" },
    { icon: "bell", title: "Notifications" },
    { icon: "globe", title: "App Language" },
    { icon: "help-circle", title: "Help" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
        {/* <TouchableOpacity>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity> */}
      </View>

      <ScrollView>
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: "https://popslider.com/wp-content/uploads/2020/10/Dakota-Johnson-1716x2048.jpg",
            }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Daksh</Text>
            <Text style={styles.profileEmail}>daksh123@gmail.com</Text>
          </View>
          <Feather name="chevron-down" size={24} color="#000" />
        </View>

        {settingsOptions.map((option, index) => (
          <TouchableOpacity key={index} style={styles.optionItem}>
            <Feather
              name={option.icon}
              size={24}
              color="#000"
              style={styles.optionIcon}
            />
            <Text style={styles.optionText}>{option.title}</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.versionInfo}>
          <Feather
            name="smartphone"
            size={24}
            color="#000"
            style={styles.optionIcon}
          />
          <View>
            <Text style={styles.optionText}>App Updates</Text>
            <Text style={styles.versionText}>Beta version 1.01</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <Feather name="home" size={24} color="#4CAF50" />
        <Feather name="message-square" size={24} color="#000" />
        <Feather name="map-pin" size={24} color="#000" />
        <Feather name="heart" size={24} color="#000" />
        <Feather name="user" size={24} color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingTop: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  backButton: {
    fontSize: 16,
    color: "#4CAF50",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 14,
    color: "#666",
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  optionIcon: {
    marginRight: 16,
  },
  optionText: {
    fontSize: 16,
  },
  versionInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  versionText: {
    fontSize: 12,
    color: "#666",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
});

export default SettingsScreen;
