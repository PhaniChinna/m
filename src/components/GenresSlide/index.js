import './index.css'

const GeneresSlider = props => {
  const {Generes} = props
  const {name} = Generes
  return (
    <li>
      <p className="GeneresSlider-name">{name}</p>
    </li>
  )
}

export default GeneresSlider
