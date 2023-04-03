import {Link} from 'react-router-dom'
import './index.css'

const PopularSliderSlide = props => {
  const {id, PopularPost} = props
  return (
    <>
      {PopularPost.map(each => (
        <li>
          <Link to={`/movies/${each.id}`} key={each.id}>
            <img
              src={each.posterPath}
              alt={each.title}
              key={id}
              className="Popular-poster-slider"
            />
          </Link>
        </li>
      ))}
    </>
  )
}

export default PopularSliderSlide
