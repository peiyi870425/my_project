'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET localhost:[port]/api page. */
router.get('/', function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var apikey, dataid, countyName, townName, fetchData, allData, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, value;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            apikey = 'CWB-DB593618-C1C4-48D2-892B-73C9CB68C91E';
            dataid = 'M-A0085-001';
            countyName = '臺北市';
            townName = '大安區';
            _context.next = 6;
            return (0, _nodeFetch2.default)('https://opendata.cwb.gov.tw/api/v1/rest/datastore/' + dataid + '?Authorization=' + apikey + '&limit=1&format=JSON&CountyName=' + countyName + '&TownName=' + townName);

          case 6:
            fetchData = _context.sent;
            _context.next = 9;
            return fetchData.json();

          case 9:
            fetchData = _context.sent;

            console.log(fetchData);

            if (!fetchData) {
              _context.next = 35;
              break;
            }

            allData = fetchData.records.Locations[0].Location[0].Time;

            res.status(200);
            res.set({ 'Content-Type': 'text/html; charset=UTF-8' });
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 18;
            for (_iterator = (0, _getIterator3.default)(allData); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              value = _step.value;

              res.write('<p>' + value.IssueTime + ': \u71B1\u50B7\u5BB3\u6307\u6578 ' + value.WeatherElements.HeatInjuryIndex + '</p>', 'UTF-8');
            }
            _context.next = 26;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context['catch'](18);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 26:
            _context.prev = 26;
            _context.prev = 27;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 29:
            _context.prev = 29;

            if (!_didIteratorError) {
              _context.next = 32;
              break;
            }

            throw _iteratorError;

          case 32:
            return _context.finish(29);

          case 33:
            return _context.finish(26);

          case 34:
            res.end();

          case 35:
            res.send().end;

          case 36:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[18, 22, 26, 34], [27,, 29, 33]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

exports.default = router;