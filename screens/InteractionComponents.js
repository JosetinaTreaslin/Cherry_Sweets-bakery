import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  Button,
  Alert,
} from "react-native";
import AnimatedCard from "../components/sections/AnimatedCard";
import styles from "../styles";

export default InteractionComponents = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <AnimatedCard style={styles.card}>
        <Text style={styles.cardTitle}>Interactive Elements</Text>

        <TouchableOpacity
          style={styles.touchable}
          onPress={() => Alert.alert("Pressed!", "TouchableOpacity pressed")}
        >
          <Text style={styles.touchableText}>Press Me (TouchableOpacity)</Text>
        </TouchableOpacity>

        <TouchableHighlight
          style={styles.touchable}
          onPress={() => setModalVisible(true)}
          underlayColor="#DDDDDD"
        >
          <Text style={styles.touchableText}>Show Modal</Text>
        </TouchableHighlight>

        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>This is a Modal</Text>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </AnimatedCard>
    </View>
  );
};
