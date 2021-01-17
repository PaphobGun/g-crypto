import styled from 'styled-components';
import { Table } from 'antd';

export default styled(Table)`
  .ant-spin-nested-loading {
    div {
      .ant-spin {
        max-height: unset;
      }
    }
  }

  tr > td {
    border-bottom: 1px solid #659157;
  }

  .ant-table-thead > tr > th {
    font-family: 'Dosis-Bold', sans-serif;
    font-size: 1.6rem;
    color: white;
    background: ${({
      theme: {
        colors: { secondary },
      },
    }) => secondary} !important;
  }

  .ant-table-tbody {
    tr > td.ant-table-column-sort {
      background: ${({
        theme: {
          colors: { background },
        },
      }) => background};
    }

    font-family: 'Roboto', sans-serif;
    color: ${({
      theme: {
        colors: { textSecondary },
      },
    }) => textSecondary};
    background: ${({
      theme: {
        colors: { background },
      },
    }) => background} !important;
  }

  .ant-table-tbody > tr:hover > td {
    background: unset;
  }
`;
