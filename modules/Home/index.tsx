import { useState } from 'react';

import MarketParams from 'modules/Home/interfaces/maket-params.interface';
import Layout from 'components/Layouts';
import MarketPriceTable from 'modules/Home/components/MarketPriceTable';
import useMarketPrice from 'modules/Home/apis/market-price';

const HomeModule = () => {
  const [marketParams, setMarketParams] = useState<MarketParams>({
    vsCurrency: 'usd',
    order: 'marketCapDesc',
    perPage: 10,
    page: 1,
    sparkline: true,
    priceChangePercentage: '1h',
  });

  const { data, isLoading } = useMarketPrice(marketParams);

  return (
    <Layout>
      <MarketPriceTable />
    </Layout>
  );
};

export default HomeModule;
