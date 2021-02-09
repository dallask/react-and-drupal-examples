webpackHotUpdate("main",{

/***/ "./js/src/components/NodeReadWrite.jsx":
/*!*********************************************!*\
  !*** ./js/src/components/NodeReadWrite.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NodeAdd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeAdd */ "./js/src/components/NodeAdd.jsx");
/* harmony import */ var _NodeEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NodeEdit */ "./js/src/components/NodeEdit.jsx");
/* harmony import */ var _NodeDelete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NodeDelete */ "./js/src/components/NodeDelete.jsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





/**
 * Helper function to validate data retrieved from JSON:API.
 */

function isValidData(data) {
  if (data === null) {
    return false;
  }

  if (data.data === undefined || data.data === null || data.data.length === 0) {
    return false;
  }

  return true;
}
/**
 * Component for displaying an individual article, with optional admin features.
 *
 * @param {string} id
 *   UUID of the article.
 * @param drupal_internal__nid
 *   Drupal node.nid of the article.
 * @param {string} title
 *   Title of the article.
 * @param {string} body
 *   Body of the article, contains HTML.
 * @param {array} contentList
 *   Complete list of articles.
 * @param {function} updateContent
 *   useState function to update contentList.
 */


var NodeItem = function NodeItem(_ref) {
  var id = _ref.id,
      drupal_internal__nid = _ref.drupal_internal__nid,
      title = _ref.title,
      body = _ref.body,
      contentList = _ref.contentList,
      updateContent = _ref.updateContent;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showAdminOptions = _useState2[0],
      setShowAdminOptions = _useState2[1];

  function handleClick(event) {
    event.preventDefault();
    setShowAdminOptions(!showAdminOptions);
  }

  function onEditSuccess(data) {
    // Replace the edited item in the list with updated values.
    var idx = contentList.findIndex(function (item) {
      return item.id === data.id;
    });
    console.log('index', {
      idx: idx,
      data: data,
      content: contentList
    });
    contentList[idx] = data;
    updateContent(_toConsumableArray(contentList));
  }

  function onDeleteSuccess(id) {
    // Remove the deleted item from the list.
    var list = contentList.filter(function (item) {
      return item.id !== id;
    });
    updateContent(_toConsumableArray(list));
  } // Show the item with admin options.


  if (showAdminOptions) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), "Admin options for ", title, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NodeEdit__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: id,
      title: title,
      body: body.value,
      onSuccess: onEditSuccess
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: handleClick
    }, "cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NodeDelete__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: id,
      title: title,
      onSuccess: onDeleteSuccess
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null));
  } // Show just the item.


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/".concat(drupal_internal__nid)
  }, title), " -- ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: handleClick
  }, "edit"));
};
/**
 * Component to render when there are no articles to display.
 */


__signature__(NodeItem, "useState{[showAdminOptions, setShowAdminOptions](false)}");

var NoData = function NoData() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "No articles found.");
};
/**
 * Display a list of Drupal article nodes.
 *
 * Retrieves articles from Drupal's JSON:API and then displays them along with
 * admin features to create, update, and delete articles.
 */


var NodeReadWrite = function NodeReadWrite() {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      content = _useState4[0],
      updateContent = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      filter = _useState6[0],
      setFilter = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showNodeAdd = _useState8[0],
      setShowNodeAdd = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // This should point to your local Drupal instance. Alternatively, for React
    // applications embedded in a Drupal theme or module this could also be set
    // to a relative path.
    var API_ROOT = '/jsonapi/';
    var url = "".concat(API_ROOT, "node/article?_format=json_recursive&max_depth=3");
    var headers = new Headers({
      Accept: 'application/vnd.api+json'
    });
    fetch(url, {
      headers: headers
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (isValidData(data)) {
        // Initialize the list of content with data retrieved from Drupal.
        console.log(data);
        updateContent(data.data);
      }
    })["catch"](function (err) {
      return console.log('There was an error accessing the API', err);
    });
  }, []); // Handle updates to state when a node is added.

  function onNodeAddSuccess(data) {
    // Add the new item to the top of the list.
    content.unshift(data); // Note the use of [...content] here, this is because we're
    // computing new state based on previous state and need to use a
    // functional update. https://reactjs.org/docs/hooks-reference.html#functional-updates
    // [...content] syntax creates a new array with the values of
    // content, and updates the state to that new array.

    updateContent(_toConsumableArray(content));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Site content13--13-13"), content.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "filter"
  }, "Type to filter:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "filter",
    placeholder: "Start typing ...",
    onChange: function onChange(event) {
      return setFilter(event.target.value.toLowerCase());
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), // If there's a `filter` apply it to the list of nodes.
  content.filter(function (item) {
    if (!filter) {
      return item;
    }

    if (filter && (item.attributes.title.toLowerCase().includes(filter) || item.attributes.body.value.toLowerCase().includes(filter))) {
      return item;
    }
  }).map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NodeItem, _extends({
      key: item.id,
      id: item.id,
      updateContent: updateContent,
      contentList: content
    }, item.attributes));
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoData, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), showNodeAdd ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Add a new article"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NodeAdd__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onSuccess: onNodeAddSuccess
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Don't see what you're looking for?", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setShowNodeAdd(true);
    }
  }, "Add a node")));
};

__signature__(NodeReadWrite, "useState{[content, updateContent]([])}\nuseState{[filter, setFilter](null)}\nuseState{[showNodeAdd, setShowNodeAdd](false)}\nuseEffect{}");

var _default = NodeReadWrite;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(isValidData, "isValidData", "/Users/ievgenky/Documents/00_projects/otsuka/otsk-docksal/themes/react-and-drupal-examples/drupal/web/themes/react_example_theme/js/src/components/NodeReadWrite.jsx");
  reactHotLoader.register(NodeItem, "NodeItem", "/Users/ievgenky/Documents/00_projects/otsuka/otsk-docksal/themes/react-and-drupal-examples/drupal/web/themes/react_example_theme/js/src/components/NodeReadWrite.jsx");
  reactHotLoader.register(NoData, "NoData", "/Users/ievgenky/Documents/00_projects/otsuka/otsk-docksal/themes/react-and-drupal-examples/drupal/web/themes/react_example_theme/js/src/components/NodeReadWrite.jsx");
  reactHotLoader.register(NodeReadWrite, "NodeReadWrite", "/Users/ievgenky/Documents/00_projects/otsuka/otsk-docksal/themes/react-and-drupal-examples/drupal/web/themes/react_example_theme/js/src/components/NodeReadWrite.jsx");
  reactHotLoader.register(_default, "default", "/Users/ievgenky/Documents/00_projects/otsuka/otsk-docksal/themes/react-and-drupal-examples/drupal/web/themes/react_example_theme/js/src/components/NodeReadWrite.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.e28ef19de09f2eb5a87c.hot-update.js.map