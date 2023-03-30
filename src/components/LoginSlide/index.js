import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class LoginSlider extends Component {
  state = {
    username: '',
    password: '',
    ShowErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSuccessData = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      ShowErrorMsg: true,
      errorMsg,
    })
  }

  onSubmitSuccess = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const UserDetails = {username, password}
    const LoginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(UserDetails),
    }
    const response = await fetch(LoginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccessData(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, ShowErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="LoginSlide-container">
        <div className="LoginSlider-image-container">
          <img
            src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679652587/Group_7399_2_x2dqea.png"
            className="LoginSlider-movies-logo"
            alt="Movie"
          />
        </div>
        <div className="LoginSlider-login-container">
          <form
            className="LoginSlider-Form-container"
            onSubmit={this.onSubmitSuccess}
          >
            <h1 className="LoginSlider-heading">Login</h1>
            <label className="LoginSlider-username" htmlFor="username">
              USERNAME
            </label>
            <input
              className="LoginSlider-input-type-text"
              type="text"
              value={username}
              placeholder="Username"
              onChange={this.onChangeUsername}
              id="username"
            />
            <label className="LoginSlider-password" htmlFor="password">
              PASSWORD
            </label>
            <input
              className="LoginSlider-input-type-password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
              id="password"
            />
            {ShowErrorMsg && <p className="Login-Error-message">*{errorMsg}</p>}
            <button className="LoginSlider-login-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginSlider
