import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import './index.css'

import TrendingSlick from '../TrendingSlick'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingSlider extends Component {
  state = {
    TrendingMovies: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getTrendingMovies()
  }

  getTrendingMovies = async () => {
    this.setState({
      apiStatus: apiStatusConstant.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const TrendingApi = 'https://apis.ccbp.in/movies-app/trending-movies'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(TrendingApi, options)
    const data = await response.json()
    if (response.ok === true) {
      const TrendingUpdated = data.results.map(eachTrending => ({
        id: eachTrending.id,
        posterPath: eachTrending.poster_path,
        title: eachTrending.title,
      }))
      this.setState({
        TrendingMovies: TrendingUpdated,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstant.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {TrendingMovies} = this.state
    return (
      <>
        <div className="Render-Success-view">
          <TrendingSlick Trending={TrendingMovies} key={TrendingMovies.id} />
        </div>
      </>
    )
  }

  renderLoaderView = () => (
    <div className="Render-loader-Trending" testid="loader">
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
    <div className="Render-Failure-Trending">
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

  renderTotalSuccessView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccessView()
      case apiStatusConstant.inProgress:
        return this.renderLoaderView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="Trending-slide-Route">
        {this.renderTotalSuccessView()}
      </div>
    )
  }
}

export default TrendingSlider
