import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Button,
  Switch,
  FlatList,
  SectionList,
  Modal,
  TouchableHighlight,
  ActivityIndicator,
  Alert,
  Animated,
  Platform,
  Dimensions,
  Image,
  Easing,
  StatusBar,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.9;
const Stack = createStackNavigator();

const AnimatedCard = ({ children, style, delay = 0 }) => {
  const scale = new Animated.Value(0.9);
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.parallel([
        Animated.spring(scale, {
          toValue: 1,
          friction: 8,
          tension: 40,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        style,
        {
          transform: [{ scale }],
          opacity,
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

const StyledButton = ({ title, onPress, type = "primary", icon }) => (
  <TouchableOpacity
    style={[
      styles.styledButton,
      type === "secondary" && styles.styledButtonSecondary,
    ]}
    onPress={onPress}
  >
    {icon && (
      <MaterialIcons
        name={icon}
        size={24}
        color={type === "primary" ? "white" : "#3498db"}
        style={styles.buttonIcon}
      />
    )}
    <Text
      style={[
        styles.styledButtonText,
        type === "secondary" && styles.styledButtonTextSecondary,
      ]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

// Home Screen
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

// Basic Components Screen
const BasicComponents = () => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [rotateAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.loop(
        Animated.sequence([
          Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(rotateAnim, {
            toValue: 0,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ),
    ]).start();
  }, []);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <AnimatedCard style={styles.card}>
        <Text style={styles.cardTitle}>Text Styling</Text>
        <View style={styles.demoSection}>
          <Text style={styles.heading}>Typography Examples</Text>
          <Text style={styles.subheading}>
            Various text styles and formatting
          </Text>
          <Text style={styles.paragraph}>
            This is a paragraph demonstrating text styling in React Native. We
            can make text <Text style={styles.bold}>bold</Text>,
            <Text style={styles.italic}> italic</Text>, or
            <Text style={styles.colored}> colored</Text>.
          </Text>
        </View>
      </AnimatedCard>

      <AnimatedCard style={styles.card} delay={200}>
        <Text style={styles.cardTitle}>Animated Components</Text>
        <View style={styles.demoSection}>
          <Animated.View
            style={[styles.animatedBox, { transform: [{ rotate: spin }] }]}
          >
            <MaterialIcons name="star" size={32} color="white" />
          </Animated.View>
        </View>
      </AnimatedCard>

      <AnimatedCard style={styles.card} delay={400}>
        <Text style={styles.cardTitle}>Flexible Layouts</Text>
        <View style={styles.flexDemo}>
          {["#FF9999", "#99FF99", "#9999FF"].map((color, index) => (
            <Animated.View
              key={index}
              style={[
                styles.flexBox,
                { backgroundColor: color },
                {
                  opacity: fadeAnim,
                  transform: [
                    {
                      translateY: fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [50, 0],
                      }),
                    },
                  ],
                },
              ]}
            />
          ))}
        </View>
      </AnimatedCard>
    </View>
  );
};

const LayoutComponents = () => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 375;

  return (
    <ScrollView style={styles.container}>
      <AnimatedCard style={styles.card}>
        <Text style={styles.cardTitle}>Flex Direction</Text>
        <View style={styles.demoSection}>
          <Text style={styles.sectionTitle}>Row</Text>
          <View style={styles.rowContainer}>
            <View style={[styles.box, { backgroundColor: "#3498db" }]} />
            <View style={[styles.box, { backgroundColor: "#e74c3c" }]} />
            <View style={[styles.box, { backgroundColor: "#2ecc71" }]} />
          </View>

          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Column</Text>
          <View style={styles.columnContainer}>
            <View style={[styles.box, { backgroundColor: "#3498db" }]} />
            <View style={[styles.box, { backgroundColor: "#e74c3c" }]} />
            <View style={[styles.box, { backgroundColor: "#2ecc71" }]} />
          </View>
        </View>
      </AnimatedCard>

      {/* Justify Content Demo */}
      <AnimatedCard style={styles.card} delay={100}>
        <Text style={styles.cardTitle}>Justify Content</Text>
        <View style={styles.demoSection}>
          <Text style={styles.sectionTitle}>Space Between</Text>
          <View style={styles.spaceBetweenContainer}>
            <View style={[styles.box, { backgroundColor: "#9b59b6" }]} />
            <View style={[styles.box, { backgroundColor: "#f1c40f" }]} />
            <View style={[styles.box, { backgroundColor: "#1abc9c" }]} />
          </View>

          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
            Space Around
          </Text>
          <View style={styles.spaceAroundContainer}>
            <View style={[styles.box, { backgroundColor: "#9b59b6" }]} />
            <View style={[styles.box, { backgroundColor: "#f1c40f" }]} />
            <View style={[styles.box, { backgroundColor: "#1abc9c" }]} />
          </View>
        </View>
      </AnimatedCard>

      {/* Align Items Demo */}
      <AnimatedCard style={styles.card} delay={200}>
        <Text style={styles.cardTitle}>Align Items</Text>
        <View style={[styles.demoSection, { height: 200 }]}>
          <Text style={styles.sectionTitle}>Different Alignments</Text>
          <View style={styles.alignItemsContainer}>
            <View style={[styles.tallBox, { backgroundColor: "#34495e" }]} />
            <View
              style={[
                styles.tallBox,
                { backgroundColor: "#e67e22", height: 100 },
              ]}
            />
            <View
              style={[
                styles.tallBox,
                { backgroundColor: "#16a085", height: 60 },
              ]}
            />
          </View>
        </View>
      </AnimatedCard>

      {/* Responsive Layout Demo */}
      <AnimatedCard style={styles.card} delay={300}>
        <Text style={styles.cardTitle}>Responsive Grid</Text>
        <View style={styles.demoSection}>
          <Text style={styles.sectionTitle}>Adapts to Screen Size</Text>
          <View style={styles.gridContainer}>
            {[1, 2, 3, 4].map((item) => (
              <View
                key={item}
                style={[
                  styles.gridItem,
                  { width: isSmallScreen ? "45%" : "30%" },
                ]}
              >
                <MaterialIcons name="apps" size={24} color="#fff" />
                <Text style={styles.gridText}>Item {item}</Text>
              </View>
            ))}
          </View>
        </View>
      </AnimatedCard>

      {/* Absolute Positioning Demo */}
      <AnimatedCard style={styles.card} delay={400}>
        <Text style={styles.cardTitle}>Absolute Positioning</Text>
        <View style={[styles.demoSection, { height: 200 }]}>
          <Text style={styles.sectionTitle}>Layered Elements</Text>
          <View style={styles.absoluteContainer}>
            <View style={[styles.absoluteBox, styles.bottomBox]} />
            <View style={[styles.absoluteBox, styles.middleBox]} />
            <View style={[styles.absoluteBox, styles.topBox]} />
          </View>
        </View>
      </AnimatedCard>
    </ScrollView>
  );
};
const InputComponents = () => {
  const [text, setText] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <AnimatedCard style={styles.card}>
        <Text style={styles.cardTitle}>Input Controls</Text>

        <View style={styles.inputSection}>
          <Text style={styles.label}>Text Input:</Text>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder="Type something..."
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.switchSection}>
          <Text style={styles.label}>Switch:</Text>
          <View style={styles.switchRow}>
            <Text>Toggle me</Text>
            <Switch
              value={isEnabled}
              onValueChange={setIsEnabled}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            />
          </View>
        </View>

        <View style={styles.buttonSection}>
          <Button
            title="Show Alert"
            onPress={() =>
              Alert.alert("Button Pressed", "This is a basic alert")
            }
          />
        </View>
      </AnimatedCard>
    </View>
  );
};

// ListComponents.js
const ListComponents = () => {
  const listData = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
  ];

  const sectionData = [
    { title: "Section 1", data: ["Item 1-1", "Item 1-2"] },
    { title: "Section 2", data: ["Item 2-1", "Item 2-2"] },
  ];

  return (
    <View style={styles.container}>
      <AnimatedCard style={styles.card}>
        <Text style={styles.cardTitle}>FlatList Example</Text>
        <FlatList
          data={listData}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </AnimatedCard>

      <AnimatedCard style={styles.card}>
        <Text style={styles.cardTitle}>SectionList Example</Text>
        <SectionList
          sections={sectionData}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </AnimatedCard>
    </View>
  );
};

// InteractionComponents.js
const InteractionComponents = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <AnimatedCard style={styles.card}>
        <Text style={styles.cardTitle}>Interactive Elements</Text>

        <TouchableOpacity
          style={styles.touchable}
          onPress={() => Alert.alert("Pressed!", "TouchableOpacity pressed")}
        >
          <Text style={styles.touchableText}>Press Me (TouchableOpacity)</Text>
        </TouchableOpacity>

        <TouchableHighlight
          style={styles.touchable}
          onPress={() => setModalVisible(true)}
          underlayColor="#DDDDDD"
        >
          <Text style={styles.touchableText}>Show Modal</Text>
        </TouchableHighlight>

        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>This is a Modal</Text>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </AnimatedCard>
    </View>
  );
};

