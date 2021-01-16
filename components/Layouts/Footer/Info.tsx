import styled from 'styled-components';
import Image from 'next/image';

const Info = () => {
  return (
    <Wrapper>
      <div className="logo">
        <Image
          src="/static/images/logo.png"
          alt="Main Logo"
          width={80}
          height={60}
        />
        <span className="title">G-CRYPTO</span>
      </div>
      <div className="description">
        G-CRYPTO is a hobby project that provides a fundamental analysis of the
        crypto market. In addition to tracking price, volume, market
        capitalization and also technical candlestick charts. API is powered by{' '}
        <a href="https://www.coingecko.com/" target="_blank">
          CoinGecko
        </a>{' '}
        and realtime trading charts is powered by{' '}
        <a
          href="https://www.tradingview.com/widget/advanced-chart/"
          target="_blank"
        >
          Trading View
        </a>
        .
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${({
    theme: {
      colors: { textSecondary },
    },
  }) => textSecondary};

  .logo {
    display: flex;
    align-items: center;

    .title {
      margin-left: 2rem;
      font-size: 4rem;
    }
  }

  .description {
    margin-top: 2rem;
  }
`;

export default Info;
