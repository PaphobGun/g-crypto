import styled from 'styled-components';
import Link from 'next/link';
import { GithubOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <CustomHeader>
      <img
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
      <div className="repo">
        <a href="https://github.com/PaphobGun/g-crypto" target="_blank">
          <GithubOutlined /> Repository
        </a>
      </div>
    </CustomHeader>
  );
};

const CustomHeader = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 2rem;

  padding: 0 25rem;

  background: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary};

  .nav-item {
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
    a {
      color: white;
    }

    a:hover {
      color: ${({
        theme: {
          colors: { textPrimary },
        },
      }) => textPrimary};
    }
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
