import { useMemo } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import type { ColumnsType } from 'antd/lib/table';

import type MarketParams from 'modules/Home/interfaces/maket-params.interface';
import type MarketRecord from 'modules/Home/interfaces/market-record.interface';
import type PaginationInterface from 'modules/common/interfaces/pagination.interface';
import PaginationTable from 'components/Table/PaginationTable';
import SparkLineChart from 'modules/Home/components/Chart/SparkLineChart';
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
  const router = useRouter();

  const columns: ColumnsType<MarketRecord> = useMemo(
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
          <span className="name-wrapper">
            <img src={record.image} width={18} height={18} />{' '}
            <span className="name">{name}</span>
          </span>
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

  const handleOnRow = (record: MarketRecord, _: number) => ({
    onClick: (_) => {
      router.push(`/coin/${record.id}?name=${record.name}`);
    },
  });

  return (
    <Wrapper>
      <PaginationTable
        rowKey="id"
        onRow={handleOnRow}
        columns={columns}
        dataSource={dataSource}
        isLoading={isLoading}
        pagination={pagination}
        scroll={{ x: 1200 }}
        onChange={onChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ant-table-row {
    cursor: pointer;
  }

  .ant-table-row:hover {
    background: ${({
      theme: {
        colors: { secondary },
      },
    }) => secondary};
  }

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
