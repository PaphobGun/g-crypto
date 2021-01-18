import useSWR from 'swr';

import type ExchangeParams from 'modules/Exchanges/interfaces/exchange-params.interface';
import { getPathWithParams } from 'utils/formatter';

const useExchangeList = (queryParams: ExchangeParams) => {
  const path = '/exchanges';
  const pathWithParams = getPathWithParams(path, queryParams);

  const { data, error, mutate } = useSWR(pathWithParams);

  return {
    data,
    isLoading: !data && !error,
    error,
    mutate,
  };
};

export default useExchangeList;
