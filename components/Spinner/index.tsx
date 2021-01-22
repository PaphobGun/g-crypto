import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';

const Spinner = () => {
  return (
    <SpinWrapper>
      <LoadingOutlined />
    </SpinWrapper>
  );
};

const SpinWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 10rem;
  color: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
`;

export default Spinner;
