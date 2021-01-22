import useSWR from 'swr';

import type ExchangeDetail from 'modules/Exchange/interfaces/exchange-detail.interface';

const useExchangeDetail = (id: string) => {
  const path = '/exchanges';
  const pathWithParams = `${path}/${id}`;

  const { data, error, mutate } = useSWR(pathWithParams);

  return {
    data: data as ExchangeDetail,
    isLoading: !data && !error,
    error,
    mutate,
  };
};

export default useExchangeDetail;
