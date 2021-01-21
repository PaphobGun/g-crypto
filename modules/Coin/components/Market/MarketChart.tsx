import { useMemo } from 'react';
import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import moment from 'moment';

import { theme } from 'styles/theme';
import type DayRange from 'modules/Coin/interfaces/day-range.interface';
import type MarketType from 'modules/Coin/interfaces/market-type.interface';
import { formatAmount } from 'utils/formatter';

const DATE_FORMAT = {
  HOUR_MINUTE: 'HH:mm',
  DATE_MONTH: 'D MMM',
  MONTH_YEAR: 'MMM YY',
  FULL: 'DD MMM YYYY HH:mm',
};

const { HOUR_MINUTE, DATE_MONTH, MONTH_YEAR, FULL } = DATE_FORMAT;

type Props = {
  series: Array<{
    date: number;
    value: number;
  }>;
  range: DayRange;
  type: MarketType;
  loading: boolean;
};

const MarketChart = ({ series, range, type, loading }: Props) => {
  const dateFormat = useMemo(() => {
    switch (range) {
      case 1:
        return HOUR_MINUTE;
      case 7:
        return DATE_MONTH;
      case 30:
        return DATE_MONTH;
      case 'max':
        return MONTH_YEAR;
    }
  }, [range]);

  if (loading) {
    return (
      <SpinWrapper>
        <LoadingOutlined />
      </SpinWrapper>
    );
  }

  return (
    <ResponsiveContainer>
      <LineChart data={series} margin={{ left: 20, right: 30 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          tickFormatter={(date) => moment(date).format(dateFormat)}
          domain={[series[0]?.date, series[series?.length - 1]?.date]}
          type="number"
        />
        <YAxis
          dataKey="value"
          domain={['auto', 'auto']}
          tickFormatter={(val: number) =>
            type === 'prices'
              ? `$${formatAmount(val)}`
              : `$${formatAmount(val / 10 ** 6)}M`
          }
        />
        <Tooltip
          contentStyle={{ color: theme.colors.secondary }}
          formatter={(val: number) => `$${formatAmount(val)}`}
          labelFormatter={(label: number) => moment(label).format(FULL)}
        />
        <Line
          type="basis"
          dataKey="value"
          stroke={theme.colors.primary}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

const SpinWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 10rem;
  color: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
`;

export default MarketChart;
