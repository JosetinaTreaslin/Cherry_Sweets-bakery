import React from "react";
import { View, Text, FlatList, SectionList } from "react-native";
import AnimatedCard from "../components/sections/AnimatedCard";
import styles from "../styles";

export default ListComponents = () => {
  const listData = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
  ];

  const sectionData = [
    { title: "Section 1", data: ["Item 1-1", "Item 1-2"] },
    { title: "Section 2", data: ["Item 2-1", "Item 2-2"] },
  ];

  return (
    <View style={styles.container}>
      <AnimatedCard style={styles.card}>
        <Text style={styles.cardTitle}>FlatList Example</Text>
        <FlatList
          data={listData}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </AnimatedCard>

      <AnimatedCard style={styles.card}>
        <Text style={styles.cardTitle}>SectionList Example</Text>
        <SectionList
          sections={sectionData}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </AnimatedCard>
    </View>
  );
};
