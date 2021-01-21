import { useMemo, useState } from 'react';
import styled from 'styled-components';

import Table from 'components/Table';
import type { Ticker } from 'modules/Exchange/interfaces/exchange-detail';
import type { PaginationProps } from 'antd/lib/pagination';
import type { ColumnsType } from 'antd/lib/table';
import { formatAmount } from 'utils/formatter';

type Props = {
  dataSource: Array<Ticker>;
};

const TickerTable = ({ dataSource }: Props) => {
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
          <div className="price-wrapper">
            <div className="price-usd">{`$${formatAmount(
              record?.converted_last?.usd
            )}`}</div>
            <div className="price-pair">{`${record?.last} ${record?.target}`}</div>
          </div>
        ),
        align: 'right',
      },
      {
        title: 'Spread',
        dataIndex: 'bid_ask_spread_percentage',
        render: (spread: number) => (spread ? `${spread?.toFixed(2)}%` : 'N/A'),
        align: 'right',
      },
    ],
    [currentPage]
  );

  return (
    <Wrapper>
      <Table
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

  .pair {
    font-family: 'Roboto-Bold', sans-serif;
    color: white;
    text-decoration: underline;
  }
`;

export default TickerTable;
