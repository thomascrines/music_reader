import React from 'react';
import Line from './Line.jsx';

class AllLines extends React.Component {

  render(){
    const lines = this.props.images;
    const allLines = lines.map((line, index) => {
      return (
        <Line characteristics={line} key={index} index={index}></Line>
      )
    })

    return (
      <div>
        {allLines}
      </div>
    )
  }

};

export default AllLines;
