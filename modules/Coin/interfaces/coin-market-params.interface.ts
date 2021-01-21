import type DayRange from 'modules/Coin/interfaces/day-range.interface';

export default interface CoinMarketParams {
  id: string;
  vs_currency: string;
  days: DayRange;
}
