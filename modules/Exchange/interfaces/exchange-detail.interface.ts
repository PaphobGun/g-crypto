export default interface ExchangeDetail {
  name: string;
  year_established: number;
  country: string;
  url: string;
  image: string;
  facebook_url: string;
  reddit_url: string;
  telegram_url: string;
  slack_url: string;
  other_url_1: string;
  other_url_2: string;
  twitter_handle: string;
  has_trading_incentive: boolean;
  centralized: boolean;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
  trade_volume_24h_normalized: number;
  tickers: Array<Ticker>;
}

export interface Ticker {
  base: string;
  target: string;
  market: Market;
  last: number;
  volume: number;
  converted_last: ConvertedCurrency;
  converted_volume: ConvertedCurrency;
  trust_score: string;
  bid_ask_spread_percentage: number;
  timestamp: string;
  last_traded_at: string;
  last_fetch_at: string;
  is_anomaly: boolean;
  is_stale: boolean;
  trade_url: string;
  coin_id: string;
  target_coin_id: string;
}

export interface Market {
  name: string;
  identifier: string;
  has_trading_incentive: string;
}

export interface ConvertedCurrency {
  btc: number;
  eth: number;
  usd: number;
}
