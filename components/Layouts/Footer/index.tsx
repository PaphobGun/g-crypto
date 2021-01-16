import { Layout, Row, Col } from 'antd';
import styled from 'styled-components';

import Contact from 'components/Layouts/Footer/Contact';
import Info from 'components/Layouts/Footer/Info';

const { Footer } = Layout;

const MainFooter = () => {
  return (
    <StyledFooter>
      <Row gutter={[8, 16]}>
        <Col xs={24} lg={10}>
          <Info />
        </Col>
        <Col xs={24} lg={{ span: 10, offset: 4 }}>
          <Contact />
        </Col>
      </Row>
      <Row className="portfolio">
        <Col span={24}>PORTFOLIO</Col>
      </Row>
    </StyledFooter>
  );
};

const StyledFooter = styled(Footer)`
  padding: 20px 250px;

  min-height: 8.5rem;

  background: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary};

  .portfolio {
    color: ${({
      theme: {
        colors: { textSecondary },
      },
    }) => textSecondary};
    text-align: center;
  }
`;

export default MainFooter;
