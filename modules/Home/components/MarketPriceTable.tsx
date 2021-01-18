import { useMemo } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import MarketParams from 'modules/Home/interfaces/maket-params.interface';
import MarketRecord from 'modules/Home/interfaces/market-record.interface';
import PaginationInterface from 'modules/common/interfaces/pagination.interface';
import PaginationTable from 'components/Table/PaginationTable';
import SparkLineChart from 'modules/Home/components/SparkLineChart';
import { formatAmount } from 'utils/formatter';

type Props = {
  dataSource: Array<MarketRecord>;
  isLoading: boolean;
  pagination: PaginationInterface;
  onChange: (newParams: MarketParams) => void;
};

const MarketPriceTable = ({
  dataSource = [],
  isLoading,
  pagination,
  onChange,
}: Props) => {
  const columns = useMemo(
    () => [
      {
        title: '#',
        dataIndex: 'no.',
        render: (_: string, _2: MarketRecord, index: number) =>
          (pagination.current - 1) * pagination.pageSize + index + 1,
      },
      {
        title: 'Coin',
        dataIndex: 'name',
        render: (name: string, record: MarketRecord) => (
          <Link href={`/coin/${record.id}`}>
            <span className="name-wrapper">
              <img src={record.image} width={18} height={18} />{' '}
              <span className="name">{name}</span>
            </span>
          </Link>
        ),
        width: 200,
      },
      {
        title: '',
        dataIndex: 'symbol',
        render: (sym: string) => sym.toUpperCase(),
        width: 40,
      },
      {
        title: 'Price',
        dataIndex: 'current_price',
        render: (price: number) =>
          price ? `$ ${formatAmount(price, true)}` : 'N/A',
        sorter: (a: MarketRecord, b: MarketRecord) =>
          a.current_price - b.current_price,
        align: 'right',
        width: 200,
      },
      {
        title: '1h',
        dataIndex: 'price_change_percentage_1h_in_currency',
        render: (num: number) => (
          <span className={num < 0 ? 'negative' : num ? 'positive' : ''}>
            {num ? `${num?.toFixed(1)}%` : 'N/A'}
          </span>
        ),
        sorter: (a: MarketRecord, b: MarketRecord) =>
          a.price_change_percentage_1h_in_currency -
          b.price_change_percentage_1h_in_currency,
        align: 'right',
        width: 30,
      },
      {
        title: '24h',
        dataIndex: 'price_change_percentage_24h_in_currency',
        render: (num: number) => (
          <span className={num < 0 ? 'negative' : num ? 'positive' : ''}>
            {num ? `${num?.toFixed(1)}%` : 'N/A'}
          </span>
        ),
        sorter: (a: MarketRecord, b: MarketRecord) =>
          a.price_change_percentage_24h_in_currency -
          b.price_change_percentage_24h_in_currency,
        align: 'right',
        width: 30,
      },
      {
        title: '7d',
        dataIndex: 'price_change_percentage_7d_in_currency',
        render: (num: number) => (
          <span className={num < 0 ? 'negative' : num ? 'positive' : ''}>
            {num ? `${num?.toFixed(1)}%` : 'N/A'}
          </span>
        ),
        sorter: (a: MarketRecord, b: MarketRecord) =>
          a.price_change_percentage_7d_in_currency -
          b.price_change_percentage_7d_in_currency,
        align: 'right',
        width: 30,
      },
      {
        title: '24h Volume',
        dataIndex: 'total_volume',
        render: (num: number) => (num ? `$ ${formatAmount(num)}` : 'N/A'),
        sorter: (a: MarketRecord, b: MarketRecord) =>
          a.total_volume - b.total_volume,
        align: 'right',
        width: 200,
      },
      {
        title: 'Market Cap',
        dataIndex: 'market_cap',
        render: (num: number) => (num ? `$ ${formatAmount(num)}` : 'N/A'),
        sorter: (a: MarketRecord, b: MarketRecord) =>
          a.market_cap - b.market_cap,
        align: 'right',
        width: 200,
      },
      {
        title: 'Last 7 days',
        dataIndex: '7d_chart',
        render: (_: any, record: MarketRecord) => (
          <SparkLineChart prices={record?.sparkline_in_7d?.price} />
        ),
      },
    ],
    [pagination.current]
  );

  return (
    <Wrapper>
      <PaginationTable
        rowKey="id"
        columns={columns}
        dataSource={dataSource}
        isLoading={isLoading}
        pagination={pagination}
        onChange={onChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .name-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;

    .name {
      margin-left: 1.5rem;
      font-weight: bold;
      color: white;
      font-family: 'Roboto-Bold', sans-serif;
    }

    .name:hover {
      text-decoration: underline;
    }
  }

  .positive {
    color: ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
  }

  .negative {
    color: ${({
      theme: {
        colors: { danger },
      },
    }) => danger};
  }
`;

export default MarketPriceTable;
