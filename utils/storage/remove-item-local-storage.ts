import AsyncStorage from "@react-native-async-storage/async-storage";
import { Schema } from "./schema";

export async function removeFromLocalStorage(key: keyof Schema) {
  await AsyncStorage.removeItem(key as string);
}
