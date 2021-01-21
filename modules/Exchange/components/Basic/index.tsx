import styled from 'styled-components';
import { Skeleton } from 'antd';

import useExchangeDetail from 'modules/Exchange/apis/exchange-detail';
import Title from 'modules/Exchange/components/Basic/Title';
import Contact from 'modules/Exchange/components/Basic/Contact';

type Props = {
  id: string;
};

const Basic = ({ id }: Props) => {
  const { data, isLoading } = useExchangeDetail(id);

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <Wrapper>
      <div className="title-wrapper">
        <Title
          name={data?.name}
          image={data?.image}
          isCentralized={data?.centralized}
          trustScore={data?.trust_score}
        />
      </div>
      <div className="contact-wrapper">
        <Contact
          country={data?.country}
          year={data?.year_established}
          webUrl={data?.url}
          facebookUrl={data?.facebook_url}
          twitterName={data?.twitter_handle}
          redditUrl={data?.reddit_url}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title-wrapper {
    margin-bottom: 4rem;
  }
`;

export default Basic;
