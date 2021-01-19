import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';

import Layout from 'components/Layouts';
import Breadcrumb from 'components/Breadcrumb';
import BasicInfo from 'modules/Coin/components/BasicInfo';
import Social from 'modules/Coin/components/Social';
import Stats from 'modules/Coin/components/Stats';
import Developer from 'modules/Coin/components/Developer';
import useCoinDetail from 'modules/Coin/apis/coin-detail';
import useQuery from 'utils/useQuery';

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

  const { data, isLoading, mutate } = useCoinDetail({ id: coinId });

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
          <Tabs defaultActiveKey="1">
            <TabPane tab="Stats" key="1">
              <Stats coinId={coinId} />
            </TabPane>
            <TabPane tab="Social" key="2">
              <Social coinId={coinId} />
            </TabPane>
            <TabPane tab="Developer" key="3">
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
  }
`;

export default CoinDetail;
