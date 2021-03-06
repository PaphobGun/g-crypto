import useSWR from 'swr';

import MarketParams from 'modules/Home/interfaces/maket-params.interface';
import { getPathWithParams } from 'utils/formatter';

const useMarketPrice = (queryParams: MarketParams) => {
  const path = '/coins/markets';
  const pathWithParams = getPathWithParams(path, queryParams);

  const { data, error, mutate } = useSWR(pathWithParams);

  return {
    data,
    isLoading: !data && !error,
    error,
    mutate,
  };
};

export default useMarketPrice;
