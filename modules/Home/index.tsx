import { useState } from 'react';
import styled from 'styled-components';

import MarketParams from 'modules/Home/interfaces/maket-params.interface';
import Layout from 'components/Layouts';
import MarketPriceTable from 'modules/Home/components/Table/MarketPriceTable';
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
      <Title>Cryptocurrency Prices by Market Cap</Title>
      <MarketPriceTable
        dataSource={data}
        isLoading={isLoading}
        onChange={handleOnChangeParams}
        pagination={{
          current: marketParams.page,
          pageSize: marketParams.perPage,
          total: data?.length ? 6200 : 0,
        }}
      />
    </Layout>
  );
};

const Title = styled.div`
  font-size: 3rem;
  font-family: 'Dosis', sans-serif;
  text-align: center;
  margin-bottom: 3rem;

  @media only screen and (max-width: ${({
      theme: {
        breakpoints: { sm },
      },
    }) => sm}) {
    font-size: 2.5rem;
  }
`;

export default HomeModule;
