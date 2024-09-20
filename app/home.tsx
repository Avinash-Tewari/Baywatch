import React, { useRef } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated, // Import Animated from react-native
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.searchBar}
        onPress={() => {
          router.push("/search");
        }}
      ></TouchableOpacity>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#777"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#777"
        />
        <Image
          source={require("@/assets/images/dani.jpg")} // place holder for profile pic
          style={styles.profilePic}
        />
      </View>

      <ScrollView>
        {/* Discover Beaches Near You */}
        <Text style={styles.title}>Discover beaches near you</Text>

        {/* Map Image */}
        <Image
          source={require("@/assets/images/beach.jpg")} // Placeholder for map image
          style={styles.mapImage}
        />

        {/* Popular Destinations */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Destination</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          {/* Pass the scrollX prop to BeachCard */}
          <BeachCard
            name="Juhu Beach"
            location="Juhu, Mumbai"
            image="https://images.unsplash.com/photo-1578046167037-00613fd0e494?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for Juhu Beach image
          />
          <BeachCard
            name="Baga Beach"
            location="Calangute, Goa"
            image="https://images.unsplash.com/photo-1560094127-a6710fa2d266?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for Baga Beach image
          />
        </ScrollView>

        {/* All Destinations */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>All Destination</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        <BeachCard
          name="Kovalam Beach"
          location="Kovalam Beach, Kerala"
          image="https://www.holidify.com/images/compressed/5095.jpg" // Placeholder for Kovalam Beach image
          isSmall
        />

        <View style={{ marginVertical: 10 }}>
          <BeachCard
            name="Vasco Da Gama"
            location="Vasco Da Gama, Goa"
            image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/0b/5a/3f/lrm-export-20180210-210205.jpg?w=1200&h=-1&s=1" // Placeholder for Vasco Da Gama Beach image
            isSmall
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={24} color="#4CAF50" />
        <Ionicons name="chatbubble-outline" size={24} color="#777" />
        <Ionicons name="map-outline" size={24} color="#777" />
        <Ionicons name="heart-outline" size={24} color="#777" />
        <Ionicons name="person-outline" size={24} color="#777" />
      </View>
    </View>
  );
};

const BeachCard = ({ name, location, image, isSmall = false }) => {
  const scrollX = useRef(new Animated.Value(0)).current; // Track the scroll position

  const scale = scrollX.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.1], // Modify the scale range for zoom effect
    extrapolate: "clamp",
  });

  return (
    <View style={[styles.card, isSmall && styles.smallCard]}>
      <Animated.Image
        source={{ uri: image }}
        style={[
          styles.cardImage,
          isSmall && styles.smallCardImage,
          { transform: [{ scale }] },
        ]} // Add transform for scaling
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{name}</Text>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={16} color="#777" />
          <Text style={styles.locationText}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 100,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    margin: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
  },
  mapImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAllText: {
    color: "#4CAF50",
  },
  horizontalScroll: {
    paddingHorizontal: 10,
  },
  card: {
    width: 250,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#f8f8f8",
  },
  smallCard: {
    width: "95%",
    flexDirection: "row",
    height: 100,
  },
  cardImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  smallCardImage: {
    width: 100,
    height: "100%",
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  locationText: {
    marginLeft: 5,
    color: "#777",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingVertical: 10,
  },
});

export default HomeScreen;
