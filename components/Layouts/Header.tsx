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
      <div className="repo nav-item">GITHUB REPO</div>
    </CustomHeader>
  );
};

const CustomHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  padding: 0 250px;

  background: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary};

  .nav-item {
    font-size: 2rem;
    cursor: pointer;
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
`;

export default Header;
