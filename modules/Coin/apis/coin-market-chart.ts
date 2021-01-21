import useSWR from 'swr';

import type CoinMarketParams from 'modules/Coin/interfaces/coin-market-params.interface';
import CoinMarketChart from 'modules/Coin/interfaces/coin-market-chart.interface';

const useCoinMarketChart = ({ id, vs_currency, days }: CoinMarketParams) => {
  const path = `/coins/${id}/market_chart?vs_currency=${vs_currency}&days=${days}`;

  const { data, error, mutate } = useSWR(path);

  return {
    data: data as CoinMarketChart,
    isLoading: !data && !error,
    error,
    mutate,
  };
};

export default useCoinMarketChart;
