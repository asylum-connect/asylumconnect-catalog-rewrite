import React, { PureComponent } from 'react';

import { Link } from '../routes';

class IndexPage extends PureComponent {
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

export default IndexPage;
