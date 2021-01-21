import useSWR from 'swr';

import type CoinDetailParams from 'modules/Coin/interfaces/coin-detail-params.interface';
import CoinDetail from 'modules/Coin/interfaces/coin-detail.interface';

const useCoinDetail = ({ id }: CoinDetailParams) => {
  const path = `/coins/${id}?localization=false&tickers=false`;

  const { data, error, mutate } = useSWR(path);

  return {
    data: data as CoinDetail,
    isLoading: !data && !error,
    error,
    mutate,
  };
};

export default useCoinDetail;
