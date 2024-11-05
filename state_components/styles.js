import { StyleSheet, Platform } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "white",
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
    color: "white",
    opacity: 0.9,
  },
  demoSection: {
    marginBottom: 24,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
  },
  counter: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
    color: "white",
  },
  codeSection: {
    backgroundColor: "#1E1E1E",
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  codeTitle: {
    color: "#fff",
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "600",
  },
  code: {
    color: "#D4D4D4",
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    fontSize: 12,
  },
  imageContainer: {
    width: "100%",
    height: 300,
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
  },
  catImage: {
    width: "100%",
    height: "100%",
  },
  componentBox: {
    backgroundColor: "white",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    elevation: 2,
  },
  componentTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  componentDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  cardContent: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});

export default styles;
