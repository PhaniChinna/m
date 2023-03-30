import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const TrendingSlick = props => {
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
  const {Trending} = props
  return (
    <>
      <Slider {...settings} className="Trending-slick-Slider">
        {Trending.map(each => (
          <li className="Trending-slider-list-item">
            <img
              src={each.posterPath}
              alt={each.title}
              className="Trending-slick-image"
            />
          </li>
        ))}
      </Slider>
    </>
  )
}

export default TrendingSlick
