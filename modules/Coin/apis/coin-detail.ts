import useSWR from 'swr';

import type CoinDetailParams from 'modules/Coin/interfaces/coin-detail-params.interface';

const useCoinDetail = ({ id }: CoinDetailParams) => {
  const path = `/coins/${id}?localization=false&tickers=false`;

  const { data, error, mutate } = useSWR(path);

  return {
    data,
    isLoading: !data && !error,
    error,
    mutate,
  };
};

export default useCoinDetail;
