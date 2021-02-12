import React from "react";

class CustomParagraphImage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.someData}</h2>
        <h3>{this.props.content}</h3>
        <img src="https://via.placeholder.com/150" alt="Image"/>
      </div>
    );
  }
}

export default CustomParagraphImage;
