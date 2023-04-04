import {Link} from 'react-router-dom'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const OriginalSlicks = props => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: 'Roll',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const {Originals} = props
  return (
    <>
      <Slider {...settings} className="Original-slick-Slider">
        {Originals.map(each => (
          <Link
            to={`/movies/${each.id}`}
            key={each.id}
            className="Link-slider-Home"
          >
            <li className="Original-slider-list-item">
              <img
                src={each.posterPath}
                alt={each.title}
                key={each.id}
                className="Original-slick-image"
              />
            </li>
          </Link>
        ))}
      </Slider>
    </>
  )
}

export default OriginalSlicks
