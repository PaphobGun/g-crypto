import { Pagination } from 'antd';
import styled from 'styled-components';
import type { ColumnsType } from 'antd/lib/table';

import MarketParams from 'modules/Home/interfaces/maket-params.interface';
import PaginationInterface from 'modules/common/interfaces/pagination.interface';
import StyledTable from 'components/Table';

type Props = {
  columns: Array<any>;
  dataSource: Array<any>;
  rowKey: string;
  isLoading?: boolean;
  pagination: PaginationInterface;
  onChange: (newParams: MarketParams) => void;
};

const PaginationTable = ({
  columns,
  rowKey,
  dataSource,
  isLoading = false,
  pagination,
  onChange = () => {},
}: Props) => {
  const handleOnChangePagination = (page: number) => {
    onChange({ page });
  };

  return (
    <Wrapper>
      <div className="table-wrapper">
        <StyledTable
          columns={columns}
          rowKey={rowKey}
          dataSource={dataSource}
          loading={isLoading}
          pagination={false}
        />
      </div>
      <div className="pagination-wrapper">
        <StyledPagination
          size="small"
          disabled={isLoading}
          showSizeChanger={false}
          current={pagination.current}
          total={pagination.total}
          pageSize={pagination.pageSize}
          onChange={handleOnChangePagination}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .table-wrapper {
    margin-bottom: 3rem;
  }

  .pagination-wrapper {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledPagination = styled(Pagination)`
  .ant-pagination-item-link {
    .ant-pagination-item-ellipsis {
      color: ${({
        theme: {
          colors: { textPrimary },
        },
      }) => textPrimary};
    }

    svg {
      color: ${({
        theme: {
          colors: { textSecondary },
        },
      }) => textSecondary};
    }
  }

  .ant-pagination-item {
    /* padding-top: 2px; */
    border: 1px solid gray;
    background-color: gray;

    a {
      color: ${({
        theme: {
          colors: { textSecondary },
        },
      }) => textSecondary};
    }
  }

  .ant-pagination-item.ant-pagination-item-active {
    a {
      color: ${({
        theme: {
          colors: { textPrimary },
        },
      }) => textPrimary};
    }
  }
`;

export default PaginationTable;
