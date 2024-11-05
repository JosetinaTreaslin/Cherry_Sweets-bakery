import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import BasicComponents from "./screens/BasicComponents";
import InputComponents from "./screens/InputComponents";
import ListComponents from "./screens/ListComponents";
import InteractionComponents from "./screens/InteractionComponents";
import FeedbackComponents from "./screens/FeedbackComponents";

const Stack = createStackNavigator();

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
