import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import HeaderSlider from '../HeaderSlide'

import ContactUs from '../ContactUsSlide'

import ReactContext from '../../ContextSlide/ThemeSlide'

import './index.css'

const AccountSlider = props => (
  <ReactContext.Consumer>
    {value => {
      const {username, password} = value
      const lengthOfPassword = '*'.repeat(password.length)

      const OnClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <>
          <div>
            <HeaderSlider />
          </div>
          <div className="Contact-us-react">
            <h1 className="Account-card-Account">Account</h1>
            <hr />
            <div className="MemberShip-row-container">
              <h1 className="MemberShip-check-detail-heading ">Member ship</h1>
              <div className="Account-member-ship-route">
                <p className="Account-gmail-com">{username}@gmail.com</p>
                <p className="Account-password-com">
                  {password}:{lengthOfPassword}
                </p>
              </div>
            </div>
            <hr />
            <div className="Account-slider-div-container">
              <h1 className="Account-Route-plan-details">Plan details</h1>
              <div className="Account-slider-premium-ultra">
                <p className="Account-slide-premium">Premium</p>
                <p className="Account-slider-ultra">Ultra HD</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="Logout-button-container">
            <button
              className="Button-container"
              type="button"
              onClick={OnClickLogout}
            >
              LogOut
            </button>
          </div>
          <div>
            <ContactUs />
          </div>
        </>
      )
    }}
  </ReactContext.Consumer>
)

export default withRouter(AccountSlider)
