import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';

import Layout from 'components/Layouts';
import Breadcrumb from 'components/Breadcrumb';
import BasicInfo from 'modules/Coin/components/BasicInfo';
import Developer from 'modules/Coin/components/Developer';
import useQuery from 'utils/useQuery';
import Market from 'modules/Coin/components/Market';
import TradingView from 'modules/Coin/components/TradingView';
import useCoinDetail from 'modules/Coin/apis/coin-detail';

const { TabPane } = Tabs;

const CoinDetail = () => {
  const queryParams = useQuery();

  const [coinId, setCoinId] = useState('');
  const [coinName, setCoinName] = useState('');

  useEffect(() => {
    if (!queryParams) {
      return;
    }

    const { id, name } = queryParams;

    setCoinId(id as string);
    setCoinName(name as string);
  }, [queryParams]);

  const { data } = useCoinDetail({ id: coinId });

  return (
    <Layout>
      <Wrapper>
        <div className="bread">
          <Breadcrumb separator=">">
            <Breadcrumb.Item href="/">Coin</Breadcrumb.Item>
            <Breadcrumb.Item>{coinName}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="basic">
          <BasicInfo coinId={coinId} />
        </div>
        <div className="tab">
          <Tabs defaultActiveKey="tv">
            <TabPane tab="TradingView" key="tv">
              <TradingView sym={`${data?.symbol?.toLocaleUpperCase()}USD`} />
            </TabPane>
            <TabPane tab="Market" key="market">
              <Market coindId={coinId} />
            </TabPane>
            <TabPane tab="Developer" key="developer">
              <Developer coinId={coinId} />
            </TabPane>
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

export default CoinDetail;
