function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Close } from 'grommet-icons';

import DropButton from '../DropButton/DropButton';
import Grommet from '../Grommet/Grommet';
import Box from '../Box/Box';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import Text from '../Text/Text';

var DropContent = function DropContent(_ref) {
  var onClose = _ref.onClose;
  return React.createElement(
    Box,
    { pad: 'small' },
    React.createElement(
      Box,
      { direction: 'row', justify: 'between', align: 'center' },
      React.createElement(
        Heading,
        { level: 3, margin: 'small' },
        'Heading'
      ),
      React.createElement(Button, { icon: React.createElement(Close, null), onClick: onClose })
    ),
    React.createElement(
      Text,
      null,
      'Content'
    )
  );
};

var SimpleDropButton = function (_Component) {
  _inherits(SimpleDropButton, _Component);

  function SimpleDropButton() {
    var _temp, _this, _ret;

    _classCallCheck(this, SimpleDropButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.onClose = function () {
      _this.setState({ open: false });
      setTimeout(function () {
        return _this.setState({ open: undefined });
      }, 1);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SimpleDropButton.prototype.render = function render() {
    var _this2 = this;

    var open = this.state.open;

    return React.createElement(
      Grommet,
      null,
      React.createElement(DropButton, {
        label: 'Open',
        open: open,
        onClose: function onClose() {
          return _this2.setState({ open: undefined });
        },
        dropContent: React.createElement(DropContent, { onClose: this.onClose })
      })
    );
  };

  return SimpleDropButton;
}(Component);

storiesOf('DropButton', module).add('Simple DropButton', function () {
  return React.createElement(SimpleDropButton, null);
});