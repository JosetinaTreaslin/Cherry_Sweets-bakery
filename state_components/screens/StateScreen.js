import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import styles from "../styles";
const StateScreen = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#6C63FF");

  const colors = ["#6C63FF", "#FF6584", "#45B7D1", "#4CAF50"];

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: color }]}>
        <Text style={styles.title}>Understanding State</Text>

        <View style={styles.demoSection}>
          <Text style={styles.subtitle}>Counter Example</Text>
          <Text style={styles.description}>
            State updates trigger re-renders and allow components to "remember"
            values
          </Text>
          <Text style={styles.counter}>{count}</Text>
          <View style={styles.buttonRow}>
            <Button
              title="Decrease"
              onPress={() => setCount((prev) => prev - 1)}
              color="#FF6584"
            />
            <Button
              title="Increase"
              onPress={() => setCount((prev) => prev + 1)}
              color="#4CAF50"
            />
          </View>
        </View>

        <View style={styles.demoSection}>
          <Text style={styles.subtitle}>Color State Example</Text>
          <Text style={styles.description}>
            State can hold any type of value and update the UI accordingly
          </Text>
          <Button
            title="Change Card Color"
            onPress={changeColor}
            color="#45B7D1"
          />
        </View>

        <View style={styles.codeSection}>
          <Text style={styles.codeTitle}>Example Code:</Text>
          <Text style={styles.code}>
            {`const [count, setCount] = useState(0);\n\nsetCount(prev => prev + 1);`}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default StateScreen;
