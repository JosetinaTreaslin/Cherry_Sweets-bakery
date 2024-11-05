import React, { useEffect, useState } from "react";
import { View, Text, Animated, Easing } from "react-native";
export default BasicComponents = () => {
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
