"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _browserImageCompression = _interopRequireDefault(require("browser-image-compression"));

var _Card = _interopRequireDefault(require("react-bootstrap/Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var imageCompressor = /*#__PURE__*/function (_React$Component) {
  _inherits(imageCompressor, _React$Component);

  var _super = _createSuper(imageCompressor);

  function imageCompressor() {
    var _this;

    _classCallCheck(this, imageCompressor);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "handle", function (e) {
      var imageFile = e.target.files[0];

      _this.setState({
        originalLink: URL.createObjectURL(imageFile),
        originalImage: imageFile,
        outputFileName: imageFile.name,
        uploadImage: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeValue", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "click", function (e) {
      e.preventDefault();
      var options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };

      if (options.maxSizeMB >= _this.state.originalImage.size / 1024) {
        alert("Image is too small, can't be Compressed!");
        return 0;
      }

      var output;
      (0, _browserImageCompression.default)(_this.state.originalImage, options).then(function (x) {
        output = x;
        var downloadLink = URL.createObjectURL(output);

        _this.setState({
          compressedLink: downloadLink
        });
      });

      _this.setState({
        clicked: true
      });

      return 1;
    });

    _this.state = {
      compressedLink: "http://navparivartan.in/wp-content/uploads/2018/11/placeholder.png",
      originalImage: "",
      originalLink: "",
      clicked: false,
      uploadImage: false
    };
    return _this;
  }

  _createClass(imageCompressor, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "m-5"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "text-light text-center"
      }, /*#__PURE__*/_react.default.createElement("h1", null, "Three Simple Steps"), /*#__PURE__*/_react.default.createElement("h3", null, "1. Upload Image"), /*#__PURE__*/_react.default.createElement("h3", null, "2. Click on Compress"), /*#__PURE__*/_react.default.createElement("h3", null, "3. Download Compressed Image")), /*#__PURE__*/_react.default.createElement("div", {
        className: "row mt-5"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "col-xl-4 col-lg-4 col-md-12 col-sm-12"
      }, this.state.uploadImage ? /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
        className: "ht",
        variant: "top",
        src: this.state.originalLink
      }) : /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
        className: "ht",
        variant: "top",
        src: "http://navparivartan.in/wp-content/uploads/2018/11/placeholder.png"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "d-flex justify-content-center"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "file",
        accept: "image/*",
        className: "mt-2 btn btn-dark w-75",
        onChange: function onChange(e) {
          return _this2.handle(e);
        }
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-xl-4 col-lg-4 col-md-12 mb-5 mt-5 col-sm-12 d-flex justify-content-center align-items-baseline"
      }, /*#__PURE__*/_react.default.createElement("br", null), this.state.outputFileName ? /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: " btn btn-dark",
        onClick: function onClick(e) {
          return _this2.click(e);
        }
      }, "Compress") : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-3"
      }, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
        variant: "top",
        src: this.state.compressedLink
      }), this.state.clicked ? /*#__PURE__*/_react.default.createElement("div", {
        className: "d-flex justify-content-center"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: this.state.compressedLink,
        download: this.state.outputFileName,
        className: "mt-2 btn btn-dark w-75"
      }, "Download")) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null))));
    }
  }]);

  return imageCompressor;
}(_react.default.Component);

exports.default = imageCompressor;