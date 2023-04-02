import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import './index.css'

const HeaderSlider = () => (
  <>
    <div className="HeaderSlider-container">
      <div className="Header-Slider-container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679652587/Group_7399_2_x2dqea.png"
            alt="Movies"
            className="HeaderSlider-Movies-logo"
          />
        </Link>
        <ul className="Un-ordered-list-container">
          <li className="Header-slider-Home">
            <Link className="Header-home-link" to="/">
              Home
            </Link>
          </li>
          <li className="Header-slider-Popular">
            <Link to="/popular" className="Header-popular-link">
              Popular
            </Link>
          </li>
        </ul>
      </div>
      <div className="Header-slider-flex-end-container">
        <BsSearch className="Header-bs-search" />
        <Link to="/account" className="Avatar-link">
          <img
            src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679648297/Avatar_b1rb5n.png"
            className="Header-Avatar-image"
            alt="avatar"
          />
        </Link>
        <div className="Popup-container-list">
          <Popup
            model
            trigger={
              <img
                src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679649464/add-to-queue_1_a3kov3.png"
                className="Header-Slider-add-Que"
                alt="Que"
              />
            }
            className="Header-popup-list-container"
          >
            {close => (
              <div className="Header-close-container">
                <ul className="Header-un-ordered-popup-container">
                  <li className="Popup-Header-home">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="Popup-popular-header">
                    <Link to="/popular">Popular</Link>
                  </li>
                  <li className="Popup-account-header">
                    <Link to="/account">Account</Link>
                  </li>
                </ul>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </div>
  </>
)

export default HeaderSlider
