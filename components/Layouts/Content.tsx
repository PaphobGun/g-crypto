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
  padding: 70px 270px;

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
    padding: 70px 40px;
  }

  @media only screen and (max-width: ${({
      theme: {
        breakpoints: { xl },
      },
    }) => xl}) {
    padding: 70px 20px;
  }
`;

export default MainContent;
