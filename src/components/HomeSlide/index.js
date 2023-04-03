import {Component} from 'react'
import Cookies from 'js-cookie'

import HeaderSlider from '../HeaderSlide'

import TrendingSlider from '../TrendingSlide'

import OriginalSlider from '../OriginalSlide'

import ContactUs from '../ContactUsSlide'

import './index.css'

class HomeSlider extends Component {
  state = {
    initialPoster: [],
  }

  componentDidMount() {
    this.getInitialPoster()
  }

  getInitialPoster = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const TopRatedMovies = 'https://apis.ccbp.in/movies-app/top-rated-movies'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(TopRatedMovies, options)
    const data = await response.json()
    console.log(data)
    const fetchedData = data.results.length
    const randomPoster = data.results[Math.floor(Math.random() * fetchedData)]
    const updatedData = {
      id: randomPoster.id,
      backdropPath: randomPoster.backdrop_path,
      overview: randomPoster.overview,
      title: randomPoster.title,
    }
    this.setState({
      initialPoster: updatedData,
    })
  }

  render() {
    const {initialPoster} = this.state
    const {id, backdropPath, overview, title} = initialPoster
    return (
      <>
        <div className="Header-home-slider">
          <HeaderSlider />
        </div>
        <div className="Home-slider-container">
          <img
            src={backdropPath}
            className="HomeSlider-SuperMan-image"
            alt="superMan"
            key={id}
          />
          <div className="Home-slider-superman-container">
            <h1 className="Home-Slider-SuperMan">{title}</h1>
            <p className="Home-slider-Dc-Comic">{overview}</p>
            <button className="Home-slider-button" type="button">
              Play
            </button>
          </div>
        </div>
        <div className="Home-Slider-container-Route">
          <h1 className="Home-Slider-Trending-heading">Trending</h1>
          <div>
            <TrendingSlider />
          </div>
          <div className="Home-slide-header">
            <h1 className="Home-slider-Original-heading"> Originals</h1>
            <OriginalSlider />
          </div>
          <div>
            <ContactUs />
          </div>
        </div>
      </>
    )
  }
}
export default HomeSlider
