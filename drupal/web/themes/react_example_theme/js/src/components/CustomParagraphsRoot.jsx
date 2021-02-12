import React, { useEffect, useState } from "react";

class CustomParagraphsRoot extends React.Component {

  constructor(props) {
    super(props);
    this.state = { content: null };
    this.handleContent = this.handleContent.bind(this);
  }

  componentDidMount() {
    this.handleContent();
  }

  handleContent() {
    this.setState({
      content: 'test content'
    });
  }

  render() {
    return (
      <div className='root-paragraphs-wrapper'>
        <React.Fragment content={this.state.content}>
          {this.state.content}
          {this.props.someData}
          {this.props.children}
        </React.Fragment>
      </div>
    );
  }
}

export default CustomParagraphsRoot;
