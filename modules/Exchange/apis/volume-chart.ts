import useSWR from 'swr';

import type VolumeChartParams from 'modules/Exchange/interfaces/volume-chart-params.interface';
import type VolumeChart from 'modules/Exchange/interfaces/volume-chart.interface';

const useVolumeChart = ({ id, days }: VolumeChartParams) => {
  const path = '/exchanges';
  const pathWithParams = `${path}/${id}/volume_chart?days=${days}`;

  const { data, error, mutate } = useSWR(pathWithParams);

  return {
    data: data as VolumeChart,
    isLoading: !data && !error,
    error,
    mutate,
  };
};

export default useVolumeChart;
