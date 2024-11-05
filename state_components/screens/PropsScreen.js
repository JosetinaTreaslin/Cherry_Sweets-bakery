import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import styles from "../styles";

const Card = ({ title, content, bgColor }) => (
  <View style={[styles.card, { backgroundColor: bgColor }]}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardContent}>{content}</Text>
  </View>
);

const PropsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Components with Props</Text>

      <Card
        title="What are Props?"
        content="Props are properties passed to components. They're read-only and help make components reusable."
        bgColor="#FFE8E8"
      />

      <Card
        title="Props vs State"
        content="Props are passed from parent to child components, while state is managed within a component."
        bgColor="#E8F4FF"
      />

      <Card
        title="Props Example"
        content="This card component receives title, content, and bgColor as props!"
        bgColor="#E8FFE8"
      />

      <View style={styles.codeSection}>
        <Text style={styles.codeTitle}>Example Usage:</Text>
        <Text style={styles.code}>
          {`<Card\n  title="Hello"\n  content="Content"\n  bgColor="#FFE8E8"\n/>`}
        </Text>
      </View>
    </ScrollView>
  );
};
export default PropsScreen;
