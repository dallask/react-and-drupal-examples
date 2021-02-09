import React, { useEffect, useState } from "react";
import CustomParagraphGetData from './CustomParagraphGetData';

function isValidData(data) {
  if (data === null) {
    return false;
  }
  if (data.field_paragraph === undefined ||
    data.field_paragraph === null ||
    data.field_paragraph.length === 0 ) {
    return false;
  }
  return true;
}

const NodeItem = ({drupal_internal__nid, title, field_text}) => (
  <div>
    <div dangerouslySetInnerHTML={{ __html: field_text[0].processed }} />
  </div>
);

const NoData = () => (
  <div>No articles found.</div>
);

const CustomParagraphListNew = () => {
  const [content, setContent] = useState(false);

  const paragraphData = CustomParagraphGetData();
  if (isValidData(paragraphData)) {
    setContent(paragraphData.field_paragraph);
  }

  return (
    <div>
      <h2>Custom Paragraph List New</h2>
      {content ? (
        <>
          {
            content.filter((item) => {
               return item;
            }).map((item) => <NodeItem key={item.id} {...item}/>)
          }
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default CustomParagraphListNew;
