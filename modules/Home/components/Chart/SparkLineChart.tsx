import { useMemo } from 'react';
import styled from 'styled-components';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';

import { theme } from 'styles/theme';

const {
  colors: { danger, primary },
} = theme;

type Props = {
  prices: Array<number>;
};

const SparkLineChart = ({ prices = [] }: Props) => {
  const data = useMemo(() => prices.map((p) => ({ p })), [prices]);

  const isNegative = useMemo(
    () => data.length && data[0]?.p > data[data.length - 1]?.p,
    [data]
  );

  return (
    <Wrapper>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ left: -50 }}>
          <YAxis domain={['auto', 'auto']} display="none" />
          <Line
            dataKey="p"
            type="basis"
            dot={false}
            isAnimationActive={false}
            stroke={isNegative ? danger : primary}
          />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 20rem;
  height: 4rem;
`;

export default SparkLineChart;
