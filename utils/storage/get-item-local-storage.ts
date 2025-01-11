import AsyncStorage from "@react-native-async-storage/async-storage";
import { Schema, TestReturnType } from "./schema";

export async function getItemLocalStorage<
  Key extends keyof Schema,
  ReturnType = Schema[Key]
>(key: Key): Promise<TestReturnType<Key, ReturnType> | null> {
  const data = await AsyncStorage.getItem(String(key));

  if (!data) {
    return null;
  }

  return JSON.parse(data) as TestReturnType<Key, ReturnType>;
}
