import styled from 'styled-components';
import dynamic from 'next/dynamic';

const TradingViewChart = dynamic(() => import('components/TradingViewChart'), {
  ssr: false,
});

type Props = {
  sym: string;
};

const TradingView = ({ sym }: Props) => {
  return (
    <Wrapper>
      <TradingViewChart sym={sym} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%auto;
`;

export default TradingView;
