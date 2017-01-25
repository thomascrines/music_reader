const React = require('react')

const Viewer = (props) => {
  const songPath = props.params.songPath
  const imageCount = props.params.imageCount
  const image1 = './images/' + songPath + '/001.png'
  const imageUrls = []
  

  let i = 0;
  while (i < imageCount) {
    i++;
    const line = './images/' + songPath + '/00' + i + '.png';
    imageUrls.push(line);
    console.log(line);
  }



  return (
    <div>
    <img src={image1} />
    </div>
    )
}

module.exports = Viewer