import React from "react";
import CustomParagraphsRoot from "./CustomParagraphsRoot";
import CustomParagraphImage from "./CustomParagraphImage";

class CustomParagraphsApp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const someData = 'Welcome to React';
    return (
      <CustomParagraphsRoot someData={someData} content={this.props.content}>
        <CustomParagraphImage someData={someData}  content={this.props.content}/>
      </CustomParagraphsRoot>
    );
  }
}
export default CustomParagraphsApp;
