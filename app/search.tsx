import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const BeachInfoPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>9:30</Text>
        <View style={styles.statusIcons}>
          <View style={styles.blackDot} />
          <Feather name="wifi" size={16} color="black" />
          <Feather name="battery" size={16} color="black" />
        </View>
      </View>

      <View style={styles.searchBar}>
        <Feather name="search" size={20} color="gray" />
        <Text style={styles.searchText}>Juhu Beach, Mumbai</Text>
        <TouchableOpacity>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: "https://example.com/juhu-beach-image.jpg" }}
        style={styles.beachImage}
      />

      <View style={styles.infoButtons}>
        {[
          "Wave Height",
          "Wind Speed",
          "Water Quality",
          "Beach Quality",
          "Nearby Activity",
          "Show in Map",
        ].map((text, index) => (
          <TouchableOpacity key={index} style={styles.infoButton}>
            <Text style={styles.infoButtonText}>{text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.reviewsSection}>
        <Text style={styles.reviewsTitle}>User Reviews</Text>
        <View style={styles.reviewContainer}>
          <View style={styles.review}>
            <Text style={styles.reviewerName}>Aman</Text>
            <Text style={styles.rating}>⭐⭐⭐⭐⭐</Text>
            <Text style={styles.reviewText}>
              Great beach with clear water and clean sand.
            </Text>
          </View>
          <View style={styles.review}>
            <Text style={styles.reviewerName}>Diksha</Text>
            <Text style={styles.rating}>⭐⭐⭐⭐⭐</Text>
            <Text style={styles.reviewText}>
              Beautiful sunset view for a relaxing day.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <Feather name="home" size={24} color="gray" />
        <Feather name="message-square" size={24} color="gray" />
        <Feather name="map-pin" size={24} color="gray" />
        <Feather name="heart" size={24} color="gray" />
        <Feather name="user" size={24} color="gray" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  time: {
    fontWeight: "bold",
  },
  statusIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  blackDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "black",
    marginRight: 5,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    margin: 10,
  },
  searchText: {
    marginLeft: 10,
    flex: 1,
  },
  backButton: {
    color: "gray",
  },
  beachImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  infoButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  infoButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    width: "48%",
    marginBottom: 10,
  },
  infoButtonText: {
    color: "white",
    textAlign: "center",
  },
  reviewsSection: {
    padding: 10,
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  reviewContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    padding: 10,
  },
  review: {
    marginBottom: 10,
  },
  reviewerName: {
    fontWeight: "bold",
  },
  rating: {
    color: "gold",
  },
  reviewText: {
    color: "gray",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
});

export default BeachInfoPage;
