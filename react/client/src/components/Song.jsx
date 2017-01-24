const React = require('react')
const Router = require('react-router')
const { Link, browserHistory } = Router


const Song = (props) => (
  <div className='song'>
    <div className='song-details'>
    <Link to={'/songs/' + props.imagePath + '/' + props.imageCount}>
      <h3 className='song-title'>{props.title} by {props.composer} ({props.date})</h3>
      </Link>
    </div>
  </div>
)

const { string } = React.PropTypes

Song.propTypes = {
  title: string.isRequired,
  composer: string.isRequired,
  date: string.isRequired,
  imagePath: string.isRequired,
  imageCount: string.isRequired
}


module.exports = Song