import {Component} from 'react'

import HeaderSlider from '../HeaderSlide'

import TrendingSlider from '../TrendingSlide'

import OriginalSlider from '../OriginalSlide'

import './index.css'

class HomeSlider extends Component {
  render() {
    return (
      <>
        <div className="Header-home-slider">
          <HeaderSlider />
        </div>
        <div className="Home-slider-container">
          <img
            src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679676916/Image_ghxnzr.png"
            className="HomeSlider-SuperMan-image"
            alt="superMan"
          />
          <div className="Home-slider-superman-container">
            <h1 className="Home-Slider-SuperMan">Super Man</h1>
            <p className="Home-slider-Dc-Comic">
              Superman is a fictional superhero who first appeared in american
              comic book published by DC Comic
            </p>
            <button className="Home-slider-button" type="button">
              Play
            </button>
          </div>
        </div>
        <div className="Home-Slider-container-Route">
          <h1 className="Home-Slider-Trending-heading">Trending</h1>
          <div>
            <TrendingSlider />
          </div>
          <div className="Home-slide-header">
            <h1 className="Home-slider-Original-heading"> Originals</h1>
            <OriginalSlider />
          </div>
        </div>
      </>
    )
  }
}
export default HomeSlider
