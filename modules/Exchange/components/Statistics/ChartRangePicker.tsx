import styled from 'styled-components';
import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd/lib/radio';

import type { Range } from 'modules/Exchange/interfaces/volume-chart-params.interface';

const { Group, Button } = Radio;

type Props = {
  range: Range;
  onChange: (newRange: Range) => void;
};

const ChartRangePicker = ({ range, onChange }: Props) => {
  const handleOnChange = (e: RadioChangeEvent) => {
    onChange(e?.target?.value);
  };

  return (
    <Wrapper>
      <Group value={range} onChange={handleOnChange}>
        <Button value={1}>24h</Button>
        <Button value={7}>7d</Button>
        <Button value={30}>30d</Button>
      </Group>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ChartRangePicker;
