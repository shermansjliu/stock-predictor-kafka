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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      stock_data = _useState[0],
      setStockData = _useState[1];

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
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [renderLineChart, "Hwllo"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

_s(Stock, "achl29ehMEFVN0Aj+P5or2WL3Jw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJlZGljdC5qcyJdLCJuYW1lcyI6WyJTdG9jayIsInByb3BzIiwidXNlU3RhdGUiLCJzdG9ja19kYXRhIiwic2V0U3RvY2tEYXRhIiwiQkFTRV9VUkwiLCJ0ZXN0X2RhdGEiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJuYW1lIiwidXYiLCJwdiIsImFtdCIsInJlbmRlckxpbmVDaGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFBQSxrQkFDQUMsK0NBQVEsRUFEUjtBQUFBLE1BQzVCQyxVQUQ0QjtBQUFBLE1BQ2hCQyxZQURnQjs7QUFFbkMsTUFBTUMsUUFBUSw0Q0FBZDtBQUNBLE1BQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUNBQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsb0RBQUEsQ0FDT0gsUUFEUCxFQUVHSSxJQUZILENBRVEsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDRyxJQUFyQjtBQUNBUCxlQUFTLEdBQUdJLFFBQVEsQ0FBQ0csSUFBckI7QUFDRCxLQUxILFdBTVMsVUFBQ0MsS0FBRDtBQUFBLGFBQVdILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFaLENBQVg7QUFBQSxLQU5UO0FBT0QsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVVBLE1BQU1ELElBQUksR0FBRyxDQUNYO0FBQUVFLFFBQUksRUFBRSxRQUFSO0FBQWtCQyxNQUFFLEVBQUUsR0FBdEI7QUFBMkJDLE1BQUUsRUFBRSxJQUEvQjtBQUFxQ0MsT0FBRyxFQUFFO0FBQTFDLEdBRFcsRUFFWDtBQUFFSCxRQUFJLEVBQUUsUUFBUjtBQUFrQkMsTUFBRSxFQUFFLEdBQXRCO0FBQTJCQyxNQUFFLEVBQUUsR0FBL0I7QUFBb0NDLE9BQUcsRUFBRTtBQUF6QyxHQUZXLEVBR1g7QUFBRUgsUUFBSSxFQUFFLFFBQVI7QUFBa0JDLE1BQUUsRUFBRSxHQUF0QjtBQUEyQkMsTUFBRSxFQUFFLElBQS9CO0FBQXFDQyxPQUFHLEVBQUU7QUFBMUMsR0FIVyxDQUFiOztBQU1BLE1BQU1DLGVBQWUsZ0JBQ25CLDhEQUFDLCtDQUFEO0FBQVcsU0FBSyxFQUFFLEdBQWxCO0FBQXVCLFVBQU0sRUFBRSxHQUEvQjtBQUFvQyxRQUFJLEVBQUVOLElBQTFDO0FBQUEsMkJBQ0UsOERBQUMsMENBQUQ7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUMsSUFBOUI7QUFBbUMsWUFBTSxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7O0FBS0Esc0JBQ0U7QUFBQSxlQUNHTSxlQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0dBL0J1Qm5CLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJlZGljdC42MmFjMWQwNDUzNjBjOWU4Mzk4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluZUNoYXJ0LCBMaW5lIH0gZnJvbSBcInJlY2hhcnRzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0b2NrKHByb3BzKSB7XG4gIGNvbnN0IFtzdG9ja19kYXRhLCBzZXRTdG9ja0RhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgQkFTRV9VUkwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAxL1RpbWUtU2VyaWVzLURhaWx5YDtcbiAgbGV0IHRlc3RfZGF0YSA9IFtdO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KEJBU0VfVVJMKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB0ZXN0X2RhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBkYXRhID0gW1xuICAgIHsgbmFtZTogXCJQYWdlIEFcIiwgdXY6IDQwMCwgcHY6IDI0MDAsIGFtdDogMjQwMCB9LFxuICAgIHsgbmFtZTogXCJQYWdlIEJcIiwgdXY6IDUwMCwgcHY6IDEyMiwgYW10OiAyNDAwIH0sXG4gICAgeyBuYW1lOiBcIlBhZ2UgQ1wiLCB1djogNjAwLCBwdjogMzAwMCwgYW10OiAyNDAwIH0sXG4gIF07XG5cbiAgY29uc3QgcmVuZGVyTGluZUNoYXJ0ID0gKFxuICAgIDxMaW5lQ2hhcnQgd2lkdGg9ezQwMH0gaGVpZ2h0PXs0MDB9IGRhdGE9e2RhdGF9PlxuICAgICAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInV2XCIgc3Ryb2tlPVwiIzg4ODRkOFwiIC8+XG4gICAgPC9MaW5lQ2hhcnQ+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtyZW5kZXJMaW5lQ2hhcnR9XG4gICAgICBId2xsb1xuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==