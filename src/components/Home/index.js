// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-container">
          <div className="cloth-details">
            <h1 className="heading">Clothes That Get You Noticed</h1>
            <img
              className="cloth-image-sm"
              alt="clothes that get you noticed"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
            />
            <p className="paragraph">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button className="shop-now" type="button">
              Shop Now
            </button>
          </div>
          <img
            className="cloth-image-lg"
            alt="clothes that get you noticed"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
          />
        </div>
      </div>
    )
  }
}
export default Home
