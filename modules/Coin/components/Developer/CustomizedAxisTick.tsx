type Props = {
  x?: number;
  y?: number;
  payload?: any;
};

const CustomizedAxisTick = ({ x, y, payload }: Props) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
        {payload?.value}
      </text>
    </g>
  );
};

export default CustomizedAxisTick;
