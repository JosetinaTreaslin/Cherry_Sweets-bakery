import React from "react";
import { View, Text, Button, ActivityIndicator, Alert } from "react-native";
export default FeedbackComponents = () => {
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
