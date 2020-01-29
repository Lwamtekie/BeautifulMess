import React from 'react';
import { Link } from 'react-router-dom';
import UserData from '../../Helpers/Data/UserData';


class Login extends React.Component {
  state = {
    email: '',
  }

  loginClickEvent = (e) => {
    const { email } = this.state;
    e.preventDefault();
    UserData
      .loginUser(email)
      .then((user) => {
        this.props.history.push('/');
        sessionStorage.setItem('userInfo', JSON.stringify(user.data));
        this.props.setAuthenticated();
      })
      .catch((error) => {
        console.error('Login error', error);
        this.props.history.push('/Register');
      });
  };

  nameChange = (e) => {
    const tempUser = { ...this.state.user };
    tempUser.name = e.target.value;
    this.setState({ user: tempUser });
  };

  emailChange = (e) => {
    const newEmail = e.target.value;
    this.setState({ email: newEmail });
  };

  render() {
    return (
      <div className="Login">
        <div id="login-form">
          <h1 className="text-center">Login</h1>
          <form className="form-horizontal col-sm-6 col-sm-offset-3">
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-sm-4 control-label">
                Email:
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.emailChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <Link to="/register">Need to Register?</Link>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <button
                  type="submit"
                  className="btn btn-default col-xs-12"
                  onClick={this.loginClickEvent}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
