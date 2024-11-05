// screens/HomeScreen.js
import React from "react";
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "../styles";
import AnimatedCard from "../components/sections/AnimatedCard";
import { MaterialIcons } from "@expo/vector-icons";

// Changed from export default HomeScreen = ({ navigation }) to:
const HomeScreen = ({ navigation }) => {
  const menuItems = [
    {
      name: "Basic",
      screen: "BasicComponents",
      icon: "widgets",
      description: "Text, View, and Image components",
    },
    {
      name: "Input",
      screen: "InputComponents",
      icon: "input",
      description: "TextInput, Button, and Switch controls",
    },
    {
      name: "Lists",
      screen: "ListComponents",
      icon: "list",
      description: "FlatList and SectionList examples",
    },
    {
      name: "Layout",
      screen: "LayoutComponents",
      icon: "dashboard",
      description: "Flexbox and responsive layouts",
    },
    {
      name: "Interaction",
      screen: "InteractionComponents",
      icon: "touch-app",
      description: "Touchable components and gestures",
    },
    {
      name: "Feedback",
      screen: "FeedbackComponents",
      icon: "feedback",
      description: "Loading indicators and alerts",
    },
  ];

  const renderItem = ({ item, index }) => (
    <AnimatedCard delay={index * 100} style={styles.menuCard}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate(item.screen)}
      >
        <MaterialIcons
          name={item.icon}
          size={32}
          color="#3498db"
          style={styles.menuIcon}
        />
        <View style={styles.menuContent}>
          <Text style={styles.menuTitle}>{item.name} Components</Text>
          <Text style={styles.menuDescription}>{item.description}</Text>
        </View>
        <MaterialIcons name="chevron-right" size={24} color="#bdc3c7" />
      </TouchableOpacity>
    </AnimatedCard>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>React Native Components</Text>
        <Text style={styles.headerSubtitle}>
          Interactive Component Explorer
        </Text>
      </View>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.menuList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

// Separate export statement
export default HomeScreen;
