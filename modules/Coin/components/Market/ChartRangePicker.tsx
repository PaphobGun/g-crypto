import styled from 'styled-components';
import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd/lib/radio';

import type MarketType from 'modules/Coin/interfaces/market-type.interface';
import type DayRange from 'modules/Coin/interfaces/day-range.interface';

const { Group, Button } = Radio;

type Props = {
  typeValue: MarketType;
  range: DayRange;
  onChangeDays: (newDays: DayRange) => void;
  onChangeType: (newType: MarketType) => void;
};

const ChartRangePicker = ({
  typeValue,
  range,
  onChangeDays,
  onChangeType,
}: Props) => {
  const handleOnChangeType = (e: RadioChangeEvent) => {
    onChangeType(e?.target?.value);
  };

  const handleOnChangeRange = (e: RadioChangeEvent) => {
    onChangeDays(e?.target?.value);
  };

  return (
    <Wrapper>
      <div className="type">
        <Group value={typeValue} onChange={handleOnChangeType}>
          <Button value="prices">Price</Button>
          <Button value="market_caps">Market Cap</Button>
          <Button value="total_volumes">Total Volumes</Button>
        </Group>
      </div>
      <div className="range">
        <Group value={range} onChange={handleOnChangeRange}>
          <Button value={1}>24h</Button>
          <Button value={7}>7d</Button>
          <Button value={30}>30d</Button>
          <Button value="max">MAX</Button>
        </Group>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: ${({
      theme: {
        breakpoints: { sm },
      },
    }) => sm}) {
    flex-direction: column;
    align-items: flex-start;

    .range {
      margin-top: 2rem;
    }
  }
`;

export default ChartRangePicker;
