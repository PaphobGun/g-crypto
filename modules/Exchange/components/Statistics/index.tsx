import { useState, useMemo } from 'react';
import styled from 'styled-components';

import VolumeChartParams, {
  Range,
} from 'modules/Exchange/interfaces/volume-chart-params.interface';
import useVolumeChart from 'modules/Exchange/apis/volume-chart';
import ChartRangePicker from 'modules/Exchange/components/Statistics/ChartRangePicker';
import VolumeChart from 'modules/Exchange/components/Statistics/VolumeChart';

type Props = {
  id: string;
};

const Statistics = ({ id }: Props) => {
  const [volumeParams, setVolumeParams] = useState<VolumeChartParams>({
    id,
    days: 1,
  });

  const { data, isLoading } = useVolumeChart(volumeParams);

  const handleOnChangeDays = (newDays: Range) => {
    setVolumeParams((prevParams) => ({
      ...prevParams,
      days: newDays,
    }));
  };

  const timeSeries = useMemo(
    () =>
      data?.map((serie) => ({
        date: serie[0],
        value: serie[1],
      })),
    [data]
  );

  return (
    <Wrapper>
      <div className="picker-wrapper">
        <ChartRangePicker
          range={volumeParams.days}
          onChange={handleOnChangeDays}
        />
      </div>
      <div className="chart-title">
        <span>Exchange Trade Volume (BTC)</span>
      </div>
      <div className="chart-wrapper">
        <VolumeChart
          series={timeSeries}
          loading={isLoading}
          range={volumeParams.days}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .picker-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }

  .chart-title {
    margin-bottom: 3rem;
    font-size: 2rem;
  }

  .chart-wrapper {
    width: 100%auto;
    height: 40rem;
  }
`;

export default Statistics;
