import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import HeaderSlider from '../HeaderSlide'

import PopularSliderSlide from '../PopularPosterSlide'

import ContactUs from '../ContactUsSlide'

import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class PopularSlider extends Component {
  state = {
    PopularMoviesList: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getProductMoviesList()
  }

  getProductMoviesList = async () => {
    this.setState({
      apiStatus: apiStatusConstant.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const PopularUrl = 'https://apis.ccbp.in/movies-app/popular-movies'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(PopularUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const PopularMoviesListDetail = data.results.map(each => ({
        id: each.id,
        posterPath: each.poster_path,
      }))
      this.setState({
        PopularMoviesList: PopularMoviesListDetail,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstant.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {PopularMoviesList} = this.state
    return (
      <>
        <PopularSliderSlide PopularPost={PopularMoviesList} />
      </>
    )
  }

  renderSuccessToPopular = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccessView()
      case apiStatusConstant.inProgress:
        return this.renderLoaderView()
      case apiStatusConstant.failure:
        return this.renderFailureViewList()
      default:
        return null
    }
  }

  renderLoaderView = () => (
    <div className="render-loader-view-list" testid="loader">
      <Loader
        type="TailSpin"
        color="#D81F26"
        height="50"
        width="50"
        className="Render-loader-tail-spin"
      />
    </div>
  )

  renderFailureViewList = () => (
    <div className="render-failure-container">
      <img
        src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679902480/alert-triangle_hemaln.png"
        alt="Danger"
      />
      <p className="Render-failure-paragraph">
        Something Went Wrong Please Try again
      </p>
      <button className="Render-failure-button-list" type="button">
        Try Again
      </button>
    </div>
  )

  render() {
    return (
      <>
        <div>
          <HeaderSlider />
        </div>
        <div className="Popular-slider-movie-slider">
          <ul className="Popular-slide-success-view">
            {this.renderSuccessToPopular()}
          </ul>
          <ContactUs />
        </div>
      </>
    )
  }
}

export default PopularSlider
