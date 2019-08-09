import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { accountThunks } from '../../store/account';

class Login extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    jwt: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  onSubmit = async (e) => {
    const { username, password } = this.state;
    const { dispatch } = this.props;
    e.preventDefault();

    await dispatch(accountThunks.login(username, password));
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { jwt } = this.props;
    if (jwt) {
      return "You're logged in!";
    }

    return (
      <LoginForm onSubmit={this.onSubmit} onInputChange={this.onInputChange} />
    );
  }
}

export default connect((state) => ({
  jwt: state.account.jwt,
}))(Login);
