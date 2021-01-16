import 'styles/antd.less';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

import { theme } from 'styles/theme';
import GlobalStyle from 'styles/globals';
import fetcher from 'utils/fetcher';

const MainApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
};

export default MainApp;
