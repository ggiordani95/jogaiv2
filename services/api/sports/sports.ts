enum Sport {
  Society = "SOCIETY",
  BeachSoccer = "BEACH_SOCCER",
  FutVolley = "FUTVOLLEY",
  Soccer = "SOCCER",
  Futsal = "FUTSAL",
  Tennis = "TENNIS",
  BeachTennis = "BEACH_TENNIS",
  Basketball = "BASKETBALL",
  Volleyball = "VOLLEYBALL",
  BeachVolleyball = "BEACH_VOLLEYBALL",
  Handball = "HANDBALL",
  Padel = "PADEL",
  Event = "EVENT",
}
export const AVAILABLE_SPORTS: Record<
  Sport,
  { name: string; icon: string; searchable?: boolean }
> = {
  [Sport.BeachTennis]: {
    name: "Beach Tênis",
    icon: "sports-tennis",
  },
  [Sport.FutVolley]: {
    name: "Futevôlei",
    icon: "sports-volleyball",
  },
  [Sport.Society]: {
    name: "Futebol Society",
    icon: "sports-soccer",
  },
  [Sport.Soccer]: {
    name: "Futebol 11",
    icon: "sports-soccer",
  },
  [Sport.Futsal]: {
    name: "Futsal",
    icon: "sports-soccer",
  },
  [Sport.BeachVolleyball]: {
    name: "Vôlei de Praia",
    icon: "sports-volleyball",
  },
  [Sport.BeachSoccer]: {
    name: "Futebol de Areia",
    icon: "sports-soccer",
  },
  [Sport.Tennis]: {
    name: "Tênis",
    icon: "sports-tennis",
  },
  [Sport.Padel]: {
    name: "Padel",
    icon: "sports-tennis",
  },
  [Sport.Basketball]: {
    name: "Basquete",
    icon: "sports-basketball",
  },
  [Sport.Volleyball]: {
    name: "Vôlei",
    icon: "sports-volleyball",
  },
  [Sport.Handball]: {
    name: "Handebol",
    icon: "sports-soccer",
  },
  [Sport.Event]: {
    name: "Evento",
    icon: "sports-soccer",
    searchable: false,
  },
};

export function fetchSports() {
  const sportsOptions = Object.entries(AVAILABLE_SPORTS).map(
    ([key, value]) => ({
      identifier: key,
      title: value.name,
      icon: value.icon,
      meta: { searchable: value.searchable ?? true },
    })
  );
  return sportsOptions;
}
