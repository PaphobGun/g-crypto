import { useState } from 'react';
import styled from 'styled-components';
import { QuestionCircleOutlined } from '@ant-design/icons';

import Layout from 'components/Layouts';
import ExchangeTable from 'modules/Exchanges/components/Table/ExchangeTable';
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
      <Title>
        Top Cryptocurrency Exchanges Ranking by Trust Score
        <a
          className="icon"
          href="https://blog.coingecko.com/trust-score-explained"
          target="_blank"
        >
          <QuestionCircleOutlined />
        </a>
      </Title>
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

const Title = styled.div`
  font-size: 3rem;
  font-family: 'Dosis', sans-serif;
  text-align: center;
  margin-bottom: 3rem;

  .icon {
    margin-left: 0.5rem;
    color: ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
  }

  .icon:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: ${({
      theme: {
        breakpoints: { sm },
      },
    }) => sm}) {
    font-size: 2.5rem;
  }
`;

export default Exchanges;