// FeedbackComponents.js
const FeedbackComponents = () => {
  return (
    <View style={styles.container}>
      <AnimatedCard style={styles.card}>
        <Text style={styles.cardTitle}>Loading & Feedback</Text>

        <View style={styles.feedbackSection}>
          <Text style={styles.label}>Activity Indicator:</Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>

        <View style={styles.feedbackSection}>
          <Text style={styles.label}>Alert Example:</Text>
          <Button
            title="Show Alert"
            onPress={() =>
              Alert.alert("Alert Title", "This is an alert message", [
                { text: "Cancel", style: "cancel" },
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ])
            }
          />
        </View>
      </AnimatedCard>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#3498db",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          cardStyle: { backgroundColor: "#f5f6fa" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BasicComponents"
          component={BasicComponents}
          options={{
            title: "Basic Components",
          }}
        />
        <Stack.Screen
          name="InputComponents"
          component={InputComponents}
          options={{ title: "Input Components" }}
        />
        <Stack.Screen
          name="LayoutComponents"
          component={LayoutComponents}
          options={{ title: "Layout Components" }}
        />
        <Stack.Screen
          name="ListComponents"
          component={ListComponents}
          options={{ title: "List Components" }}
        />
        <Stack.Screen
          name="InteractionComponents"
          component={InteractionComponents}
          options={{ title: "Interactions" }}
        />
        <Stack.Screen
          name="FeedbackComponents"
          component={FeedbackComponents}
          options={{ title: "Feedback" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  header: {
    backgroundColor: "#3498db",
    padding: 20,
    paddingTop: Platform.OS === "ios" ? 50 : 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.8)",
    textAlign: "center",
    marginTop: 5,
  },
  menuList: {
    padding: 15,
  },
  menuCard: {
    backgroundColor: "white",
    borderRadius: 15,
    marginVertical: 8,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  menuIcon: {
    marginRight: 15,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2c3e50",
  },
  menuDescription: {
    fontSize: 14,
    color: "#7f8c8d",
    marginTop: 5,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    margin: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: 15,
  },
  demoSection: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    color: "#34495e",
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: "#7f8c8d",
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    color: "#2c3e50",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  colored: {
    color: "#e74c3c",
  },
  flexDemo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  flexBox: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  animatedBox: {
    width: 80,
    height: 80,
    backgroundColor: "#3498db",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  styledButton: {
    flexDirection: "row",
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  styledButtonSecondary: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#3498db",
  },
  styledButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  styledButtonTextSecondary: {
    color: "#3498db",
  },
  buttonIcon: {
    marginRight: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  buttonSection: {
    marginTop: 16,
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  sectionHeader: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
  touchable: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
  },
  touchableText: {
    color: "white",
    fontWeight: "600",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
  },
  feedbackSection: {
    marginVertical: 15,
    alignItems: "center",
  },
  demoSection: {
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: 10,
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  tallBox: {
    width: 50,
    height: 120,
    borderRadius: 8,
  },
  rowContainer: {
    flexDirection: "row",
    gap: 10,
  },
  columnContainer: {
    gap: 10,
  },
  spaceBetweenContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  spaceAroundContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  alignItemsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
  gridItem: {
    backgroundColor: "#3498db",
    aspectRatio: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  gridText: {
    color: "#fff",
    marginTop: 5,
    fontSize: 12,
  },
  absoluteContainer: {
    width: "100%",
    height: 150,
    position: "relative",
  },
  absoluteBox: {
    width: 100,
    height: 100,
    position: "absolute",
    borderRadius: 10,
  },
  bottomBox: {
    backgroundColor: "#e74c3c",
    left: 20,
    top: 20,
  },
  middleBox: {
    backgroundColor: "#f1c40f",
    left: 40,
    top: 40,
  },
  topBox: {
    backgroundColor: "#2ecc71",
    left: 60,
    top: 60,
  },
});
