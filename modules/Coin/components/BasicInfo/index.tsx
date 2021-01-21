import styled from 'styled-components';
import { Skeleton } from 'antd';

import useCoinDetail from 'modules/Coin/apis/coin-detail';
import Title from 'modules/Coin/components/BasicInfo/Title';
import Market from 'modules/Coin/components/BasicInfo/Market';

type Props = {
  coinId: string;
};

const BasicInfo = ({ coinId }: Props) => {
  const { data, isLoading } = useCoinDetail({ id: coinId });

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <Wrapper>
      <div className="title-wrapper">
        <Title
          name={data?.name}
          sym={data?.symbol}
          imageUrl={data?.image?.large}
          price={data?.market_data?.current_price?.usd}
          priceChangePercent={data?.market_data?.price_change_percentage_24h}
        />
      </div>
      <div className="market-wrapper">
        <Market margetData={data?.market_data} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary};
  padding: 2rem;

  .title-wrapper {
  }

  .market-wrapper {
    margin-top: 4rem;
  }
`;

export default BasicInfo;
