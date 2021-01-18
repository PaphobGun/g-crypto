export default interface ExchangeRecord {
  id: string;
  name: string;
  image: string;
  trust_score: number;
  trust_score_rank: number;
  year_established: number;
  country: string;
  trade_volume_24h_btc: number;
}
