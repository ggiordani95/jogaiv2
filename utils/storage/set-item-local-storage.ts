import AsyncStorage from "@react-native-async-storage/async-storage";
import { Schema } from "./schema";

export async function setItemLocalStorage<
  Key extends keyof Schema,
  Value = Schema[Key]
>(key: Key, value: Key extends string ? Value : Schema[Key]) {
  await AsyncStorage.setItem(key as string, JSON.stringify(value));
}
