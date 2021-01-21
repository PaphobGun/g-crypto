import TradingViewWidget, { Themes } from 'react-tradingview-widget';

type Props = {
  sym?: string;
};

const TVChart = ({ sym = 'BTCUSD' }: Props) => (
  <TradingViewWidget symbol={sym} theme={Themes.DARK} locale="en" />
);

export default TVChart;
