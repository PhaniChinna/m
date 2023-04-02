import './index.css'

const similarMovies = props => {
  const {SimilarMoviesList} = props
  return (
    <>
      {SimilarMoviesList.map(each => (
        <li className="Similar-list-type-movies">
          <img
            src={each.posterPath}
            alt={each.title}
            className="Similar-movies-list-Route"
          />
        </li>
      ))}
    </>
  )
}

export default similarMovies
