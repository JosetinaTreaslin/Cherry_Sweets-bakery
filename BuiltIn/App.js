/*cd BuiltIn  npm i  npm start  */
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
  Easing,
  StatusBar,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
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
const HomeScreen = ({ navigation }) => {
  const menuItems = [
    {
      name: "Top Food",
      screen: "BasicComponents",
      icon: "widgets",
      description: "Top food in our Stall ",
    },
    {
      name: "Menu Card",
      screen: "BasicComponents1",
      icon: "widgets",
      description: "Taste viriety of foods",
    },
    {
      name: "Order",
      screen: "InputComponents",
      icon: "input",
      description: "Fast delivery",
    },
    {
      name: "News",
      screen: "LayoutComponents",
      icon: "dashboard",
      description: "Learn about the food items",
    },
    {
      name: "Feedback",
      screen: "FeedbackComponents",
      icon: "feedback",
      description: "Support and interact",
    },
    {
      name: "settings",
      screen: "InteractionComponents",
      icon: "touch-app",
      description: "Change app settings",
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
          <Text style={styles.menuTitle}>{item.name} </Text>
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
        <Text style={styles.headerTitle}>Cherry Sweets and Bakery </Text>
        
        <Text style={styles.headerSubtitle}>
          The Food Explorer
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

  const sectionData = [
    { title: "Cake Bites", data: ["Cheese Cake           Rs.50","Berry Topped           Rs.65", "Chocolate           Rs.50"] },
    { title: "Beverages", data: ["Hot Coco           Rs.30", "Fruit Shacke           Rs.40"] },
    { title: "Breads", data: ["Barbari Bread           Rs.50", "Chickenpea Bread           Rs.40", "Sourdrough bread           Rs.90"] },
    { title: "Burger", data: ["Pug Burger           Rs.50 ", "Fruit Burger           Rs.60"] },
    { title: "Desserts", data: ["Croissant           Rs.50","Peacan Pie           Rs.40", "Molasses Pie           Rs.40"] },
    { title: "Ice Creams", data: ["Cookie Dough           Rs.50", "cotton Candy           Rs.60 ", "Salted Caramel            Rs.55"] },
  ];

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <View style={styles.container}>
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
    </View>
    </ScrollView>
  );
};
const BasicComponents1 = () => {
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

  const sectionData = [
    { title: "Cake Bites", data: ["Cheese Cake           Rs.50", "Strawberry Cake           Rs.60", "Bon Buns           Rs.20", "Berry Topped           Rs.49", "Chocolate           Rs.50"] },
    { title: "Beverages", data: ["Bottled Water           Rs.30 ", "Milkshake            Rs.60", "Hot Coco           Rs.30", "Coffee Latte           Rs.20", "Fruit Shacke           Rs.40"] },
    { title: "Breads", data: ["Banana Bread           Rs.50 ", "Barbari Bread           Rs.50", "Chickenpea Bread           Rs.40", "Sourdrough bread           Rs.90"] },
    { title: "Burger", data: ["Pug Burger           Rs.50 ", "Fruit Burger           Rs.60", "Beef Burger           Rs.70", "Cheese Burger           Rs.50", "Chile Stuffed           Rs.40", "Vegan Burger           Rs.60"] },
    { title: "Desserts", data: ["Croissant           Rs.50", "Custards           Rs.70", "Apple Pie           Rs.60", "Peacan Pie           Rs.40", "Gulab Jamun           Rs.60", "Molasses Pie           Rs.40"] },
    { title: "Ice Creams", data: ["Cookie Dough           Rs.50", "Vanilla Bean           Rs.70", "cotton Candy           Rs.60 ", "Peanut Butter           Rs.40", "Salted Caramel            Rs.55", "Coconut Crush           Rs.65"] },
  ];

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <View style={styles.container}>
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
    </View>
    </ScrollView>
  );
};
const LayoutComponents = () => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 375;

  return (
    <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="handled">

      {/* Justify Content Demo */}
      <AnimatedCard style={styles.card} delay={100}>
        <Text style={styles.cardTitle}>Today's headings</Text>
        <View style={styles.demoSection}>
          <Text style={styles.sectionTitle}>Just now </Text>
          <View style={styles.spaceBetweenContainer}>
            <View style={[styles.box0, { backgroundColor: "#9b59b6" }]} />
            <View style={[styles.box0, { backgroundColor: "#f1c40f" }]} />
          </View>

          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
            international news 
          </Text>
          <View style={styles.spaceAroundContainer}>
            <View style={[styles.box0, { backgroundColor: "#9b59b6" }]} />
            <View style={[styles.box0, { backgroundColor: "#f1c40f" }]} />
            <View style={[styles.box0, { backgroundColor: "#1abc9c" }]} />
          </View>
        </View>
      </AnimatedCard>

      <AnimatedCard style={styles.card}>
        <View style={styles.demoSection}>

        <View style={styles.columnContainer}>
          <Text style={styles.sectionTitle}>News Today</Text>
          <View style={styles.rowContainer}>
            <View style={[styles.box0, { backgroundColor: "#3498db" }]} />
            <View style={[styles.box1, { backgroundColor: "#e74c3c" }]} />
            <View style={[styles.box1, { backgroundColor: "#2ecc71" }]} />
          </View>


          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Popular </Text>
          <View style={styles.rowContainer}>
            <View style={[styles.box2, { backgroundColor: "#3498db" }]} />
            <View style={[styles.box2, { backgroundColor: "#e74c3c" }]} />
          </View>
          
          </View>
        </View>
      </AnimatedCard>    

      {/* Responsive Layout Demo */}
      <AnimatedCard style={styles.card} delay={300}>
        <Text style={styles.cardTitle}>Mestories</Text>
        <View style={styles.demoSection}>
          <Text style={styles.sectionTitle}>Case 1</Text>
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
                <Text style={styles.gridText}>Data {item}</Text>
              </View>
            ))}
          </View>
        </View>
      </AnimatedCard>

      {/* Absolute Positioning Demo */}
      <AnimatedCard style={styles.card} delay={400}>
        <Text style={styles.cardTitle}>More </Text>
        <View style={[styles.demoSection, { height: 200 }]}>
          <Text style={styles.sectionTitle}>See every news</Text>
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
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <AnimatedCard style={styles.card}>
        <Text style={styles.cardTitle}>Order</Text>

        <View style={styles.inputSection}>
          <Text style={styles.label}>enter code:</Text>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder="Type something..."
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.switchSection}>
          <View style={styles.switchRow}>
            <Text>Fast Delivery:            + Rs.20</Text>
            <Switch
              value={isEnabled}
              onValueChange={setIsEnabled}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            />
          </View>
        </View>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => setModalVisible(true)}
          underlayColor="#DDDDDD"
        >
          <Text style={styles.touchableText}>Order</Text>
        </TouchableHighlight>
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Ordered Successfully</Text>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>        
      </AnimatedCard>
    </View>
  );
};
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
const InteractionComponents = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <AnimatedCard style={styles.card}>
        <Text style={styles.cardTitle}>modes</Text>

        <TouchableOpacity
          style={styles.touchable}
          onPress={() => Alert.alert("Warning", "Not available now")}
        >
          <Text style={styles.touchableText}>select </Text>
        </TouchableOpacity>
      </AnimatedCard>
    </View>
  );
};
const FeedbackComponents = () => {
    const [text, setText] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [rotateAnim] = useState(new Animated.Value(0));

useEffect(() => {
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
  ).start();
}, []);

