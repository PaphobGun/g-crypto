import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <CustomHeader>
      <Image
        src="/static/images/logo-img.png"
        alt="Main Logo"
        width={80}
        height={80}
      />
      <div className="nav-item">
        <Link href="/">
          <span>Home</span>
        </Link>
      </div>
      <div className="nav-item">
        <Link href="/exchanges">
          <span>Exchanges</span>
        </Link>
      </div>
      <div className="repo nav-item">GITHUB REPO</div>
    </CustomHeader>
  );
};

const CustomHeader = styled.div`
  display: flex;
  align-items: center;
  color: white;

  padding: 0 25rem;

  background: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary};

  .nav-item {
    font-size: 2rem;
    cursor: pointer;
    margin-left: 2rem;
  }

  .nav-item:hover {
    color: ${({
      theme: {
        colors: { textPrimary },
      },
    }) => textPrimary};
  }

  .repo {
    margin-left: auto;
  }

  @media only screen and (max-width: ${({
      theme: {
        breakpoints: { xxl },
      },
    }) => xxl}) {
    padding: 0 4rem;
  }

  @media only screen and (max-width: ${({
      theme: {
        breakpoints: { xl },
      },
    }) => xl}) {
    padding: 0 2rem;
  }

  @media only screen and (max-width: ${({
      theme: {
        breakpoints: { xs },
      },
    }) => xs}) {
    .nav-item {
      font-size: 1.8rem;
    }
  }
`;

export default Header;
