import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  padding: 2rem;
  background: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary};
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
`;

export default Card;
