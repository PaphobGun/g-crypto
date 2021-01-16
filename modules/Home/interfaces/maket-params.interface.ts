export default interface MarketParams {
  vsCurrency: string;
  order:
    | 'marketCapDesc'
    | 'geckoDesc'
    | 'geckoAsc'
    | 'marketCapAsc'
    | 'marketCapDesc'
    | 'volumeAsc'
    | 'volumeDesc'
    | 'idAsc'
    | 'idDesc';
  perPage: number;
  page: number;
  sparkline: boolean;
  priceChangePercentage: '1h' | '24h' | '7d' | '14d' | '30d' | '200d' | '1y';
}
