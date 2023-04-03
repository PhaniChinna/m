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
      const Username = localStorage.getItem(username)
      const Password = localStorage.getItem(password)
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
              <h1 className="MemberShip-check-detail-heading ">MemberShip</h1>
              <div className="Account-member-ship-route">
                <p className="Account-gmail-com">{Username}@gmail.com</p>
                <p className="Account-password-com">{Password}</p>
              </div>
            </div>
            <hr />
            <div className="Account-slider-div-container">
              <h1 className="Account-Route-plan-details">PlanDetails</h1>
              <div className="Account-slider-premium-ultra">
                <p className="Account-slide-premium">Premium</p>
                <div className="Account-slider-ultra-container">
                  <p className="Account-slider-ultra">Ultra HD</p>
                </div>
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
