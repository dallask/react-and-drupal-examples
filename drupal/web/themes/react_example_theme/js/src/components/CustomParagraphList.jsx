import React, { useEffect, useState } from "react";

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

const CustomParagraphList = () => {
  const [content, setContent] = useState(false);

  useEffect(() => {
    // This should point to your local Drupal instance. Alternatively, for React
    // applications embedded in a Drupal theme or module this could also be set
    // to a relative path.
    const API_ROOT = '/node/';
    const url = `${API_ROOT}51?_format=json_recursive&max_depth=3`;

    const headers = new Headers({
      Accept: 'application/vnd.api+json',
    });

    fetch(url, {headers})
      .then((response) => response.json())
      .then((data) => {
        if (isValidData(data)) {
          setContent(data.field_paragraph);
          window.customNode = data;
        }
      })
      .catch(err => console.log('There was an error accessing the API', err));
  }, []);

  return (
    <div>
      <h2>Custom Paragraph List</h2>
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

export default CustomParagraphList;
