import { useMemo } from 'react';

import MarketParams from 'modules/Home/interfaces/maket-params.interface';
import PaginationInterface from 'modules/common/interfaces/pagination.interface';
import PaginationTable from 'components/Table/PaginationTable';
import SparkLineChart from 'modules/Home/components/SparkLineChart';
import { formatAmount } from 'utils/formatter';

type Props = {
  dataSource: Array<any>;
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
        render: (_: string, _2: any, index: number) =>
          (pagination.current - 1) * 100 + index + 1,
      },
      {
        title: 'Coin',
        dataIndex: 'name',
        render: (name: string, record: any) => (
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
        sorter: (a, b) => a.current_price - b.current_price,
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
        sorter: (a, b) =>
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
        sorter: (a, b) =>
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
        sorter: (a, b) =>
          a.price_change_percentage_7d_in_currency -
          b.price_change_percentage_7d_in_currency,
        align: 'right',
        width: 30,
      },
      {
        title: '24h Volume',
        dataIndex: 'total_volume',
        render: (num: number) => (num ? `$ ${formatAmount(num)}` : 'N/A'),
        sorter: (a, b) => a.total_volume - b.total_volume,
        align: 'right',
        width: 200,
      },
      {
        title: 'Market Cap',
        dataIndex: 'market_cap',
        render: (num: number) => (num ? `$ ${formatAmount(num)}` : 'N/A'),
        sorter: (a, b) => a.market_cap - b.market_cap,
        align: 'right',
        width: 200,
      },
      {
        title: 'Last 7 days',
        dataIndex: '7d_chart',
        render: (_: any, record: any) => (
          <SparkLineChart prices={record?.sparkline_in_7d?.price} />
        ),
      },
    ],
    [pagination.current]
  );

  return (
    <PaginationTable
      rowKey="id"
      columns={columns}
      dataSource={dataSource}
      isLoading={isLoading}
      pagination={pagination}
      onChange={onChange}
    />
  );
};

export default MarketPriceTable;
