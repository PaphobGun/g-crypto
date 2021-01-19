import { useMemo } from 'react';
import styled from 'styled-components';
import { GithubOutlined } from '@ant-design/icons';

import useCoinDetail from 'modules/Coin/apis/coin-detail';
import Divider from 'components/Divider';
import Card from 'components/Card';

type Props = {
  coinId: string;
};

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
    <Card>
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
      </Wrapper>
    </Card>
  );
};

const Wrapper = styled.div`
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
`;

export default Developer;
