'use strict';

exports.__esModule = true;
exports.StyledBoxGap = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _FLEX_MAP;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ALIGN_MAP = {
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var alignStyle = /*#__PURE__*/(0, _styledComponents.css)(['align-items:', ';'], function (props) {
  return ALIGN_MAP[props.align];
});

var ALIGN_CONTENT_MAP = {
  around: 'around',
  between: 'between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var alignContentStyle = /*#__PURE__*/(0, _styledComponents.css)(['align-content:', ';'], function (props) {
  return ALIGN_CONTENT_MAP[props.alignContent];
});

var ALIGN_SELF_MAP = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var alignSelfStyle = /*#__PURE__*/(0, _styledComponents.css)(['align-self:', ';'], function (props) {
  return ALIGN_SELF_MAP[props.alignSelf];
});

var BASIS_MAP = {
  'auto': 'auto',
  'full': '100%',
  '1/2': '50%',
  '1/4': '25%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};

var basisStyle = /*#__PURE__*/(0, _styledComponents.css)(['flex-basis:', ';'], function (props) {
  return BASIS_MAP[props.basis] || props.theme.global.size[props.basis];
});

// min-width and min-height needed because of this
// https://stackoverflow.com/questions/36247140/why-doesnt-flex-item-shrink-past-content-size
// we assume we are in the context of a Box going the other direction
// TODO: revisit this
var directionStyle = /*#__PURE__*/(0, _styledComponents.css)(['', ' ', ' flex-direction:', ';', '}'], function (props) {
  return props.direction === 'row' && 'min-height: 0;';
}, function (props) {
  return props.direction === 'column' && 'min-width: 0;';
}, function (props) {
  return props.direction;
}, function (props) {
  return props.direction === 'row-responsive' ? (0, _utils.palm)('\n    flex-direction: column;\n    flex-basis: auto;\n    justify-content: flex-start;\n    align-items: stretch;\n  ') : '';
});

var elevationStyle = /*#__PURE__*/(0, _styledComponents.css)(['box-shadow:', ';'], function (props) {
  return props.theme.global.elevation[props.elevation];
});

var FLEX_MAP = (_FLEX_MAP = {}, _FLEX_MAP[true] = '1 1', _FLEX_MAP[false] = '0 0', _FLEX_MAP.grow = '1 0', _FLEX_MAP.shrink = '0 1', _FLEX_MAP);

var flexStyle = /*#__PURE__*/(0, _styledComponents.css)(['flex:', ';'], function (props) {
  return FLEX_MAP[props.flex];
});

var fillStyle = function fillStyle(fill) {
  if (fill === 'horizontal') {
    return 'width: 100%;';
  }
  if (fill === 'vertical') {
    return 'height: 100%;';
  }
  if (fill) {
    return '\n      width: 100%;\n      height: 100%;\n    ';
  }
  return undefined;
};

var gridAreaStyle = /*#__PURE__*/(0, _styledComponents.css)(['grid-area:', ';'], function (props) {
  return props.gridArea;
});

var JUSTIFY_MAP = {
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start'
};

var justifyStyle = /*#__PURE__*/(0, _styledComponents.css)(['justify-content:', ';'], function (props) {
  return JUSTIFY_MAP[props.justify];
});

var wrapStyle = 'flex-wrap: wrap;';

var borderStyle = function borderStyle(data, responsive, theme) {
  var styles = [];
  var color = (0, _utils.colorForName)(data.color || 'border', theme);
  var borderSize = data.size || 'xsmall';
  var side = typeof data === 'string' ? data : data.side || 'all';
  var value = 'solid ' + theme.global.borderSize[borderSize] + ' ' + color;
  var narrowValue = 'solid ' + theme.global.borderSize.narrow[borderSize] + ' ' + color;
  if (side === 'top' || side === 'bottom' || side === 'left' || side === 'right') {
    styles.push((0, _styledComponents.css)(['border-', ':', ';'], side, value));
    if (responsive) {
      styles.push((0, _utils.palm)('border-' + side + ': ' + narrowValue + ';'));
    }
  } else if (side === 'vertical') {
    styles.push((0, _styledComponents.css)(['border-left:', ';border-right:', ';'], value, value));
    if (responsive) {
      styles.push((0, _utils.palm)('\n        border-left: ' + narrowValue + ';\n        border-right: ' + narrowValue + ';\n      '));
    }
  } else if (side === 'horizontal') {
    styles.push((0, _styledComponents.css)(['border-top:', ';border-bottom:', ';'], value, value));
    if (responsive) {
      styles.push((0, _utils.palm)('\n        border-top: ' + narrowValue + ';\n        border-bottom: ' + narrowValue + ';\n      '));
    }
  } else {
    styles.push((0, _styledComponents.css)(['border:', ';'], value));
    if (responsive) {
      styles.push((0, _utils.palm)('border: ' + narrowValue + ';'));
    }
  }
  return styles;
};

var ROUND_MAP = {
  'full': '100%'
};

var roundStyle = /*#__PURE__*/(0, _styledComponents.css)(['border-radius:', ';', ''], function (props) {
  return ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round];
}, function (props) {
  return props.responsive ? (0, _utils.palm)('\n    border-radius: ' + (ROUND_MAP[props.round] || props.theme.global.edgeSize.narrow[props.round]) + ';\n  ') : '';
});

