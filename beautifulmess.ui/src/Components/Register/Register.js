import React from 'react';
import { Link } from 'react-router-dom';
import AddUser from '../../Helpers/Data/UserData';
import './Register.scss';


const defaultuser = {
  name: '',
  email: '',
};
class Register extends React.Component {
  state = {
    user: defaultuser,
  }

registerCLickEvent = (e) => {
  const { user } = this.state;
  e.preventDefault();
  Request
    .registerUser(user)
    .then(() => {
      this.props.history.push('/Login');
    })
    .catch((error) => {

    });
};

nameChange = (e) => {
  const tempUser = { ...this.state.user };
  tempUser.name = e.target.value;
  this.setState({ user: tempUser });
};

emailChange = (e) => {
  const tempUser = { ...this.state.user };
  tempUser.email = e.target.value;
  this.setState({ user: tempUser });
};

registerClickEvent = (e) => {
  e.preventDefault();
  const saveMe = { ...this.state.user };
  AddUser.addUser(saveMe)
    .then(() => this.props.history.push('/LogOut'))
    .catch(err => (err));
}


render() {
  const { user } = this.state;
  return (
    <div className="Register">
    <div id="login-form">
      <h1 className="text-center">Register</h1>
      <form className="form-horizontal col-sm-6 col-sm-offset-3">
      <div className="form-group">
              <label htmlFor="inputEmail" className="col-sm-4 control-label">
                Name:
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Name"
                  value={user.name}
                  onChange={this.nameChange}
                />
              </div>
            </div>

        <div className="form-group">
          <label htmlFor="inputEmail" className="col-sm-4 control-label">
            Email:
          </label>
          <div className="col-sm-8">
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
              value={user.email}
              onChange={this.emailChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12 text-center">
            <Link to="/Login">Need to Login?</Link>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <button
              type="submit"
              className="btn btn-default col-xs-12"
              onClick={this.registerClickEvent}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>

  );
}
}

export default Register;
