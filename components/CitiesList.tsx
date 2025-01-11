import { FlatList } from "react-native";
import { CityItem } from "./CityItem";
import React from "react";
import { SkeletonCityItem } from "./SkeletonCityItem";

export const CitiesList = () => {
  const isLoading = false;

  const cities = [
    {
      city: "São Paulo",
      ibge_code: 3550308,
      latitude: "-23.550520",
      longitude: "-46.633308",
      state_uf: "SP",
    },
    {
      city: "Rio de Janeiro",
      ibge_code: 3304557,
      latitude: "-22.906847",
      longitude: "-43.172896",
      state_uf: "RJ",
    },
    {
      city: "Belo Horizonte",
      ibge_code: 3106200,
      latitude: "-19.916681",
      longitude: "-43.934493",
      state_uf: "MG",
    },
    {
      city: "Porto Alegre",
      ibge_code: 4314902,
      latitude: "-30.027700",
      longitude: "-51.228735",
      state_uf: "RS",
    },
    {
      city: "Brasília",
      ibge_code: 5300108,
      latitude: "-15.826691",
      longitude: "-47.921820",
      state_uf: "DF",
    },
  ];

  if (isLoading) {
    return (
      <FlatList
        data={[...Array(5).keys()]}
        renderItem={({ item, index }) => (
          <SkeletonCityItem hasMarginTop={!!(index == 0)} />
        )}
        keyExtractor={(item) => item.toString()}
      />
    );
  }

  return (
    <FlatList
      data={cities}
      renderItem={({ item, index }) => <CityItem city={item} />}
      keyExtractor={(item, index) => index.toString()}
      ListEmptyComponent={() => <React.Fragment></React.Fragment>}
    />
  );
};
