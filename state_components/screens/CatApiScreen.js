import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Button,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import styles from "../styles";

const CatApiScreen = () => {
  const [catImage, setCatImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCatImage = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const data = await response.json();
      setCatImage(data[0].url);
    } catch (error) {
      console.error("Error fetching cat image:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#6C63FF" />
          ) : (
            <Image
              source={{ uri: catImage }}
              style={styles.catImage}
              resizeMode="cover"
            />
          )}
        </View>
        <Button title="Get New Cat" onPress={fetchCatImage} color="#6C63FF" />
      </View>
    </View>
  );
};
export default CatApiScreen;
