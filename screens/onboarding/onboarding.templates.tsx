import LottieComponent from "@/components/LottieComponent";
import { View } from "@/theme/ui/components/View";
import { Text } from "@/theme/ui/components/Text";
import { useWindowDimensions } from "react-native";
import Location from "@/assets/lotties/Location.json";

export const TemplateOne = ({
  l1,
  l2,
  title,
  masterword,
  lottie,
}: {
  l1: string;
  l2: string;
  masterword: string;
  title: string;
  lottie: any;
}) => {
  const width = useWindowDimensions().width;
  return (
    <View
      style={{
        width,
        height: "100%",
        paddingHorizontal: 24,
      }}
      mt={"xl"}
    >
      <LottieComponent source={lottie} />
      <Text
        preset={"h2"}
        color={"primary"}
        text={title}
        weight="primaryRegular"
      />
      <View mt={"lg"} style={{ maxWidth: 240 }}>
        <View preset="rowStart">
          <Text
            preset={"h5"}
            color={masterword === "agendamento" ? "success" : "info"}
            text={masterword}
            weight="primaryRegular"
          />
        </View>
        <Text
          preset={"h5"}
          color={"secondary"}
          text={l2}
          weight="primaryRegular"
        />
      </View>
    </View>
  );
};

export const CityOnBoarding = () => {
  const width = useWindowDimensions().width;
  return (
    <View
      style={{
        width,
        height: "100%",
        paddingHorizontal: 24,
      }}
      mt={"xl"}
    >
      <LottieComponent source={Location} />

      <Text
        preset={"h2"}
        color={"primary"}
        text={"Falta pouco!"}
        weight="primaryRegular"
      />
      <View mt={"lg"} style={{ maxWidth: 240 }}>
        <View preset="rowStart">
          <Text
            preset={"h5"}
            color={"main"}
            text={"escolha uma cidade para continuar"}
            weight="primaryRegular"
          />
          <Text
            preset={"h5"}
            color={"secondary"}
            text={"e visualize as melhores arenas da região selecionada"}
            weight="primaryRegular"
          />
        </View>
      </View>
    </View>
  );
};
