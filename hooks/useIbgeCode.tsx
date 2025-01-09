import { useQuery } from "@tanstack/react-query";

async function fetchIbgeCode(
  city: string,
  state: string
): Promise<string | null> {
  const response = await fetch(
    `https://servicodados.ibge.gov.br/api/v1/localidades/municipios`
  );
  const data = await response.json();

  const match = data.find(
    (item: any) =>
      item.nome.toLowerCase() === city.toLowerCase() &&
      item.microrregiao.mesorregiao.UF.sigla.toLowerCase() ===
        state.toLowerCase()
  );

  return match ? match.id : null;
}

export default function useIbgeCode(city: string | null, state: string | null) {
  return useQuery({
    queryKey: ["ibgeCode", city, state],
    queryFn: () => {
      if (!city || !state) return Promise.reject("City or state is missing");
      return fetchIbgeCode(city, state);
    },
    enabled: !!city && !!state,
    staleTime: 1000 * 60 * 10,
    retry: 2,
  });
}
