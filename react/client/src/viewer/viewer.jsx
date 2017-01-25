const React = require('react')

const Viewer = (props) => {
  const songPath = props.params.songPath
  const imageCount = props.params.imageCount
  const image1 = './images/' + songPath + '/001.png';
  const imageUrls = []
  

  let i = 0;
  while (i < imageCount) {
    i++;
    if (i < 10){
      const line = './images/' + songPath + '/00' + i + '.png';
      imageUrls.push(line);
      console.log(line);
    } else {
      const line = './images/' + songPath + '/0' + i + '.png';
      imageUrls.push(line);
      console.log(line);
    }
  }

  const songList = imageUrls.map((image, index) => {
    return (
      <img src={image}/>
    )
  })

  return (
    <div>
      {songList}
    </div>
    )
}

module.exports = Viewer