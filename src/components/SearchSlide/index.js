import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'

import HeaderSlider from '../HeaderSlide'

import './index.css'

class SearchRoute extends Component {
  state = {
    searchMovies: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getSearchMoviesList()
  }

  getSearchMoviesList = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const SearchApi = `https://apis.ccbp.in/movies-app/movies-search?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(SearchApi, options)
    const data = await response.json()
    if (response.ok === true) {
      const SearchUpdatedMovie = data.results.map(each => ({
        id: each.id,
        posterPath: each.poster_path,
        title: each.title,
      }))
      this.setState({
        searchMovies: SearchUpdatedMovie,
      })
    }
  }

  searchInputText = event => {
    this.setState(
      {
        searchInput: event.target.value,
      },
      this.getSearchMoviesList(),
    )
  }

  renderSearchMoviesList = () => {
    const {searchMovies} = this.state
    return (
      <>
        <div>
          <ul className="SearchInput-container">
            {searchMovies.map(each => (
              <li>
                <Link to={`/movies/${each.id}`} key={each.id}>
                  <img
                    src={each.posterPath}
                    alt={each.title}
                    className="Search-slider-image-logo"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  }

  renderMissSearch = () => {
    const {searchInput} = this.state
    return (
      <div className="Render-missing-image">
        <img
          src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1680503281/Group_7394_d3uobr.png"
          className="Render-oh-no-image"
          alt="OhNo"
        />
        <p className="Render-your-paragraph">
          Your search are {searchInput} did not find any matches
        </p>
      </div>
    )
  }

  renderLoaderView = () => (
    <div className="Render-loader-search">
      <Loader
        type="TailSpin"
        color="#D81F26"
        height="50"
        width="50"
        className="Search-input-loader"
      />
    </div>
  )

  renderResultViewList = () => {
    const {searchMovies} = this.state
    return (
      <>
        <div className="Search-Route-Heading">
          {searchMovies.length > 0
            ? this.renderSearchMoviesList()
            : this.renderMissSearch()}
        </div>
      </>
    )
  }

  renderSearchIcon = () => {
    const {searchInput} = this.state
    const isEmpty = searchInput === ''
    return (
      <div>
        {isEmpty ? (
          <div>
            <p className="SearchIcon-view">
              Search the movie,by clicking on the search Icon
            </p>
          </div>
        ) : (
          this.renderResultViewList()
        )}
      </div>
    )
  }

  render() {
    return (
      <>
        <div>
          <HeaderSlider searchInput={this.searchInputText} />
        </div>
        <div className="Search-Route-Heading">{this.renderSearchIcon()}</div>
      </>
    )
  }
}

export default SearchRoute
