import { useMemo } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import {
  GithubOutlined,
  StarOutlined,
  EyeOutlined,
  ForkOutlined,
  PullRequestOutlined,
  UserOutlined,
} from '@ant-design/icons';

import useCoinDetail from 'modules/Coin/apis/coin-detail';
import Divider from 'components/Divider';
import StatsItem from 'components/Statistic';
import CommitActivitiesChart from 'modules/Coin/components/Developer/CommitActivitiesChart';

type Props = {
  coinId: string;
};

const statsKeys = [
  {
    key: 'stars',
    title: 'STARS',
    icon: <StarOutlined />,
  },
  {
    key: 'forks',
    title: 'FORKS',
    icon: <ForkOutlined />,
  },
  {
    key: 'subscribers',
    title: 'WATCHERS',
    icon: <EyeOutlined />,
  },
  {
    key: 'issues',
    title: 'CLOSED ISSUES/TOTAL ISSUES',
  },
  {
    key: 'pull_requests_merged',
    title: 'MERGED PULL REQUESTS',
    icon: <PullRequestOutlined />,
  },
  {
    key: 'pull_request_contributors',
    title: 'CONTRIBUTORS',
    icon: <UserOutlined />,
  },
];

const Developer = ({ coinId }: Props) => {
  const { data } = useCoinDetail({ id: coinId });

  const repo = useMemo(() => {
    const githubRepos = data?.links?.repos_url?.github;

    return githubRepos?.length ? githubRepos[0] : undefined;
  }, [data]);

  const repoTitle = useMemo(() => {
    if (!repo) return '';
    const repoSplited = repo?.split('/');

    // example: https://github.com/bitcoin/bitcoin

    return `${repoSplited[repoSplited?.length - 2]}/${
      repoSplited[repoSplited?.length - 1]
    }`;
  }, [repo]);

  return (
    <Wrapper>
      <div className="title-wrapper">
        <div className="icon">
          <GithubOutlined />
        </div>
        <div className="title">
          {(
            <a href={repo} target="_blank">
              {repoTitle}
            </a>
          ) || 'N/A'}
        </div>
      </div>
      <Divider />
      <Row gutter={[16, 16]}>
        {statsKeys.map(({ title, icon, key }, index) => {
          if (key === 'issues') {
            return (
              <Col key={index} xs={24} sm={12} lg={8}>
                <StatsItem
                  title={title}
                  iconTitle={icon}
                  value={`${data?.developer_data['closed_issues']}/${data?.developer_data['total_issues']}`}
                />
              </Col>
            );
          }
          return (
            <Col key={index} xs={24} sm={12} lg={8}>
              <StatsItem
                title={title}
                iconTitle={icon}
                value={data?.developer_data[key]}
              />
            </Col>
          );
        })}
      </Row>
      <div className="commit-chart">
        <div className="chart-title">Commit Activities for last 4 weeks</div>
        <div className="chart-wrapper">
          <CommitActivitiesChart
            data={data?.developer_data?.last_4_weeks_commit_activity_series}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary};
  padding: 2rem;
  border-radius: 0.4rem;

  .title-wrapper {
    display: flex;
    align-items: center;

    .icon {
      font-size: 3rem;
    }

    .title {
      margin-left: 1.5rem;
      color: ${({
        theme: {
          colors: { primary },
        },
      }) => primary};
      font-size: 1.8rem;
    }
  }

  .commit-chart {
    .chart-title {
      text-align: center;
      font-size: 2.2rem;
      margin-top: 6rem;
      margin-bottom: 2.5rem;
      font-family: 'Dosis', sans-serif;
    }

    .chart-wrapper {
      height: 30rem;
      width: 100%;
    }
  }
`;

export default Developer;
