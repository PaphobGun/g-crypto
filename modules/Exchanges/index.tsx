import { useState } from 'react';

import Layout from 'components/Layouts';
import ExchangeTable from 'modules/Exchanges/components/ExchangeTable';
import useExchangeList from 'modules/Exchanges/apis/exchange-list';
import ExchangeParams from 'modules/Exchanges/interfaces/exchange-params.interface';

const Exchanges = () => {
  const [exchangeParams, setExchangeParams] = useState<ExchangeParams>({
    page: 1,
    perPage: 100,
  });

  const { data, isLoading } = useExchangeList(exchangeParams);

  const handleOnChangeParams = (newParams: ExchangeParams) => {
    setExchangeParams((prevParams) => ({
      ...prevParams,
      ...newParams,
    }));
  };

  return (
    <Layout>
      <ExchangeTable
        dataSource={data}
        isLoading={isLoading}
        onChange={handleOnChangeParams}
        pagination={{
          current: exchangeParams.page,
          pageSize: exchangeParams.perPage,
          total: data?.length ? 315 : 0,
        }}
      />
    </Layout>
  );
};

export default Exchanges;
