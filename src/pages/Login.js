import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import { userLogin } from '../redux/actions';
import Button from '../components/Button';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch, history } = this.props;

    dispatch(userLogin(this.state));
    history.push('/carteira');
  };

  render() {
    const { email, password } = this.state;
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const passwordLength = 6;
    return (
      <div>
        <h3>Login</h3>
        <form
          onSubmit={ this.handleSubmit }
        >
          <Input
            label="E-mail: "
            type="email"
            onChange={ this.handleChange }
            value={ email }
            name="email"
            dataTestId="email-input"
          />
          <Input
            label="Senha: "
            type="password"
            onChange={ this.handleChange }
            value={ password }
            name="password"
            dataTestId="password-input"
          />
          <Button
            type="submit"
            label="Entrar"
            disabled={ !(regex.test(email) && password.length >= passwordLength) }
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
