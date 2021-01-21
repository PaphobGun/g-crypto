import styled from 'styled-components';

import TickerTable from 'modules/Exchange/components/Tickers/TickerTable';
import type { Ticker } from 'modules/Exchange/interfaces/exchange-detail';

type Props = {
  tickers: Array<Ticker>;
};

const Tickers = ({ tickers }: Props) => {
  return (
    <Wrapper>
      <div className="title">Top 100 Tickers</div>
      <div className="table-container">
        <TickerTable dataSource={tickers} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title {
    margin-bottom: 2rem;
  }
`;

export default Tickers;
