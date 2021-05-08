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

  var BASE_URL = "http://localhost:3001/Time-Series-Daily";
  var test_data = [];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_2___default().get(BASE_URL).then(function (response) {
      console.log(response.data);
      test_data = response.data;
    })["catch"](function (error) {
      return console.log(error);
    });
  }, []);
  console.log(test_data);
  var data = [{
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
    data: data,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.Line, {
      type: "monotone",
      dataKey: "uv",
      stroke: "#8884d8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [renderLineChart, "Hwllo"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

_s(Stock, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJlZGljdC5qcyJdLCJuYW1lcyI6WyJTdG9jayIsInByb3BzIiwiQkFTRV9VUkwiLCJ0ZXN0X2RhdGEiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJuYW1lIiwidXYiLCJwdiIsImFtdCIsInJlbmRlckxpbmVDaGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFDbkMsTUFBTUMsUUFBUSw0Q0FBZDtBQUNBLE1BQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUNBQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsb0RBQUEsQ0FDT0gsUUFEUCxFQUVHSSxJQUZILENBRVEsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDRyxJQUFyQjtBQUNBUCxlQUFTLEdBQUdJLFFBQVEsQ0FBQ0csSUFBckI7QUFDRCxLQUxILFdBTVMsVUFBQ0MsS0FBRDtBQUFBLGFBQVdILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFaLENBQVg7QUFBQSxLQU5UO0FBT0QsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVNBSCxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sU0FBWjtBQUNBLE1BQU1PLElBQUksR0FBRyxDQUNYO0FBQUVFLFFBQUksRUFBRSxRQUFSO0FBQWtCQyxNQUFFLEVBQUUsR0FBdEI7QUFBMkJDLE1BQUUsRUFBRSxJQUEvQjtBQUFxQ0MsT0FBRyxFQUFFO0FBQTFDLEdBRFcsRUFFWDtBQUFFSCxRQUFJLEVBQUUsUUFBUjtBQUFrQkMsTUFBRSxFQUFFLEdBQXRCO0FBQTJCQyxNQUFFLEVBQUUsR0FBL0I7QUFBb0NDLE9BQUcsRUFBRTtBQUF6QyxHQUZXLEVBR1g7QUFBRUgsUUFBSSxFQUFFLFFBQVI7QUFBa0JDLE1BQUUsRUFBRSxHQUF0QjtBQUEyQkMsTUFBRSxFQUFFLElBQS9CO0FBQXFDQyxPQUFHLEVBQUU7QUFBMUMsR0FIVyxDQUFiOztBQU1BLE1BQU1DLGVBQWUsZ0JBQ25CLDhEQUFDLCtDQUFEO0FBQVcsU0FBSyxFQUFFLEdBQWxCO0FBQXVCLFVBQU0sRUFBRSxHQUEvQjtBQUFvQyxRQUFJLEVBQUVOLElBQTFDO0FBQUEsMkJBQ0UsOERBQUMsMENBQUQ7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUMsSUFBOUI7QUFBbUMsWUFBTSxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7O0FBS0Esc0JBQ0U7QUFBQSxlQUNHTSxlQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0dBOUJ1QmhCLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJlZGljdC4zNjhlNGFiMzBjNWNkZjIyMjk3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluZUNoYXJ0LCBMaW5lIH0gZnJvbSBcInJlY2hhcnRzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RvY2socHJvcHMpIHtcbiAgY29uc3QgQkFTRV9VUkwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAxL1RpbWUtU2VyaWVzLURhaWx5YDtcbiAgbGV0IHRlc3RfZGF0YSA9IFtdO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KEJBU0VfVVJMKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB0ZXN0X2RhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH0sIFtdKTtcbiAgY29uc29sZS5sb2codGVzdF9kYXRhKTtcbiAgY29uc3QgZGF0YSA9IFtcbiAgICB7IG5hbWU6IFwiUGFnZSBBXCIsIHV2OiA0MDAsIHB2OiAyNDAwLCBhbXQ6IDI0MDAgfSxcbiAgICB7IG5hbWU6IFwiUGFnZSBCXCIsIHV2OiA1MDAsIHB2OiAxMjIsIGFtdDogMjQwMCB9LFxuICAgIHsgbmFtZTogXCJQYWdlIENcIiwgdXY6IDYwMCwgcHY6IDMwMDAsIGFtdDogMjQwMCB9LFxuICBdO1xuXG4gIGNvbnN0IHJlbmRlckxpbmVDaGFydCA9IChcbiAgICA8TGluZUNoYXJ0IHdpZHRoPXs0MDB9IGhlaWdodD17NDAwfSBkYXRhPXtkYXRhfT5cbiAgICAgIDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJ1dlwiIHN0cm9rZT1cIiM4ODg0ZDhcIiAvPlxuICAgIDwvTGluZUNoYXJ0PlxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cmVuZGVyTGluZUNoYXJ0fVxuICAgICAgSHdsbG9cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=