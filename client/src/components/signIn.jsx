import React, { Component } from 'react'
import { login } from './UserFunctions'
class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    login(user).then(res => {
      if (res) {
        window.location = '/'
      }
    })
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="card shadow mb-4 mt-5">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-secondary"> </h6>
          </div>
          <div className="card-body">
            <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i> Login</h1>
            <div className="table-responsive">
              <div className="row">
                <div className="col-sm-12">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label>Email</label>
                      <input className="w3-input w3-border w3-animate-input form-control-plaintext form-control" type="email" name="email" onChange={this.handleChange}  />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input className="w3-input w3-border w3-animate-input form-control-plaintext form-control" type="password" name="password" onChange={this.handleChange}  />
                    </div>
                    <hr className="w3-clear" />
                    <input className="btn btn-outline-secondary btn-block" type="submit" value="Login" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;