var SLIDE_SIZES = {
  xsmall: 1,
  small: 5,
  medium: 10,
  large: 50,
  xlarge: 200
};

var PULSE_SIZES = {
  xsmall: 1.001,
  small: 1.01,
  medium: 1.1,
  large: 1.5,
  xlarge: 2
};

var JIGGLE_SIZES = {
  xsmall: 0.1,
  small: 1,
  medium: 5,
  large: 400,
  xlarge: 1000
};

var ZOOM_SIZES = {
  xsmall: 0.001,
  small: 0.01,
  medium: 0.05,
  large: 0.1,
  xlarge: 0.5
};

var animationBounds = function animationBounds(type) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'medium';

  if (type === 'fadeIn') {
    return ['opacity: 0;', 'opacity: 1;'];
  }
  if (type === 'fadeOut') {
    return ['opacity: 1;', 'opacity: 0;'];
  }
  if (type === 'jiggle') {
    var deg = JIGGLE_SIZES[size];
    return ['transform: rotate(-' + deg + 'deg);', 'transform: rotate(' + deg + 'deg);'];
  }
  if (type === 'pulse') {
    return ['transform: scale(1);', 'transform: scale(' + PULSE_SIZES[size] + ')'];
  }
  if (type === 'flipIn') {
    return ['transform: rotateY(90deg);', 'transform: rotateY(0);'];
  }
  if (type === 'flipOut') {
    return ['transform: rotateY(0);', 'transform: rotateY(90deg);'];
  }
  if (type === 'slideDown') {
    return ['transform: translateY(-' + SLIDE_SIZES[size] + '%);', 'transform: none;'];
  }
  if (type === 'slideLeft') {
    return ['transform: translateX(' + SLIDE_SIZES[size] + '%);', 'transform: none;'];
  }
  if (type === 'slideRight') {
    return ['transform: translateX(-' + SLIDE_SIZES[size] + '%);', 'transform: none;'];
  }
  if (type === 'slideUp') {
    return ['transform: translateY(' + SLIDE_SIZES[size] + '%);', 'transform: none;'];
  }
  if (type === 'zoomIn') {
    return ['transform: scale(' + (1 - ZOOM_SIZES[size]) + ');', 'transform: none;'];
  }
  if (type === 'zoomOut') {
    return ['transform: scale(' + (1 + ZOOM_SIZES[size]) + ');', 'transform: none;'];
  }
  return [];
};

var normalizeTiming = function normalizeTiming(time, defaultTiming) {
  return time ? time / 1000.0 + 's' : defaultTiming;
};

var animationEnding = function animationEnding(type) {
  if (type === 'jiggle') {
    return 'alternate infinite';
  }
  if (type === 'pulse') {
    return 'alternate infinite';
  }
  return 'forwards';
};

var animationObjectStyle = function animationObjectStyle(animation, theme) {
  var bounds = animationBounds(animation.type, animation.size);
  if (bounds) {
    return (0, _styledComponents.keyframes)(['from{', '}to{', '}'], bounds[0], bounds[1]) + '\n    ' + normalizeTiming(animation.duration, (theme.global.animation[animation.type] ? theme.global.animation[animation.type].duration : undefined) || theme.global.animation.duration) + '\n    ' + normalizeTiming(animation.delay, '0s') + '\n    ' + animationEnding(animation.type);
  }
  return '';
};

