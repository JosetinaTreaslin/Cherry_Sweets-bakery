import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import styles from "../styles";

const ComponentExample = ({ title, description }) => (
  <View style={styles.componentBox}>
    <Text style={styles.componentTitle}>{title}</Text>
    <Text style={styles.componentDescription}>{description}</Text>
  </View>
);

const ComponentsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Basic React Components</Text>

      <ComponentExample
        title="Functional Components"
        description="Modern React components are functions that return JSX. They're the building blocks of your UI."
      />

      <ComponentExample
        title="JSX"
        description="JSX is a syntax extension for JavaScript that lets you write HTML-like code in your JavaScript."
      />

      <ComponentExample
        title="Component Composition"
        description="Components can be nested inside other components to create complex UIs from simple building blocks."
      />

      <View style={styles.codeSection}>
        <Text style={styles.codeTitle}>Example Component:</Text>
        <Text style={styles.code}>
          {`function Welcome() {\n  return (\n    <View>\n      <Text>Hello!</Text>\n    </View>\n  );\n}`}
        </Text>
      </View>
    </ScrollView>
  );
};
export default ComponentsScreen;
