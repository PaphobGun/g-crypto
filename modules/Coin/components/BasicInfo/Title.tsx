import styled from 'styled-components';

import { formatAmount } from 'utils/formatter';

type Props = {
  name: string;
  sym: string;
  imageUrl: string;
  price: number;
  priceChangePercent: number;
};

const Title = ({ name, sym, imageUrl, price, priceChangePercent }: Props) => {
  return (
    <Wrapper>
      <div className="name-wrapper">
        <span className="image">
          <img src={imageUrl} alt={name} />
        </span>
        <span className="name">{name}</span>
        <span className="sym">({sym?.toLocaleUpperCase()})</span>
      </div>
      <div className="price-wrapper">
        <span className="price">${formatAmount(price)}</span>
        <span
          className={`change ${
            priceChangePercent < 0 ? 'negative' : 'positive'
          }`}
        >
          {priceChangePercent?.toFixed(1)}%
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 3rem;
  color: white;

  @media only screen and (max-width: ${({
      theme: {
        breakpoints: { sm },
      },
    }) => sm}) {
    flex-direction: column;
  }

  padding: 2rem;
  background: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary};

  .name-wrapper {
    display: flex;
    align-items: center;

    font-family: 'Roboto-Bold', sans-serif;

    .name {
      margin-left: 1.2rem;
    }

    .sym {
      margin-left: 0.5rem;
    }

    .image {
      img {
        width: 5rem;
        height: 5rem;
      }
    }
  }

  .price-wrapper {
    font-family: 'Roboto', sans-serif;

    .price {
    }

    .change {
      font-size: 2rem;
      margin-left: 1rem;

      &.negative {
        color: ${({
          theme: {
            colors: { danger },
          },
        }) => danger};
      }

      &.positive {
        color: ${({
          theme: {
            colors: { primary },
          },
        }) => primary};
      }
    }
  }
`;

export default Title;
