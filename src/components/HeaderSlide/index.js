import {BsSearch} from 'react-icons/bs'
import './index.css'

const HeaderSlider = () => (
  <>
    <div className="HeaderSlider-container">
      <div className="Header-Slider-container">
        <img
          src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679652587/Group_7399_2_x2dqea.png"
          alt="Movies"
          className="HeaderSlider-Movies-logo"
        />
        <ul className="Un-ordered-list-container">
          <li className="Header-slider-Home">Home</li>
          <li className="Header-slider-Popular">Popular</li>
        </ul>
      </div>
      <div className="Header-slider-flex-end-container">
        <BsSearch className="Header-bs-search" />
        <img
          src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679648297/Avatar_b1rb5n.png"
          className="Header-Avatar-image"
          alt="avatar"
        />
        <img
          src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679649464/add-to-queue_1_a3kov3.png"
          className="Header-Slider-add-Que"
          alt="Que"
        />
      </div>
    </div>
  </>
)

export default HeaderSlider
