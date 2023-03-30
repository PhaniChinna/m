import {Switch, Route} from 'react-router-dom'
import LoginSlider from './components/LoginSlide'
import HomeSlider from './components/HomeSlide'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginSlider} />
    <Route exact path="/" component={HomeSlider} />
  </Switch>
)

export default App
