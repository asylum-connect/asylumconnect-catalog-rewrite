import React from 'react';
import { Link } from '../../routes';

import Login from '../Login';

const Header = () => (
  <header>
    <ul>
      <li>
        <Link route="/">
          <img
            src="/images/asylum-connect-logo.png"
            title="Asylum Connect"
            alt="Asylum Connect"
            style={{ width: '100px' }}
          />
        </Link>
      </li>
      <li>
        <Login />
      </li>
      <li>
        <Link route="/">
          <a>Sign up</a>
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
