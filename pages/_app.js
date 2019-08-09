import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import withRedux from 'next-redux-wrapper';
import CssBaseline from '@material-ui/core/CssBaseline';
import { initializeStore } from '../store';
import theme from '../components/theme';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

class AsylumConnect extends App {
  static async getInitialProps({ Component, ctx }) {
    // we can dispatch from here too
    ctx.store.dispatch({ type: 'FOO', payload: 'foo' });

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  componentDidMount() {
    // Remove the server-side injected CSS once the client side code takes over
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Component {...pageProps} />
            <Footer />
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initializeStore)(AsylumConnect);
