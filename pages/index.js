import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import jsHttpCookie from 'cookie';
import { accountActions } from '../store/account';
import { Link } from '../routes';

class IndexPage extends PureComponent {
  static propTypes = {
    jwt: PropTypes.string,
  };

  static async getInitialProps({ store, req }) {
    // Where we check the cookie for a valid JWT
    const initialProps = {};
    if (req && req.headers) {
      const cookies = req.headers.cookie;
      if (typeof cookies === 'string') {
        const cookiesJSON = jsHttpCookie.parse(cookies);
        // jwt means "java web token"
        initialProps.jwt = cookiesJSON.jwt;
        store.dispatch(accountActions.loginSuccess(cookiesJSON.jwt));
      }
    }
    // Also where we'll do async calls for initial data
    return initialProps;
  }

  render() {
    return (
      <>
        <h1>Asylum Connect Catalog</h1>
        <Link route="/account">
          <a>Account page link</a>
        </Link>
      </>
    );
  }
}

export default connect((state) => ({
  jwt: state.account.jwt,
}))(IndexPage);
