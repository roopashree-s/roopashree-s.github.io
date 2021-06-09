(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+ohx":
    /*!*******************************************************************************!*\
      !*** ./src/app/shared-module/calculator/eligibility-calculator.component.css ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function ohx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\r\n  font-family: Lato;\r\n}\r\n\r\n.title {\r\n  background-color: #e8ebf3;\r\n  margin-left: -16px;\r\n  margin-right: -16px;\r\n  margin-top: -16px !important;\r\n  border-top-left-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n  padding: 16px;\r\n  text-align: center;\r\n  font-weight: normal;\r\n}\r\n\r\n.full-wdith {\r\n  width: 100%;\r\n}\r\n\r\n.eligibility {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.label-value {\r\n  font-size: 25px;\r\n}\r\n\r\n.mat-card {\r\n  width: 400px;\r\n}\r\n\r\n.final-amount {\r\n  width: 180px;\r\n  height: 400px;\r\n  background-color: #639;\r\n  margin-left: 5px;\r\n  border-bottom-right-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.final-amount .label-value {\r\n  color: white;\r\n}\r\n\r\n.final-amount > div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 25px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.final-amount button {\r\n  width: 160px;\r\n  height: 48px;\r\n  padding: 16px;\r\n  color: #639;\r\n  border-radius: 24px;\r\n}\r\n\r\n.form-input-container {\r\n  margin-top: 20px !important;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsaWdpYmlsaXR5LWNhbGN1bGF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImVsaWdpYmlsaXR5LWNhbGN1bGF0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGViZjM7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbiAgbWFyZ2luLXRvcDogLTE2cHggIWltcG9ydGFudDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uZnVsbC13ZGl0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5lbGlnaWJpbGl0eSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sYWJlbC12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG59XHJcbi5maW5hbC1hbW91bnQge1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2Mzk7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5maW5hbC1hbW91bnQgLmxhYmVsLXZhbHVlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5maW5hbC1hbW91bnQgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDI1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZpbmFsLWFtb3VudCBidXR0b24ge1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBjb2xvcjogIzYzOTtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG59XHJcbi5mb3JtLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Mainsoft_pc\Desktop\roopa\angular\open\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "8csY":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-module/tile/tile.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function csY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"info-rect ng-star-inserted\"><img  loading=\"lazy\"\r\n    [src]=\"image\">\r\n  <div  class=\"rec-content\">\r\n    <h4  class=\"feat-rect-title\">{{header}}</h4>\r\n    <div  class=\"feat-rect-content\">{{description}}</div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "Gd4t");
      /* harmony import */


      var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.css */
      "RV7M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var HomeComponent = function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      };

      HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeComponent);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufSJdfQ== */";
      /***/
    },

    /***/
    "DN7M":
    /*!*********************************************!*\
      !*** ./src/app/header/header.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function DN7M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header {\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  position: fixed;\r\n  z-index: 99;\r\n}\r\n\r\n.scroll-fixed {\r\n  background: white;\r\n  /* position: fixed; */\r\n}\r\n\r\n.scroll-fixed .navbar {\r\n  padding: 0;\r\n}\r\n\r\n.logo-container {\r\n  flex-grow: 1;\r\n}\r\n\r\n.navbar{\r\n  display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    max-width: 88%;\r\n    margin: 0 auto;\r\n    padding: 20px 0;\r\n}\r\n\r\n.header .navbar .navbar-list > ul,\r\n.ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.a{\r\n  margin: 0 10px;\r\n}\r\n\r\n.li{\r\n  float: left;\r\n  top: 68px;\r\n  height: 34px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  font-size: 25px;\r\n  text-align: left;\r\nfont: normal normal normal 25px/34px Open Sans;\r\nletter-spacing: 0px;\r\ncolor: #222222;\r\nopacity: 1;\r\n}\r\n\r\n.li:hover{\r\n  color: #492072;\r\n}\r\n\r\n.navbar-button{\r\n  display: flex;\r\n    align-content: space-around;\r\n    flex-wrap: wrap;\r\n    margin: 0 10px;\r\n}\r\n\r\n.dark-outline{\r\n  box-sizing: border-box;\r\n    min-height: 40px;\r\n    min-width: 115px;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    padding: 0 35px;\r\n    cursor: pointer;\r\n    box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%);\r\n    background: linear-gradient(\r\n      90deg\r\n      ,#9f62c9,#639);;\r\n\r\n}\r\n\r\n.navbar-container {\r\n  display: flex;\r\n}\r\n\r\n.dark-outline-btn,\r\n.light-outline-btn {\r\n  border-radius: 24px;\r\n  border: 2px solid #639;\r\n  color: #639;\r\n\r\n  box-sizing: border-box;\r\n    min-height: 40px;\r\n    min-width: 115px;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    padding: 0 35px;\r\n    cursor: pointer;\r\n    box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%);\r\n    background: none;\r\n}\r\n\r\n.primary-color-btn:hover{\r\n  box-sizing: border-box;\r\n    min-height: 40px;\r\n    min-width: 115px;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    padding: 0 35px;\r\n    cursor: pointer;\r\n\r\n    border-radius: 24px;\r\n    background: #492072;\r\n    border: #492072;\r\n}\r\n\r\n.primary-color-btn{\r\n  border-radius: 24px;\r\n    border: none;\r\n    background: linear-gradient(90deg\r\n,#9f62c9,#639);\r\n    color: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBTztFQUNQLE1BQU07RUFDTixRQUFRO0VBQ1IsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxhQUFhO0lBQ1gsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7O0VBRUUsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCLDhDQUE4QztBQUM5QyxtQkFBbUI7QUFDbkIsY0FBYztBQUNkLFVBQVU7QUFDVjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0lBQ1gsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0lBQ3BCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLHVDQUF1QztJQUN2Qzs7b0JBQStEOztBQUVuRTs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTs7RUFFRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7O0VBRVgsc0JBQXNCO0lBQ3BCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLHVDQUF1QztJQUN2QyxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlOztJQUVmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtJQUNqQixZQUFZO0lBQ1o7Y0FBaUQ7SUFDakQsV0FBVztBQUNmIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5O1xyXG59XHJcblxyXG4uc2Nyb2xsLWZpeGVkIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcbn1cclxuXHJcbi5zY3JvbGwtZml4ZWQgLm5hdmJhciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmxvZ28tY29udGFpbmVyIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuLm5hdmJhcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogODglO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5oZWFkZXIgLm5hdmJhciAubmF2YmFyLWxpc3QgPiB1bCxcclxuLnVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uYXtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG4ubGl7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdG9wOiA2OHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5mb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyNXB4LzM0cHggT3BlbiBTYW5zO1xyXG5sZXR0ZXItc3BhY2luZzogMHB4O1xyXG5jb2xvcjogIzIyMjIyMjtcclxub3BhY2l0eTogMTtcclxufVxyXG5cclxuLmxpOmhvdmVye1xyXG4gIGNvbG9yOiAjNDkyMDcyO1xyXG59XHJcblxyXG4ubmF2YmFyLWJ1dHRvbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5kYXJrLW91dGxpbmV7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICBtaW4td2lkdGg6IDExNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDAgMzVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiKDAgMCAwIC8gMjAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgOTBkZWdcclxuICAgICAgLCM5ZjYyYzksIzYzOSk7O1xyXG5cclxufVxyXG4ubmF2YmFyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uZGFyay1vdXRsaW5lLWJ0bixcclxuLmxpZ2h0LW91dGxpbmUtYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2Mzk7XHJcbiAgY29sb3I6ICM2Mzk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAwIDM1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYigwIDAgMCAvIDIwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4ucHJpbWFyeS1jb2xvci1idG46aG92ZXJ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICBtaW4td2lkdGg6IDExNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDAgMzVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzQ5MjA3MjtcclxuICAgIGJvcmRlcjogIzQ5MjA3MjtcclxufVxyXG5cclxuLnByaW1hcnktY29sb3ItYnRue1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWdcclxuLCM5ZjYyYzksIzYzOSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "Dk7Y":
    /*!************************************************!*\
      !*** ./src/app/shared-module/shared.module.ts ***!
      \************************************************/

    /*! exports provided: SharedModule */

    /***/
    function Dk7Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _tile_tile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tile/tile.component */
      "ZIPq");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/slider */
      "mPVK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _calculator_eligibility_calculator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./calculator/eligibility-calculator.component */
      "ylQ7");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tile_tile_component__WEBPACK_IMPORTED_MODULE_2__["TileComponent"], _calculator_eligibility_calculator_component__WEBPACK_IMPORTED_MODULE_9__["EligibilityCalculator"]],
        exports: [_tile_tile_component__WEBPACK_IMPORTED_MODULE_2__["TileComponent"], _calculator_eligibility_calculator_component__WEBPACK_IMPORTED_MODULE_9__["EligibilityCalculator"]],
        imports: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"]]
      })], SharedModule);
      /***/
    },

    /***/
    "GcKC":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-module/calculator/eligibility-calculator.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GcKC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"eligibility\">\r\n  <mat-card>\r\n    <mat-card-title class=\"title\">\r\n      Eligibility Calculator\r\n    </mat-card-title>\r\n\r\n    <mat-card-content>\r\n      <!-- <mat-form-field> -->\r\n      <div class=\"form-input-container\">\r\n        Monthly income\r\n        <br>\r\n        <br>\r\n        <span class=\"label-value\">\r\n  &#x20b9; {{spend}} </span>\r\n        <br>\r\n        <mat-slider class=\"full-wdith\" disableRipple (input)=\"spend=$event.value\" tickInterval=\"1000\" step=\"1000\"\r\n          min=\"100000\" max=\"300000\" aria-label=\"units\">\r\n        </mat-slider>\r\n        <div style=\"display: flex;justify-content: space-between;margin-top: -8px;color: gray;\">\r\n          <span>&#x20b9;1,00,000</span>\r\n          <span>&#x20b9;3,00,000</span>\r\n        </div>\r\n      </div>\r\n      <!-- </mat-form-field> -->\r\n\r\n\r\n\r\n      <div class=\"form-input-container\">\r\n        Monthly expense\r\n        <br>\r\n\r\n        <br>\r\n        <span class=\"label-value\">\r\n  &#x20b9; {{expense}} </span>\r\n        <br>\r\n        <mat-slider (input)=\"expense=$event.value\" class=\"full-wdith\" tickInterval=\"1000\" step=\"1000\" min=\"1000\"\r\n          max=\"100000\" aria-label=\"units\">\r\n        </mat-slider>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-input-container\">\r\n        Repayment tenure\r\n        <br>\r\n        <mat-form-field floatLabel=\"never\" class=\"full-wdith\">\r\n          <mat-label>Select an option</mat-label>\r\n          <mat-select [value]=\"'6'\">\r\n            <mat-option selected value=\"6\">6 months</mat-option>\r\n            <mat-option value=\"12\">1 year</mat-option>\r\n            <mat-option value=\"24\">2 years</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"form-input-container\" style=\"display: flex; justify-content: space-between\">\r\n        Do you have any existing loans?\r\n        <mat-slide-toggle ngModel name=\"enableWifi\"></mat-slide-toggle>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"form-input-container\">\r\n        EMI of existing loan (Optional)\r\n        <br>\r\n        <mat-form-field class=\"full-wdith\" floatLabel=\"never\">\r\n          <input class=\"full-wdith\" matInput placeholder=\"&#x20b9; 15000\">\r\n        </mat-form-field>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <div class=\"final-amount\">\r\n    <div>\r\n      <span>Loan Amount</span>\r\n      <span class=\"label-value\">\r\n  &#x20b9; 1,00,000</span>\r\n    </div>\r\n    <div>\r\n      <span>Your EMI will be</span>\r\n      <span class=\"label-value\">\r\n  &#x20b9; 15,0000</span>\r\n    </div>\r\n    <div>\r\n      <button>GET MONEY</button>\r\n    </div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "Gd4t":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function Gd4t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header></app-header>\r\n<div class=\"first-page\">\r\n  <div class=\"main-circle\">\r\n    <div class=\"main-circle-container\">\r\n      <img class=\"small-circle\" loading=\"lazy\" src=\"assets/img/blob-small.svg\">\r\n      <img class=\"big-circle\" loading=\"lazy\" src=\"assets/img/circle.svg\">\r\n    </div>\r\n  </div>\r\n  <div class=\"main-container\">\r\n    <div class=\"box\" style=\"width: 35%;\">\r\n      <div class=\"cust-title\">\r\n        <h2 class=\"section-head\"> We make it Super Simple </h2>\r\n        <div class=\"sec-line\">\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <img loading=\"lazy\" width=\"100%\" src=\"assets/img/collect_img-video.png\">\r\n      </div>\r\n      <div>\r\n        <img class=\"dot\" loading=\"lazy\" width=\"100%\" src=\"assets/img/accounting_dots.svg\">\r\n      </div>\r\n    </div>\r\n    <div class=\"box\">\r\n      <eligibility-calculator></eligibility-calculator>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<account-page></account-page>";
      /***/
    },

    /***/
    "N74h":
    /*!*********************************************************!*\
      !*** ./src/app/account-page/account-page.component.css ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function N74h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main-wave {\r\n  position: absolute;\r\n  z-index: -1;\r\n}\r\n\r\n.account-page {\r\n  position: relative;\r\n}\r\n\r\n.tiles-container {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.account-page{\r\n    display: flex;\r\n    flex-flow: column;\r\n    text-align: left;\r\n    justify-content: center;\r\n}\r\n\r\n.sec-line {\r\n  height: 6px;\r\n  width: 100px;\r\n  background: #707070;\r\n  border-radius: 50px;\r\n  margin: 30px 0;\r\n}\r\n\r\n.account-head {\r\n  font-size: 40px;\r\n  line-height: 54px;\r\n}\r\n\r\n.description-margin{\r\n  margin-left: 150px;\r\n}\r\n\r\n.account-description{\r\n  color: #777777;\r\n}\r\n\r\n.account-btn{\r\n  border-radius: 24px;\r\n  border: 2px solid #639;\r\n  color: #639;\r\n\r\n  box-sizing: border-box;\r\n    min-height: 40px;\r\n    min-width: 115px;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    padding: 0 35px;\r\n    cursor: pointer;\r\n    box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%);\r\n    background: none;\r\n}\r\n\r\n.account-primary-color-btn{\r\n  border-radius: 24px;\r\n    background: white;\r\n    color: rgb(58, 9, 73);\r\n    margin-top: 50px;\r\n}\r\n\r\n.account-primary-color-btn:hover{\r\n  background-color: rgb(140, 104, 175);\r\n  color: white;\r\n}\r\n\r\n.main-container {\r\n  margin: 0 6%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.tiles1 {\r\n  margin-top: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixXQUFXOztFQUVYLHNCQUFzQjtJQUNwQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0lBQ2pCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFjY291bnQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4td2F2ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uYWNjb3VudC1wYWdlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50aWxlcy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG5cclxuLmFjY291bnQtcGFnZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYy1saW5lIHtcclxuICBoZWlnaHQ6IDZweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZDogIzcwNzA3MDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG1hcmdpbjogMzBweCAwO1xyXG59XHJcblxyXG4uYWNjb3VudC1oZWFkIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1tYXJnaW57XHJcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG59XHJcbi5hY2NvdW50LWRlc2NyaXB0aW9ue1xyXG4gIGNvbG9yOiAjNzc3Nzc3O1xyXG59XHJcblxyXG4uYWNjb3VudC1idG57XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNjM5O1xyXG4gIGNvbG9yOiAjNjM5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICAgIG1pbi13aWR0aDogMTE1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogMCAzNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2IoMCAwIDAgLyAyMCUpO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmFjY291bnQtcHJpbWFyeS1jb2xvci1idG57XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IHJnYig1OCwgOSwgNzMpO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmFjY291bnQtcHJpbWFyeS1jb2xvci1idG46aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MCwgMTA0LCAxNzUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgNiU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGlsZXMxIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "RV7M":
    /*!*****************************************!*\
      !*** ./src/app/home/home.component.css ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function RV7M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main-circle-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.main-circle {\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: -1;\r\n}\r\n.big-circle {\r\n  top: -300px;\r\n  left: 852px;\r\n  width: 1183px;\r\n  height: 1192px;\r\n  transform: matrix(0.12, -0.99, 0.99, 0.12, 0, 0);\r\n  position: absolute;\r\n}\r\n.small-circle {\r\n  top: -13px;\r\n  left: -179px;\r\n  width: 450px;\r\n  height: 572px;\r\n  position: absolute;\r\n}\r\n.main-container {\r\n  margin: 20px 0;\r\n  display: flex;\r\n  margin-top: 270px;\r\n}\r\n.first-page {\r\n  height: 1000px;\r\n}\r\n.cust-title {\r\n  display: flex;\r\n  flex-flow: column;\r\n  text-align: left;\r\n  justify-content: center;\r\n  margin: 0 30px;\r\n}\r\n.box {\r\n  margin-left: 6%;\r\n  margin-right: 6%;\r\n}\r\n.section-head {\r\n  font-size: 40px;\r\n  line-height: 54px;\r\n}\r\n.blog-img {\r\n  margin: 0 30px;\r\n}\r\n.sec-line {\r\n  height: 6px;\r\n  width: 100px;\r\n  background: linear-gradient(\r\n90deg\r\n,#639,#9f62c9);\r\n  border-radius: 50px;\r\n  margin-bottom: 30px;\r\n}\r\n.dot{\r\n  width: 386px;\r\n  height: 51px;\r\n  margin-left: 100px;\r\n  opacity: 0.5;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0RBQWdEO0VBQ2hELGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaOztjQUFtRDtFQUNuRCxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2QiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY2lyY2xlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLm1haW4tY2lyY2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5iaWctY2lyY2xlIHtcclxuICB0b3A6IC0zMDBweDtcclxuICBsZWZ0OiA4NTJweDtcclxuICB3aWR0aDogMTE4M3B4O1xyXG4gIGhlaWdodDogMTE5MnB4O1xyXG4gIHRyYW5zZm9ybTogbWF0cml4KDAuMTIsIC0wLjk5LCAwLjk5LCAwLjEyLCAwLCAwKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnNtYWxsLWNpcmNsZSB7XHJcbiAgdG9wOiAtMTNweDtcclxuICBsZWZ0OiAtMTc5cHg7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIGhlaWdodDogNTcycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAyNzBweDtcclxufVxyXG4uZmlyc3QtcGFnZSB7XHJcbiAgaGVpZ2h0OiAxMDAwcHg7XHJcbn1cclxuLmN1c3QtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgMzBweDtcclxufVxyXG4uYm94IHtcclxuICBtYXJnaW4tbGVmdDogNiU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2JTtcclxufVxyXG4uc2VjdGlvbi1oZWFkIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XHJcbn1cclxuXHJcbi5ibG9nLWltZyB7XHJcbiAgbWFyZ2luOiAwIDMwcHg7XHJcbn1cclxuXHJcbi5zZWMtbGluZSB7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuOTBkZWdcclxuLCM2MzksIzlmNjJjOSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZG90e1xyXG4gIHdpZHRoOiAzODZweDtcclxuICBoZWlnaHQ6IDUxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.name = 'Angular ' + _angular_core__WEBPACK_IMPORTED_MODULE_3__["VERSION"].major;
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'my-app',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <app-header></app-header> -->\n<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./shared-module/shared.module */
      "Dk7Y");
      /* harmony import */


      var _account_page_account_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./account-page/account-page.component */
      "rXff");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
          path: '',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
        }])],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _account_page_account_page_component__WEBPACK_IMPORTED_MODULE_11__["AccountPageComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__["APP_BASE_HREF"],
          useValue: '/'
        }]
      })], AppModule);
      /***/
    },

    /***/
    "ZIPq":
    /*!******************************************************!*\
      !*** ./src/app/shared-module/tile/tile.component.ts ***!
      \******************************************************/

    /*! exports provided: TileComponent */

    /***/
    function ZIPq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TileComponent", function () {
        return TileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tile.component.html */
      "8csY");
      /* harmony import */


      var _tile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tile.component.css */
      "laRY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TileComponent = function TileComponent() {
        _classCallCheck(this, TileComponent);

        this.image = 'tileColumn1';
        this.header = 'tileColumn1';
        this.description = 'tileColumn1';
      };

      TileComponent.propDecorators = {
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        header: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      TileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tile',
        template: _raw_loader_tile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TileComponent);
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function fECr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header.component.html */
      "kjkU");
      /* harmony import */


      var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.component.css */
      "DN7M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);

          this.scrollClass = '';
        }

        _createClass(HeaderComponent, [{
          key: "onScroll",
          value: function onScroll(event) {
            console.log(event);

            if (window.pageYOffset > 80) {
              this.scrollClass = 'scroll-fixed';
            } else {
              this.scrollClass = '';
            }
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.propDecorators = {
        onScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['window:scroll', ['$event']]
        }]
      };
      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HeaderComponent);
      /***/
    },

    /***/
    "hN/g":
    /*!**************************!*\
      !*** ./src/polyfills.ts ***!
      \**************************/

    /*! no exports provided */

    /***/
    function hNG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js/dist/zone */
      "pDpN");
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
      /**
       * This file includes polyfills needed by Angular and is loaded before the app.
       * You can add your own extra polyfills to this file.
       *
       * This file is divided into 2 sections:
       *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
       *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
       *      file.
       *
       * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
       * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
       * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
       *
       * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
       */

      /***************************************************************************************************
       * BROWSER POLYFILLS
       */

      /** IE9, IE10 and IE11 requires all of the following polyfills. **/
      // import 'core-js/es6/symbol';
      // import 'core-js/es6/object';
      // import 'core-js/es6/function';
      // import 'core-js/es6/parse-int';
      // import 'core-js/es6/parse-float';
      // import 'core-js/es6/number';
      // import 'core-js/es6/math';
      // import 'core-js/es6/string';
      // import 'core-js/es6/date';
      // import 'core-js/es6/array';
      // import 'core-js/es6/regexp';
      // import 'core-js/es6/map';
      // import 'core-js/es6/set';

      /** IE10 and IE11 requires the following for NgClass support on SVG elements */
      // import 'classlist.js';  // Run `npm install --save classlist.js`.

      /** IE10 and IE11 requires the following to support `@angular/animation`. */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /** Evergreen browsers require these. **/
      // import 'core-js/es6/reflect';
      // import 'core-js/es7/reflect';

      /**
       * Web Animations `@angular/platform-browser/animations`
       * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
       * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
       */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /***************************************************************************************************
       * Zone JS is required by Angular itself.
       */
      // Included with Angular CLI.

      /***************************************************************************************************
       * APPLICATION IMPORTS
       */

      /**
       * Date, currency, decimal and percent pipes.
       * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
       */
      // import 'intl';  // Run `npm install --save intl`.

      /***/

    },

    /***/
    "kjkU":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function kjkU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<header class=\"header\" [ngClass]=\"scrollClass\">\r\n  <nav class=\"navbar\">\r\n    <div class=\"logo-container\">\r\n      <a class=\"navbar-brand\" ><img style=\"width:70px ;height: 70px;\" loading=\"lazy\" src=\"assets/logo/logo.png\" class=\"logo\"></a>\r\n    </div>\r\n    <div class=\"navbar-container\">\r\n      <div class=\"navbar-list\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"li\" style=\"width:103px;\">Products</li>\r\n          <li class=\"li\" style=\"width:108px;\">Solutions</li>\r\n          <li class=\"li\" style=\"width:79px;\">Pricing</li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"navbar-button\">\r\n        <a class=\"a\" target=\"_blank\" href=\"#\">\r\n          <button class=\"dark-outline-btn\" style=\"box-shadow: none;width:46px ;height: 19px;\">Login</button>\r\n        </a>\r\n        <a clas=\"nav-divnk\" target=\"_blank\">\r\n          <button class=\"dark-outline-btn primary-color-btn\" style=\"box-shadow: none;width:154px ;height: 19px;\">Get Started</button>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </nav>\r\n</header>";
      /***/
    },

    /***/
    "laRY":
    /*!*******************************************************!*\
      !*** ./src/app/shared-module/tile/tile.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function laRY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tile {\r\n  box-sizing: border-box;\r\n  flex-direction: column;\r\n  min-height: 225px;\r\n  width: 310px;\r\n  border: 1px solid #fff;\r\n  border-radius: 20px;\r\n  background-color: #f9f9f9;\r\n  box-shadow: inset 0 1px 40px 0 #fff, 0 2px 10px 0 hsl(0deg 0% 100% / 50%),\r\n    0 0 30px 0 rgb(35 33 50 / 12%);\r\n  margin: 20px 0 40px;\r\n  padding: 20px;\r\n\r\n  display: flex;\r\n    align-items: flex-start;\r\n}\r\n\r\n.feature{\r\n  min-height: 100vh;\r\n}\r\n\r\n.feature-content{\r\n  flex-flow: row;\r\n}\r\n\r\n.feature-rect-display{\r\n  flex-flow: row;\r\n    order: 1;\r\n}\r\n\r\n.rec-content {\r\n  text-align: left;\r\n}\r\n\r\n.info-rect {\r\n  box-sizing: border-box;\r\n    flex-direction: column;\r\n    min-height: 225px;\r\n    width: 310px;\r\n    border: 1px solid #fff;\r\n    border-radius: 20px;\r\n    background-color: #f9f9f9;\r\n    box-shadow: inset 0 1px 40px 0 #fff, 0 2px 10px 0 hsl(0deg 0% 100% / 50%), 0 0 30px 0 rgb(35 33 50 / 12%);\r\n    margin: 20px 10px 40px;\r\n    padding: 20px;\r\n\r\n    display: flex;\r\n    align-items: flex-start;\r\n}\r\n\r\n.info-rect:hover{\r\n    background:#9F62C9;\r\n    color: #f9f9f9;\r\n    box-shadow: none;\r\n    opacity: 0.6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QjtrQ0FDZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGFBQWE7O0VBRWIsYUFBYTtJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0lBQ1osUUFBUTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0lBQ3BCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHlHQUF5RztJQUN6RyxzQkFBc0I7SUFDdEIsYUFBYTs7SUFFYixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQiIsImZpbGUiOiJ0aWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlsZSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IDIyNXB4O1xyXG4gIHdpZHRoOiAzMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCA0MHB4IDAgI2ZmZiwgMCAycHggMTBweCAwIGhzbCgwZGVnIDAlIDEwMCUgLyA1MCUpLFxyXG4gICAgMCAwIDMwcHggMCByZ2IoMzUgMzMgNTAgLyAxMiUpO1xyXG4gIG1hcmdpbjogMjBweCAwIDQwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uZmVhdHVyZXtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmZlYXR1cmUtY29udGVudHtcclxuICBmbGV4LWZsb3c6IHJvdztcclxufVxyXG5cclxuLmZlYXR1cmUtcmVjdC1kaXNwbGF5e1xyXG4gIGZsZXgtZmxvdzogcm93O1xyXG4gICAgb3JkZXI6IDE7XHJcbn1cclxuXHJcbi5yZWMtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmluZm8tcmVjdCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4taGVpZ2h0OiAyMjVweDtcclxuICAgIHdpZHRoOiAzMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDQwcHggMCAjZmZmLCAwIDJweCAxMHB4IDAgaHNsKDBkZWcgMCUgMTAwJSAvIDUwJSksIDAgMCAzMHB4IDAgcmdiKDM1IDMzIDUwIC8gMTIlKTtcclxuICAgIG1hcmdpbjogMjBweCAxMHB4IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmluZm8tcmVjdDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IzlGNjJDOTtcclxuICAgIGNvbG9yOiAjZjlmOWY5O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "oxl6":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account-page/account-page.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oxl6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"account-page\">\r\n  <div class=\"main-wave\">\r\n    <div class=\"main-wave-container\">\r\n      <img loading=\"lazy\" style=\"width: 100%;\" src=\"assets/sol_wave_bg.svg\">\r\n    </div>\r\n  </div>\r\n  <div class=\"main-container\">\r\n    <div class=\"tiles-container\">\r\n      <div class=\"tiles\">\r\n        <app-tile [image]=\"tile.image\" [header]=\"tile.header\" [description]=\"tile.description\"\r\n          *ngFor=\"let tile of tileColumn1\">\r\n        </app-tile>\r\n      </div>\r\n      <div class=\"tiles tiles1\">\r\n        <app-tile [image]=\"tile.image\" [header]=\"tile.header\" [description]=\"tile.description\"\r\n          *ngFor=\"let tile of tileColumn2\">\r\n        </app-tile>\r\n      </div>\r\n    </div>\r\n    <div class=\"business-container\">\r\n      <div class=\"cust-title\">\r\n        <h2 class=\"account-head description-margin\"> Boost your business with Open </h2>\r\n        <div class=\"sec-line description-margin\">\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <p class=\"account-description description-margin\">Get your hands on a term loan that’s crafted for your business</p>\r\n      </div>\r\n      <div>\r\n        <button class=\"account-btn account-primary-color-btn description-margin\" >Get an Open Account</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "rXff":
    /*!********************************************************!*\
      !*** ./src/app/account-page/account-page.component.ts ***!
      \********************************************************/

    /*! exports provided: AccountPageComponent */

    /***/
    function rXff(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageComponent", function () {
        return AccountPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_account_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./account-page.component.html */
      "oxl6");
      /* harmony import */


      var _account_page_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account-page.component.css */
      "N74h");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var AccountPageComponent = function AccountPageComponent() {
        _classCallCheck(this, AccountPageComponent);

        this.tileColumn1 = [{
          image: 'assets/img/Get Paid Instantly.png',
          header: 'Quick cash disbursement',
          description: 'Get terms loans that your business needs within 72 hrs'
        }, {
          image: 'assets/img/Low interest rate.png',
          header: 'Low-interest rate',
          description: 'Achieve your financial goals with an amazing interest rate starting at 13% per annum'
        }, {
          image: 'assets/img/Secure Payments.png',
          header: 'Zero Paperwork',
          description: 'Get started instantly by submitting only your basic details & bank statements'
        }];
        this.tileColumn2 = [{
          image: 'assets/img/freelancer_feature_icon_6@1.5x.png',
          header: 'Ace your business finances',
          description: 'Manage banking, accounting & everything in between, on one platform'
        }, {
          image: 'assets/img/Covid.png',
          header: 'Loans to fight COVID-19',
          description: 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh'
        }];
      };

      AccountPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'account-page',
        template: _raw_loader_account_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_page_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AccountPageComponent);
      /***/
    },

    /***/
    "ylQ7":
    /*!******************************************************************************!*\
      !*** ./src/app/shared-module/calculator/eligibility-calculator.component.ts ***!
      \******************************************************************************/

    /*! exports provided: EligibilityCalculator */

    /***/
    function ylQ7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EligibilityCalculator", function () {
        return EligibilityCalculator;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_eligibility_calculator_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./eligibility-calculator.component.html */
      "GcKC");
      /* harmony import */


      var _eligibility_calculator_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./eligibility-calculator.component.css */
      "+ohx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var EligibilityCalculator = function EligibilityCalculator() {
        _classCallCheck(this, EligibilityCalculator);

        this.spend = 0;
        this.expense = 0;
      };

      EligibilityCalculator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'eligibility-calculator',
        template: _raw_loader_eligibility_calculator_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_eligibility_calculator_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EligibilityCalculator);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills */
      "hN/g");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function (ref) {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref; // Otherwise, log the boot error
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map