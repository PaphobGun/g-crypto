import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';

import Layout from 'components/Layouts';
import Breadcrumb from 'components/Breadcrumb';
import Basic from 'modules/Exchange/components/Basic';
import useQuery from 'utils/useQuery';
import useExchangeDetail from 'modules/Exchange/apis/exchange-detail';
import Tickers from 'modules/Exchange/components/Tickers';

const { TabPane } = Tabs;

const Exchange = () => {
  const queryParams = useQuery();

  const [id, setId] = useState('');

  useEffect(() => {
    if (!queryParams) {
      return;
    }

    const { id } = queryParams;

    setId(id as string);
  }, [queryParams]);

  const { data } = useExchangeDetail(id);

  return (
    <Layout>
      <Wrapper>
        <div className="bread">
          <Breadcrumb separator=">">
            <Breadcrumb.Item href="/exchanges">Exchanges</Breadcrumb.Item>
            <Breadcrumb.Item>{data?.name || 'N/A'}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="basic">
          <Basic id={id} />
        </div>
        <div className="tab">
          <Tabs defaultActiveKey="tickers">
            <TabPane tab="Tickers" key="tickers">
              <Tickers tickers={data?.tickers} />
            </TabPane>
            <TabPane tab="Statistics" key="statistics"></TabPane>
          </Tabs>
        </div>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  .bread {
    margin-bottom: 5rem;
  }

  .basic {
    margin-bottom: 3rem;
  }

  .tab {
    font-family: 'Roboto';

    .ant-tabs-tab {
      font-size: 2rem;
    }
  }
`;

export default Exchange;
