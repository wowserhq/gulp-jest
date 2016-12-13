'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jestCli = require('jest-cli');

var _jestCli2 = _interopRequireDefault(_jestCli);

var _gulpUtil = require('gulp-util');

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

var _through = require('through2');

var _through2 = _interopRequireDefault(_through);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return _through2.default.obj(function (file, enc, cb) {
    options = Object.assign({}, options, {
      config: Object.assign({
        rootDir: file ? file.path : undefined
      }, options.config)
    });

    _jestCli2.default.runCLI(options, options.config.rootDir, function (result) {
      if (result.numFailedTests) {
        cb(new _gulpUtil2.default.PluginError('gulp-jest', { message: 'Tests Failed' }));
      } else {
        cb();
      }
    });
  });
};