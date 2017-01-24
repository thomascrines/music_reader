const React = require('react')

const Song = (props) => (
  <div className='song'>
    <div className='song-details'>
      <h3 className='song-title'>{props.title} by {props.composer} ({props.date})</h3>
    </div>
  </div>
)

const { string, number } = React.PropTypes

Song.propTypes = {
  title: string.isRequired,
  composer: string.isRequired,
  date: string.isRequired,
  image: string.isRequired
}


module.exports = Song