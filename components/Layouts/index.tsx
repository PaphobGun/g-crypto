import { ReactNode } from 'react';
import { Layout as AntdLayout } from 'antd';
import styled from 'styled-components';

import Content from 'components/Layouts/Content';
import Footer from 'components/Layouts/Footer';
import Header from 'components/Layouts/Header';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <CustomLayout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </CustomLayout>
  );
};

const CustomLayout = styled(AntdLayout)`
  min-height: 100vh;
`;

export default Layout;
