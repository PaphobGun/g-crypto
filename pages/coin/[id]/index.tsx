import { useRouter } from 'next/router';
import { Breadcrumb } from 'antd';
import styled from 'styled-components';

import Layout from 'components/Layouts';

const CoinDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <Wrapper>
        <div className="bread">
          <Breadcrumb separator=">">
            <Breadcrumb.Item href="/">Coin</Breadcrumb.Item>
            <Breadcrumb.Item>{id}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  .bread {
  }
`;

export default CoinDetail;
