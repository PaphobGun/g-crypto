import { Popover } from 'antd';
import styled from 'styled-components';

type Props = {
  trustScore: string;
};

const PopoverScore = ({ trustScore }: Props) => {
  return (
    <Popover
      content={
        <div>
          <div>Trust Score is {trustScore === 'green' ? 'Good' : 'fair'}</div>
          <div>
            We estimate that this exchange pair has a{' '}
            {trustScore === 'green' ? 'good' : 'fair'} liquidity.
          </div>
        </div>
      }
    >
      <DotWrapper>
        <Dot className={trustScore === 'green' ? 'good' : 'fair'} />
      </DotWrapper>
    </Popover>
  );
};

const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Dot = styled.div`
  border-radius: 2rem;
  width: 1.5rem;
  height: 1.5rem;

  &.good {
    background-color: ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
  }

  &.fair {
    background-color: #ffc107;
  }
`;

export default PopoverScore;
