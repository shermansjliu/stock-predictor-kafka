self["webpackHotUpdate_N_E"]("pages/predict",{

/***/ "./pages/predict.js":
/*!**************************!*\
  !*** ./pages/predict.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Stock; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/root/projects/stock_predictor/app/pages/predict.js",
    _s = $RefreshSig$();




function Stock(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      stock_data = _useState[0],
      setStockData = _useState[1];

  var BASE_URL = "http://localhost:3001/Time-Series-Daily";
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_2___default().get(BASE_URL).then(function (response) {
      setStockData(response.data);
    })["catch"](function (error) {
      return console.log(error);
    });
  }, []); // stock_data

  console.log();
  var data = Object.entries(stock_data).map(function (el) {
    var date = el[[0]];
    var info = el[1];
    return {
      data: data
    };
  });
  var test_data = [{
    name: "Page A",
    uv: 400,
    pv: 2400,
    amt: 2400
  }, {
    name: "Page B",
    uv: 500,
    pv: 122,
    amt: 2400
  }, {
    name: "Page C",
    uv: 600,
    pv: 3000,
    amt: 2400
  }];

  var renderLineChart = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.LineChart, {
    width: 400,
    height: 400,
    data: test_data
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [renderLineChart, "Hwllo"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

_s(Stock, "SoZawirJysrSpjSkGfFoJYhv8Sg=");

_c = Stock;

var _c;

$RefreshReg$(_c, "Stock");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJlZGljdC5qcyJdLCJuYW1lcyI6WyJTdG9jayIsInByb3BzIiwidXNlU3RhdGUiLCJzdG9ja19kYXRhIiwic2V0U3RvY2tEYXRhIiwiQkFTRV9VUkwiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiZWwiLCJkYXRlIiwiaW5mbyIsInRlc3RfZGF0YSIsIm5hbWUiLCJ1diIsInB2IiwiYW10IiwicmVuZGVyTGluZUNoYXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBLGtCQUNBQywrQ0FBUSxDQUFDLEVBQUQsQ0FEUjtBQUFBLE1BQzVCQyxVQUQ0QjtBQUFBLE1BQ2hCQyxZQURnQjs7QUFFbkMsTUFBTUMsUUFBUSw0Q0FBZDtBQUNBQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsb0RBQUEsQ0FDT0YsUUFEUCxFQUVHRyxJQUZILENBRVEsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCTCxrQkFBWSxDQUFDSyxRQUFRLENBQUNDLElBQVYsQ0FBWjtBQUNELEtBSkgsV0FLUyxVQUFDQyxLQUFEO0FBQUEsYUFBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBWDtBQUFBLEtBTFQ7QUFNRCxHQVBRLEVBT04sRUFQTSxDQUFULENBSG1DLENBV25DOztBQUNBQyxTQUFPLENBQUNDLEdBQVI7QUFFQSxNQUFNSCxJQUFJLEdBQUdJLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlWixVQUFmLEVBQTJCYSxHQUEzQixDQUErQixVQUFDQyxFQUFELEVBQVE7QUFDbEQsUUFBTUMsSUFBSSxHQUFHRCxFQUFFLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBZjtBQUNBLFFBQU1FLElBQUksR0FBR0YsRUFBRSxDQUFDLENBQUQsQ0FBZjtBQUNBLFdBQU87QUFDTFAsVUFBSSxFQUFKQTtBQURLLEtBQVA7QUFHRCxHQU5ZLENBQWI7QUFRQSxNQUFNVSxTQUFTLEdBQUcsQ0FDaEI7QUFBRUMsUUFBSSxFQUFFLFFBQVI7QUFBa0JDLE1BQUUsRUFBRSxHQUF0QjtBQUEyQkMsTUFBRSxFQUFFLElBQS9CO0FBQXFDQyxPQUFHLEVBQUU7QUFBMUMsR0FEZ0IsRUFFaEI7QUFBRUgsUUFBSSxFQUFFLFFBQVI7QUFBa0JDLE1BQUUsRUFBRSxHQUF0QjtBQUEyQkMsTUFBRSxFQUFFLEdBQS9CO0FBQW9DQyxPQUFHLEVBQUU7QUFBekMsR0FGZ0IsRUFHaEI7QUFBRUgsUUFBSSxFQUFFLFFBQVI7QUFBa0JDLE1BQUUsRUFBRSxHQUF0QjtBQUEyQkMsTUFBRSxFQUFFLElBQS9CO0FBQXFDQyxPQUFHLEVBQUU7QUFBMUMsR0FIZ0IsQ0FBbEI7O0FBS0EsTUFBTUMsZUFBZSxnQkFDbkIsOERBQUMsK0NBQUQ7QUFBVyxTQUFLLEVBQUUsR0FBbEI7QUFBdUIsVUFBTSxFQUFFLEdBQS9CO0FBQW9DLFFBQUksRUFBRUw7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGOztBQUtBLHNCQUNFO0FBQUEsZUFDR0ssZUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztHQXRDdUJ6QixLOztLQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ByZWRpY3QuNmY5ZDM3YzBiODZkY2EzMDk1ZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmVDaGFydCwgTGluZSB9IGZyb20gXCJyZWNoYXJ0c1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdG9jayhwcm9wcykge1xuICBjb25zdCBbc3RvY2tfZGF0YSwgc2V0U3RvY2tEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgQkFTRV9VUkwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAxL1RpbWUtU2VyaWVzLURhaWx5YDtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChCQVNFX1VSTClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBzZXRTdG9ja0RhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgfSwgW10pO1xuICAvLyBzdG9ja19kYXRhXG4gIGNvbnNvbGUubG9nKCk7XG5cbiAgY29uc3QgZGF0YSA9IE9iamVjdC5lbnRyaWVzKHN0b2NrX2RhdGEpLm1hcCgoZWwpID0+IHtcbiAgICBjb25zdCBkYXRlID0gZWxbWzBdXTtcbiAgICBjb25zdCBpbmZvID0gZWxbMV07XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGEsXG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3QgdGVzdF9kYXRhID0gW1xuICAgIHsgbmFtZTogXCJQYWdlIEFcIiwgdXY6IDQwMCwgcHY6IDI0MDAsIGFtdDogMjQwMCB9LFxuICAgIHsgbmFtZTogXCJQYWdlIEJcIiwgdXY6IDUwMCwgcHY6IDEyMiwgYW10OiAyNDAwIH0sXG4gICAgeyBuYW1lOiBcIlBhZ2UgQ1wiLCB1djogNjAwLCBwdjogMzAwMCwgYW10OiAyNDAwIH0sXG4gIF07XG4gIGNvbnN0IHJlbmRlckxpbmVDaGFydCA9IChcbiAgICA8TGluZUNoYXJ0IHdpZHRoPXs0MDB9IGhlaWdodD17NDAwfSBkYXRhPXt0ZXN0X2RhdGF9PlxuICAgICAgey8qIDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJ1dlwiIHN0cm9rZT1cIiM4ODg0ZDhcIiAvPiAqL31cbiAgICA8L0xpbmVDaGFydD5cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3JlbmRlckxpbmVDaGFydH1cbiAgICAgIEh3bGxvXG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9