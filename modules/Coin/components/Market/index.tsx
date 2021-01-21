import { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';

import ChartRangePicker from 'modules/Coin/components/Market/ChartRangePicker';
import MarketChart from 'modules/Coin/components/Market/MarketChart';
import useCoinMarketChart from 'modules/Coin/apis/coin-market-chart';
import type CoinMarketParams from 'modules/Coin/interfaces/coin-market-params.interface';
import type DayRange from 'modules/Coin/interfaces/day-range.interface';
import type MarketType from 'modules/Coin/interfaces/market-type.interface';

type Props = {
  coindId: string;
};

const Market = ({ coindId }: Props) => {
  const [coinMarketParams, setCoinMarketParams] = useState<CoinMarketParams>({
    vs_currency: 'usd',
    days: 1,
    id: coindId,
  });

  const [typeValue, setTypeValue] = useState<MarketType>('prices');

  const { data, isLoading } = useCoinMarketChart(coinMarketParams);

  const timeSeries = useMemo(
    () =>
      !isLoading &&
      data[typeValue]?.map((serie) => ({
        date: serie[0],
        value: serie[1],
      })),
    [data, typeValue]
  );

  useEffect(() => {
    console.log(timeSeries);
  }, [timeSeries]);

  const handleChangeDays = (newDays: DayRange) => {
    setCoinMarketParams((prevParams) => ({
      ...prevParams,
      days: newDays,
    }));
  };

  const handleChangeType = (newType: MarketType) => {
    setTypeValue(newType);
  };

  return (
    <Wrapper>
      <div className="picker-container">
        <ChartRangePicker
          typeValue={typeValue}
          range={coinMarketParams.days}
          onChangeDays={handleChangeDays}
          onChangeType={handleChangeType}
        />
      </div>
      <div className="chart-title">TITLE</div>
      <div className="chart-container">
        <MarketChart series={timeSeries} />
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
  border-radius: 0.4rem;

  .picker-container {
    margin-bottom: 3rem;
  }

  .chart-title {
    margin-bottom: 2rem;
  }

  .chart-container {
    width: 100%;
    height: 40rem;
  }
`;

export default Market;
