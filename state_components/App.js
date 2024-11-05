import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Import screens
import HomeScreen from "./screens/HomeScreen";
import StateScreen from "./screens/StateScreen";
import CatApiScreen from "./screens/CatApiScreen";
import ComponentsScreen from "./screens/ComponentsScreen";
import PropsScreen from "./screens/PropsScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#6C63FF",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
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
            name="State"
            component={StateScreen}
            options={{ title: "Understanding State" }}
          />
          <Stack.Screen
            name="CatApi"
            component={CatApiScreen}
            options={{ title: "Cat API Demo" }}
          />
          <Stack.Screen
            name="Components"
            component={ComponentsScreen}
            options={{ title: "Basic Components" }}
          />
          <Stack.Screen
            name="Props"
            component={PropsScreen}
            options={{ title: "Components with Props" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
