export default interface CoinDetail {
  id: string;
  symbol: string;
  name: string;
  hashing_algorithm: string;
  categories: Array<string>;
  description: Description;
  links: Links;
  image: ImageUrl;
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  market_cap_rank: number;
  coingecko_rank: number;
  coingecko_score: number;
  developer_score: number;
  community_score: number;
  liquidity_score: number;
  public_interest_score: number;
  market_data: MarketData;
  community_data: CommunityData;
  developer_data: DeveloperData;
  public_interest_stats: {
    alexa_rank: number;
    bing_matches: number;
  };
  status_updates: Array<string>;
  last_updated: string;
}

export interface Description {
  en: string;
}

export interface Links {
  homepage: Array<string>;
  blockchain_site: Array<string>;
  official_forum_url: Array<string>;
  subreddit_url: string;
  repos_url: ReposUrl;
}

export interface ReposUrl {
  github: Array<string>;
}

export interface ImageUrl {
  thumb: string;
  small: string;
  large: string;
}

export interface MarketData {
  current_price: Currency;
  ath: Currency;
  ath_date: CurrencyDate;
  atl: Currency;
  alt_date: CurrencyDate;
  market_cap: Currency;
  market_cap_rank: number;
  total_volumne: number;
  high_24h: Currency;
  low_24h: Currency;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_14d: number;
  price_change_percentage_30d: number;
  price_change_percentage_60d: number;
  price_change_percentage_200d: number;
  price_change_percentage_1y: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  price_change_24h_in_currency: Currency;
  price_change_percentage_1h_in_currency: Currency;
  price_change_percentage_24h_in_currency: Currency;
  price_change_percentage_7d_in_currency: Currency;
  price_change_percentage_14d_in_currency: Currency;
  price_change_percentage_30d_in_currency: Currency;
  price_change_percentage_60d_in_currency: Currency;
  price_change_percentage_200d_in_currency: Currency;
  price_change_percentage_1y_in_currency: Currency;
  market_cap_change_24h_in_currency: Currency;
  market_cap_change_percentage_24h_in_currency: Currency;
  total_supply: number;
  max_supply: number;
  circulating_supply: number;
  last_updated: string;
}

export interface Currency {
  btc: number;
  usd: number;
  thb: number;
  eth: number;
}

export interface CurrencyDate {
  btc: string;
  usd: string;
  thb: string;
  eth: string;
}

export interface CommunityData {
  facebook_likes: number;
  twitter_followers: number;
  reddit_average_posts_48h: number;
  reddit_average_comments_48h: number;
  reddit_subscribers: number;
  reddit_accounts_active_48h: number;
  telegram_channel_user_count: number;
}

export interface DeveloperData {
  forks: number;
  stars: number;
  subscribers: number;
  total_issues: number;
  closed_issues: number;
  pull_requests_merged: number;
  pull_request_contributors: number;
  code_additions_deletions_4_weeks: {
    additions: number;
    deletions: number;
  };
  commit_count_4_weeks: number;
  last_4_weeks_commit_activity_series: Array<number>;
}
