import styled from 'styled-components';
import { Row, Col, Skeleton } from 'antd';

import type { MarketData } from 'modules/Coin/interfaces/coin-detail.interface';
import MarketCard from 'components/Statistic';
import { formatAmount } from 'utils/formatter';

type Props = {
  margetData: MarketData;
};

const Market = ({ margetData }: Props) => {
  if (!margetData) {
    return <Skeleton />;
  }

  const {
    market_cap,
    total_volume,
    high_24h,
    low_24h,
    circulating_supply,
    max_supply,
    fully_diluted_valuation,
    ath,
  } = margetData;

  return (
    <Wrapper>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={8}>
          <MarketCard title="Market Cap" value={market_cap?.usd} prefix="$" />
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <MarketCard
            title="24 Hour Trading Vol"
            value={total_volume?.usd}
            prefix="$"
          />
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <MarketCard
            title="24h Low/ 24h High"
            value={
              low_24h?.usd && high_24h?.usd
                ? `$ ${formatAmount(low_24h?.usd)} / $ ${formatAmount(
                    high_24h?.usd
                  )}`
                : 'N/A'
            }
          />
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <MarketCard
            title="Circulating Supply"
            value={
              circulating_supply
                ? `${formatAmount(circulating_supply)} ${
                    max_supply ? `/ ${formatAmount(max_supply)}` : ''
                  }`
                : 'N/A'
            }
          />
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <MarketCard
            title="Fully Diluted Valuation"
            value={fully_diluted_valuation?.usd}
            prefix="$"
          />
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <MarketCard title="All Time High" value={ath?.usd} prefix="$" />
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Market;
