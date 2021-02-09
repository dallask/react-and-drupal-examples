import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root';

/* Import Components */
import DrupalProjectStats from './components/DrupalProjectStats';
import NodeListOnly from "./components/NodeListOnly";
import NodeReadWrite from "./components/NodeReadWrite";
import CustomParagraph from "./components/CustomParagraph";
import CustomParagraphNew from "./components/CustomParagraphNew";

const Main = hot(() => (
  <>
    {
      //<DrupalProjectStats projectName="drupal" />
    }
    {
      //<NodeListOnly />
    }
    {
      <NodeReadWrite/>
    }
  </>
));

ReactDOM.render(<Main/>, document.getElementById('react-app'));
ReactDOM.render(<CustomParagraph/>, document.getElementById('react-custom-paragraph'));
ReactDOM.render(<CustomParagraphNew/>, document.getElementById('react-custom-paragraph-new'));
