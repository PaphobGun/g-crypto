import { Descriptions } from 'antd';
import styled from 'styled-components';

type Props = {
  year: number;
  country: string;
  webUrl: string;
  facebookUrl: string;
  redditUrl: string;
  twitterName: string;
};

const Contact = ({
  year,
  country,
  webUrl,
  facebookUrl,
  redditUrl,
  twitterName,
}: Props) => {
  return (
    <CustomDescription title="Information">
      <CustomDescription.Item label="Country">
        {country || 'N/A'}
      </CustomDescription.Item>
      <CustomDescription.Item label="Year Established">
        {year || 'N/A'}
      </CustomDescription.Item>
      <CustomDescription.Item label="Website">
        {webUrl ? (
          <a href={webUrl} target="_blank">
            {webUrl}
          </a>
        ) : (
          'N/A'
        )}
      </CustomDescription.Item>
      <CustomDescription.Item label="Facebook">
        {facebookUrl ? (
          <a href={facebookUrl} target="_blank">
            {facebookUrl}
          </a>
        ) : (
          'N/A'
        )}
      </CustomDescription.Item>
      <CustomDescription.Item label="Reddit">
        {redditUrl ? (
          <a href={redditUrl} target="_blank">
            {redditUrl}
          </a>
        ) : (
          'N/A'
        )}
      </CustomDescription.Item>
      <CustomDescription.Item label="Twitter">
        {twitterName ? (
          <a href={`https://www.twitter.com/${twitterName}`} target="_blank">
            {`https://www.twitter.com/${twitterName}`}
          </a>
        ) : (
          'N/A'
        )}
      </CustomDescription.Item>
    </CustomDescription>
  );
};

const CustomDescription = styled(Descriptions)`
  font-family: 'Roboto', sans-serif;

  .ant-descriptions-item-content {
    color: rgba(255, 255, 255, 0.45);
  }
`;

export default Contact;
