import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <div className="text">
        Interested to stay up-to-date with cryptocurrencies?
      </div>
      <div className="text">
        Get the latest crypto news, updates, and reports by subscribing to our
        free newsletter.
      </div>
      <div className="repo">LINK GITHUB REPO</div>
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

  .repo {
    margin-top: 5rem;
  }
`;

export default Contact;
