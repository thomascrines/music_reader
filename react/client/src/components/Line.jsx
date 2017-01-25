import React from 'react';

class Line extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
   
    return(
        <div id='line' className='lines'>
          <img src={props.imagePath}/>
        </div>
    )
  }
}

export default Card;