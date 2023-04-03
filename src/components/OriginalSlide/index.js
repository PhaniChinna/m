import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import TrendingSlick from '../TrendingSlick'

import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class OriginalSlider extends Component {
  state = {
    originalMovies: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getOriginalMoviesList()
  }

  getOriginalMoviesList = async () => {
    this.setState({
      apiStatus: apiStatusConstant.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const OriginalApi = 'https://apis.ccbp.in/movies-app/originals'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(OriginalApi, options)
    const data = await response.json()
    if (response.ok === true) {
      const OriginalData = data.results.map(eachOriginal => ({
        id: eachOriginal.id,
        posterPath: eachOriginal.poster_path,
        title: eachOriginal.title,
      }))
      this.setState({
        originalMovies: OriginalData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstant.failure,
      })
    }
  }

  renderTotalOriginalMovie = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccessViewData()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      case apiStatusConstant.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  renderSuccessViewData = () => {
    const {originalMovies} = this.state
    return (
      <>
        <div className="Render-Original-movies">
          <TrendingSlick Trending={originalMovies} />
        </div>
      </>
    )
  }

  renderLoaderView = () => (
    <div className="Render-loader-Original" testid="loader">
      <Loader
        type="TailSpin"
        color="#D81F26"
        height="50"
        width="50"
        className="Render-Tail-spin-round"
      />
    </div>
  )

  renderFailureView = () => (
    <div className="Render-Failure-Original">
      <img
        src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679902480/alert-triangle_hemaln.png"
        alt="Alert"
      />
      <div>
        <p className="Render-failure-paragraph">
          Something Went wrong Please Try again
        </p>
        <button className="Render-failure-button" type="button">
          Try Again
        </button>
      </div>
    </div>
  )

  render() {
    return <div>{this.renderTotalOriginalMovie()}</div>
  }
}

export default OriginalSlider
