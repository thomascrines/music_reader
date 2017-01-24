const React = require('react')

const Viewer = (props) => {
  const songPath = props.params.songPath
  const imageCount = props.params.imageCount
  const image1 = './images/' + songPath + '/001.png'
  const imageUrls = []
  console.log(imageCount)
  console.log(props.params.songPath)
  // write a for loop to collect all images

  return (
    <div>
      <img src={image1} />
    </div>
  )
}

module.exports = Viewer
