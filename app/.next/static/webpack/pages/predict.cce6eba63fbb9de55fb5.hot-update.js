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
      // console.log
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJlZGljdC5qcyJdLCJuYW1lcyI6WyJTdG9jayIsInByb3BzIiwiQkFTRV9VUkwiLCJ0ZXN0X2RhdGEiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwidXYiLCJwdiIsImFtdCIsInJlbmRlckxpbmVDaGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFDbkMsTUFBTUMsUUFBUSw0Q0FBZDtBQUNBLE1BQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUNBQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsb0RBQUEsQ0FDT0gsUUFEUCxFQUVHSSxJQUZILENBRVEsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCO0FBQ0FKLGVBQVMsR0FBR0ksUUFBUSxDQUFDQyxJQUFyQjtBQUNELEtBTEgsV0FNUyxVQUFDQyxLQUFEO0FBQUEsYUFBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBWDtBQUFBLEtBTlQ7QUFPRCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBU0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUixTQUFaO0FBQ0EsTUFBTUssSUFBSSxHQUFHLENBQ1g7QUFBRUksUUFBSSxFQUFFLFFBQVI7QUFBa0JDLE1BQUUsRUFBRSxHQUF0QjtBQUEyQkMsTUFBRSxFQUFFLElBQS9CO0FBQXFDQyxPQUFHLEVBQUU7QUFBMUMsR0FEVyxFQUVYO0FBQUVILFFBQUksRUFBRSxRQUFSO0FBQWtCQyxNQUFFLEVBQUUsR0FBdEI7QUFBMkJDLE1BQUUsRUFBRSxHQUEvQjtBQUFvQ0MsT0FBRyxFQUFFO0FBQXpDLEdBRlcsRUFHWDtBQUFFSCxRQUFJLEVBQUUsUUFBUjtBQUFrQkMsTUFBRSxFQUFFLEdBQXRCO0FBQTJCQyxNQUFFLEVBQUUsSUFBL0I7QUFBcUNDLE9BQUcsRUFBRTtBQUExQyxHQUhXLENBQWI7O0FBTUEsTUFBTUMsZUFBZSxnQkFDbkIsOERBQUMsK0NBQUQ7QUFBVyxTQUFLLEVBQUUsR0FBbEI7QUFBdUIsVUFBTSxFQUFFLEdBQS9CO0FBQW9DLFFBQUksRUFBRVIsSUFBMUM7QUFBQSwyQkFDRSw4REFBQywwQ0FBRDtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQXNCLGFBQU8sRUFBQyxJQUE5QjtBQUFtQyxZQUFNLEVBQUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjs7QUFLQSxzQkFDRTtBQUFBLGVBQ0dRLGVBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7R0E5QnVCaEIsSzs7S0FBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcmVkaWN0LmNjZTZlYmE2M2ZiYjlkZTU1ZmI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5lQ2hhcnQsIExpbmUgfSBmcm9tIFwicmVjaGFydHNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdG9jayhwcm9wcykge1xuICBjb25zdCBCQVNFX1VSTCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDEvVGltZS1TZXJpZXMtRGFpbHlgO1xuICBsZXQgdGVzdF9kYXRhID0gW107XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoQkFTRV9VUkwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2dcbiAgICAgICAgdGVzdF9kYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9LCBbXSk7XG4gIGNvbnNvbGUubG9nKHRlc3RfZGF0YSk7XG4gIGNvbnN0IGRhdGEgPSBbXG4gICAgeyBuYW1lOiBcIlBhZ2UgQVwiLCB1djogNDAwLCBwdjogMjQwMCwgYW10OiAyNDAwIH0sXG4gICAgeyBuYW1lOiBcIlBhZ2UgQlwiLCB1djogNTAwLCBwdjogMTIyLCBhbXQ6IDI0MDAgfSxcbiAgICB7IG5hbWU6IFwiUGFnZSBDXCIsIHV2OiA2MDAsIHB2OiAzMDAwLCBhbXQ6IDI0MDAgfSxcbiAgXTtcblxuICBjb25zdCByZW5kZXJMaW5lQ2hhcnQgPSAoXG4gICAgPExpbmVDaGFydCB3aWR0aD17NDAwfSBoZWlnaHQ9ezQwMH0gZGF0YT17ZGF0YX0+XG4gICAgICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwidXZcIiBzdHJva2U9XCIjODg4NGQ4XCIgLz5cbiAgICA8L0xpbmVDaGFydD5cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3JlbmRlckxpbmVDaGFydH1cbiAgICAgIEh3bGxvXG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9