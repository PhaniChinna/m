import './index.css'

const PopularSliderSlide = props => {
  const {PopularPost} = props
  return (
    <>
      {PopularPost.map(each => (
        <li>
          <img
            src={each.posterPath}
            alt={each.title}
            className="Popular-poster-slider"
          />
        </li>
      ))}
    </>
  )
}

export default PopularSliderSlide
