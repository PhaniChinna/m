import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import './index.css'

class HeaderSlider extends Component {
  state = {
    showMenu: false,
  }

  onClickShowMenu = () => {
    this.setState(Prev => ({
      showMenu: !Prev.showMenu,
    }))
  }

  render() {
    const {showMenu} = this.state
    return (
      <>
        <div className="HeaderSlider-container">
          <div className="Header-Slider-container">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679652587/Group_7399_2_x2dqea.png"
                alt="website logo"
                className="HeaderSlider-Movies-logo"
              />
            </Link>
            <ul className="Un-ordered-list-container">
              <Link className="Header-home-link" to="/">
                <li className="Header-slider-Home">Home</li>
              </Link>
              <Link to="/popular" className="Header-popular-link">
                <li className="Header-slider-Popular">Popular</li>
              </Link>
            </ul>
          </div>
          <div className="Header-slider-flex-end-container">
            <Link to="/search" className="Link-header-card-container">
              <BsSearch className="Header-bs-search" />
            </Link>
            <img
              src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679649464/add-to-queue_1_a3kov3.png"
              className="Header-Slider-add-Que"
              onClick={this.onClickShowMenu}
              alt="Que"
            />
            <div className="Menu-card-container">
              {showMenu && (
                <div className="Menu-card-list-container">
                  <ul className="Header-home-un-ordered-list-card">
                    <Link className="Popup-popular-Home" to="/">
                      <li className="Header-home-heading">Home</li>
                    </Link>
                    <Link className="Popup-popular-Popular" to="/popular">
                      <li className="Header-popular-populra">Popular</li>
                    </Link>
                    <Link className="Popup-Account-Header" to="/account">
                      <li className="Header-popular-account">Account</li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
            <Link to="/account" className="Avatar-link">
              <img
                src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679648297/Avatar_b1rb5n.png"
                className="Header-Avatar-image"
                alt="avatar"
              />
            </Link>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(HeaderSlider)
