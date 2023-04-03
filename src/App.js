import {Switch, Route, Redirect} from 'react-router-dom'
import LoginSlider from './components/LoginSlide'
import HomeSlider from './components/HomeSlide'
import PopularSlider from './components/PopularSlide'
import ProtectedRoute from './components/ProtuctedSlide'
import SearchRoute from './components/SearchSlide'
import AccountSlider from './components/AccountSlide'
import NotFoundSlide from './components/NotFoundSlide'
import MovieSlider from './components/MoviesSlide'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginSlider} />
    <ProtectedRoute exact path="/" component={HomeSlider} />
    <ProtectedRoute exact path="/popular" component={PopularSlider} />
    <ProtectedRoute exact path="/movies/:id" component={MovieSlider} />
    <ProtectedRoute exact path="/account" component={AccountSlider} />
    <ProtectedRoute exact path="/search" component={SearchRoute} />
    <Route path="/not-found" component={NotFoundSlide} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