const spin = rotateAnim.interpolate({
  inputRange: [0, 1],
  outputRange: ["0deg", "360deg"],
});

  return (
    <View style={styles.container}>
      <AnimatedCard style={styles.card}>
        <Text style={styles.cardTitle}>Feedback and Reviews</Text>

        <View style={styles.inputSection}>
          <Text style={styles.label}>Feel free to give your Feedback and Reviews</Text>
          <TextInput
              style={[styles.input, styles.textarea]}
              value={text}
              onChangeText={setText}
              placeholder="Type something..."
              placeholderTextColor="#999"
              multiline={true}
              numberOfLines={4}
              />
        </View>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => setModalVisible(true)}
          underlayColor="#DDDDDD"
        >
          <Text style={styles.touchableText}>Submit</Text>
        </TouchableHighlight>
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Feedback has been Successfully</Text>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>        
      </AnimatedCard>  
      <Text style={styles.cardTitle}>  Rating:</Text>   
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        {[...Array(5)].map((_, index) => (
          <Animated.View key={index} style={[styles.animatedBox, { width: 40, height: 40, transform: [{ rotate: spin }] }]}>
            <MaterialIcons name="star" size={24} color="white" />
          </Animated.View>
        ))}
      </View>
 

    </View>
  );
};
const Components_To_Explore = () => {
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

}
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
            title: "TOP FOOD",
          }}
        />
                <Stack.Screen
          name="BasicComponents1"
          component={BasicComponents1}
          options={{title: "MENU CARD",}}
        />
        <Stack.Screen
          name="InputComponents"
          component={InputComponents}
          options={{ title: "ORDER" }}
        />
        <Stack.Screen
          name="LayoutComponents"
          component={LayoutComponents}
          options={{ title: "NEWS" }}
        />
        <Stack.Screen
          name="ListComponents"
          component={ListComponents}
          options={{ title: "List Components" }}
        />
        <Stack.Screen
          name="InteractionComponents"
          component={InteractionComponents}
          options={{ title: "SETTINGS" }}
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
  box0: {
    width: 100, 
    height: 100, 
    margin: 10,
    borderRadius: 10, 
  },
  box1: {
    width: 150, 
    height: 100, 
    margin: 10,
    borderRadius: 10, 
  },

    box2: {
      width: 100, 
      height: 150, 
      margin: 10,
      borderRadius: 10, 
    }, 
    box3: {
      width: 150, 
      height: 100, 
      margin: 10,
      borderRadius: 10, 
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
