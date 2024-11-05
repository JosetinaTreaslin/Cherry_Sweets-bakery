import React, { useState } from "react";
import { View, Text, TextInput, Switch, Button, Alert } from "react-native";
import styles from "../styles";

export default InputComponents = () => {
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
