import { useMemo } from 'react';
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
import { formatAmount } from 'utils/formatter';
import DateFormat from 'modules/common/enum/date.format.enum';
import type { Range } from 'modules/Exchange/interfaces/volume-chart-params.interface';
import Spinner from 'components/Spinner';

const { HOUR_MINUTE, DATE_MONTH, FULL } = DateFormat;

type Props = {
  series: Array<{ date: number; value: number }>;
  range: Range;
  loading: boolean;
};

const VolumeChart = ({ series = [], range, loading }: Props) => {
  const dateFormat = useMemo(() => {
    switch (range) {
      case 1:
        return HOUR_MINUTE;
      case 7:
        return DATE_MONTH;
      case 30:
        return DATE_MONTH;
    }
  }, [range]);

  if (loading) {
    return <Spinner />;
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
          tickFormatter={(val: number) => `${formatAmount(val)}`}
        />
        <Tooltip
          contentStyle={{ color: theme.colors.secondary }}
          formatter={(val: number) => `${formatAmount(val)} BTC`}
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

export default VolumeChart;
