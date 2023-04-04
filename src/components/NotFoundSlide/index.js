import {Link} from 'react-router-dom'

import './index.css'

const NotFoundSlide = () => (
  <>
    <div>
      <img
        src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679996181/snow-removal-machine-working-high-ski-slope-snowstorm_454047-2149_1_rghzpr.png"
        className="Not-found-image-cont"
        alt="snow"
      />
      <div className="Not-found-slider-container">
        <h1 className="Not-found-lost-your-way">Lost Your Way ?</h1>
        <p className="Not-found-paragraph">
          we are sorry, the page you requested could not be found Please go back
          to the homepage.
        </p>
        <p className="Not-found-para-page">please go back to home page </p>
        <Link to="/">
          <button className="Not-found-button" type="button">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default NotFoundSlide
