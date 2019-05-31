"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _plotUtils = require("plot-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var VerticalCrosshairSelector =
/*#__PURE__*/
function (_Component) {
  _inherits(VerticalCrosshairSelector, _Component);

  function VerticalCrosshairSelector(props) {
    var _this;

    _classCallCheck(this, VerticalCrosshairSelector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VerticalCrosshairSelector).call(this, props));
    _this.lastEvent = null;
    return _this;
  }

  _createClass(VerticalCrosshairSelector, [{
    key: "render",
    value: function render() {
      return null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.select();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.select();
    }
  }, {
    key: "select",
    value: function select() {
      var _this$props = this.props,
          hoveringPosition = _this$props.hoveringPosition,
          selectHandler = _this$props.selectHandler,
          width = _this$props.width,
          minX = _this$props.minX,
          maxX = _this$props.maxX; // old event

      if (hoveringPosition === this.lastEvent) {
        return;
      } // new event


      this.lastEvent = hoveringPosition;
      if (!hoveringPosition) selectHandler(null);else {
        selectHandler((0, _plotUtils.fromDomXCoord_Linear)(width, minX, maxX, hoveringPosition.domX));
      }
    }
  }]);

  return VerticalCrosshairSelector;
}(_react.Component);

VerticalCrosshairSelector.propTypes = {
  width: _propTypes.default.number.isRequired,
  minX: _propTypes.default.number.isRequired,
  maxX: _propTypes.default.number.isRequired,
  hoveringPosition: _propTypes.default.object,
  selectHandler: _propTypes.default.func.isRequired
};
var _default = VerticalCrosshairSelector;
exports.default = _default;