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

  console.log(stock_data.entries);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJlZGljdC5qcyJdLCJuYW1lcyI6WyJTdG9jayIsInByb3BzIiwidXNlU3RhdGUiLCJzdG9ja19kYXRhIiwic2V0U3RvY2tEYXRhIiwiQkFTRV9VUkwiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJlbnRyaWVzIiwidGVzdF9kYXRhIiwibmFtZSIsInV2IiwicHYiLCJhbXQiLCJyZW5kZXJMaW5lQ2hhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUEsa0JBQ0FDLCtDQUFRLENBQUMsRUFBRCxDQURSO0FBQUEsTUFDNUJDLFVBRDRCO0FBQUEsTUFDaEJDLFlBRGdCOztBQUVuQyxNQUFNQyxRQUFRLDRDQUFkO0FBQ0FDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxvREFBQSxDQUNPRixRQURQLEVBRUdHLElBRkgsQ0FFUSxVQUFDQyxRQUFELEVBQWM7QUFDbEJMLGtCQUFZLENBQUNLLFFBQVEsQ0FBQ0MsSUFBVixDQUFaO0FBQ0QsS0FKSCxXQUtTLFVBQUNDLEtBQUQ7QUFBQSxhQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFYO0FBQUEsS0FMVDtBQU1ELEdBUFEsRUFPTixFQVBNLENBQVQsQ0FIbUMsQ0FXbkM7O0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVixVQUFVLENBQUNXLE9BQXZCO0FBRUEsTUFBTUMsU0FBUyxHQUFHLENBQ2hCO0FBQUVDLFFBQUksRUFBRSxRQUFSO0FBQWtCQyxNQUFFLEVBQUUsR0FBdEI7QUFBMkJDLE1BQUUsRUFBRSxJQUEvQjtBQUFxQ0MsT0FBRyxFQUFFO0FBQTFDLEdBRGdCLEVBRWhCO0FBQUVILFFBQUksRUFBRSxRQUFSO0FBQWtCQyxNQUFFLEVBQUUsR0FBdEI7QUFBMkJDLE1BQUUsRUFBRSxHQUEvQjtBQUFvQ0MsT0FBRyxFQUFFO0FBQXpDLEdBRmdCLEVBR2hCO0FBQUVILFFBQUksRUFBRSxRQUFSO0FBQWtCQyxNQUFFLEVBQUUsR0FBdEI7QUFBMkJDLE1BQUUsRUFBRSxJQUEvQjtBQUFxQ0MsT0FBRyxFQUFFO0FBQTFDLEdBSGdCLENBQWxCOztBQUtBLE1BQU1DLGVBQWUsZ0JBQ25CLDhEQUFDLCtDQUFEO0FBQVcsU0FBSyxFQUFFLEdBQWxCO0FBQXVCLFVBQU0sRUFBRSxHQUEvQjtBQUFvQyxRQUFJLEVBQUVMO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjs7QUFLQSxzQkFDRTtBQUFBLGVBQ0dLLGVBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7R0E5QnVCcEIsSzs7S0FBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcmVkaWN0LmJjOTVkMzI5NzhmZWMxODIyMmI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5lQ2hhcnQsIExpbmUgfSBmcm9tIFwicmVjaGFydHNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RvY2socHJvcHMpIHtcbiAgY29uc3QgW3N0b2NrX2RhdGEsIHNldFN0b2NrRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IEJBU0VfVVJMID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9UaW1lLVNlcmllcy1EYWlseWA7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoQkFTRV9VUkwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgc2V0U3RvY2tEYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH0sIFtdKTtcbiAgLy8gc3RvY2tfZGF0YVxuICBjb25zb2xlLmxvZyhzdG9ja19kYXRhLmVudHJpZXMpO1xuXG4gIGNvbnN0IHRlc3RfZGF0YSA9IFtcbiAgICB7IG5hbWU6IFwiUGFnZSBBXCIsIHV2OiA0MDAsIHB2OiAyNDAwLCBhbXQ6IDI0MDAgfSxcbiAgICB7IG5hbWU6IFwiUGFnZSBCXCIsIHV2OiA1MDAsIHB2OiAxMjIsIGFtdDogMjQwMCB9LFxuICAgIHsgbmFtZTogXCJQYWdlIENcIiwgdXY6IDYwMCwgcHY6IDMwMDAsIGFtdDogMjQwMCB9LFxuICBdO1xuICBjb25zdCByZW5kZXJMaW5lQ2hhcnQgPSAoXG4gICAgPExpbmVDaGFydCB3aWR0aD17NDAwfSBoZWlnaHQ9ezQwMH0gZGF0YT17dGVzdF9kYXRhfT5cbiAgICAgIHsvKiA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwidXZcIiBzdHJva2U9XCIjODg4NGQ4XCIgLz4gKi99XG4gICAgPC9MaW5lQ2hhcnQ+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtyZW5kZXJMaW5lQ2hhcnR9XG4gICAgICBId2xsb1xuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==