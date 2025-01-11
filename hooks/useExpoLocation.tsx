import { useState, useEffect } from "react";
import { Platform } from "react-native";
import * as Device from "expo-device";
import * as Location from "expo-location";

export default function useExpoLocation() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [address, setAddress] =
    useState<Location.LocationGeocodedAddress | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getCurrentLocation() {
      if (Platform.OS === "android" && !Device.isDevice) {
        setErrorMsg(
          "Oops, this will not work on Snack in an Android Emulator. Try it on your device!"
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      try {
        setIsLoading(true);
        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        let geocodedAddress = await Location.reverseGeocodeAsync({
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
        });

        if (geocodedAddress.length > 0) {
          setAddress(geocodedAddress[0]);
        }
      } catch (error) {
        setErrorMsg("An error occurred while fetching location details.");
      } finally {
        setIsLoading(false);
      }
    }

    getCurrentLocation();
  }, []);

  return { errorMsg, location, address, isLoading };
}
