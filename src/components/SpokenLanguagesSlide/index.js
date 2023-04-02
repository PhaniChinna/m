import './index.css'

const SpokenLanguageSlide = props => {
  const {SpokenLanguage} = props
  const {englishName} = SpokenLanguage
  return (
    <li>
      <p className="Spoken-language-slider-container-english">{englishName}</p>
    </li>
  )
}

export default SpokenLanguageSlide
