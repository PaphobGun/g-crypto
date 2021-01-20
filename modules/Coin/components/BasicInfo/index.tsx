import styled from 'styled-components';

import useCoinDetail from 'modules/Coin/apis/coin-detail';
import Title from 'modules/Coin/components/BasicInfo/Title';

type Props = {
  coinId: string;
};

const BasicInfo = ({ coinId }: Props) => {
  const { data } = useCoinDetail({ id: coinId });

  return (
    <Wrapper>
      <Title
        name={data?.name}
        sym={data?.symbol}
        imageUrl={data?.image?.large}
        price={data?.market_data?.current_price?.usd}
        priceChangePercent={data?.market_data?.price_change_percentage_24h}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default BasicInfo;
