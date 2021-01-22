import styled from 'styled-components';
import { formatAmount } from 'utils/formatter';

type Props = {
  value: number;
  pairValue: number;
  pairLabel: string;
  fixedPair?: number;
};

const ConvertedCell = ({ value, pairValue, pairLabel, fixedPair }: Props) => {
  return (
    <Wrapper>
      <div className="value">{`$${formatAmount(value)}`}</div>
      <div className="pair-val">{`${
        fixedPair ? pairValue.toFixed(fixedPair) : pairValue
      } ${pairLabel}`}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .pair-val {
    font-size: 1rem;
  }
`;

export default ConvertedCell;
