import { useMemo } from 'react';
import styled from 'styled-components';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import moment from 'moment';

import { theme } from 'styles/theme';
import RotateTick from 'modules/Coin/components/Developer/CustomizedAxisTick';

const {
  colors: { primary },
} = theme;

type Props = {
  data: Array<number>;
};

const DATE_FORMAT = 'DD/mm/yyyy';

const CommitActivitiesChart = ({ data = [] }: Props) => {
  const series = useMemo(
    () =>
      data.map((commit, index) => ({
        commit,
        // from 28 days ago to now
        date: moment()
          .subtract(index + 1, 'days')
          .format(DATE_FORMAT),
      })),
    [data]
  );

  if (!data.length) {
    return <NoDataText>N/A</NoDataText>;
  }

  return (
    <ResponsiveContainer>
      <BarChart data={series} margin={{ left: -10, bottom: 35 }}>
        <XAxis dataKey="date" interval={5} tick={<RotateTick />} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="commit" fill={primary} />
      </BarChart>
    </ResponsiveContainer>
  );
};

const NoDataText = styled.div`
  text-align: center;
  font-size: 2rem;
`;

export default CommitActivitiesChart;
