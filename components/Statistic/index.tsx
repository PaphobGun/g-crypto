import { ReactNode } from 'react';
import styled from 'styled-components';
import { Statistic } from 'antd';

import Card from 'components/Card';

type Props = {
  title: string;
  value: string | number;
  iconTitle?: ReactNode;
  prefix?: string | number | ReactNode;
};

const StatsItem = ({ title, value, iconTitle, prefix }: Props) => {
  return (
    <Wrapper>
      <Card>
        <Statistic
          title={
            <div className="stats-title-wrapper">
              {iconTitle ? (
                <span className="stats-icon">{iconTitle}</span>
              ) : null}
              <span className="stats-title">{title}</span>
            </div>
          }
          value={value || 'N/A'}
          prefix={value ? prefix : undefined}
        />
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .stats-title-wrapper {
    .stats-icon {
      margin-right: 1rem;
    }

    .stats-title {
      font-family: 'Roboto', sans-serif;
    }
  }
`;

export default StatsItem;
