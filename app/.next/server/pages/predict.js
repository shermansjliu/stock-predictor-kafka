(function() {
var exports = {};
exports.id = "pages/predict";
exports.ids = ["pages/predict"];
exports.modules = {

/***/ "./pages/predict.js":
/*!**************************!*\
  !*** ./pages/predict.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Stock; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/root/projects/stock_predictor/app/pages/predict.js";




function Stock(props) {
  const {
    0: stock_data,
    1: setStockData
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const BASE_URL = `http://localhost:3001/Time-Series-Daily`;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_3___default().get(BASE_URL).then(response => {
      setStockData(response.data);
    }).catch(error => console.log(error));
  }, []); // stock_data

  console.log();
  const data = Object.entries(stock_data).map(el => {
    const date = el[[0]];
    const adjusted_close = el[1]["5. adjusted close"];
    return {
      date,
      adjusted_close
    };
  });
  console.log(data);
  const test_data = [{
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

  const renderLineChart = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.LineChart, {
    width: 800,
    height: 400,
    data: data,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.XAxis, {
      dataKey: "date"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.YAxis, {
      dateKey: "adjusted_close"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Line, {
      type: "monotone",
      dataKey: "adjusted_close",
      stroke: "#8884d8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [renderLineChart, "Hwllo"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("recharts");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/predict.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9wcmVkaWN0LmpzIiwid2VicGFjazovL2FwcC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vYXBwL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9hcHAvZXh0ZXJuYWwgXCJyZWNoYXJ0c1wiIl0sIm5hbWVzIjpbIlN0b2NrIiwicHJvcHMiLCJzdG9ja19kYXRhIiwic2V0U3RvY2tEYXRhIiwidXNlU3RhdGUiLCJCQVNFX1VSTCIsInVzZUVmZmVjdCIsImF4aW9zIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImVsIiwiZGF0ZSIsImFkanVzdGVkX2Nsb3NlIiwidGVzdF9kYXRhIiwibmFtZSIsInV2IiwicHYiLCJhbXQiLCJyZW5kZXJMaW5lQ2hhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDbkMsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQTZCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBM0M7QUFDQSxRQUFNQyxRQUFRLEdBQUkseUNBQWxCO0FBQ0FDLGtEQUFTLENBQUMsTUFBTTtBQUNkQyxvREFBQSxDQUNPRixRQURQLEVBRUdHLElBRkgsQ0FFU0MsUUFBRCxJQUFjO0FBQ2xCTixrQkFBWSxDQUFDTSxRQUFRLENBQUNDLElBQVYsQ0FBWjtBQUNELEtBSkgsRUFLR0MsS0FMSCxDQUtVQyxLQUFELElBQVdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLENBTHBCO0FBTUQsR0FQUSxFQU9OLEVBUE0sQ0FBVCxDQUhtQyxDQVduQzs7QUFDQUMsU0FBTyxDQUFDQyxHQUFSO0FBRUEsUUFBTUosSUFBSSxHQUFHSyxNQUFNLENBQUNDLE9BQVAsQ0FBZWQsVUFBZixFQUEyQmUsR0FBM0IsQ0FBZ0NDLEVBQUQsSUFBUTtBQUNsRCxVQUFNQyxJQUFJLEdBQUdELEVBQUUsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFmO0FBQ0EsVUFBTUUsY0FBYyxHQUFHRixFQUFFLENBQUMsQ0FBRCxDQUFGLENBQU0sbUJBQU4sQ0FBdkI7QUFDQSxXQUFPO0FBQ0xDLFVBREs7QUFFTEM7QUFGSyxLQUFQO0FBSUQsR0FQWSxDQUFiO0FBUUFQLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0FBQ0EsUUFBTVcsU0FBUyxHQUFHLENBQ2hCO0FBQUVDLFFBQUksRUFBRSxRQUFSO0FBQWtCQyxNQUFFLEVBQUUsR0FBdEI7QUFBMkJDLE1BQUUsRUFBRSxJQUEvQjtBQUFxQ0MsT0FBRyxFQUFFO0FBQTFDLEdBRGdCLEVBRWhCO0FBQUVILFFBQUksRUFBRSxRQUFSO0FBQWtCQyxNQUFFLEVBQUUsR0FBdEI7QUFBMkJDLE1BQUUsRUFBRSxHQUEvQjtBQUFvQ0MsT0FBRyxFQUFFO0FBQXpDLEdBRmdCLEVBR2hCO0FBQUVILFFBQUksRUFBRSxRQUFSO0FBQWtCQyxNQUFFLEVBQUUsR0FBdEI7QUFBMkJDLE1BQUUsRUFBRSxJQUEvQjtBQUFxQ0MsT0FBRyxFQUFFO0FBQTFDLEdBSGdCLENBQWxCOztBQUtBLFFBQU1DLGVBQWUsZ0JBQ25CLDhEQUFDLCtDQUFEO0FBQVcsU0FBSyxFQUFFLEdBQWxCO0FBQXVCLFVBQU0sRUFBRSxHQUEvQjtBQUFvQyxRQUFJLEVBQUVoQixJQUExQztBQUFBLDRCQUNFLDhEQUFDLDJDQUFEO0FBQU8sYUFBTyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsMkNBQUQ7QUFBTyxhQUFPLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRSw4REFBQywwQ0FBRDtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQXNCLGFBQU8sRUFBQyxnQkFBOUI7QUFBK0MsWUFBTSxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjs7QUFPQSxzQkFDRTtBQUFBLGVBQ0dnQixlQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQsQzs7Ozs7Ozs7Ozs7QUM5Q0QsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoicGFnZXMvcHJlZGljdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmVDaGFydCwgTGluZSwgWEF4aXMsIFlBeGlzIH0gZnJvbSBcInJlY2hhcnRzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RvY2socHJvcHMpIHtcbiAgY29uc3QgW3N0b2NrX2RhdGEsIHNldFN0b2NrRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IEJBU0VfVVJMID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9UaW1lLVNlcmllcy1EYWlseWA7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoQkFTRV9VUkwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgc2V0U3RvY2tEYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH0sIFtdKTtcbiAgLy8gc3RvY2tfZGF0YVxuICBjb25zb2xlLmxvZygpO1xuXG4gIGNvbnN0IGRhdGEgPSBPYmplY3QuZW50cmllcyhzdG9ja19kYXRhKS5tYXAoKGVsKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IGVsW1swXV07XG4gICAgY29uc3QgYWRqdXN0ZWRfY2xvc2UgPSBlbFsxXVtcIjUuIGFkanVzdGVkIGNsb3NlXCJdO1xuICAgIHJldHVybiB7XG4gICAgICBkYXRlLFxuICAgICAgYWRqdXN0ZWRfY2xvc2UsXG4gICAgfTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBjb25zdCB0ZXN0X2RhdGEgPSBbXG4gICAgeyBuYW1lOiBcIlBhZ2UgQVwiLCB1djogNDAwLCBwdjogMjQwMCwgYW10OiAyNDAwIH0sXG4gICAgeyBuYW1lOiBcIlBhZ2UgQlwiLCB1djogNTAwLCBwdjogMTIyLCBhbXQ6IDI0MDAgfSxcbiAgICB7IG5hbWU6IFwiUGFnZSBDXCIsIHV2OiA2MDAsIHB2OiAzMDAwLCBhbXQ6IDI0MDAgfSxcbiAgXTtcbiAgY29uc3QgcmVuZGVyTGluZUNoYXJ0ID0gKFxuICAgIDxMaW5lQ2hhcnQgd2lkdGg9ezgwMH0gaGVpZ2h0PXs0MDB9IGRhdGE9e2RhdGF9PlxuICAgICAgPFhBeGlzIGRhdGFLZXk9XCJkYXRlXCIgLz5cbiAgICAgIDxZQXhpcyBkYXRlS2V5PVwiYWRqdXN0ZWRfY2xvc2VcIiAvPlxuICAgICAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cImFkanVzdGVkX2Nsb3NlXCIgc3Ryb2tlPVwiIzg4ODRkOFwiIC8+XG4gICAgPC9MaW5lQ2hhcnQ+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtyZW5kZXJMaW5lQ2hhcnR9XG4gICAgICBId2xsb1xuICAgIDwvZGl2PlxuICApO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVjaGFydHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=