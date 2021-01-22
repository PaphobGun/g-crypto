import styled from 'styled-components';
import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from '@ant-design/icons';

const Contact = () => {
  return (
    <Wrapper>
      <div className="text">Interested to offer me a job ?</div>
      <div className="text">
        You can contact me in any of the following platform.
      </div>
      <div className="contact">
        <a href="mailto:paphob.a@gmail.com" target="_blank">
          <MailOutlined />
        </a>
        <a href="https://www.linkedin.com/in/paphobgun" target="_blank">
          <LinkedinOutlined />
        </a>
        <a href="https://github.com/PaphobGun" target="_blank">
          <GithubOutlined />
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${({
    theme: {
      colors: { textSecondary },
    },
  }) => textSecondary};

  .text {
    margin-bottom: 1rem;
  }

  .contact {
    margin-top: 5rem;
    font-size: 2.5rem;

    a {
      margin-right: 1rem;
      color: ${({
        theme: {
          colors: { textSecondary },
        },
      }) => textSecondary};
    }

    a:hover {
      color: ${({
        theme: {
          colors: { primary },
        },
      }) => primary};
    }
  }

  @media only screen and (max-width: ${({
      theme: {
        breakpoints: { sm },
      },
    }) => sm}) {
    .contact {
      margin-top: 2rem;
    }
  }
`;

export default Contact;
