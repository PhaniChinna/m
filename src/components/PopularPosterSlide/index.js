import {Link} from 'react-router-dom'
import './index.css'

const PopularSliderSlide = props => {
  const {PopularPost} = props
  return (
    <>
      <ul className="List-un-ou">
        {PopularPost.map(each => (
          <li>
            <Link to={`/movies/${each.id}`} key={each.id}>
              <img
                src={each.posterPath}
                alt="title"
                key="title"
                className="Popular-poster-slider"
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PopularSliderSlide
