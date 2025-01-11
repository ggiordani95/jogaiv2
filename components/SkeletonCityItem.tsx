import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import { StyleSheet } from "react-native";

export const SkeletonCityItem = ({
  hasMarginTop,
}: {
  hasMarginTop: boolean;
}) => {
  return (
    <MotiView
      transition={{
        type: "decay",
      }}
      style={[
        styles.container,
        styles.padded,
        { marginTop: hasMarginTop ? 14 : -6 },
      ]}
    >
      <Skeleton width={250} height={60} />
    </MotiView>
  );
};

const styles = StyleSheet.create({
  shape: {
    justifyContent: "center",
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  padded: {
    padding: 16,
  },
});
