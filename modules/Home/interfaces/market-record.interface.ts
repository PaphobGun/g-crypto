export default interface MarketRecord {
  id: string;
  name: string;
  image: string;
  symbol: string;
  current_price: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  total_volume: number;
  market_cap: number;
  sparkline_in_7d: SparkLineSevenDays;
}

export interface SparkLineSevenDays {
  price: Array<number>;
}
