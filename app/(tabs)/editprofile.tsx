import { StyleSheet, Image } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/spa.jpg")}
          style={styles.reactLogo}
          defaultSource={require("@/assets/images/spa.jpg")}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText variant="large" weight={"bold"}>
          Arena do Gui
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText weight="bold">Localização</ThemedText>
        <ThemedText>
          <ThemedText>Rua Mariana Prezzi, 617 - Caxias do Sul, RS</ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText weight="bold">Contatos</ThemedText>
        <ThemedText>(54) 3222-2222</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText weight="bold">Horários de Funcionamento</ThemedText>
        <ThemedText>
          When you're ready, run <ThemedText>npm run reset-project</ThemedText>{" "}
          to get a fresh <ThemedText>app</ThemedText> directory. This will move
          the current <ThemedText>app</ThemedText> to{" "}
          <ThemedText>app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  spacing: {
    padding: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    padding: 12,
    backgroundColor: "#FF9C5F",
  },
  reactLogo: {
    height: 280,
    width: 400,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    backgroundColor: "white",
  },
  searchInput: {
    height: 35,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    width: "100%",
  },
});
