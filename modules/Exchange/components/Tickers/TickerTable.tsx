import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import type { PaginationProps } from 'antd/lib/pagination';
import type { ColumnsType } from 'antd/lib/table';

import Table from 'components/Table';
import type { Ticker } from 'modules/Exchange/interfaces/exchange-detail.interface';
import ConvertedCell from 'modules/Exchange/components/Tickers/ConvertedCell';
import PopoverScore from 'modules/Exchange/components/Tickers/PopoverScore';

type Props = {
  dataSource: Array<Ticker>;
};

const TickerTable = ({ dataSource }: Props) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const handleOnChangePage = (paginationObj: PaginationProps) => {
    setCurrentPage(paginationObj?.current);
  };

  const columns: ColumnsType<Ticker> = useMemo(
    () => [
      {
        title: '#',
        dataIndex: 'no.',
        render: (_: string, _2: Ticker, index: number) =>
          (currentPage - 1) * 10 + index + 1,
      },
      {
        title: 'Coin',
        dataIndex: 'base',
        render: (base: string, record: Ticker) => (
          <div
            className="base"
            onClick={() => router.push(`/coin/${record?.coin_id}`)}
          >
            {base}
          </div>
        ),
      },
      {
        title: 'Pair',
        dataIndex: 'pair',
        render: (_: string, record: Ticker) => (
          <a
            href={record?.trade_url}
            target="_blank"
            className="pair"
          >{`${record?.base}/${record?.target}`}</a>
        ),
      },
      {
        title: 'Price',
        dataIndex: 'price',
        render: (_: string, record: Ticker) => (
          <ConvertedCell
            value={record?.converted_last?.usd}
            pairValue={record?.last}
            pairLabel={record?.target}
          />
        ),
        align: 'right',
      },
      {
        title: 'Spread',
        dataIndex: 'bid_ask_spread_percentage',
        render: (spread: number) => (spread ? `${spread?.toFixed(2)}%` : 'N/A'),
        align: 'right',
      },
      {
        title: '24h Volume',
        dataIndex: 'volume',
        render: (volume: number, record: Ticker) => (
          <ConvertedCell
            value={record?.converted_volume?.usd}
            pairValue={record?.volume}
            pairLabel={record?.base}
            fixedPair={2}
          />
        ),
        align: 'right',
      },
      {
        title: 'Trust Score',
        dataIndex: 'trust_score',
        render: (trustScore: string) => (
          <PopoverScore trustScore={trustScore} />
        ),
        align: 'center',
      },
    ],
    [currentPage]
  );

  return (
    <Wrapper>
      <Table
        scroll={{ x: 800 }}
        rowKey={(record: Ticker) => record?.base + record?.target}
        dataSource={dataSource}
        columns={columns}
        onChange={handleOnChangePage}
        pagination={{
          total: dataSource?.length,
          pageSize: 10,
          showSizeChanger: false,
          current: currentPage,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ant-table-row:hover {
    background: ${({
      theme: {
        colors: { secondary },
      },
    }) => secondary};
  }

  .base {
    font-family: 'Roboto-Bold', sans-serif;
    color: white;
    text-decoration: underline;
    cursor: pointer;
  }

  .pair {
    font-family: 'Roboto', sans-serif;
    color: white;
    text-decoration: underline;
  }
`;

export default TickerTable;
