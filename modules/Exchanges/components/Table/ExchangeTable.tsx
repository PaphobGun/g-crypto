import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Progress } from 'antd';
import styled from 'styled-components';
import type { ColumnsType } from 'antd/lib/table';

import type PaginationInterface from 'modules/common/interfaces/pagination.interface';
import PaginationTable from 'components/Table/PaginationTable';
import type ExchangeParams from 'modules/Exchanges/interfaces/exchange-params.interface';
import type ExchangeRecord from 'modules/Exchanges/interfaces/exchange-record.interface';
import { theme } from 'styles/theme';
import { formatAmount } from 'utils/formatter';

type Props = {
  dataSource: Array<ExchangeRecord>;
  isLoading: boolean;
  pagination: PaginationInterface;
  onChange: (newParams: ExchangeParams) => void;
};

const ExchangeTable = ({
  dataSource,
  isLoading,
  pagination,
  onChange,
}: Props) => {
  const router = useRouter();

  const columns: ColumnsType<ExchangeRecord> = useMemo(
    () => [
      {
        title: '#',
        dataIndex: 'no.',
        render: (_: string, _2: ExchangeRecord, index: number) =>
          (pagination.current - 1) * pagination.pageSize + index + 1,
      },
      {
        title: 'Exchange',
        dataIndex: 'name',
        render: (name: string, record: ExchangeRecord) => (
          <span className="name-wrapper">
            <img src={record.image} width={40} height={40} />
            <span className="name">{name}</span>
          </span>
        ),
        sorter: (a: ExchangeRecord, b: ExchangeRecord) =>
          a.name.localeCompare(b.name),
      },
      {
        title: 'Trust Score',
        dataIndex: 'trust_score',
        render: (score: number) => (
          <Progress
            percent={score * 10}
            status="active"
            showInfo={false}
            strokeColor={theme.colors.primary}
            trailColor={theme.colors.secondary}
          />
        ),
        sorter: (a: ExchangeRecord, b: ExchangeRecord) =>
          a.trust_score - b.trust_score,
        width: 150,
      },
      {
        title: '24h BTC Volumne',
        dataIndex: 'trade_volume_24h_btc',
        render: (num: number) => (num ? `${formatAmount(num)}` : 'N/A'),
        sorter: (a: ExchangeRecord, b: ExchangeRecord) =>
          a.trade_volume_24h_btc - b.trade_volume_24h_btc,
        align: 'right',
      },
      {
        title: 'Country',
        dataIndex: 'country',
        sorter: (a: ExchangeRecord, b: ExchangeRecord) =>
          a?.country?.localeCompare(b?.country),
        align: 'right',
      },
      {
        title: 'Year Established',
        dataIndex: 'year_established',
        sorter: (a: ExchangeRecord, b: ExchangeRecord) =>
          a.year_established - b.year_established,
        align: 'right',
      },
    ],
    [pagination.current]
  );

  const handleOnRow = (record: ExchangeRecord, _: number) => ({
    onClick: (_) => {
      router.push(`/exchanges/${record.id}`);
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
        scroll={{ x: 800 }}
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

    .name {
      margin-left: 1.5rem;
      font-family: 'Roboto-Bold', sans-serif;
      color: white;
    }

    .name:hover {
      text-decoration: underline;
    }
  }
`;

export default ExchangeTable;
