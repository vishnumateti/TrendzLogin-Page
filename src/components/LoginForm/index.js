// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: ''}

  onSuccessLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  loginPage = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSuccessLogin()
    } else {
      this.setState({error: data.error_msg})
    }
  }

  userInputFiled = event => {
    this.setState({username: event.target.value})
  }

  userPasswordFiled = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {error} = this.state

    return (
      <div className="login-form-bg-container">
        <img
          className="website-logo-sm"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        />
        <img
          className="login-image"
          alt="website login"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        />
        <form className="form-container" onSubmit={this.loginPage}>
          <img
            className="website-logo-lg"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <label className="user-input-label" htmlFor="username">
            USERNAME
          </label>
          <input
            className="user-input"
            id="username"
            type="text"
            placeholder="Username"
            onChange={this.userInputFiled}
          />
          <label className="user-input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            className="user-input"
            id="password"
            type="password"
            placeholder="Password"
            onChange={this.userPasswordFiled}
          />
          <button className="button" type="submit">
            Login
          </button>
        </form>
        <p className="error">{error}</p>
      </div>
    )
  }
}

export default LoginForm
