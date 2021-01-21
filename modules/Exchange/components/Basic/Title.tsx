import styled from 'styled-components';
import { Statistic } from 'antd';

type Props = {
  name: string;
  image: string;
  isCentralized: boolean;
  trustScore: number;
};

const Title = ({ name, image, isCentralized, trustScore }: Props) => {
  return (
    <Wrapper>
      <div className="name-wrapper">
        <span className="image">
          <img src={image} alt={name} />
        </span>
        <div className="name-central">
          <div className="name">{name}</div>
          <div className="central">
            {isCentralized ? 'Centralized' : 'Decentralized'}
          </div>
        </div>
      </div>
      <div className="score-wrapper">
        <Statistic value={trustScore || 'N/A'} title="Trust Score" />
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

  .name-wrapper {
    display: flex;
    align-items: center;

    .name-central {
      margin-left: 1.2rem;
      display: flex;
      flex-direction: column;

      .name {
        font-family: 'Roboto-Bold', sans-serif;
        line-height: 1;
      }

      .central {
        font-size: 1.5rem;
      }
    }

    .image {
      img {
        width: 6rem;
        height: 6rem;
      }
    }
  }

  .score-wrapper {
    font-family: 'Roboto', sans-serif;
  }
`;

export default Title;