var animationItemStyle = function animationItemStyle(item, theme) {
  if (typeof item === 'string') {
    return animationObjectStyle({ type: item }, theme);
  } else if (Array.isArray(item)) {
    return item.map(function (a) {
      return animationItemStyle(a, theme);
    }).join(', ');
  } else if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
    return animationObjectStyle(item, theme);
  }
  return '';
};

var animationAncilaries = function animationAncilaries(animation) {
  if (animation.type === 'flipIn' || animation.type === 'flipOut') {
    return 'perspective: 1000px; transform-style: preserve-3d;';
  }
  return '';
};

var animationObjectInitialStyle = function animationObjectInitialStyle(animation) {
  var bounds = animationBounds(animation.type, animation.size);
  if (bounds) {
    return bounds[0] + ' ' + animationAncilaries(animation);
  }
  return '';
};

var animationInitialStyle = function animationInitialStyle(item) {
  if (typeof item === 'string') {
    return animationObjectInitialStyle({ type: item });
  } else if (Array.isArray(item)) {
    return item.map(function (a) {
      return typeof a === 'string' ? animationObjectInitialStyle({ type: a }) : animationObjectInitialStyle(a);
    }).join('');
  } else if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
    return animationObjectInitialStyle(item);
  }
  return '';
};

var animationStyle = /*#__PURE__*/(0, _styledComponents.css)(['', ''], function (props) {
  return '\n    ' + animationInitialStyle(props.animation) + '\n    animation: ' + animationItemStyle(props.animation, props.theme) + ';\n  ';
});

// NOTE: basis must be after flex! Otherwise, flex overrides basis
var StyledBox = /*#__PURE__*/_styledComponents2.default.div.withConfig({
  displayName: 'StyledBox'
})(['display:flex;box-sizing:border-box;', ';', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], function (props) {
  return !props.basis && 'max-width: 100%;';
}, function (props) {
  return props.align && alignStyle;
}, function (props) {
  return props.alignContent && alignContentStyle;
}, function (props) {
  return props.alignSelf && alignSelfStyle;
}, function (props) {
  return props.background && (0, _utils.backgroundStyle)(props.background, props.theme);
}, function (props) {
  return props.border && borderStyle(props.border, props.responsive, props.theme);
}, function (props) {
  return props.direction && directionStyle;
}, function (props) {
  return props.flex !== undefined && flexStyle;
}, function (props) {
  return props.basis && basisStyle;
}, function (props) {
  return props.fillContainer && fillStyle(props.fillContainer);
}, function (props) {
  return props.gridArea && gridAreaStyle;
}, function (props) {
  return props.justify && justifyStyle;
}, function (props) {
  return props.margin && (0, _utils.edgeStyle)('margin', props.margin, props.responsive, props.theme);
}, function (props) {
  return props.pad && (0, _utils.edgeStyle)('padding', props.pad, props.responsive, props.theme);
}, function (props) {
  return props.round && roundStyle;
}, function (props) {
  return props.wrapContents && wrapStyle;
}, function (props) {
  return props.overflow && 'overflow: ' + props.overflow + ';';
}, function (props) {
  return props.elevation && elevationStyle;
}, function (props) {
  return props.animation && animationStyle;
});

exports.default = StyledBox.extend(_templateObject, function (props) {
  return props.theme.box && props.theme.box.extend;
});


var gapStyle = /*#__PURE__*/(0, _styledComponents.css)(['', ''], function (_ref) {
  var direction = _ref.direction,
      gap = _ref.gap,
      responsive = _ref.responsive,
      edgeSize = _ref.theme.global.edgeSize;
  return direction === 'column' ? '\n      height: ' + edgeSize[gap] + ';\n      ' + (responsive ? (0, _utils.palm)('\n        height: ' + edgeSize.narrow[gap] + ';\n      ') : '') + '\n    ' : '\n      width: ' + edgeSize[gap] + ';\n      ' + (responsive && direction === 'row-responsive' ? (0, _utils.palm)('\n        width: auto;\n        height: ' + edgeSize.narrow[gap] + ';\n      ') : '') + '\n    ';
});

var StyledBoxGap = /*#__PURE__*/exports.StyledBoxGap = _styledComponents2.default.div.withConfig({
  displayName: 'StyledBox__StyledBoxGap'
})(['', ';'], function (props) {
  return props.gap && gapStyle;
});