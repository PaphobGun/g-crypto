import { useState, useEffect } from 'react';

import MarketParams from 'modules/Home/interfaces/maket-params.interface';
import Layout from 'components/Layouts';
import MarketPriceTable from 'modules/Home/components/MarketPriceTable';
import useMarketPrice from 'modules/Home/apis/market-price';

const HomeModule = () => {
  const [marketParams, setMarketParams] = useState<MarketParams>({
    vsCurrency: 'usd',
    order: 'marketCapDesc',
    perPage: 100,
    page: 1,
    sparkline: true,
    priceChangePercentage: ['1h', '24h', '7d'],
  });

  const { data, isLoading } = useMarketPrice(marketParams);

  const handleOnChangeParams = (newParams: MarketParams) => {
    setMarketParams((prevParams) => ({
      ...prevParams,
      ...newParams,
    }));
  };

  return (
    <Layout>
      <MarketPriceTable
        dataSource={data}
        isLoading={isLoading}
        onChange={handleOnChangeParams}
        pagination={{
          current: marketParams.page,
          pageSize: marketParams.perPage,
          total: 6200,
        }}
      />
    </Layout>
  );
};

export default HomeModule;
