import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { theme } from 'styles/theme';

type Props = {
  series: Array<{
    date: number;
    value: number;
  }>;
};

const MarketChart = ({ series }: Props) => {
  return (
    <ResponsiveContainer>
      <LineChart data={series}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey="value" domain={['auto', 'auto']} />
        <Tooltip />
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

export default MarketChart;
