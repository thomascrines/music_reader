const React = require('react')

const Viewer = (props) => {
  const songPath = props.params.songPath
  const imageCount = props.params.imageCount

  const image1 = './images/' + songPath + '/001.png'
  const imageUrls = []
  // for ()

  return (
    <div>I am Viewer
      <img src={image1} />
    </div>
  )
}

module.exports = Viewer
