export interface Cripto {
  _id: string;
  name: string;
  tag: string;
  currencyValue: string;
  lastRate: string;
  rank: number;
  type: string;
  watchListCount: number;
  isFavorite: boolean;
  graph: string;
  scenarios: Scenario[];
}

export interface Scenario {
  scenario: string;
  value: string;
  rate: string;
}
