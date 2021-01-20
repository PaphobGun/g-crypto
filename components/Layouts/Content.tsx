import { ReactNode } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;

type Props = {
  children: ReactNode;
};

const MainContent = ({ children }: Props) => {
  return <StyledContent>{children}</StyledContent>;
};

const StyledContent = styled(Content)`
  padding: 7rem 25rem;

  background: ${({
    theme: {
      colors: { background },
    },
  }) => background};

  @media only screen and (max-width: ${({
      theme: {
        breakpoints: { xxl },
      },
    }) => xxl}) {
    padding: 7rem 4rem;
  }

  @media only screen and (max-width: ${({
      theme: {
        breakpoints: { xl },
      },
    }) => xl}) {
    padding: 7rem 2rem;
  }
`;

export default MainContent;
