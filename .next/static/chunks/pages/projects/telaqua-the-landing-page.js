_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/projects/telaqua-the-landing-page"],{

/***/ "./node_modules/gsap/dist/ScrollTrigger.js":
/*!*************************************************!*\
  !*** ./node_modules/gsap/dist/ScrollTrigger.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

	/*!
	 * ScrollTrigger 3.5.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2020, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/
	var gsap,
	    _coreInitted,
	    _win,
	    _doc,
	    _docEl,
	    _body,
	    _root,
	    _resizeDelay,
	    _raf,
	    _request,
	    _toArray,
	    _clamp,
	    _time2,
	    _syncInterval,
	    _refreshing,
	    _pointerIsDown,
	    _transformProp,
	    _i,
	    _prevWidth,
	    _prevHeight,
	    _autoRefresh,
	    _sort,
	    _limitCallbacks,
	    _startup = 1,
	    _proxies = [],
	    _scrollers = [],
	    _getTime = Date.now,
	    _time1 = _getTime(),
	    _lastScrollTime = 0,
	    _enabled = 1,
	    _passThrough = function _passThrough(v) {
	  return v;
	},
	    _windowExists = function _windowExists() {
	  return typeof window !== "undefined";
	},
	    _getGSAP = function _getGSAP() {
	  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
	},
	    _isViewport = function _isViewport(e) {
	  return !!~_root.indexOf(e);
	},
	    _getProxyProp = function _getProxyProp(element, property) {
	  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
	},
	    _getScrollFunc = function _getScrollFunc(element, _ref) {
	  var s = _ref.s,
	      sc = _ref.sc;

	  var i = _scrollers.indexOf(element),
	      offset = sc === _vertical.sc ? 1 : 2;

	  !~i && (i = _scrollers.push(element) - 1);
	  return _scrollers[i + offset] || (_scrollers[i + offset] = _getProxyProp(element, s) || (_isViewport(element) ? sc : function (value) {
	    return arguments.length ? element[s] = value : element[s];
	  }));
	},
	    _getBoundsFunc = function _getBoundsFunc(element) {
	  return _getProxyProp(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
	    _winOffsets.width = _win.innerWidth;
	    _winOffsets.height = _win.innerHeight;
	    return _winOffsets;
	  } : function () {
	    return _getBounds(element);
	  });
	},
	    _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref2) {
	  var d = _ref2.d,
	      d2 = _ref2.d2,
	      a = _ref2.a;
	  return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function () {
	    return a()[d];
	  } : function () {
	    return (isViewport ? _win["inner" + d2] : scroller["client" + d2]) || 0;
	  };
	},
	    _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
	  return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
	    return _winOffsets;
	  };
	},
	    _maxScroll = function _maxScroll(element, _ref3) {
	  var s = _ref3.s,
	      d2 = _ref3.d2,
	      d = _ref3.d,
	      a = _ref3.a;
	  return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? Math.max(_docEl[s], _body[s]) - (_win["inner" + d2] || _docEl["client" + d2] || _body["client" + d2]) : element[s] - element["offset" + d2];
	},
	    _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
	  for (var i = 0; i < _autoRefresh.length; i += 3) {
	    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
	  }
	},
	    _isString = function _isString(value) {
	  return typeof value === "string";
	},
	    _isFunction = function _isFunction(value) {
	  return typeof value === "function";
	},
	    _isNumber = function _isNumber(value) {
	  return typeof value === "number";
	},
	    _isObject = function _isObject(value) {
	  return typeof value === "object";
	},
	    _callIfFunc = function _callIfFunc(value) {
	  return _isFunction(value) && value();
	},
	    _combineFunc = function _combineFunc(f1, f2) {
	  return function () {
	    var result1 = _callIfFunc(f1),
	        result2 = _callIfFunc(f2);

	    return function () {
	      _callIfFunc(result1);

	      _callIfFunc(result2);
	    };
	  };
	},
	    _abs = Math.abs,
	    _scrollLeft = "scrollLeft",
	    _scrollTop = "scrollTop",
	    _left = "left",
	    _top = "top",
	    _right = "right",
	    _bottom = "bottom",
	    _width = "width",
	    _height = "height",
	    _Right = "Right",
	    _Left = "Left",
	    _Top = "Top",
	    _Bottom = "Bottom",
	    _padding = "padding",
	    _margin = "margin",
	    _Width = "Width",
	    _Height = "Height",
	    _px = "px",
	    _horizontal = {
	  s: _scrollLeft,
	  p: _left,
	  p2: _Left,
	  os: _right,
	  os2: _Right,
	  d: _width,
	  d2: _Width,
	  a: "x",
	  sc: function sc(value) {
	    return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
	  }
	},
	    _vertical = {
	  s: _scrollTop,
	  p: _top,
	  p2: _Top,
	  os: _bottom,
	  os2: _Bottom,
	  d: _height,
	  d2: _Height,
	  a: "y",
	  op: _horizontal,
	  sc: function sc(value) {
	    return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
	  }
	},
	    _getComputedStyle = function _getComputedStyle(element) {
	  return _win.getComputedStyle(element);
	},
	    _makePositionable = function _makePositionable(element) {
	  return element.style.position = _getComputedStyle(element).position === "absolute" ? "absolute" : "relative";
	},
	    _setDefaults = function _setDefaults(obj, defaults) {
	  for (var p in defaults) {
	    p in obj || (obj[p] = defaults[p]);
	  }

	  return obj;
	},
	    _getBounds = function _getBounds(element, withoutTransforms) {
	  var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
	    x: 0,
	    y: 0,
	    xPercent: 0,
	    yPercent: 0,
	    rotation: 0,
	    rotationX: 0,
	    rotationY: 0,
	    scale: 1,
	    skewX: 0,
	    skewY: 0
	  }).progress(1),
	      bounds = element.getBoundingClientRect();
	  tween && tween.progress(0).kill();
	  return bounds;
	},
	    _getSize = function _getSize(element, _ref4) {
	  var d2 = _ref4.d2;
	  return element["offset" + d2] || element["client" + d2] || 0;
	},
	    _getLabels = function _getLabels(animation) {
	  return function (value) {
	    var a = [],
	        labels = animation.labels,
	        duration = animation.duration(),
	        p;

	    for (p in labels) {
	      a.push(labels[p] / duration);
	    }

	    return gsap.utils.snap(a, value);
	  };
	},
	    _multiListener = function _multiListener(func, element, types, callback) {
	  return types.split(",").forEach(function (type) {
	    return func(element, type, callback);
	  });
	},
	    _addListener = function _addListener(element, type, func) {
	  return element.addEventListener(type, func, {
	    passive: true
	  });
	},
	    _removeListener = function _removeListener(element, type, func) {
	  return element.removeEventListener(type, func);
	},
	    _markerDefaults = {
	  startColor: "green",
	  endColor: "red",
	  indent: 0,
	  fontSize: "16px",
	  fontWeight: "normal"
	},
	    _defaults = {
	  toggleActions: "play",
	  anticipatePin: 0
	},
	    _keywords = {
	  top: 0,
	  left: 0,
	  center: 0.5,
	  bottom: 1,
	  right: 1
	},
	    _offsetToPx = function _offsetToPx(value, size) {
	  if (_isString(value)) {
	    var eqIndex = value.indexOf("="),
	        relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;

	    if (relative) {
	      value.indexOf("%") > eqIndex && (relative *= size / 100);
	      value = value.substr(0, eqIndex - 1);
	    }

	    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
	  }

	  return value;
	},
	    _createMarker = function _createMarker(type, name, container, direction, _ref5, offset, matchWidthEl) {
	  var startColor = _ref5.startColor,
	      endColor = _ref5.endColor,
	      fontSize = _ref5.fontSize,
	      indent = _ref5.indent,
	      fontWeight = _ref5.fontWeight;

	  var e = _doc.createElement("div"),
	      useFixedPosition = _isViewport(container) || _getProxyProp(container, "pinType") === "fixed",
	      isScroller = type.indexOf("scroller") !== -1,
	      parent = useFixedPosition ? _body : container,
	      isStart = type.indexOf("start") !== -1,
	      color = isStart ? startColor : endColor,
	      css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

	  css += "position:" + (isScroller && useFixedPosition ? "fixed;" : "absolute;");
	  (isScroller || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
	  matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
	  e._isStart = isStart;
	  e.setAttribute("class", "gsap-marker-" + type);
	  e.style.cssText = css;
	  e.innerText = name || name === 0 ? type + "-" + name : type;
	  parent.insertBefore(e, parent.children[0]);
	  e._offset = e["offset" + direction.op.d2];

	  _positionMarker(e, 0, direction, isStart);

	  return e;
	},
	    _positionMarker = function _positionMarker(marker, start, direction, flipped) {
	  var vars = {
	    display: "block"
	  },
	      side = direction[flipped ? "os2" : "p2"],
	      oppositeSide = direction[flipped ? "p2" : "os2"];
	  marker._isFlipped = flipped;
	  vars[direction.a + "Percent"] = flipped ? -100 : 0;
	  vars[direction.a] = flipped ? 1 : 0;
	  vars["border" + side + _Width] = 1;
	  vars["border" + oppositeSide + _Width] = 0;
	  vars[direction.p] = start;
	  gsap.set(marker, vars);
	},
	    _triggers = [],
	    _ids = {},
	    _sync = function _sync() {
	  return _request || (_request = _raf(_updateAll));
	},
	    _onScroll = function _onScroll() {
	  if (!_request) {
	    _request = _raf(_updateAll);
	    _lastScrollTime || _dispatch("scrollStart");
	    _lastScrollTime = _getTime();
	  }
	},
	    _onResize = function _onResize() {
	  return !_refreshing && _resizeDelay.restart(true);
	},
	    _listeners = {},
	    _emptyArray = [],
	    _media = [],
	    _creatingMedia,
	    _lastMediaTick,
	    _onMediaChange = function _onMediaChange(e) {
	  var tick = gsap.ticker.frame,
	      matches = [],
	      i = 0,
	      index;

	  if (_lastMediaTick !== tick || _startup) {
	    _revertAll();

	    for (; i < _media.length; i += 4) {
	      index = _win.matchMedia(_media[i]).matches;

	      if (index !== _media[i + 3]) {
	        _media[i + 3] = index;
	        index ? matches.push(i) : _revertAll(1, _media[i]) || _isFunction(_media[i + 2]) && _media[i + 2]();
	      }
	    }

	    _revertRecorded();

	    for (i = 0; i < matches.length; i++) {
	      index = matches[i];
	      _creatingMedia = _media[index];
	      _media[index + 2] = _media[index + 1](e);
	    }

	    _creatingMedia = 0;

	    _refreshAll(0, 1);

	    _lastMediaTick = tick;

	    _dispatch("matchMedia");
	  }
	},
	    _softRefresh = function _softRefresh() {
	  return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
	},
	    _dispatch = function _dispatch(type) {
	  return _listeners[type] && _listeners[type].map(function (f) {
	    return f();
	  }) || _emptyArray;
	},
	    _savedStyles = [],
	    _revertRecorded = function _revertRecorded(media) {
	  for (var i = 0; i < _savedStyles.length; i += 4) {
	    if (!media || _savedStyles[i + 3] === media) {
	      _savedStyles[i].style.cssText = _savedStyles[i + 1];
	      _savedStyles[i + 2].uncache = 1;
	    }
	  }
	},
	    _revertAll = function _revertAll(kill, media) {
	  var trigger;

	  for (_i = 0; _i < _triggers.length; _i++) {
	    trigger = _triggers[_i];

	    if (!media || trigger.media === media) {
	      if (kill) {
	        trigger.kill(1);
	      } else {
	        trigger.scroll.rec || (trigger.scroll.rec = trigger.scroll());
	        trigger.revert();
	      }
	    }
	  }

	  _revertRecorded(media);

	  media || _dispatch("revert");
	},
	    _refreshAll = function _refreshAll(force, skipRevert) {
	  if (_lastScrollTime && !force) {
	    _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

	    return;
	  }

	  var refreshInits = _dispatch("refreshInit");

	  _sort && ScrollTrigger.sort();
	  skipRevert || _revertAll();

	  for (_i = 0; _i < _triggers.length; _i++) {
	    _triggers[_i].refresh();
	  }

	  refreshInits.forEach(function (result) {
	    return result && result.render && result.render(-1);
	  });
	  _i = _triggers.length;

	  while (_i--) {
	    _triggers[_i].scroll.rec = 0;
	  }

	  _resizeDelay.pause();

	  _dispatch("refresh");
	},
	    _lastScroll = 0,
	    _direction = 1,
	    _updateAll = function _updateAll() {
	  var l = _triggers.length,
	      time = _getTime(),
	      recordVelocity = time - _time1 >= 50,
	      scroll = l && _triggers[0].scroll();

	  _direction = _lastScroll > scroll ? -1 : 1;
	  _lastScroll = scroll;

	  if (recordVelocity) {
	    if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
	      _lastScrollTime = 0;

	      _dispatch("scrollEnd");
	    }

	    _time2 = _time1;
	    _time1 = time;
	  }

	  if (_direction < 0) {
	    _i = l;

	    while (_i--) {
	      _triggers[_i] && _triggers[_i].update(0, recordVelocity);
	    }

	    _direction = 1;
	  } else {
	    for (_i = 0; _i < l; _i++) {
	      _triggers[_i] && _triggers[_i].update(0, recordVelocity);
	    }
	  }

	  _request = 0;
	},
	    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float"],
	    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
	    _swapPinOut = function _swapPinOut(pin, spacer, state) {
	  _setState(state);

	  if (pin.parentNode === spacer) {
	    var parent = spacer.parentNode;

	    if (parent) {
	      parent.insertBefore(pin, spacer);
	      parent.removeChild(spacer);
	    }
	  }
	},
	    _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
	  if (pin.parentNode !== spacer) {
	    var i = _propNamesToCopy.length,
	        spacerStyle = spacer.style,
	        pinStyle = pin.style,
	        p;

	    while (i--) {
	      p = _propNamesToCopy[i];
	      spacerStyle[p] = cs[p];
	    }

	    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
	    cs.display === "inline" && (spacerStyle.display = "inline-block");
	    pinStyle[_bottom] = pinStyle[_right] = "auto";
	    spacerStyle.overflow = "visible";
	    spacerStyle.boxSizing = "border-box";
	    spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
	    spacerStyle[_height] = _getSize(pin, _vertical) + _px;
	    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

	    _setState(spacerState);

	    pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
	    pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
	    pinStyle[_padding] = cs[_padding];
	    pin.parentNode.insertBefore(spacer, pin);
	    spacer.appendChild(pin);
	  }
	},
	    _capsExp = /([A-Z])/g,
	    _setState = function _setState(state) {
	  if (state) {
	    var style = state.t.style,
	        l = state.length,
	        i = 0,
	        p,
	        value;

	    for (; i < l; i += 2) {
	      value = state[i + 1];
	      p = state[i];

	      if (value) {
	        style[p] = value;
	      } else if (style[p]) {
	        style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
	      }
	    }
	  }
	},
	    _getState = function _getState(element) {
	  var l = _stateProps.length,
	      style = element.style,
	      state = [],
	      i = 0;

	  for (; i < l; i++) {
	    state.push(_stateProps[i], style[_stateProps[i]]);
	  }

	  state.t = element;
	  return state;
	},
	    _copyState = function _copyState(state, override, omitOffsets) {
	  var result = [],
	      l = state.length,
	      i = omitOffsets ? 8 : 0,
	      p;

	  for (; i < l; i += 2) {
	    p = state[i];
	    result.push(p, p in override ? override[p] : state[i + 1]);
	  }

	  result.t = state.t;
	  return result;
	},
	    _winOffsets = {
	  left: 0,
	  top: 0
	},
	    _parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax) {
	  _isFunction(value) && (value = value(self));

	  if (_isString(value) && value.substr(0, 3) === "max") {
	    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
	  }

	  if (!_isNumber(value)) {
	    _isFunction(trigger) && (trigger = trigger(self));

	    var element = _toArray(trigger)[0] || _body,
	        bounds = _getBounds(element) || {},
	        offsets = value.split(" "),
	        localOffset,
	        globalOffset,
	        display;

	    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
	      display = element.style.display;
	      element.style.display = "block";
	      bounds = _getBounds(element);
	      display ? element.style.display = display : element.style.removeProperty("display");
	    }

	    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
	    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
	    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
	    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
	    scrollerSize -= scrollerSize - globalOffset;
	  } else if (markerScroller) {
	    _positionMarker(markerScroller, scrollerSize, direction, true);
	  }

	  if (marker) {
	    var position = value + scrollerSize,
	        isStart = marker._isStart;
	    scrollerMax = "scroll" + direction.d2;

	    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[scrollerMax], _docEl[scrollerMax]) : marker.parentNode[scrollerMax]) <= position + 1);

	    if (useFixedPosition) {
	      scrollerBounds = _getBounds(markerScroller);
	      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
	    }
	  }

	  return Math.round(value);
	},
	    _prefixExp = /(?:webkit|moz|length|cssText)/i,
	    _reparent = function _reparent(element, parent, top, left) {
	  if (element.parentNode !== parent) {
	    var style = element.style,
	        p,
	        cs;

	    if (parent === _body) {
	      element._stOrig = style.cssText;
	      cs = _getComputedStyle(element);

	      for (p in cs) {
	        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
	          style[p] = cs[p];
	        }
	      }

	      style.top = top;
	      style.left = left;
	    } else {
	      style.cssText = element._stOrig;
	    }

	    gsap.core.getCache(element).uncache = 1;
	    parent.appendChild(element);
	  }
	},
	    _getTweenCreator = function _getTweenCreator(scroller, direction) {
	  var getScroll = _getScrollFunc(scroller, direction),
	      prop = "_scroll" + direction.p2,
	      lastScroll1,
	      lastScroll2,
	      getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
	    var tween = getTween.tween,
	        onComplete = vars.onComplete,
	        modifiers = {};
	    tween && tween.kill();
	    lastScroll1 = Math.round(initialValue);
	    vars[prop] = scrollTo;
	    vars.modifiers = modifiers;

	    modifiers[prop] = function (value) {
	      value = Math.round(getScroll());

	      if (value !== lastScroll1 && value !== lastScroll2) {
	        tween.kill();
	        getTween.tween = 0;
	      } else {
	        value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
	      }

	      lastScroll2 = lastScroll1;
	      return lastScroll1 = Math.round(value);
	    };

	    vars.onComplete = function () {
	      getTween.tween = 0;
	      onComplete && onComplete.call(tween);
	    };

	    tween = getTween.tween = gsap.to(scroller, vars);
	    return tween;
	  };

	  scroller[prop] = getScroll;
	  return getTween;
	};

	_horizontal.op = _vertical;
	var ScrollTrigger = function () {
	  function ScrollTrigger(vars, animation) {
	    _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
	    this.init(vars, animation);
	  }

	  var _proto = ScrollTrigger.prototype;

	  _proto.init = function init(vars, animation) {
	    this.progress = 0;
	    this.vars && this.kill(1);

	    if (!_enabled) {
	      this.update = this.refresh = this.kill = _passThrough;
	      return;
	    }

	    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
	      trigger: vars
	    } : vars, _defaults);

	    var direction = vars.horizontal ? _horizontal : _vertical,
	        _vars = vars,
	        onUpdate = _vars.onUpdate,
	        toggleClass = _vars.toggleClass,
	        id = _vars.id,
	        onToggle = _vars.onToggle,
	        onRefresh = _vars.onRefresh,
	        scrub = _vars.scrub,
	        trigger = _vars.trigger,
	        pin = _vars.pin,
	        pinSpacing = _vars.pinSpacing,
	        invalidateOnRefresh = _vars.invalidateOnRefresh,
	        anticipatePin = _vars.anticipatePin,
	        onScrubComplete = _vars.onScrubComplete,
	        onSnapComplete = _vars.onSnapComplete,
	        once = _vars.once,
	        snap = _vars.snap,
	        pinReparent = _vars.pinReparent,
	        isToggle = !scrub && scrub !== 0,
	        scroller = _toArray(vars.scroller || _win)[0],
	        scrollerCache = gsap.core.getCache(scroller),
	        isViewport = _isViewport(scroller),
	        useFixedPosition = "pinType" in vars ? vars.pinType === "fixed" : isViewport || _getProxyProp(scroller, "pinType") === "fixed",
	        callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
	        toggleActions = isToggle && vars.toggleActions.split(" "),
	        markers = "markers" in vars ? vars.markers : _defaults.markers,
	        borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
	        self = this,
	        onRefreshInit = vars.onRefreshInit && function () {
	      return vars.onRefreshInit(self);
	    },
	        getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
	        getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
	        tweenTo,
	        pinCache,
	        snapFunc,
	        isReverted,
	        scroll1,
	        scroll2,
	        start,
	        end,
	        markerStart,
	        markerEnd,
	        markerStartTrigger,
	        markerEndTrigger,
	        markerVars,
	        change,
	        pinOriginalState,
	        pinActiveState,
	        pinState,
	        spacer,
	        offset,
	        pinGetter,
	        pinSetter,
	        pinStart,
	        pinChange,
	        spacingStart,
	        spacerState,
	        markerStartSetter,
	        markerEndSetter,
	        cs,
	        snap1,
	        snap2,
	        scrubTween,
	        scrubSmooth,
	        snapDurClamp,
	        snapDelayedCall,
	        prevProgress,
	        prevScroll,
	        prevAnimProgress;

	    self.media = _creatingMedia;
	    anticipatePin *= 45;

	    _triggers.push(self);

	    self.scroller = scroller;
	    self.scroll = _getScrollFunc(scroller, direction);
	    scroll1 = self.scroll();
	    self.vars = vars;
	    animation = animation || vars.animation;
	    "refreshPriority" in vars && (_sort = 1);
	    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
	      top: _getTweenCreator(scroller, _vertical),
	      left: _getTweenCreator(scroller, _horizontal)
	    };
	    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

	    if (animation) {
	      animation.vars.lazy = false;
	      animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.render(0, true, true);
	      self.animation = animation.pause();
	      animation.scrollTrigger = self;
	      scrubSmooth = _isNumber(scrub) && scrub;
	      scrubSmooth && (scrubTween = gsap.to(animation, {
	        ease: "power3",
	        duration: scrubSmooth,
	        onComplete: function onComplete() {
	          return onScrubComplete && onScrubComplete(self);
	        }
	      }));
	      snap1 = 0;
	      id || (id = animation.vars.id);
	    }

	    if (snap) {
	      _isObject(snap) || (snap = {
	        snapTo: snap
	      });
	      gsap.set(isViewport ? [_body, _docEl] : scroller, {
	        scrollBehavior: "auto"
	      });
	      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getLabels(animation) : gsap.utils.snap(snap.snapTo);
	      snapDurClamp = snap.duration || {
	        min: 0.1,
	        max: 2
	      };
	      snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
	      snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
	        if (Math.abs(self.getVelocity()) < 10 && !_pointerIsDown) {
	          var totalProgress = animation && !isToggle ? animation.totalProgress() : self.progress,
	              velocity = (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0,
	              change1 = _abs(velocity / 2) * velocity / 0.185,
	              naturalEnd = totalProgress + change1,
	              endValue = _clamp(0, 1, snapFunc(naturalEnd, self)),
	              scroll = self.scroll(),
	              endScroll = Math.round(start + endValue * change),
	              tween = tweenTo.tween;

	          if (scroll <= end && scroll >= start && endScroll !== scroll) {
	            if (tween && !tween._initted && tween.data <= Math.abs(endScroll - scroll)) {
	              return;
	            }

	            tweenTo(endScroll, {
	              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
	              ease: snap.ease || "power3",
	              data: Math.abs(endScroll - scroll),
	              onComplete: function onComplete() {
	                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
	                onSnapComplete && onSnapComplete(self);
	              }
	            }, scroll, change1 * change, endScroll - scroll - change1 * change);
	          }
	        } else if (self.isActive) {
	          snapDelayedCall.restart(true);
	        }
	      }).pause();
	    }

	    id && (_ids[id] = self);
	    trigger = self.trigger = _toArray(trigger || pin)[0];
	    pin = pin === true ? trigger : _toArray(pin)[0];
	    _isString(toggleClass) && (toggleClass = {
	      targets: trigger,
	      className: toggleClass
	    });

	    if (pin) {
	      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
	      self.pin = pin;
	      vars.force3D !== false && gsap.set(pin, {
	        force3D: true
	      });
	      pinCache = gsap.core.getCache(pin);

	      if (!pinCache.spacer) {
	        pinCache.spacer = spacer = _doc.createElement("div");
	        spacer.setAttribute("class", "pin-spacer" + (id ? " pin-spacer-" + id : ""));
	        pinCache.pinState = pinOriginalState = _getState(pin);
	      } else {
	        pinOriginalState = pinCache.pinState;
	      }

	      self.spacer = spacer = pinCache.spacer;
	      cs = _getComputedStyle(pin);
	      spacingStart = cs[pinSpacing + direction.os2];
	      pinGetter = gsap.getProperty(pin);
	      pinSetter = gsap.quickSetter(pin, direction.a, _px);

	      _swapPinIn(pin, spacer, cs);

	      pinState = _getState(pin);
	    }

	    if (markers) {
	      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
	      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
	      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
	      offset = markerStartTrigger["offset" + direction.op.d2];
	      markerStart = _createMarker("start", id, scroller, direction, markerVars, offset);
	      markerEnd = _createMarker("end", id, scroller, direction, markerVars, offset);

	      if (!useFixedPosition) {
	        _makePositionable(scroller);

	        gsap.set([markerStartTrigger, markerEndTrigger], {
	          force3D: true
	        });
	        markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
	        markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
	      }
	    }

	    self.revert = function (revert) {
	      var r = revert !== false || !self.enabled,
	          prevRefreshing = _refreshing;

	      if (r !== isReverted) {
	        if (r) {
	          prevScroll = Math.max(self.scroll(), self.scroll.rec || 0);
	          prevProgress = self.progress;
	          prevAnimProgress = animation && animation.progress();
	        }

	        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
	          return m.style.display = r ? "none" : "block";
	        });
	        r && (_refreshing = 1);
	        self.update(r);
	        _refreshing = prevRefreshing;
	        pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState));
	        isReverted = r;
	      }
	    };

	    self.refresh = function (soft) {
	      if (_refreshing || !self.enabled) {
	        return;
	      }

	      if (pin && soft && _lastScrollTime) {
	        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

	        return;
	      }

	      _refreshing = 1;
	      scrubTween && scrubTween.kill();
	      invalidateOnRefresh && animation && animation.progress(0).invalidate();
	      isReverted || self.revert();

	      var size = getScrollerSize(),
	          scrollerBounds = getScrollerOffsets(),
	          max = _maxScroll(scroller, direction),
	          offset = 0,
	          otherPinOffset = 0,
	          parsedEnd = vars.end,
	          parsedEndTrigger = vars.endTrigger || trigger,
	          parsedStart = vars.start || (vars.start === 0 ? 0 : pin || !trigger ? "0 0" : "0 100%"),
	          triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
	          i = triggerIndex,
	          cs,
	          bounds,
	          scroll,
	          isVertical,
	          override,
	          curTrigger,
	          curPin,
	          oppositeScroll;

	      while (i--) {
	        curPin = _triggers[i].pin;
	        curPin && (curPin === trigger || curPin === pin) && _triggers[i].revert();
	      }

	      start = _parsePosition(parsedStart, trigger, size, direction, self.scroll(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max) || (pin ? -0.001 : 0);
	      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));

	      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
	        if (~parsedEnd.indexOf(" ")) {
	          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
	        } else {
	          offset = _offsetToPx(parsedEnd.substr(2), size);
	          parsedEnd = _isString(parsedStart) ? parsedStart : start + offset;
	          parsedEndTrigger = trigger;
	        }
	      }

	      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, self.scroll() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max)) || -0.001;
	      change = end - start || (start -= 0.01) && 0.001;
	      offset = 0;
	      i = triggerIndex;

	      while (i--) {
	        curTrigger = _triggers[i];
	        curPin = curTrigger.pin;

	        if (curPin && curTrigger.start - curTrigger._pinPush < start) {
	          cs = curTrigger.end - curTrigger.start;
	          curPin === trigger && (offset += cs);
	          curPin === pin && (otherPinOffset += cs);
	        }
	      }

	      start += offset;
	      end += offset;
	      self._pinPush = otherPinOffset;

	      if (markerStart && offset) {
	        cs = {};
	        cs[direction.a] = "+=" + offset;
	        gsap.set([markerStart, markerEnd], cs);
	      }

	      if (pin) {
	        cs = _getComputedStyle(pin);
	        isVertical = direction === _vertical;
	        scroll = self.scroll();
	        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
	        !max && end > 1 && ((isViewport ? _body : scroller).style["overflow-" + direction.a] = "scroll");

	        _swapPinIn(pin, spacer, cs);

	        pinState = _getState(pin);
	        bounds = _getBounds(pin, true);
	        oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();

	        if (pinSpacing) {
	          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
	          spacerState.t = spacer;
	          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
	          i && spacerState.push(direction.d, i + _px);

	          _setState(spacerState);

	          useFixedPosition && self.scroll(prevScroll);
	        }

	        if (useFixedPosition) {
	          override = {
	            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
	            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
	            boxSizing: "border-box",
	            position: "fixed"
	          };
	          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
	          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
	          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
	          override[_padding] = cs[_padding];
	          override[_padding + _Top] = cs[_padding + _Top];
	          override[_padding + _Right] = cs[_padding + _Right];
	          override[_padding + _Bottom] = cs[_padding + _Bottom];
	          override[_padding + _Left] = cs[_padding + _Left];
	          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
	        }

	        if (animation) {
	          animation.progress(1, true);
	          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
	          change !== pinChange && pinActiveState.splice(pinActiveState.length - 2, 2);
	          animation.progress(0, true);
	        } else {
	          pinChange = change;
	        }
	      } else if (trigger && self.scroll()) {
	        bounds = trigger.parentNode;

	        while (bounds && bounds !== _body) {
	          if (bounds._pinOffset) {
	            start -= bounds._pinOffset;
	            end -= bounds._pinOffset;
	          }

	          bounds = bounds.parentNode;
	        }
	      }

	      for (i = 0; i < triggerIndex; i++) {
	        curTrigger = _triggers[i].pin;
	        curTrigger && (curTrigger === trigger || curTrigger === pin) && _triggers[i].revert(false);
	      }

	      self.start = start;
	      self.end = end;
	      scroll1 = scroll2 = self.scroll();
	      scroll1 < prevScroll && self.scroll(prevScroll);
	      self.revert(false);
	      _refreshing = 0;
	      prevAnimProgress && isToggle && animation.progress(prevAnimProgress, true);

	      if (prevProgress !== self.progress) {
	        scrubTween && animation.totalProgress(prevProgress, true);
	        self.progress = prevProgress;
	        self.update();
	      }

	      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
	      onRefresh && onRefresh(self);
	    };

	    self.getVelocity = function () {
	      return (self.scroll() - scroll2) / (_getTime() - _time2) * 1000 || 0;
	    };

	    self.update = function (reset, recordVelocity) {
	      var scroll = self.scroll(),
	          p = reset ? 0 : (scroll - start) / change,
	          clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
	          prevProgress = self.progress,
	          isActive,
	          wasActive,
	          toggleState,
	          action,
	          stateChanged,
	          toggled;

	      if (recordVelocity) {
	        scroll2 = scroll1;
	        scroll1 = scroll;

	        if (snap) {
	          snap2 = snap1;
	          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
	        }
	      }

	      anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 0.0001);

	      if (clipped !== prevProgress && self.enabled) {
	        isActive = self.isActive = !!clipped && clipped < 1;
	        wasActive = !!prevProgress && prevProgress < 1;
	        toggled = isActive !== wasActive;
	        stateChanged = toggled || !!clipped !== !!prevProgress;
	        self.direction = clipped > prevProgress ? 1 : -1;
	        self.progress = clipped;

	        if (!isToggle) {
	          if (scrubTween && !_refreshing && !_startup) {
	            scrubTween.vars.totalProgress = clipped;
	            scrubTween.invalidate().restart();
	          } else if (animation) {
	            animation.totalProgress(clipped, !!_refreshing);
	          }
	        }

	        if (pin) {
	          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

	          if (!useFixedPosition) {
	            pinSetter(pinStart + pinChange * clipped);
	          } else if (stateChanged) {
	            action = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);

	            if (pinReparent) {
	              if (!reset && (isActive || action)) {
	                var bounds = _getBounds(pin, true),
	                    _offset = scroll - start;

	                _reparent(pin, _body, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
	              } else {
	                _reparent(pin, spacer);
	              }
	            }

	            _setState(isActive || action ? pinActiveState : pinState);

	            pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !action ? pinChange : 0));
	          }
	        }

	        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
	        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
	          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
	        });
	        onUpdate && !isToggle && !reset && onUpdate(self);

	        if (stateChanged && !_refreshing) {
	          toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3;

	          if (isToggle) {
	            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];

	            if (animation && (action === "complete" || action === "reset" || action in animation)) {
	              if (action === "complete") {
	                animation.pause().totalProgress(1);
	              } else if (action === "reset") {
	                animation.restart(true).pause();
	              } else {
	                animation[action]();
	              }
	            }

	            onUpdate && onUpdate(self);
	          }

	          if (toggled || !_limitCallbacks) {
	            onToggle && toggled && onToggle(self);
	            callbacks[toggleState] && callbacks[toggleState](self);
	            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);

	            if (!toggled) {
	              toggleState = clipped === 1 ? 1 : 3;
	              callbacks[toggleState] && callbacks[toggleState](self);
	            }
	          }
	        } else if (isToggle && onUpdate && !_refreshing) {
	          onUpdate(self);
	        }
	      }

	      if (markerEndSetter) {
	        markerStartSetter(scroll + (markerStartTrigger._isFlipped ? 1 : 0));
	        markerEndSetter(scroll);
	      }
	    };

	    self.enable = function () {
	      if (!self.enabled) {
	        self.enabled = true;

	        _addListener(scroller, "resize", _onResize);

	        _addListener(scroller, "scroll", _onScroll);

	        onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);
	        !animation || !animation.add ? self.refresh() : gsap.delayedCall(0.01, function () {
	          return start || end || self.refresh();
	        }) && (change = 0.01) && (start = end = 0);
	      }
	    };

	    self.disable = function (reset, allowAnimation) {
	      if (self.enabled) {
	        reset !== false && self.revert();
	        self.enabled = self.isActive = false;
	        allowAnimation || scrubTween && scrubTween.pause();
	        prevScroll = 0;
	        pinCache && (pinCache.uncache = 1);
	        onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);

	        if (snapDelayedCall) {
	          snapDelayedCall.pause();
	          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
	        }

	        if (!isViewport) {
	          var i = _triggers.length;

	          while (i--) {
	            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
	              return;
	            }
	          }

	          _removeListener(scroller, "resize", _onResize);

	          _removeListener(scroller, "scroll", _onScroll);
	        }
	      }
	    };

	    self.kill = function (revert, allowAnimation) {
	      self.disable(revert, allowAnimation);
	      id && delete _ids[id];

	      var i = _triggers.indexOf(self);

	      _triggers.splice(i, 1);

	      i === _i && _direction > 0 && _i--;

	      if (animation) {
	        animation.scrollTrigger = null;
	        revert && animation.render(-1);
	        allowAnimation || animation.kill();
	      }

	      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
	        return m.parentNode.removeChild(m);
	      });
	      pinCache && (pinCache.uncache = 1);
	    };

	    self.enable();
	  };

	  ScrollTrigger.register = function register(core) {
	    if (!_coreInitted) {
	      gsap = core || _getGSAP();

	      if (_windowExists() && window.document) {
	        _win = window;
	        _doc = document;
	        _docEl = _doc.documentElement;
	        _body = _doc.body;
	      }

	      if (gsap) {
	        _toArray = gsap.utils.toArray;
	        _clamp = gsap.utils.clamp;
	        gsap.core.globals("ScrollTrigger", ScrollTrigger);

	        if (_body) {
	          _raf = _win.requestAnimationFrame || function (f) {
	            return setTimeout(f, 16);
	          };

	          _addListener(_win, "mousewheel", _onScroll);

	          _root = [_win, _doc, _docEl, _body];

	          _addListener(_doc, "scroll", _onScroll);

	          var bodyStyle = _body.style,
	              border = bodyStyle.borderTop,
	              bounds;
	          bodyStyle.borderTop = "1px solid #000";
	          bounds = _getBounds(_body);
	          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
	          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
	          border ? bodyStyle.borderTop = border : bodyStyle.removeProperty("border-top");
	          _syncInterval = setInterval(_sync, 200);
	          gsap.delayedCall(0.5, function () {
	            return _startup = 0;
	          });

	          _addListener(_doc, "touchcancel", _passThrough);

	          _addListener(_body, "touchstart", _passThrough);

	          _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", function () {
	            return _pointerIsDown = 1;
	          });

	          _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", function () {
	            return _pointerIsDown = 0;
	          });

	          _transformProp = gsap.utils.checkPrefix("transform");

	          _stateProps.push(_transformProp);

	          _coreInitted = _getTime();
	          _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
	          _autoRefresh = [_doc, "visibilitychange", function () {
	            var w = _win.innerWidth,
	                h = _win.innerHeight;

	            if (_doc.hidden) {
	              _prevWidth = w;
	              _prevHeight = h;
	            } else if (_prevWidth !== w || _prevHeight !== h) {
	              _onResize();
	            }
	          }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", function () {
	            return _lastScrollTime || _refreshAll();
	          }, _win, "resize", _onResize];

	          _iterateAutoRefresh(_addListener);
	        }
	      }
	    }

	    return _coreInitted;
	  };

	  ScrollTrigger.defaults = function defaults(config) {
	    for (var p in config) {
	      _defaults[p] = config[p];
	    }
	  };

	  ScrollTrigger.kill = function kill() {
	    _enabled = 0;

	    _triggers.slice(0).forEach(function (trigger) {
	      return trigger.kill(1);
	    });
	  };

	  ScrollTrigger.config = function config(vars) {
	    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
	    var ms = vars.syncInterval;
	    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
	    "autoRefreshEvents" in vars && (_iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none"));
	  };

	  ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
	    var t = _toArray(target)[0];

	    _isViewport(t) ? _proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _proxies.unshift(t, vars);
	  };

	  ScrollTrigger.matchMedia = function matchMedia(vars) {
	    var mq, p, i, func, result;

	    for (p in vars) {
	      i = _media.indexOf(p);
	      func = vars[p];
	      _creatingMedia = p;

	      if (p === "all") {
	        func();
	      } else {
	        mq = _win.matchMedia(p);

	        if (mq) {
	          mq.matches && (result = func());

	          if (~i) {
	            _media[i + 1] = _combineFunc(_media[i + 1], func);
	            _media[i + 2] = _combineFunc(_media[i + 2], result);
	          } else {
	            i = _media.length;

	            _media.push(p, func, result);

	            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
	          }

	          _media[i + 3] = mq.matches;
	        }
	      }

	      _creatingMedia = 0;
	    }

	    return _media;
	  };

	  ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
	    query || (_media.length = 0);
	    query = _media.indexOf(query);
	    query >= 0 && _media.splice(query, 4);
	  };

	  return ScrollTrigger;
	}();
	ScrollTrigger.version = "3.5.1";

	ScrollTrigger.saveStyles = function (targets) {
	  return targets ? _toArray(targets).forEach(function (target) {
	    var i = _savedStyles.indexOf(target);

	    i >= 0 && _savedStyles.splice(i, 4);

	    _savedStyles.push(target, target.style.cssText, gsap.core.getCache(target), _creatingMedia);
	  }) : _savedStyles;
	};

	ScrollTrigger.revert = function (soft, media) {
	  return _revertAll(!soft, media);
	};

	ScrollTrigger.create = function (vars, animation) {
	  return new ScrollTrigger(vars, animation);
	};

	ScrollTrigger.refresh = function (safe) {
	  return safe ? _onResize() : _refreshAll(true);
	};

	ScrollTrigger.update = _updateAll;

	ScrollTrigger.maxScroll = function (element, horizontal) {
	  return _maxScroll(element, horizontal ? _horizontal : _vertical);
	};

	ScrollTrigger.getScrollFunc = function (element, horizontal) {
	  return _getScrollFunc(_toArray(element)[0], horizontal ? _horizontal : _vertical);
	};

	ScrollTrigger.getById = function (id) {
	  return _ids[id];
	};

	ScrollTrigger.getAll = function () {
	  return _triggers.slice(0);
	};

	ScrollTrigger.isScrolling = function () {
	  return !!_lastScrollTime;
	};

	ScrollTrigger.addEventListener = function (type, callback) {
	  var a = _listeners[type] || (_listeners[type] = []);
	  ~a.indexOf(callback) || a.push(callback);
	};

	ScrollTrigger.removeEventListener = function (type, callback) {
	  var a = _listeners[type],
	      i = a && a.indexOf(callback);
	  i >= 0 && a.splice(i, 1);
	};

	ScrollTrigger.batch = function (targets, vars) {
	  var result = [],
	      varsCopy = {},
	      interval = vars.interval || 0.016,
	      batchMax = vars.batchMax || 1e9,
	      proxyCallback = function proxyCallback(type, callback) {
	    var elements = [],
	        triggers = [],
	        delay = gsap.delayedCall(interval, function () {
	      callback(elements, triggers);
	      elements = [];
	      triggers = [];
	    }).pause();
	    return function (self) {
	      elements.length || delay.restart(true);
	      elements.push(self.trigger);
	      triggers.push(self);
	      batchMax <= elements.length && delay.progress(1);
	    };
	  },
	      p;

	  for (p in vars) {
	    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
	  }

	  if (_isFunction(batchMax)) {
	    batchMax = batchMax();

	    _addListener(ScrollTrigger, "refresh", function () {
	      return batchMax = vars.batchMax();
	    });
	  }

	  _toArray(targets).forEach(function (target) {
	    var config = {};

	    for (p in varsCopy) {
	      config[p] = varsCopy[p];
	    }

	    config.trigger = target;
	    result.push(ScrollTrigger.create(config));
	  });

	  return result;
	};

	ScrollTrigger.sort = function (func) {
	  return _triggers.sort(func || function (a, b) {
	    return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
	  });
	};

	_getGSAP() && gsap.registerPlugin(ScrollTrigger);

	exports.ScrollTrigger = ScrollTrigger;
	exports.default = ScrollTrigger;

	Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/gsap/dist/gsap.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/dist/gsap.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, (function (exports) { 'use strict';

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  /*!
   * GSAP 3.5.1
   * https://greensock.com
   *
   * @license Copyright 2008-2020, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
      _defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
  },
      _bigNum = 1e8,
      _tinyNum = 1 / _bigNum,
      _2PI = Math.PI * 2,
      _HALF_PI = _2PI / 4,
      _gsID = 0,
      _sqrt = Math.sqrt,
      _cos = Math.cos,
      _sin = Math.sin,
      _isString = function _isString(value) {
    return typeof value === "string";
  },
      _isFunction = function _isFunction(value) {
    return typeof value === "function";
  },
      _isNumber = function _isNumber(value) {
    return typeof value === "number";
  },
      _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
  },
      _isObject = function _isObject(value) {
    return typeof value === "object";
  },
      _isNotFalse = function _isNotFalse(value) {
    return value !== false;
  },
      _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
      _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
  },
      _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
      _isArray = Array.isArray,
      _strictNumExp = /(?:-?\.?\d|\.)+/gi,
      _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
      _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      _complexStringNumExp = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
      _relExp = /[+-]=-?[\.\d]+/,
      _delimitedValueExp = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
      _globalTimeline,
      _win,
      _coreInitted,
      _doc,
      _globals = {},
      _installScope = {},
      _coreReady,
      _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  },
      _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  },
      _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
  },
      _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  },
      _emptyFunc = function _emptyFunc() {
    return 0;
  },
      _reservedProps = {},
      _lazyTweens = [],
      _lazyLookup = {},
      _lastRenderedFrame,
      _plugins = {},
      _effects = {},
      _nextGCFrame = 30,
      _harnessPlugins = [],
      _callbackNames = "",
      _harness = function _harness(targets) {
    var target = targets[0],
        harnessPlugin,
        i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);

    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i = _harnessPlugins.length;

      while (i-- && !_harnessPlugins[i].targetTest(target)) {}

      harnessPlugin = _harnessPlugins[i];
    }

    i = targets.length;

    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }

    return targets;
  },
      _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  },
      _getProperty = function _getProperty(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  },
      _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  },
      _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  },
      _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    var l = toFind.length,
        i = 0;

    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

    return i < l;
  },
      _parseVars = function _parseVars(params, type, parent) {
    var isLegacy = _isNumber(params[1]),
        varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
        vars = params[varsIndex],
        irVars;

    isLegacy && (vars.duration = params[1]);
    vars.parent = parent;

    if (type) {
      irVars = vars;

      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }

      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }

    return vars;
  },
      _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length,
        a = _lazyTweens.slice(0),
        i,
        tween;

    _lazyLookup = {};
    _lazyTweens.length = 0;

    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  },
      _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && _lazyRender();
    animation.render(time, suppressEvents, force);
    _lazyTweens.length && _lazyRender();
  },
      _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  },
      _passThrough = function _passThrough(p) {
    return p;
  },
      _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      p in obj || (obj[p] = defaults[p]);
    }

    return obj;
  },
      _setKeyframeDefaults = function _setKeyframeDefaults(obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" || p === "ease" || (obj[p] = defaults[p]);
    }
  },
      _merge = function _merge(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }

    return base;
  },
      _mergeDeep = function _mergeDeep(base, toMerge) {
    for (var p in toMerge) {
      base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p];
    }

    return base;
  },
      _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {},
        p;

    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }

    return copy;
  },
      _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline,
        func = vars.keyframes ? _setKeyframeDefaults : _setDefaults;

    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }

    return vars;
  },
      _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length,
        match = i === a2.length;

    while (match && i-- && a1[i] === a2[i]) {}

    return i < 0;
  },
      _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }

    if (lastProp === void 0) {
      lastProp = "_last";
    }

    var prev = parent[lastProp],
        t;

    if (sortBy) {
      t = child[sortBy];

      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }

    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }

    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }

    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  },
      _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }

    if (lastProp === void 0) {
      lastProp = "_last";
    }

    var prev = child._prev,
        next = child._next;

    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }

    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }

    child._next = child._prev = child.parent = null;
  },
      _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
    child._act = 0;
  },
      _uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;

      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }

    return animation;
  },
      _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;

    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }

    return animation;
  },
      _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
  },
      _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  },
      _animationCycle = function _animationCycle(tTime, cycleDuration) {
    return (tTime /= cycleDuration) && ~~tTime === tTime ? ~~tTime - 1 : ~~tTime;
  },
      _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  },
      _setEnd = function _setEnd(animation) {
    return animation._end = _round(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  },
      _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    var parent = animation._dp;

    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _round(animation._dp._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

      _setEnd(animation);

      parent._dirty || _uncache(parent, animation);
    }

    return animation;
  },
      _postAddChecks = function _postAddChecks(timeline, child) {
    var t;

    if (child._time || child._initted && !child._dur) {
      t = _parentToChildTotalTime(timeline.rawTime(), child);

      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    }

    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
      if (timeline._dur < timeline.duration()) {
        t = timeline;

        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }

      timeline._zTime = -_tinyNum;
    }
  },
      _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _round(position + child._delay);
    child._end = _round(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

    timeline._recent = child;
    skipChecks || _postAddChecks(timeline, child);
    return timeline;
  },
      _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  },
      _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
    _initTween(tween, totalTime);

    if (!tween._initted) {
      return 1;
    }

    if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);

      tween._lazy = [totalTime, suppressEvents];
      return 1;
    }
  },
      _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio,
        ratio = totalTime < 0 || !totalTime && prevRatio && !tween._start && tween._zTime > _tinyNum && !tween._dp._lock || (tween._ts < 0 || tween._dp._ts < 0) && tween.data !== "isFromStart" && tween.data !== "isStart" ? 0 : 1,
        repeatDelay = tween._rDelay,
        tTime = 0,
        pt,
        iteration,
        prevIteration;

    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      prevIteration = _animationCycle(tween._tTime, repeatDelay);

      if (iteration !== prevIteration) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }

    if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
        return;
      }

      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      suppressEvents || _callback(tween, "onStart");
      pt = tween._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);

        if (!suppressEvents) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  },
      _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;

    if (time > prevTime) {
      child = animation._first;

      while (child && child._start <= time) {
        if (!child._dur && child.data === "isPause" && child._start > prevTime) {
          return child;
        }

        child = child._next;
      }
    } else {
      child = animation._last;

      while (child && child._start >= time) {
        if (!child._dur && child.data === "isPause" && child._start < prevTime) {
          return child;
        }

        child = child._prev;
      }
    }
  },
      _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat,
        dur = _round(duration) || 0,
        totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _round(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  },
      _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  },
      _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc
  },
      _parsePosition = function _parsePosition(animation, position) {
    var labels = animation.labels,
        recent = animation._recent || _zeroPosition,
        clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
        i,
        offset;

    if (_isString(position) && (isNaN(position) || position in labels)) {
      i = position.charAt(0);

      if (i === "<" || i === ">") {
        return (i === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0);
      }

      i = position.indexOf("=");

      if (i < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }

      offset = +(position.charAt(i - 1) + position.substr(i + 1));
      return i > 1 ? _parsePosition(animation, position.substr(0, i - 1)) + offset : clippedDuration + offset;
    }

    return position == null ? clippedDuration : +position;
  },
      _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
  },
      _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
  },
      getUnit = function getUnit(value) {
    return (value = (value + "").substr((parseFloat(value) + "").length)) && isNaN(value) ? value : "";
  },
      clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function (v) {
      return _clamp(min, max, v);
    });
  },
      _slice = [].slice,
      _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  },
      _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }

    return ar.forEach(function (value) {
      var _accumulator;

      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  },
      toArray = function toArray(value, leaveStrings) {
    return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call(_doc.querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  },
      shuffle = function shuffle(a) {
    return a.sort(function () {
      return .5 - Math.random();
    });
  },
      distribute = function distribute(v) {
    if (_isFunction(v)) {
      return v;
    }

    var vars = _isObject(v) ? v : {
      each: v
    },
        ease = _parseEase(vars.ease),
        from = vars.from || 0,
        base = parseFloat(vars.base) || 0,
        cache = {},
        isDecimal = from > 0 && from < 1,
        ratios = isNaN(from) || isDecimal,
        axis = vars.axis,
        ratioX = from,
        ratioY = from;

    if (_isString(from)) {
      ratioX = ratioY = {
        center: .5,
        edges: .5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }

    return function (i, target, a) {
      var l = (a || vars).length,
          distances = cache[l],
          originX,
          originY,
          x,
          y,
          d,
          j,
          max,
          min,
          wrapAt;

      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

        if (!wrapAt) {
          max = -_bigNum;

          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

          wrapAt--;
        }

        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
        originY = ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;

        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }

        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }

      l = (distances[i] - distances.min) / distances.max || 0;
      return _round(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
    };
  },
      _roundModifier = function _roundModifier(v) {
    var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1;
    return function (raw) {
      return Math.floor(Math.round(parseFloat(raw) / v) * v * p) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  },
      snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo),
        radius,
        is2D;

    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;

      if (snapTo.values) {
        snapTo = toArray(snapTo.values);

        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }

    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function (raw) {
      var x = parseFloat(is2D ? raw.x : raw),
          y = parseFloat(is2D ? raw.y : 0),
          min = _bigNum,
          closest = 0,
          i = snapTo.length,
          dx,
          dy;

      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }

        if (dx < min) {
          min = dx;
          closest = i;
        }
      }

      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  },
      random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min + Math.random() * (max - min)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  },
      pipe = function pipe() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }

    return function (value) {
      return functions.reduce(function (v, f) {
        return f(v);
      }, value);
    };
  },
      unitize = function unitize(func, unit) {
    return function (value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  },
      normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  },
      _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function (index) {
      return a[~~wrapper(index)];
    });
  },
      wrap = function wrap(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
      return (range + (value - min) % range) % range + min;
    });
  },
      wrapYoyo = function wrapYoyo(min, max, value) {
    var range = max - min,
        total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
      value = (total + (value - min) % total) % total || 0;
      return min + (value > range ? total - value : value);
    });
  },
      _replaceRandom = function _replaceRandom(value) {
    var prev = 0,
        s = "",
        i,
        nums,
        end,
        isArray;

    while (~(i = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i);
      isArray = value.charAt(i + 7) === "[";
      nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }

    return s + value.substr(prev, value.length - prev);
  },
      mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin,
        outRange = outMax - outMin;
    return _conditionalReturn(value, function (value) {
      return outMin + ((value - inMin) / inRange * outRange || 0);
    });
  },
      interpolate = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function (p) {
      return (1 - p) * start + p * end;
    };

    if (!func) {
      var isString = _isString(start),
          master = {},
          p,
          i,
          interpolators,
          l,
          il;

      progress === true && (mutate = 1) && (progress = null);

      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;

        for (i = 1; i < l; i++) {
          interpolators.push(interpolate(start[i - 1], start[i]));
        }

        l--;

        func = function func(p) {
          p *= l;
          var i = Math.min(il, ~~p);
          return interpolators[i](p - i);
        };

        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }

      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }

        func = function func(p) {
          return _renderPropTweens(p, master) || (isString ? start.p : start);
        };
      }
    }

    return _conditionalReturn(progress, func);
  },
      _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    var labels = timeline.labels,
        min = _bigNum,
        p,
        distance,
        label;

    for (p in labels) {
      distance = labels[p] - fromTime;

      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }

    return label;
  },
      _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars,
        callback = v[type],
        params,
        scope;

    if (!callback) {
      return;
    }

    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    return params ? callback.apply(scope, params) : callback.call(scope);
  },
      _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);

    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  },
      _quickTween,
      _createPlugin = function _createPlugin(config) {
    config = !config.name && config["default"] || config;

    var name = config.name,
        isFunc = _isFunction(config),
        Plugin = name && !isFunc && config.init ? function () {
      this._props = [];
    } : config,
        instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    },
        statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };

    _wake();

    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }

      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));

      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));

      _plugins[Plugin.prop = name] = Plugin;

      if (config.targetTest) {
        _harnessPlugins.push(Plugin);

        _reservedProps[name] = 1;
      }

      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
    }

    _addGlobal(name, Plugin);

    config.register && config.register(gsap, Plugin, PropTween);
  },
      _255 = 255,
      _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  },
      _hue = function _hue(h, m1, m2) {
    h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
  },
      splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
        r,
        g,
        b,
        h,
        s,
        l,
        max,
        min,
        d,
        wasHSL;

    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }

      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length === 4) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b;
        }

        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);

        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= .5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }

      a = a.map(Number);
    }

    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;

      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }

      a[0] = ~~(h + .5);
      a[1] = ~~(s * 100 + .5);
      a[2] = ~~(l * 100 + .5);
    }

    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  },
      _colorOrderData = function _colorOrderData(v) {
    var values = [],
        c = [],
        i = -1;
    v.split(_colorExp).forEach(function (v) {
      var a = v.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  },
      _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "",
        colors = (s + result).match(_colorExp),
        type = toHSL ? "hsla(" : "rgba(",
        i = 0,
        c,
        shell,
        d,
        l;

    if (!colors) {
      return s;
    }

    colors = colors.map(function (color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });

    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;

      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;

        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }

    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }

    return result + shell[l];
  },
      _colorExp = function () {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",
        p;

    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }

    return new RegExp(s + ")", "gi");
  }(),
      _hslExp = /hsl[a]?\(/,
      _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "),
        toHSL;
    _colorExp.lastIndex = 0;

    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  },
      _tickerActive,
      _ticker = function () {
    var _getTime = Date.now,
        _lagThreshold = 500,
        _adjustedLag = 33,
        _startTime = _getTime(),
        _lastUpdate = _startTime,
        _gap = 1000 / 240,
        _nextTime = _gap,
        _listeners = [],
        _id,
        _req,
        _raf,
        _self,
        _delta,
        _i,
        _tick = function _tick(v) {
      var elapsed = _getTime() - _lastUpdate,
          manual = v === true,
          overlap,
          dispatch,
          time,
          frame;

      elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;

      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1000;
        _self.time = time = time / 1000;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }

      manual || (_id = _req(_tick));

      if (dispatch) {
        for (_i = 0; _i < _listeners.length; _i++) {
          _listeners[_i](time, _delta, frame, v);
        }
      }
    };

    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1000 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

            _raf = _win.requestAnimationFrame;
          }

          _id && _self.sleep();

          _req = _raf || function (f) {
            return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
          };

          _tickerActive = 1;

          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || 1 / _tinyNum;
        _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
      },
      fps: function fps(_fps) {
        _gap = 1000 / (_fps || 240);
        _nextTime = _self.time * 1000 + _gap;
      },
      add: function add(callback) {
        _listeners.indexOf(callback) < 0 && _listeners.push(callback);

        _wake();
      },
      remove: function remove(callback) {
        var i;
        ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
      },
      _listeners: _listeners
    };
    return _self;
  }(),
      _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
  },
      _easeMap = {},
      _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
      _quotesExp = /["']/g,
      _parseObjectInString = function _parseObjectInString(value) {
    var obj = {},
        split = value.substr(1, value.length - 3).split(":"),
        key = split[0],
        i = 1,
        l = split.length,
        index,
        val,
        parsedVal;

    for (; i < l; i++) {
      val = split[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }

    return obj;
  },
      _valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1,
        close = value.indexOf(")"),
        nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  },
      _configEaseFromString = function _configEaseFromString(name) {
    var split = (name + "").split("("),
        ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  },
      _invertEase = function _invertEase(ease) {
    return function (p) {
      return 1 - ease(1 - p);
    };
  },
      _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
    var child = timeline._first,
        ease;

    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }

      child = child._next;
    }
  },
      _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  },
      _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
      };
    }

    if (easeInOut === void 0) {
      easeInOut = function easeInOut(p) {
        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }

    var ease = {
      easeIn: easeIn,
      easeOut: easeOut,
      easeInOut: easeInOut
    },
        lowercaseName;

    _forEachName(names, function (name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });

    return ease;
  },
      _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function (p) {
      return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
  },
      _configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1,
        p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
        p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
        easeOut = function easeOut(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    },
        ease = type === "out" ? easeOut : type === "in" ? function (p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);

    p2 = _2PI / p2;

    ease.config = function (amplitude, period) {
      return _configElastic(type, amplitude, period);
    };

    return ease;
  },
      _configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }

    var easeOut = function easeOut(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    },
        ease = type === "out" ? easeOut : type === "in" ? function (p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);

    ease.config = function (overshoot) {
      return _configBack(type, overshoot);
    };

    return ease;
  };

  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
    var power = i < 5 ? i + 1 : i;

    _insertEase(name + ",Power" + (power - 1), i ? function (p) {
      return Math.pow(p, power);
    } : function (p) {
      return p;
    }, function (p) {
      return 1 - Math.pow(1 - p, power);
    }, function (p) {
      return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });

  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

  (function (n, c) {
    var n1 = 1 / c,
        n2 = 2 * n1,
        n3 = 2.5 * n1,
        easeOut = function easeOut(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };

    _insertEase("Bounce", function (p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);

  _insertEase("Expo", function (p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
  });

  _insertEase("Circ", function (p) {
    return -(_sqrt(1 - p * p) - 1);
  });

  _insertEase("Sine", function (p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });

  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }

      var p1 = 1 / steps,
          p2 = steps + (immediateStart ? 0 : 1),
          p3 = immediateStart ? 1 : 0,
          max = 1 - _tinyNum;
      return function (p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];

  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
    return _callbackNames += name + "," + name + "Params,";
  });

  var GSCache = function GSCache(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = function () {
    function Animation(vars, time) {
      var parent = vars.parent || _globalTimeline;
      this.vars = vars;
      this._delay = +vars.delay || 0;

      if (this._repeat = vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }

      this._ts = 1;

      _setDuration(this, +vars.duration, 1, 1);

      this.data = vars.data;
      _tickerActive || _ticker.wake();
      parent && _addToTimeline(parent, this, time || time === 0 ? time : parent._time, 1);
      vars.reversed && this.reverse();
      vars.paused && this.paused(true);
    }

    var _proto = Animation.prototype;

    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }

      return this._delay;
    };

    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };

    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }

      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };

    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();

      if (!arguments.length) {
        return this._tTime;
      }

      var parent = this._dp;

      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);

        while (parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }

          parent = parent.parent;
        }

        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }

      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);

        _lazySafeRender(this, _totalTime, suppressEvents);
      }

      return this;
    };

    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % this._dur || (value ? this._dur : 0), suppressEvents) : this._time;
    };

    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };

    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };

    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;

      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };

    _proto.timeScale = function timeScale(value) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }

      if (this._rts === value) {
        return this;
      }

      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      return _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
    };

    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }

      if (this._ps !== value) {
        this._ps = value;

        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();

          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && (this._tTime -= _tinyNum) && Math.abs(this._zTime) !== _tinyNum);
        }
      }

      return this;
    };

    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }

      return this._start;
    };

    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
    };

    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };

    _proto.globalTime = function globalTime(rawTime) {
      var animation = this,
          time = arguments.length ? rawTime : animation.rawTime();

      while (animation) {
        time = animation._start + time / (animation._ts || 1);
        animation = animation._dp;
      }

      return time;
    };

    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value;
        return _onUpdateTotalDuration(this);
      }

      return this._repeat;
    };

    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        this._rDelay = value;
        return _onUpdateTotalDuration(this);
      }

      return this._rDelay;
    };

    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }

      return this._yoyo;
    };

    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };

    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };

    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };

    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };

    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };

    _proto.resume = function resume() {
      return this.paused(false);
    };

    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }

      return this._rts < 0;
    };

    _proto.invalidate = function invalidate() {
      this._initted = 0;
      this._zTime = -_tinyNum;
      return this;
    };

    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp,
          start = this._start,
          rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };

    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;

      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }

        return this;
      }

      return vars[type];
    };

    _proto.then = function then(onFulfilled) {
      var self = this;
      return new Promise(function (resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
            _resolve = function _resolve() {
          var _then = self.then;
          self.then = null;
          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };

        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };

    _proto.kill = function kill() {
      _interrupt(this);
    };

    return Animation;
  }();

  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });

  var Timeline = function (_Animation) {
    _inheritsLoose(Timeline, _Animation);

    function Timeline(vars, time) {
      var _this;

      if (vars === void 0) {
        vars = {};
      }

      _this = _Animation.call(this, vars, time) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _this.parent && _postAddChecks(_this.parent, _assertThisInitialized(_this));
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }

    var _proto2 = Timeline.prototype;

    _proto2.to = function to(targets, vars, position) {
      new Tween(targets, _parseVars(arguments, 0, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
      return this;
    };

    _proto2.from = function from(targets, vars, position) {
      new Tween(targets, _parseVars(arguments, 1, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
      return this;
    };

    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      new Tween(targets, _parseVars(arguments, 2, this), _parsePosition(this, _isNumber(fromVars) ? arguments[4] : position));
      return this;
    };

    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };

    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), _parsePosition(this, position));
    };

    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };

    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };

    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };

    _proto2.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time,
          tDur = this._dirty ? this.totalDuration() : this._tDur,
          dur = this._dur,
          tTime = this !== _globalTimeline && totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
          crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
          time,
          child,
          next,
          iteration,
          cycleDuration,
          prevPaused,
          pauseTween,
          timeScale,
          prevStart,
          prevIteration,
          yoyo,
          isYoyo;

      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }

        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;

        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }

        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          time = _round(tTime % cycleDuration);

          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);

            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }

            time > dur && (time = dur);
          }

          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);

          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }

          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1,
                doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : dur;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _round(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

            if (prevTime !== this._time || prevPaused !== !this._ts) {
              return this;
            }

            dur = this._dur;
            tDur = this._tDur;

            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -0.0001;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }

            this._lock = 0;

            if (!this._ts && !prevPaused) {
              return this;
            }

            _propagateYoyoEase(this, isYoyo);
          }
        }

        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _round(prevTime), _round(time));

          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }

        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;

        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
        }

        !prevTime && time && !suppressEvents && _callback(this, "onStart");

        if (time >= prevTime && totalTime >= 0) {
          child = this._first;

          while (child) {
            next = child._next;

            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }

              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }

            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;

          while (child) {
            next = child._prev;

            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }

              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);

              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }

            child = next;
          }
        }

        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

          if (this._ts) {
            this._start = prevStart;

            _setEnd(this);

            return this.render(totalTime, suppressEvents, force);
          }
        }

        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
          (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }

      return this;
    };

    _proto2.add = function add(child, position) {
      var _this2 = this;

      if (!_isNumber(position)) {
        position = _parsePosition(this, position);
      }

      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function (obj) {
            return _this2.add(obj, position);
          });
          return this;
        }

        if (_isString(child)) {
          return this.addLabel(child, position);
        }

        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }

      return this !== child ? _addToTimeline(this, child, position) : this;
    };

    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }

      if (tweens === void 0) {
        tweens = true;
      }

      if (timelines === void 0) {
        timelines = true;
      }

      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }

      var a = [],
          child = this._first;

      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }

        child = child._next;
      }

      return a;
    };

    _proto2.getById = function getById(id) {
      var animations = this.getChildren(1, 1, 1),
          i = animations.length;

      while (i--) {
        if (animations[i].vars.id === id) {
          return animations[i];
        }
      }
    };

    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }

      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }

      _removeLinkedListItem(this, child);

      if (child === this._recent) {
        this._recent = this._last;
      }

      return _uncache(this);
    };

    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }

      this._forcing = 1;

      if (!this._dp && this._ts) {
        this._start = _round(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }

      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

      this._forcing = 0;
      return this;
    };

    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };

    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };

    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };

    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);

      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }

        child = child._next;
      }
    };

    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive),
          i = tweens.length;

      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }

      return this;
    };

    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
      var a = [],
          parsedTargets = toArray(targets),
          child = this._first,
          isGlobalTime = _isNumber(onlyActive),
          children;

      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }

        child = child._next;
      }

      return a;
    };

    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};

      var tl = this,
          endTime = _parsePosition(tl, position),
          _vars = vars,
          startAt = _vars.startAt,
          _onStart = _vars.onStart,
          onStartParams = _vars.onStartParams,
          tween = Tween.to(tl, _setDefaults(vars, {
        ease: "none",
        lazy: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          var duration = vars.duration || Math.abs((endTime - tl._time) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }));

      return tween;
    };

    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };

    _proto2.recent = function recent() {
      return this._recent;
    };

    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }

      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };

    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }

      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };

    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };

    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }

      var child = this._first,
          labels = this.labels,
          p;

      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }

        child = child._next;
      }

      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }

      return _uncache(this);
    };

    _proto2.invalidate = function invalidate() {
      var child = this._first;
      this._lock = 0;

      while (child) {
        child.invalidate();
        child = child._next;
      }

      return _Animation.prototype.invalidate.call(this);
    };

    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }

      var child = this._first,
          next;

      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }

      this._time = this._tTime = this._pTime = 0;
      includeLabels && (this.labels = {});
      return _uncache(this);
    };

    _proto2.totalDuration = function totalDuration(value) {
      var max = 0,
          self = this,
          child = self._last,
          prevStart = _bigNum,
          prev,
          start,
          parent;

      if (arguments.length) {
        return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
      }

      if (self._dirty) {
        parent = self.parent;

        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;

          if (start > prevStart && self._sort && child._ts && !self._lock) {
            self._lock = 1;
            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }

          if (start < 0 && child._ts) {
            max -= start;

            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
              self._start += start / self._ts;
              self._time -= start;
              self._tTime -= start;
            }

            self.shiftChildren(-start, false, -1e999);
            prevStart = 0;
          }

          child._end > max && child._ts && (max = child._end);
          child = prev;
        }

        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

        self._dirty = 0;
      }

      return self._tDur;
    };

    Timeline.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

        _lastRenderedFrame = _ticker.frame;
      }

      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
          while (child && !child._ts) {
            child = child._next;
          }

          child || _ticker.sleep();
        }
      }
    };

    return Timeline;
  }(Animation);

  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });

  var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
        index = 0,
        matchIndex = 0,
        result,
        startNums,
        color,
        endNum,
        chunk,
        startNum,
        hasRandom,
        a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";

    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }

    startNums = start.match(_complexStringNumExp) || [];

    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }

      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          s: startNum,
          c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;

    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }

    this._pt = pt;
    return pt;
  },
      _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop],
        parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
        setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
        pt;

    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }

      if (end.charAt(1) === "=") {
        end = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
      }
    }

    if (parsedStart !== end) {
      if (!isNaN(parsedStart * end)) {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }

      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  },
      _processVars = function _processVars(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }

    var copy = {},
        p;

    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }

    return copy;
  },
      _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;

    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i = plugin._props.length;

        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }

    return plugin;
  },
      _overwritingTween,
      _initTween = function _initTween(tween, time) {
    var vars = tween.vars,
        ease = vars.ease,
        startAt = vars.startAt,
        immediateRender = vars.immediateRender,
        lazy = vars.lazy,
        onUpdate = vars.onUpdate,
        onUpdateParams = vars.onUpdateParams,
        callbackScope = vars.callbackScope,
        runBackwards = vars.runBackwards,
        yoyoEase = vars.yoyoEase,
        keyframes = vars.keyframes,
        autoRevert = vars.autoRevert,
        dur = tween._dur,
        prevStartAt = tween._startAt,
        targets = tween._targets,
        parent = tween.parent,
        fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets,
        autoOverwrite = tween._overwrite === "auto",
        tl = tween.timeline,
        cleanVars,
        i,
        p,
        pt,
        target,
        hasPriority,
        gsData,
        harness,
        plugin,
        ptLookup,
        index,
        harnessVars,
        overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }

    if (!tl) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      prevStartAt && prevStartAt.render(-1, true).kill();

      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent: parent,
          immediateRender: true,
          lazy: _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate,
          onUpdateParams: onUpdateParams,
          callbackScope: callbackScope,
          stagger: 0
        }, startAt)));

        if (immediateRender) {
          if (time > 0) {
            autoRevert || (tween._startAt = 0);
          } else if (dur && !(time < 0 && prevStartAt)) {
            time && (tween._zTime = time);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (prevStartAt) {
          !autoRevert && (tween._startAt = 0);
        } else {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            lazy: immediateRender && _isNotFalse(lazy),
            immediateRender: immediateRender,
            stagger: 0,
            parent: parent
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);

          _removeFromParent(tween._startAt = Tween.set(targets, p));

          if (!immediateRender) {
            _initTween(tween._startAt, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }

      tween._pt = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;

      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i : fullTargets.indexOf(target);

        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

          plugin._props.forEach(function (name) {
            ptLookup[name] = pt;
          });

          plugin.priority && (hasPriority = 1);
        }

        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }

        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;

          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(0));

          overwritten = !tween.parent;
          _overwritingTween = 0;
        }

        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }

      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }

    tween._from = !tl && !!vars.runBackwards;
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
  },
      _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0,
        propertyAliases = harness && harness.aliases,
        copy,
        p,
        i,
        aliases;

    if (!propertyAliases) {
      return vars;
    }

    copy = _merge({}, vars);

    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;

        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }

    return copy;
  },
      _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  },
      _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");

  var Tween = function (_Animation2) {
    _inheritsLoose(Tween, _Animation2);

    function Tween(targets, vars, time, skipInherit) {
      var _this3;

      if (typeof vars === "number") {
        time.duration = vars;
        vars = time;
        time = null;
      }

      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars), time) || this;
      var _this3$vars = _this3.vars,
          duration = _this3$vars.duration,
          delay = _this3$vars.delay,
          immediateRender = _this3$vars.immediateRender,
          stagger = _this3$vars.stagger,
          overwrite = _this3$vars.overwrite,
          keyframes = _this3$vars.keyframes,
          defaults = _this3$vars.defaults,
          scrollTrigger = _this3$vars.scrollTrigger,
          yoyoEase = _this3$vars.yoyoEase,
          parent = _this3.parent,
          parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
          tl,
          i,
          copy,
          l,
          p,
          curTarget,
          staggerFunc,
          staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;

      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults || {}
        });
        tl.kill();
        tl.parent = _assertThisInitialized(_this3);

        if (keyframes) {
          _setDefaults(tl.vars.defaults, {
            ease: "none"
          });

          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
        } else {
          l = parsedTargets.length;
          staggerFunc = stagger ? distribute(stagger) : _emptyFunc;

          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }

          for (i = 0; i < l; i++) {
            copy = {};

            for (p in vars) {
              if (_staggerPropsToSkip.indexOf(p) < 0) {
                copy[p] = vars[p];
              }
            }

            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

            if (!stagger && l === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }

            tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
          }

          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        }

        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }

      if (overwrite === true) {
        _overwritingTween = _assertThisInitialized(_this3);

        _globalTimeline.killTweensOf(parsedTargets);

        _overwritingTween = 0;
      }

      parent && _postAddChecks(parent, _assertThisInitialized(_this3));

      if (immediateRender || !duration && !keyframes && _this3._start === _round(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;

        _this3.render(Math.max(0, -delay));
      }

      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }

    var _proto3 = Tween.prototype;

    _proto3.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time,
          tDur = this._tDur,
          dur = this._dur,
          tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
          time,
          pt,
          iteration,
          cycleDuration,
          prevIteration,
          isYoyo,
          ratio,
          timeline,
          yoyoEase;

      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || this._startAt && this._zTime < 0 !== totalTime < 0) {
        time = tTime;
        timeline = this.timeline;

        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          time = _round(tTime % cycleDuration);

          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);

            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }

            time > dur && (time = dur);
          }

          isYoyo = this._yoyo && iteration & 1;

          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }

          prevIteration = _animationCycle(this._tTime, cycleDuration);

          if (time === prevTime && !force && this._initted) {
            return this;
          }

          if (iteration !== prevIteration) {
            timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);

            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
              this._lock = force = 1;
              this.render(_round(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }

        if (!this._initted) {
          if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
            this._tTime = 0;
            return this;
          }

          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }

        this._tTime = tTime;
        this._time = time;

        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }

        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }

        time && !prevTime && !suppressEvents && _callback(this, "onStart");
        pt = this._pt;

        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }

        timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);

        if (this._onUpdate && !suppressEvents) {
          totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force);

          _callback(this, "onUpdate");
        }

        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }

      return this;
    };

    _proto3.targets = function targets() {
      return this._targets;
    };

    _proto3.invalidate = function invalidate() {
      this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate();
      return _Animation2.prototype.invalidate.call(this);
    };

    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }

      if (!targets && (!vars || vars === "all")) {
        this._lazy = 0;

        if (this.parent) {
          return _interrupt(this);
        }
      }

      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }

      var parsedTargets = this._targets,
          killingTargets = targets ? toArray(targets) : parsedTargets,
          propTweenLookup = this._ptLookup,
          firstPT = this._pt,
          overwrittenProps,
          curLookup,
          curOverwriteProps,
          props,
          p,
          pt,
          i;

      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }

      overwrittenProps = this._op = this._op || [];

      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};

          _forEachName(vars, function (name) {
            return p[name] = 1;
          });

          vars = p;
        }

        vars = _addAliasesToVars(parsedTargets, vars);
      }

      i = parsedTargets.length;

      while (i--) {
        if (~killingTargets.indexOf(parsedTargets[i])) {
          curLookup = propTweenLookup[i];

          if (vars === "all") {
            overwrittenProps[i] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
            props = vars;
          }

          for (p in props) {
            pt = curLookup && curLookup[p];

            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }

              delete curLookup[p];
            }

            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }

      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };

    Tween.to = function to(targets, vars) {
      return new Tween(targets, vars, arguments[2]);
    };

    Tween.from = function from(targets, vars) {
      return new Tween(targets, _parseVars(arguments, 1));
    };

    Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay: delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };

    Tween.fromTo = function fromTo(targets, fromVars, toVars) {
      return new Tween(targets, _parseVars(arguments, 2));
    };

    Tween.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween(targets, vars);
    };

    Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };

    return Tween;
  }(Animation);

  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });

  _forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
    Tween[name] = function () {
      var tl = new Timeline(),
          params = _slice.call(arguments, 0);

      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });

  var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
  },
      _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
  },
      _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
  },
      _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
  },
      _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  },
      _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000, data);
  },
      _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  },
      _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt,
        s = "";

    if (!ratio && data.b) {
      s = data.b;
    } else if (ratio === 1 && data.e) {
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s;
        pt = pt._next;
      }

      s += data.c;
    }

    data.set(data.t, data.p, s, data);
  },
      _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  },
      _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt,
        next;

    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  },
      _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt,
        hasNonDependentRemaining,
        next;

    while (pt) {
      next = pt._next;

      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }

      pt = next;
    }

    return !hasNonDependentRemaining;
  },
      _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  },
      _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt,
        next,
        pt2,
        first,
        last;

    while (pt) {
      next = pt._next;
      pt2 = first;

      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }

      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }

      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }

      pt = next;
    }

    parent._pt = first;
  };

  var PropTween = function () {
    function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;

      if (next) {
        next._prev = this;
      }
    }

    var _proto4 = PropTween.prototype;

    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };

    return PropTween;
  }();

  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
    return _reservedProps[name] = 1;
  });

  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      args.forEach(function (config) {
        return _createPlugin(config);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);

      var getter = _getCache(target || {}).get,
          format = unit ? _passThrough : _numericIfPossible;

      unit === "native" && (unit = "");
      return !target ? target : !property ? function (property, unit, uncache) {
        return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);

      if (target.length > 1) {
        var setters = target.map(function (t) {
          return gsap.quickSetter(t, property, unit);
        }),
            l = setters.length;
        return function (value) {
          var i = l;

          while (i--) {
            setters[i](value);
          }
        };
      }

      target = target[0] || {};

      var Plugin = _plugins[property],
          cache = _getCache(target),
          p = cache.harness && (cache.harness.aliases || {})[property] || property,
          setter = Plugin ? function (value) {
        var p = new Plugin();
        _quickTween._pt = 0;
        p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p.render(1, p);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);

      return Plugin ? setter : function (value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref) {
      var name = _ref.name,
          effect = _ref.effect,
          plugins = _ref.plugins,
          defaults = _ref.defaults,
          extendTimeline = _ref.extendTimeline;
      (plugins || "").split(",").forEach(function (pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });

      _effects[name] = function (targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
      };

      if (extendTimeline) {
        Timeline.prototype[name] = function (targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }

      var tl = new Timeline(vars),
          child,
          next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

      _globalTimeline.remove(tl);

      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;

      while (child) {
        next = child._next;

        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }

        child = next;
      }

      _addToTimeline(_globalTimeline, tl, 0);

      return tl;
    },
    utils: {
      wrap: wrap,
      wrapYoyo: wrapYoyo,
      distribute: distribute,
      random: random,
      snap: snap,
      normalize: normalize,
      getUnit: getUnit,
      clamp: clamp,
      splitColor: splitColor,
      toArray: toArray,
      mapRange: mapRange,
      pipe: pipe,
      unitize: unitize,
      interpolate: interpolate,
      shuffle: shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween: PropTween,
      globals: _addGlobal,
      Tween: Tween,
      Timeline: Timeline,
      Animation: Animation,
      getCache: _getCache,
      _removeLinkedListItem: _removeLinkedListItem
    }
  };

  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
    return _gsap[name] = Tween[name];
  });

  _ticker.add(Timeline.updateRoot);

  _quickTween = _gsap.to({}, {
    duration: 0
  });

  var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;

    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }

    return pt;
  },
      _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets,
        p,
        i,
        pt;

    for (p in modifiers) {
      i = targets.length;

      while (i--) {
        pt = tween._ptLookup[i][p];

        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }

          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  },
      _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
      name: name,
      rawVars: 1,
      init: function init(target, vars, tween) {
        tween._onInit = function (tween) {
          var temp, p;

          if (_isString(vars)) {
            temp = {};

            _forEachName(vars, function (name) {
              return temp[name] = 1;
            });

            vars = temp;
          }

          if (modifier) {
            temp = {};

            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }

            vars = temp;
          }

          _addModifiers(tween, vars);
        };
      }
    };
  };

  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt;

      for (p in vars) {
        pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
        pt && (pt.op = p);

        this._props.push(p);
      }
    }
  }, {
    name: "endArray",
    init: function init(target, value) {
      var i = value.length;

      while (i--) {
        this.add(target, i, target[i] || 0, value[i]);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.5.1";
  _coreReady = 1;

  if (_windowExists()) {
    _wake();
  }

  var Power0 = _easeMap.Power0,
      Power1 = _easeMap.Power1,
      Power2 = _easeMap.Power2,
      Power3 = _easeMap.Power3,
      Power4 = _easeMap.Power4,
      Linear = _easeMap.Linear,
      Quad = _easeMap.Quad,
      Cubic = _easeMap.Cubic,
      Quart = _easeMap.Quart,
      Quint = _easeMap.Quint,
      Strong = _easeMap.Strong,
      Elastic = _easeMap.Elastic,
      Back = _easeMap.Back,
      SteppedEase = _easeMap.SteppedEase,
      Bounce = _easeMap.Bounce,
      Sine = _easeMap.Sine,
      Expo = _easeMap.Expo,
      Circ = _easeMap.Circ;

  var _win$1,
      _doc$1,
      _docElement,
      _pluginInitted,
      _tempDiv,
      _tempDivStyler,
      _recentSetterPlugin,
      _windowExists$1 = function _windowExists() {
    return typeof window !== "undefined";
  },
      _transformProps = {},
      _RAD2DEG = 180 / Math.PI,
      _DEG2RAD = Math.PI / 180,
      _atan2 = Math.atan2,
      _bigNum$1 = 1e8,
      _capsExp = /([A-Z])/g,
      _horizontalExp = /(?:left|right|width|margin|padding|x)/i,
      _complexExp = /[\s,\(]\S/,
      _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
      _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
      _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
      _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
  },
      _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
  },
      _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  },
      _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  },
      _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
  },
      _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
  },
      _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
  },
      _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  },
      _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  },
      _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  },
      _transformProp = "transform",
      _transformOriginProp = _transformProp + "Origin",
      _supports3D,
      _createElement = function _createElement(type, ns) {
    var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
    return e.style ? e : _doc$1.createElement(type);
  },
      _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
  },
      _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
      _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv,
        s = e.style,
        i = 5;

    if (property in s && !preferPrefix) {
      return property;
    }

    property = property.charAt(0).toUpperCase() + property.substr(1);

    while (i-- && !(_prefixes[i] + property in s)) {}

    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  },
      _initCore = function _initCore() {
    if (_windowExists$1() && window.document) {
      _win$1 = window;
      _doc$1 = _win$1.document;
      _docElement = _doc$1.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _pluginInitted = 1;
    }
  },
      _getBBoxHack = function _getBBoxHack(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        oldParent = this.parentNode,
        oldSibling = this.nextSibling,
        oldCSS = this.style.cssText,
        bbox;

    _docElement.appendChild(svg);

    svg.appendChild(this);
    this.style.display = "block";

    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack;
      } catch (e) {}
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }

    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }

    _docElement.removeChild(svg);

    this.style.cssText = oldCSS;
    return bbox;
  },
      _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;

    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  },
      _getBBox = function _getBBox(target) {
    var bounds;

    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }

    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  },
      _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  },
      _removeProperty = function _removeProperty(target, property) {
    if (property) {
      var style = target.style;

      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }

      if (style.removeProperty) {
        if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }

        style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  },
      _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;

    plugin._props.push(property);

    return pt;
  },
      _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  },
      _convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0,
        curUnit = (value + "").trim().substr((curValue + "").length) || "px",
        style = _tempDiv.style,
        horizontal = _horizontalExp.test(property),
        isRootSVG = target.tagName.toLowerCase() === "svg",
        measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
        amount = 100,
        toPixels = unit === "px",
        toPercent = unit === "%",
        px,
        parent,
        cache,
        isSVG;

    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }

    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);

    if (toPercent && (_transformProps[property] || ~property.indexOf("adius"))) {
      return _round(curValue / (isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty]) * amount);
    }

    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }

    if (!parent || parent === _doc$1 || !parent.appendChild) {
      parent = _doc$1.body;
    }

    cache = parent._gsap;

    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time) {
      return _round(curValue / cache.width * amount);
    } else {
      (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";

      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }

    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  },
      _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();

    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];

      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }

    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];

      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }

    return unit && !~(value + "").indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  },
      _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1),
          s = p && _getComputedProperty(target, p, 1);

      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }

    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString),
        index = 0,
        matchIndex = 0,
        a,
        result,
        startValues,
        startNum,
        color,
        startValue,
        endValue,
        endNum,
        chunk,
        endUnit,
        startUnit,
        relative,
        endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";

    if (end === "auto") {
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      target.style[prop] = start;
    }

    a = [start, end];

    _colorStringFilter(a);

    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];

    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);

        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }

        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;

          if (relative) {
            endValue = endValue.substr(2);
          }

          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;

          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;

            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }

          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }

          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            s: startNum,
            c: relative ? relative * endNum : endNum - startNum,
            m: color && color < 4 ? Math.round : 0
          };
        }
      }

      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }

    if (_relExp.test(end)) {
      pt.e = 0;
    }

    this._pt = pt;
    return pt;
  },
      _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
      _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "),
        x = split[0],
        y = split[1] || "50%";

    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }

    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  },
      _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t,
          style = target.style,
          props = data.u,
          cache = target._gsap,
          prop,
          clearTransforms,
          i;

      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;

        while (--i > -1) {
          prop = props[i];

          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }

          _removeProperty(target, prop);
        }
      }

      if (clearTransforms) {
        _removeProperty(target, _transformProp);

        if (cache) {
          cache.svg && target.removeAttribute("transform");

          _parseTransform(target, 1);

          cache.uncache = 1;
        }
      }
    }
  },
      _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;

        plugin._props.push(property);

        return 1;
      }
    }
  },
      _identity2DMatrix = [1, 0, 0, 1, 0, 0],
      _rotationalProperties = {},
      _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  },
      _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);

    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  },
      _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || _getCache(target),
        style = target.style,
        matrix = _getComputedTransformMatrixAsArray(target),
        parent,
        nextSibling,
        temp,
        addedToDOM;

    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;

      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextSibling;

        _docElement.appendChild(target);
      }

      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");

      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }

    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  },
      _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap,
        matrix = matrixArray || _getMatrix(target, true),
        xOriginOld = cache.xOrigin || 0,
        yOriginOld = cache.yOrigin || 0,
        xOffsetOld = cache.xOffset || 0,
        yOffsetOld = cache.yOffset || 0,
        a = matrix[0],
        b = matrix[1],
        c = matrix[2],
        d = matrix[3],
        tx = matrix[4],
        ty = matrix[5],
        originSplit = origin.split(" "),
        xOrigin = parseFloat(originSplit[0]) || 0,
        yOrigin = parseFloat(originSplit[1]) || 0,
        bounds,
        determinant,
        x,
        y;

    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }

    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }

    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";

    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }

    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  },
      _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new GSCache(target);

    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }

    var style = target.style,
        invertedScaleX = cache.scaleX < 0,
        px = "px",
        deg = "deg",
        origin = _getComputedProperty(target, _transformOriginProp) || "0",
        x,
        y,
        z,
        scaleX,
        scaleY,
        rotation,
        rotationX,
        rotationY,
        skewX,
        skewY,
        perspective,
        xOrigin,
        yOrigin,
        matrix,
        angle,
        cos,
        sin,
        a,
        b,
        c,
        d,
        a12,
        a22,
        t1,
        t2,
        t3,
        a13,
        a23,
        a33,
        a42,
        a43,
        a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    matrix = _getMatrix(target, cache.svg);

    if (cache.svg) {
      t1 = !cache.uncache && target.getAttribute("data-svg-origin");

      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }

    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;

    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];

      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.cos(skewX * _DEG2RAD));

        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }

        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }

        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }

        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }

        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }

      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }

    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }

    cache.x = ((cache.xPercent = x && Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0) ? 0 : x) + px;
    cache.y = ((cache.yPercent = y && Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0) ? 0 : y) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;

    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }

    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  },
      _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  },
      _addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  },
      _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;

    _renderCSSTransforms(ratio, cache);
  },
      _zeroDeg = "0deg",
      _zeroPx = "0px",
      _endParenthesis = ") ",
      _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this,
        xPercent = _ref.xPercent,
        yPercent = _ref.yPercent,
        x = _ref.x,
        y = _ref.y,
        z = _ref.z,
        rotation = _ref.rotation,
        rotationY = _ref.rotationY,
        rotationX = _ref.rotationX,
        skewX = _ref.skewX,
        skewY = _ref.skewY,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        transformPerspective = _ref.transformPerspective,
        force3D = _ref.force3D,
        target = _ref.target,
        zOrigin = _ref.zOrigin,
        transforms = "",
        use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;

    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD,
          a13 = Math.sin(angle),
          a33 = Math.cos(angle),
          cos;

      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }

    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }

    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }

    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }

    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }

    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }

    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }

    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }

    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }

    target.style[_transformProp] = transforms || "translate(0, 0)";
  },
      _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this,
        xPercent = _ref2.xPercent,
        yPercent = _ref2.yPercent,
        x = _ref2.x,
        y = _ref2.y,
        rotation = _ref2.rotation,
        skewX = _ref2.skewX,
        skewY = _ref2.skewY,
        scaleX = _ref2.scaleX,
        scaleY = _ref2.scaleY,
        target = _ref2.target,
        xOrigin = _ref2.xOrigin,
        yOrigin = _ref2.yOrigin,
        xOffset = _ref2.xOffset,
        yOffset = _ref2.yOffset,
        forceCSS = _ref2.forceCSS,
        tx = parseFloat(x),
        ty = parseFloat(y),
        a11,
        a21,
        a12,
        a22,
        temp;

    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);

    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }

    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;

      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;

        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }

      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }

    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }

    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }

    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }

    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);

    if (forceCSS) {
      target.style[_transformProp] = temp;
    }
  },
      _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
    var cap = 360,
        isString = _isString(endValue),
        endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
        change = relative ? endNum * relative : endNum - startNum,
        finalValue = startNum + change + "deg",
        direction,
        pt;

    if (isString) {
      direction = endValue.split("_")[1];

      if (direction === "short") {
        change %= cap;

        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }

      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
      }
    }

    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";

    plugin._props.push(property);

    return pt;
  },
      _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    var style = _tempDivStyler.style,
        startCache = target._gsap,
        exclude = "perspective,force3D,transformOrigin,svgOrigin",
        endCache,
        p,
        startValue,
        endValue,
        startNum,
        endNum,
        startUnit,
        endUnit;
    style.cssText = getComputedStyle(target).cssText + ";position:absolute;display:block;";
    style[_transformProp] = transforms;

    _doc$1.body.appendChild(_tempDivStyler);

    endCache = _parseTransform(_tempDivStyler, 1);

    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];

      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, startCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;

        plugin._props.push(p);
      }
    }

    _doc$1.body.removeChild(_tempDivStyler);
  };

  _forEachName("padding,margin,Width,Radius", function (name, index) {
    var t = "Top",
        r = "Right",
        b = "Bottom",
        l = "Left",
        props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
      return index < 2 ? name + side : "border" + side + name;
    });

    _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
      var a, vars;

      if (arguments.length < 4) {
        a = props.map(function (prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }

      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function (prop, i) {
        return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });

  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
      var props = this._props,
          style = target.style,
          startValue,
          endValue,
          endNum,
          startNum,
          type,
          specialProp,
          p,
          startUnit,
          endUnit,
          relative,
          isTransformRelated,
          transformPropTween,
          cache,
          smooth,
          hasPriority;
      _pluginInitted || _initCore();

      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }

        endValue = vars[p];

        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }

        type = typeof endValue;
        specialProp = _specialProps[p];

        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }

        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }

        if (specialProp) {
          if (specialProp(this, target, p, endValue, tween)) {
            hasPriority = 1;
          }
        } else if (p.substr(0, 2) === "--") {
          this.add(style, "setProperty", getComputedStyle(target).getPropertyValue(p) + "", endValue + "", index, targets, 0, 0, p);
        } else if (type !== "undefined") {
          startValue = _get(target, p);
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;

          if (relative) {
            endValue = endValue.substr(2);
          }

          endNum = parseFloat(endValue);

          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }

              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }

            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }

          isTransformRelated = p in _transformProps;

          if (isTransformRelated) {
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform || _parseTransform(target);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }

            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, relative ? relative * endNum : endNum - cache.scaleY);
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              endValue = _convertKeywordsToPercentages(endValue);

              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }

              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);

              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, endValue, relative);

              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);

              continue;
            }
          } else if (!(p in style)) {
            p = _checkPropPrefix(p) || p;
          }

          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, endUnit === "px" && vars.autoRound !== false && !isTransformRelated ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;

            if (startUnit !== endUnit) {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style)) {
            if (p in target) {
              this.add(target, p, target[p], endValue, index, targets);
            } else {
              _missingPlugin(p, endValue);

              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, endValue);
          }

          props.push(p);
        }
      }

      hasPriority && _sortPropTweensByPriority(this);
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty: _removeProperty,
      _getMatrix: _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;

  (function (positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function (name) {
      _transformProps[name] = 1;
    });

    _forEachName(rotation, function (name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });

    _propertyAliases[all[13]] = positionAndScale + "," + rotation;

    _forEachName(aliases, function (name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
    _config.units[name] = "px";
  });

  gsap.registerPlugin(CSSPlugin);

  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap,
      TweenMaxWithCSS = gsapWithCSS.core.Tween;

  exports.Back = Back;
  exports.Bounce = Bounce;
  exports.CSSPlugin = CSSPlugin;
  exports.Circ = Circ;
  exports.Cubic = Cubic;
  exports.Elastic = Elastic;
  exports.Expo = Expo;
  exports.Linear = Linear;
  exports.Power0 = Power0;
  exports.Power1 = Power1;
  exports.Power2 = Power2;
  exports.Power3 = Power3;
  exports.Power4 = Power4;
  exports.Quad = Quad;
  exports.Quart = Quart;
  exports.Quint = Quint;
  exports.Sine = Sine;
  exports.SteppedEase = SteppedEase;
  exports.Strong = Strong;
  exports.TimelineLite = Timeline;
  exports.TimelineMax = Timeline;
  exports.TweenLite = Tween;
  exports.TweenMax = TweenMaxWithCSS;
  exports.default = gsapWithCSS;
  exports.gsap = gsapWithCSS;

  if (typeof(window) === 'undefined' || window !== exports) {Object.defineProperty(exports, '__esModule', { value: true });} else {delete window.default;}

})));


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fprojects%2Ftelaqua-the-landing-page&absolutePagePath=C%3A%5CUsers%5Cisabe%5CDevelopper%5CmyPortfolio%5Csrc%5Cpages%5Cprojects%5Ctelaqua-the-landing-page.js!./":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fprojects%2Ftelaqua-the-landing-page&absolutePagePath=C%3A%5CUsers%5Cisabe%5CDevelopper%5CmyPortfolio%5Csrc%5Cpages%5Cprojects%5Ctelaqua-the-landing-page.js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/projects/telaqua-the-landing-page",
      function () {
        return __webpack_require__(/*! ./src/pages/projects/telaqua-the-landing-page.js */ "./src/pages/projects/telaqua-the-landing-page.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/components/Contact/Contact.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/next/node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/components/Contact/Contact.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Contact_container__XiA0w {\n  width: 100vw;\n  margin: 0 auto;\n  background: #262f43;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.Contact_container__XiA0w .Contact_contact__xdoJM {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  margin: 50px 0 50px 100px;\n  min-height: 150px;\n  color: #d88a83;\n}\n.Contact_container__XiA0w h3 {\n  margin: 0;\n  font-size: 100px;\n  color: #d88a83;\n  font-family: \"Gilroy-ExtraBold\";\n}\n.Contact_container__XiA0w a {\n  color: white;\n  text-decoration: none;\n  font-size: 20px;\n}\n.Contact_container__XiA0w p {\n  font-size: 20px;\n  color: white;\n}\n.Contact_container__XiA0w .Contact_social__3rrv5 {\n  display: -webkit-flex;\n  display: flex;\n}\n.Contact_container__XiA0w .Contact_social__3rrv5 a {\n  text-decoration: none;\n  transition: all 0.3s ease-in-out;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-align-items: center;\n          align-items: center;\n  height: 50px;\n  margin-right: 30px;\n}\n.Contact_container__XiA0w .Contact_social__3rrv5 a:hover span {\n  display: inline;\n  -webkit-animation: Contact_projects-animation__1OEfj 0.7s infinite;\n          animation: Contact_projects-animation__1OEfj 0.7s infinite;\n  font-size: 10px;\n  margin-top: 10px;\n  color: #d88a83;\n}\n.Contact_container__XiA0w .Contact_social__3rrv5 a img {\n  height: 40px;\n}\n.Contact_container__XiA0w .Contact_social__3rrv5 a span {\n  display: none;\n  transition: all 0.3s ease-in-out;\n}\n\n@-webkit-keyframes Contact_projects-animation__1OEfj {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes Contact_projects-animation__1OEfj {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}", "",{"version":3,"sources":["webpack://Contact.module.scss"],"names":[],"mappings":"AAIA;EACI,YAAA;EACA,cAAA;EACA,mBALM;EAMN,kBAAA;EACA,SAAA;EACA,OAAA;EACA,qBAAA;EAAA,aAAA;EACA,+BAAA;UAAA,uBAAA;EACA,2BAAA;UAAA,mBAAA;AAHJ;AAKI;EACI,qBAAA;EAAA,aAAA;EACA,8BAAA;UAAA,sBAAA;EACA,yBAAA;EACA,iBAAA;EACA,cApBA;AAiBR;AAMI;EACI,SAAA;EACA,gBAAA;EACA,cA1BA;EA2BA,+BAAA;AAJR;AAOI;EACI,YAAA;EACA,qBAAA;EACA,eAAA;AALR;AAQI;EACI,eAAA;EACA,YAAA;AANR;AASI;EACE,qBAAA;EAAA,aAAA;AAPN;AASM;EACE,qBAAA;EACA,gCAAA;EACA,qBAAA;EAAA,aAAA;EACA,8BAAA;UAAA,sBAAA;EACA,2BAAA;UAAA,mBAAA;EACA,YAAA;EACA,kBAAA;AAPR;AASQ;EACE,eAAA;EACA,kEAAA;UAAA,0DAAA;EACA,eAAA;EACA,gBAAA;EACA,cA1DF;AAmDR;AAUQ;EACE,YAAA;AARV;AAWQ;EACE,aAAA;EACA,gCAAA;AATV;;AAeA;EACI;IACE,UAAA;EAZJ;EAcE;IACE,UAAA;EAZJ;AACF;;AAMA;EACI;IACE,UAAA;EAZJ;EAcE;IACE,UAAA;EAZJ;AACF","sourcesContent":["$brown: #d88a83;\r\n$blu: #394359;\r\n$darkBlu: #262f43;\r\n\r\n.container {\r\n    width: 100vw;\r\n    margin: 0 auto;\r\n    background: $darkBlu;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n    .contact {\r\n        display: flex;\r\n        flex-direction: column;\r\n        margin: 50px 0 50px 100px;\r\n        min-height: 150px;\r\n        color: $brown;\r\n    }\r\n\r\n    h3 {\r\n        margin: 0;\r\n        font-size: 100px;\r\n        color: $brown;\r\n        font-family: \"Gilroy-ExtraBold\";\r\n    }\r\n\r\n    a {\r\n        color: white;\r\n        text-decoration: none;\r\n        font-size: 20px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n        color: white;\r\n    }\r\n\r\n    .social {\r\n      display: flex;\r\n\r\n      a {\r\n        text-decoration: none;\r\n        transition: all 0.3s ease-in-out;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        height: 50px;\r\n        margin-right: 30px;\r\n\r\n        &:hover span {\r\n          display: inline;\r\n          animation: projects-animation .7s infinite;\r\n          font-size: 10px;\r\n          margin-top: 10px;\r\n          color: $brown;\r\n        }\r\n\r\n        img {\r\n          height: 40px;\r\n        }\r\n\r\n        span {\r\n          display: none;\r\n          transition: all 0.3s ease-in-out;\r\n        }\r\n      }\r\n    }\r\n}\r\n\r\n@keyframes projects-animation {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Contact_container__XiA0w",
	"contact": "Contact_contact__xdoJM",
	"social": "Contact_social__3rrv5",
	"projects-animation": "Contact_projects-animation__1OEfj"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/components/Layout/Layout.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/next/node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/components/Layout/Layout.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Layout_container__2QLYW {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n.Layout_container__2QLYW .Layout_containerInner__1J9kR {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-align-items: center;\n          align-items: center;\n  width: 90%;\n}\n.Layout_container__2QLYW#Layout_color__1z3P7 {\n  background: #394359;\n}", "",{"version":3,"sources":["webpack://Layout.module.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;EAAA,aAAA;EACA,+BAAA;UAAA,uBAAA;EACA,gBAAA;EACA,kBAAA;AACF;AACE;EACE,qBAAA;EAAA,aAAA;EACA,8BAAA;UAAA,sBAAA;EACA,2BAAA;UAAA,mBAAA;EACA,UAAA;AACJ;AAEE;EACE,mBAAA;AAAJ","sourcesContent":[".container {\r\n  display: flex;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n  position: relative;\r\n\r\n  .containerInner {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 90%;\r\n  }\r\n\r\n  &#color {\r\n    background: #394359;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Layout_container__2QLYW",
	"containerInner": "Layout_containerInner__1J9kR",
	"color": "Layout_color__1z3P7"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/pages/projects/ProjectItem/ProjectItem.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/next/node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/pages/projects/ProjectItem/ProjectItem.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ProjectItem_container__2N80Z {\n  color: #fff;\n  width: 90%;\n  margin-bottom: 400px;\n}\n.ProjectItem_container__2N80Z .ProjectItem_hero__2aRdg {\n  height: 500px;\n  position: relative;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.ProjectItem_container__2N80Z .ProjectItem_hero__2aRdg img {\n  width: 100%;\n  height: 90%;\n  -webkit-filter: grayscale(90%);\n          filter: grayscale(90%);\n  object-fit: cover;\n}\n.ProjectItem_container__2N80Z .ProjectItem_hero__2aRdg .ProjectItem_heroTitle__3A7-X {\n  height: 130px;\n  position: absolute;\n  bottom: -10px;\n  overflow: hidden;\n}\n.ProjectItem_container__2N80Z .ProjectItem_hero__2aRdg .ProjectItem_heroTitle__3A7-X h1 {\n  margin: 0;\n  font-size: 7vw;\n  color: #d88a83;\n}\n.ProjectItem_container__2N80Z .ProjectItem_description__17RhM {\n  display: -webkit-flex;\n  display: flex;\n  margin: 100px 0 50px 0;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n}\n@media (max-width: 480px) {\n  .ProjectItem_container__2N80Z .ProjectItem_description__17RhM {\n    margin: 50px 0 0;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n  }\n}\n.ProjectItem_container__2N80Z .ProjectItem_description__17RhM p {\n  font-size: 15px;\n  line-height: 20px;\n}\n.ProjectItem_container__2N80Z .ProjectItem_description__17RhM .ProjectItem_descriptionLeft__2Jz8U {\n  width: 40%;\n}\n@media (max-width: 480px) {\n  .ProjectItem_container__2N80Z .ProjectItem_description__17RhM .ProjectItem_descriptionLeft__2Jz8U {\n    width: 100%;\n  }\n}\n.ProjectItem_container__2N80Z .ProjectItem_description__17RhM .ProjectItem_descriptionLeft__2Jz8U div {\n  margin-bottom: 30px;\n  min-height: 50px;\n}\n.ProjectItem_container__2N80Z .ProjectItem_description__17RhM .ProjectItem_descriptionLeft__2Jz8U div .ProjectItem_titleContainer__22q3Q, .ProjectItem_container__2N80Z .ProjectItem_description__17RhM .ProjectItem_descriptionLeft__2Jz8U div .ProjectItem_contentContainer__24EhY {\n  overflow: hidden;\n  min-height: 30px !important;\n  margin: 0;\n}\n.ProjectItem_container__2N80Z .ProjectItem_description__17RhM .ProjectItem_descriptionRight__388vu {\n  width: 40%;\n}\n@media (max-width: 480px) {\n  .ProjectItem_container__2N80Z .ProjectItem_description__17RhM .ProjectItem_descriptionRight__388vu {\n    width: 100%;\n  }\n}\n.ProjectItem_container__2N80Z .ProjectItem_description__17RhM .ProjectItem_descriptionRight__388vu div {\n  margin-bottom: 30px;\n  min-height: 50px;\n}\n.ProjectItem_container__2N80Z .ProjectItem_description__17RhM .ProjectItem_descriptionRight__388vu div .ProjectItem_titleContainer__22q3Q, .ProjectItem_container__2N80Z .ProjectItem_description__17RhM .ProjectItem_descriptionRight__388vu div .ProjectItem_contentContainer__24EhY {\n  overflow: hidden;\n  min-height: 30px !important;\n  margin: 0;\n}\n.ProjectItem_container__2N80Z .ProjectItem_description__17RhM .ProjectItem_descriptionRight__388vu .ProjectItem_descriptionRightLink__2fHSf {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: flex-end;\n          justify-content: flex-end;\n  overflow: hidden;\n}\n.ProjectItem_container__2N80Z .ProjectItem_description__17RhM .ProjectItem_descriptionRight__388vu .ProjectItem_descriptionRightLink__2fHSf a {\n  color: #d88a83;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n.ProjectItem_container__2N80Z .ProjectItem_description__17RhM .ProjectItem_descriptionRight__388vu div {\n  margin-bottom: 50px;\n}\n.ProjectItem_container__2N80Z .ProjectItem_images__rfn1C {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 690px) {\n  .ProjectItem_container__2N80Z .ProjectItem_images__rfn1C {\n    -webkit-flex-direction: column;\n            flex-direction: column;\n  }\n}\n.ProjectItem_container__2N80Z .ProjectItem_images__rfn1C img {\n  max-width: 25vw;\n  height: 380px;\n  object-fit: cover;\n}\n@media (max-width: 690px) {\n  .ProjectItem_container__2N80Z .ProjectItem_images__rfn1C img {\n    max-width: 100%;\n    width: 100% !important;\n    min-height: 380px;\n  }\n}\n@media (max-width: 768px) {\n  .ProjectItem_container__2N80Z .ProjectItem_images__rfn1C img {\n    width: 200px;\n    height: 160px;\n  }\n}\n.ProjectItem_container__2N80Z .ProjectItem_images__rfn1C img.ProjectItem_imageTwo__1ynsg {\n  margin-top: 50px;\n}\n.ProjectItem_container__2N80Z .ProjectItem_images__rfn1C img.ProjectItem_imageThree__1MjFk {\n  margin-top: 100px;\n}\n@media (max-width: 480px) {\n  .ProjectItem_container__2N80Z .ProjectItem_images__rfn1C img.ProjectItem_imageThree__1MjFk {\n    margin-top: 50px;\n  }\n}\n@media (max-width: 690px) {\n  .ProjectItem_container__2N80Z .ProjectItem_images__rfn1C img.ProjectItem_imageThree__1MjFk {\n    margin: 50px 0 100px 0;\n  }\n}\n.ProjectItem_container__2N80Z .ProjectItem_images__rfn1C img#ProjectItem_tabletImage__f86tl {\n  height: 500px;\n}\n@media (max-width: 690px) {\n  .ProjectItem_container__2N80Z .ProjectItem_images__rfn1C img#ProjectItem_tabletImage__f86tl {\n    max-width: 100% !important;\n    min-height: 500px;\n  }\n}\n@media (max-width: 768px) {\n  .ProjectItem_container__2N80Z .ProjectItem_images__rfn1C img#ProjectItem_tabletImage__f86tl {\n    width: 200px;\n    height: 220px;\n  }\n}\n.ProjectItem_container__2N80Z .ProjectItem_images__rfn1C img#ProjectItem_mobileImage__1uOoc {\n  object-fit: contain;\n  height: 670px;\n  /*@include mobile {\n    min-height: 500px;\n  } \n\n  @include tablet {\n    width: 180px;\n    height: 400px;\n  }*/\n}\n@media (max-width: 690px) {\n  .ProjectItem_container__2N80Z .ProjectItem_images__rfn1C img#ProjectItem_mobileImage__1uOoc {\n    display: none;\n    /*max-width: 100%;\n    min-height: 800px;\n    border: 1px solid red;*/\n  }\n}\n.ProjectItem_container__2N80Z h3, .ProjectItem_container__2N80Z .ProjectItem_screen__38Ce7 {\n  color: #262f43;\n}\n@media (max-width: 768px) {\n  .ProjectItem_container__2N80Z h3, .ProjectItem_container__2N80Z .ProjectItem_screen__38Ce7 {\n    margin-top: 0px;\n  }\n}\n.ProjectItem_container__2N80Z h3 {\n  margin: 0;\n}\n.ProjectItem_container__2N80Z .ProjectItem_screenTitle__2JRLf {\n  overflow: hidden;\n}\n@media (max-width: 690px) {\n  .ProjectItem_container__2N80Z .ProjectItem_screenTitle__2JRLf#ProjectItem_screenTitleMobile__6bwzl {\n    display: none;\n  }\n}\n.ProjectItem_container__2N80Z .ProjectItem_screenTitle__2JRLf .ProjectItem_screen__38Ce7 {\n  font-size: 16px;\n  letter-spacing: 10px;\n}", "",{"version":3,"sources":["webpack://ProjectItem.module.scss"],"names":[],"mappings":"AAkCA;EACE,WAAA;EACA,UAAA;EACA,oBAAA;AAjCF;AAmCE;EACE,aAAA;EACA,kBAAA;EACA,qBAAA;EAAA,aAAA;EACA,8BAAA;UAAA,sBAAA;EACA,2BAAA;UAAA,mBAAA;AAjCJ;AAmCI;EACE,WAAA;EACA,WAAA;EACA,8BAAA;UAAA,sBAAA;EACA,iBAAA;AAjCN;AAoCI;EACE,aAAA;EACA,kBAAA;EACA,aAAA;EACA,gBAAA;AAlCN;AAoCM;EAEE,SAAA;EACA,cAAA;EACA,cA/DA;AA4BR;AAwCE;EACE,qBAAA;EAAA,aAAA;EACA,sBAAA;EACA,sCAAA;UAAA,8BAAA;AAtCJ;AAlBE;EAqDA;IAMI,gBAAA;IACA,8BAAA;YAAA,sBAAA;EArCJ;AACF;AAuCI;EACE,eAAA;EACA,iBAAA;AArCN;AAwCI;EACE,UAAA;AAtCN;AA/BE;EAoEE;IAII,WAAA;EArCN;AACF;AAuCM;EACE,mBAAA;EACA,gBAAA;AArCR;AAuCM;EACE,gBAAA;EACA,2BAAA;EACA,SAAA;AArCR;AA0CI;EACE,UAAA;AAxCN;AAhDE;EAuFE;IAII,WAAA;EAvCN;AACF;AAyCM;EACE,mBAAA;EACA,gBAAA;AAvCR;AAyCM;EACE,gBAAA;EACA,2BAAA;EACA,SAAA;AAvCR;AA2CM;EACE,qBAAA;EAAA,aAAA;EACA,iCAAA;UAAA,yBAAA;EACA,gBAAA;AAzCR;AA2CQ;EACE,cA9HF;EA+HE,mBAAA;EACA,yBAAA;AAzCV;AA6CM;EACE,mBAAA;AA3CR;AAgDE;EACE,qBAAA;EAAA,aAAA;EACA,sCAAA;UAAA,8BAAA;EACA,kBAAA;EACA,gBAAA;AA9CJ;AA1EE;EAoHA;IAOI,8BAAA;YAAA,sBAAA;EA7CJ;AACF;AA+CI;EACE,eAAA;EACA,aAAA;EACA,iBAAA;AA7CN;AApFE;EA8HE;IAMI,eAAA;IACA,sBAAA;IACA,iBAAA;EA5CN;AACF;AApFE;EAuHE;IAYI,YAAA;IACA,aAAA;EA3CN;AACF;AA6CM;EACE,gBAAA;AA3CR;AA8CM;EACE,iBAAA;AA5CR;AA9GE;EAyJI;IAII,gBAAA;EA3CR;AACF;AA5GE;EAkJI;IAOI,sBAAA;EAzCR;AACF;AA4CM;EAEE,aAAA;AA3CR;AApHE;EA6JI;IAKI,0BAAA;IACA,iBAAA;EA1CR;AACF;AAnHE;EAsJI;IAUI,YAAA;IACA,aAAA;EAzCR;AACF;AA4CM;EACE,mBAAA;EACA,aAAA;EAUA;;;;;;;IAAA;AA5CR;AA5IE;EA4KI;IAMI,aAAA;IACA;;2BAAA;EAhCR;AACF;AAiDE;EACE,cA1NM;AA2KV;AAhJE;EA8LA;IAII,eAAA;EA9CJ;AACF;AAiDE;EACE,SAAA;AA/CJ;AAkDE;EACE,gBAAA;AAhDJ;AAlKE;EAoNE;IAEI,aAAA;EAhDN;AACF;AAmDI;EACE,eAAA;EACA,oBAAA;AAjDN","sourcesContent":["$brown: #d88a83;\r\n$blu: #394359;\r\n$darkBlu: #262f43;\r\n\r\n// Small tablets and large smartphones (landscape view)\r\n$screen-sm-min: 480px;\r\n\r\n//The road between large smatphone and small tablet\r\n$screen-sm-max: 690px;\r\n \r\n// Tablets (portrait view)\r\n$screen-md-min: 768px;\r\n\r\n// Small devices\r\n@mixin mobile {\r\n  @media (max-width: #{$screen-sm-min}) {\r\n      @content;\r\n  }\r\n}\r\n\r\n// Small tablet\r\n@mixin small {\r\n  @media (max-width: #{$screen-sm-max}) {\r\n      @content;\r\n  }\r\n}\r\n\r\n// Medium devices\r\n@mixin tablet {\r\n  @media (max-width: #{$screen-md-min}) {\r\n      @content;\r\n  }\r\n}\r\n\r\n.container {\r\n  color: #fff;\r\n  width: 90%;\r\n  margin-bottom: 400px;\r\n\r\n  .hero {\r\n    height: 500px;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    img {\r\n      width: 100%;\r\n      height: 90%;\r\n      filter: grayscale(90%);\r\n      object-fit: cover;\r\n    }\r\n\r\n    .heroTitle {\r\n      height: 130px;\r\n      position: absolute;\r\n      bottom: -10px;\r\n      overflow: hidden;\r\n\r\n      h1 {\r\n        \r\n        margin: 0;\r\n        font-size: 7vw;\r\n        color: $brown;\r\n      }\r\n    }\r\n\r\n  }\r\n  .description {\r\n    display: flex;\r\n    margin: 100px 0 50px 0;\r\n    justify-content: space-between;\r\n\r\n    @include mobile {\r\n      margin: 50px 0 0;\r\n      flex-direction: column;\r\n    }\r\n\r\n    p {\r\n      font-size: 15px;\r\n      line-height: 20px;\r\n    }\r\n\r\n    .descriptionLeft {\r\n      width: 40%;\r\n\r\n      @include mobile {\r\n        width: 100%;\r\n      }\r\n      \r\n      div {\r\n        margin-bottom: 30px;\r\n        min-height: 50px;\r\n\r\n      .titleContainer, .contentContainer {\r\n        overflow: hidden;\r\n        min-height: 30px !important;\r\n        margin: 0;\r\n      }\r\n      }\r\n    }\r\n\r\n    .descriptionRight {\r\n      width: 40%;\r\n\r\n      @include mobile {\r\n        width: 100%;\r\n      }\r\n     \r\n      div {\r\n        margin-bottom: 30px;\r\n        min-height: 50px;\r\n\r\n      .titleContainer, .contentContainer {\r\n        overflow: hidden;\r\n        min-height: 30px !important;\r\n        margin: 0;\r\n      }\r\n      }\r\n\r\n      .descriptionRightLink {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        overflow: hidden;\r\n\r\n        a {\r\n          color: $brown;\r\n          letter-spacing: 2px;\r\n          text-transform: uppercase;\r\n        }\r\n      }\r\n\r\n      div {\r\n        margin-bottom: 50px;\r\n      }\r\n    }\r\n  }\r\n\r\n  .images {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    position: relative;\r\n    overflow: hidden;\r\n    \r\n    @include small {\r\n      flex-direction: column;\r\n    }\r\n\r\n    img {\r\n      max-width: 25vw;\r\n      height: 380px;\r\n      object-fit: cover;\r\n\r\n      @include small {\r\n        max-width: 100%;\r\n        width: 100% !important;\r\n        min-height: 380px;\r\n      }\r\n\r\n      @include tablet {\r\n        width: 200px;\r\n        height: 160px;\r\n      }\r\n\r\n      &.imageTwo {\r\n        margin-top: 50px;\r\n      }\r\n\r\n      &.imageThree {\r\n        margin-top: 100px;\r\n\r\n        @include mobile {\r\n          margin-top: 50px;\r\n        }\r\n        @include small {\r\n          margin: 50px 0 100px 0;\r\n        }\r\n      }\r\n\r\n      &#tabletImage {\r\n        //max-width: 30vw;\r\n        height: 500px;\r\n\r\n        @include small {\r\n          max-width: 100% !important;\r\n          min-height: 500px;\r\n        }\r\n\r\n        @include tablet {\r\n          width: 200px;\r\n          height: 220px;\r\n        }\r\n      }\r\n      \r\n      &#mobileImage {\r\n        object-fit: contain;\r\n        height: 670px;\r\n        //border: 1px solid red;\r\n\r\n        @include small {\r\n          display: none;\r\n          /*max-width: 100%;\r\n          min-height: 800px;\r\n          border: 1px solid red;*/\r\n        }\r\n\r\n        /*@include mobile {\r\n          min-height: 500px;\r\n        } \r\n\r\n        @include tablet {\r\n          width: 180px;\r\n          height: 400px;\r\n        }*/\r\n      }\r\n    }\r\n    \r\n  }\r\n\r\n  h3, .screen {\r\n    color: $darkBlu;\r\n\r\n    @include tablet {\r\n      margin-top: 0px;\r\n    }\r\n  }\r\n\r\n  h3 {\r\n    margin: 0;\r\n  }\r\n  \r\n  .screenTitle {\r\n    overflow: hidden;\r\n\r\n    &#screenTitleMobile {\r\n      @include small {\r\n        display: none;\r\n      }\r\n    }\r\n\r\n    .screen {\r\n      font-size: 16px;\r\n      letter-spacing: 10px;\r\n    }\r\n  }\r\n  \r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "ProjectItem_container__2N80Z",
	"hero": "ProjectItem_hero__2aRdg",
	"heroTitle": "ProjectItem_heroTitle__3A7-X",
	"description": "ProjectItem_description__17RhM",
	"descriptionLeft": "ProjectItem_descriptionLeft__2Jz8U",
	"titleContainer": "ProjectItem_titleContainer__22q3Q",
	"contentContainer": "ProjectItem_contentContainer__24EhY",
	"descriptionRight": "ProjectItem_descriptionRight__388vu",
	"descriptionRightLink": "ProjectItem_descriptionRightLink__2fHSf",
	"images": "ProjectItem_images__rfn1C",
	"imageTwo": "ProjectItem_imageTwo__1ynsg",
	"imageThree": "ProjectItem_imageThree__1MjFk",
	"tabletImage": "ProjectItem_tabletImage__f86tl",
	"mobileImage": "ProjectItem_mobileImage__1uOoc",
	"screen": "ProjectItem_screen__38Ce7",
	"screenTitle": "ProjectItem_screenTitle__2JRLf",
	"screenTitleMobile": "ProjectItem_screenTitleMobile__6bwzl"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.13.1';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./src/components/Contact/Contact.component.jsx":
/*!******************************************************!*\
  !*** ./src/components/Contact/Contact.component.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Contact_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.module.scss */ "./src/components/Contact/Contact.module.scss");
/* harmony import */ var _Contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Contact_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\isabe\\Developper\\myPortfolio\\src\\components\\Contact\\Contact.component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Contact = () => {
  return __jsx("div", {
    className: _Contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 12
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 15
    }
  }, "Say hi!")), __jsx("div", {
    className: _Contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contact,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "mailto:messie.np@digital-village.fr",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 59
    }
  }, "messie.np@digital-village.fr")), __jsx("p", {
    id: _Contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.num,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 32
    }
  }, "+33 7 68 25 08 01")), __jsx("div", {
    className: _Contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.social,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://github.com/Messie88",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/images/github.svg",
    alt: "arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, "github")), __jsx("a", {
    href: "https://www.linkedin.com/in/pathe-messie-nungi-pambu/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/images/linkedin.svg",
    alt: "arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, "linkedin")))));
};

_c = Contact;
/* harmony default export */ __webpack_exports__["default"] = (Contact);

var _c;

$RefreshReg$(_c, "Contact");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Contact/Contact.module.scss":
/*!****************************************************!*\
  !*** ./src/components/Contact/Contact.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Contact.module.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/components/Contact/Contact.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Contact.module.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/components/Contact/Contact.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Contact.module.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/components/Contact/Contact.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Contact/index.js":
/*!*****************************************!*\
  !*** ./src/components/Contact/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.component */ "./src/components/Contact/Contact.component.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_Contact_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Layout/Layout.component.jsx":
/*!****************************************************!*\
  !*** ./src/components/Layout/Layout.component.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.module.scss */ "./src/components/Layout/Layout.module.scss");
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\isabe\\Developper\\myPortfolio\\src\\components\\Layout\\Layout.component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = ({
  children,
  color
}) => {
  return __jsx("div", {
    className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    id: color && _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.containerInner,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, children));
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Layout/Layout.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Layout/Layout.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Layout.module.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/components/Layout/Layout.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Layout.module.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/components/Layout/Layout.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Layout.module.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/components/Layout/Layout.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.component */ "./src/components/Layout/Layout.component.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_Layout_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/projects/ProjectItem/ProjectItem.component.jsx":
/*!******************************************************************!*\
  !*** ./src/pages/projects/ProjectItem/ProjectItem.component.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/dist/gsap */ "./node_modules/gsap/dist/gsap.js");
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ "./node_modules/gsap/dist/ScrollTrigger.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectItem.module.scss */ "./src/pages/projects/ProjectItem/ProjectItem.module.scss");
/* harmony import */ var _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\isabe\\Developper\\myPortfolio\\src\\pages\\projects\\ProjectItem\\ProjectItem.component.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"]);

const ProjectItem = ({
  heroImage,
  title,
  role,
  challenges,
  technos,
  linkToSeeLive,
  imageOne,
  imageTwo,
  imageThree,
  tabletImageOne,
  tabletImageTwo,
  tabletImageThree,
  mobileImageOne,
  mobileImageTwo,
  mobileImageThree
}) => {
  _s();

  let heroTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let image = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let descriptionRoleTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let descriptionTechosTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let descriptionChallengeTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let descriptionRoleContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let descriptionTechosContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let descriptionChallengeContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let descriptionLink = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let descriptionImageDesktop1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let descriptionImageDesktop2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let descriptionImageDesktop3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let descriptionImageTablet1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let descriptionImageTablet2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let descriptionImageTablet3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let descriptionImageMobile1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let descriptionImageMobile2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let descriptionImageMobile3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let desktopTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let tabletTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let mobileTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(heroTitle, {
      y: 200,
      ease: "back",
      delay: 0.5,
      duration: 1.1
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(image, {
      width: "100vw",
      duration: 1
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(descriptionRoleTitle, {
      scrollTrigger: {
        trigger: descriptionRoleTitle,
        toggleActions: "play"
      },
      y: 200,
      duration: .5
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(descriptionTechosTitle, {
      scrollTrigger: {
        trigger: descriptionTechosTitle,
        toggleActions: "play"
      },
      y: 200,
      duration: .5
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(descriptionChallengeTitle, {
      scrollTrigger: {
        trigger: descriptionChallengeTitle,
        toggleActions: "play"
      },
      y: 200,
      duration: .5
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(descriptionRoleContent, {
      scrollTrigger: {
        trigger: descriptionRoleContent,
        toggleActions: "play"
      },
      y: 200,
      duration: .5,
      delay: .2
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(descriptionTechosContent, {
      scrollTrigger: {
        trigger: descriptionTechosContent,
        toggleActions: "play"
      },
      y: 200,
      duration: .5,
      delay: .2
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(descriptionChallengeContent, {
      scrollTrigger: {
        trigger: descriptionChallengeContent,
        toggleActions: "play"
      },
      y: 200,
      duration: .5,
      delay: .2
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(descriptionLink, {
      scrollTrigger: {
        trigger: descriptionLink,
        toggleActions: "play"
      },
      x: 200,
      duration: .5,
      delay: .2
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(desktopTitle, {
      scrollTrigger: {
        trigger: desktopTitle,
        toggleActions: "restart play reverse",
        end: "top 94%"
      },
      y: 200,
      duration: .5
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(tabletTitle, {
      scrollTrigger: {
        trigger: tabletTitle,
        toggleActions: "restart play reverse",
        end: "top 94%"
      },
      y: 200,
      duration: .5
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(mobileTitle, {
      scrollTrigger: {
        trigger: mobileTitle,
        toggleActions: "restart play reverse",
        end: "top 94%"
      },
      y: 200,
      duration: .5
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(descriptionImageDesktop1, {
      scrollTrigger: {
        trigger: descriptionImageDesktop1
      },
      y: 200,
      duration: .8,
      delay: .2
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(descriptionImageDesktop2, {
      scrollTrigger: {
        trigger: descriptionImageDesktop2
      },
      y: 200,
      duration: .8,
      delay: .3
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(descriptionImageDesktop3, {
      scrollTrigger: {
        trigger: descriptionImageDesktop3
      },
      y: 200,
      duration: .8,
      delay: .4
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(descriptionImageTablet1, {
      scrollTrigger: {
        trigger: descriptionImageTablet1
      },
      y: 200,
      duration: .8,
      delay: .2
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(descriptionImageTablet2, {
      scrollTrigger: {
        trigger: descriptionImageTablet2
      },
      y: 200,
      duration: .8,
      delay: .3
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(descriptionImageTablet3, {
      scrollTrigger: {
        trigger: descriptionImageTablet3
      },
      y: 200,
      duration: .8,
      delay: .4
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(descriptionImageMobile1, {
      scrollTrigger: {
        trigger: descriptionImageMobile1
      },
      y: 200,
      duration: .8,
      delay: .2
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(descriptionImageMobile2, {
      scrollTrigger: {
        trigger: descriptionImageMobile2
      },
      y: 200,
      duration: .8,
      delay: .3
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(descriptionImageMobile3, {
      scrollTrigger: {
        trigger: descriptionImageMobile3
      },
      y: 200,
      duration: .8,
      delay: .4
    });
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.hero,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: heroImage,
    alt: "Project Screen",
    ref: el => image = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heroTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 9
    }
  }, __jsx("h1", {
    ref: el => heroTitle = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 11
    }
  }, title))), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.descriptionLeft,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.titleContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 13
    }
  }, __jsx("h3", {
    ref: el => descriptionRoleTitle = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 15
    }
  }, "Role :")), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contentContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  }, __jsx("p", {
    ref: el => descriptionRoleContent = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 13
    }
  }, role))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.titleContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 13
    }
  }, __jsx("h3", {
    ref: el => descriptionChallengeTitle = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 15
    }
  }, "Challenges")), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contentContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }
  }, __jsx("p", {
    ref: el => descriptionChallengeContent = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 15
    }
  }, challenges)))), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.descriptionRight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.titleContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 13
    }
  }, __jsx("h3", {
    ref: el => descriptionTechosTitle = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 15
    }
  }, "Technos :")), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contentContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 13
    }
  }, __jsx("p", {
    ref: el => descriptionTechosContent = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 15
    }
  }, technos))), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.descriptionRightLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: linkToSeeLive,
    target: "_blank",
    rel: "noopener noreferrer",
    ref: el => descriptionLink = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 13
    }
  }, "See live")))), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.screenTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.screen,
    ref: el => desktopTitle = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 9
    }
  }, "DESKTOP")), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.images,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: imageOne,
    alt: "",
    ref: el => descriptionImageDesktop1 = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: imageTwo,
    alt: "",
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageTwo,
    ref: el => descriptionImageDesktop2 = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: imageThree,
    alt: "",
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageThree,
    ref: el => descriptionImageDesktop3 = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.screenTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.screen,
    ref: el => tabletTitle = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 9
    }
  }, "TABLET")), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.images,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: tabletImageOne,
    alt: "",
    id: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tabletImage,
    ref: el => descriptionImageTablet1 = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: tabletImageTwo,
    alt: "",
    id: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tabletImage,
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageTwo,
    ref: el => descriptionImageTablet2 = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: tabletImageThree,
    alt: "",
    id: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tabletImage,
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageThree,
    ref: el => descriptionImageTablet3 = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.screenTitle,
    id: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.screenTitleMobile,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.screen,
    ref: el => mobileTitle = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 9
    }
  }, "MOBILE")), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.images,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: mobileImageOne,
    alt: "",
    id: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mobileImage,
    ref: el => descriptionImageMobile1 = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: mobileImageTwo,
    alt: "",
    id: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mobileImage,
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageTwo,
    ref: el => descriptionImageMobile2 = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: mobileImageThree,
    alt: "",
    id: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mobileImage,
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageThree,
    ref: el => descriptionImageMobile3 = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 7
    }
  }, "Previous Project / next Project")));
};

_s(ProjectItem, "YSXdGSv6L7MiR0a5sWiu1PVmVkQ=");

_c = ProjectItem;
/* harmony default export */ __webpack_exports__["default"] = (ProjectItem);

var _c;

$RefreshReg$(_c, "ProjectItem");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/projects/ProjectItem/ProjectItem.module.scss":
/*!****************************************************************!*\
  !*** ./src/pages/projects/ProjectItem/ProjectItem.module.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./ProjectItem.module.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/pages/projects/ProjectItem/ProjectItem.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./ProjectItem.module.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/pages/projects/ProjectItem/ProjectItem.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./ProjectItem.module.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/pages/projects/ProjectItem/ProjectItem.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/projects/ProjectItem/index.js":
/*!*************************************************!*\
  !*** ./src/pages/projects/ProjectItem/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ProjectItem_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem.component */ "./src/pages/projects/ProjectItem/ProjectItem.component.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_ProjectItem_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/projects/telaqua-the-landing-page.js":
/*!********************************************************!*\
  !*** ./src/pages/projects/telaqua-the-landing-page.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProjectItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectItem */ "./src/pages/projects/ProjectItem/index.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Contact */ "./src/components/Contact/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout/index.js");
var _jsxFileName = "C:\\Users\\isabe\\Developper\\myPortfolio\\src\\pages\\projects\\telaqua-the-landing-page.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const telaquaLandingPage = () => {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_ProjectItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    heroImage: "/images/telaqua.png",
    title: "Telaqua",
    role: "WEB DEVELOPMENT",
    challenges: "Learn Nextjs, i18n, TypeScript, the Scrum workflow and then, migrating the project to gatsby. All this in less than 3 months",
    technos: "NextJs, GatsbyJs, ReactJs, TypeScript, Styled-Components, i18n\r (for translation )",
    linkToSeeLive: "https://www.telaqua.com/",
    imageOne: "/images/telaqua.png",
    imageTwo: "/images/agromote.png",
    imageThree: "/images/howItWorks.png",
    tabletImageOne: "/images/agromoteTablet.png",
    tabletImageTwo: "/images/tabletPresence.png",
    tabletImageThree: "/images/tabletSolution.png",
    mobileImageOne: "/images/mobileApp.png",
    mobileImageTwo: "/images/mobileHowItWorks.png",
    mobileImageThree: "/images/mobileAgro.png",
    previousLink: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (telaquaLandingPage);

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fprojects%2Ftelaqua-the-landing-page&absolutePagePath=C%3A%5CUsers%5Cisabe%5CDevelopper%5CmyPortfolio%5Csrc%5Cpages%5Cprojects%5Ctelaqua-the-landing-page.js!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3NhcC9kaXN0L2dzYXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdC9Db250YWN0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvamVjdHMvUHJvamVjdEl0ZW0vUHJvamVjdEl0ZW0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3QvQ29udGFjdC5jb21wb25lbnQuanN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db250YWN0L0NvbnRhY3QubW9kdWxlLnNjc3M/YjVkZCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5jb21wb25lbnQuanN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0Lm1vZHVsZS5zY3NzP2ZiN2QiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3RzL1Byb2plY3RJdGVtL1Byb2plY3RJdGVtLmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9qZWN0cy9Qcm9qZWN0SXRlbS9Qcm9qZWN0SXRlbS5tb2R1bGUuc2Nzcz9lN2RhIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvamVjdHMvUHJvamVjdEl0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9qZWN0cy90ZWxhcXVhLXRoZS1sYW5kaW5nLXBhZ2UuanMiXSwibmFtZXMiOlsiQ29udGFjdCIsInN0eWxlcyIsImNvbnRhaW5lciIsImNvbnRhY3QiLCJudW0iLCJzb2NpYWwiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImNvbG9yIiwiY29udGFpbmVySW5uZXIiLCJnc2FwIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmlnZ2VyIiwiUHJvamVjdEl0ZW0iLCJoZXJvSW1hZ2UiLCJ0aXRsZSIsInJvbGUiLCJjaGFsbGVuZ2VzIiwidGVjaG5vcyIsImxpbmtUb1NlZUxpdmUiLCJpbWFnZU9uZSIsImltYWdlVHdvIiwiaW1hZ2VUaHJlZSIsInRhYmxldEltYWdlT25lIiwidGFibGV0SW1hZ2VUd28iLCJ0YWJsZXRJbWFnZVRocmVlIiwibW9iaWxlSW1hZ2VPbmUiLCJtb2JpbGVJbWFnZVR3byIsIm1vYmlsZUltYWdlVGhyZWUiLCJoZXJvVGl0bGUiLCJ1c2VSZWYiLCJpbWFnZSIsImRlc2NyaXB0aW9uUm9sZVRpdGxlIiwiZGVzY3JpcHRpb25UZWNob3NUaXRsZSIsImRlc2NyaXB0aW9uQ2hhbGxlbmdlVGl0bGUiLCJkZXNjcmlwdGlvblJvbGVDb250ZW50IiwiZGVzY3JpcHRpb25UZWNob3NDb250ZW50IiwiZGVzY3JpcHRpb25DaGFsbGVuZ2VDb250ZW50IiwiZGVzY3JpcHRpb25MaW5rIiwiZGVzY3JpcHRpb25JbWFnZURlc2t0b3AxIiwiZGVzY3JpcHRpb25JbWFnZURlc2t0b3AyIiwiZGVzY3JpcHRpb25JbWFnZURlc2t0b3AzIiwiZGVzY3JpcHRpb25JbWFnZVRhYmxldDEiLCJkZXNjcmlwdGlvbkltYWdlVGFibGV0MiIsImRlc2NyaXB0aW9uSW1hZ2VUYWJsZXQzIiwiZGVzY3JpcHRpb25JbWFnZU1vYmlsZTEiLCJkZXNjcmlwdGlvbkltYWdlTW9iaWxlMiIsImRlc2NyaXB0aW9uSW1hZ2VNb2JpbGUzIiwiZGVza3RvcFRpdGxlIiwidGFibGV0VGl0bGUiLCJtb2JpbGVUaXRsZSIsInVzZUVmZmVjdCIsImZyb20iLCJ5IiwiZWFzZSIsImRlbGF5IiwiZHVyYXRpb24iLCJ3aWR0aCIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwidG9nZ2xlQWN0aW9ucyIsIngiLCJlbmQiLCJoZXJvIiwiZWwiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uTGVmdCIsInRpdGxlQ29udGFpbmVyIiwiY29udGVudENvbnRhaW5lciIsImRlc2NyaXB0aW9uUmlnaHQiLCJkZXNjcmlwdGlvblJpZ2h0TGluayIsInNjcmVlblRpdGxlIiwic2NyZWVuIiwiaW1hZ2VzIiwidGFibGV0SW1hZ2UiLCJzY3JlZW5UaXRsZU1vYmlsZSIsIm1vYmlsZUltYWdlIiwidGVsYXF1YUxhbmRpbmdQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQSxDQUFDLEtBQTREO0FBQzdELENBQUMsU0FDdUU7QUFDeEUsQ0FBQyw0QkFBNEI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0osRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDJCQUEyQixvQkFBb0IsK0JBQStCLG9CQUFvQixtQkFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQSxZQUFZOztBQUVaOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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LE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLDRFQUE0RSxhQUFhO0FBQ3pGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUCxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixPQUFPO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLGVBQWU7QUFDM0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDhDQUE4QztBQUM5QyxLQUFLO0FBQ0w7QUFDQSw0Q0FBNEM7QUFDNUMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsK0RBQStEO0FBQy9EOztBQUVBO0FBQ0E7QUFDQSxrR0FBa0c7QUFDbEc7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGNBQWMsa0JBQWtCO0FBQy9FO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxrQkFBa0IsY0FBYztBQUN6Rjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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QVFFLFlBQVEsRUFBQyxxQkFSWDtBQVNFLFlBQVEsRUFBQyxzQkFUWDtBQVVFLGNBQVUsRUFBQyx3QkFWYjtBQVdFLGtCQUFjLEVBQUMsNEJBWGpCO0FBWUUsa0JBQWMsRUFBQyw0QkFaakI7QUFhRSxvQkFBZ0IsRUFBQyw0QkFibkI7QUFjRSxrQkFBYyxFQUFDLHVCQWRqQjtBQWVFLGtCQUFjLEVBQUMsOEJBZmpCO0FBZ0JFLG9CQUFnQixFQUFDLHdCQWhCbkI7QUFpQkUsZ0JBQVksRUFBQyxHQWpCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFvQkUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJGLENBREY7QUF3QkQsQ0F6QkQ7O0FBMkJlQSxpRkFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3BhZ2VzL3Byb2plY3RzL3RlbGFxdWEtdGhlLWxhbmRpbmctcGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcblx0KGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC53aW5kb3cgPSBnbG9iYWwud2luZG93IHx8IHt9KSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cblx0LyohXG5cdCAqIFNjcm9sbFRyaWdnZXIgMy41LjFcblx0ICogaHR0cHM6Ly9ncmVlbnNvY2suY29tXG5cdCAqXG5cdCAqIEBsaWNlbnNlIENvcHlyaWdodCAyMDA4LTIwMjAsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblx0ICogU3ViamVjdCB0byB0aGUgdGVybXMgYXQgaHR0cHM6Ly9ncmVlbnNvY2suY29tL3N0YW5kYXJkLWxpY2Vuc2Ugb3IgZm9yXG5cdCAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBhZ3JlZW1lbnQgaXNzdWVkIHdpdGggdGhhdCBtZW1iZXJzaGlwLlxuXHQgKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cblx0Ki9cblx0dmFyIGdzYXAsXG5cdCAgICBfY29yZUluaXR0ZWQsXG5cdCAgICBfd2luLFxuXHQgICAgX2RvYyxcblx0ICAgIF9kb2NFbCxcblx0ICAgIF9ib2R5LFxuXHQgICAgX3Jvb3QsXG5cdCAgICBfcmVzaXplRGVsYXksXG5cdCAgICBfcmFmLFxuXHQgICAgX3JlcXVlc3QsXG5cdCAgICBfdG9BcnJheSxcblx0ICAgIF9jbGFtcCxcblx0ICAgIF90aW1lMixcblx0ICAgIF9zeW5jSW50ZXJ2YWwsXG5cdCAgICBfcmVmcmVzaGluZyxcblx0ICAgIF9wb2ludGVySXNEb3duLFxuXHQgICAgX3RyYW5zZm9ybVByb3AsXG5cdCAgICBfaSxcblx0ICAgIF9wcmV2V2lkdGgsXG5cdCAgICBfcHJldkhlaWdodCxcblx0ICAgIF9hdXRvUmVmcmVzaCxcblx0ICAgIF9zb3J0LFxuXHQgICAgX2xpbWl0Q2FsbGJhY2tzLFxuXHQgICAgX3N0YXJ0dXAgPSAxLFxuXHQgICAgX3Byb3hpZXMgPSBbXSxcblx0ICAgIF9zY3JvbGxlcnMgPSBbXSxcblx0ICAgIF9nZXRUaW1lID0gRGF0ZS5ub3csXG5cdCAgICBfdGltZTEgPSBfZ2V0VGltZSgpLFxuXHQgICAgX2xhc3RTY3JvbGxUaW1lID0gMCxcblx0ICAgIF9lbmFibGVkID0gMSxcblx0ICAgIF9wYXNzVGhyb3VnaCA9IGZ1bmN0aW9uIF9wYXNzVGhyb3VnaCh2KSB7XG5cdCAgcmV0dXJuIHY7XG5cdH0sXG5cdCAgICBfd2luZG93RXhpc3RzID0gZnVuY3Rpb24gX3dpbmRvd0V4aXN0cygpIHtcblx0ICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcblx0fSxcblx0ICAgIF9nZXRHU0FQID0gZnVuY3Rpb24gX2dldEdTQVAoKSB7XG5cdCAgcmV0dXJuIGdzYXAgfHwgX3dpbmRvd0V4aXN0cygpICYmIChnc2FwID0gd2luZG93LmdzYXApICYmIGdzYXAucmVnaXN0ZXJQbHVnaW4gJiYgZ3NhcDtcblx0fSxcblx0ICAgIF9pc1ZpZXdwb3J0ID0gZnVuY3Rpb24gX2lzVmlld3BvcnQoZSkge1xuXHQgIHJldHVybiAhIX5fcm9vdC5pbmRleE9mKGUpO1xuXHR9LFxuXHQgICAgX2dldFByb3h5UHJvcCA9IGZ1bmN0aW9uIF9nZXRQcm94eVByb3AoZWxlbWVudCwgcHJvcGVydHkpIHtcblx0ICByZXR1cm4gfl9wcm94aWVzLmluZGV4T2YoZWxlbWVudCkgJiYgX3Byb3hpZXNbX3Byb3hpZXMuaW5kZXhPZihlbGVtZW50KSArIDFdW3Byb3BlcnR5XTtcblx0fSxcblx0ICAgIF9nZXRTY3JvbGxGdW5jID0gZnVuY3Rpb24gX2dldFNjcm9sbEZ1bmMoZWxlbWVudCwgX3JlZikge1xuXHQgIHZhciBzID0gX3JlZi5zLFxuXHQgICAgICBzYyA9IF9yZWYuc2M7XG5cblx0ICB2YXIgaSA9IF9zY3JvbGxlcnMuaW5kZXhPZihlbGVtZW50KSxcblx0ICAgICAgb2Zmc2V0ID0gc2MgPT09IF92ZXJ0aWNhbC5zYyA/IDEgOiAyO1xuXG5cdCAgIX5pICYmIChpID0gX3Njcm9sbGVycy5wdXNoKGVsZW1lbnQpIC0gMSk7XG5cdCAgcmV0dXJuIF9zY3JvbGxlcnNbaSArIG9mZnNldF0gfHwgKF9zY3JvbGxlcnNbaSArIG9mZnNldF0gPSBfZ2V0UHJveHlQcm9wKGVsZW1lbnQsIHMpIHx8IChfaXNWaWV3cG9ydChlbGVtZW50KSA/IHNjIDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IGVsZW1lbnRbc10gPSB2YWx1ZSA6IGVsZW1lbnRbc107XG5cdCAgfSkpO1xuXHR9LFxuXHQgICAgX2dldEJvdW5kc0Z1bmMgPSBmdW5jdGlvbiBfZ2V0Qm91bmRzRnVuYyhlbGVtZW50KSB7XG5cdCAgcmV0dXJuIF9nZXRQcm94eVByb3AoZWxlbWVudCwgXCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIikgfHwgKF9pc1ZpZXdwb3J0KGVsZW1lbnQpID8gZnVuY3Rpb24gKCkge1xuXHQgICAgX3dpbk9mZnNldHMud2lkdGggPSBfd2luLmlubmVyV2lkdGg7XG5cdCAgICBfd2luT2Zmc2V0cy5oZWlnaHQgPSBfd2luLmlubmVySGVpZ2h0O1xuXHQgICAgcmV0dXJuIF93aW5PZmZzZXRzO1xuXHQgIH0gOiBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gX2dldEJvdW5kcyhlbGVtZW50KTtcblx0ICB9KTtcblx0fSxcblx0ICAgIF9nZXRTaXplRnVuYyA9IGZ1bmN0aW9uIF9nZXRTaXplRnVuYyhzY3JvbGxlciwgaXNWaWV3cG9ydCwgX3JlZjIpIHtcblx0ICB2YXIgZCA9IF9yZWYyLmQsXG5cdCAgICAgIGQyID0gX3JlZjIuZDIsXG5cdCAgICAgIGEgPSBfcmVmMi5hO1xuXHQgIHJldHVybiAoYSA9IF9nZXRQcm94eVByb3Aoc2Nyb2xsZXIsIFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIpKSA/IGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBhKClbZF07XG5cdCAgfSA6IGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiAoaXNWaWV3cG9ydCA/IF93aW5bXCJpbm5lclwiICsgZDJdIDogc2Nyb2xsZXJbXCJjbGllbnRcIiArIGQyXSkgfHwgMDtcblx0ICB9O1xuXHR9LFxuXHQgICAgX2dldE9mZnNldHNGdW5jID0gZnVuY3Rpb24gX2dldE9mZnNldHNGdW5jKGVsZW1lbnQsIGlzVmlld3BvcnQpIHtcblx0ICByZXR1cm4gIWlzVmlld3BvcnQgfHwgfl9wcm94aWVzLmluZGV4T2YoZWxlbWVudCkgPyBfZ2V0Qm91bmRzRnVuYyhlbGVtZW50KSA6IGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBfd2luT2Zmc2V0cztcblx0ICB9O1xuXHR9LFxuXHQgICAgX21heFNjcm9sbCA9IGZ1bmN0aW9uIF9tYXhTY3JvbGwoZWxlbWVudCwgX3JlZjMpIHtcblx0ICB2YXIgcyA9IF9yZWYzLnMsXG5cdCAgICAgIGQyID0gX3JlZjMuZDIsXG5cdCAgICAgIGQgPSBfcmVmMy5kLFxuXHQgICAgICBhID0gX3JlZjMuYTtcblx0ICByZXR1cm4gKHMgPSBcInNjcm9sbFwiICsgZDIpICYmIChhID0gX2dldFByb3h5UHJvcChlbGVtZW50LCBzKSkgPyBhKCkgLSBfZ2V0Qm91bmRzRnVuYyhlbGVtZW50KSgpW2RdIDogX2lzVmlld3BvcnQoZWxlbWVudCkgPyBNYXRoLm1heChfZG9jRWxbc10sIF9ib2R5W3NdKSAtIChfd2luW1wiaW5uZXJcIiArIGQyXSB8fCBfZG9jRWxbXCJjbGllbnRcIiArIGQyXSB8fCBfYm9keVtcImNsaWVudFwiICsgZDJdKSA6IGVsZW1lbnRbc10gLSBlbGVtZW50W1wib2Zmc2V0XCIgKyBkMl07XG5cdH0sXG5cdCAgICBfaXRlcmF0ZUF1dG9SZWZyZXNoID0gZnVuY3Rpb24gX2l0ZXJhdGVBdXRvUmVmcmVzaChmdW5jLCBldmVudHMpIHtcblx0ICBmb3IgKHZhciBpID0gMDsgaSA8IF9hdXRvUmVmcmVzaC5sZW5ndGg7IGkgKz0gMykge1xuXHQgICAgKCFldmVudHMgfHwgfmV2ZW50cy5pbmRleE9mKF9hdXRvUmVmcmVzaFtpICsgMV0pKSAmJiBmdW5jKF9hdXRvUmVmcmVzaFtpXSwgX2F1dG9SZWZyZXNoW2kgKyAxXSwgX2F1dG9SZWZyZXNoW2kgKyAyXSk7XG5cdCAgfVxuXHR9LFxuXHQgICAgX2lzU3RyaW5nID0gZnVuY3Rpb24gX2lzU3RyaW5nKHZhbHVlKSB7XG5cdCAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIjtcblx0fSxcblx0ICAgIF9pc0Z1bmN0aW9uID0gZnVuY3Rpb24gX2lzRnVuY3Rpb24odmFsdWUpIHtcblx0ICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCI7XG5cdH0sXG5cdCAgICBfaXNOdW1iZXIgPSBmdW5jdGlvbiBfaXNOdW1iZXIodmFsdWUpIHtcblx0ICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiO1xuXHR9LFxuXHQgICAgX2lzT2JqZWN0ID0gZnVuY3Rpb24gX2lzT2JqZWN0KHZhbHVlKSB7XG5cdCAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIjtcblx0fSxcblx0ICAgIF9jYWxsSWZGdW5jID0gZnVuY3Rpb24gX2NhbGxJZkZ1bmModmFsdWUpIHtcblx0ICByZXR1cm4gX2lzRnVuY3Rpb24odmFsdWUpICYmIHZhbHVlKCk7XG5cdH0sXG5cdCAgICBfY29tYmluZUZ1bmMgPSBmdW5jdGlvbiBfY29tYmluZUZ1bmMoZjEsIGYyKSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgIHZhciByZXN1bHQxID0gX2NhbGxJZkZ1bmMoZjEpLFxuXHQgICAgICAgIHJlc3VsdDIgPSBfY2FsbElmRnVuYyhmMik7XG5cblx0ICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIF9jYWxsSWZGdW5jKHJlc3VsdDEpO1xuXG5cdCAgICAgIF9jYWxsSWZGdW5jKHJlc3VsdDIpO1xuXHQgICAgfTtcblx0ICB9O1xuXHR9LFxuXHQgICAgX2FicyA9IE1hdGguYWJzLFxuXHQgICAgX3Njcm9sbExlZnQgPSBcInNjcm9sbExlZnRcIixcblx0ICAgIF9zY3JvbGxUb3AgPSBcInNjcm9sbFRvcFwiLFxuXHQgICAgX2xlZnQgPSBcImxlZnRcIixcblx0ICAgIF90b3AgPSBcInRvcFwiLFxuXHQgICAgX3JpZ2h0ID0gXCJyaWdodFwiLFxuXHQgICAgX2JvdHRvbSA9IFwiYm90dG9tXCIsXG5cdCAgICBfd2lkdGggPSBcIndpZHRoXCIsXG5cdCAgICBfaGVpZ2h0ID0gXCJoZWlnaHRcIixcblx0ICAgIF9SaWdodCA9IFwiUmlnaHRcIixcblx0ICAgIF9MZWZ0ID0gXCJMZWZ0XCIsXG5cdCAgICBfVG9wID0gXCJUb3BcIixcblx0ICAgIF9Cb3R0b20gPSBcIkJvdHRvbVwiLFxuXHQgICAgX3BhZGRpbmcgPSBcInBhZGRpbmdcIixcblx0ICAgIF9tYXJnaW4gPSBcIm1hcmdpblwiLFxuXHQgICAgX1dpZHRoID0gXCJXaWR0aFwiLFxuXHQgICAgX0hlaWdodCA9IFwiSGVpZ2h0XCIsXG5cdCAgICBfcHggPSBcInB4XCIsXG5cdCAgICBfaG9yaXpvbnRhbCA9IHtcblx0ICBzOiBfc2Nyb2xsTGVmdCxcblx0ICBwOiBfbGVmdCxcblx0ICBwMjogX0xlZnQsXG5cdCAgb3M6IF9yaWdodCxcblx0ICBvczI6IF9SaWdodCxcblx0ICBkOiBfd2lkdGgsXG5cdCAgZDI6IF9XaWR0aCxcblx0ICBhOiBcInhcIixcblx0ICBzYzogZnVuY3Rpb24gc2ModmFsdWUpIHtcblx0ICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gX3dpbi5zY3JvbGxUbyh2YWx1ZSwgX3ZlcnRpY2FsLnNjKCkpIDogX3dpbi5wYWdlWE9mZnNldCB8fCBfZG9jW19zY3JvbGxMZWZ0XSB8fCBfZG9jRWxbX3Njcm9sbExlZnRdIHx8IF9ib2R5W19zY3JvbGxMZWZ0XSB8fCAwO1xuXHQgIH1cblx0fSxcblx0ICAgIF92ZXJ0aWNhbCA9IHtcblx0ICBzOiBfc2Nyb2xsVG9wLFxuXHQgIHA6IF90b3AsXG5cdCAgcDI6IF9Ub3AsXG5cdCAgb3M6IF9ib3R0b20sXG5cdCAgb3MyOiBfQm90dG9tLFxuXHQgIGQ6IF9oZWlnaHQsXG5cdCAgZDI6IF9IZWlnaHQsXG5cdCAgYTogXCJ5XCIsXG5cdCAgb3A6IF9ob3Jpem9udGFsLFxuXHQgIHNjOiBmdW5jdGlvbiBzYyh2YWx1ZSkge1xuXHQgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBfd2luLnNjcm9sbFRvKF9ob3Jpem9udGFsLnNjKCksIHZhbHVlKSA6IF93aW4ucGFnZVlPZmZzZXQgfHwgX2RvY1tfc2Nyb2xsVG9wXSB8fCBfZG9jRWxbX3Njcm9sbFRvcF0gfHwgX2JvZHlbX3Njcm9sbFRvcF0gfHwgMDtcblx0ICB9XG5cdH0sXG5cdCAgICBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIHtcblx0ICByZXR1cm4gX3dpbi5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXHR9LFxuXHQgICAgX21ha2VQb3NpdGlvbmFibGUgPSBmdW5jdGlvbiBfbWFrZVBvc2l0aW9uYWJsZShlbGVtZW50KSB7XG5cdCAgcmV0dXJuIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiID8gXCJhYnNvbHV0ZVwiIDogXCJyZWxhdGl2ZVwiO1xuXHR9LFxuXHQgICAgX3NldERlZmF1bHRzID0gZnVuY3Rpb24gX3NldERlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHtcblx0ICBmb3IgKHZhciBwIGluIGRlZmF1bHRzKSB7XG5cdCAgICBwIGluIG9iaiB8fCAob2JqW3BdID0gZGVmYXVsdHNbcF0pO1xuXHQgIH1cblxuXHQgIHJldHVybiBvYmo7XG5cdH0sXG5cdCAgICBfZ2V0Qm91bmRzID0gZnVuY3Rpb24gX2dldEJvdW5kcyhlbGVtZW50LCB3aXRob3V0VHJhbnNmb3Jtcykge1xuXHQgIHZhciB0d2VlbiA9IHdpdGhvdXRUcmFuc2Zvcm1zICYmIF9nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW190cmFuc2Zvcm1Qcm9wXSAhPT0gXCJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMClcIiAmJiBnc2FwLnRvKGVsZW1lbnQsIHtcblx0ICAgIHg6IDAsXG5cdCAgICB5OiAwLFxuXHQgICAgeFBlcmNlbnQ6IDAsXG5cdCAgICB5UGVyY2VudDogMCxcblx0ICAgIHJvdGF0aW9uOiAwLFxuXHQgICAgcm90YXRpb25YOiAwLFxuXHQgICAgcm90YXRpb25ZOiAwLFxuXHQgICAgc2NhbGU6IDEsXG5cdCAgICBza2V3WDogMCxcblx0ICAgIHNrZXdZOiAwXG5cdCAgfSkucHJvZ3Jlc3MoMSksXG5cdCAgICAgIGJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdCAgdHdlZW4gJiYgdHdlZW4ucHJvZ3Jlc3MoMCkua2lsbCgpO1xuXHQgIHJldHVybiBib3VuZHM7XG5cdH0sXG5cdCAgICBfZ2V0U2l6ZSA9IGZ1bmN0aW9uIF9nZXRTaXplKGVsZW1lbnQsIF9yZWY0KSB7XG5cdCAgdmFyIGQyID0gX3JlZjQuZDI7XG5cdCAgcmV0dXJuIGVsZW1lbnRbXCJvZmZzZXRcIiArIGQyXSB8fCBlbGVtZW50W1wiY2xpZW50XCIgKyBkMl0gfHwgMDtcblx0fSxcblx0ICAgIF9nZXRMYWJlbHMgPSBmdW5jdGlvbiBfZ2V0TGFiZWxzKGFuaW1hdGlvbikge1xuXHQgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgIHZhciBhID0gW10sXG5cdCAgICAgICAgbGFiZWxzID0gYW5pbWF0aW9uLmxhYmVscyxcblx0ICAgICAgICBkdXJhdGlvbiA9IGFuaW1hdGlvbi5kdXJhdGlvbigpLFxuXHQgICAgICAgIHA7XG5cblx0ICAgIGZvciAocCBpbiBsYWJlbHMpIHtcblx0ICAgICAgYS5wdXNoKGxhYmVsc1twXSAvIGR1cmF0aW9uKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIGdzYXAudXRpbHMuc25hcChhLCB2YWx1ZSk7XG5cdCAgfTtcblx0fSxcblx0ICAgIF9tdWx0aUxpc3RlbmVyID0gZnVuY3Rpb24gX211bHRpTGlzdGVuZXIoZnVuYywgZWxlbWVudCwgdHlwZXMsIGNhbGxiYWNrKSB7XG5cdCAgcmV0dXJuIHR5cGVzLnNwbGl0KFwiLFwiKS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG5cdCAgICByZXR1cm4gZnVuYyhlbGVtZW50LCB0eXBlLCBjYWxsYmFjayk7XG5cdCAgfSk7XG5cdH0sXG5cdCAgICBfYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBfYWRkTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgZnVuYykge1xuXHQgIHJldHVybiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZnVuYywge1xuXHQgICAgcGFzc2l2ZTogdHJ1ZVxuXHQgIH0pO1xuXHR9LFxuXHQgICAgX3JlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gX3JlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGZ1bmMpIHtcblx0ICByZXR1cm4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmMpO1xuXHR9LFxuXHQgICAgX21hcmtlckRlZmF1bHRzID0ge1xuXHQgIHN0YXJ0Q29sb3I6IFwiZ3JlZW5cIixcblx0ICBlbmRDb2xvcjogXCJyZWRcIixcblx0ICBpbmRlbnQ6IDAsXG5cdCAgZm9udFNpemU6IFwiMTZweFwiLFxuXHQgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCJcblx0fSxcblx0ICAgIF9kZWZhdWx0cyA9IHtcblx0ICB0b2dnbGVBY3Rpb25zOiBcInBsYXlcIixcblx0ICBhbnRpY2lwYXRlUGluOiAwXG5cdH0sXG5cdCAgICBfa2V5d29yZHMgPSB7XG5cdCAgdG9wOiAwLFxuXHQgIGxlZnQ6IDAsXG5cdCAgY2VudGVyOiAwLjUsXG5cdCAgYm90dG9tOiAxLFxuXHQgIHJpZ2h0OiAxXG5cdH0sXG5cdCAgICBfb2Zmc2V0VG9QeCA9IGZ1bmN0aW9uIF9vZmZzZXRUb1B4KHZhbHVlLCBzaXplKSB7XG5cdCAgaWYgKF9pc1N0cmluZyh2YWx1ZSkpIHtcblx0ICAgIHZhciBlcUluZGV4ID0gdmFsdWUuaW5kZXhPZihcIj1cIiksXG5cdCAgICAgICAgcmVsYXRpdmUgPSB+ZXFJbmRleCA/ICsodmFsdWUuY2hhckF0KGVxSW5kZXggLSAxKSArIDEpICogcGFyc2VGbG9hdCh2YWx1ZS5zdWJzdHIoZXFJbmRleCArIDEpKSA6IDA7XG5cblx0ICAgIGlmIChyZWxhdGl2ZSkge1xuXHQgICAgICB2YWx1ZS5pbmRleE9mKFwiJVwiKSA+IGVxSW5kZXggJiYgKHJlbGF0aXZlICo9IHNpemUgLyAxMDApO1xuXHQgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cigwLCBlcUluZGV4IC0gMSk7XG5cdCAgICB9XG5cblx0ICAgIHZhbHVlID0gcmVsYXRpdmUgKyAodmFsdWUgaW4gX2tleXdvcmRzID8gX2tleXdvcmRzW3ZhbHVlXSAqIHNpemUgOiB+dmFsdWUuaW5kZXhPZihcIiVcIikgPyBwYXJzZUZsb2F0KHZhbHVlKSAqIHNpemUgLyAxMDAgOiBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwKTtcblx0ICB9XG5cblx0ICByZXR1cm4gdmFsdWU7XG5cdH0sXG5cdCAgICBfY3JlYXRlTWFya2VyID0gZnVuY3Rpb24gX2NyZWF0ZU1hcmtlcih0eXBlLCBuYW1lLCBjb250YWluZXIsIGRpcmVjdGlvbiwgX3JlZjUsIG9mZnNldCwgbWF0Y2hXaWR0aEVsKSB7XG5cdCAgdmFyIHN0YXJ0Q29sb3IgPSBfcmVmNS5zdGFydENvbG9yLFxuXHQgICAgICBlbmRDb2xvciA9IF9yZWY1LmVuZENvbG9yLFxuXHQgICAgICBmb250U2l6ZSA9IF9yZWY1LmZvbnRTaXplLFxuXHQgICAgICBpbmRlbnQgPSBfcmVmNS5pbmRlbnQsXG5cdCAgICAgIGZvbnRXZWlnaHQgPSBfcmVmNS5mb250V2VpZ2h0O1xuXG5cdCAgdmFyIGUgPSBfZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdCAgICAgIHVzZUZpeGVkUG9zaXRpb24gPSBfaXNWaWV3cG9ydChjb250YWluZXIpIHx8IF9nZXRQcm94eVByb3AoY29udGFpbmVyLCBcInBpblR5cGVcIikgPT09IFwiZml4ZWRcIixcblx0ICAgICAgaXNTY3JvbGxlciA9IHR5cGUuaW5kZXhPZihcInNjcm9sbGVyXCIpICE9PSAtMSxcblx0ICAgICAgcGFyZW50ID0gdXNlRml4ZWRQb3NpdGlvbiA/IF9ib2R5IDogY29udGFpbmVyLFxuXHQgICAgICBpc1N0YXJ0ID0gdHlwZS5pbmRleE9mKFwic3RhcnRcIikgIT09IC0xLFxuXHQgICAgICBjb2xvciA9IGlzU3RhcnQgPyBzdGFydENvbG9yIDogZW5kQ29sb3IsXG5cdCAgICAgIGNzcyA9IFwiYm9yZGVyLWNvbG9yOlwiICsgY29sb3IgKyBcIjtmb250LXNpemU6XCIgKyBmb250U2l6ZSArIFwiO2NvbG9yOlwiICsgY29sb3IgKyBcIjtmb250LXdlaWdodDpcIiArIGZvbnRXZWlnaHQgKyBcIjtwb2ludGVyLWV2ZW50czpub25lO3doaXRlLXNwYWNlOm5vd3JhcDtmb250LWZhbWlseTpzYW5zLXNlcmlmLEFyaWFsO3otaW5kZXg6MTAwMDtwYWRkaW5nOjRweCA4cHg7Ym9yZGVyLXdpZHRoOjA7Ym9yZGVyLXN0eWxlOnNvbGlkO1wiO1xuXG5cdCAgY3NzICs9IFwicG9zaXRpb246XCIgKyAoaXNTY3JvbGxlciAmJiB1c2VGaXhlZFBvc2l0aW9uID8gXCJmaXhlZDtcIiA6IFwiYWJzb2x1dGU7XCIpO1xuXHQgIChpc1Njcm9sbGVyIHx8ICF1c2VGaXhlZFBvc2l0aW9uKSAmJiAoY3NzICs9IChkaXJlY3Rpb24gPT09IF92ZXJ0aWNhbCA/IF9yaWdodCA6IF9ib3R0b20pICsgXCI6XCIgKyAob2Zmc2V0ICsgcGFyc2VGbG9hdChpbmRlbnQpKSArIFwicHg7XCIpO1xuXHQgIG1hdGNoV2lkdGhFbCAmJiAoY3NzICs9IFwiYm94LXNpemluZzpib3JkZXItYm94O3RleHQtYWxpZ246bGVmdDt3aWR0aDpcIiArIG1hdGNoV2lkdGhFbC5vZmZzZXRXaWR0aCArIFwicHg7XCIpO1xuXHQgIGUuX2lzU3RhcnQgPSBpc1N0YXJ0O1xuXHQgIGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJnc2FwLW1hcmtlci1cIiArIHR5cGUpO1xuXHQgIGUuc3R5bGUuY3NzVGV4dCA9IGNzcztcblx0ICBlLmlubmVyVGV4dCA9IG5hbWUgfHwgbmFtZSA9PT0gMCA/IHR5cGUgKyBcIi1cIiArIG5hbWUgOiB0eXBlO1xuXHQgIHBhcmVudC5pbnNlcnRCZWZvcmUoZSwgcGFyZW50LmNoaWxkcmVuWzBdKTtcblx0ICBlLl9vZmZzZXQgPSBlW1wib2Zmc2V0XCIgKyBkaXJlY3Rpb24ub3AuZDJdO1xuXG5cdCAgX3Bvc2l0aW9uTWFya2VyKGUsIDAsIGRpcmVjdGlvbiwgaXNTdGFydCk7XG5cblx0ICByZXR1cm4gZTtcblx0fSxcblx0ICAgIF9wb3NpdGlvbk1hcmtlciA9IGZ1bmN0aW9uIF9wb3NpdGlvbk1hcmtlcihtYXJrZXIsIHN0YXJ0LCBkaXJlY3Rpb24sIGZsaXBwZWQpIHtcblx0ICB2YXIgdmFycyA9IHtcblx0ICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuXHQgIH0sXG5cdCAgICAgIHNpZGUgPSBkaXJlY3Rpb25bZmxpcHBlZCA/IFwib3MyXCIgOiBcInAyXCJdLFxuXHQgICAgICBvcHBvc2l0ZVNpZGUgPSBkaXJlY3Rpb25bZmxpcHBlZCA/IFwicDJcIiA6IFwib3MyXCJdO1xuXHQgIG1hcmtlci5faXNGbGlwcGVkID0gZmxpcHBlZDtcblx0ICB2YXJzW2RpcmVjdGlvbi5hICsgXCJQZXJjZW50XCJdID0gZmxpcHBlZCA/IC0xMDAgOiAwO1xuXHQgIHZhcnNbZGlyZWN0aW9uLmFdID0gZmxpcHBlZCA/IDEgOiAwO1xuXHQgIHZhcnNbXCJib3JkZXJcIiArIHNpZGUgKyBfV2lkdGhdID0gMTtcblx0ICB2YXJzW1wiYm9yZGVyXCIgKyBvcHBvc2l0ZVNpZGUgKyBfV2lkdGhdID0gMDtcblx0ICB2YXJzW2RpcmVjdGlvbi5wXSA9IHN0YXJ0O1xuXHQgIGdzYXAuc2V0KG1hcmtlciwgdmFycyk7XG5cdH0sXG5cdCAgICBfdHJpZ2dlcnMgPSBbXSxcblx0ICAgIF9pZHMgPSB7fSxcblx0ICAgIF9zeW5jID0gZnVuY3Rpb24gX3N5bmMoKSB7XG5cdCAgcmV0dXJuIF9yZXF1ZXN0IHx8IChfcmVxdWVzdCA9IF9yYWYoX3VwZGF0ZUFsbCkpO1xuXHR9LFxuXHQgICAgX29uU2Nyb2xsID0gZnVuY3Rpb24gX29uU2Nyb2xsKCkge1xuXHQgIGlmICghX3JlcXVlc3QpIHtcblx0ICAgIF9yZXF1ZXN0ID0gX3JhZihfdXBkYXRlQWxsKTtcblx0ICAgIF9sYXN0U2Nyb2xsVGltZSB8fCBfZGlzcGF0Y2goXCJzY3JvbGxTdGFydFwiKTtcblx0ICAgIF9sYXN0U2Nyb2xsVGltZSA9IF9nZXRUaW1lKCk7XG5cdCAgfVxuXHR9LFxuXHQgICAgX29uUmVzaXplID0gZnVuY3Rpb24gX29uUmVzaXplKCkge1xuXHQgIHJldHVybiAhX3JlZnJlc2hpbmcgJiYgX3Jlc2l6ZURlbGF5LnJlc3RhcnQodHJ1ZSk7XG5cdH0sXG5cdCAgICBfbGlzdGVuZXJzID0ge30sXG5cdCAgICBfZW1wdHlBcnJheSA9IFtdLFxuXHQgICAgX21lZGlhID0gW10sXG5cdCAgICBfY3JlYXRpbmdNZWRpYSxcblx0ICAgIF9sYXN0TWVkaWFUaWNrLFxuXHQgICAgX29uTWVkaWFDaGFuZ2UgPSBmdW5jdGlvbiBfb25NZWRpYUNoYW5nZShlKSB7XG5cdCAgdmFyIHRpY2sgPSBnc2FwLnRpY2tlci5mcmFtZSxcblx0ICAgICAgbWF0Y2hlcyA9IFtdLFxuXHQgICAgICBpID0gMCxcblx0ICAgICAgaW5kZXg7XG5cblx0ICBpZiAoX2xhc3RNZWRpYVRpY2sgIT09IHRpY2sgfHwgX3N0YXJ0dXApIHtcblx0ICAgIF9yZXZlcnRBbGwoKTtcblxuXHQgICAgZm9yICg7IGkgPCBfbWVkaWEubGVuZ3RoOyBpICs9IDQpIHtcblx0ICAgICAgaW5kZXggPSBfd2luLm1hdGNoTWVkaWEoX21lZGlhW2ldKS5tYXRjaGVzO1xuXG5cdCAgICAgIGlmIChpbmRleCAhPT0gX21lZGlhW2kgKyAzXSkge1xuXHQgICAgICAgIF9tZWRpYVtpICsgM10gPSBpbmRleDtcblx0ICAgICAgICBpbmRleCA/IG1hdGNoZXMucHVzaChpKSA6IF9yZXZlcnRBbGwoMSwgX21lZGlhW2ldKSB8fCBfaXNGdW5jdGlvbihfbWVkaWFbaSArIDJdKSAmJiBfbWVkaWFbaSArIDJdKCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgX3JldmVydFJlY29yZGVkKCk7XG5cblx0ICAgIGZvciAoaSA9IDA7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgIGluZGV4ID0gbWF0Y2hlc1tpXTtcblx0ICAgICAgX2NyZWF0aW5nTWVkaWEgPSBfbWVkaWFbaW5kZXhdO1xuXHQgICAgICBfbWVkaWFbaW5kZXggKyAyXSA9IF9tZWRpYVtpbmRleCArIDFdKGUpO1xuXHQgICAgfVxuXG5cdCAgICBfY3JlYXRpbmdNZWRpYSA9IDA7XG5cblx0ICAgIF9yZWZyZXNoQWxsKDAsIDEpO1xuXG5cdCAgICBfbGFzdE1lZGlhVGljayA9IHRpY2s7XG5cblx0ICAgIF9kaXNwYXRjaChcIm1hdGNoTWVkaWFcIik7XG5cdCAgfVxuXHR9LFxuXHQgICAgX3NvZnRSZWZyZXNoID0gZnVuY3Rpb24gX3NvZnRSZWZyZXNoKCkge1xuXHQgIHJldHVybiBfcmVtb3ZlTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJzY3JvbGxFbmRcIiwgX3NvZnRSZWZyZXNoKSB8fCBfcmVmcmVzaEFsbCh0cnVlKTtcblx0fSxcblx0ICAgIF9kaXNwYXRjaCA9IGZ1bmN0aW9uIF9kaXNwYXRjaCh0eXBlKSB7XG5cdCAgcmV0dXJuIF9saXN0ZW5lcnNbdHlwZV0gJiYgX2xpc3RlbmVyc1t0eXBlXS5tYXAoZnVuY3Rpb24gKGYpIHtcblx0ICAgIHJldHVybiBmKCk7XG5cdCAgfSkgfHwgX2VtcHR5QXJyYXk7XG5cdH0sXG5cdCAgICBfc2F2ZWRTdHlsZXMgPSBbXSxcblx0ICAgIF9yZXZlcnRSZWNvcmRlZCA9IGZ1bmN0aW9uIF9yZXZlcnRSZWNvcmRlZChtZWRpYSkge1xuXHQgIGZvciAodmFyIGkgPSAwOyBpIDwgX3NhdmVkU3R5bGVzLmxlbmd0aDsgaSArPSA0KSB7XG5cdCAgICBpZiAoIW1lZGlhIHx8IF9zYXZlZFN0eWxlc1tpICsgM10gPT09IG1lZGlhKSB7XG5cdCAgICAgIF9zYXZlZFN0eWxlc1tpXS5zdHlsZS5jc3NUZXh0ID0gX3NhdmVkU3R5bGVzW2kgKyAxXTtcblx0ICAgICAgX3NhdmVkU3R5bGVzW2kgKyAyXS51bmNhY2hlID0gMTtcblx0ICAgIH1cblx0ICB9XG5cdH0sXG5cdCAgICBfcmV2ZXJ0QWxsID0gZnVuY3Rpb24gX3JldmVydEFsbChraWxsLCBtZWRpYSkge1xuXHQgIHZhciB0cmlnZ2VyO1xuXG5cdCAgZm9yIChfaSA9IDA7IF9pIDwgX3RyaWdnZXJzLmxlbmd0aDsgX2krKykge1xuXHQgICAgdHJpZ2dlciA9IF90cmlnZ2Vyc1tfaV07XG5cblx0ICAgIGlmICghbWVkaWEgfHwgdHJpZ2dlci5tZWRpYSA9PT0gbWVkaWEpIHtcblx0ICAgICAgaWYgKGtpbGwpIHtcblx0ICAgICAgICB0cmlnZ2VyLmtpbGwoMSk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdHJpZ2dlci5zY3JvbGwucmVjIHx8ICh0cmlnZ2VyLnNjcm9sbC5yZWMgPSB0cmlnZ2VyLnNjcm9sbCgpKTtcblx0ICAgICAgICB0cmlnZ2VyLnJldmVydCgpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgX3JldmVydFJlY29yZGVkKG1lZGlhKTtcblxuXHQgIG1lZGlhIHx8IF9kaXNwYXRjaChcInJldmVydFwiKTtcblx0fSxcblx0ICAgIF9yZWZyZXNoQWxsID0gZnVuY3Rpb24gX3JlZnJlc2hBbGwoZm9yY2UsIHNraXBSZXZlcnQpIHtcblx0ICBpZiAoX2xhc3RTY3JvbGxUaW1lICYmICFmb3JjZSkge1xuXHQgICAgX2FkZExpc3RlbmVyKFNjcm9sbFRyaWdnZXIsIFwic2Nyb2xsRW5kXCIsIF9zb2Z0UmVmcmVzaCk7XG5cblx0ICAgIHJldHVybjtcblx0ICB9XG5cblx0ICB2YXIgcmVmcmVzaEluaXRzID0gX2Rpc3BhdGNoKFwicmVmcmVzaEluaXRcIik7XG5cblx0ICBfc29ydCAmJiBTY3JvbGxUcmlnZ2VyLnNvcnQoKTtcblx0ICBza2lwUmV2ZXJ0IHx8IF9yZXZlcnRBbGwoKTtcblxuXHQgIGZvciAoX2kgPSAwOyBfaSA8IF90cmlnZ2Vycy5sZW5ndGg7IF9pKyspIHtcblx0ICAgIF90cmlnZ2Vyc1tfaV0ucmVmcmVzaCgpO1xuXHQgIH1cblxuXHQgIHJlZnJlc2hJbml0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0ICAgIHJldHVybiByZXN1bHQgJiYgcmVzdWx0LnJlbmRlciAmJiByZXN1bHQucmVuZGVyKC0xKTtcblx0ICB9KTtcblx0ICBfaSA9IF90cmlnZ2Vycy5sZW5ndGg7XG5cblx0ICB3aGlsZSAoX2ktLSkge1xuXHQgICAgX3RyaWdnZXJzW19pXS5zY3JvbGwucmVjID0gMDtcblx0ICB9XG5cblx0ICBfcmVzaXplRGVsYXkucGF1c2UoKTtcblxuXHQgIF9kaXNwYXRjaChcInJlZnJlc2hcIik7XG5cdH0sXG5cdCAgICBfbGFzdFNjcm9sbCA9IDAsXG5cdCAgICBfZGlyZWN0aW9uID0gMSxcblx0ICAgIF91cGRhdGVBbGwgPSBmdW5jdGlvbiBfdXBkYXRlQWxsKCkge1xuXHQgIHZhciBsID0gX3RyaWdnZXJzLmxlbmd0aCxcblx0ICAgICAgdGltZSA9IF9nZXRUaW1lKCksXG5cdCAgICAgIHJlY29yZFZlbG9jaXR5ID0gdGltZSAtIF90aW1lMSA+PSA1MCxcblx0ICAgICAgc2Nyb2xsID0gbCAmJiBfdHJpZ2dlcnNbMF0uc2Nyb2xsKCk7XG5cblx0ICBfZGlyZWN0aW9uID0gX2xhc3RTY3JvbGwgPiBzY3JvbGwgPyAtMSA6IDE7XG5cdCAgX2xhc3RTY3JvbGwgPSBzY3JvbGw7XG5cblx0ICBpZiAocmVjb3JkVmVsb2NpdHkpIHtcblx0ICAgIGlmIChfbGFzdFNjcm9sbFRpbWUgJiYgIV9wb2ludGVySXNEb3duICYmIHRpbWUgLSBfbGFzdFNjcm9sbFRpbWUgPiAyMDApIHtcblx0ICAgICAgX2xhc3RTY3JvbGxUaW1lID0gMDtcblxuXHQgICAgICBfZGlzcGF0Y2goXCJzY3JvbGxFbmRcIik7XG5cdCAgICB9XG5cblx0ICAgIF90aW1lMiA9IF90aW1lMTtcblx0ICAgIF90aW1lMSA9IHRpbWU7XG5cdCAgfVxuXG5cdCAgaWYgKF9kaXJlY3Rpb24gPCAwKSB7XG5cdCAgICBfaSA9IGw7XG5cblx0ICAgIHdoaWxlIChfaS0tKSB7XG5cdCAgICAgIF90cmlnZ2Vyc1tfaV0gJiYgX3RyaWdnZXJzW19pXS51cGRhdGUoMCwgcmVjb3JkVmVsb2NpdHkpO1xuXHQgICAgfVxuXG5cdCAgICBfZGlyZWN0aW9uID0gMTtcblx0ICB9IGVsc2Uge1xuXHQgICAgZm9yIChfaSA9IDA7IF9pIDwgbDsgX2krKykge1xuXHQgICAgICBfdHJpZ2dlcnNbX2ldICYmIF90cmlnZ2Vyc1tfaV0udXBkYXRlKDAsIHJlY29yZFZlbG9jaXR5KTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICBfcmVxdWVzdCA9IDA7XG5cdH0sXG5cdCAgICBfcHJvcE5hbWVzVG9Db3B5ID0gW19sZWZ0LCBfdG9wLCBfYm90dG9tLCBfcmlnaHQsIF9tYXJnaW4gKyBfQm90dG9tLCBfbWFyZ2luICsgX1JpZ2h0LCBfbWFyZ2luICsgX1RvcCwgX21hcmdpbiArIF9MZWZ0LCBcImRpc3BsYXlcIiwgXCJmbGV4U2hyaW5rXCIsIFwiZmxvYXRcIl0sXG5cdCAgICBfc3RhdGVQcm9wcyA9IF9wcm9wTmFtZXNUb0NvcHkuY29uY2F0KFtfd2lkdGgsIF9oZWlnaHQsIFwiYm94U2l6aW5nXCIsIFwibWF4XCIgKyBfV2lkdGgsIFwibWF4XCIgKyBfSGVpZ2h0LCBcInBvc2l0aW9uXCIsIF9tYXJnaW4sIF9wYWRkaW5nLCBfcGFkZGluZyArIF9Ub3AsIF9wYWRkaW5nICsgX1JpZ2h0LCBfcGFkZGluZyArIF9Cb3R0b20sIF9wYWRkaW5nICsgX0xlZnRdKSxcblx0ICAgIF9zd2FwUGluT3V0ID0gZnVuY3Rpb24gX3N3YXBQaW5PdXQocGluLCBzcGFjZXIsIHN0YXRlKSB7XG5cdCAgX3NldFN0YXRlKHN0YXRlKTtcblxuXHQgIGlmIChwaW4ucGFyZW50Tm9kZSA9PT0gc3BhY2VyKSB7XG5cdCAgICB2YXIgcGFyZW50ID0gc3BhY2VyLnBhcmVudE5vZGU7XG5cblx0ICAgIGlmIChwYXJlbnQpIHtcblx0ICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShwaW4sIHNwYWNlcik7XG5cdCAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChzcGFjZXIpO1xuXHQgICAgfVxuXHQgIH1cblx0fSxcblx0ICAgIF9zd2FwUGluSW4gPSBmdW5jdGlvbiBfc3dhcFBpbkluKHBpbiwgc3BhY2VyLCBjcywgc3BhY2VyU3RhdGUpIHtcblx0ICBpZiAocGluLnBhcmVudE5vZGUgIT09IHNwYWNlcikge1xuXHQgICAgdmFyIGkgPSBfcHJvcE5hbWVzVG9Db3B5Lmxlbmd0aCxcblx0ICAgICAgICBzcGFjZXJTdHlsZSA9IHNwYWNlci5zdHlsZSxcblx0ICAgICAgICBwaW5TdHlsZSA9IHBpbi5zdHlsZSxcblx0ICAgICAgICBwO1xuXG5cdCAgICB3aGlsZSAoaS0tKSB7XG5cdCAgICAgIHAgPSBfcHJvcE5hbWVzVG9Db3B5W2ldO1xuXHQgICAgICBzcGFjZXJTdHlsZVtwXSA9IGNzW3BdO1xuXHQgICAgfVxuXG5cdCAgICBzcGFjZXJTdHlsZS5wb3NpdGlvbiA9IGNzLnBvc2l0aW9uID09PSBcImFic29sdXRlXCIgPyBcImFic29sdXRlXCIgOiBcInJlbGF0aXZlXCI7XG5cdCAgICBjcy5kaXNwbGF5ID09PSBcImlubGluZVwiICYmIChzcGFjZXJTdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIik7XG5cdCAgICBwaW5TdHlsZVtfYm90dG9tXSA9IHBpblN0eWxlW19yaWdodF0gPSBcImF1dG9cIjtcblx0ICAgIHNwYWNlclN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XG5cdCAgICBzcGFjZXJTdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcblx0ICAgIHNwYWNlclN0eWxlW193aWR0aF0gPSBfZ2V0U2l6ZShwaW4sIF9ob3Jpem9udGFsKSArIF9weDtcblx0ICAgIHNwYWNlclN0eWxlW19oZWlnaHRdID0gX2dldFNpemUocGluLCBfdmVydGljYWwpICsgX3B4O1xuXHQgICAgc3BhY2VyU3R5bGVbX3BhZGRpbmddID0gcGluU3R5bGVbX21hcmdpbl0gPSBwaW5TdHlsZVtfdG9wXSA9IHBpblN0eWxlW19sZWZ0XSA9IFwiMFwiO1xuXG5cdCAgICBfc2V0U3RhdGUoc3BhY2VyU3RhdGUpO1xuXG5cdCAgICBwaW5TdHlsZVtfd2lkdGhdID0gcGluU3R5bGVbXCJtYXhcIiArIF9XaWR0aF0gPSBjc1tfd2lkdGhdO1xuXHQgICAgcGluU3R5bGVbX2hlaWdodF0gPSBwaW5TdHlsZVtcIm1heFwiICsgX0hlaWdodF0gPSBjc1tfaGVpZ2h0XTtcblx0ICAgIHBpblN0eWxlW19wYWRkaW5nXSA9IGNzW19wYWRkaW5nXTtcblx0ICAgIHBpbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFjZXIsIHBpbik7XG5cdCAgICBzcGFjZXIuYXBwZW5kQ2hpbGQocGluKTtcblx0ICB9XG5cdH0sXG5cdCAgICBfY2Fwc0V4cCA9IC8oW0EtWl0pL2csXG5cdCAgICBfc2V0U3RhdGUgPSBmdW5jdGlvbiBfc2V0U3RhdGUoc3RhdGUpIHtcblx0ICBpZiAoc3RhdGUpIHtcblx0ICAgIHZhciBzdHlsZSA9IHN0YXRlLnQuc3R5bGUsXG5cdCAgICAgICAgbCA9IHN0YXRlLmxlbmd0aCxcblx0ICAgICAgICBpID0gMCxcblx0ICAgICAgICBwLFxuXHQgICAgICAgIHZhbHVlO1xuXG5cdCAgICBmb3IgKDsgaSA8IGw7IGkgKz0gMikge1xuXHQgICAgICB2YWx1ZSA9IHN0YXRlW2kgKyAxXTtcblx0ICAgICAgcCA9IHN0YXRlW2ldO1xuXG5cdCAgICAgIGlmICh2YWx1ZSkge1xuXHQgICAgICAgIHN0eWxlW3BdID0gdmFsdWU7XG5cdCAgICAgIH0gZWxzZSBpZiAoc3R5bGVbcF0pIHtcblx0ICAgICAgICBzdHlsZS5yZW1vdmVQcm9wZXJ0eShwLnJlcGxhY2UoX2NhcHNFeHAsIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXHR9LFxuXHQgICAgX2dldFN0YXRlID0gZnVuY3Rpb24gX2dldFN0YXRlKGVsZW1lbnQpIHtcblx0ICB2YXIgbCA9IF9zdGF0ZVByb3BzLmxlbmd0aCxcblx0ICAgICAgc3R5bGUgPSBlbGVtZW50LnN0eWxlLFxuXHQgICAgICBzdGF0ZSA9IFtdLFxuXHQgICAgICBpID0gMDtcblxuXHQgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICBzdGF0ZS5wdXNoKF9zdGF0ZVByb3BzW2ldLCBzdHlsZVtfc3RhdGVQcm9wc1tpXV0pO1xuXHQgIH1cblxuXHQgIHN0YXRlLnQgPSBlbGVtZW50O1xuXHQgIHJldHVybiBzdGF0ZTtcblx0fSxcblx0ICAgIF9jb3B5U3RhdGUgPSBmdW5jdGlvbiBfY29weVN0YXRlKHN0YXRlLCBvdmVycmlkZSwgb21pdE9mZnNldHMpIHtcblx0ICB2YXIgcmVzdWx0ID0gW10sXG5cdCAgICAgIGwgPSBzdGF0ZS5sZW5ndGgsXG5cdCAgICAgIGkgPSBvbWl0T2Zmc2V0cyA/IDggOiAwLFxuXHQgICAgICBwO1xuXG5cdCAgZm9yICg7IGkgPCBsOyBpICs9IDIpIHtcblx0ICAgIHAgPSBzdGF0ZVtpXTtcblx0ICAgIHJlc3VsdC5wdXNoKHAsIHAgaW4gb3ZlcnJpZGUgPyBvdmVycmlkZVtwXSA6IHN0YXRlW2kgKyAxXSk7XG5cdCAgfVxuXG5cdCAgcmVzdWx0LnQgPSBzdGF0ZS50O1xuXHQgIHJldHVybiByZXN1bHQ7XG5cdH0sXG5cdCAgICBfd2luT2Zmc2V0cyA9IHtcblx0ICBsZWZ0OiAwLFxuXHQgIHRvcDogMFxuXHR9LFxuXHQgICAgX3BhcnNlUG9zaXRpb24gPSBmdW5jdGlvbiBfcGFyc2VQb3NpdGlvbih2YWx1ZSwgdHJpZ2dlciwgc2Nyb2xsZXJTaXplLCBkaXJlY3Rpb24sIHNjcm9sbCwgbWFya2VyLCBtYXJrZXJTY3JvbGxlciwgc2VsZiwgc2Nyb2xsZXJCb3VuZHMsIGJvcmRlcldpZHRoLCB1c2VGaXhlZFBvc2l0aW9uLCBzY3JvbGxlck1heCkge1xuXHQgIF9pc0Z1bmN0aW9uKHZhbHVlKSAmJiAodmFsdWUgPSB2YWx1ZShzZWxmKSk7XG5cblx0ICBpZiAoX2lzU3RyaW5nKHZhbHVlKSAmJiB2YWx1ZS5zdWJzdHIoMCwgMykgPT09IFwibWF4XCIpIHtcblx0ICAgIHZhbHVlID0gc2Nyb2xsZXJNYXggKyAodmFsdWUuY2hhckF0KDQpID09PSBcIj1cIiA/IF9vZmZzZXRUb1B4KFwiMFwiICsgdmFsdWUuc3Vic3RyKDMpLCBzY3JvbGxlclNpemUpIDogMCk7XG5cdCAgfVxuXG5cdCAgaWYgKCFfaXNOdW1iZXIodmFsdWUpKSB7XG5cdCAgICBfaXNGdW5jdGlvbih0cmlnZ2VyKSAmJiAodHJpZ2dlciA9IHRyaWdnZXIoc2VsZikpO1xuXG5cdCAgICB2YXIgZWxlbWVudCA9IF90b0FycmF5KHRyaWdnZXIpWzBdIHx8IF9ib2R5LFxuXHQgICAgICAgIGJvdW5kcyA9IF9nZXRCb3VuZHMoZWxlbWVudCkgfHwge30sXG5cdCAgICAgICAgb2Zmc2V0cyA9IHZhbHVlLnNwbGl0KFwiIFwiKSxcblx0ICAgICAgICBsb2NhbE9mZnNldCxcblx0ICAgICAgICBnbG9iYWxPZmZzZXQsXG5cdCAgICAgICAgZGlzcGxheTtcblxuXHQgICAgaWYgKCghYm91bmRzIHx8ICFib3VuZHMubGVmdCAmJiAhYm91bmRzLnRvcCkgJiYgX2dldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcblx0ICAgICAgZGlzcGxheSA9IGVsZW1lbnQuc3R5bGUuZGlzcGxheTtcblx0ICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHQgICAgICBib3VuZHMgPSBfZ2V0Qm91bmRzKGVsZW1lbnQpO1xuXHQgICAgICBkaXNwbGF5ID8gZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheSA6IGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xuXHQgICAgfVxuXG5cdCAgICBsb2NhbE9mZnNldCA9IF9vZmZzZXRUb1B4KG9mZnNldHNbMF0sIGJvdW5kc1tkaXJlY3Rpb24uZF0pO1xuXHQgICAgZ2xvYmFsT2Zmc2V0ID0gX29mZnNldFRvUHgob2Zmc2V0c1sxXSB8fCBcIjBcIiwgc2Nyb2xsZXJTaXplKTtcblx0ICAgIHZhbHVlID0gYm91bmRzW2RpcmVjdGlvbi5wXSAtIHNjcm9sbGVyQm91bmRzW2RpcmVjdGlvbi5wXSAtIGJvcmRlcldpZHRoICsgbG9jYWxPZmZzZXQgKyBzY3JvbGwgLSBnbG9iYWxPZmZzZXQ7XG5cdCAgICBtYXJrZXJTY3JvbGxlciAmJiBfcG9zaXRpb25NYXJrZXIobWFya2VyU2Nyb2xsZXIsIGdsb2JhbE9mZnNldCwgZGlyZWN0aW9uLCBzY3JvbGxlclNpemUgLSBnbG9iYWxPZmZzZXQgPCAyMCB8fCBtYXJrZXJTY3JvbGxlci5faXNTdGFydCAmJiBnbG9iYWxPZmZzZXQgPiAyMCk7XG5cdCAgICBzY3JvbGxlclNpemUgLT0gc2Nyb2xsZXJTaXplIC0gZ2xvYmFsT2Zmc2V0O1xuXHQgIH0gZWxzZSBpZiAobWFya2VyU2Nyb2xsZXIpIHtcblx0ICAgIF9wb3NpdGlvbk1hcmtlcihtYXJrZXJTY3JvbGxlciwgc2Nyb2xsZXJTaXplLCBkaXJlY3Rpb24sIHRydWUpO1xuXHQgIH1cblxuXHQgIGlmIChtYXJrZXIpIHtcblx0ICAgIHZhciBwb3NpdGlvbiA9IHZhbHVlICsgc2Nyb2xsZXJTaXplLFxuXHQgICAgICAgIGlzU3RhcnQgPSBtYXJrZXIuX2lzU3RhcnQ7XG5cdCAgICBzY3JvbGxlck1heCA9IFwic2Nyb2xsXCIgKyBkaXJlY3Rpb24uZDI7XG5cblx0ICAgIF9wb3NpdGlvbk1hcmtlcihtYXJrZXIsIHBvc2l0aW9uLCBkaXJlY3Rpb24sIGlzU3RhcnQgJiYgcG9zaXRpb24gPiAyMCB8fCAhaXNTdGFydCAmJiAodXNlRml4ZWRQb3NpdGlvbiA/IE1hdGgubWF4KF9ib2R5W3Njcm9sbGVyTWF4XSwgX2RvY0VsW3Njcm9sbGVyTWF4XSkgOiBtYXJrZXIucGFyZW50Tm9kZVtzY3JvbGxlck1heF0pIDw9IHBvc2l0aW9uICsgMSk7XG5cblx0ICAgIGlmICh1c2VGaXhlZFBvc2l0aW9uKSB7XG5cdCAgICAgIHNjcm9sbGVyQm91bmRzID0gX2dldEJvdW5kcyhtYXJrZXJTY3JvbGxlcik7XG5cdCAgICAgIHVzZUZpeGVkUG9zaXRpb24gJiYgKG1hcmtlci5zdHlsZVtkaXJlY3Rpb24ub3AucF0gPSBzY3JvbGxlckJvdW5kc1tkaXJlY3Rpb24ub3AucF0gLSBkaXJlY3Rpb24ub3AubSAtIG1hcmtlci5fb2Zmc2V0ICsgX3B4KTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSk7XG5cdH0sXG5cdCAgICBfcHJlZml4RXhwID0gLyg/OndlYmtpdHxtb3p8bGVuZ3RofGNzc1RleHQpL2ksXG5cdCAgICBfcmVwYXJlbnQgPSBmdW5jdGlvbiBfcmVwYXJlbnQoZWxlbWVudCwgcGFyZW50LCB0b3AsIGxlZnQpIHtcblx0ICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICE9PSBwYXJlbnQpIHtcblx0ICAgIHZhciBzdHlsZSA9IGVsZW1lbnQuc3R5bGUsXG5cdCAgICAgICAgcCxcblx0ICAgICAgICBjcztcblxuXHQgICAgaWYgKHBhcmVudCA9PT0gX2JvZHkpIHtcblx0ICAgICAgZWxlbWVudC5fc3RPcmlnID0gc3R5bGUuY3NzVGV4dDtcblx0ICAgICAgY3MgPSBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblxuXHQgICAgICBmb3IgKHAgaW4gY3MpIHtcblx0ICAgICAgICBpZiAoIStwICYmICFfcHJlZml4RXhwLnRlc3QocCkgJiYgY3NbcF0gJiYgdHlwZW9mIHN0eWxlW3BdID09PSBcInN0cmluZ1wiICYmIHAgIT09IFwiMFwiKSB7XG5cdCAgICAgICAgICBzdHlsZVtwXSA9IGNzW3BdO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXG5cdCAgICAgIHN0eWxlLnRvcCA9IHRvcDtcblx0ICAgICAgc3R5bGUubGVmdCA9IGxlZnQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBzdHlsZS5jc3NUZXh0ID0gZWxlbWVudC5fc3RPcmlnO1xuXHQgICAgfVxuXG5cdCAgICBnc2FwLmNvcmUuZ2V0Q2FjaGUoZWxlbWVudCkudW5jYWNoZSA9IDE7XG5cdCAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdCAgfVxuXHR9LFxuXHQgICAgX2dldFR3ZWVuQ3JlYXRvciA9IGZ1bmN0aW9uIF9nZXRUd2VlbkNyZWF0b3Ioc2Nyb2xsZXIsIGRpcmVjdGlvbikge1xuXHQgIHZhciBnZXRTY3JvbGwgPSBfZ2V0U2Nyb2xsRnVuYyhzY3JvbGxlciwgZGlyZWN0aW9uKSxcblx0ICAgICAgcHJvcCA9IFwiX3Njcm9sbFwiICsgZGlyZWN0aW9uLnAyLFxuXHQgICAgICBsYXN0U2Nyb2xsMSxcblx0ICAgICAgbGFzdFNjcm9sbDIsXG5cdCAgICAgIGdldFR3ZWVuID0gZnVuY3Rpb24gZ2V0VHdlZW4oc2Nyb2xsVG8sIHZhcnMsIGluaXRpYWxWYWx1ZSwgY2hhbmdlMSwgY2hhbmdlMikge1xuXHQgICAgdmFyIHR3ZWVuID0gZ2V0VHdlZW4udHdlZW4sXG5cdCAgICAgICAgb25Db21wbGV0ZSA9IHZhcnMub25Db21wbGV0ZSxcblx0ICAgICAgICBtb2RpZmllcnMgPSB7fTtcblx0ICAgIHR3ZWVuICYmIHR3ZWVuLmtpbGwoKTtcblx0ICAgIGxhc3RTY3JvbGwxID0gTWF0aC5yb3VuZChpbml0aWFsVmFsdWUpO1xuXHQgICAgdmFyc1twcm9wXSA9IHNjcm9sbFRvO1xuXHQgICAgdmFycy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cblx0ICAgIG1vZGlmaWVyc1twcm9wXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICB2YWx1ZSA9IE1hdGgucm91bmQoZ2V0U2Nyb2xsKCkpO1xuXG5cdCAgICAgIGlmICh2YWx1ZSAhPT0gbGFzdFNjcm9sbDEgJiYgdmFsdWUgIT09IGxhc3RTY3JvbGwyKSB7XG5cdCAgICAgICAgdHdlZW4ua2lsbCgpO1xuXHQgICAgICAgIGdldFR3ZWVuLnR3ZWVuID0gMDtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB2YWx1ZSA9IGluaXRpYWxWYWx1ZSArIGNoYW5nZTEgKiB0d2Vlbi5yYXRpbyArIGNoYW5nZTIgKiB0d2Vlbi5yYXRpbyAqIHR3ZWVuLnJhdGlvO1xuXHQgICAgICB9XG5cblx0ICAgICAgbGFzdFNjcm9sbDIgPSBsYXN0U2Nyb2xsMTtcblx0ICAgICAgcmV0dXJuIGxhc3RTY3JvbGwxID0gTWF0aC5yb3VuZCh2YWx1ZSk7XG5cdCAgICB9O1xuXG5cdCAgICB2YXJzLm9uQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIGdldFR3ZWVuLnR3ZWVuID0gMDtcblx0ICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlLmNhbGwodHdlZW4pO1xuXHQgICAgfTtcblxuXHQgICAgdHdlZW4gPSBnZXRUd2Vlbi50d2VlbiA9IGdzYXAudG8oc2Nyb2xsZXIsIHZhcnMpO1xuXHQgICAgcmV0dXJuIHR3ZWVuO1xuXHQgIH07XG5cblx0ICBzY3JvbGxlcltwcm9wXSA9IGdldFNjcm9sbDtcblx0ICByZXR1cm4gZ2V0VHdlZW47XG5cdH07XG5cblx0X2hvcml6b250YWwub3AgPSBfdmVydGljYWw7XG5cdHZhciBTY3JvbGxUcmlnZ2VyID0gZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIFNjcm9sbFRyaWdnZXIodmFycywgYW5pbWF0aW9uKSB7XG5cdCAgICBfY29yZUluaXR0ZWQgfHwgU2Nyb2xsVHJpZ2dlci5yZWdpc3Rlcihnc2FwKSB8fCBjb25zb2xlLndhcm4oXCJQbGVhc2UgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKVwiKTtcblx0ICAgIHRoaXMuaW5pdCh2YXJzLCBhbmltYXRpb24pO1xuXHQgIH1cblxuXHQgIHZhciBfcHJvdG8gPSBTY3JvbGxUcmlnZ2VyLnByb3RvdHlwZTtcblxuXHQgIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdCh2YXJzLCBhbmltYXRpb24pIHtcblx0ICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuXHQgICAgdGhpcy52YXJzICYmIHRoaXMua2lsbCgxKTtcblxuXHQgICAgaWYgKCFfZW5hYmxlZCkge1xuXHQgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMucmVmcmVzaCA9IHRoaXMua2lsbCA9IF9wYXNzVGhyb3VnaDtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICB2YXJzID0gX3NldERlZmF1bHRzKF9pc1N0cmluZyh2YXJzKSB8fCBfaXNOdW1iZXIodmFycykgfHwgdmFycy5ub2RlVHlwZSA/IHtcblx0ICAgICAgdHJpZ2dlcjogdmFyc1xuXHQgICAgfSA6IHZhcnMsIF9kZWZhdWx0cyk7XG5cblx0ICAgIHZhciBkaXJlY3Rpb24gPSB2YXJzLmhvcml6b250YWwgPyBfaG9yaXpvbnRhbCA6IF92ZXJ0aWNhbCxcblx0ICAgICAgICBfdmFycyA9IHZhcnMsXG5cdCAgICAgICAgb25VcGRhdGUgPSBfdmFycy5vblVwZGF0ZSxcblx0ICAgICAgICB0b2dnbGVDbGFzcyA9IF92YXJzLnRvZ2dsZUNsYXNzLFxuXHQgICAgICAgIGlkID0gX3ZhcnMuaWQsXG5cdCAgICAgICAgb25Ub2dnbGUgPSBfdmFycy5vblRvZ2dsZSxcblx0ICAgICAgICBvblJlZnJlc2ggPSBfdmFycy5vblJlZnJlc2gsXG5cdCAgICAgICAgc2NydWIgPSBfdmFycy5zY3J1Yixcblx0ICAgICAgICB0cmlnZ2VyID0gX3ZhcnMudHJpZ2dlcixcblx0ICAgICAgICBwaW4gPSBfdmFycy5waW4sXG5cdCAgICAgICAgcGluU3BhY2luZyA9IF92YXJzLnBpblNwYWNpbmcsXG5cdCAgICAgICAgaW52YWxpZGF0ZU9uUmVmcmVzaCA9IF92YXJzLmludmFsaWRhdGVPblJlZnJlc2gsXG5cdCAgICAgICAgYW50aWNpcGF0ZVBpbiA9IF92YXJzLmFudGljaXBhdGVQaW4sXG5cdCAgICAgICAgb25TY3J1YkNvbXBsZXRlID0gX3ZhcnMub25TY3J1YkNvbXBsZXRlLFxuXHQgICAgICAgIG9uU25hcENvbXBsZXRlID0gX3ZhcnMub25TbmFwQ29tcGxldGUsXG5cdCAgICAgICAgb25jZSA9IF92YXJzLm9uY2UsXG5cdCAgICAgICAgc25hcCA9IF92YXJzLnNuYXAsXG5cdCAgICAgICAgcGluUmVwYXJlbnQgPSBfdmFycy5waW5SZXBhcmVudCxcblx0ICAgICAgICBpc1RvZ2dsZSA9ICFzY3J1YiAmJiBzY3J1YiAhPT0gMCxcblx0ICAgICAgICBzY3JvbGxlciA9IF90b0FycmF5KHZhcnMuc2Nyb2xsZXIgfHwgX3dpbilbMF0sXG5cdCAgICAgICAgc2Nyb2xsZXJDYWNoZSA9IGdzYXAuY29yZS5nZXRDYWNoZShzY3JvbGxlciksXG5cdCAgICAgICAgaXNWaWV3cG9ydCA9IF9pc1ZpZXdwb3J0KHNjcm9sbGVyKSxcblx0ICAgICAgICB1c2VGaXhlZFBvc2l0aW9uID0gXCJwaW5UeXBlXCIgaW4gdmFycyA/IHZhcnMucGluVHlwZSA9PT0gXCJmaXhlZFwiIDogaXNWaWV3cG9ydCB8fCBfZ2V0UHJveHlQcm9wKHNjcm9sbGVyLCBcInBpblR5cGVcIikgPT09IFwiZml4ZWRcIixcblx0ICAgICAgICBjYWxsYmFja3MgPSBbdmFycy5vbkVudGVyLCB2YXJzLm9uTGVhdmUsIHZhcnMub25FbnRlckJhY2ssIHZhcnMub25MZWF2ZUJhY2tdLFxuXHQgICAgICAgIHRvZ2dsZUFjdGlvbnMgPSBpc1RvZ2dsZSAmJiB2YXJzLnRvZ2dsZUFjdGlvbnMuc3BsaXQoXCIgXCIpLFxuXHQgICAgICAgIG1hcmtlcnMgPSBcIm1hcmtlcnNcIiBpbiB2YXJzID8gdmFycy5tYXJrZXJzIDogX2RlZmF1bHRzLm1hcmtlcnMsXG5cdCAgICAgICAgYm9yZGVyV2lkdGggPSBpc1ZpZXdwb3J0ID8gMCA6IHBhcnNlRmxvYXQoX2dldENvbXB1dGVkU3R5bGUoc2Nyb2xsZXIpW1wiYm9yZGVyXCIgKyBkaXJlY3Rpb24ucDIgKyBfV2lkdGhdKSB8fCAwLFxuXHQgICAgICAgIHNlbGYgPSB0aGlzLFxuXHQgICAgICAgIG9uUmVmcmVzaEluaXQgPSB2YXJzLm9uUmVmcmVzaEluaXQgJiYgZnVuY3Rpb24gKCkge1xuXHQgICAgICByZXR1cm4gdmFycy5vblJlZnJlc2hJbml0KHNlbGYpO1xuXHQgICAgfSxcblx0ICAgICAgICBnZXRTY3JvbGxlclNpemUgPSBfZ2V0U2l6ZUZ1bmMoc2Nyb2xsZXIsIGlzVmlld3BvcnQsIGRpcmVjdGlvbiksXG5cdCAgICAgICAgZ2V0U2Nyb2xsZXJPZmZzZXRzID0gX2dldE9mZnNldHNGdW5jKHNjcm9sbGVyLCBpc1ZpZXdwb3J0KSxcblx0ICAgICAgICB0d2VlblRvLFxuXHQgICAgICAgIHBpbkNhY2hlLFxuXHQgICAgICAgIHNuYXBGdW5jLFxuXHQgICAgICAgIGlzUmV2ZXJ0ZWQsXG5cdCAgICAgICAgc2Nyb2xsMSxcblx0ICAgICAgICBzY3JvbGwyLFxuXHQgICAgICAgIHN0YXJ0LFxuXHQgICAgICAgIGVuZCxcblx0ICAgICAgICBtYXJrZXJTdGFydCxcblx0ICAgICAgICBtYXJrZXJFbmQsXG5cdCAgICAgICAgbWFya2VyU3RhcnRUcmlnZ2VyLFxuXHQgICAgICAgIG1hcmtlckVuZFRyaWdnZXIsXG5cdCAgICAgICAgbWFya2VyVmFycyxcblx0ICAgICAgICBjaGFuZ2UsXG5cdCAgICAgICAgcGluT3JpZ2luYWxTdGF0ZSxcblx0ICAgICAgICBwaW5BY3RpdmVTdGF0ZSxcblx0ICAgICAgICBwaW5TdGF0ZSxcblx0ICAgICAgICBzcGFjZXIsXG5cdCAgICAgICAgb2Zmc2V0LFxuXHQgICAgICAgIHBpbkdldHRlcixcblx0ICAgICAgICBwaW5TZXR0ZXIsXG5cdCAgICAgICAgcGluU3RhcnQsXG5cdCAgICAgICAgcGluQ2hhbmdlLFxuXHQgICAgICAgIHNwYWNpbmdTdGFydCxcblx0ICAgICAgICBzcGFjZXJTdGF0ZSxcblx0ICAgICAgICBtYXJrZXJTdGFydFNldHRlcixcblx0ICAgICAgICBtYXJrZXJFbmRTZXR0ZXIsXG5cdCAgICAgICAgY3MsXG5cdCAgICAgICAgc25hcDEsXG5cdCAgICAgICAgc25hcDIsXG5cdCAgICAgICAgc2NydWJUd2Vlbixcblx0ICAgICAgICBzY3J1YlNtb290aCxcblx0ICAgICAgICBzbmFwRHVyQ2xhbXAsXG5cdCAgICAgICAgc25hcERlbGF5ZWRDYWxsLFxuXHQgICAgICAgIHByZXZQcm9ncmVzcyxcblx0ICAgICAgICBwcmV2U2Nyb2xsLFxuXHQgICAgICAgIHByZXZBbmltUHJvZ3Jlc3M7XG5cblx0ICAgIHNlbGYubWVkaWEgPSBfY3JlYXRpbmdNZWRpYTtcblx0ICAgIGFudGljaXBhdGVQaW4gKj0gNDU7XG5cblx0ICAgIF90cmlnZ2Vycy5wdXNoKHNlbGYpO1xuXG5cdCAgICBzZWxmLnNjcm9sbGVyID0gc2Nyb2xsZXI7XG5cdCAgICBzZWxmLnNjcm9sbCA9IF9nZXRTY3JvbGxGdW5jKHNjcm9sbGVyLCBkaXJlY3Rpb24pO1xuXHQgICAgc2Nyb2xsMSA9IHNlbGYuc2Nyb2xsKCk7XG5cdCAgICBzZWxmLnZhcnMgPSB2YXJzO1xuXHQgICAgYW5pbWF0aW9uID0gYW5pbWF0aW9uIHx8IHZhcnMuYW5pbWF0aW9uO1xuXHQgICAgXCJyZWZyZXNoUHJpb3JpdHlcIiBpbiB2YXJzICYmIChfc29ydCA9IDEpO1xuXHQgICAgc2Nyb2xsZXJDYWNoZS50d2VlblNjcm9sbCA9IHNjcm9sbGVyQ2FjaGUudHdlZW5TY3JvbGwgfHwge1xuXHQgICAgICB0b3A6IF9nZXRUd2VlbkNyZWF0b3Ioc2Nyb2xsZXIsIF92ZXJ0aWNhbCksXG5cdCAgICAgIGxlZnQ6IF9nZXRUd2VlbkNyZWF0b3Ioc2Nyb2xsZXIsIF9ob3Jpem9udGFsKVxuXHQgICAgfTtcblx0ICAgIHNlbGYudHdlZW5UbyA9IHR3ZWVuVG8gPSBzY3JvbGxlckNhY2hlLnR3ZWVuU2Nyb2xsW2RpcmVjdGlvbi5wXTtcblxuXHQgICAgaWYgKGFuaW1hdGlvbikge1xuXHQgICAgICBhbmltYXRpb24udmFycy5sYXp5ID0gZmFsc2U7XG5cdCAgICAgIGFuaW1hdGlvbi5faW5pdHRlZCB8fCBhbmltYXRpb24udmFycy5pbW1lZGlhdGVSZW5kZXIgIT09IGZhbHNlICYmIHZhcnMuaW1tZWRpYXRlUmVuZGVyICE9PSBmYWxzZSAmJiBhbmltYXRpb24ucmVuZGVyKDAsIHRydWUsIHRydWUpO1xuXHQgICAgICBzZWxmLmFuaW1hdGlvbiA9IGFuaW1hdGlvbi5wYXVzZSgpO1xuXHQgICAgICBhbmltYXRpb24uc2Nyb2xsVHJpZ2dlciA9IHNlbGY7XG5cdCAgICAgIHNjcnViU21vb3RoID0gX2lzTnVtYmVyKHNjcnViKSAmJiBzY3J1Yjtcblx0ICAgICAgc2NydWJTbW9vdGggJiYgKHNjcnViVHdlZW4gPSBnc2FwLnRvKGFuaW1hdGlvbiwge1xuXHQgICAgICAgIGVhc2U6IFwicG93ZXIzXCIsXG5cdCAgICAgICAgZHVyYXRpb246IHNjcnViU21vb3RoLFxuXHQgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uIG9uQ29tcGxldGUoKSB7XG5cdCAgICAgICAgICByZXR1cm4gb25TY3J1YkNvbXBsZXRlICYmIG9uU2NydWJDb21wbGV0ZShzZWxmKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0pKTtcblx0ICAgICAgc25hcDEgPSAwO1xuXHQgICAgICBpZCB8fCAoaWQgPSBhbmltYXRpb24udmFycy5pZCk7XG5cdCAgICB9XG5cblx0ICAgIGlmIChzbmFwKSB7XG5cdCAgICAgIF9pc09iamVjdChzbmFwKSB8fCAoc25hcCA9IHtcblx0ICAgICAgICBzbmFwVG86IHNuYXBcblx0ICAgICAgfSk7XG5cdCAgICAgIGdzYXAuc2V0KGlzVmlld3BvcnQgPyBbX2JvZHksIF9kb2NFbF0gOiBzY3JvbGxlciwge1xuXHQgICAgICAgIHNjcm9sbEJlaGF2aW9yOiBcImF1dG9cIlxuXHQgICAgICB9KTtcblx0ICAgICAgc25hcEZ1bmMgPSBfaXNGdW5jdGlvbihzbmFwLnNuYXBUbykgPyBzbmFwLnNuYXBUbyA6IHNuYXAuc25hcFRvID09PSBcImxhYmVsc1wiID8gX2dldExhYmVscyhhbmltYXRpb24pIDogZ3NhcC51dGlscy5zbmFwKHNuYXAuc25hcFRvKTtcblx0ICAgICAgc25hcER1ckNsYW1wID0gc25hcC5kdXJhdGlvbiB8fCB7XG5cdCAgICAgICAgbWluOiAwLjEsXG5cdCAgICAgICAgbWF4OiAyXG5cdCAgICAgIH07XG5cdCAgICAgIHNuYXBEdXJDbGFtcCA9IF9pc09iamVjdChzbmFwRHVyQ2xhbXApID8gX2NsYW1wKHNuYXBEdXJDbGFtcC5taW4sIHNuYXBEdXJDbGFtcC5tYXgpIDogX2NsYW1wKHNuYXBEdXJDbGFtcCwgc25hcER1ckNsYW1wKTtcblx0ICAgICAgc25hcERlbGF5ZWRDYWxsID0gZ3NhcC5kZWxheWVkQ2FsbChzbmFwLmRlbGF5IHx8IHNjcnViU21vb3RoIC8gMiB8fCAwLjEsIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAoTWF0aC5hYnMoc2VsZi5nZXRWZWxvY2l0eSgpKSA8IDEwICYmICFfcG9pbnRlcklzRG93bikge1xuXHQgICAgICAgICAgdmFyIHRvdGFsUHJvZ3Jlc3MgPSBhbmltYXRpb24gJiYgIWlzVG9nZ2xlID8gYW5pbWF0aW9uLnRvdGFsUHJvZ3Jlc3MoKSA6IHNlbGYucHJvZ3Jlc3MsXG5cdCAgICAgICAgICAgICAgdmVsb2NpdHkgPSAodG90YWxQcm9ncmVzcyAtIHNuYXAyKSAvIChfZ2V0VGltZSgpIC0gX3RpbWUyKSAqIDEwMDAgfHwgMCxcblx0ICAgICAgICAgICAgICBjaGFuZ2UxID0gX2Ficyh2ZWxvY2l0eSAvIDIpICogdmVsb2NpdHkgLyAwLjE4NSxcblx0ICAgICAgICAgICAgICBuYXR1cmFsRW5kID0gdG90YWxQcm9ncmVzcyArIGNoYW5nZTEsXG5cdCAgICAgICAgICAgICAgZW5kVmFsdWUgPSBfY2xhbXAoMCwgMSwgc25hcEZ1bmMobmF0dXJhbEVuZCwgc2VsZikpLFxuXHQgICAgICAgICAgICAgIHNjcm9sbCA9IHNlbGYuc2Nyb2xsKCksXG5cdCAgICAgICAgICAgICAgZW5kU2Nyb2xsID0gTWF0aC5yb3VuZChzdGFydCArIGVuZFZhbHVlICogY2hhbmdlKSxcblx0ICAgICAgICAgICAgICB0d2VlbiA9IHR3ZWVuVG8udHdlZW47XG5cblx0ICAgICAgICAgIGlmIChzY3JvbGwgPD0gZW5kICYmIHNjcm9sbCA+PSBzdGFydCAmJiBlbmRTY3JvbGwgIT09IHNjcm9sbCkge1xuXHQgICAgICAgICAgICBpZiAodHdlZW4gJiYgIXR3ZWVuLl9pbml0dGVkICYmIHR3ZWVuLmRhdGEgPD0gTWF0aC5hYnMoZW5kU2Nyb2xsIC0gc2Nyb2xsKSkge1xuXHQgICAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHR3ZWVuVG8oZW5kU2Nyb2xsLCB7XG5cdCAgICAgICAgICAgICAgZHVyYXRpb246IHNuYXBEdXJDbGFtcChfYWJzKE1hdGgubWF4KF9hYnMobmF0dXJhbEVuZCAtIHRvdGFsUHJvZ3Jlc3MpLCBfYWJzKGVuZFZhbHVlIC0gdG90YWxQcm9ncmVzcykpICogMC4xODUgLyB2ZWxvY2l0eSAvIDAuMDUgfHwgMCkpLFxuXHQgICAgICAgICAgICAgIGVhc2U6IHNuYXAuZWFzZSB8fCBcInBvd2VyM1wiLFxuXHQgICAgICAgICAgICAgIGRhdGE6IE1hdGguYWJzKGVuZFNjcm9sbCAtIHNjcm9sbCksXG5cdCAgICAgICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gb25Db21wbGV0ZSgpIHtcblx0ICAgICAgICAgICAgICAgIHNuYXAxID0gc25hcDIgPSBhbmltYXRpb24gJiYgIWlzVG9nZ2xlID8gYW5pbWF0aW9uLnRvdGFsUHJvZ3Jlc3MoKSA6IHNlbGYucHJvZ3Jlc3M7XG5cdCAgICAgICAgICAgICAgICBvblNuYXBDb21wbGV0ZSAmJiBvblNuYXBDb21wbGV0ZShzZWxmKTtcblx0ICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0sIHNjcm9sbCwgY2hhbmdlMSAqIGNoYW5nZSwgZW5kU2Nyb2xsIC0gc2Nyb2xsIC0gY2hhbmdlMSAqIGNoYW5nZSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSBlbHNlIGlmIChzZWxmLmlzQWN0aXZlKSB7XG5cdCAgICAgICAgICBzbmFwRGVsYXllZENhbGwucmVzdGFydCh0cnVlKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0pLnBhdXNlKCk7XG5cdCAgICB9XG5cblx0ICAgIGlkICYmIChfaWRzW2lkXSA9IHNlbGYpO1xuXHQgICAgdHJpZ2dlciA9IHNlbGYudHJpZ2dlciA9IF90b0FycmF5KHRyaWdnZXIgfHwgcGluKVswXTtcblx0ICAgIHBpbiA9IHBpbiA9PT0gdHJ1ZSA/IHRyaWdnZXIgOiBfdG9BcnJheShwaW4pWzBdO1xuXHQgICAgX2lzU3RyaW5nKHRvZ2dsZUNsYXNzKSAmJiAodG9nZ2xlQ2xhc3MgPSB7XG5cdCAgICAgIHRhcmdldHM6IHRyaWdnZXIsXG5cdCAgICAgIGNsYXNzTmFtZTogdG9nZ2xlQ2xhc3Ncblx0ICAgIH0pO1xuXG5cdCAgICBpZiAocGluKSB7XG5cdCAgICAgIHBpblNwYWNpbmcgPT09IGZhbHNlIHx8IHBpblNwYWNpbmcgPT09IF9tYXJnaW4gfHwgKHBpblNwYWNpbmcgPSAhcGluU3BhY2luZyAmJiBfZ2V0Q29tcHV0ZWRTdHlsZShwaW4ucGFyZW50Tm9kZSkuZGlzcGxheSA9PT0gXCJmbGV4XCIgPyBmYWxzZSA6IF9wYWRkaW5nKTtcblx0ICAgICAgc2VsZi5waW4gPSBwaW47XG5cdCAgICAgIHZhcnMuZm9yY2UzRCAhPT0gZmFsc2UgJiYgZ3NhcC5zZXQocGluLCB7XG5cdCAgICAgICAgZm9yY2UzRDogdHJ1ZVxuXHQgICAgICB9KTtcblx0ICAgICAgcGluQ2FjaGUgPSBnc2FwLmNvcmUuZ2V0Q2FjaGUocGluKTtcblxuXHQgICAgICBpZiAoIXBpbkNhY2hlLnNwYWNlcikge1xuXHQgICAgICAgIHBpbkNhY2hlLnNwYWNlciA9IHNwYWNlciA9IF9kb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ICAgICAgICBzcGFjZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwaW4tc3BhY2VyXCIgKyAoaWQgPyBcIiBwaW4tc3BhY2VyLVwiICsgaWQgOiBcIlwiKSk7XG5cdCAgICAgICAgcGluQ2FjaGUucGluU3RhdGUgPSBwaW5PcmlnaW5hbFN0YXRlID0gX2dldFN0YXRlKHBpbik7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcGluT3JpZ2luYWxTdGF0ZSA9IHBpbkNhY2hlLnBpblN0YXRlO1xuXHQgICAgICB9XG5cblx0ICAgICAgc2VsZi5zcGFjZXIgPSBzcGFjZXIgPSBwaW5DYWNoZS5zcGFjZXI7XG5cdCAgICAgIGNzID0gX2dldENvbXB1dGVkU3R5bGUocGluKTtcblx0ICAgICAgc3BhY2luZ1N0YXJ0ID0gY3NbcGluU3BhY2luZyArIGRpcmVjdGlvbi5vczJdO1xuXHQgICAgICBwaW5HZXR0ZXIgPSBnc2FwLmdldFByb3BlcnR5KHBpbik7XG5cdCAgICAgIHBpblNldHRlciA9IGdzYXAucXVpY2tTZXR0ZXIocGluLCBkaXJlY3Rpb24uYSwgX3B4KTtcblxuXHQgICAgICBfc3dhcFBpbkluKHBpbiwgc3BhY2VyLCBjcyk7XG5cblx0ICAgICAgcGluU3RhdGUgPSBfZ2V0U3RhdGUocGluKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKG1hcmtlcnMpIHtcblx0ICAgICAgbWFya2VyVmFycyA9IF9pc09iamVjdChtYXJrZXJzKSA/IF9zZXREZWZhdWx0cyhtYXJrZXJzLCBfbWFya2VyRGVmYXVsdHMpIDogX21hcmtlckRlZmF1bHRzO1xuXHQgICAgICBtYXJrZXJTdGFydFRyaWdnZXIgPSBfY3JlYXRlTWFya2VyKFwic2Nyb2xsZXItc3RhcnRcIiwgaWQsIHNjcm9sbGVyLCBkaXJlY3Rpb24sIG1hcmtlclZhcnMsIDApO1xuXHQgICAgICBtYXJrZXJFbmRUcmlnZ2VyID0gX2NyZWF0ZU1hcmtlcihcInNjcm9sbGVyLWVuZFwiLCBpZCwgc2Nyb2xsZXIsIGRpcmVjdGlvbiwgbWFya2VyVmFycywgMCwgbWFya2VyU3RhcnRUcmlnZ2VyKTtcblx0ICAgICAgb2Zmc2V0ID0gbWFya2VyU3RhcnRUcmlnZ2VyW1wib2Zmc2V0XCIgKyBkaXJlY3Rpb24ub3AuZDJdO1xuXHQgICAgICBtYXJrZXJTdGFydCA9IF9jcmVhdGVNYXJrZXIoXCJzdGFydFwiLCBpZCwgc2Nyb2xsZXIsIGRpcmVjdGlvbiwgbWFya2VyVmFycywgb2Zmc2V0KTtcblx0ICAgICAgbWFya2VyRW5kID0gX2NyZWF0ZU1hcmtlcihcImVuZFwiLCBpZCwgc2Nyb2xsZXIsIGRpcmVjdGlvbiwgbWFya2VyVmFycywgb2Zmc2V0KTtcblxuXHQgICAgICBpZiAoIXVzZUZpeGVkUG9zaXRpb24pIHtcblx0ICAgICAgICBfbWFrZVBvc2l0aW9uYWJsZShzY3JvbGxlcik7XG5cblx0ICAgICAgICBnc2FwLnNldChbbWFya2VyU3RhcnRUcmlnZ2VyLCBtYXJrZXJFbmRUcmlnZ2VyXSwge1xuXHQgICAgICAgICAgZm9yY2UzRDogdHJ1ZVxuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIG1hcmtlclN0YXJ0U2V0dGVyID0gZ3NhcC5xdWlja1NldHRlcihtYXJrZXJTdGFydFRyaWdnZXIsIGRpcmVjdGlvbi5hLCBfcHgpO1xuXHQgICAgICAgIG1hcmtlckVuZFNldHRlciA9IGdzYXAucXVpY2tTZXR0ZXIobWFya2VyRW5kVHJpZ2dlciwgZGlyZWN0aW9uLmEsIF9weCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgc2VsZi5yZXZlcnQgPSBmdW5jdGlvbiAocmV2ZXJ0KSB7XG5cdCAgICAgIHZhciByID0gcmV2ZXJ0ICE9PSBmYWxzZSB8fCAhc2VsZi5lbmFibGVkLFxuXHQgICAgICAgICAgcHJldlJlZnJlc2hpbmcgPSBfcmVmcmVzaGluZztcblxuXHQgICAgICBpZiAociAhPT0gaXNSZXZlcnRlZCkge1xuXHQgICAgICAgIGlmIChyKSB7XG5cdCAgICAgICAgICBwcmV2U2Nyb2xsID0gTWF0aC5tYXgoc2VsZi5zY3JvbGwoKSwgc2VsZi5zY3JvbGwucmVjIHx8IDApO1xuXHQgICAgICAgICAgcHJldlByb2dyZXNzID0gc2VsZi5wcm9ncmVzcztcblx0ICAgICAgICAgIHByZXZBbmltUHJvZ3Jlc3MgPSBhbmltYXRpb24gJiYgYW5pbWF0aW9uLnByb2dyZXNzKCk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgbWFya2VyU3RhcnQgJiYgW21hcmtlclN0YXJ0LCBtYXJrZXJFbmQsIG1hcmtlclN0YXJ0VHJpZ2dlciwgbWFya2VyRW5kVHJpZ2dlcl0uZm9yRWFjaChmdW5jdGlvbiAobSkge1xuXHQgICAgICAgICAgcmV0dXJuIG0uc3R5bGUuZGlzcGxheSA9IHIgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIjtcblx0ICAgICAgICB9KTtcblx0ICAgICAgICByICYmIChfcmVmcmVzaGluZyA9IDEpO1xuXHQgICAgICAgIHNlbGYudXBkYXRlKHIpO1xuXHQgICAgICAgIF9yZWZyZXNoaW5nID0gcHJldlJlZnJlc2hpbmc7XG5cdCAgICAgICAgcGluICYmIChyID8gX3N3YXBQaW5PdXQocGluLCBzcGFjZXIsIHBpbk9yaWdpbmFsU3RhdGUpIDogKCFwaW5SZXBhcmVudCB8fCAhc2VsZi5pc0FjdGl2ZSkgJiYgX3N3YXBQaW5JbihwaW4sIHNwYWNlciwgX2dldENvbXB1dGVkU3R5bGUocGluKSwgc3BhY2VyU3RhdGUpKTtcblx0ICAgICAgICBpc1JldmVydGVkID0gcjtcblx0ICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgc2VsZi5yZWZyZXNoID0gZnVuY3Rpb24gKHNvZnQpIHtcblx0ICAgICAgaWYgKF9yZWZyZXNoaW5nIHx8ICFzZWxmLmVuYWJsZWQpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblxuXHQgICAgICBpZiAocGluICYmIHNvZnQgJiYgX2xhc3RTY3JvbGxUaW1lKSB7XG5cdCAgICAgICAgX2FkZExpc3RlbmVyKFNjcm9sbFRyaWdnZXIsIFwic2Nyb2xsRW5kXCIsIF9zb2Z0UmVmcmVzaCk7XG5cblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblxuXHQgICAgICBfcmVmcmVzaGluZyA9IDE7XG5cdCAgICAgIHNjcnViVHdlZW4gJiYgc2NydWJUd2Vlbi5raWxsKCk7XG5cdCAgICAgIGludmFsaWRhdGVPblJlZnJlc2ggJiYgYW5pbWF0aW9uICYmIGFuaW1hdGlvbi5wcm9ncmVzcygwKS5pbnZhbGlkYXRlKCk7XG5cdCAgICAgIGlzUmV2ZXJ0ZWQgfHwgc2VsZi5yZXZlcnQoKTtcblxuXHQgICAgICB2YXIgc2l6ZSA9IGdldFNjcm9sbGVyU2l6ZSgpLFxuXHQgICAgICAgICAgc2Nyb2xsZXJCb3VuZHMgPSBnZXRTY3JvbGxlck9mZnNldHMoKSxcblx0ICAgICAgICAgIG1heCA9IF9tYXhTY3JvbGwoc2Nyb2xsZXIsIGRpcmVjdGlvbiksXG5cdCAgICAgICAgICBvZmZzZXQgPSAwLFxuXHQgICAgICAgICAgb3RoZXJQaW5PZmZzZXQgPSAwLFxuXHQgICAgICAgICAgcGFyc2VkRW5kID0gdmFycy5lbmQsXG5cdCAgICAgICAgICBwYXJzZWRFbmRUcmlnZ2VyID0gdmFycy5lbmRUcmlnZ2VyIHx8IHRyaWdnZXIsXG5cdCAgICAgICAgICBwYXJzZWRTdGFydCA9IHZhcnMuc3RhcnQgfHwgKHZhcnMuc3RhcnQgPT09IDAgPyAwIDogcGluIHx8ICF0cmlnZ2VyID8gXCIwIDBcIiA6IFwiMCAxMDAlXCIpLFxuXHQgICAgICAgICAgdHJpZ2dlckluZGV4ID0gdHJpZ2dlciAmJiBNYXRoLm1heCgwLCBfdHJpZ2dlcnMuaW5kZXhPZihzZWxmKSkgfHwgMCxcblx0ICAgICAgICAgIGkgPSB0cmlnZ2VySW5kZXgsXG5cdCAgICAgICAgICBjcyxcblx0ICAgICAgICAgIGJvdW5kcyxcblx0ICAgICAgICAgIHNjcm9sbCxcblx0ICAgICAgICAgIGlzVmVydGljYWwsXG5cdCAgICAgICAgICBvdmVycmlkZSxcblx0ICAgICAgICAgIGN1clRyaWdnZXIsXG5cdCAgICAgICAgICBjdXJQaW4sXG5cdCAgICAgICAgICBvcHBvc2l0ZVNjcm9sbDtcblxuXHQgICAgICB3aGlsZSAoaS0tKSB7XG5cdCAgICAgICAgY3VyUGluID0gX3RyaWdnZXJzW2ldLnBpbjtcblx0ICAgICAgICBjdXJQaW4gJiYgKGN1clBpbiA9PT0gdHJpZ2dlciB8fCBjdXJQaW4gPT09IHBpbikgJiYgX3RyaWdnZXJzW2ldLnJldmVydCgpO1xuXHQgICAgICB9XG5cblx0ICAgICAgc3RhcnQgPSBfcGFyc2VQb3NpdGlvbihwYXJzZWRTdGFydCwgdHJpZ2dlciwgc2l6ZSwgZGlyZWN0aW9uLCBzZWxmLnNjcm9sbCgpLCBtYXJrZXJTdGFydCwgbWFya2VyU3RhcnRUcmlnZ2VyLCBzZWxmLCBzY3JvbGxlckJvdW5kcywgYm9yZGVyV2lkdGgsIHVzZUZpeGVkUG9zaXRpb24sIG1heCkgfHwgKHBpbiA/IC0wLjAwMSA6IDApO1xuXHQgICAgICBfaXNGdW5jdGlvbihwYXJzZWRFbmQpICYmIChwYXJzZWRFbmQgPSBwYXJzZWRFbmQoc2VsZikpO1xuXG5cdCAgICAgIGlmIChfaXNTdHJpbmcocGFyc2VkRW5kKSAmJiAhcGFyc2VkRW5kLmluZGV4T2YoXCIrPVwiKSkge1xuXHQgICAgICAgIGlmICh+cGFyc2VkRW5kLmluZGV4T2YoXCIgXCIpKSB7XG5cdCAgICAgICAgICBwYXJzZWRFbmQgPSAoX2lzU3RyaW5nKHBhcnNlZFN0YXJ0KSA/IHBhcnNlZFN0YXJ0LnNwbGl0KFwiIFwiKVswXSA6IFwiXCIpICsgcGFyc2VkRW5kO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBvZmZzZXQgPSBfb2Zmc2V0VG9QeChwYXJzZWRFbmQuc3Vic3RyKDIpLCBzaXplKTtcblx0ICAgICAgICAgIHBhcnNlZEVuZCA9IF9pc1N0cmluZyhwYXJzZWRTdGFydCkgPyBwYXJzZWRTdGFydCA6IHN0YXJ0ICsgb2Zmc2V0O1xuXHQgICAgICAgICAgcGFyc2VkRW5kVHJpZ2dlciA9IHRyaWdnZXI7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cblx0ICAgICAgZW5kID0gTWF0aC5tYXgoc3RhcnQsIF9wYXJzZVBvc2l0aW9uKHBhcnNlZEVuZCB8fCAocGFyc2VkRW5kVHJpZ2dlciA/IFwiMTAwJSAwXCIgOiBtYXgpLCBwYXJzZWRFbmRUcmlnZ2VyLCBzaXplLCBkaXJlY3Rpb24sIHNlbGYuc2Nyb2xsKCkgKyBvZmZzZXQsIG1hcmtlckVuZCwgbWFya2VyRW5kVHJpZ2dlciwgc2VsZiwgc2Nyb2xsZXJCb3VuZHMsIGJvcmRlcldpZHRoLCB1c2VGaXhlZFBvc2l0aW9uLCBtYXgpKSB8fCAtMC4wMDE7XG5cdCAgICAgIGNoYW5nZSA9IGVuZCAtIHN0YXJ0IHx8IChzdGFydCAtPSAwLjAxKSAmJiAwLjAwMTtcblx0ICAgICAgb2Zmc2V0ID0gMDtcblx0ICAgICAgaSA9IHRyaWdnZXJJbmRleDtcblxuXHQgICAgICB3aGlsZSAoaS0tKSB7XG5cdCAgICAgICAgY3VyVHJpZ2dlciA9IF90cmlnZ2Vyc1tpXTtcblx0ICAgICAgICBjdXJQaW4gPSBjdXJUcmlnZ2VyLnBpbjtcblxuXHQgICAgICAgIGlmIChjdXJQaW4gJiYgY3VyVHJpZ2dlci5zdGFydCAtIGN1clRyaWdnZXIuX3BpblB1c2ggPCBzdGFydCkge1xuXHQgICAgICAgICAgY3MgPSBjdXJUcmlnZ2VyLmVuZCAtIGN1clRyaWdnZXIuc3RhcnQ7XG5cdCAgICAgICAgICBjdXJQaW4gPT09IHRyaWdnZXIgJiYgKG9mZnNldCArPSBjcyk7XG5cdCAgICAgICAgICBjdXJQaW4gPT09IHBpbiAmJiAob3RoZXJQaW5PZmZzZXQgKz0gY3MpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXG5cdCAgICAgIHN0YXJ0ICs9IG9mZnNldDtcblx0ICAgICAgZW5kICs9IG9mZnNldDtcblx0ICAgICAgc2VsZi5fcGluUHVzaCA9IG90aGVyUGluT2Zmc2V0O1xuXG5cdCAgICAgIGlmIChtYXJrZXJTdGFydCAmJiBvZmZzZXQpIHtcblx0ICAgICAgICBjcyA9IHt9O1xuXHQgICAgICAgIGNzW2RpcmVjdGlvbi5hXSA9IFwiKz1cIiArIG9mZnNldDtcblx0ICAgICAgICBnc2FwLnNldChbbWFya2VyU3RhcnQsIG1hcmtlckVuZF0sIGNzKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGlmIChwaW4pIHtcblx0ICAgICAgICBjcyA9IF9nZXRDb21wdXRlZFN0eWxlKHBpbik7XG5cdCAgICAgICAgaXNWZXJ0aWNhbCA9IGRpcmVjdGlvbiA9PT0gX3ZlcnRpY2FsO1xuXHQgICAgICAgIHNjcm9sbCA9IHNlbGYuc2Nyb2xsKCk7XG5cdCAgICAgICAgcGluU3RhcnQgPSBwYXJzZUZsb2F0KHBpbkdldHRlcihkaXJlY3Rpb24uYSkpICsgb3RoZXJQaW5PZmZzZXQ7XG5cdCAgICAgICAgIW1heCAmJiBlbmQgPiAxICYmICgoaXNWaWV3cG9ydCA/IF9ib2R5IDogc2Nyb2xsZXIpLnN0eWxlW1wib3ZlcmZsb3ctXCIgKyBkaXJlY3Rpb24uYV0gPSBcInNjcm9sbFwiKTtcblxuXHQgICAgICAgIF9zd2FwUGluSW4ocGluLCBzcGFjZXIsIGNzKTtcblxuXHQgICAgICAgIHBpblN0YXRlID0gX2dldFN0YXRlKHBpbik7XG5cdCAgICAgICAgYm91bmRzID0gX2dldEJvdW5kcyhwaW4sIHRydWUpO1xuXHQgICAgICAgIG9wcG9zaXRlU2Nyb2xsID0gdXNlRml4ZWRQb3NpdGlvbiAmJiBfZ2V0U2Nyb2xsRnVuYyhzY3JvbGxlciwgaXNWZXJ0aWNhbCA/IF9ob3Jpem9udGFsIDogX3ZlcnRpY2FsKSgpO1xuXG5cdCAgICAgICAgaWYgKHBpblNwYWNpbmcpIHtcblx0ICAgICAgICAgIHNwYWNlclN0YXRlID0gW3BpblNwYWNpbmcgKyBkaXJlY3Rpb24ub3MyLCBjaGFuZ2UgKyBvdGhlclBpbk9mZnNldCArIF9weF07XG5cdCAgICAgICAgICBzcGFjZXJTdGF0ZS50ID0gc3BhY2VyO1xuXHQgICAgICAgICAgaSA9IHBpblNwYWNpbmcgPT09IF9wYWRkaW5nID8gX2dldFNpemUocGluLCBkaXJlY3Rpb24pICsgY2hhbmdlICsgb3RoZXJQaW5PZmZzZXQgOiAwO1xuXHQgICAgICAgICAgaSAmJiBzcGFjZXJTdGF0ZS5wdXNoKGRpcmVjdGlvbi5kLCBpICsgX3B4KTtcblxuXHQgICAgICAgICAgX3NldFN0YXRlKHNwYWNlclN0YXRlKTtcblxuXHQgICAgICAgICAgdXNlRml4ZWRQb3NpdGlvbiAmJiBzZWxmLnNjcm9sbChwcmV2U2Nyb2xsKTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBpZiAodXNlRml4ZWRQb3NpdGlvbikge1xuXHQgICAgICAgICAgb3ZlcnJpZGUgPSB7XG5cdCAgICAgICAgICAgIHRvcDogYm91bmRzLnRvcCArIChpc1ZlcnRpY2FsID8gc2Nyb2xsIC0gc3RhcnQgOiBvcHBvc2l0ZVNjcm9sbCkgKyBfcHgsXG5cdCAgICAgICAgICAgIGxlZnQ6IGJvdW5kcy5sZWZ0ICsgKGlzVmVydGljYWwgPyBvcHBvc2l0ZVNjcm9sbCA6IHNjcm9sbCAtIHN0YXJ0KSArIF9weCxcblx0ICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcblx0ICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIlxuXHQgICAgICAgICAgfTtcblx0ICAgICAgICAgIG92ZXJyaWRlW193aWR0aF0gPSBvdmVycmlkZVtcIm1heFwiICsgX1dpZHRoXSA9IE1hdGguY2VpbChib3VuZHMud2lkdGgpICsgX3B4O1xuXHQgICAgICAgICAgb3ZlcnJpZGVbX2hlaWdodF0gPSBvdmVycmlkZVtcIm1heFwiICsgX0hlaWdodF0gPSBNYXRoLmNlaWwoYm91bmRzLmhlaWdodCkgKyBfcHg7XG5cdCAgICAgICAgICBvdmVycmlkZVtfbWFyZ2luXSA9IG92ZXJyaWRlW19tYXJnaW4gKyBfVG9wXSA9IG92ZXJyaWRlW19tYXJnaW4gKyBfUmlnaHRdID0gb3ZlcnJpZGVbX21hcmdpbiArIF9Cb3R0b21dID0gb3ZlcnJpZGVbX21hcmdpbiArIF9MZWZ0XSA9IFwiMFwiO1xuXHQgICAgICAgICAgb3ZlcnJpZGVbX3BhZGRpbmddID0gY3NbX3BhZGRpbmddO1xuXHQgICAgICAgICAgb3ZlcnJpZGVbX3BhZGRpbmcgKyBfVG9wXSA9IGNzW19wYWRkaW5nICsgX1RvcF07XG5cdCAgICAgICAgICBvdmVycmlkZVtfcGFkZGluZyArIF9SaWdodF0gPSBjc1tfcGFkZGluZyArIF9SaWdodF07XG5cdCAgICAgICAgICBvdmVycmlkZVtfcGFkZGluZyArIF9Cb3R0b21dID0gY3NbX3BhZGRpbmcgKyBfQm90dG9tXTtcblx0ICAgICAgICAgIG92ZXJyaWRlW19wYWRkaW5nICsgX0xlZnRdID0gY3NbX3BhZGRpbmcgKyBfTGVmdF07XG5cdCAgICAgICAgICBwaW5BY3RpdmVTdGF0ZSA9IF9jb3B5U3RhdGUocGluT3JpZ2luYWxTdGF0ZSwgb3ZlcnJpZGUsIHBpblJlcGFyZW50KTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBpZiAoYW5pbWF0aW9uKSB7XG5cdCAgICAgICAgICBhbmltYXRpb24ucHJvZ3Jlc3MoMSwgdHJ1ZSk7XG5cdCAgICAgICAgICBwaW5DaGFuZ2UgPSBwaW5HZXR0ZXIoZGlyZWN0aW9uLmEpIC0gcGluU3RhcnQgKyBjaGFuZ2UgKyBvdGhlclBpbk9mZnNldDtcblx0ICAgICAgICAgIGNoYW5nZSAhPT0gcGluQ2hhbmdlICYmIHBpbkFjdGl2ZVN0YXRlLnNwbGljZShwaW5BY3RpdmVTdGF0ZS5sZW5ndGggLSAyLCAyKTtcblx0ICAgICAgICAgIGFuaW1hdGlvbi5wcm9ncmVzcygwLCB0cnVlKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgcGluQ2hhbmdlID0gY2hhbmdlO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICYmIHNlbGYuc2Nyb2xsKCkpIHtcblx0ICAgICAgICBib3VuZHMgPSB0cmlnZ2VyLnBhcmVudE5vZGU7XG5cblx0ICAgICAgICB3aGlsZSAoYm91bmRzICYmIGJvdW5kcyAhPT0gX2JvZHkpIHtcblx0ICAgICAgICAgIGlmIChib3VuZHMuX3Bpbk9mZnNldCkge1xuXHQgICAgICAgICAgICBzdGFydCAtPSBib3VuZHMuX3Bpbk9mZnNldDtcblx0ICAgICAgICAgICAgZW5kIC09IGJvdW5kcy5fcGluT2Zmc2V0O1xuXHQgICAgICAgICAgfVxuXG5cdCAgICAgICAgICBib3VuZHMgPSBib3VuZHMucGFyZW50Tm9kZTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblxuXHQgICAgICBmb3IgKGkgPSAwOyBpIDwgdHJpZ2dlckluZGV4OyBpKyspIHtcblx0ICAgICAgICBjdXJUcmlnZ2VyID0gX3RyaWdnZXJzW2ldLnBpbjtcblx0ICAgICAgICBjdXJUcmlnZ2VyICYmIChjdXJUcmlnZ2VyID09PSB0cmlnZ2VyIHx8IGN1clRyaWdnZXIgPT09IHBpbikgJiYgX3RyaWdnZXJzW2ldLnJldmVydChmYWxzZSk7XG5cdCAgICAgIH1cblxuXHQgICAgICBzZWxmLnN0YXJ0ID0gc3RhcnQ7XG5cdCAgICAgIHNlbGYuZW5kID0gZW5kO1xuXHQgICAgICBzY3JvbGwxID0gc2Nyb2xsMiA9IHNlbGYuc2Nyb2xsKCk7XG5cdCAgICAgIHNjcm9sbDEgPCBwcmV2U2Nyb2xsICYmIHNlbGYuc2Nyb2xsKHByZXZTY3JvbGwpO1xuXHQgICAgICBzZWxmLnJldmVydChmYWxzZSk7XG5cdCAgICAgIF9yZWZyZXNoaW5nID0gMDtcblx0ICAgICAgcHJldkFuaW1Qcm9ncmVzcyAmJiBpc1RvZ2dsZSAmJiBhbmltYXRpb24ucHJvZ3Jlc3MocHJldkFuaW1Qcm9ncmVzcywgdHJ1ZSk7XG5cblx0ICAgICAgaWYgKHByZXZQcm9ncmVzcyAhPT0gc2VsZi5wcm9ncmVzcykge1xuXHQgICAgICAgIHNjcnViVHdlZW4gJiYgYW5pbWF0aW9uLnRvdGFsUHJvZ3Jlc3MocHJldlByb2dyZXNzLCB0cnVlKTtcblx0ICAgICAgICBzZWxmLnByb2dyZXNzID0gcHJldlByb2dyZXNzO1xuXHQgICAgICAgIHNlbGYudXBkYXRlKCk7XG5cdCAgICAgIH1cblxuXHQgICAgICBwaW4gJiYgcGluU3BhY2luZyAmJiAoc3BhY2VyLl9waW5PZmZzZXQgPSBNYXRoLnJvdW5kKHNlbGYucHJvZ3Jlc3MgKiBwaW5DaGFuZ2UpKTtcblx0ICAgICAgb25SZWZyZXNoICYmIG9uUmVmcmVzaChzZWxmKTtcblx0ICAgIH07XG5cblx0ICAgIHNlbGYuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIHJldHVybiAoc2VsZi5zY3JvbGwoKSAtIHNjcm9sbDIpIC8gKF9nZXRUaW1lKCkgLSBfdGltZTIpICogMTAwMCB8fCAwO1xuXHQgICAgfTtcblxuXHQgICAgc2VsZi51cGRhdGUgPSBmdW5jdGlvbiAocmVzZXQsIHJlY29yZFZlbG9jaXR5KSB7XG5cdCAgICAgIHZhciBzY3JvbGwgPSBzZWxmLnNjcm9sbCgpLFxuXHQgICAgICAgICAgcCA9IHJlc2V0ID8gMCA6IChzY3JvbGwgLSBzdGFydCkgLyBjaGFuZ2UsXG5cdCAgICAgICAgICBjbGlwcGVkID0gcCA8IDAgPyAwIDogcCA+IDEgPyAxIDogcCB8fCAwLFxuXHQgICAgICAgICAgcHJldlByb2dyZXNzID0gc2VsZi5wcm9ncmVzcyxcblx0ICAgICAgICAgIGlzQWN0aXZlLFxuXHQgICAgICAgICAgd2FzQWN0aXZlLFxuXHQgICAgICAgICAgdG9nZ2xlU3RhdGUsXG5cdCAgICAgICAgICBhY3Rpb24sXG5cdCAgICAgICAgICBzdGF0ZUNoYW5nZWQsXG5cdCAgICAgICAgICB0b2dnbGVkO1xuXG5cdCAgICAgIGlmIChyZWNvcmRWZWxvY2l0eSkge1xuXHQgICAgICAgIHNjcm9sbDIgPSBzY3JvbGwxO1xuXHQgICAgICAgIHNjcm9sbDEgPSBzY3JvbGw7XG5cblx0ICAgICAgICBpZiAoc25hcCkge1xuXHQgICAgICAgICAgc25hcDIgPSBzbmFwMTtcblx0ICAgICAgICAgIHNuYXAxID0gYW5pbWF0aW9uICYmICFpc1RvZ2dsZSA/IGFuaW1hdGlvbi50b3RhbFByb2dyZXNzKCkgOiBjbGlwcGVkO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXG5cdCAgICAgIGFudGljaXBhdGVQaW4gJiYgIWNsaXBwZWQgJiYgcGluICYmICFfcmVmcmVzaGluZyAmJiAhX3N0YXJ0dXAgJiYgX2xhc3RTY3JvbGxUaW1lICYmIHN0YXJ0IDwgc2Nyb2xsICsgKHNjcm9sbCAtIHNjcm9sbDIpIC8gKF9nZXRUaW1lKCkgLSBfdGltZTIpICogYW50aWNpcGF0ZVBpbiAmJiAoY2xpcHBlZCA9IDAuMDAwMSk7XG5cblx0ICAgICAgaWYgKGNsaXBwZWQgIT09IHByZXZQcm9ncmVzcyAmJiBzZWxmLmVuYWJsZWQpIHtcblx0ICAgICAgICBpc0FjdGl2ZSA9IHNlbGYuaXNBY3RpdmUgPSAhIWNsaXBwZWQgJiYgY2xpcHBlZCA8IDE7XG5cdCAgICAgICAgd2FzQWN0aXZlID0gISFwcmV2UHJvZ3Jlc3MgJiYgcHJldlByb2dyZXNzIDwgMTtcblx0ICAgICAgICB0b2dnbGVkID0gaXNBY3RpdmUgIT09IHdhc0FjdGl2ZTtcblx0ICAgICAgICBzdGF0ZUNoYW5nZWQgPSB0b2dnbGVkIHx8ICEhY2xpcHBlZCAhPT0gISFwcmV2UHJvZ3Jlc3M7XG5cdCAgICAgICAgc2VsZi5kaXJlY3Rpb24gPSBjbGlwcGVkID4gcHJldlByb2dyZXNzID8gMSA6IC0xO1xuXHQgICAgICAgIHNlbGYucHJvZ3Jlc3MgPSBjbGlwcGVkO1xuXG5cdCAgICAgICAgaWYgKCFpc1RvZ2dsZSkge1xuXHQgICAgICAgICAgaWYgKHNjcnViVHdlZW4gJiYgIV9yZWZyZXNoaW5nICYmICFfc3RhcnR1cCkge1xuXHQgICAgICAgICAgICBzY3J1YlR3ZWVuLnZhcnMudG90YWxQcm9ncmVzcyA9IGNsaXBwZWQ7XG5cdCAgICAgICAgICAgIHNjcnViVHdlZW4uaW52YWxpZGF0ZSgpLnJlc3RhcnQoKTtcblx0ICAgICAgICAgIH0gZWxzZSBpZiAoYW5pbWF0aW9uKSB7XG5cdCAgICAgICAgICAgIGFuaW1hdGlvbi50b3RhbFByb2dyZXNzKGNsaXBwZWQsICEhX3JlZnJlc2hpbmcpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGlmIChwaW4pIHtcblx0ICAgICAgICAgIHJlc2V0ICYmIHBpblNwYWNpbmcgJiYgKHNwYWNlci5zdHlsZVtwaW5TcGFjaW5nICsgZGlyZWN0aW9uLm9zMl0gPSBzcGFjaW5nU3RhcnQpO1xuXG5cdCAgICAgICAgICBpZiAoIXVzZUZpeGVkUG9zaXRpb24pIHtcblx0ICAgICAgICAgICAgcGluU2V0dGVyKHBpblN0YXJ0ICsgcGluQ2hhbmdlICogY2xpcHBlZCk7XG5cdCAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlQ2hhbmdlZCkge1xuXHQgICAgICAgICAgICBhY3Rpb24gPSAhcmVzZXQgJiYgY2xpcHBlZCA+IHByZXZQcm9ncmVzcyAmJiBlbmQgKyAxID4gc2Nyb2xsICYmIHNjcm9sbCArIDEgPj0gX21heFNjcm9sbChzY3JvbGxlciwgZGlyZWN0aW9uKTtcblxuXHQgICAgICAgICAgICBpZiAocGluUmVwYXJlbnQpIHtcblx0ICAgICAgICAgICAgICBpZiAoIXJlc2V0ICYmIChpc0FjdGl2ZSB8fCBhY3Rpb24pKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgYm91bmRzID0gX2dldEJvdW5kcyhwaW4sIHRydWUpLFxuXHQgICAgICAgICAgICAgICAgICAgIF9vZmZzZXQgPSBzY3JvbGwgLSBzdGFydDtcblxuXHQgICAgICAgICAgICAgICAgX3JlcGFyZW50KHBpbiwgX2JvZHksIGJvdW5kcy50b3AgKyAoZGlyZWN0aW9uID09PSBfdmVydGljYWwgPyBfb2Zmc2V0IDogMCkgKyBfcHgsIGJvdW5kcy5sZWZ0ICsgKGRpcmVjdGlvbiA9PT0gX3ZlcnRpY2FsID8gMCA6IF9vZmZzZXQpICsgX3B4KTtcblx0ICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgX3JlcGFyZW50KHBpbiwgc3BhY2VyKTtcblx0ICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICBfc2V0U3RhdGUoaXNBY3RpdmUgfHwgYWN0aW9uID8gcGluQWN0aXZlU3RhdGUgOiBwaW5TdGF0ZSk7XG5cblx0ICAgICAgICAgICAgcGluQ2hhbmdlICE9PSBjaGFuZ2UgJiYgY2xpcHBlZCA8IDEgJiYgaXNBY3RpdmUgfHwgcGluU2V0dGVyKHBpblN0YXJ0ICsgKGNsaXBwZWQgPT09IDEgJiYgIWFjdGlvbiA/IHBpbkNoYW5nZSA6IDApKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cblx0ICAgICAgICBzbmFwICYmICF0d2VlblRvLnR3ZWVuICYmICFfcmVmcmVzaGluZyAmJiAhX3N0YXJ0dXAgJiYgc25hcERlbGF5ZWRDYWxsLnJlc3RhcnQodHJ1ZSk7XG5cdCAgICAgICAgdG9nZ2xlQ2xhc3MgJiYgKHRvZ2dsZWQgfHwgb25jZSAmJiBjbGlwcGVkICYmIChjbGlwcGVkIDwgMSB8fCAhX2xpbWl0Q2FsbGJhY2tzKSkgJiYgX3RvQXJyYXkodG9nZ2xlQ2xhc3MudGFyZ2V0cykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcblx0ICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3RbaXNBY3RpdmUgfHwgb25jZSA/IFwiYWRkXCIgOiBcInJlbW92ZVwiXSh0b2dnbGVDbGFzcy5jbGFzc05hbWUpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIG9uVXBkYXRlICYmICFpc1RvZ2dsZSAmJiAhcmVzZXQgJiYgb25VcGRhdGUoc2VsZik7XG5cblx0ICAgICAgICBpZiAoc3RhdGVDaGFuZ2VkICYmICFfcmVmcmVzaGluZykge1xuXHQgICAgICAgICAgdG9nZ2xlU3RhdGUgPSBjbGlwcGVkICYmICFwcmV2UHJvZ3Jlc3MgPyAwIDogY2xpcHBlZCA9PT0gMSA/IDEgOiBwcmV2UHJvZ3Jlc3MgPT09IDEgPyAyIDogMztcblxuXHQgICAgICAgICAgaWYgKGlzVG9nZ2xlKSB7XG5cdCAgICAgICAgICAgIGFjdGlvbiA9ICF0b2dnbGVkICYmIHRvZ2dsZUFjdGlvbnNbdG9nZ2xlU3RhdGUgKyAxXSAhPT0gXCJub25lXCIgJiYgdG9nZ2xlQWN0aW9uc1t0b2dnbGVTdGF0ZSArIDFdIHx8IHRvZ2dsZUFjdGlvbnNbdG9nZ2xlU3RhdGVdO1xuXG5cdCAgICAgICAgICAgIGlmIChhbmltYXRpb24gJiYgKGFjdGlvbiA9PT0gXCJjb21wbGV0ZVwiIHx8IGFjdGlvbiA9PT0gXCJyZXNldFwiIHx8IGFjdGlvbiBpbiBhbmltYXRpb24pKSB7XG5cdCAgICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJjb21wbGV0ZVwiKSB7XG5cdCAgICAgICAgICAgICAgICBhbmltYXRpb24ucGF1c2UoKS50b3RhbFByb2dyZXNzKDEpO1xuXHQgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSBcInJlc2V0XCIpIHtcblx0ICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5yZXN0YXJ0KHRydWUpLnBhdXNlKCk7XG5cdCAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIGFuaW1hdGlvblthY3Rpb25dKCk7XG5cdCAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgb25VcGRhdGUgJiYgb25VcGRhdGUoc2VsZik7XG5cdCAgICAgICAgICB9XG5cblx0ICAgICAgICAgIGlmICh0b2dnbGVkIHx8ICFfbGltaXRDYWxsYmFja3MpIHtcblx0ICAgICAgICAgICAgb25Ub2dnbGUgJiYgdG9nZ2xlZCAmJiBvblRvZ2dsZShzZWxmKTtcblx0ICAgICAgICAgICAgY2FsbGJhY2tzW3RvZ2dsZVN0YXRlXSAmJiBjYWxsYmFja3NbdG9nZ2xlU3RhdGVdKHNlbGYpO1xuXHQgICAgICAgICAgICBvbmNlICYmIChjbGlwcGVkID09PSAxID8gc2VsZi5raWxsKGZhbHNlLCAxKSA6IGNhbGxiYWNrc1t0b2dnbGVTdGF0ZV0gPSAwKTtcblxuXHQgICAgICAgICAgICBpZiAoIXRvZ2dsZWQpIHtcblx0ICAgICAgICAgICAgICB0b2dnbGVTdGF0ZSA9IGNsaXBwZWQgPT09IDEgPyAxIDogMztcblx0ICAgICAgICAgICAgICBjYWxsYmFja3NbdG9nZ2xlU3RhdGVdICYmIGNhbGxiYWNrc1t0b2dnbGVTdGF0ZV0oc2VsZik7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9IGVsc2UgaWYgKGlzVG9nZ2xlICYmIG9uVXBkYXRlICYmICFfcmVmcmVzaGluZykge1xuXHQgICAgICAgICAgb25VcGRhdGUoc2VsZik7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cblx0ICAgICAgaWYgKG1hcmtlckVuZFNldHRlcikge1xuXHQgICAgICAgIG1hcmtlclN0YXJ0U2V0dGVyKHNjcm9sbCArIChtYXJrZXJTdGFydFRyaWdnZXIuX2lzRmxpcHBlZCA/IDEgOiAwKSk7XG5cdCAgICAgICAgbWFya2VyRW5kU2V0dGVyKHNjcm9sbCk7XG5cdCAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIHNlbGYuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICBpZiAoIXNlbGYuZW5hYmxlZCkge1xuXHQgICAgICAgIHNlbGYuZW5hYmxlZCA9IHRydWU7XG5cblx0ICAgICAgICBfYWRkTGlzdGVuZXIoc2Nyb2xsZXIsIFwicmVzaXplXCIsIF9vblJlc2l6ZSk7XG5cblx0ICAgICAgICBfYWRkTGlzdGVuZXIoc2Nyb2xsZXIsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7XG5cblx0ICAgICAgICBvblJlZnJlc2hJbml0ICYmIF9hZGRMaXN0ZW5lcihTY3JvbGxUcmlnZ2VyLCBcInJlZnJlc2hJbml0XCIsIG9uUmVmcmVzaEluaXQpO1xuXHQgICAgICAgICFhbmltYXRpb24gfHwgIWFuaW1hdGlvbi5hZGQgPyBzZWxmLnJlZnJlc2goKSA6IGdzYXAuZGVsYXllZENhbGwoMC4wMSwgZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgcmV0dXJuIHN0YXJ0IHx8IGVuZCB8fCBzZWxmLnJlZnJlc2goKTtcblx0ICAgICAgICB9KSAmJiAoY2hhbmdlID0gMC4wMSkgJiYgKHN0YXJ0ID0gZW5kID0gMCk7XG5cdCAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIHNlbGYuZGlzYWJsZSA9IGZ1bmN0aW9uIChyZXNldCwgYWxsb3dBbmltYXRpb24pIHtcblx0ICAgICAgaWYgKHNlbGYuZW5hYmxlZCkge1xuXHQgICAgICAgIHJlc2V0ICE9PSBmYWxzZSAmJiBzZWxmLnJldmVydCgpO1xuXHQgICAgICAgIHNlbGYuZW5hYmxlZCA9IHNlbGYuaXNBY3RpdmUgPSBmYWxzZTtcblx0ICAgICAgICBhbGxvd0FuaW1hdGlvbiB8fCBzY3J1YlR3ZWVuICYmIHNjcnViVHdlZW4ucGF1c2UoKTtcblx0ICAgICAgICBwcmV2U2Nyb2xsID0gMDtcblx0ICAgICAgICBwaW5DYWNoZSAmJiAocGluQ2FjaGUudW5jYWNoZSA9IDEpO1xuXHQgICAgICAgIG9uUmVmcmVzaEluaXQgJiYgX3JlbW92ZUxpc3RlbmVyKFNjcm9sbFRyaWdnZXIsIFwicmVmcmVzaEluaXRcIiwgb25SZWZyZXNoSW5pdCk7XG5cblx0ICAgICAgICBpZiAoc25hcERlbGF5ZWRDYWxsKSB7XG5cdCAgICAgICAgICBzbmFwRGVsYXllZENhbGwucGF1c2UoKTtcblx0ICAgICAgICAgIHR3ZWVuVG8udHdlZW4gJiYgdHdlZW5Uby50d2Vlbi5raWxsKCkgJiYgKHR3ZWVuVG8udHdlZW4gPSAwKTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBpZiAoIWlzVmlld3BvcnQpIHtcblx0ICAgICAgICAgIHZhciBpID0gX3RyaWdnZXJzLmxlbmd0aDtcblxuXHQgICAgICAgICAgd2hpbGUgKGktLSkge1xuXHQgICAgICAgICAgICBpZiAoX3RyaWdnZXJzW2ldLnNjcm9sbGVyID09PSBzY3JvbGxlciAmJiBfdHJpZ2dlcnNbaV0gIT09IHNlbGYpIHtcblx0ICAgICAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgIH1cblxuXHQgICAgICAgICAgX3JlbW92ZUxpc3RlbmVyKHNjcm9sbGVyLCBcInJlc2l6ZVwiLCBfb25SZXNpemUpO1xuXG5cdCAgICAgICAgICBfcmVtb3ZlTGlzdGVuZXIoc2Nyb2xsZXIsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICBzZWxmLmtpbGwgPSBmdW5jdGlvbiAocmV2ZXJ0LCBhbGxvd0FuaW1hdGlvbikge1xuXHQgICAgICBzZWxmLmRpc2FibGUocmV2ZXJ0LCBhbGxvd0FuaW1hdGlvbik7XG5cdCAgICAgIGlkICYmIGRlbGV0ZSBfaWRzW2lkXTtcblxuXHQgICAgICB2YXIgaSA9IF90cmlnZ2Vycy5pbmRleE9mKHNlbGYpO1xuXG5cdCAgICAgIF90cmlnZ2Vycy5zcGxpY2UoaSwgMSk7XG5cblx0ICAgICAgaSA9PT0gX2kgJiYgX2RpcmVjdGlvbiA+IDAgJiYgX2ktLTtcblxuXHQgICAgICBpZiAoYW5pbWF0aW9uKSB7XG5cdCAgICAgICAgYW5pbWF0aW9uLnNjcm9sbFRyaWdnZXIgPSBudWxsO1xuXHQgICAgICAgIHJldmVydCAmJiBhbmltYXRpb24ucmVuZGVyKC0xKTtcblx0ICAgICAgICBhbGxvd0FuaW1hdGlvbiB8fCBhbmltYXRpb24ua2lsbCgpO1xuXHQgICAgICB9XG5cblx0ICAgICAgbWFya2VyU3RhcnQgJiYgW21hcmtlclN0YXJ0LCBtYXJrZXJFbmQsIG1hcmtlclN0YXJ0VHJpZ2dlciwgbWFya2VyRW5kVHJpZ2dlcl0uZm9yRWFjaChmdW5jdGlvbiAobSkge1xuXHQgICAgICAgIHJldHVybiBtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobSk7XG5cdCAgICAgIH0pO1xuXHQgICAgICBwaW5DYWNoZSAmJiAocGluQ2FjaGUudW5jYWNoZSA9IDEpO1xuXHQgICAgfTtcblxuXHQgICAgc2VsZi5lbmFibGUoKTtcblx0ICB9O1xuXG5cdCAgU2Nyb2xsVHJpZ2dlci5yZWdpc3RlciA9IGZ1bmN0aW9uIHJlZ2lzdGVyKGNvcmUpIHtcblx0ICAgIGlmICghX2NvcmVJbml0dGVkKSB7XG5cdCAgICAgIGdzYXAgPSBjb3JlIHx8IF9nZXRHU0FQKCk7XG5cblx0ICAgICAgaWYgKF93aW5kb3dFeGlzdHMoKSAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcblx0ICAgICAgICBfd2luID0gd2luZG93O1xuXHQgICAgICAgIF9kb2MgPSBkb2N1bWVudDtcblx0ICAgICAgICBfZG9jRWwgPSBfZG9jLmRvY3VtZW50RWxlbWVudDtcblx0ICAgICAgICBfYm9keSA9IF9kb2MuYm9keTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGlmIChnc2FwKSB7XG5cdCAgICAgICAgX3RvQXJyYXkgPSBnc2FwLnV0aWxzLnRvQXJyYXk7XG5cdCAgICAgICAgX2NsYW1wID0gZ3NhcC51dGlscy5jbGFtcDtcblx0ICAgICAgICBnc2FwLmNvcmUuZ2xvYmFscyhcIlNjcm9sbFRyaWdnZXJcIiwgU2Nyb2xsVHJpZ2dlcik7XG5cblx0ICAgICAgICBpZiAoX2JvZHkpIHtcblx0ICAgICAgICAgIF9yYWYgPSBfd2luLnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAoZikge1xuXHQgICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChmLCAxNik7XG5cdCAgICAgICAgICB9O1xuXG5cdCAgICAgICAgICBfYWRkTGlzdGVuZXIoX3dpbiwgXCJtb3VzZXdoZWVsXCIsIF9vblNjcm9sbCk7XG5cblx0ICAgICAgICAgIF9yb290ID0gW193aW4sIF9kb2MsIF9kb2NFbCwgX2JvZHldO1xuXG5cdCAgICAgICAgICBfYWRkTGlzdGVuZXIoX2RvYywgXCJzY3JvbGxcIiwgX29uU2Nyb2xsKTtcblxuXHQgICAgICAgICAgdmFyIGJvZHlTdHlsZSA9IF9ib2R5LnN0eWxlLFxuXHQgICAgICAgICAgICAgIGJvcmRlciA9IGJvZHlTdHlsZS5ib3JkZXJUb3AsXG5cdCAgICAgICAgICAgICAgYm91bmRzO1xuXHQgICAgICAgICAgYm9keVN0eWxlLmJvcmRlclRvcCA9IFwiMXB4IHNvbGlkICMwMDBcIjtcblx0ICAgICAgICAgIGJvdW5kcyA9IF9nZXRCb3VuZHMoX2JvZHkpO1xuXHQgICAgICAgICAgX3ZlcnRpY2FsLm0gPSBNYXRoLnJvdW5kKGJvdW5kcy50b3AgKyBfdmVydGljYWwuc2MoKSkgfHwgMDtcblx0ICAgICAgICAgIF9ob3Jpem9udGFsLm0gPSBNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0ICsgX2hvcml6b250YWwuc2MoKSkgfHwgMDtcblx0ICAgICAgICAgIGJvcmRlciA/IGJvZHlTdHlsZS5ib3JkZXJUb3AgPSBib3JkZXIgOiBib2R5U3R5bGUucmVtb3ZlUHJvcGVydHkoXCJib3JkZXItdG9wXCIpO1xuXHQgICAgICAgICAgX3N5bmNJbnRlcnZhbCA9IHNldEludGVydmFsKF9zeW5jLCAyMDApO1xuXHQgICAgICAgICAgZ3NhcC5kZWxheWVkQ2FsbCgwLjUsIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIF9zdGFydHVwID0gMDtcblx0ICAgICAgICAgIH0pO1xuXG5cdCAgICAgICAgICBfYWRkTGlzdGVuZXIoX2RvYywgXCJ0b3VjaGNhbmNlbFwiLCBfcGFzc1Rocm91Z2gpO1xuXG5cdCAgICAgICAgICBfYWRkTGlzdGVuZXIoX2JvZHksIFwidG91Y2hzdGFydFwiLCBfcGFzc1Rocm91Z2gpO1xuXG5cdCAgICAgICAgICBfbXVsdGlMaXN0ZW5lcihfYWRkTGlzdGVuZXIsIF9kb2MsIFwicG9pbnRlcmRvd24sdG91Y2hzdGFydCxtb3VzZWRvd25cIiwgZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICByZXR1cm4gX3BvaW50ZXJJc0Rvd24gPSAxO1xuXHQgICAgICAgICAgfSk7XG5cblx0ICAgICAgICAgIF9tdWx0aUxpc3RlbmVyKF9hZGRMaXN0ZW5lciwgX2RvYywgXCJwb2ludGVydXAsdG91Y2hlbmQsbW91c2V1cFwiLCBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBfcG9pbnRlcklzRG93biA9IDA7XG5cdCAgICAgICAgICB9KTtcblxuXHQgICAgICAgICAgX3RyYW5zZm9ybVByb3AgPSBnc2FwLnV0aWxzLmNoZWNrUHJlZml4KFwidHJhbnNmb3JtXCIpO1xuXG5cdCAgICAgICAgICBfc3RhdGVQcm9wcy5wdXNoKF90cmFuc2Zvcm1Qcm9wKTtcblxuXHQgICAgICAgICAgX2NvcmVJbml0dGVkID0gX2dldFRpbWUoKTtcblx0ICAgICAgICAgIF9yZXNpemVEZWxheSA9IGdzYXAuZGVsYXllZENhbGwoMC4yLCBfcmVmcmVzaEFsbCkucGF1c2UoKTtcblx0ICAgICAgICAgIF9hdXRvUmVmcmVzaCA9IFtfZG9jLCBcInZpc2liaWxpdHljaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgdyA9IF93aW4uaW5uZXJXaWR0aCxcblx0ICAgICAgICAgICAgICAgIGggPSBfd2luLmlubmVySGVpZ2h0O1xuXG5cdCAgICAgICAgICAgIGlmIChfZG9jLmhpZGRlbikge1xuXHQgICAgICAgICAgICAgIF9wcmV2V2lkdGggPSB3O1xuXHQgICAgICAgICAgICAgIF9wcmV2SGVpZ2h0ID0gaDtcblx0ICAgICAgICAgICAgfSBlbHNlIGlmIChfcHJldldpZHRoICE9PSB3IHx8IF9wcmV2SGVpZ2h0ICE9PSBoKSB7XG5cdCAgICAgICAgICAgICAgX29uUmVzaXplKCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgIH0sIF9kb2MsIFwiRE9NQ29udGVudExvYWRlZFwiLCBfcmVmcmVzaEFsbCwgX3dpbiwgXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIF9sYXN0U2Nyb2xsVGltZSB8fCBfcmVmcmVzaEFsbCgpO1xuXHQgICAgICAgICAgfSwgX3dpbiwgXCJyZXNpemVcIiwgX29uUmVzaXplXTtcblxuXHQgICAgICAgICAgX2l0ZXJhdGVBdXRvUmVmcmVzaChfYWRkTGlzdGVuZXIpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gX2NvcmVJbml0dGVkO1xuXHQgIH07XG5cblx0ICBTY3JvbGxUcmlnZ2VyLmRlZmF1bHRzID0gZnVuY3Rpb24gZGVmYXVsdHMoY29uZmlnKSB7XG5cdCAgICBmb3IgKHZhciBwIGluIGNvbmZpZykge1xuXHQgICAgICBfZGVmYXVsdHNbcF0gPSBjb25maWdbcF07XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIFNjcm9sbFRyaWdnZXIua2lsbCA9IGZ1bmN0aW9uIGtpbGwoKSB7XG5cdCAgICBfZW5hYmxlZCA9IDA7XG5cblx0ICAgIF90cmlnZ2Vycy5zbGljZSgwKS5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG5cdCAgICAgIHJldHVybiB0cmlnZ2VyLmtpbGwoMSk7XG5cdCAgICB9KTtcblx0ICB9O1xuXG5cdCAgU2Nyb2xsVHJpZ2dlci5jb25maWcgPSBmdW5jdGlvbiBjb25maWcodmFycykge1xuXHQgICAgXCJsaW1pdENhbGxiYWNrc1wiIGluIHZhcnMgJiYgKF9saW1pdENhbGxiYWNrcyA9ICEhdmFycy5saW1pdENhbGxiYWNrcyk7XG5cdCAgICB2YXIgbXMgPSB2YXJzLnN5bmNJbnRlcnZhbDtcblx0ICAgIG1zICYmIGNsZWFySW50ZXJ2YWwoX3N5bmNJbnRlcnZhbCkgfHwgKF9zeW5jSW50ZXJ2YWwgPSBtcykgJiYgc2V0SW50ZXJ2YWwoX3N5bmMsIG1zKTtcblx0ICAgIFwiYXV0b1JlZnJlc2hFdmVudHNcIiBpbiB2YXJzICYmIChfaXRlcmF0ZUF1dG9SZWZyZXNoKF9yZW1vdmVMaXN0ZW5lcikgfHwgX2l0ZXJhdGVBdXRvUmVmcmVzaChfYWRkTGlzdGVuZXIsIHZhcnMuYXV0b1JlZnJlc2hFdmVudHMgfHwgXCJub25lXCIpKTtcblx0ICB9O1xuXG5cdCAgU2Nyb2xsVHJpZ2dlci5zY3JvbGxlclByb3h5ID0gZnVuY3Rpb24gc2Nyb2xsZXJQcm94eSh0YXJnZXQsIHZhcnMpIHtcblx0ICAgIHZhciB0ID0gX3RvQXJyYXkodGFyZ2V0KVswXTtcblxuXHQgICAgX2lzVmlld3BvcnQodCkgPyBfcHJveGllcy51bnNoaWZ0KF93aW4sIHZhcnMsIF9ib2R5LCB2YXJzLCBfZG9jRWwsIHZhcnMpIDogX3Byb3hpZXMudW5zaGlmdCh0LCB2YXJzKTtcblx0ICB9O1xuXG5cdCAgU2Nyb2xsVHJpZ2dlci5tYXRjaE1lZGlhID0gZnVuY3Rpb24gbWF0Y2hNZWRpYSh2YXJzKSB7XG5cdCAgICB2YXIgbXEsIHAsIGksIGZ1bmMsIHJlc3VsdDtcblxuXHQgICAgZm9yIChwIGluIHZhcnMpIHtcblx0ICAgICAgaSA9IF9tZWRpYS5pbmRleE9mKHApO1xuXHQgICAgICBmdW5jID0gdmFyc1twXTtcblx0ICAgICAgX2NyZWF0aW5nTWVkaWEgPSBwO1xuXG5cdCAgICAgIGlmIChwID09PSBcImFsbFwiKSB7XG5cdCAgICAgICAgZnVuYygpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIG1xID0gX3dpbi5tYXRjaE1lZGlhKHApO1xuXG5cdCAgICAgICAgaWYgKG1xKSB7XG5cdCAgICAgICAgICBtcS5tYXRjaGVzICYmIChyZXN1bHQgPSBmdW5jKCkpO1xuXG5cdCAgICAgICAgICBpZiAofmkpIHtcblx0ICAgICAgICAgICAgX21lZGlhW2kgKyAxXSA9IF9jb21iaW5lRnVuYyhfbWVkaWFbaSArIDFdLCBmdW5jKTtcblx0ICAgICAgICAgICAgX21lZGlhW2kgKyAyXSA9IF9jb21iaW5lRnVuYyhfbWVkaWFbaSArIDJdLCByZXN1bHQpO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgaSA9IF9tZWRpYS5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgX21lZGlhLnB1c2gocCwgZnVuYywgcmVzdWx0KTtcblxuXHQgICAgICAgICAgICBtcS5hZGRMaXN0ZW5lciA/IG1xLmFkZExpc3RlbmVyKF9vbk1lZGlhQ2hhbmdlKSA6IG1xLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgX29uTWVkaWFDaGFuZ2UpO1xuXHQgICAgICAgICAgfVxuXG5cdCAgICAgICAgICBfbWVkaWFbaSArIDNdID0gbXEubWF0Y2hlcztcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblxuXHQgICAgICBfY3JlYXRpbmdNZWRpYSA9IDA7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBfbWVkaWE7XG5cdCAgfTtcblxuXHQgIFNjcm9sbFRyaWdnZXIuY2xlYXJNYXRjaE1lZGlhID0gZnVuY3Rpb24gY2xlYXJNYXRjaE1lZGlhKHF1ZXJ5KSB7XG5cdCAgICBxdWVyeSB8fCAoX21lZGlhLmxlbmd0aCA9IDApO1xuXHQgICAgcXVlcnkgPSBfbWVkaWEuaW5kZXhPZihxdWVyeSk7XG5cdCAgICBxdWVyeSA+PSAwICYmIF9tZWRpYS5zcGxpY2UocXVlcnksIDQpO1xuXHQgIH07XG5cblx0ICByZXR1cm4gU2Nyb2xsVHJpZ2dlcjtcblx0fSgpO1xuXHRTY3JvbGxUcmlnZ2VyLnZlcnNpb24gPSBcIjMuNS4xXCI7XG5cblx0U2Nyb2xsVHJpZ2dlci5zYXZlU3R5bGVzID0gZnVuY3Rpb24gKHRhcmdldHMpIHtcblx0ICByZXR1cm4gdGFyZ2V0cyA/IF90b0FycmF5KHRhcmdldHMpLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldCkge1xuXHQgICAgdmFyIGkgPSBfc2F2ZWRTdHlsZXMuaW5kZXhPZih0YXJnZXQpO1xuXG5cdCAgICBpID49IDAgJiYgX3NhdmVkU3R5bGVzLnNwbGljZShpLCA0KTtcblxuXHQgICAgX3NhdmVkU3R5bGVzLnB1c2godGFyZ2V0LCB0YXJnZXQuc3R5bGUuY3NzVGV4dCwgZ3NhcC5jb3JlLmdldENhY2hlKHRhcmdldCksIF9jcmVhdGluZ01lZGlhKTtcblx0ICB9KSA6IF9zYXZlZFN0eWxlcztcblx0fTtcblxuXHRTY3JvbGxUcmlnZ2VyLnJldmVydCA9IGZ1bmN0aW9uIChzb2Z0LCBtZWRpYSkge1xuXHQgIHJldHVybiBfcmV2ZXJ0QWxsKCFzb2Z0LCBtZWRpYSk7XG5cdH07XG5cblx0U2Nyb2xsVHJpZ2dlci5jcmVhdGUgPSBmdW5jdGlvbiAodmFycywgYW5pbWF0aW9uKSB7XG5cdCAgcmV0dXJuIG5ldyBTY3JvbGxUcmlnZ2VyKHZhcnMsIGFuaW1hdGlvbik7XG5cdH07XG5cblx0U2Nyb2xsVHJpZ2dlci5yZWZyZXNoID0gZnVuY3Rpb24gKHNhZmUpIHtcblx0ICByZXR1cm4gc2FmZSA/IF9vblJlc2l6ZSgpIDogX3JlZnJlc2hBbGwodHJ1ZSk7XG5cdH07XG5cblx0U2Nyb2xsVHJpZ2dlci51cGRhdGUgPSBfdXBkYXRlQWxsO1xuXG5cdFNjcm9sbFRyaWdnZXIubWF4U2Nyb2xsID0gZnVuY3Rpb24gKGVsZW1lbnQsIGhvcml6b250YWwpIHtcblx0ICByZXR1cm4gX21heFNjcm9sbChlbGVtZW50LCBob3Jpem9udGFsID8gX2hvcml6b250YWwgOiBfdmVydGljYWwpO1xuXHR9O1xuXG5cdFNjcm9sbFRyaWdnZXIuZ2V0U2Nyb2xsRnVuYyA9IGZ1bmN0aW9uIChlbGVtZW50LCBob3Jpem9udGFsKSB7XG5cdCAgcmV0dXJuIF9nZXRTY3JvbGxGdW5jKF90b0FycmF5KGVsZW1lbnQpWzBdLCBob3Jpem9udGFsID8gX2hvcml6b250YWwgOiBfdmVydGljYWwpO1xuXHR9O1xuXG5cdFNjcm9sbFRyaWdnZXIuZ2V0QnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuXHQgIHJldHVybiBfaWRzW2lkXTtcblx0fTtcblxuXHRTY3JvbGxUcmlnZ2VyLmdldEFsbCA9IGZ1bmN0aW9uICgpIHtcblx0ICByZXR1cm4gX3RyaWdnZXJzLnNsaWNlKDApO1xuXHR9O1xuXG5cdFNjcm9sbFRyaWdnZXIuaXNTY3JvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdCAgcmV0dXJuICEhX2xhc3RTY3JvbGxUaW1lO1xuXHR9O1xuXG5cdFNjcm9sbFRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBjYWxsYmFjaykge1xuXHQgIHZhciBhID0gX2xpc3RlbmVyc1t0eXBlXSB8fCAoX2xpc3RlbmVyc1t0eXBlXSA9IFtdKTtcblx0ICB+YS5pbmRleE9mKGNhbGxiYWNrKSB8fCBhLnB1c2goY2FsbGJhY2spO1xuXHR9O1xuXG5cdFNjcm9sbFRyaWdnZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBjYWxsYmFjaykge1xuXHQgIHZhciBhID0gX2xpc3RlbmVyc1t0eXBlXSxcblx0ICAgICAgaSA9IGEgJiYgYS5pbmRleE9mKGNhbGxiYWNrKTtcblx0ICBpID49IDAgJiYgYS5zcGxpY2UoaSwgMSk7XG5cdH07XG5cblx0U2Nyb2xsVHJpZ2dlci5iYXRjaCA9IGZ1bmN0aW9uICh0YXJnZXRzLCB2YXJzKSB7XG5cdCAgdmFyIHJlc3VsdCA9IFtdLFxuXHQgICAgICB2YXJzQ29weSA9IHt9LFxuXHQgICAgICBpbnRlcnZhbCA9IHZhcnMuaW50ZXJ2YWwgfHwgMC4wMTYsXG5cdCAgICAgIGJhdGNoTWF4ID0gdmFycy5iYXRjaE1heCB8fCAxZTksXG5cdCAgICAgIHByb3h5Q2FsbGJhY2sgPSBmdW5jdGlvbiBwcm94eUNhbGxiYWNrKHR5cGUsIGNhbGxiYWNrKSB7XG5cdCAgICB2YXIgZWxlbWVudHMgPSBbXSxcblx0ICAgICAgICB0cmlnZ2VycyA9IFtdLFxuXHQgICAgICAgIGRlbGF5ID0gZ3NhcC5kZWxheWVkQ2FsbChpbnRlcnZhbCwgZnVuY3Rpb24gKCkge1xuXHQgICAgICBjYWxsYmFjayhlbGVtZW50cywgdHJpZ2dlcnMpO1xuXHQgICAgICBlbGVtZW50cyA9IFtdO1xuXHQgICAgICB0cmlnZ2VycyA9IFtdO1xuXHQgICAgfSkucGF1c2UoKTtcblx0ICAgIHJldHVybiBmdW5jdGlvbiAoc2VsZikge1xuXHQgICAgICBlbGVtZW50cy5sZW5ndGggfHwgZGVsYXkucmVzdGFydCh0cnVlKTtcblx0ICAgICAgZWxlbWVudHMucHVzaChzZWxmLnRyaWdnZXIpO1xuXHQgICAgICB0cmlnZ2Vycy5wdXNoKHNlbGYpO1xuXHQgICAgICBiYXRjaE1heCA8PSBlbGVtZW50cy5sZW5ndGggJiYgZGVsYXkucHJvZ3Jlc3MoMSk7XG5cdCAgICB9O1xuXHQgIH0sXG5cdCAgICAgIHA7XG5cblx0ICBmb3IgKHAgaW4gdmFycykge1xuXHQgICAgdmFyc0NvcHlbcF0gPSBwLnN1YnN0cigwLCAyKSA9PT0gXCJvblwiICYmIF9pc0Z1bmN0aW9uKHZhcnNbcF0pICYmIHAgIT09IFwib25SZWZyZXNoSW5pdFwiID8gcHJveHlDYWxsYmFjayhwLCB2YXJzW3BdKSA6IHZhcnNbcF07XG5cdCAgfVxuXG5cdCAgaWYgKF9pc0Z1bmN0aW9uKGJhdGNoTWF4KSkge1xuXHQgICAgYmF0Y2hNYXggPSBiYXRjaE1heCgpO1xuXG5cdCAgICBfYWRkTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJyZWZyZXNoXCIsIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgcmV0dXJuIGJhdGNoTWF4ID0gdmFycy5iYXRjaE1heCgpO1xuXHQgICAgfSk7XG5cdCAgfVxuXG5cdCAgX3RvQXJyYXkodGFyZ2V0cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdCAgICB2YXIgY29uZmlnID0ge307XG5cblx0ICAgIGZvciAocCBpbiB2YXJzQ29weSkge1xuXHQgICAgICBjb25maWdbcF0gPSB2YXJzQ29weVtwXTtcblx0ICAgIH1cblxuXHQgICAgY29uZmlnLnRyaWdnZXIgPSB0YXJnZXQ7XG5cdCAgICByZXN1bHQucHVzaChTY3JvbGxUcmlnZ2VyLmNyZWF0ZShjb25maWcpKTtcblx0ICB9KTtcblxuXHQgIHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0U2Nyb2xsVHJpZ2dlci5zb3J0ID0gZnVuY3Rpb24gKGZ1bmMpIHtcblx0ICByZXR1cm4gX3RyaWdnZXJzLnNvcnQoZnVuYyB8fCBmdW5jdGlvbiAoYSwgYikge1xuXHQgICAgcmV0dXJuIChhLnZhcnMucmVmcmVzaFByaW9yaXR5IHx8IDApICogLTFlNiArIGEuc3RhcnQgLSAoYi5zdGFydCArIChiLnZhcnMucmVmcmVzaFByaW9yaXR5IHx8IDApICogLTFlNik7XG5cdCAgfSk7XG5cdH07XG5cblx0X2dldEdTQVAoKSAmJiBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5cdGV4cG9ydHMuU2Nyb2xsVHJpZ2dlciA9IFNjcm9sbFRyaWdnZXI7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IFNjcm9sbFRyaWdnZXI7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpKTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC53aW5kb3cgPSBnbG9iYWwud2luZG93IHx8IHt9KSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xuICB9XG5cbiAgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gICAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgLyohXG4gICAqIEdTQVAgMy41LjFcbiAgICogaHR0cHM6Ly9ncmVlbnNvY2suY29tXG4gICAqXG4gICAqIEBsaWNlbnNlIENvcHlyaWdodCAyMDA4LTIwMjAsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICogU3ViamVjdCB0byB0aGUgdGVybXMgYXQgaHR0cHM6Ly9ncmVlbnNvY2suY29tL3N0YW5kYXJkLWxpY2Vuc2Ugb3IgZm9yXG4gICAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBhZ3JlZW1lbnQgaXNzdWVkIHdpdGggdGhhdCBtZW1iZXJzaGlwLlxuICAgKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiAgKi9cbiAgdmFyIF9jb25maWcgPSB7XG4gICAgYXV0b1NsZWVwOiAxMjAsXG4gICAgZm9yY2UzRDogXCJhdXRvXCIsXG4gICAgbnVsbFRhcmdldFdhcm46IDEsXG4gICAgdW5pdHM6IHtcbiAgICAgIGxpbmVIZWlnaHQ6IFwiXCJcbiAgICB9XG4gIH0sXG4gICAgICBfZGVmYXVsdHMgPSB7XG4gICAgZHVyYXRpb246IC41LFxuICAgIG92ZXJ3cml0ZTogZmFsc2UsXG4gICAgZGVsYXk6IDBcbiAgfSxcbiAgICAgIF9iaWdOdW0gPSAxZTgsXG4gICAgICBfdGlueU51bSA9IDEgLyBfYmlnTnVtLFxuICAgICAgXzJQSSA9IE1hdGguUEkgKiAyLFxuICAgICAgX0hBTEZfUEkgPSBfMlBJIC8gNCxcbiAgICAgIF9nc0lEID0gMCxcbiAgICAgIF9zcXJ0ID0gTWF0aC5zcXJ0LFxuICAgICAgX2NvcyA9IE1hdGguY29zLFxuICAgICAgX3NpbiA9IE1hdGguc2luLFxuICAgICAgX2lzU3RyaW5nID0gZnVuY3Rpb24gX2lzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIjtcbiAgfSxcbiAgICAgIF9pc0Z1bmN0aW9uID0gZnVuY3Rpb24gX2lzRnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCI7XG4gIH0sXG4gICAgICBfaXNOdW1iZXIgPSBmdW5jdGlvbiBfaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiO1xuICB9LFxuICAgICAgX2lzVW5kZWZpbmVkID0gZnVuY3Rpb24gX2lzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIjtcbiAgfSxcbiAgICAgIF9pc09iamVjdCA9IGZ1bmN0aW9uIF9pc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XG4gIH0sXG4gICAgICBfaXNOb3RGYWxzZSA9IGZ1bmN0aW9uIF9pc05vdEZhbHNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBmYWxzZTtcbiAgfSxcbiAgICAgIF93aW5kb3dFeGlzdHMgPSBmdW5jdGlvbiBfd2luZG93RXhpc3RzKCkge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xuICB9LFxuICAgICAgX2lzRnVuY09yU3RyaW5nID0gZnVuY3Rpb24gX2lzRnVuY09yU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIF9pc0Z1bmN0aW9uKHZhbHVlKSB8fCBfaXNTdHJpbmcodmFsdWUpO1xuICB9LFxuICAgICAgX2lzVHlwZWRBcnJheSA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiICYmIEFycmF5QnVmZmVyLmlzVmlldyB8fCBmdW5jdGlvbiAoKSB7fSxcbiAgICAgIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheSxcbiAgICAgIF9zdHJpY3ROdW1FeHAgPSAvKD86LT9cXC4/XFxkfFxcLikrL2dpLFxuICAgICAgX251bUV4cCA9IC9bLSs9Ll0qXFxkK1suZVxcLStdKlxcZCpbZVxcLVxcK10qXFxkKi9nLFxuICAgICAgX251bVdpdGhVbml0RXhwID0gL1stKz0uXSpcXGQrWy5lLV0qXFxkKlthLXolXSovZyxcbiAgICAgIF9jb21wbGV4U3RyaW5nTnVtRXhwID0gL1stKz0uXSpcXGQrKD86XFwufGUtfGUpKlxcZCovZ2ksXG4gICAgICBfcmVsRXhwID0gL1srLV09LT9bXFwuXFxkXSsvLFxuICAgICAgX2RlbGltaXRlZFZhbHVlRXhwID0gL1sjXFwtKy5dKlxcYlthLXpcXGQtPSslLl0rL2dpLFxuICAgICAgX2dsb2JhbFRpbWVsaW5lLFxuICAgICAgX3dpbixcbiAgICAgIF9jb3JlSW5pdHRlZCxcbiAgICAgIF9kb2MsXG4gICAgICBfZ2xvYmFscyA9IHt9LFxuICAgICAgX2luc3RhbGxTY29wZSA9IHt9LFxuICAgICAgX2NvcmVSZWFkeSxcbiAgICAgIF9pbnN0YWxsID0gZnVuY3Rpb24gX2luc3RhbGwoc2NvcGUpIHtcbiAgICByZXR1cm4gKF9pbnN0YWxsU2NvcGUgPSBfbWVyZ2Uoc2NvcGUsIF9nbG9iYWxzKSkgJiYgZ3NhcDtcbiAgfSxcbiAgICAgIF9taXNzaW5nUGx1Z2luID0gZnVuY3Rpb24gX21pc3NpbmdQbHVnaW4ocHJvcGVydHksIHZhbHVlKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUud2FybihcIkludmFsaWQgcHJvcGVydHlcIiwgcHJvcGVydHksIFwic2V0IHRvXCIsIHZhbHVlLCBcIk1pc3NpbmcgcGx1Z2luPyBnc2FwLnJlZ2lzdGVyUGx1Z2luKClcIik7XG4gIH0sXG4gICAgICBfd2FybiA9IGZ1bmN0aW9uIF93YXJuKG1lc3NhZ2UsIHN1cHByZXNzKSB7XG4gICAgcmV0dXJuICFzdXBwcmVzcyAmJiBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gIH0sXG4gICAgICBfYWRkR2xvYmFsID0gZnVuY3Rpb24gX2FkZEdsb2JhbChuYW1lLCBvYmopIHtcbiAgICByZXR1cm4gbmFtZSAmJiAoX2dsb2JhbHNbbmFtZV0gPSBvYmopICYmIF9pbnN0YWxsU2NvcGUgJiYgKF9pbnN0YWxsU2NvcGVbbmFtZV0gPSBvYmopIHx8IF9nbG9iYWxzO1xuICB9LFxuICAgICAgX2VtcHR5RnVuYyA9IGZ1bmN0aW9uIF9lbXB0eUZ1bmMoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0sXG4gICAgICBfcmVzZXJ2ZWRQcm9wcyA9IHt9LFxuICAgICAgX2xhenlUd2VlbnMgPSBbXSxcbiAgICAgIF9sYXp5TG9va3VwID0ge30sXG4gICAgICBfbGFzdFJlbmRlcmVkRnJhbWUsXG4gICAgICBfcGx1Z2lucyA9IHt9LFxuICAgICAgX2VmZmVjdHMgPSB7fSxcbiAgICAgIF9uZXh0R0NGcmFtZSA9IDMwLFxuICAgICAgX2hhcm5lc3NQbHVnaW5zID0gW10sXG4gICAgICBfY2FsbGJhY2tOYW1lcyA9IFwiXCIsXG4gICAgICBfaGFybmVzcyA9IGZ1bmN0aW9uIF9oYXJuZXNzKHRhcmdldHMpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGFyZ2V0c1swXSxcbiAgICAgICAgaGFybmVzc1BsdWdpbixcbiAgICAgICAgaTtcbiAgICBfaXNPYmplY3QodGFyZ2V0KSB8fCBfaXNGdW5jdGlvbih0YXJnZXQpIHx8ICh0YXJnZXRzID0gW3RhcmdldHNdKTtcblxuICAgIGlmICghKGhhcm5lc3NQbHVnaW4gPSAodGFyZ2V0Ll9nc2FwIHx8IHt9KS5oYXJuZXNzKSkge1xuICAgICAgaSA9IF9oYXJuZXNzUGx1Z2lucy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0gJiYgIV9oYXJuZXNzUGx1Z2luc1tpXS50YXJnZXRUZXN0KHRhcmdldCkpIHt9XG5cbiAgICAgIGhhcm5lc3NQbHVnaW4gPSBfaGFybmVzc1BsdWdpbnNbaV07XG4gICAgfVxuXG4gICAgaSA9IHRhcmdldHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGFyZ2V0c1tpXSAmJiAodGFyZ2V0c1tpXS5fZ3NhcCB8fCAodGFyZ2V0c1tpXS5fZ3NhcCA9IG5ldyBHU0NhY2hlKHRhcmdldHNbaV0sIGhhcm5lc3NQbHVnaW4pKSkgfHwgdGFyZ2V0cy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldHM7XG4gIH0sXG4gICAgICBfZ2V0Q2FjaGUgPSBmdW5jdGlvbiBfZ2V0Q2FjaGUodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldC5fZ3NhcCB8fCBfaGFybmVzcyh0b0FycmF5KHRhcmdldCkpWzBdLl9nc2FwO1xuICB9LFxuICAgICAgX2dldFByb3BlcnR5ID0gZnVuY3Rpb24gX2dldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHYpIHtcbiAgICByZXR1cm4gKHYgPSB0YXJnZXRbcHJvcGVydHldKSAmJiBfaXNGdW5jdGlvbih2KSA/IHRhcmdldFtwcm9wZXJ0eV0oKSA6IF9pc1VuZGVmaW5lZCh2KSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUocHJvcGVydHkpIHx8IHY7XG4gIH0sXG4gICAgICBfZm9yRWFjaE5hbWUgPSBmdW5jdGlvbiBfZm9yRWFjaE5hbWUobmFtZXMsIGZ1bmMpIHtcbiAgICByZXR1cm4gKG5hbWVzID0gbmFtZXMuc3BsaXQoXCIsXCIpKS5mb3JFYWNoKGZ1bmMpIHx8IG5hbWVzO1xuICB9LFxuICAgICAgX3JvdW5kID0gZnVuY3Rpb24gX3JvdW5kKHZhbHVlKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDAwMDApIC8gMTAwMDAwIHx8IDA7XG4gIH0sXG4gICAgICBfYXJyYXlDb250YWluc0FueSA9IGZ1bmN0aW9uIF9hcnJheUNvbnRhaW5zQW55KHRvU2VhcmNoLCB0b0ZpbmQpIHtcbiAgICB2YXIgbCA9IHRvRmluZC5sZW5ndGgsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgZm9yICg7IHRvU2VhcmNoLmluZGV4T2YodG9GaW5kW2ldKSA8IDAgJiYgKytpIDwgbDspIHt9XG5cbiAgICByZXR1cm4gaSA8IGw7XG4gIH0sXG4gICAgICBfcGFyc2VWYXJzID0gZnVuY3Rpb24gX3BhcnNlVmFycyhwYXJhbXMsIHR5cGUsIHBhcmVudCkge1xuICAgIHZhciBpc0xlZ2FjeSA9IF9pc051bWJlcihwYXJhbXNbMV0pLFxuICAgICAgICB2YXJzSW5kZXggPSAoaXNMZWdhY3kgPyAyIDogMSkgKyAodHlwZSA8IDIgPyAwIDogMSksXG4gICAgICAgIHZhcnMgPSBwYXJhbXNbdmFyc0luZGV4XSxcbiAgICAgICAgaXJWYXJzO1xuXG4gICAgaXNMZWdhY3kgJiYgKHZhcnMuZHVyYXRpb24gPSBwYXJhbXNbMV0pO1xuICAgIHZhcnMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIGlyVmFycyA9IHZhcnM7XG5cbiAgICAgIHdoaWxlIChwYXJlbnQgJiYgIShcImltbWVkaWF0ZVJlbmRlclwiIGluIGlyVmFycykpIHtcbiAgICAgICAgaXJWYXJzID0gcGFyZW50LnZhcnMuZGVmYXVsdHMgfHwge307XG4gICAgICAgIHBhcmVudCA9IF9pc05vdEZhbHNlKHBhcmVudC52YXJzLmluaGVyaXQpICYmIHBhcmVudC5wYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UoaXJWYXJzLmltbWVkaWF0ZVJlbmRlcik7XG4gICAgICB0eXBlIDwgMiA/IHZhcnMucnVuQmFja3dhcmRzID0gMSA6IHZhcnMuc3RhcnRBdCA9IHBhcmFtc1t2YXJzSW5kZXggLSAxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFycztcbiAgfSxcbiAgICAgIF9sYXp5UmVuZGVyID0gZnVuY3Rpb24gX2xhenlSZW5kZXIoKSB7XG4gICAgdmFyIGwgPSBfbGF6eVR3ZWVucy5sZW5ndGgsXG4gICAgICAgIGEgPSBfbGF6eVR3ZWVucy5zbGljZSgwKSxcbiAgICAgICAgaSxcbiAgICAgICAgdHdlZW47XG5cbiAgICBfbGF6eUxvb2t1cCA9IHt9O1xuICAgIF9sYXp5VHdlZW5zLmxlbmd0aCA9IDA7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0d2VlbiA9IGFbaV07XG4gICAgICB0d2VlbiAmJiB0d2Vlbi5fbGF6eSAmJiAodHdlZW4ucmVuZGVyKHR3ZWVuLl9sYXp5WzBdLCB0d2Vlbi5fbGF6eVsxXSwgdHJ1ZSkuX2xhenkgPSAwKTtcbiAgICB9XG4gIH0sXG4gICAgICBfbGF6eVNhZmVSZW5kZXIgPSBmdW5jdGlvbiBfbGF6eVNhZmVSZW5kZXIoYW5pbWF0aW9uLCB0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcbiAgICBfbGF6eVR3ZWVucy5sZW5ndGggJiYgX2xhenlSZW5kZXIoKTtcbiAgICBhbmltYXRpb24ucmVuZGVyKHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgX2xhenlUd2VlbnMubGVuZ3RoICYmIF9sYXp5UmVuZGVyKCk7XG4gIH0sXG4gICAgICBfbnVtZXJpY0lmUG9zc2libGUgPSBmdW5jdGlvbiBfbnVtZXJpY0lmUG9zc2libGUodmFsdWUpIHtcbiAgICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIHJldHVybiAobiB8fCBuID09PSAwKSAmJiAodmFsdWUgKyBcIlwiKS5tYXRjaChfZGVsaW1pdGVkVmFsdWVFeHApLmxlbmd0aCA8IDIgPyBuIDogX2lzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnRyaW0oKSA6IHZhbHVlO1xuICB9LFxuICAgICAgX3Bhc3NUaHJvdWdoID0gZnVuY3Rpb24gX3Bhc3NUaHJvdWdoKHApIHtcbiAgICByZXR1cm4gcDtcbiAgfSxcbiAgICAgIF9zZXREZWZhdWx0cyA9IGZ1bmN0aW9uIF9zZXREZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBkZWZhdWx0cykge1xuICAgICAgcCBpbiBvYmogfHwgKG9ialtwXSA9IGRlZmF1bHRzW3BdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuICAgICAgX3NldEtleWZyYW1lRGVmYXVsdHMgPSBmdW5jdGlvbiBfc2V0S2V5ZnJhbWVEZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBkZWZhdWx0cykge1xuICAgICAgcCBpbiBvYmogfHwgcCA9PT0gXCJkdXJhdGlvblwiIHx8IHAgPT09IFwiZWFzZVwiIHx8IChvYmpbcF0gPSBkZWZhdWx0c1twXSk7XG4gICAgfVxuICB9LFxuICAgICAgX21lcmdlID0gZnVuY3Rpb24gX21lcmdlKGJhc2UsIHRvTWVyZ2UpIHtcbiAgICBmb3IgKHZhciBwIGluIHRvTWVyZ2UpIHtcbiAgICAgIGJhc2VbcF0gPSB0b01lcmdlW3BdO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlO1xuICB9LFxuICAgICAgX21lcmdlRGVlcCA9IGZ1bmN0aW9uIF9tZXJnZURlZXAoYmFzZSwgdG9NZXJnZSkge1xuICAgIGZvciAodmFyIHAgaW4gdG9NZXJnZSkge1xuICAgICAgYmFzZVtwXSA9IF9pc09iamVjdCh0b01lcmdlW3BdKSA/IF9tZXJnZURlZXAoYmFzZVtwXSB8fCAoYmFzZVtwXSA9IHt9KSwgdG9NZXJnZVtwXSkgOiB0b01lcmdlW3BdO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlO1xuICB9LFxuICAgICAgX2NvcHlFeGNsdWRpbmcgPSBmdW5jdGlvbiBfY29weUV4Y2x1ZGluZyhvYmosIGV4Y2x1ZGluZykge1xuICAgIHZhciBjb3B5ID0ge30sXG4gICAgICAgIHA7XG5cbiAgICBmb3IgKHAgaW4gb2JqKSB7XG4gICAgICBwIGluIGV4Y2x1ZGluZyB8fCAoY29weVtwXSA9IG9ialtwXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvcHk7XG4gIH0sXG4gICAgICBfaW5oZXJpdERlZmF1bHRzID0gZnVuY3Rpb24gX2luaGVyaXREZWZhdWx0cyh2YXJzKSB7XG4gICAgdmFyIHBhcmVudCA9IHZhcnMucGFyZW50IHx8IF9nbG9iYWxUaW1lbGluZSxcbiAgICAgICAgZnVuYyA9IHZhcnMua2V5ZnJhbWVzID8gX3NldEtleWZyYW1lRGVmYXVsdHMgOiBfc2V0RGVmYXVsdHM7XG5cbiAgICBpZiAoX2lzTm90RmFsc2UodmFycy5pbmhlcml0KSkge1xuICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICBmdW5jKHZhcnMsIHBhcmVudC52YXJzLmRlZmF1bHRzKTtcbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudCB8fCBwYXJlbnQuX2RwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YXJzO1xuICB9LFxuICAgICAgX2FycmF5c01hdGNoID0gZnVuY3Rpb24gX2FycmF5c01hdGNoKGExLCBhMikge1xuICAgIHZhciBpID0gYTEubGVuZ3RoLFxuICAgICAgICBtYXRjaCA9IGkgPT09IGEyLmxlbmd0aDtcblxuICAgIHdoaWxlIChtYXRjaCAmJiBpLS0gJiYgYTFbaV0gPT09IGEyW2ldKSB7fVxuXG4gICAgcmV0dXJuIGkgPCAwO1xuICB9LFxuICAgICAgX2FkZExpbmtlZExpc3RJdGVtID0gZnVuY3Rpb24gX2FkZExpbmtlZExpc3RJdGVtKHBhcmVudCwgY2hpbGQsIGZpcnN0UHJvcCwgbGFzdFByb3AsIHNvcnRCeSkge1xuICAgIGlmIChmaXJzdFByb3AgPT09IHZvaWQgMCkge1xuICAgICAgZmlyc3RQcm9wID0gXCJfZmlyc3RcIjtcbiAgICB9XG5cbiAgICBpZiAobGFzdFByb3AgPT09IHZvaWQgMCkge1xuICAgICAgbGFzdFByb3AgPSBcIl9sYXN0XCI7XG4gICAgfVxuXG4gICAgdmFyIHByZXYgPSBwYXJlbnRbbGFzdFByb3BdLFxuICAgICAgICB0O1xuXG4gICAgaWYgKHNvcnRCeSkge1xuICAgICAgdCA9IGNoaWxkW3NvcnRCeV07XG5cbiAgICAgIHdoaWxlIChwcmV2ICYmIHByZXZbc29ydEJ5XSA+IHQpIHtcbiAgICAgICAgcHJldiA9IHByZXYuX3ByZXY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByZXYpIHtcbiAgICAgIGNoaWxkLl9uZXh0ID0gcHJldi5fbmV4dDtcbiAgICAgIHByZXYuX25leHQgPSBjaGlsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGQuX25leHQgPSBwYXJlbnRbZmlyc3RQcm9wXTtcbiAgICAgIHBhcmVudFtmaXJzdFByb3BdID0gY2hpbGQ7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkLl9uZXh0KSB7XG4gICAgICBjaGlsZC5fbmV4dC5fcHJldiA9IGNoaWxkO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnRbbGFzdFByb3BdID0gY2hpbGQ7XG4gICAgfVxuXG4gICAgY2hpbGQuX3ByZXYgPSBwcmV2O1xuICAgIGNoaWxkLnBhcmVudCA9IGNoaWxkLl9kcCA9IHBhcmVudDtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0sXG4gICAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0gPSBmdW5jdGlvbiBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0ocGFyZW50LCBjaGlsZCwgZmlyc3RQcm9wLCBsYXN0UHJvcCkge1xuICAgIGlmIChmaXJzdFByb3AgPT09IHZvaWQgMCkge1xuICAgICAgZmlyc3RQcm9wID0gXCJfZmlyc3RcIjtcbiAgICB9XG5cbiAgICBpZiAobGFzdFByb3AgPT09IHZvaWQgMCkge1xuICAgICAgbGFzdFByb3AgPSBcIl9sYXN0XCI7XG4gICAgfVxuXG4gICAgdmFyIHByZXYgPSBjaGlsZC5fcHJldixcbiAgICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuXG4gICAgaWYgKHByZXYpIHtcbiAgICAgIHByZXYuX25leHQgPSBuZXh0O1xuICAgIH0gZWxzZSBpZiAocGFyZW50W2ZpcnN0UHJvcF0gPT09IGNoaWxkKSB7XG4gICAgICBwYXJlbnRbZmlyc3RQcm9wXSA9IG5leHQ7XG4gICAgfVxuXG4gICAgaWYgKG5leHQpIHtcbiAgICAgIG5leHQuX3ByZXYgPSBwcmV2O1xuICAgIH0gZWxzZSBpZiAocGFyZW50W2xhc3RQcm9wXSA9PT0gY2hpbGQpIHtcbiAgICAgIHBhcmVudFtsYXN0UHJvcF0gPSBwcmV2O1xuICAgIH1cblxuICAgIGNoaWxkLl9uZXh0ID0gY2hpbGQuX3ByZXYgPSBjaGlsZC5wYXJlbnQgPSBudWxsO1xuICB9LFxuICAgICAgX3JlbW92ZUZyb21QYXJlbnQgPSBmdW5jdGlvbiBfcmVtb3ZlRnJvbVBhcmVudChjaGlsZCwgb25seUlmUGFyZW50SGFzQXV0b1JlbW92ZSkge1xuICAgIGNoaWxkLnBhcmVudCAmJiAoIW9ubHlJZlBhcmVudEhhc0F1dG9SZW1vdmUgfHwgY2hpbGQucGFyZW50LmF1dG9SZW1vdmVDaGlsZHJlbikgJiYgY2hpbGQucGFyZW50LnJlbW92ZShjaGlsZCk7XG4gICAgY2hpbGQuX2FjdCA9IDA7XG4gIH0sXG4gICAgICBfdW5jYWNoZSA9IGZ1bmN0aW9uIF91bmNhY2hlKGFuaW1hdGlvbiwgY2hpbGQpIHtcbiAgICBpZiAoYW5pbWF0aW9uICYmICghY2hpbGQgfHwgY2hpbGQuX2VuZCA+IGFuaW1hdGlvbi5fZHVyIHx8IGNoaWxkLl9zdGFydCA8IDApKSB7XG4gICAgICB2YXIgYSA9IGFuaW1hdGlvbjtcblxuICAgICAgd2hpbGUgKGEpIHtcbiAgICAgICAgYS5fZGlydHkgPSAxO1xuICAgICAgICBhID0gYS5wYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFuaW1hdGlvbjtcbiAgfSxcbiAgICAgIF9yZWNhY2hlQW5jZXN0b3JzID0gZnVuY3Rpb24gX3JlY2FjaGVBbmNlc3RvcnMoYW5pbWF0aW9uKSB7XG4gICAgdmFyIHBhcmVudCA9IGFuaW1hdGlvbi5wYXJlbnQ7XG5cbiAgICB3aGlsZSAocGFyZW50ICYmIHBhcmVudC5wYXJlbnQpIHtcbiAgICAgIHBhcmVudC5fZGlydHkgPSAxO1xuICAgICAgcGFyZW50LnRvdGFsRHVyYXRpb24oKTtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFuaW1hdGlvbjtcbiAgfSxcbiAgICAgIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyA9IGZ1bmN0aW9uIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyhhbmltYXRpb24pIHtcbiAgICByZXR1cm4gIWFuaW1hdGlvbiB8fCBhbmltYXRpb24uX3RzICYmIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyhhbmltYXRpb24ucGFyZW50KTtcbiAgfSxcbiAgICAgIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbiA9IGZ1bmN0aW9uIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbihhbmltYXRpb24pIHtcbiAgICByZXR1cm4gYW5pbWF0aW9uLl9yZXBlYXQgPyBfYW5pbWF0aW9uQ3ljbGUoYW5pbWF0aW9uLl90VGltZSwgYW5pbWF0aW9uID0gYW5pbWF0aW9uLmR1cmF0aW9uKCkgKyBhbmltYXRpb24uX3JEZWxheSkgKiBhbmltYXRpb24gOiAwO1xuICB9LFxuICAgICAgX2FuaW1hdGlvbkN5Y2xlID0gZnVuY3Rpb24gX2FuaW1hdGlvbkN5Y2xlKHRUaW1lLCBjeWNsZUR1cmF0aW9uKSB7XG4gICAgcmV0dXJuICh0VGltZSAvPSBjeWNsZUR1cmF0aW9uKSAmJiB+fnRUaW1lID09PSB0VGltZSA/IH5+dFRpbWUgLSAxIDogfn50VGltZTtcbiAgfSxcbiAgICAgIF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lID0gZnVuY3Rpb24gX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUocGFyZW50VGltZSwgY2hpbGQpIHtcbiAgICByZXR1cm4gKHBhcmVudFRpbWUgLSBjaGlsZC5fc3RhcnQpICogY2hpbGQuX3RzICsgKGNoaWxkLl90cyA+PSAwID8gMCA6IGNoaWxkLl9kaXJ0eSA/IGNoaWxkLnRvdGFsRHVyYXRpb24oKSA6IGNoaWxkLl90RHVyKTtcbiAgfSxcbiAgICAgIF9zZXRFbmQgPSBmdW5jdGlvbiBfc2V0RW5kKGFuaW1hdGlvbikge1xuICAgIHJldHVybiBhbmltYXRpb24uX2VuZCA9IF9yb3VuZChhbmltYXRpb24uX3N0YXJ0ICsgKGFuaW1hdGlvbi5fdER1ciAvIE1hdGguYWJzKGFuaW1hdGlvbi5fdHMgfHwgYW5pbWF0aW9uLl9ydHMgfHwgX3RpbnlOdW0pIHx8IDApKTtcbiAgfSxcbiAgICAgIF9hbGlnblBsYXloZWFkID0gZnVuY3Rpb24gX2FsaWduUGxheWhlYWQoYW5pbWF0aW9uLCB0b3RhbFRpbWUpIHtcbiAgICB2YXIgcGFyZW50ID0gYW5pbWF0aW9uLl9kcDtcblxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LnNtb290aENoaWxkVGltaW5nICYmIGFuaW1hdGlvbi5fdHMpIHtcbiAgICAgIGFuaW1hdGlvbi5fc3RhcnQgPSBfcm91bmQoYW5pbWF0aW9uLl9kcC5fdGltZSAtIChhbmltYXRpb24uX3RzID4gMCA/IHRvdGFsVGltZSAvIGFuaW1hdGlvbi5fdHMgOiAoKGFuaW1hdGlvbi5fZGlydHkgPyBhbmltYXRpb24udG90YWxEdXJhdGlvbigpIDogYW5pbWF0aW9uLl90RHVyKSAtIHRvdGFsVGltZSkgLyAtYW5pbWF0aW9uLl90cykpO1xuXG4gICAgICBfc2V0RW5kKGFuaW1hdGlvbik7XG5cbiAgICAgIHBhcmVudC5fZGlydHkgfHwgX3VuY2FjaGUocGFyZW50LCBhbmltYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBhbmltYXRpb247XG4gIH0sXG4gICAgICBfcG9zdEFkZENoZWNrcyA9IGZ1bmN0aW9uIF9wb3N0QWRkQ2hlY2tzKHRpbWVsaW5lLCBjaGlsZCkge1xuICAgIHZhciB0O1xuXG4gICAgaWYgKGNoaWxkLl90aW1lIHx8IGNoaWxkLl9pbml0dGVkICYmICFjaGlsZC5fZHVyKSB7XG4gICAgICB0ID0gX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUodGltZWxpbmUucmF3VGltZSgpLCBjaGlsZCk7XG5cbiAgICAgIGlmICghY2hpbGQuX2R1ciB8fCBfY2xhbXAoMCwgY2hpbGQudG90YWxEdXJhdGlvbigpLCB0KSAtIGNoaWxkLl90VGltZSA+IF90aW55TnVtKSB7XG4gICAgICAgIGNoaWxkLnJlbmRlcih0LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoX3VuY2FjaGUodGltZWxpbmUsIGNoaWxkKS5fZHAgJiYgdGltZWxpbmUuX2luaXR0ZWQgJiYgdGltZWxpbmUuX3RpbWUgPj0gdGltZWxpbmUuX2R1ciAmJiB0aW1lbGluZS5fdHMpIHtcbiAgICAgIGlmICh0aW1lbGluZS5fZHVyIDwgdGltZWxpbmUuZHVyYXRpb24oKSkge1xuICAgICAgICB0ID0gdGltZWxpbmU7XG5cbiAgICAgICAgd2hpbGUgKHQuX2RwKSB7XG4gICAgICAgICAgdC5yYXdUaW1lKCkgPj0gMCAmJiB0LnRvdGFsVGltZSh0Ll90VGltZSk7XG4gICAgICAgICAgdCA9IHQuX2RwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRpbWVsaW5lLl96VGltZSA9IC1fdGlueU51bTtcbiAgICB9XG4gIH0sXG4gICAgICBfYWRkVG9UaW1lbGluZSA9IGZ1bmN0aW9uIF9hZGRUb1RpbWVsaW5lKHRpbWVsaW5lLCBjaGlsZCwgcG9zaXRpb24sIHNraXBDaGVja3MpIHtcbiAgICBjaGlsZC5wYXJlbnQgJiYgX3JlbW92ZUZyb21QYXJlbnQoY2hpbGQpO1xuICAgIGNoaWxkLl9zdGFydCA9IF9yb3VuZChwb3NpdGlvbiArIGNoaWxkLl9kZWxheSk7XG4gICAgY2hpbGQuX2VuZCA9IF9yb3VuZChjaGlsZC5fc3RhcnQgKyAoY2hpbGQudG90YWxEdXJhdGlvbigpIC8gTWF0aC5hYnMoY2hpbGQudGltZVNjYWxlKCkpIHx8IDApKTtcblxuICAgIF9hZGRMaW5rZWRMaXN0SXRlbSh0aW1lbGluZSwgY2hpbGQsIFwiX2ZpcnN0XCIsIFwiX2xhc3RcIiwgdGltZWxpbmUuX3NvcnQgPyBcIl9zdGFydFwiIDogMCk7XG5cbiAgICB0aW1lbGluZS5fcmVjZW50ID0gY2hpbGQ7XG4gICAgc2tpcENoZWNrcyB8fCBfcG9zdEFkZENoZWNrcyh0aW1lbGluZSwgY2hpbGQpO1xuICAgIHJldHVybiB0aW1lbGluZTtcbiAgfSxcbiAgICAgIF9zY3JvbGxUcmlnZ2VyID0gZnVuY3Rpb24gX3Njcm9sbFRyaWdnZXIoYW5pbWF0aW9uLCB0cmlnZ2VyKSB7XG4gICAgcmV0dXJuIChfZ2xvYmFscy5TY3JvbGxUcmlnZ2VyIHx8IF9taXNzaW5nUGx1Z2luKFwic2Nyb2xsVHJpZ2dlclwiLCB0cmlnZ2VyKSkgJiYgX2dsb2JhbHMuU2Nyb2xsVHJpZ2dlci5jcmVhdGUodHJpZ2dlciwgYW5pbWF0aW9uKTtcbiAgfSxcbiAgICAgIF9hdHRlbXB0SW5pdFR3ZWVuID0gZnVuY3Rpb24gX2F0dGVtcHRJbml0VHdlZW4odHdlZW4sIHRvdGFsVGltZSwgZm9yY2UsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgX2luaXRUd2Vlbih0d2VlbiwgdG90YWxUaW1lKTtcblxuICAgIGlmICghdHdlZW4uX2luaXR0ZWQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIGlmICghZm9yY2UgJiYgdHdlZW4uX3B0ICYmICh0d2Vlbi5fZHVyICYmIHR3ZWVuLnZhcnMubGF6eSAhPT0gZmFsc2UgfHwgIXR3ZWVuLl9kdXIgJiYgdHdlZW4udmFycy5sYXp5KSAmJiBfbGFzdFJlbmRlcmVkRnJhbWUgIT09IF90aWNrZXIuZnJhbWUpIHtcbiAgICAgIF9sYXp5VHdlZW5zLnB1c2godHdlZW4pO1xuXG4gICAgICB0d2Vlbi5fbGF6eSA9IFt0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzXTtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfSxcbiAgICAgIF9yZW5kZXJaZXJvRHVyYXRpb25Ud2VlbiA9IGZ1bmN0aW9uIF9yZW5kZXJaZXJvRHVyYXRpb25Ud2Vlbih0d2VlbiwgdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcbiAgICB2YXIgcHJldlJhdGlvID0gdHdlZW4ucmF0aW8sXG4gICAgICAgIHJhdGlvID0gdG90YWxUaW1lIDwgMCB8fCAhdG90YWxUaW1lICYmIHByZXZSYXRpbyAmJiAhdHdlZW4uX3N0YXJ0ICYmIHR3ZWVuLl96VGltZSA+IF90aW55TnVtICYmICF0d2Vlbi5fZHAuX2xvY2sgfHwgKHR3ZWVuLl90cyA8IDAgfHwgdHdlZW4uX2RwLl90cyA8IDApICYmIHR3ZWVuLmRhdGEgIT09IFwiaXNGcm9tU3RhcnRcIiAmJiB0d2Vlbi5kYXRhICE9PSBcImlzU3RhcnRcIiA/IDAgOiAxLFxuICAgICAgICByZXBlYXREZWxheSA9IHR3ZWVuLl9yRGVsYXksXG4gICAgICAgIHRUaW1lID0gMCxcbiAgICAgICAgcHQsXG4gICAgICAgIGl0ZXJhdGlvbixcbiAgICAgICAgcHJldkl0ZXJhdGlvbjtcblxuICAgIGlmIChyZXBlYXREZWxheSAmJiB0d2Vlbi5fcmVwZWF0KSB7XG4gICAgICB0VGltZSA9IF9jbGFtcCgwLCB0d2Vlbi5fdER1ciwgdG90YWxUaW1lKTtcbiAgICAgIGl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0VGltZSwgcmVwZWF0RGVsYXkpO1xuICAgICAgcHJldkl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0d2Vlbi5fdFRpbWUsIHJlcGVhdERlbGF5KTtcblxuICAgICAgaWYgKGl0ZXJhdGlvbiAhPT0gcHJldkl0ZXJhdGlvbikge1xuICAgICAgICBwcmV2UmF0aW8gPSAxIC0gcmF0aW87XG4gICAgICAgIHR3ZWVuLnZhcnMucmVwZWF0UmVmcmVzaCAmJiB0d2Vlbi5faW5pdHRlZCAmJiB0d2Vlbi5pbnZhbGlkYXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJhdGlvICE9PSBwcmV2UmF0aW8gfHwgZm9yY2UgfHwgdHdlZW4uX3pUaW1lID09PSBfdGlueU51bSB8fCAhdG90YWxUaW1lICYmIHR3ZWVuLl96VGltZSkge1xuICAgICAgaWYgKCF0d2Vlbi5faW5pdHRlZCAmJiBfYXR0ZW1wdEluaXRUd2Vlbih0d2VlbiwgdG90YWxUaW1lLCBmb3JjZSwgc3VwcHJlc3NFdmVudHMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcHJldkl0ZXJhdGlvbiA9IHR3ZWVuLl96VGltZTtcbiAgICAgIHR3ZWVuLl96VGltZSA9IHRvdGFsVGltZSB8fCAoc3VwcHJlc3NFdmVudHMgPyBfdGlueU51bSA6IDApO1xuICAgICAgc3VwcHJlc3NFdmVudHMgfHwgKHN1cHByZXNzRXZlbnRzID0gdG90YWxUaW1lICYmICFwcmV2SXRlcmF0aW9uKTtcbiAgICAgIHR3ZWVuLnJhdGlvID0gcmF0aW87XG4gICAgICB0d2Vlbi5fZnJvbSAmJiAocmF0aW8gPSAxIC0gcmF0aW8pO1xuICAgICAgdHdlZW4uX3RpbWUgPSAwO1xuICAgICAgdHdlZW4uX3RUaW1lID0gdFRpbWU7XG4gICAgICBzdXBwcmVzc0V2ZW50cyB8fCBfY2FsbGJhY2sodHdlZW4sIFwib25TdGFydFwiKTtcbiAgICAgIHB0ID0gdHdlZW4uX3B0O1xuXG4gICAgICB3aGlsZSAocHQpIHtcbiAgICAgICAgcHQucihyYXRpbywgcHQuZCk7XG4gICAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgICB9XG5cbiAgICAgIHR3ZWVuLl9zdGFydEF0ICYmIHRvdGFsVGltZSA8IDAgJiYgdHdlZW4uX3N0YXJ0QXQucmVuZGVyKHRvdGFsVGltZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICB0d2Vlbi5fb25VcGRhdGUgJiYgIXN1cHByZXNzRXZlbnRzICYmIF9jYWxsYmFjayh0d2VlbiwgXCJvblVwZGF0ZVwiKTtcbiAgICAgIHRUaW1lICYmIHR3ZWVuLl9yZXBlYXQgJiYgIXN1cHByZXNzRXZlbnRzICYmIHR3ZWVuLnBhcmVudCAmJiBfY2FsbGJhY2sodHdlZW4sIFwib25SZXBlYXRcIik7XG5cbiAgICAgIGlmICgodG90YWxUaW1lID49IHR3ZWVuLl90RHVyIHx8IHRvdGFsVGltZSA8IDApICYmIHR3ZWVuLnJhdGlvID09PSByYXRpbykge1xuICAgICAgICByYXRpbyAmJiBfcmVtb3ZlRnJvbVBhcmVudCh0d2VlbiwgMSk7XG5cbiAgICAgICAgaWYgKCFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICAgIF9jYWxsYmFjayh0d2VlbiwgcmF0aW8gPyBcIm9uQ29tcGxldGVcIiA6IFwib25SZXZlcnNlQ29tcGxldGVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICB0d2Vlbi5fcHJvbSAmJiB0d2Vlbi5fcHJvbSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghdHdlZW4uX3pUaW1lKSB7XG4gICAgICB0d2Vlbi5felRpbWUgPSB0b3RhbFRpbWU7XG4gICAgfVxuICB9LFxuICAgICAgX2ZpbmROZXh0UGF1c2VUd2VlbiA9IGZ1bmN0aW9uIF9maW5kTmV4dFBhdXNlVHdlZW4oYW5pbWF0aW9uLCBwcmV2VGltZSwgdGltZSkge1xuICAgIHZhciBjaGlsZDtcblxuICAgIGlmICh0aW1lID4gcHJldlRpbWUpIHtcbiAgICAgIGNoaWxkID0gYW5pbWF0aW9uLl9maXJzdDtcblxuICAgICAgd2hpbGUgKGNoaWxkICYmIGNoaWxkLl9zdGFydCA8PSB0aW1lKSB7XG4gICAgICAgIGlmICghY2hpbGQuX2R1ciAmJiBjaGlsZC5kYXRhID09PSBcImlzUGF1c2VcIiAmJiBjaGlsZC5fc3RhcnQgPiBwcmV2VGltZSkge1xuICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkID0gYW5pbWF0aW9uLl9sYXN0O1xuXG4gICAgICB3aGlsZSAoY2hpbGQgJiYgY2hpbGQuX3N0YXJ0ID49IHRpbWUpIHtcbiAgICAgICAgaWYgKCFjaGlsZC5fZHVyICYmIGNoaWxkLmRhdGEgPT09IFwiaXNQYXVzZVwiICYmIGNoaWxkLl9zdGFydCA8IHByZXZUaW1lKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQgPSBjaGlsZC5fcHJldjtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gICAgICBfc2V0RHVyYXRpb24gPSBmdW5jdGlvbiBfc2V0RHVyYXRpb24oYW5pbWF0aW9uLCBkdXJhdGlvbiwgc2tpcFVuY2FjaGUsIGxlYXZlUGxheWhlYWQpIHtcbiAgICB2YXIgcmVwZWF0ID0gYW5pbWF0aW9uLl9yZXBlYXQsXG4gICAgICAgIGR1ciA9IF9yb3VuZChkdXJhdGlvbikgfHwgMCxcbiAgICAgICAgdG90YWxQcm9ncmVzcyA9IGFuaW1hdGlvbi5fdFRpbWUgLyBhbmltYXRpb24uX3REdXI7XG4gICAgdG90YWxQcm9ncmVzcyAmJiAhbGVhdmVQbGF5aGVhZCAmJiAoYW5pbWF0aW9uLl90aW1lICo9IGR1ciAvIGFuaW1hdGlvbi5fZHVyKTtcbiAgICBhbmltYXRpb24uX2R1ciA9IGR1cjtcbiAgICBhbmltYXRpb24uX3REdXIgPSAhcmVwZWF0ID8gZHVyIDogcmVwZWF0IDwgMCA/IDFlMTAgOiBfcm91bmQoZHVyICogKHJlcGVhdCArIDEpICsgYW5pbWF0aW9uLl9yRGVsYXkgKiByZXBlYXQpO1xuICAgIHRvdGFsUHJvZ3Jlc3MgJiYgIWxlYXZlUGxheWhlYWQgPyBfYWxpZ25QbGF5aGVhZChhbmltYXRpb24sIGFuaW1hdGlvbi5fdFRpbWUgPSBhbmltYXRpb24uX3REdXIgKiB0b3RhbFByb2dyZXNzKSA6IGFuaW1hdGlvbi5wYXJlbnQgJiYgX3NldEVuZChhbmltYXRpb24pO1xuICAgIHNraXBVbmNhY2hlIHx8IF91bmNhY2hlKGFuaW1hdGlvbi5wYXJlbnQsIGFuaW1hdGlvbik7XG4gICAgcmV0dXJuIGFuaW1hdGlvbjtcbiAgfSxcbiAgICAgIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbiBfb25VcGRhdGVUb3RhbER1cmF0aW9uKGFuaW1hdGlvbikge1xuICAgIHJldHVybiBhbmltYXRpb24gaW5zdGFuY2VvZiBUaW1lbGluZSA/IF91bmNhY2hlKGFuaW1hdGlvbikgOiBfc2V0RHVyYXRpb24oYW5pbWF0aW9uLCBhbmltYXRpb24uX2R1cik7XG4gIH0sXG4gICAgICBfemVyb1Bvc2l0aW9uID0ge1xuICAgIF9zdGFydDogMCxcbiAgICBlbmRUaW1lOiBfZW1wdHlGdW5jXG4gIH0sXG4gICAgICBfcGFyc2VQb3NpdGlvbiA9IGZ1bmN0aW9uIF9wYXJzZVBvc2l0aW9uKGFuaW1hdGlvbiwgcG9zaXRpb24pIHtcbiAgICB2YXIgbGFiZWxzID0gYW5pbWF0aW9uLmxhYmVscyxcbiAgICAgICAgcmVjZW50ID0gYW5pbWF0aW9uLl9yZWNlbnQgfHwgX3plcm9Qb3NpdGlvbixcbiAgICAgICAgY2xpcHBlZER1cmF0aW9uID0gYW5pbWF0aW9uLmR1cmF0aW9uKCkgPj0gX2JpZ051bSA/IHJlY2VudC5lbmRUaW1lKGZhbHNlKSA6IGFuaW1hdGlvbi5fZHVyLFxuICAgICAgICBpLFxuICAgICAgICBvZmZzZXQ7XG5cbiAgICBpZiAoX2lzU3RyaW5nKHBvc2l0aW9uKSAmJiAoaXNOYU4ocG9zaXRpb24pIHx8IHBvc2l0aW9uIGluIGxhYmVscykpIHtcbiAgICAgIGkgPSBwb3NpdGlvbi5jaGFyQXQoMCk7XG5cbiAgICAgIGlmIChpID09PSBcIjxcIiB8fCBpID09PSBcIj5cIikge1xuICAgICAgICByZXR1cm4gKGkgPT09IFwiPFwiID8gcmVjZW50Ll9zdGFydCA6IHJlY2VudC5lbmRUaW1lKHJlY2VudC5fcmVwZWF0ID49IDApKSArIChwYXJzZUZsb2F0KHBvc2l0aW9uLnN1YnN0cigxKSkgfHwgMCk7XG4gICAgICB9XG5cbiAgICAgIGkgPSBwb3NpdGlvbi5pbmRleE9mKFwiPVwiKTtcblxuICAgICAgaWYgKGkgPCAwKSB7XG4gICAgICAgIHBvc2l0aW9uIGluIGxhYmVscyB8fCAobGFiZWxzW3Bvc2l0aW9uXSA9IGNsaXBwZWREdXJhdGlvbik7XG4gICAgICAgIHJldHVybiBsYWJlbHNbcG9zaXRpb25dO1xuICAgICAgfVxuXG4gICAgICBvZmZzZXQgPSArKHBvc2l0aW9uLmNoYXJBdChpIC0gMSkgKyBwb3NpdGlvbi5zdWJzdHIoaSArIDEpKTtcbiAgICAgIHJldHVybiBpID4gMSA/IF9wYXJzZVBvc2l0aW9uKGFuaW1hdGlvbiwgcG9zaXRpb24uc3Vic3RyKDAsIGkgLSAxKSkgKyBvZmZzZXQgOiBjbGlwcGVkRHVyYXRpb24gKyBvZmZzZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uID09IG51bGwgPyBjbGlwcGVkRHVyYXRpb24gOiArcG9zaXRpb247XG4gIH0sXG4gICAgICBfY29uZGl0aW9uYWxSZXR1cm4gPSBmdW5jdGlvbiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmMpIHtcbiAgICByZXR1cm4gdmFsdWUgfHwgdmFsdWUgPT09IDAgPyBmdW5jKHZhbHVlKSA6IGZ1bmM7XG4gIH0sXG4gICAgICBfY2xhbXAgPSBmdW5jdGlvbiBfY2xhbXAobWluLCBtYXgsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIDwgbWluID8gbWluIDogdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZTtcbiAgfSxcbiAgICAgIGdldFVuaXQgPSBmdW5jdGlvbiBnZXRVbml0KHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSA9ICh2YWx1ZSArIFwiXCIpLnN1YnN0cigocGFyc2VGbG9hdCh2YWx1ZSkgKyBcIlwiKS5sZW5ndGgpKSAmJiBpc05hTih2YWx1ZSkgPyB2YWx1ZSA6IFwiXCI7XG4gIH0sXG4gICAgICBjbGFtcCA9IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWx1ZSkge1xuICAgIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gX2NsYW1wKG1pbiwgbWF4LCB2KTtcbiAgICB9KTtcbiAgfSxcbiAgICAgIF9zbGljZSA9IFtdLnNsaWNlLFxuICAgICAgX2lzQXJyYXlMaWtlID0gZnVuY3Rpb24gX2lzQXJyYXlMaWtlKHZhbHVlLCBub25FbXB0eSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiBfaXNPYmplY3QodmFsdWUpICYmIFwibGVuZ3RoXCIgaW4gdmFsdWUgJiYgKCFub25FbXB0eSAmJiAhdmFsdWUubGVuZ3RoIHx8IHZhbHVlLmxlbmd0aCAtIDEgaW4gdmFsdWUgJiYgX2lzT2JqZWN0KHZhbHVlWzBdKSkgJiYgIXZhbHVlLm5vZGVUeXBlICYmIHZhbHVlICE9PSBfd2luO1xuICB9LFxuICAgICAgX2ZsYXR0ZW4gPSBmdW5jdGlvbiBfZmxhdHRlbihhciwgbGVhdmVTdHJpbmdzLCBhY2N1bXVsYXRvcikge1xuICAgIGlmIChhY2N1bXVsYXRvciA9PT0gdm9pZCAwKSB7XG4gICAgICBhY2N1bXVsYXRvciA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBhci5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIF9hY2N1bXVsYXRvcjtcblxuICAgICAgcmV0dXJuIF9pc1N0cmluZyh2YWx1ZSkgJiYgIWxlYXZlU3RyaW5ncyB8fCBfaXNBcnJheUxpa2UodmFsdWUsIDEpID8gKF9hY2N1bXVsYXRvciA9IGFjY3VtdWxhdG9yKS5wdXNoLmFwcGx5KF9hY2N1bXVsYXRvciwgdG9BcnJheSh2YWx1ZSkpIDogYWNjdW11bGF0b3IucHVzaCh2YWx1ZSk7XG4gICAgfSkgfHwgYWNjdW11bGF0b3I7XG4gIH0sXG4gICAgICB0b0FycmF5ID0gZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSwgbGVhdmVTdHJpbmdzKSB7XG4gICAgcmV0dXJuIF9pc1N0cmluZyh2YWx1ZSkgJiYgIWxlYXZlU3RyaW5ncyAmJiAoX2NvcmVJbml0dGVkIHx8ICFfd2FrZSgpKSA/IF9zbGljZS5jYWxsKF9kb2MucXVlcnlTZWxlY3RvckFsbCh2YWx1ZSksIDApIDogX2lzQXJyYXkodmFsdWUpID8gX2ZsYXR0ZW4odmFsdWUsIGxlYXZlU3RyaW5ncykgOiBfaXNBcnJheUxpa2UodmFsdWUpID8gX3NsaWNlLmNhbGwodmFsdWUsIDApIDogdmFsdWUgPyBbdmFsdWVdIDogW107XG4gIH0sXG4gICAgICBzaHVmZmxlID0gZnVuY3Rpb24gc2h1ZmZsZShhKSB7XG4gICAgcmV0dXJuIGEuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gLjUgLSBNYXRoLnJhbmRvbSgpO1xuICAgIH0pO1xuICB9LFxuICAgICAgZGlzdHJpYnV0ZSA9IGZ1bmN0aW9uIGRpc3RyaWJ1dGUodikge1xuICAgIGlmIChfaXNGdW5jdGlvbih2KSkge1xuICAgICAgcmV0dXJuIHY7XG4gICAgfVxuXG4gICAgdmFyIHZhcnMgPSBfaXNPYmplY3QodikgPyB2IDoge1xuICAgICAgZWFjaDogdlxuICAgIH0sXG4gICAgICAgIGVhc2UgPSBfcGFyc2VFYXNlKHZhcnMuZWFzZSksXG4gICAgICAgIGZyb20gPSB2YXJzLmZyb20gfHwgMCxcbiAgICAgICAgYmFzZSA9IHBhcnNlRmxvYXQodmFycy5iYXNlKSB8fCAwLFxuICAgICAgICBjYWNoZSA9IHt9LFxuICAgICAgICBpc0RlY2ltYWwgPSBmcm9tID4gMCAmJiBmcm9tIDwgMSxcbiAgICAgICAgcmF0aW9zID0gaXNOYU4oZnJvbSkgfHwgaXNEZWNpbWFsLFxuICAgICAgICBheGlzID0gdmFycy5heGlzLFxuICAgICAgICByYXRpb1ggPSBmcm9tLFxuICAgICAgICByYXRpb1kgPSBmcm9tO1xuXG4gICAgaWYgKF9pc1N0cmluZyhmcm9tKSkge1xuICAgICAgcmF0aW9YID0gcmF0aW9ZID0ge1xuICAgICAgICBjZW50ZXI6IC41LFxuICAgICAgICBlZGdlczogLjUsXG4gICAgICAgIGVuZDogMVxuICAgICAgfVtmcm9tXSB8fCAwO1xuICAgIH0gZWxzZSBpZiAoIWlzRGVjaW1hbCAmJiByYXRpb3MpIHtcbiAgICAgIHJhdGlvWCA9IGZyb21bMF07XG4gICAgICByYXRpb1kgPSBmcm9tWzFdO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoaSwgdGFyZ2V0LCBhKSB7XG4gICAgICB2YXIgbCA9IChhIHx8IHZhcnMpLmxlbmd0aCxcbiAgICAgICAgICBkaXN0YW5jZXMgPSBjYWNoZVtsXSxcbiAgICAgICAgICBvcmlnaW5YLFxuICAgICAgICAgIG9yaWdpblksXG4gICAgICAgICAgeCxcbiAgICAgICAgICB5LFxuICAgICAgICAgIGQsXG4gICAgICAgICAgaixcbiAgICAgICAgICBtYXgsXG4gICAgICAgICAgbWluLFxuICAgICAgICAgIHdyYXBBdDtcblxuICAgICAgaWYgKCFkaXN0YW5jZXMpIHtcbiAgICAgICAgd3JhcEF0ID0gdmFycy5ncmlkID09PSBcImF1dG9cIiA/IDAgOiAodmFycy5ncmlkIHx8IFsxLCBfYmlnTnVtXSlbMV07XG5cbiAgICAgICAgaWYgKCF3cmFwQXQpIHtcbiAgICAgICAgICBtYXggPSAtX2JpZ051bTtcblxuICAgICAgICAgIHdoaWxlIChtYXggPCAobWF4ID0gYVt3cmFwQXQrK10uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkgJiYgd3JhcEF0IDwgbCkge31cblxuICAgICAgICAgIHdyYXBBdC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzdGFuY2VzID0gY2FjaGVbbF0gPSBbXTtcbiAgICAgICAgb3JpZ2luWCA9IHJhdGlvcyA/IE1hdGgubWluKHdyYXBBdCwgbCkgKiByYXRpb1ggLSAuNSA6IGZyb20gJSB3cmFwQXQ7XG4gICAgICAgIG9yaWdpblkgPSByYXRpb3MgPyBsICogcmF0aW9ZIC8gd3JhcEF0IC0gLjUgOiBmcm9tIC8gd3JhcEF0IHwgMDtcbiAgICAgICAgbWF4ID0gMDtcbiAgICAgICAgbWluID0gX2JpZ051bTtcblxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgbDsgaisrKSB7XG4gICAgICAgICAgeCA9IGogJSB3cmFwQXQgLSBvcmlnaW5YO1xuICAgICAgICAgIHkgPSBvcmlnaW5ZIC0gKGogLyB3cmFwQXQgfCAwKTtcbiAgICAgICAgICBkaXN0YW5jZXNbal0gPSBkID0gIWF4aXMgPyBfc3FydCh4ICogeCArIHkgKiB5KSA6IE1hdGguYWJzKGF4aXMgPT09IFwieVwiID8geSA6IHgpO1xuICAgICAgICAgIGQgPiBtYXggJiYgKG1heCA9IGQpO1xuICAgICAgICAgIGQgPCBtaW4gJiYgKG1pbiA9IGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnJvbSA9PT0gXCJyYW5kb21cIiAmJiBzaHVmZmxlKGRpc3RhbmNlcyk7XG4gICAgICAgIGRpc3RhbmNlcy5tYXggPSBtYXggLSBtaW47XG4gICAgICAgIGRpc3RhbmNlcy5taW4gPSBtaW47XG4gICAgICAgIGRpc3RhbmNlcy52ID0gbCA9IChwYXJzZUZsb2F0KHZhcnMuYW1vdW50KSB8fCBwYXJzZUZsb2F0KHZhcnMuZWFjaCkgKiAod3JhcEF0ID4gbCA/IGwgLSAxIDogIWF4aXMgPyBNYXRoLm1heCh3cmFwQXQsIGwgLyB3cmFwQXQpIDogYXhpcyA9PT0gXCJ5XCIgPyBsIC8gd3JhcEF0IDogd3JhcEF0KSB8fCAwKSAqIChmcm9tID09PSBcImVkZ2VzXCIgPyAtMSA6IDEpO1xuICAgICAgICBkaXN0YW5jZXMuYiA9IGwgPCAwID8gYmFzZSAtIGwgOiBiYXNlO1xuICAgICAgICBkaXN0YW5jZXMudSA9IGdldFVuaXQodmFycy5hbW91bnQgfHwgdmFycy5lYWNoKSB8fCAwO1xuICAgICAgICBlYXNlID0gZWFzZSAmJiBsIDwgMCA/IF9pbnZlcnRFYXNlKGVhc2UpIDogZWFzZTtcbiAgICAgIH1cblxuICAgICAgbCA9IChkaXN0YW5jZXNbaV0gLSBkaXN0YW5jZXMubWluKSAvIGRpc3RhbmNlcy5tYXggfHwgMDtcbiAgICAgIHJldHVybiBfcm91bmQoZGlzdGFuY2VzLmIgKyAoZWFzZSA/IGVhc2UobCkgOiBsKSAqIGRpc3RhbmNlcy52KSArIGRpc3RhbmNlcy51O1xuICAgIH07XG4gIH0sXG4gICAgICBfcm91bmRNb2RpZmllciA9IGZ1bmN0aW9uIF9yb3VuZE1vZGlmaWVyKHYpIHtcbiAgICB2YXIgcCA9IHYgPCAxID8gTWF0aC5wb3coMTAsICh2ICsgXCJcIikubGVuZ3RoIC0gMikgOiAxO1xuICAgIHJldHVybiBmdW5jdGlvbiAocmF3KSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJvdW5kKHBhcnNlRmxvYXQocmF3KSAvIHYpICogdiAqIHApIC8gcCArIChfaXNOdW1iZXIocmF3KSA/IDAgOiBnZXRVbml0KHJhdykpO1xuICAgIH07XG4gIH0sXG4gICAgICBzbmFwID0gZnVuY3Rpb24gc25hcChzbmFwVG8sIHZhbHVlKSB7XG4gICAgdmFyIGlzQXJyYXkgPSBfaXNBcnJheShzbmFwVG8pLFxuICAgICAgICByYWRpdXMsXG4gICAgICAgIGlzMkQ7XG5cbiAgICBpZiAoIWlzQXJyYXkgJiYgX2lzT2JqZWN0KHNuYXBUbykpIHtcbiAgICAgIHJhZGl1cyA9IGlzQXJyYXkgPSBzbmFwVG8ucmFkaXVzIHx8IF9iaWdOdW07XG5cbiAgICAgIGlmIChzbmFwVG8udmFsdWVzKSB7XG4gICAgICAgIHNuYXBUbyA9IHRvQXJyYXkoc25hcFRvLnZhbHVlcyk7XG5cbiAgICAgICAgaWYgKGlzMkQgPSAhX2lzTnVtYmVyKHNuYXBUb1swXSkpIHtcbiAgICAgICAgICByYWRpdXMgKj0gcmFkaXVzO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbmFwVG8gPSBfcm91bmRNb2RpZmllcihzbmFwVG8uaW5jcmVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCAhaXNBcnJheSA/IF9yb3VuZE1vZGlmaWVyKHNuYXBUbykgOiBfaXNGdW5jdGlvbihzbmFwVG8pID8gZnVuY3Rpb24gKHJhdykge1xuICAgICAgaXMyRCA9IHNuYXBUbyhyYXcpO1xuICAgICAgcmV0dXJuIE1hdGguYWJzKGlzMkQgLSByYXcpIDw9IHJhZGl1cyA/IGlzMkQgOiByYXc7XG4gICAgfSA6IGZ1bmN0aW9uIChyYXcpIHtcbiAgICAgIHZhciB4ID0gcGFyc2VGbG9hdChpczJEID8gcmF3LnggOiByYXcpLFxuICAgICAgICAgIHkgPSBwYXJzZUZsb2F0KGlzMkQgPyByYXcueSA6IDApLFxuICAgICAgICAgIG1pbiA9IF9iaWdOdW0sXG4gICAgICAgICAgY2xvc2VzdCA9IDAsXG4gICAgICAgICAgaSA9IHNuYXBUby5sZW5ndGgsXG4gICAgICAgICAgZHgsXG4gICAgICAgICAgZHk7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgaWYgKGlzMkQpIHtcbiAgICAgICAgICBkeCA9IHNuYXBUb1tpXS54IC0geDtcbiAgICAgICAgICBkeSA9IHNuYXBUb1tpXS55IC0geTtcbiAgICAgICAgICBkeCA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGR4ID0gTWF0aC5hYnMoc25hcFRvW2ldIC0geCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZHggPCBtaW4pIHtcbiAgICAgICAgICBtaW4gPSBkeDtcbiAgICAgICAgICBjbG9zZXN0ID0gaTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjbG9zZXN0ID0gIXJhZGl1cyB8fCBtaW4gPD0gcmFkaXVzID8gc25hcFRvW2Nsb3Nlc3RdIDogcmF3O1xuICAgICAgcmV0dXJuIGlzMkQgfHwgY2xvc2VzdCA9PT0gcmF3IHx8IF9pc051bWJlcihyYXcpID8gY2xvc2VzdCA6IGNsb3Nlc3QgKyBnZXRVbml0KHJhdyk7XG4gICAgfSk7XG4gIH0sXG4gICAgICByYW5kb20gPSBmdW5jdGlvbiByYW5kb20obWluLCBtYXgsIHJvdW5kaW5nSW5jcmVtZW50LCByZXR1cm5GdW5jdGlvbikge1xuICAgIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4oX2lzQXJyYXkobWluKSA/ICFtYXggOiByb3VuZGluZ0luY3JlbWVudCA9PT0gdHJ1ZSA/ICEhKHJvdW5kaW5nSW5jcmVtZW50ID0gMCkgOiAhcmV0dXJuRnVuY3Rpb24sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfaXNBcnJheShtaW4pID8gbWluW35+KE1hdGgucmFuZG9tKCkgKiBtaW4ubGVuZ3RoKV0gOiAocm91bmRpbmdJbmNyZW1lbnQgPSByb3VuZGluZ0luY3JlbWVudCB8fCAxZS01KSAmJiAocmV0dXJuRnVuY3Rpb24gPSByb3VuZGluZ0luY3JlbWVudCA8IDEgPyBNYXRoLnBvdygxMCwgKHJvdW5kaW5nSW5jcmVtZW50ICsgXCJcIikubGVuZ3RoIC0gMikgOiAxKSAmJiBNYXRoLmZsb29yKE1hdGgucm91bmQoKG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgLyByb3VuZGluZ0luY3JlbWVudCkgKiByb3VuZGluZ0luY3JlbWVudCAqIHJldHVybkZ1bmN0aW9uKSAvIHJldHVybkZ1bmN0aW9uO1xuICAgIH0pO1xuICB9LFxuICAgICAgcGlwZSA9IGZ1bmN0aW9uIHBpcGUoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmN0aW9ucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGZ1bmN0aW9uc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb25zLnJlZHVjZShmdW5jdGlvbiAodiwgZikge1xuICAgICAgICByZXR1cm4gZih2KTtcbiAgICAgIH0sIHZhbHVlKTtcbiAgICB9O1xuICB9LFxuICAgICAgdW5pdGl6ZSA9IGZ1bmN0aW9uIHVuaXRpemUoZnVuYywgdW5pdCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBmdW5jKHBhcnNlRmxvYXQodmFsdWUpKSArICh1bml0IHx8IGdldFVuaXQodmFsdWUpKTtcbiAgICB9O1xuICB9LFxuICAgICAgbm9ybWFsaXplID0gZnVuY3Rpb24gbm9ybWFsaXplKG1pbiwgbWF4LCB2YWx1ZSkge1xuICAgIHJldHVybiBtYXBSYW5nZShtaW4sIG1heCwgMCwgMSwgdmFsdWUpO1xuICB9LFxuICAgICAgX3dyYXBBcnJheSA9IGZ1bmN0aW9uIF93cmFwQXJyYXkoYSwgd3JhcHBlciwgdmFsdWUpIHtcbiAgICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBhW35+d3JhcHBlcihpbmRleCldO1xuICAgIH0pO1xuICB9LFxuICAgICAgd3JhcCA9IGZ1bmN0aW9uIHdyYXAobWluLCBtYXgsIHZhbHVlKSB7XG4gICAgdmFyIHJhbmdlID0gbWF4IC0gbWluO1xuICAgIHJldHVybiBfaXNBcnJheShtaW4pID8gX3dyYXBBcnJheShtaW4sIHdyYXAoMCwgbWluLmxlbmd0aCksIG1heCkgOiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIChyYW5nZSArICh2YWx1ZSAtIG1pbikgJSByYW5nZSkgJSByYW5nZSArIG1pbjtcbiAgICB9KTtcbiAgfSxcbiAgICAgIHdyYXBZb3lvID0gZnVuY3Rpb24gd3JhcFlveW8obWluLCBtYXgsIHZhbHVlKSB7XG4gICAgdmFyIHJhbmdlID0gbWF4IC0gbWluLFxuICAgICAgICB0b3RhbCA9IHJhbmdlICogMjtcbiAgICByZXR1cm4gX2lzQXJyYXkobWluKSA/IF93cmFwQXJyYXkobWluLCB3cmFwWW95bygwLCBtaW4ubGVuZ3RoIC0gMSksIG1heCkgOiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSAodG90YWwgKyAodmFsdWUgLSBtaW4pICUgdG90YWwpICUgdG90YWwgfHwgMDtcbiAgICAgIHJldHVybiBtaW4gKyAodmFsdWUgPiByYW5nZSA/IHRvdGFsIC0gdmFsdWUgOiB2YWx1ZSk7XG4gICAgfSk7XG4gIH0sXG4gICAgICBfcmVwbGFjZVJhbmRvbSA9IGZ1bmN0aW9uIF9yZXBsYWNlUmFuZG9tKHZhbHVlKSB7XG4gICAgdmFyIHByZXYgPSAwLFxuICAgICAgICBzID0gXCJcIixcbiAgICAgICAgaSxcbiAgICAgICAgbnVtcyxcbiAgICAgICAgZW5kLFxuICAgICAgICBpc0FycmF5O1xuXG4gICAgd2hpbGUgKH4oaSA9IHZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIsIHByZXYpKSkge1xuICAgICAgZW5kID0gdmFsdWUuaW5kZXhPZihcIilcIiwgaSk7XG4gICAgICBpc0FycmF5ID0gdmFsdWUuY2hhckF0KGkgKyA3KSA9PT0gXCJbXCI7XG4gICAgICBudW1zID0gdmFsdWUuc3Vic3RyKGkgKyA3LCBlbmQgLSBpIC0gNykubWF0Y2goaXNBcnJheSA/IF9kZWxpbWl0ZWRWYWx1ZUV4cCA6IF9zdHJpY3ROdW1FeHApO1xuICAgICAgcyArPSB2YWx1ZS5zdWJzdHIocHJldiwgaSAtIHByZXYpICsgcmFuZG9tKGlzQXJyYXkgPyBudW1zIDogK251bXNbMF0sIGlzQXJyYXkgPyAwIDogK251bXNbMV0sICtudW1zWzJdIHx8IDFlLTUpO1xuICAgICAgcHJldiA9IGVuZCArIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHMgKyB2YWx1ZS5zdWJzdHIocHJldiwgdmFsdWUubGVuZ3RoIC0gcHJldik7XG4gIH0sXG4gICAgICBtYXBSYW5nZSA9IGZ1bmN0aW9uIG1hcFJhbmdlKGluTWluLCBpbk1heCwgb3V0TWluLCBvdXRNYXgsIHZhbHVlKSB7XG4gICAgdmFyIGluUmFuZ2UgPSBpbk1heCAtIGluTWluLFxuICAgICAgICBvdXRSYW5nZSA9IG91dE1heCAtIG91dE1pbjtcbiAgICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBvdXRNaW4gKyAoKHZhbHVlIC0gaW5NaW4pIC8gaW5SYW5nZSAqIG91dFJhbmdlIHx8IDApO1xuICAgIH0pO1xuICB9LFxuICAgICAgaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiBpbnRlcnBvbGF0ZShzdGFydCwgZW5kLCBwcm9ncmVzcywgbXV0YXRlKSB7XG4gICAgdmFyIGZ1bmMgPSBpc05hTihzdGFydCArIGVuZCkgPyAwIDogZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiAoMSAtIHApICogc3RhcnQgKyBwICogZW5kO1xuICAgIH07XG5cbiAgICBpZiAoIWZ1bmMpIHtcbiAgICAgIHZhciBpc1N0cmluZyA9IF9pc1N0cmluZyhzdGFydCksXG4gICAgICAgICAgbWFzdGVyID0ge30sXG4gICAgICAgICAgcCxcbiAgICAgICAgICBpLFxuICAgICAgICAgIGludGVycG9sYXRvcnMsXG4gICAgICAgICAgbCxcbiAgICAgICAgICBpbDtcblxuICAgICAgcHJvZ3Jlc3MgPT09IHRydWUgJiYgKG11dGF0ZSA9IDEpICYmIChwcm9ncmVzcyA9IG51bGwpO1xuXG4gICAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgICAgc3RhcnQgPSB7XG4gICAgICAgICAgcDogc3RhcnRcbiAgICAgICAgfTtcbiAgICAgICAgZW5kID0ge1xuICAgICAgICAgIHA6IGVuZFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChfaXNBcnJheShzdGFydCkgJiYgIV9pc0FycmF5KGVuZCkpIHtcbiAgICAgICAgaW50ZXJwb2xhdG9ycyA9IFtdO1xuICAgICAgICBsID0gc3RhcnQubGVuZ3RoO1xuICAgICAgICBpbCA9IGwgLSAyO1xuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpbnRlcnBvbGF0b3JzLnB1c2goaW50ZXJwb2xhdGUoc3RhcnRbaSAtIDFdLCBzdGFydFtpXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbC0tO1xuXG4gICAgICAgIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKHApIHtcbiAgICAgICAgICBwICo9IGw7XG4gICAgICAgICAgdmFyIGkgPSBNYXRoLm1pbihpbCwgfn5wKTtcbiAgICAgICAgICByZXR1cm4gaW50ZXJwb2xhdG9yc1tpXShwIC0gaSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcHJvZ3Jlc3MgPSBlbmQ7XG4gICAgICB9IGVsc2UgaWYgKCFtdXRhdGUpIHtcbiAgICAgICAgc3RhcnQgPSBfbWVyZ2UoX2lzQXJyYXkoc3RhcnQpID8gW10gOiB7fSwgc3RhcnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWludGVycG9sYXRvcnMpIHtcbiAgICAgICAgZm9yIChwIGluIGVuZCkge1xuICAgICAgICAgIF9hZGRQcm9wVHdlZW4uY2FsbChtYXN0ZXIsIHN0YXJ0LCBwLCBcImdldFwiLCBlbmRbcF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMocCkge1xuICAgICAgICAgIHJldHVybiBfcmVuZGVyUHJvcFR3ZWVucyhwLCBtYXN0ZXIpIHx8IChpc1N0cmluZyA/IHN0YXJ0LnAgOiBzdGFydCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybihwcm9ncmVzcywgZnVuYyk7XG4gIH0sXG4gICAgICBfZ2V0TGFiZWxJbkRpcmVjdGlvbiA9IGZ1bmN0aW9uIF9nZXRMYWJlbEluRGlyZWN0aW9uKHRpbWVsaW5lLCBmcm9tVGltZSwgYmFja3dhcmQpIHtcbiAgICB2YXIgbGFiZWxzID0gdGltZWxpbmUubGFiZWxzLFxuICAgICAgICBtaW4gPSBfYmlnTnVtLFxuICAgICAgICBwLFxuICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgbGFiZWw7XG5cbiAgICBmb3IgKHAgaW4gbGFiZWxzKSB7XG4gICAgICBkaXN0YW5jZSA9IGxhYmVsc1twXSAtIGZyb21UaW1lO1xuXG4gICAgICBpZiAoZGlzdGFuY2UgPCAwID09PSAhIWJhY2t3YXJkICYmIGRpc3RhbmNlICYmIG1pbiA+IChkaXN0YW5jZSA9IE1hdGguYWJzKGRpc3RhbmNlKSkpIHtcbiAgICAgICAgbGFiZWwgPSBwO1xuICAgICAgICBtaW4gPSBkaXN0YW5jZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0sXG4gICAgICBfY2FsbGJhY2sgPSBmdW5jdGlvbiBfY2FsbGJhY2soYW5pbWF0aW9uLCB0eXBlLCBleGVjdXRlTGF6eUZpcnN0KSB7XG4gICAgdmFyIHYgPSBhbmltYXRpb24udmFycyxcbiAgICAgICAgY2FsbGJhY2sgPSB2W3R5cGVdLFxuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHNjb3BlO1xuXG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBhcmFtcyA9IHZbdHlwZSArIFwiUGFyYW1zXCJdO1xuICAgIHNjb3BlID0gdi5jYWxsYmFja1Njb3BlIHx8IGFuaW1hdGlvbjtcbiAgICBleGVjdXRlTGF6eUZpcnN0ICYmIF9sYXp5VHdlZW5zLmxlbmd0aCAmJiBfbGF6eVJlbmRlcigpO1xuICAgIHJldHVybiBwYXJhbXMgPyBjYWxsYmFjay5hcHBseShzY29wZSwgcGFyYW1zKSA6IGNhbGxiYWNrLmNhbGwoc2NvcGUpO1xuICB9LFxuICAgICAgX2ludGVycnVwdCA9IGZ1bmN0aW9uIF9pbnRlcnJ1cHQoYW5pbWF0aW9uKSB7XG4gICAgX3JlbW92ZUZyb21QYXJlbnQoYW5pbWF0aW9uKTtcblxuICAgIGFuaW1hdGlvbi5wcm9ncmVzcygpIDwgMSAmJiBfY2FsbGJhY2soYW5pbWF0aW9uLCBcIm9uSW50ZXJydXB0XCIpO1xuICAgIHJldHVybiBhbmltYXRpb247XG4gIH0sXG4gICAgICBfcXVpY2tUd2VlbixcbiAgICAgIF9jcmVhdGVQbHVnaW4gPSBmdW5jdGlvbiBfY3JlYXRlUGx1Z2luKGNvbmZpZykge1xuICAgIGNvbmZpZyA9ICFjb25maWcubmFtZSAmJiBjb25maWdbXCJkZWZhdWx0XCJdIHx8IGNvbmZpZztcblxuICAgIHZhciBuYW1lID0gY29uZmlnLm5hbWUsXG4gICAgICAgIGlzRnVuYyA9IF9pc0Z1bmN0aW9uKGNvbmZpZyksXG4gICAgICAgIFBsdWdpbiA9IG5hbWUgJiYgIWlzRnVuYyAmJiBjb25maWcuaW5pdCA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX3Byb3BzID0gW107XG4gICAgfSA6IGNvbmZpZyxcbiAgICAgICAgaW5zdGFuY2VEZWZhdWx0cyA9IHtcbiAgICAgIGluaXQ6IF9lbXB0eUZ1bmMsXG4gICAgICByZW5kZXI6IF9yZW5kZXJQcm9wVHdlZW5zLFxuICAgICAgYWRkOiBfYWRkUHJvcFR3ZWVuLFxuICAgICAga2lsbDogX2tpbGxQcm9wVHdlZW5zT2YsXG4gICAgICBtb2RpZmllcjogX2FkZFBsdWdpbk1vZGlmaWVyLFxuICAgICAgcmF3VmFyczogMFxuICAgIH0sXG4gICAgICAgIHN0YXRpY3MgPSB7XG4gICAgICB0YXJnZXRUZXN0OiAwLFxuICAgICAgZ2V0OiAwLFxuICAgICAgZ2V0U2V0dGVyOiBfZ2V0U2V0dGVyLFxuICAgICAgYWxpYXNlczoge30sXG4gICAgICByZWdpc3RlcjogMFxuICAgIH07XG5cbiAgICBfd2FrZSgpO1xuXG4gICAgaWYgKGNvbmZpZyAhPT0gUGx1Z2luKSB7XG4gICAgICBpZiAoX3BsdWdpbnNbbmFtZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfc2V0RGVmYXVsdHMoUGx1Z2luLCBfc2V0RGVmYXVsdHMoX2NvcHlFeGNsdWRpbmcoY29uZmlnLCBpbnN0YW5jZURlZmF1bHRzKSwgc3RhdGljcykpO1xuXG4gICAgICBfbWVyZ2UoUGx1Z2luLnByb3RvdHlwZSwgX21lcmdlKGluc3RhbmNlRGVmYXVsdHMsIF9jb3B5RXhjbHVkaW5nKGNvbmZpZywgc3RhdGljcykpKTtcblxuICAgICAgX3BsdWdpbnNbUGx1Z2luLnByb3AgPSBuYW1lXSA9IFBsdWdpbjtcblxuICAgICAgaWYgKGNvbmZpZy50YXJnZXRUZXN0KSB7XG4gICAgICAgIF9oYXJuZXNzUGx1Z2lucy5wdXNoKFBsdWdpbik7XG5cbiAgICAgICAgX3Jlc2VydmVkUHJvcHNbbmFtZV0gPSAxO1xuICAgICAgfVxuXG4gICAgICBuYW1lID0gKG5hbWUgPT09IFwiY3NzXCIgPyBcIkNTU1wiIDogbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyKDEpKSArIFwiUGx1Z2luXCI7XG4gICAgfVxuXG4gICAgX2FkZEdsb2JhbChuYW1lLCBQbHVnaW4pO1xuXG4gICAgY29uZmlnLnJlZ2lzdGVyICYmIGNvbmZpZy5yZWdpc3Rlcihnc2FwLCBQbHVnaW4sIFByb3BUd2Vlbik7XG4gIH0sXG4gICAgICBfMjU1ID0gMjU1LFxuICAgICAgX2NvbG9yTG9va3VwID0ge1xuICAgIGFxdWE6IFswLCBfMjU1LCBfMjU1XSxcbiAgICBsaW1lOiBbMCwgXzI1NSwgMF0sXG4gICAgc2lsdmVyOiBbMTkyLCAxOTIsIDE5Ml0sXG4gICAgYmxhY2s6IFswLCAwLCAwXSxcbiAgICBtYXJvb246IFsxMjgsIDAsIDBdLFxuICAgIHRlYWw6IFswLCAxMjgsIDEyOF0sXG4gICAgYmx1ZTogWzAsIDAsIF8yNTVdLFxuICAgIG5hdnk6IFswLCAwLCAxMjhdLFxuICAgIHdoaXRlOiBbXzI1NSwgXzI1NSwgXzI1NV0sXG4gICAgb2xpdmU6IFsxMjgsIDEyOCwgMF0sXG4gICAgeWVsbG93OiBbXzI1NSwgXzI1NSwgMF0sXG4gICAgb3JhbmdlOiBbXzI1NSwgMTY1LCAwXSxcbiAgICBncmF5OiBbMTI4LCAxMjgsIDEyOF0sXG4gICAgcHVycGxlOiBbMTI4LCAwLCAxMjhdLFxuICAgIGdyZWVuOiBbMCwgMTI4LCAwXSxcbiAgICByZWQ6IFtfMjU1LCAwLCAwXSxcbiAgICBwaW5rOiBbXzI1NSwgMTkyLCAyMDNdLFxuICAgIGN5YW46IFswLCBfMjU1LCBfMjU1XSxcbiAgICB0cmFuc3BhcmVudDogW18yNTUsIF8yNTUsIF8yNTUsIDBdXG4gIH0sXG4gICAgICBfaHVlID0gZnVuY3Rpb24gX2h1ZShoLCBtMSwgbTIpIHtcbiAgICBoID0gaCA8IDAgPyBoICsgMSA6IGggPiAxID8gaCAtIDEgOiBoO1xuICAgIHJldHVybiAoaCAqIDYgPCAxID8gbTEgKyAobTIgLSBtMSkgKiBoICogNiA6IGggPCAuNSA/IG0yIDogaCAqIDMgPCAyID8gbTEgKyAobTIgLSBtMSkgKiAoMiAvIDMgLSBoKSAqIDYgOiBtMSkgKiBfMjU1ICsgLjUgfCAwO1xuICB9LFxuICAgICAgc3BsaXRDb2xvciA9IGZ1bmN0aW9uIHNwbGl0Q29sb3IodiwgdG9IU0wsIGZvcmNlQWxwaGEpIHtcbiAgICB2YXIgYSA9ICF2ID8gX2NvbG9yTG9va3VwLmJsYWNrIDogX2lzTnVtYmVyKHYpID8gW3YgPj4gMTYsIHYgPj4gOCAmIF8yNTUsIHYgJiBfMjU1XSA6IDAsXG4gICAgICAgIHIsXG4gICAgICAgIGcsXG4gICAgICAgIGIsXG4gICAgICAgIGgsXG4gICAgICAgIHMsXG4gICAgICAgIGwsXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluLFxuICAgICAgICBkLFxuICAgICAgICB3YXNIU0w7XG5cbiAgICBpZiAoIWEpIHtcbiAgICAgIGlmICh2LnN1YnN0cigtMSkgPT09IFwiLFwiKSB7XG4gICAgICAgIHYgPSB2LnN1YnN0cigwLCB2Lmxlbmd0aCAtIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX2NvbG9yTG9va3VwW3ZdKSB7XG4gICAgICAgIGEgPSBfY29sb3JMb29rdXBbdl07XG4gICAgICB9IGVsc2UgaWYgKHYuY2hhckF0KDApID09PSBcIiNcIikge1xuICAgICAgICBpZiAodi5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICByID0gdi5jaGFyQXQoMSk7XG4gICAgICAgICAgZyA9IHYuY2hhckF0KDIpO1xuICAgICAgICAgIGIgPSB2LmNoYXJBdCgzKTtcbiAgICAgICAgICB2ID0gXCIjXCIgKyByICsgciArIGcgKyBnICsgYiArIGI7XG4gICAgICAgIH1cblxuICAgICAgICB2ID0gcGFyc2VJbnQodi5zdWJzdHIoMSksIDE2KTtcbiAgICAgICAgYSA9IFt2ID4+IDE2LCB2ID4+IDggJiBfMjU1LCB2ICYgXzI1NV07XG4gICAgICB9IGVsc2UgaWYgKHYuc3Vic3RyKDAsIDMpID09PSBcImhzbFwiKSB7XG4gICAgICAgIGEgPSB3YXNIU0wgPSB2Lm1hdGNoKF9zdHJpY3ROdW1FeHApO1xuXG4gICAgICAgIGlmICghdG9IU0wpIHtcbiAgICAgICAgICBoID0gK2FbMF0gJSAzNjAgLyAzNjA7XG4gICAgICAgICAgcyA9ICthWzFdIC8gMTAwO1xuICAgICAgICAgIGwgPSArYVsyXSAvIDEwMDtcbiAgICAgICAgICBnID0gbCA8PSAuNSA/IGwgKiAocyArIDEpIDogbCArIHMgLSBsICogcztcbiAgICAgICAgICByID0gbCAqIDIgLSBnO1xuICAgICAgICAgIGEubGVuZ3RoID4gMyAmJiAoYVszXSAqPSAxKTtcbiAgICAgICAgICBhWzBdID0gX2h1ZShoICsgMSAvIDMsIHIsIGcpO1xuICAgICAgICAgIGFbMV0gPSBfaHVlKGgsIHIsIGcpO1xuICAgICAgICAgIGFbMl0gPSBfaHVlKGggLSAxIC8gMywgciwgZyk7XG4gICAgICAgIH0gZWxzZSBpZiAofnYuaW5kZXhPZihcIj1cIikpIHtcbiAgICAgICAgICBhID0gdi5tYXRjaChfbnVtRXhwKTtcbiAgICAgICAgICBmb3JjZUFscGhhICYmIGEubGVuZ3RoIDwgNCAmJiAoYVszXSA9IDEpO1xuICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhID0gdi5tYXRjaChfc3RyaWN0TnVtRXhwKSB8fCBfY29sb3JMb29rdXAudHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIGEgPSBhLm1hcChOdW1iZXIpO1xuICAgIH1cblxuICAgIGlmICh0b0hTTCAmJiAhd2FzSFNMKSB7XG4gICAgICByID0gYVswXSAvIF8yNTU7XG4gICAgICBnID0gYVsxXSAvIF8yNTU7XG4gICAgICBiID0gYVsyXSAvIF8yNTU7XG4gICAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgbCA9IChtYXggKyBtaW4pIC8gMjtcblxuICAgICAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgICAgIGggPSBzID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGQgPSBtYXggLSBtaW47XG4gICAgICAgIHMgPSBsID4gMC41ID8gZCAvICgyIC0gbWF4IC0gbWluKSA6IGQgLyAobWF4ICsgbWluKTtcbiAgICAgICAgaCA9IG1heCA9PT0gciA/IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApIDogbWF4ID09PSBnID8gKGIgLSByKSAvIGQgKyAyIDogKHIgLSBnKSAvIGQgKyA0O1xuICAgICAgICBoICo9IDYwO1xuICAgICAgfVxuXG4gICAgICBhWzBdID0gfn4oaCArIC41KTtcbiAgICAgIGFbMV0gPSB+fihzICogMTAwICsgLjUpO1xuICAgICAgYVsyXSA9IH5+KGwgKiAxMDAgKyAuNSk7XG4gICAgfVxuXG4gICAgZm9yY2VBbHBoYSAmJiBhLmxlbmd0aCA8IDQgJiYgKGFbM10gPSAxKTtcbiAgICByZXR1cm4gYTtcbiAgfSxcbiAgICAgIF9jb2xvck9yZGVyRGF0YSA9IGZ1bmN0aW9uIF9jb2xvck9yZGVyRGF0YSh2KSB7XG4gICAgdmFyIHZhbHVlcyA9IFtdLFxuICAgICAgICBjID0gW10sXG4gICAgICAgIGkgPSAtMTtcbiAgICB2LnNwbGl0KF9jb2xvckV4cCkuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgdmFyIGEgPSB2Lm1hdGNoKF9udW1XaXRoVW5pdEV4cCkgfHwgW107XG4gICAgICB2YWx1ZXMucHVzaC5hcHBseSh2YWx1ZXMsIGEpO1xuICAgICAgYy5wdXNoKGkgKz0gYS5sZW5ndGggKyAxKTtcbiAgICB9KTtcbiAgICB2YWx1ZXMuYyA9IGM7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfSxcbiAgICAgIF9mb3JtYXRDb2xvcnMgPSBmdW5jdGlvbiBfZm9ybWF0Q29sb3JzKHMsIHRvSFNMLCBvcmRlck1hdGNoRGF0YSkge1xuICAgIHZhciByZXN1bHQgPSBcIlwiLFxuICAgICAgICBjb2xvcnMgPSAocyArIHJlc3VsdCkubWF0Y2goX2NvbG9yRXhwKSxcbiAgICAgICAgdHlwZSA9IHRvSFNMID8gXCJoc2xhKFwiIDogXCJyZ2JhKFwiLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgYyxcbiAgICAgICAgc2hlbGwsXG4gICAgICAgIGQsXG4gICAgICAgIGw7XG5cbiAgICBpZiAoIWNvbG9ycykge1xuICAgICAgcmV0dXJuIHM7XG4gICAgfVxuXG4gICAgY29sb3JzID0gY29sb3JzLm1hcChmdW5jdGlvbiAoY29sb3IpIHtcbiAgICAgIHJldHVybiAoY29sb3IgPSBzcGxpdENvbG9yKGNvbG9yLCB0b0hTTCwgMSkpICYmIHR5cGUgKyAodG9IU0wgPyBjb2xvclswXSArIFwiLFwiICsgY29sb3JbMV0gKyBcIiUsXCIgKyBjb2xvclsyXSArIFwiJSxcIiArIGNvbG9yWzNdIDogY29sb3Iuam9pbihcIixcIikpICsgXCIpXCI7XG4gICAgfSk7XG5cbiAgICBpZiAob3JkZXJNYXRjaERhdGEpIHtcbiAgICAgIGQgPSBfY29sb3JPcmRlckRhdGEocyk7XG4gICAgICBjID0gb3JkZXJNYXRjaERhdGEuYztcblxuICAgICAgaWYgKGMuam9pbihyZXN1bHQpICE9PSBkLmMuam9pbihyZXN1bHQpKSB7XG4gICAgICAgIHNoZWxsID0gcy5yZXBsYWNlKF9jb2xvckV4cCwgXCIxXCIpLnNwbGl0KF9udW1XaXRoVW5pdEV4cCk7XG4gICAgICAgIGwgPSBzaGVsbC5sZW5ndGggLSAxO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgcmVzdWx0ICs9IHNoZWxsW2ldICsgKH5jLmluZGV4T2YoaSkgPyBjb2xvcnMuc2hpZnQoKSB8fCB0eXBlICsgXCIwLDAsMCwwKVwiIDogKGQubGVuZ3RoID8gZCA6IGNvbG9ycy5sZW5ndGggPyBjb2xvcnMgOiBvcmRlck1hdGNoRGF0YSkuc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXNoZWxsKSB7XG4gICAgICBzaGVsbCA9IHMuc3BsaXQoX2NvbG9yRXhwKTtcbiAgICAgIGwgPSBzaGVsbC5sZW5ndGggLSAxO1xuXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICByZXN1bHQgKz0gc2hlbGxbaV0gKyBjb2xvcnNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdCArIHNoZWxsW2xdO1xuICB9LFxuICAgICAgX2NvbG9yRXhwID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzID0gXCIoPzpcXFxcYig/Oig/OnJnYnxyZ2JhfGhzbHxoc2xhKVxcXFwoLis/XFxcXCkpfFxcXFxCIyg/OlswLTlhLWZdezN9KXsxLDJ9XFxcXGJcIixcbiAgICAgICAgcDtcblxuICAgIGZvciAocCBpbiBfY29sb3JMb29rdXApIHtcbiAgICAgIHMgKz0gXCJ8XCIgKyBwICsgXCJcXFxcYlwiO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVnRXhwKHMgKyBcIilcIiwgXCJnaVwiKTtcbiAgfSgpLFxuICAgICAgX2hzbEV4cCA9IC9oc2xbYV0/XFwoLyxcbiAgICAgIF9jb2xvclN0cmluZ0ZpbHRlciA9IGZ1bmN0aW9uIF9jb2xvclN0cmluZ0ZpbHRlcihhKSB7XG4gICAgdmFyIGNvbWJpbmVkID0gYS5qb2luKFwiIFwiKSxcbiAgICAgICAgdG9IU0w7XG4gICAgX2NvbG9yRXhwLmxhc3RJbmRleCA9IDA7XG5cbiAgICBpZiAoX2NvbG9yRXhwLnRlc3QoY29tYmluZWQpKSB7XG4gICAgICB0b0hTTCA9IF9oc2xFeHAudGVzdChjb21iaW5lZCk7XG4gICAgICBhWzFdID0gX2Zvcm1hdENvbG9ycyhhWzFdLCB0b0hTTCk7XG4gICAgICBhWzBdID0gX2Zvcm1hdENvbG9ycyhhWzBdLCB0b0hTTCwgX2NvbG9yT3JkZXJEYXRhKGFbMV0pKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSxcbiAgICAgIF90aWNrZXJBY3RpdmUsXG4gICAgICBfdGlja2VyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfZ2V0VGltZSA9IERhdGUubm93LFxuICAgICAgICBfbGFnVGhyZXNob2xkID0gNTAwLFxuICAgICAgICBfYWRqdXN0ZWRMYWcgPSAzMyxcbiAgICAgICAgX3N0YXJ0VGltZSA9IF9nZXRUaW1lKCksXG4gICAgICAgIF9sYXN0VXBkYXRlID0gX3N0YXJ0VGltZSxcbiAgICAgICAgX2dhcCA9IDEwMDAgLyAyNDAsXG4gICAgICAgIF9uZXh0VGltZSA9IF9nYXAsXG4gICAgICAgIF9saXN0ZW5lcnMgPSBbXSxcbiAgICAgICAgX2lkLFxuICAgICAgICBfcmVxLFxuICAgICAgICBfcmFmLFxuICAgICAgICBfc2VsZixcbiAgICAgICAgX2RlbHRhLFxuICAgICAgICBfaSxcbiAgICAgICAgX3RpY2sgPSBmdW5jdGlvbiBfdGljayh2KSB7XG4gICAgICB2YXIgZWxhcHNlZCA9IF9nZXRUaW1lKCkgLSBfbGFzdFVwZGF0ZSxcbiAgICAgICAgICBtYW51YWwgPSB2ID09PSB0cnVlLFxuICAgICAgICAgIG92ZXJsYXAsXG4gICAgICAgICAgZGlzcGF0Y2gsXG4gICAgICAgICAgdGltZSxcbiAgICAgICAgICBmcmFtZTtcblxuICAgICAgZWxhcHNlZCA+IF9sYWdUaHJlc2hvbGQgJiYgKF9zdGFydFRpbWUgKz0gZWxhcHNlZCAtIF9hZGp1c3RlZExhZyk7XG4gICAgICBfbGFzdFVwZGF0ZSArPSBlbGFwc2VkO1xuICAgICAgdGltZSA9IF9sYXN0VXBkYXRlIC0gX3N0YXJ0VGltZTtcbiAgICAgIG92ZXJsYXAgPSB0aW1lIC0gX25leHRUaW1lO1xuXG4gICAgICBpZiAob3ZlcmxhcCA+IDAgfHwgbWFudWFsKSB7XG4gICAgICAgIGZyYW1lID0gKytfc2VsZi5mcmFtZTtcbiAgICAgICAgX2RlbHRhID0gdGltZSAtIF9zZWxmLnRpbWUgKiAxMDAwO1xuICAgICAgICBfc2VsZi50aW1lID0gdGltZSA9IHRpbWUgLyAxMDAwO1xuICAgICAgICBfbmV4dFRpbWUgKz0gb3ZlcmxhcCArIChvdmVybGFwID49IF9nYXAgPyA0IDogX2dhcCAtIG92ZXJsYXApO1xuICAgICAgICBkaXNwYXRjaCA9IDE7XG4gICAgICB9XG5cbiAgICAgIG1hbnVhbCB8fCAoX2lkID0gX3JlcShfdGljaykpO1xuXG4gICAgICBpZiAoZGlzcGF0Y2gpIHtcbiAgICAgICAgZm9yIChfaSA9IDA7IF9pIDwgX2xpc3RlbmVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICBfbGlzdGVuZXJzW19pXSh0aW1lLCBfZGVsdGEsIGZyYW1lLCB2KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfc2VsZiA9IHtcbiAgICAgIHRpbWU6IDAsXG4gICAgICBmcmFtZTogMCxcbiAgICAgIHRpY2s6IGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgICAgIF90aWNrKHRydWUpO1xuICAgICAgfSxcbiAgICAgIGRlbHRhUmF0aW86IGZ1bmN0aW9uIGRlbHRhUmF0aW8oZnBzKSB7XG4gICAgICAgIHJldHVybiBfZGVsdGEgLyAoMTAwMCAvIChmcHMgfHwgNjApKTtcbiAgICAgIH0sXG4gICAgICB3YWtlOiBmdW5jdGlvbiB3YWtlKCkge1xuICAgICAgICBpZiAoX2NvcmVSZWFkeSkge1xuICAgICAgICAgIGlmICghX2NvcmVJbml0dGVkICYmIF93aW5kb3dFeGlzdHMoKSkge1xuICAgICAgICAgICAgX3dpbiA9IF9jb3JlSW5pdHRlZCA9IHdpbmRvdztcbiAgICAgICAgICAgIF9kb2MgPSBfd2luLmRvY3VtZW50IHx8IHt9O1xuICAgICAgICAgICAgX2dsb2JhbHMuZ3NhcCA9IGdzYXA7XG4gICAgICAgICAgICAoX3dpbi5nc2FwVmVyc2lvbnMgfHwgKF93aW4uZ3NhcFZlcnNpb25zID0gW10pKS5wdXNoKGdzYXAudmVyc2lvbik7XG5cbiAgICAgICAgICAgIF9pbnN0YWxsKF9pbnN0YWxsU2NvcGUgfHwgX3dpbi5HcmVlblNvY2tHbG9iYWxzIHx8ICFfd2luLmdzYXAgJiYgX3dpbiB8fCB7fSk7XG5cbiAgICAgICAgICAgIF9yYWYgPSBfd2luLnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfaWQgJiYgX3NlbGYuc2xlZXAoKTtcblxuICAgICAgICAgIF9yZXEgPSBfcmFmIHx8IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChmLCBfbmV4dFRpbWUgLSBfc2VsZi50aW1lICogMTAwMCArIDEgfCAwKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgX3RpY2tlckFjdGl2ZSA9IDE7XG5cbiAgICAgICAgICBfdGljaygyKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNsZWVwOiBmdW5jdGlvbiBzbGVlcCgpIHtcbiAgICAgICAgKF9yYWYgPyBfd2luLmNhbmNlbEFuaW1hdGlvbkZyYW1lIDogY2xlYXJUaW1lb3V0KShfaWQpO1xuICAgICAgICBfdGlja2VyQWN0aXZlID0gMDtcbiAgICAgICAgX3JlcSA9IF9lbXB0eUZ1bmM7XG4gICAgICB9LFxuICAgICAgbGFnU21vb3RoaW5nOiBmdW5jdGlvbiBsYWdTbW9vdGhpbmcodGhyZXNob2xkLCBhZGp1c3RlZExhZykge1xuICAgICAgICBfbGFnVGhyZXNob2xkID0gdGhyZXNob2xkIHx8IDEgLyBfdGlueU51bTtcbiAgICAgICAgX2FkanVzdGVkTGFnID0gTWF0aC5taW4oYWRqdXN0ZWRMYWcsIF9sYWdUaHJlc2hvbGQsIDApO1xuICAgICAgfSxcbiAgICAgIGZwczogZnVuY3Rpb24gZnBzKF9mcHMpIHtcbiAgICAgICAgX2dhcCA9IDEwMDAgLyAoX2ZwcyB8fCAyNDApO1xuICAgICAgICBfbmV4dFRpbWUgPSBfc2VsZi50aW1lICogMTAwMCArIF9nYXA7XG4gICAgICB9LFxuICAgICAgYWRkOiBmdW5jdGlvbiBhZGQoY2FsbGJhY2spIHtcbiAgICAgICAgX2xpc3RlbmVycy5pbmRleE9mKGNhbGxiYWNrKSA8IDAgJiYgX2xpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcblxuICAgICAgICBfd2FrZSgpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB+KGkgPSBfbGlzdGVuZXJzLmluZGV4T2YoY2FsbGJhY2spKSAmJiBfbGlzdGVuZXJzLnNwbGljZShpLCAxKSAmJiBfaSA+PSBpICYmIF9pLS07XG4gICAgICB9LFxuICAgICAgX2xpc3RlbmVyczogX2xpc3RlbmVyc1xuICAgIH07XG4gICAgcmV0dXJuIF9zZWxmO1xuICB9KCksXG4gICAgICBfd2FrZSA9IGZ1bmN0aW9uIF93YWtlKCkge1xuICAgIHJldHVybiAhX3RpY2tlckFjdGl2ZSAmJiBfdGlja2VyLndha2UoKTtcbiAgfSxcbiAgICAgIF9lYXNlTWFwID0ge30sXG4gICAgICBfY3VzdG9tRWFzZUV4cCA9IC9eW1xcZC5cXC1NXVtcXGQuXFwtLFxcc10vLFxuICAgICAgX3F1b3Rlc0V4cCA9IC9bXCInXS9nLFxuICAgICAgX3BhcnNlT2JqZWN0SW5TdHJpbmcgPSBmdW5jdGlvbiBfcGFyc2VPYmplY3RJblN0cmluZyh2YWx1ZSkge1xuICAgIHZhciBvYmogPSB7fSxcbiAgICAgICAgc3BsaXQgPSB2YWx1ZS5zdWJzdHIoMSwgdmFsdWUubGVuZ3RoIC0gMykuc3BsaXQoXCI6XCIpLFxuICAgICAgICBrZXkgPSBzcGxpdFswXSxcbiAgICAgICAgaSA9IDEsXG4gICAgICAgIGwgPSBzcGxpdC5sZW5ndGgsXG4gICAgICAgIGluZGV4LFxuICAgICAgICB2YWwsXG4gICAgICAgIHBhcnNlZFZhbDtcblxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YWwgPSBzcGxpdFtpXTtcbiAgICAgIGluZGV4ID0gaSAhPT0gbCAtIDEgPyB2YWwubGFzdEluZGV4T2YoXCIsXCIpIDogdmFsLmxlbmd0aDtcbiAgICAgIHBhcnNlZFZhbCA9IHZhbC5zdWJzdHIoMCwgaW5kZXgpO1xuICAgICAgb2JqW2tleV0gPSBpc05hTihwYXJzZWRWYWwpID8gcGFyc2VkVmFsLnJlcGxhY2UoX3F1b3Rlc0V4cCwgXCJcIikudHJpbSgpIDogK3BhcnNlZFZhbDtcbiAgICAgIGtleSA9IHZhbC5zdWJzdHIoaW5kZXggKyAxKS50cmltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfSxcbiAgICAgIF92YWx1ZUluUGFyZW50aGVzZXMgPSBmdW5jdGlvbiBfdmFsdWVJblBhcmVudGhlc2VzKHZhbHVlKSB7XG4gICAgdmFyIG9wZW4gPSB2YWx1ZS5pbmRleE9mKFwiKFwiKSArIDEsXG4gICAgICAgIGNsb3NlID0gdmFsdWUuaW5kZXhPZihcIilcIiksXG4gICAgICAgIG5lc3RlZCA9IHZhbHVlLmluZGV4T2YoXCIoXCIsIG9wZW4pO1xuICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcob3Blbiwgfm5lc3RlZCAmJiBuZXN0ZWQgPCBjbG9zZSA/IHZhbHVlLmluZGV4T2YoXCIpXCIsIGNsb3NlICsgMSkgOiBjbG9zZSk7XG4gIH0sXG4gICAgICBfY29uZmlnRWFzZUZyb21TdHJpbmcgPSBmdW5jdGlvbiBfY29uZmlnRWFzZUZyb21TdHJpbmcobmFtZSkge1xuICAgIHZhciBzcGxpdCA9IChuYW1lICsgXCJcIikuc3BsaXQoXCIoXCIpLFxuICAgICAgICBlYXNlID0gX2Vhc2VNYXBbc3BsaXRbMF1dO1xuICAgIHJldHVybiBlYXNlICYmIHNwbGl0Lmxlbmd0aCA+IDEgJiYgZWFzZS5jb25maWcgPyBlYXNlLmNvbmZpZy5hcHBseShudWxsLCB+bmFtZS5pbmRleE9mKFwie1wiKSA/IFtfcGFyc2VPYmplY3RJblN0cmluZyhzcGxpdFsxXSldIDogX3ZhbHVlSW5QYXJlbnRoZXNlcyhuYW1lKS5zcGxpdChcIixcIikubWFwKF9udW1lcmljSWZQb3NzaWJsZSkpIDogX2Vhc2VNYXAuX0NFICYmIF9jdXN0b21FYXNlRXhwLnRlc3QobmFtZSkgPyBfZWFzZU1hcC5fQ0UoXCJcIiwgbmFtZSkgOiBlYXNlO1xuICB9LFxuICAgICAgX2ludmVydEVhc2UgPSBmdW5jdGlvbiBfaW52ZXJ0RWFzZShlYXNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gMSAtIGVhc2UoMSAtIHApO1xuICAgIH07XG4gIH0sXG4gICAgICBfcHJvcGFnYXRlWW95b0Vhc2UgPSBmdW5jdGlvbiBfcHJvcGFnYXRlWW95b0Vhc2UodGltZWxpbmUsIGlzWW95bykge1xuICAgIHZhciBjaGlsZCA9IHRpbWVsaW5lLl9maXJzdCxcbiAgICAgICAgZWFzZTtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgVGltZWxpbmUpIHtcbiAgICAgICAgX3Byb3BhZ2F0ZVlveW9FYXNlKGNoaWxkLCBpc1lveW8pO1xuICAgICAgfSBlbHNlIGlmIChjaGlsZC52YXJzLnlveW9FYXNlICYmICghY2hpbGQuX3lveW8gfHwgIWNoaWxkLl9yZXBlYXQpICYmIGNoaWxkLl95b3lvICE9PSBpc1lveW8pIHtcbiAgICAgICAgaWYgKGNoaWxkLnRpbWVsaW5lKSB7XG4gICAgICAgICAgX3Byb3BhZ2F0ZVlveW9FYXNlKGNoaWxkLnRpbWVsaW5lLCBpc1lveW8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVhc2UgPSBjaGlsZC5fZWFzZTtcbiAgICAgICAgICBjaGlsZC5fZWFzZSA9IGNoaWxkLl95RWFzZTtcbiAgICAgICAgICBjaGlsZC5feUVhc2UgPSBlYXNlO1xuICAgICAgICAgIGNoaWxkLl95b3lvID0gaXNZb3lvO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuICB9LFxuICAgICAgX3BhcnNlRWFzZSA9IGZ1bmN0aW9uIF9wYXJzZUVhc2UoZWFzZSwgZGVmYXVsdEVhc2UpIHtcbiAgICByZXR1cm4gIWVhc2UgPyBkZWZhdWx0RWFzZSA6IChfaXNGdW5jdGlvbihlYXNlKSA/IGVhc2UgOiBfZWFzZU1hcFtlYXNlXSB8fCBfY29uZmlnRWFzZUZyb21TdHJpbmcoZWFzZSkpIHx8IGRlZmF1bHRFYXNlO1xuICB9LFxuICAgICAgX2luc2VydEVhc2UgPSBmdW5jdGlvbiBfaW5zZXJ0RWFzZShuYW1lcywgZWFzZUluLCBlYXNlT3V0LCBlYXNlSW5PdXQpIHtcbiAgICBpZiAoZWFzZU91dCA9PT0gdm9pZCAwKSB7XG4gICAgICBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgICAgIHJldHVybiAxIC0gZWFzZUluKDEgLSBwKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGVhc2VJbk91dCA9PT0gdm9pZCAwKSB7XG4gICAgICBlYXNlSW5PdXQgPSBmdW5jdGlvbiBlYXNlSW5PdXQocCkge1xuICAgICAgICByZXR1cm4gcCA8IC41ID8gZWFzZUluKHAgKiAyKSAvIDIgOiAxIC0gZWFzZUluKCgxIC0gcCkgKiAyKSAvIDI7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBlYXNlID0ge1xuICAgICAgZWFzZUluOiBlYXNlSW4sXG4gICAgICBlYXNlT3V0OiBlYXNlT3V0LFxuICAgICAgZWFzZUluT3V0OiBlYXNlSW5PdXRcbiAgICB9LFxuICAgICAgICBsb3dlcmNhc2VOYW1lO1xuXG4gICAgX2ZvckVhY2hOYW1lKG5hbWVzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgX2Vhc2VNYXBbbmFtZV0gPSBfZ2xvYmFsc1tuYW1lXSA9IGVhc2U7XG4gICAgICBfZWFzZU1hcFtsb3dlcmNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpXSA9IGVhc2VPdXQ7XG5cbiAgICAgIGZvciAodmFyIHAgaW4gZWFzZSkge1xuICAgICAgICBfZWFzZU1hcFtsb3dlcmNhc2VOYW1lICsgKHAgPT09IFwiZWFzZUluXCIgPyBcIi5pblwiIDogcCA9PT0gXCJlYXNlT3V0XCIgPyBcIi5vdXRcIiA6IFwiLmluT3V0XCIpXSA9IF9lYXNlTWFwW25hbWUgKyBcIi5cIiArIHBdID0gZWFzZVtwXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlYXNlO1xuICB9LFxuICAgICAgX2Vhc2VJbk91dEZyb21PdXQgPSBmdW5jdGlvbiBfZWFzZUluT3V0RnJvbU91dChlYXNlT3V0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gcCA8IC41ID8gKDEgLSBlYXNlT3V0KDEgLSBwICogMikpIC8gMiA6IC41ICsgZWFzZU91dCgocCAtIC41KSAqIDIpIC8gMjtcbiAgICB9O1xuICB9LFxuICAgICAgX2NvbmZpZ0VsYXN0aWMgPSBmdW5jdGlvbiBfY29uZmlnRWxhc3RpYyh0eXBlLCBhbXBsaXR1ZGUsIHBlcmlvZCkge1xuICAgIHZhciBwMSA9IGFtcGxpdHVkZSA+PSAxID8gYW1wbGl0dWRlIDogMSxcbiAgICAgICAgcDIgPSAocGVyaW9kIHx8ICh0eXBlID8gLjMgOiAuNDUpKSAvIChhbXBsaXR1ZGUgPCAxID8gYW1wbGl0dWRlIDogMSksXG4gICAgICAgIHAzID0gcDIgLyBfMlBJICogKE1hdGguYXNpbigxIC8gcDEpIHx8IDApLFxuICAgICAgICBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgICByZXR1cm4gcCA9PT0gMSA/IDEgOiBwMSAqIE1hdGgucG93KDIsIC0xMCAqIHApICogX3NpbigocCAtIHAzKSAqIHAyKSArIDE7XG4gICAgfSxcbiAgICAgICAgZWFzZSA9IHR5cGUgPT09IFwib3V0XCIgPyBlYXNlT3V0IDogdHlwZSA9PT0gXCJpblwiID8gZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiAxIC0gZWFzZU91dCgxIC0gcCk7XG4gICAgfSA6IF9lYXNlSW5PdXRGcm9tT3V0KGVhc2VPdXQpO1xuXG4gICAgcDIgPSBfMlBJIC8gcDI7XG5cbiAgICBlYXNlLmNvbmZpZyA9IGZ1bmN0aW9uIChhbXBsaXR1ZGUsIHBlcmlvZCkge1xuICAgICAgcmV0dXJuIF9jb25maWdFbGFzdGljKHR5cGUsIGFtcGxpdHVkZSwgcGVyaW9kKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGVhc2U7XG4gIH0sXG4gICAgICBfY29uZmlnQmFjayA9IGZ1bmN0aW9uIF9jb25maWdCYWNrKHR5cGUsIG92ZXJzaG9vdCkge1xuICAgIGlmIChvdmVyc2hvb3QgPT09IHZvaWQgMCkge1xuICAgICAgb3ZlcnNob290ID0gMS43MDE1ODtcbiAgICB9XG5cbiAgICB2YXIgZWFzZU91dCA9IGZ1bmN0aW9uIGVhc2VPdXQocCkge1xuICAgICAgcmV0dXJuIHAgPyAtLXAgKiBwICogKChvdmVyc2hvb3QgKyAxKSAqIHAgKyBvdmVyc2hvb3QpICsgMSA6IDA7XG4gICAgfSxcbiAgICAgICAgZWFzZSA9IHR5cGUgPT09IFwib3V0XCIgPyBlYXNlT3V0IDogdHlwZSA9PT0gXCJpblwiID8gZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiAxIC0gZWFzZU91dCgxIC0gcCk7XG4gICAgfSA6IF9lYXNlSW5PdXRGcm9tT3V0KGVhc2VPdXQpO1xuXG4gICAgZWFzZS5jb25maWcgPSBmdW5jdGlvbiAob3ZlcnNob290KSB7XG4gICAgICByZXR1cm4gX2NvbmZpZ0JhY2sodHlwZSwgb3ZlcnNob290KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGVhc2U7XG4gIH07XG5cbiAgX2ZvckVhY2hOYW1lKFwiTGluZWFyLFF1YWQsQ3ViaWMsUXVhcnQsUXVpbnQsU3Ryb25nXCIsIGZ1bmN0aW9uIChuYW1lLCBpKSB7XG4gICAgdmFyIHBvd2VyID0gaSA8IDUgPyBpICsgMSA6IGk7XG5cbiAgICBfaW5zZXJ0RWFzZShuYW1lICsgXCIsUG93ZXJcIiArIChwb3dlciAtIDEpLCBpID8gZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBNYXRoLnBvdyhwLCBwb3dlcik7XG4gICAgfSA6IGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gcDtcbiAgICB9LCBmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIDEgLSBNYXRoLnBvdygxIC0gcCwgcG93ZXIpO1xuICAgIH0sIGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gcCA8IC41ID8gTWF0aC5wb3cocCAqIDIsIHBvd2VyKSAvIDIgOiAxIC0gTWF0aC5wb3coKDEgLSBwKSAqIDIsIHBvd2VyKSAvIDI7XG4gICAgfSk7XG4gIH0pO1xuXG4gIF9lYXNlTWFwLkxpbmVhci5lYXNlTm9uZSA9IF9lYXNlTWFwLm5vbmUgPSBfZWFzZU1hcC5MaW5lYXIuZWFzZUluO1xuXG4gIF9pbnNlcnRFYXNlKFwiRWxhc3RpY1wiLCBfY29uZmlnRWxhc3RpYyhcImluXCIpLCBfY29uZmlnRWxhc3RpYyhcIm91dFwiKSwgX2NvbmZpZ0VsYXN0aWMoKSk7XG5cbiAgKGZ1bmN0aW9uIChuLCBjKSB7XG4gICAgdmFyIG4xID0gMSAvIGMsXG4gICAgICAgIG4yID0gMiAqIG4xLFxuICAgICAgICBuMyA9IDIuNSAqIG4xLFxuICAgICAgICBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgICByZXR1cm4gcCA8IG4xID8gbiAqIHAgKiBwIDogcCA8IG4yID8gbiAqIE1hdGgucG93KHAgLSAxLjUgLyBjLCAyKSArIC43NSA6IHAgPCBuMyA/IG4gKiAocCAtPSAyLjI1IC8gYykgKiBwICsgLjkzNzUgOiBuICogTWF0aC5wb3cocCAtIDIuNjI1IC8gYywgMikgKyAuOTg0Mzc1O1xuICAgIH07XG5cbiAgICBfaW5zZXJ0RWFzZShcIkJvdW5jZVwiLCBmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIDEgLSBlYXNlT3V0KDEgLSBwKTtcbiAgICB9LCBlYXNlT3V0KTtcbiAgfSkoNy41NjI1LCAyLjc1KTtcblxuICBfaW5zZXJ0RWFzZShcIkV4cG9cIiwgZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCA/IE1hdGgucG93KDIsIDEwICogKHAgLSAxKSkgOiAwO1xuICB9KTtcblxuICBfaW5zZXJ0RWFzZShcIkNpcmNcIiwgZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gLShfc3FydCgxIC0gcCAqIHApIC0gMSk7XG4gIH0pO1xuXG4gIF9pbnNlcnRFYXNlKFwiU2luZVwiLCBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwID09PSAxID8gMSA6IC1fY29zKHAgKiBfSEFMRl9QSSkgKyAxO1xuICB9KTtcblxuICBfaW5zZXJ0RWFzZShcIkJhY2tcIiwgX2NvbmZpZ0JhY2soXCJpblwiKSwgX2NvbmZpZ0JhY2soXCJvdXRcIiksIF9jb25maWdCYWNrKCkpO1xuXG4gIF9lYXNlTWFwLlN0ZXBwZWRFYXNlID0gX2Vhc2VNYXAuc3RlcHMgPSBfZ2xvYmFscy5TdGVwcGVkRWFzZSA9IHtcbiAgICBjb25maWc6IGZ1bmN0aW9uIGNvbmZpZyhzdGVwcywgaW1tZWRpYXRlU3RhcnQpIHtcbiAgICAgIGlmIChzdGVwcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHN0ZXBzID0gMTtcbiAgICAgIH1cblxuICAgICAgdmFyIHAxID0gMSAvIHN0ZXBzLFxuICAgICAgICAgIHAyID0gc3RlcHMgKyAoaW1tZWRpYXRlU3RhcnQgPyAwIDogMSksXG4gICAgICAgICAgcDMgPSBpbW1lZGlhdGVTdGFydCA/IDEgOiAwLFxuICAgICAgICAgIG1heCA9IDEgLSBfdGlueU51bTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgICAgICByZXR1cm4gKChwMiAqIF9jbGFtcCgwLCBtYXgsIHApIHwgMCkgKyBwMykgKiBwMTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xuICBfZGVmYXVsdHMuZWFzZSA9IF9lYXNlTWFwW1wicXVhZC5vdXRcIl07XG5cbiAgX2ZvckVhY2hOYW1lKFwib25Db21wbGV0ZSxvblVwZGF0ZSxvblN0YXJ0LG9uUmVwZWF0LG9uUmV2ZXJzZUNvbXBsZXRlLG9uSW50ZXJydXB0XCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIF9jYWxsYmFja05hbWVzICs9IG5hbWUgKyBcIixcIiArIG5hbWUgKyBcIlBhcmFtcyxcIjtcbiAgfSk7XG5cbiAgdmFyIEdTQ2FjaGUgPSBmdW5jdGlvbiBHU0NhY2hlKHRhcmdldCwgaGFybmVzcykge1xuICAgIHRoaXMuaWQgPSBfZ3NJRCsrO1xuICAgIHRhcmdldC5fZ3NhcCA9IHRoaXM7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy5oYXJuZXNzID0gaGFybmVzcztcbiAgICB0aGlzLmdldCA9IGhhcm5lc3MgPyBoYXJuZXNzLmdldCA6IF9nZXRQcm9wZXJ0eTtcbiAgICB0aGlzLnNldCA9IGhhcm5lc3MgPyBoYXJuZXNzLmdldFNldHRlciA6IF9nZXRTZXR0ZXI7XG4gIH07XG4gIHZhciBBbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uKHZhcnMsIHRpbWUpIHtcbiAgICAgIHZhciBwYXJlbnQgPSB2YXJzLnBhcmVudCB8fCBfZ2xvYmFsVGltZWxpbmU7XG4gICAgICB0aGlzLnZhcnMgPSB2YXJzO1xuICAgICAgdGhpcy5fZGVsYXkgPSArdmFycy5kZWxheSB8fCAwO1xuXG4gICAgICBpZiAodGhpcy5fcmVwZWF0ID0gdmFycy5yZXBlYXQgfHwgMCkge1xuICAgICAgICB0aGlzLl9yRGVsYXkgPSB2YXJzLnJlcGVhdERlbGF5IHx8IDA7XG4gICAgICAgIHRoaXMuX3lveW8gPSAhIXZhcnMueW95byB8fCAhIXZhcnMueW95b0Vhc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3RzID0gMTtcblxuICAgICAgX3NldER1cmF0aW9uKHRoaXMsICt2YXJzLmR1cmF0aW9uLCAxLCAxKTtcblxuICAgICAgdGhpcy5kYXRhID0gdmFycy5kYXRhO1xuICAgICAgX3RpY2tlckFjdGl2ZSB8fCBfdGlja2VyLndha2UoKTtcbiAgICAgIHBhcmVudCAmJiBfYWRkVG9UaW1lbGluZShwYXJlbnQsIHRoaXMsIHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBwYXJlbnQuX3RpbWUsIDEpO1xuICAgICAgdmFycy5yZXZlcnNlZCAmJiB0aGlzLnJldmVyc2UoKTtcbiAgICAgIHZhcnMucGF1c2VkICYmIHRoaXMucGF1c2VkKHRydWUpO1xuICAgIH1cblxuICAgIHZhciBfcHJvdG8gPSBBbmltYXRpb24ucHJvdG90eXBlO1xuXG4gICAgX3Byb3RvLmRlbGF5ID0gZnVuY3Rpb24gZGVsYXkodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMCkge1xuICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyAmJiB0aGlzLnN0YXJ0VGltZSh0aGlzLl9zdGFydCArIHZhbHVlIC0gdGhpcy5fZGVsYXkpO1xuICAgICAgICB0aGlzLl9kZWxheSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2RlbGF5O1xuICAgIH07XG5cbiAgICBfcHJvdG8uZHVyYXRpb24gPSBmdW5jdGlvbiBkdXJhdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsRHVyYXRpb24odGhpcy5fcmVwZWF0ID4gMCA/IHZhbHVlICsgKHZhbHVlICsgdGhpcy5fckRlbGF5KSAqIHRoaXMuX3JlcGVhdCA6IHZhbHVlKSA6IHRoaXMudG90YWxEdXJhdGlvbigpICYmIHRoaXMuX2R1cjtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbiB0b3RhbER1cmF0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3REdXI7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2RpcnR5ID0gMDtcbiAgICAgIHJldHVybiBfc2V0RHVyYXRpb24odGhpcywgdGhpcy5fcmVwZWF0IDwgMCA/IHZhbHVlIDogKHZhbHVlIC0gdGhpcy5fcmVwZWF0ICogdGhpcy5fckRlbGF5KSAvICh0aGlzLl9yZXBlYXQgKyAxKSk7XG4gICAgfTtcblxuICAgIF9wcm90by50b3RhbFRpbWUgPSBmdW5jdGlvbiB0b3RhbFRpbWUoX3RvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgIF93YWtlKCk7XG5cbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdFRpbWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzLl9kcDtcblxuICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcgJiYgdGhpcy5fdHMpIHtcbiAgICAgICAgX2FsaWduUGxheWhlYWQodGhpcywgX3RvdGFsVGltZSk7XG5cbiAgICAgICAgd2hpbGUgKHBhcmVudC5wYXJlbnQpIHtcbiAgICAgICAgICBpZiAocGFyZW50LnBhcmVudC5fdGltZSAhPT0gcGFyZW50Ll9zdGFydCArIChwYXJlbnQuX3RzID49IDAgPyBwYXJlbnQuX3RUaW1lIC8gcGFyZW50Ll90cyA6IChwYXJlbnQudG90YWxEdXJhdGlvbigpIC0gcGFyZW50Ll90VGltZSkgLyAtcGFyZW50Ll90cykpIHtcbiAgICAgICAgICAgIHBhcmVudC50b3RhbFRpbWUocGFyZW50Ll90VGltZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5wYXJlbnQgJiYgdGhpcy5fZHAuYXV0b1JlbW92ZUNoaWxkcmVuICYmICh0aGlzLl90cyA+IDAgJiYgX3RvdGFsVGltZSA8IHRoaXMuX3REdXIgfHwgdGhpcy5fdHMgPCAwICYmIF90b3RhbFRpbWUgPiAwIHx8ICF0aGlzLl90RHVyICYmICFfdG90YWxUaW1lKSkge1xuICAgICAgICAgIF9hZGRUb1RpbWVsaW5lKHRoaXMuX2RwLCB0aGlzLCB0aGlzLl9zdGFydCAtIHRoaXMuX2RlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fdFRpbWUgIT09IF90b3RhbFRpbWUgfHwgIXRoaXMuX2R1ciAmJiAhc3VwcHJlc3NFdmVudHMgfHwgdGhpcy5faW5pdHRlZCAmJiBNYXRoLmFicyh0aGlzLl96VGltZSkgPT09IF90aW55TnVtIHx8ICFfdG90YWxUaW1lICYmICF0aGlzLl9pbml0dGVkICYmICh0aGlzLmFkZCB8fCB0aGlzLl9wdExvb2t1cCkpIHtcbiAgICAgICAgdGhpcy5fdHMgfHwgKHRoaXMuX3BUaW1lID0gX3RvdGFsVGltZSk7XG5cbiAgICAgICAgX2xhenlTYWZlUmVuZGVyKHRoaXMsIF90b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIF9wcm90by50aW1lID0gZnVuY3Rpb24gdGltZSh2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbFRpbWUoTWF0aC5taW4odGhpcy50b3RhbER1cmF0aW9uKCksIHZhbHVlICsgX2VsYXBzZWRDeWNsZUR1cmF0aW9uKHRoaXMpKSAlIHRoaXMuX2R1ciB8fCAodmFsdWUgPyB0aGlzLl9kdXIgOiAwKSwgc3VwcHJlc3NFdmVudHMpIDogdGhpcy5fdGltZTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnRvdGFsUHJvZ3Jlc3MgPSBmdW5jdGlvbiB0b3RhbFByb2dyZXNzKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsVGltZSh0aGlzLnRvdGFsRHVyYXRpb24oKSAqIHZhbHVlLCBzdXBwcmVzc0V2ZW50cykgOiB0aGlzLnRvdGFsRHVyYXRpb24oKSA/IE1hdGgubWluKDEsIHRoaXMuX3RUaW1lIC8gdGhpcy5fdER1cikgOiB0aGlzLnJhdGlvO1xuICAgIH07XG5cbiAgICBfcHJvdG8ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBwcm9ncmVzcyh2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbFRpbWUodGhpcy5kdXJhdGlvbigpICogKHRoaXMuX3lveW8gJiYgISh0aGlzLml0ZXJhdGlvbigpICYgMSkgPyAxIC0gdmFsdWUgOiB2YWx1ZSkgKyBfZWxhcHNlZEN5Y2xlRHVyYXRpb24odGhpcyksIHN1cHByZXNzRXZlbnRzKSA6IHRoaXMuZHVyYXRpb24oKSA/IE1hdGgubWluKDEsIHRoaXMuX3RpbWUgLyB0aGlzLl9kdXIpIDogdGhpcy5yYXRpbztcbiAgICB9O1xuXG4gICAgX3Byb3RvLml0ZXJhdGlvbiA9IGZ1bmN0aW9uIGl0ZXJhdGlvbih2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgIHZhciBjeWNsZUR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbigpICsgdGhpcy5fckRlbGF5O1xuXG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxUaW1lKHRoaXMuX3RpbWUgKyAodmFsdWUgLSAxKSAqIGN5Y2xlRHVyYXRpb24sIHN1cHByZXNzRXZlbnRzKSA6IHRoaXMuX3JlcGVhdCA/IF9hbmltYXRpb25DeWNsZSh0aGlzLl90VGltZSwgY3ljbGVEdXJhdGlvbikgKyAxIDogMTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnRpbWVTY2FsZSA9IGZ1bmN0aW9uIHRpbWVTY2FsZSh2YWx1ZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ydHMgPT09IC1fdGlueU51bSA/IDAgOiB0aGlzLl9ydHM7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ydHMgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgdFRpbWUgPSB0aGlzLnBhcmVudCAmJiB0aGlzLl90cyA/IF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHRoaXMucGFyZW50Ll90aW1lLCB0aGlzKSA6IHRoaXMuX3RUaW1lO1xuICAgICAgdGhpcy5fcnRzID0gK3ZhbHVlIHx8IDA7XG4gICAgICB0aGlzLl90cyA9IHRoaXMuX3BzIHx8IHZhbHVlID09PSAtX3RpbnlOdW0gPyAwIDogdGhpcy5fcnRzO1xuICAgICAgcmV0dXJuIF9yZWNhY2hlQW5jZXN0b3JzKHRoaXMudG90YWxUaW1lKF9jbGFtcCgtdGhpcy5fZGVsYXksIHRoaXMuX3REdXIsIHRUaW1lKSwgdHJ1ZSkpO1xuICAgIH07XG5cbiAgICBfcHJvdG8ucGF1c2VkID0gZnVuY3Rpb24gcGF1c2VkKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BzO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcHMgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3BzID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fcFRpbWUgPSB0aGlzLl90VGltZSB8fCBNYXRoLm1heCgtdGhpcy5fZGVsYXksIHRoaXMucmF3VGltZSgpKTtcbiAgICAgICAgICB0aGlzLl90cyA9IHRoaXMuX2FjdCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3dha2UoKTtcblxuICAgICAgICAgIHRoaXMuX3RzID0gdGhpcy5fcnRzO1xuICAgICAgICAgIHRoaXMudG90YWxUaW1lKHRoaXMucGFyZW50ICYmICF0aGlzLnBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyA/IHRoaXMucmF3VGltZSgpIDogdGhpcy5fdFRpbWUgfHwgdGhpcy5fcFRpbWUsIHRoaXMucHJvZ3Jlc3MoKSA9PT0gMSAmJiAodGhpcy5fdFRpbWUgLT0gX3RpbnlOdW0pICYmIE1hdGguYWJzKHRoaXMuX3pUaW1lKSAhPT0gX3RpbnlOdW0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc3RhcnRUaW1lID0gZnVuY3Rpb24gc3RhcnRUaW1lKHZhbHVlKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9zdGFydCA9IHZhbHVlO1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5fZHA7XG4gICAgICAgIHBhcmVudCAmJiAocGFyZW50Ll9zb3J0IHx8ICF0aGlzLnBhcmVudCkgJiYgX2FkZFRvVGltZWxpbmUocGFyZW50LCB0aGlzLCB2YWx1ZSAtIHRoaXMuX2RlbGF5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9zdGFydDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmVuZFRpbWUgPSBmdW5jdGlvbiBlbmRUaW1lKGluY2x1ZGVSZXBlYXRzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhcnQgKyAoX2lzTm90RmFsc2UoaW5jbHVkZVJlcGVhdHMpID8gdGhpcy50b3RhbER1cmF0aW9uKCkgOiB0aGlzLmR1cmF0aW9uKCkpIC8gTWF0aC5hYnModGhpcy5fdHMpO1xuICAgIH07XG5cbiAgICBfcHJvdG8ucmF3VGltZSA9IGZ1bmN0aW9uIHJhd1RpbWUod3JhcFJlcGVhdHMpIHtcbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLl9kcDtcbiAgICAgIHJldHVybiAhcGFyZW50ID8gdGhpcy5fdFRpbWUgOiB3cmFwUmVwZWF0cyAmJiAoIXRoaXMuX3RzIHx8IHRoaXMuX3JlcGVhdCAmJiB0aGlzLl90aW1lICYmIHRoaXMudG90YWxQcm9ncmVzcygpIDwgMSkgPyB0aGlzLl90VGltZSAlICh0aGlzLl9kdXIgKyB0aGlzLl9yRGVsYXkpIDogIXRoaXMuX3RzID8gdGhpcy5fdFRpbWUgOiBfcGFyZW50VG9DaGlsZFRvdGFsVGltZShwYXJlbnQucmF3VGltZSh3cmFwUmVwZWF0cyksIHRoaXMpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZ2xvYmFsVGltZSA9IGZ1bmN0aW9uIGdsb2JhbFRpbWUocmF3VGltZSkge1xuICAgICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMsXG4gICAgICAgICAgdGltZSA9IGFyZ3VtZW50cy5sZW5ndGggPyByYXdUaW1lIDogYW5pbWF0aW9uLnJhd1RpbWUoKTtcblxuICAgICAgd2hpbGUgKGFuaW1hdGlvbikge1xuICAgICAgICB0aW1lID0gYW5pbWF0aW9uLl9zdGFydCArIHRpbWUgLyAoYW5pbWF0aW9uLl90cyB8fCAxKTtcbiAgICAgICAgYW5pbWF0aW9uID0gYW5pbWF0aW9uLl9kcDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRpbWU7XG4gICAgfTtcblxuICAgIF9wcm90by5yZXBlYXQgPSBmdW5jdGlvbiByZXBlYXQodmFsdWUpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3JlcGVhdCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gX29uVXBkYXRlVG90YWxEdXJhdGlvbih0aGlzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3JlcGVhdDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnJlcGVhdERlbGF5ID0gZnVuY3Rpb24gcmVwZWF0RGVsYXkodmFsdWUpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3JEZWxheSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gX29uVXBkYXRlVG90YWxEdXJhdGlvbih0aGlzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3JEZWxheTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnlveW8gPSBmdW5jdGlvbiB5b3lvKHZhbHVlKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl95b3lvID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5feW95bztcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNlZWsgPSBmdW5jdGlvbiBzZWVrKHBvc2l0aW9uLCBzdXBwcmVzc0V2ZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMudG90YWxUaW1lKF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSwgX2lzTm90RmFsc2Uoc3VwcHJlc3NFdmVudHMpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnJlc3RhcnQgPSBmdW5jdGlvbiByZXN0YXJ0KGluY2x1ZGVEZWxheSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnBsYXkoKS50b3RhbFRpbWUoaW5jbHVkZURlbGF5ID8gLXRoaXMuX2RlbGF5IDogMCwgX2lzTm90RmFsc2Uoc3VwcHJlc3NFdmVudHMpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnBsYXkgPSBmdW5jdGlvbiBwbGF5KGZyb20sIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgICBmcm9tICE9IG51bGwgJiYgdGhpcy5zZWVrKGZyb20sIHN1cHByZXNzRXZlbnRzKTtcbiAgICAgIHJldHVybiB0aGlzLnJldmVyc2VkKGZhbHNlKS5wYXVzZWQoZmFsc2UpO1xuICAgIH07XG5cbiAgICBfcHJvdG8ucmV2ZXJzZSA9IGZ1bmN0aW9uIHJldmVyc2UoZnJvbSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgIGZyb20gIT0gbnVsbCAmJiB0aGlzLnNlZWsoZnJvbSB8fCB0aGlzLnRvdGFsRHVyYXRpb24oKSwgc3VwcHJlc3NFdmVudHMpO1xuICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZWQodHJ1ZSkucGF1c2VkKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnBhdXNlID0gZnVuY3Rpb24gcGF1c2UoYXRUaW1lLCBzdXBwcmVzc0V2ZW50cykge1xuICAgICAgYXRUaW1lICE9IG51bGwgJiYgdGhpcy5zZWVrKGF0VGltZSwgc3VwcHJlc3NFdmVudHMpO1xuICAgICAgcmV0dXJuIHRoaXMucGF1c2VkKHRydWUpO1xuICAgIH07XG5cbiAgICBfcHJvdG8ucmVzdW1lID0gZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgICAgcmV0dXJuIHRoaXMucGF1c2VkKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnJldmVyc2VkID0gZnVuY3Rpb24gcmV2ZXJzZWQodmFsdWUpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICEhdmFsdWUgIT09IHRoaXMucmV2ZXJzZWQoKSAmJiB0aGlzLnRpbWVTY2FsZSgtdGhpcy5fcnRzIHx8ICh2YWx1ZSA/IC1fdGlueU51bSA6IDApKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9ydHMgPCAwO1xuICAgIH07XG5cbiAgICBfcHJvdG8uaW52YWxpZGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRhdGUoKSB7XG4gICAgICB0aGlzLl9pbml0dGVkID0gMDtcbiAgICAgIHRoaXMuX3pUaW1lID0gLV90aW55TnVtO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIF9wcm90by5pc0FjdGl2ZSA9IGZ1bmN0aW9uIGlzQWN0aXZlKCkge1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuX2RwLFxuICAgICAgICAgIHN0YXJ0ID0gdGhpcy5fc3RhcnQsXG4gICAgICAgICAgcmF3VGltZTtcbiAgICAgIHJldHVybiAhISghcGFyZW50IHx8IHRoaXMuX3RzICYmIHRoaXMuX2luaXR0ZWQgJiYgcGFyZW50LmlzQWN0aXZlKCkgJiYgKHJhd1RpbWUgPSBwYXJlbnQucmF3VGltZSh0cnVlKSkgPj0gc3RhcnQgJiYgcmF3VGltZSA8IHRoaXMuZW5kVGltZSh0cnVlKSAtIF90aW55TnVtKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmV2ZW50Q2FsbGJhY2sgPSBmdW5jdGlvbiBldmVudENhbGxiYWNrKHR5cGUsIGNhbGxiYWNrLCBwYXJhbXMpIHtcbiAgICAgIHZhciB2YXJzID0gdGhpcy52YXJzO1xuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgIGRlbGV0ZSB2YXJzW3R5cGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhcnNbdHlwZV0gPSBjYWxsYmFjaztcbiAgICAgICAgICBwYXJhbXMgJiYgKHZhcnNbdHlwZSArIFwiUGFyYW1zXCJdID0gcGFyYW1zKTtcbiAgICAgICAgICB0eXBlID09PSBcIm9uVXBkYXRlXCIgJiYgKHRoaXMuX29uVXBkYXRlID0gY2FsbGJhY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YXJzW3R5cGVdO1xuICAgIH07XG5cbiAgICBfcHJvdG8udGhlbiA9IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICB2YXIgZiA9IF9pc0Z1bmN0aW9uKG9uRnVsZmlsbGVkKSA/IG9uRnVsZmlsbGVkIDogX3Bhc3NUaHJvdWdoLFxuICAgICAgICAgICAgX3Jlc29sdmUgPSBmdW5jdGlvbiBfcmVzb2x2ZSgpIHtcbiAgICAgICAgICB2YXIgX3RoZW4gPSBzZWxmLnRoZW47XG4gICAgICAgICAgc2VsZi50aGVuID0gbnVsbDtcbiAgICAgICAgICBfaXNGdW5jdGlvbihmKSAmJiAoZiA9IGYoc2VsZikpICYmIChmLnRoZW4gfHwgZiA9PT0gc2VsZikgJiYgKHNlbGYudGhlbiA9IF90aGVuKTtcbiAgICAgICAgICByZXNvbHZlKGYpO1xuICAgICAgICAgIHNlbGYudGhlbiA9IF90aGVuO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChzZWxmLl9pbml0dGVkICYmIHNlbGYudG90YWxQcm9ncmVzcygpID09PSAxICYmIHNlbGYuX3RzID49IDAgfHwgIXNlbGYuX3RUaW1lICYmIHNlbGYuX3RzIDwgMCkge1xuICAgICAgICAgIF9yZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5fcHJvbSA9IF9yZXNvbHZlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmtpbGwgPSBmdW5jdGlvbiBraWxsKCkge1xuICAgICAgX2ludGVycnVwdCh0aGlzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFuaW1hdGlvbjtcbiAgfSgpO1xuXG4gIF9zZXREZWZhdWx0cyhBbmltYXRpb24ucHJvdG90eXBlLCB7XG4gICAgX3RpbWU6IDAsXG4gICAgX3N0YXJ0OiAwLFxuICAgIF9lbmQ6IDAsXG4gICAgX3RUaW1lOiAwLFxuICAgIF90RHVyOiAwLFxuICAgIF9kaXJ0eTogMCxcbiAgICBfcmVwZWF0OiAwLFxuICAgIF95b3lvOiBmYWxzZSxcbiAgICBwYXJlbnQ6IG51bGwsXG4gICAgX2luaXR0ZWQ6IGZhbHNlLFxuICAgIF9yRGVsYXk6IDAsXG4gICAgX3RzOiAxLFxuICAgIF9kcDogMCxcbiAgICByYXRpbzogMCxcbiAgICBfelRpbWU6IC1fdGlueU51bSxcbiAgICBfcHJvbTogMCxcbiAgICBfcHM6IGZhbHNlLFxuICAgIF9ydHM6IDFcbiAgfSk7XG5cbiAgdmFyIFRpbWVsaW5lID0gZnVuY3Rpb24gKF9BbmltYXRpb24pIHtcbiAgICBfaW5oZXJpdHNMb29zZShUaW1lbGluZSwgX0FuaW1hdGlvbik7XG5cbiAgICBmdW5jdGlvbiBUaW1lbGluZSh2YXJzLCB0aW1lKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIGlmICh2YXJzID09PSB2b2lkIDApIHtcbiAgICAgICAgdmFycyA9IHt9O1xuICAgICAgfVxuXG4gICAgICBfdGhpcyA9IF9BbmltYXRpb24uY2FsbCh0aGlzLCB2YXJzLCB0aW1lKSB8fCB0aGlzO1xuICAgICAgX3RoaXMubGFiZWxzID0ge307XG4gICAgICBfdGhpcy5zbW9vdGhDaGlsZFRpbWluZyA9ICEhdmFycy5zbW9vdGhDaGlsZFRpbWluZztcbiAgICAgIF90aGlzLmF1dG9SZW1vdmVDaGlsZHJlbiA9ICEhdmFycy5hdXRvUmVtb3ZlQ2hpbGRyZW47XG4gICAgICBfdGhpcy5fc29ydCA9IF9pc05vdEZhbHNlKHZhcnMuc29ydENoaWxkcmVuKTtcbiAgICAgIF90aGlzLnBhcmVudCAmJiBfcG9zdEFkZENoZWNrcyhfdGhpcy5wYXJlbnQsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICAgIHZhcnMuc2Nyb2xsVHJpZ2dlciAmJiBfc2Nyb2xsVHJpZ2dlcihfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgdmFycy5zY3JvbGxUcmlnZ2VyKTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICB2YXIgX3Byb3RvMiA9IFRpbWVsaW5lLnByb3RvdHlwZTtcblxuICAgIF9wcm90bzIudG8gPSBmdW5jdGlvbiB0byh0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbikge1xuICAgICAgbmV3IFR3ZWVuKHRhcmdldHMsIF9wYXJzZVZhcnMoYXJndW1lbnRzLCAwLCB0aGlzKSwgX3BhcnNlUG9zaXRpb24odGhpcywgX2lzTnVtYmVyKHZhcnMpID8gYXJndW1lbnRzWzNdIDogcG9zaXRpb24pKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLmZyb20gPSBmdW5jdGlvbiBmcm9tKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgICBuZXcgVHdlZW4odGFyZ2V0cywgX3BhcnNlVmFycyhhcmd1bWVudHMsIDEsIHRoaXMpLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBfaXNOdW1iZXIodmFycykgPyBhcmd1bWVudHNbM10gOiBwb3NpdGlvbikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIF9wcm90bzIuZnJvbVRvID0gZnVuY3Rpb24gZnJvbVRvKHRhcmdldHMsIGZyb21WYXJzLCB0b1ZhcnMsIHBvc2l0aW9uKSB7XG4gICAgICBuZXcgVHdlZW4odGFyZ2V0cywgX3BhcnNlVmFycyhhcmd1bWVudHMsIDIsIHRoaXMpLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBfaXNOdW1iZXIoZnJvbVZhcnMpID8gYXJndW1lbnRzWzRdIDogcG9zaXRpb24pKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLnNldCA9IGZ1bmN0aW9uIHNldCh0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbikge1xuICAgICAgdmFycy5kdXJhdGlvbiA9IDA7XG4gICAgICB2YXJzLnBhcmVudCA9IHRoaXM7XG4gICAgICBfaW5oZXJpdERlZmF1bHRzKHZhcnMpLnJlcGVhdERlbGF5IHx8ICh2YXJzLnJlcGVhdCA9IDApO1xuICAgICAgdmFycy5pbW1lZGlhdGVSZW5kZXIgPSAhIXZhcnMuaW1tZWRpYXRlUmVuZGVyO1xuICAgICAgbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSwgMSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgX3Byb3RvMi5jYWxsID0gZnVuY3Rpb24gY2FsbChjYWxsYmFjaywgcGFyYW1zLCBwb3NpdGlvbikge1xuICAgICAgcmV0dXJuIF9hZGRUb1RpbWVsaW5lKHRoaXMsIFR3ZWVuLmRlbGF5ZWRDYWxsKDAsIGNhbGxiYWNrLCBwYXJhbXMpLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbikpO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLnN0YWdnZXJUbyA9IGZ1bmN0aW9uIHN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpIHtcbiAgICAgIHZhcnMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgIHZhcnMuc3RhZ2dlciA9IHZhcnMuc3RhZ2dlciB8fCBzdGFnZ2VyO1xuICAgICAgdmFycy5vbkNvbXBsZXRlID0gb25Db21wbGV0ZUFsbDtcbiAgICAgIHZhcnMub25Db21wbGV0ZVBhcmFtcyA9IG9uQ29tcGxldGVBbGxQYXJhbXM7XG4gICAgICB2YXJzLnBhcmVudCA9IHRoaXM7XG4gICAgICBuZXcgVHdlZW4odGFyZ2V0cywgdmFycywgX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLnN0YWdnZXJGcm9tID0gZnVuY3Rpb24gc3RhZ2dlckZyb20odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKSB7XG4gICAgICB2YXJzLnJ1bkJhY2t3YXJkcyA9IDE7XG4gICAgICBfaW5oZXJpdERlZmF1bHRzKHZhcnMpLmltbWVkaWF0ZVJlbmRlciA9IF9pc05vdEZhbHNlKHZhcnMuaW1tZWRpYXRlUmVuZGVyKTtcbiAgICAgIHJldHVybiB0aGlzLnN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLnN0YWdnZXJGcm9tVG8gPSBmdW5jdGlvbiBzdGFnZ2VyRnJvbVRvKHRhcmdldHMsIGR1cmF0aW9uLCBmcm9tVmFycywgdG9WYXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcykge1xuICAgICAgdG9WYXJzLnN0YXJ0QXQgPSBmcm9tVmFycztcbiAgICAgIF9pbmhlcml0RGVmYXVsdHModG9WYXJzKS5pbW1lZGlhdGVSZW5kZXIgPSBfaXNOb3RGYWxzZSh0b1ZhcnMuaW1tZWRpYXRlUmVuZGVyKTtcbiAgICAgIHJldHVybiB0aGlzLnN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdG9WYXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcyk7XG4gICAgfTtcblxuICAgIF9wcm90bzIucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gICAgICB2YXIgcHJldlRpbWUgPSB0aGlzLl90aW1lLFxuICAgICAgICAgIHREdXIgPSB0aGlzLl9kaXJ0eSA/IHRoaXMudG90YWxEdXJhdGlvbigpIDogdGhpcy5fdER1cixcbiAgICAgICAgICBkdXIgPSB0aGlzLl9kdXIsXG4gICAgICAgICAgdFRpbWUgPSB0aGlzICE9PSBfZ2xvYmFsVGltZWxpbmUgJiYgdG90YWxUaW1lID4gdER1ciAtIF90aW55TnVtICYmIHRvdGFsVGltZSA+PSAwID8gdER1ciA6IHRvdGFsVGltZSA8IF90aW55TnVtID8gMCA6IHRvdGFsVGltZSxcbiAgICAgICAgICBjcm9zc2luZ1N0YXJ0ID0gdGhpcy5felRpbWUgPCAwICE9PSB0b3RhbFRpbWUgPCAwICYmICh0aGlzLl9pbml0dGVkIHx8ICFkdXIpLFxuICAgICAgICAgIHRpbWUsXG4gICAgICAgICAgY2hpbGQsXG4gICAgICAgICAgbmV4dCxcbiAgICAgICAgICBpdGVyYXRpb24sXG4gICAgICAgICAgY3ljbGVEdXJhdGlvbixcbiAgICAgICAgICBwcmV2UGF1c2VkLFxuICAgICAgICAgIHBhdXNlVHdlZW4sXG4gICAgICAgICAgdGltZVNjYWxlLFxuICAgICAgICAgIHByZXZTdGFydCxcbiAgICAgICAgICBwcmV2SXRlcmF0aW9uLFxuICAgICAgICAgIHlveW8sXG4gICAgICAgICAgaXNZb3lvO1xuXG4gICAgICBpZiAodFRpbWUgIT09IHRoaXMuX3RUaW1lIHx8IGZvcmNlIHx8IGNyb3NzaW5nU3RhcnQpIHtcbiAgICAgICAgaWYgKHByZXZUaW1lICE9PSB0aGlzLl90aW1lICYmIGR1cikge1xuICAgICAgICAgIHRUaW1lICs9IHRoaXMuX3RpbWUgLSBwcmV2VGltZTtcbiAgICAgICAgICB0b3RhbFRpbWUgKz0gdGhpcy5fdGltZSAtIHByZXZUaW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdGltZSA9IHRUaW1lO1xuICAgICAgICBwcmV2U3RhcnQgPSB0aGlzLl9zdGFydDtcbiAgICAgICAgdGltZVNjYWxlID0gdGhpcy5fdHM7XG4gICAgICAgIHByZXZQYXVzZWQgPSAhdGltZVNjYWxlO1xuXG4gICAgICAgIGlmIChjcm9zc2luZ1N0YXJ0KSB7XG4gICAgICAgICAgZHVyIHx8IChwcmV2VGltZSA9IHRoaXMuX3pUaW1lKTtcbiAgICAgICAgICAodG90YWxUaW1lIHx8ICFzdXBwcmVzc0V2ZW50cykgJiYgKHRoaXMuX3pUaW1lID0gdG90YWxUaW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9yZXBlYXQpIHtcbiAgICAgICAgICB5b3lvID0gdGhpcy5feW95bztcbiAgICAgICAgICBjeWNsZUR1cmF0aW9uID0gZHVyICsgdGhpcy5fckRlbGF5O1xuICAgICAgICAgIHRpbWUgPSBfcm91bmQodFRpbWUgJSBjeWNsZUR1cmF0aW9uKTtcblxuICAgICAgICAgIGlmICh0VGltZSA9PT0gdER1cikge1xuICAgICAgICAgICAgaXRlcmF0aW9uID0gdGhpcy5fcmVwZWF0O1xuICAgICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlcmF0aW9uID0gfn4odFRpbWUgLyBjeWNsZUR1cmF0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGl0ZXJhdGlvbiAmJiBpdGVyYXRpb24gPT09IHRUaW1lIC8gY3ljbGVEdXJhdGlvbikge1xuICAgICAgICAgICAgICB0aW1lID0gZHVyO1xuICAgICAgICAgICAgICBpdGVyYXRpb24tLTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGltZSA+IGR1ciAmJiAodGltZSA9IGR1cik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcHJldkl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0aGlzLl90VGltZSwgY3ljbGVEdXJhdGlvbik7XG4gICAgICAgICAgIXByZXZUaW1lICYmIHRoaXMuX3RUaW1lICYmIHByZXZJdGVyYXRpb24gIT09IGl0ZXJhdGlvbiAmJiAocHJldkl0ZXJhdGlvbiA9IGl0ZXJhdGlvbik7XG5cbiAgICAgICAgICBpZiAoeW95byAmJiBpdGVyYXRpb24gJiAxKSB7XG4gICAgICAgICAgICB0aW1lID0gZHVyIC0gdGltZTtcbiAgICAgICAgICAgIGlzWW95byA9IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGl0ZXJhdGlvbiAhPT0gcHJldkl0ZXJhdGlvbiAmJiAhdGhpcy5fbG9jaykge1xuICAgICAgICAgICAgdmFyIHJld2luZGluZyA9IHlveW8gJiYgcHJldkl0ZXJhdGlvbiAmIDEsXG4gICAgICAgICAgICAgICAgZG9lc1dyYXAgPSByZXdpbmRpbmcgPT09ICh5b3lvICYmIGl0ZXJhdGlvbiAmIDEpO1xuICAgICAgICAgICAgaXRlcmF0aW9uIDwgcHJldkl0ZXJhdGlvbiAmJiAocmV3aW5kaW5nID0gIXJld2luZGluZyk7XG4gICAgICAgICAgICBwcmV2VGltZSA9IHJld2luZGluZyA/IDAgOiBkdXI7XG4gICAgICAgICAgICB0aGlzLl9sb2NrID0gMTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKHByZXZUaW1lIHx8IChpc1lveW8gPyAwIDogX3JvdW5kKGl0ZXJhdGlvbiAqIGN5Y2xlRHVyYXRpb24pKSwgc3VwcHJlc3NFdmVudHMsICFkdXIpLl9sb2NrID0gMDtcbiAgICAgICAgICAgICFzdXBwcmVzc0V2ZW50cyAmJiB0aGlzLnBhcmVudCAmJiBfY2FsbGJhY2sodGhpcywgXCJvblJlcGVhdFwiKTtcbiAgICAgICAgICAgIHRoaXMudmFycy5yZXBlYXRSZWZyZXNoICYmICFpc1lveW8gJiYgKHRoaXMuaW52YWxpZGF0ZSgpLl9sb2NrID0gMSk7XG5cbiAgICAgICAgICAgIGlmIChwcmV2VGltZSAhPT0gdGhpcy5fdGltZSB8fCBwcmV2UGF1c2VkICE9PSAhdGhpcy5fdHMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGR1ciA9IHRoaXMuX2R1cjtcbiAgICAgICAgICAgIHREdXIgPSB0aGlzLl90RHVyO1xuXG4gICAgICAgICAgICBpZiAoZG9lc1dyYXApIHtcbiAgICAgICAgICAgICAgdGhpcy5fbG9jayA9IDI7XG4gICAgICAgICAgICAgIHByZXZUaW1lID0gcmV3aW5kaW5nID8gZHVyIDogLTAuMDAwMTtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXIocHJldlRpbWUsIHRydWUpO1xuICAgICAgICAgICAgICB0aGlzLnZhcnMucmVwZWF0UmVmcmVzaCAmJiAhaXNZb3lvICYmIHRoaXMuaW52YWxpZGF0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9sb2NrID0gMDtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLl90cyAmJiAhcHJldlBhdXNlZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3Byb3BhZ2F0ZVlveW9FYXNlKHRoaXMsIGlzWW95byk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2hhc1BhdXNlICYmICF0aGlzLl9mb3JjaW5nICYmIHRoaXMuX2xvY2sgPCAyKSB7XG4gICAgICAgICAgcGF1c2VUd2VlbiA9IF9maW5kTmV4dFBhdXNlVHdlZW4odGhpcywgX3JvdW5kKHByZXZUaW1lKSwgX3JvdW5kKHRpbWUpKTtcblxuICAgICAgICAgIGlmIChwYXVzZVR3ZWVuKSB7XG4gICAgICAgICAgICB0VGltZSAtPSB0aW1lIC0gKHRpbWUgPSBwYXVzZVR3ZWVuLl9zdGFydCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdFRpbWUgPSB0VGltZTtcbiAgICAgICAgdGhpcy5fdGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMuX2FjdCA9ICF0aW1lU2NhbGU7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9pbml0dGVkKSB7XG4gICAgICAgICAgdGhpcy5fb25VcGRhdGUgPSB0aGlzLnZhcnMub25VcGRhdGU7XG4gICAgICAgICAgdGhpcy5faW5pdHRlZCA9IDE7XG4gICAgICAgICAgdGhpcy5felRpbWUgPSB0b3RhbFRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICAhcHJldlRpbWUgJiYgdGltZSAmJiAhc3VwcHJlc3NFdmVudHMgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25TdGFydFwiKTtcblxuICAgICAgICBpZiAodGltZSA+PSBwcmV2VGltZSAmJiB0b3RhbFRpbWUgPj0gMCkge1xuICAgICAgICAgIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG5cbiAgICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICAgIG5leHQgPSBjaGlsZC5fbmV4dDtcblxuICAgICAgICAgICAgaWYgKChjaGlsZC5fYWN0IHx8IHRpbWUgPj0gY2hpbGQuX3N0YXJ0KSAmJiBjaGlsZC5fdHMgJiYgcGF1c2VUd2VlbiAhPT0gY2hpbGQpIHtcbiAgICAgICAgICAgICAgaWYgKGNoaWxkLnBhcmVudCAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjaGlsZC5yZW5kZXIoY2hpbGQuX3RzID4gMCA/ICh0aW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cyA6IChjaGlsZC5fZGlydHkgPyBjaGlsZC50b3RhbER1cmF0aW9uKCkgOiBjaGlsZC5fdER1cikgKyAodGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHRpbWUgIT09IHRoaXMuX3RpbWUgfHwgIXRoaXMuX3RzICYmICFwcmV2UGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgcGF1c2VUd2VlbiA9IDA7XG4gICAgICAgICAgICAgICAgbmV4dCAmJiAodFRpbWUgKz0gdGhpcy5felRpbWUgPSAtX3RpbnlOdW0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkID0gbmV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQgPSB0aGlzLl9sYXN0O1xuICAgICAgICAgIHZhciBhZGp1c3RlZFRpbWUgPSB0b3RhbFRpbWUgPCAwID8gdG90YWxUaW1lIDogdGltZTtcblxuICAgICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgICAgbmV4dCA9IGNoaWxkLl9wcmV2O1xuXG4gICAgICAgICAgICBpZiAoKGNoaWxkLl9hY3QgfHwgYWRqdXN0ZWRUaW1lIDw9IGNoaWxkLl9lbmQpICYmIGNoaWxkLl90cyAmJiBwYXVzZVR3ZWVuICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgICBpZiAoY2hpbGQucGFyZW50ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNoaWxkLnJlbmRlcihjaGlsZC5fdHMgPiAwID8gKGFkanVzdGVkVGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMgOiAoY2hpbGQuX2RpcnR5ID8gY2hpbGQudG90YWxEdXJhdGlvbigpIDogY2hpbGQuX3REdXIpICsgKGFkanVzdGVkVGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHRpbWUgIT09IHRoaXMuX3RpbWUgfHwgIXRoaXMuX3RzICYmICFwcmV2UGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgcGF1c2VUd2VlbiA9IDA7XG4gICAgICAgICAgICAgICAgbmV4dCAmJiAodFRpbWUgKz0gdGhpcy5felRpbWUgPSBhZGp1c3RlZFRpbWUgPyAtX3RpbnlOdW0gOiBfdGlueU51bSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGQgPSBuZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXVzZVR3ZWVuICYmICFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgICBwYXVzZVR3ZWVuLnJlbmRlcih0aW1lID49IHByZXZUaW1lID8gMCA6IC1fdGlueU51bSkuX3pUaW1lID0gdGltZSA+PSBwcmV2VGltZSA/IDEgOiAtMTtcblxuICAgICAgICAgIGlmICh0aGlzLl90cykge1xuICAgICAgICAgICAgdGhpcy5fc3RhcnQgPSBwcmV2U3RhcnQ7XG5cbiAgICAgICAgICAgIF9zZXRFbmQodGhpcyk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fb25VcGRhdGUgJiYgIXN1cHByZXNzRXZlbnRzICYmIF9jYWxsYmFjayh0aGlzLCBcIm9uVXBkYXRlXCIsIHRydWUpO1xuICAgICAgICBpZiAodFRpbWUgPT09IHREdXIgJiYgdER1ciA+PSB0aGlzLnRvdGFsRHVyYXRpb24oKSB8fCAhdFRpbWUgJiYgcHJldlRpbWUpIGlmIChwcmV2U3RhcnQgPT09IHRoaXMuX3N0YXJ0IHx8IE1hdGguYWJzKHRpbWVTY2FsZSkgIT09IE1hdGguYWJzKHRoaXMuX3RzKSkgaWYgKCF0aGlzLl9sb2NrKSB7XG4gICAgICAgICAgKHRvdGFsVGltZSB8fCAhZHVyKSAmJiAodFRpbWUgPT09IHREdXIgJiYgdGhpcy5fdHMgPiAwIHx8ICF0VGltZSAmJiB0aGlzLl90cyA8IDApICYmIF9yZW1vdmVGcm9tUGFyZW50KHRoaXMsIDEpO1xuXG4gICAgICAgICAgaWYgKCFzdXBwcmVzc0V2ZW50cyAmJiAhKHRvdGFsVGltZSA8IDAgJiYgIXByZXZUaW1lKSAmJiAodFRpbWUgfHwgcHJldlRpbWUpKSB7XG4gICAgICAgICAgICBfY2FsbGJhY2sodGhpcywgdFRpbWUgPT09IHREdXIgPyBcIm9uQ29tcGxldGVcIiA6IFwib25SZXZlcnNlQ29tcGxldGVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3Byb20gJiYgISh0VGltZSA8IHREdXIgJiYgdGhpcy50aW1lU2NhbGUoKSA+IDApICYmIHRoaXMuX3Byb20oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIF9wcm90bzIuYWRkID0gZnVuY3Rpb24gYWRkKGNoaWxkLCBwb3NpdGlvbikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICghX2lzTnVtYmVyKHBvc2l0aW9uKSkge1xuICAgICAgICBwb3NpdGlvbiA9IF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBBbmltYXRpb24pKSB7XG4gICAgICAgIGlmIChfaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgICBjaGlsZC5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIuYWRkKG9iaiwgcG9zaXRpb24pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9pc1N0cmluZyhjaGlsZCkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hZGRMYWJlbChjaGlsZCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9pc0Z1bmN0aW9uKGNoaWxkKSkge1xuICAgICAgICAgIGNoaWxkID0gVHdlZW4uZGVsYXllZENhbGwoMCwgY2hpbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzICE9PSBjaGlsZCA/IF9hZGRUb1RpbWVsaW5lKHRoaXMsIGNoaWxkLCBwb3NpdGlvbikgOiB0aGlzO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLmdldENoaWxkcmVuID0gZnVuY3Rpb24gZ2V0Q2hpbGRyZW4obmVzdGVkLCB0d2VlbnMsIHRpbWVsaW5lcywgaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgaWYgKG5lc3RlZCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIG5lc3RlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0d2VlbnMgPT09IHZvaWQgMCkge1xuICAgICAgICB0d2VlbnMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGltZWxpbmVzID09PSB2b2lkIDApIHtcbiAgICAgICAgdGltZWxpbmVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlnbm9yZUJlZm9yZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgICBpZ25vcmVCZWZvcmVUaW1lID0gLV9iaWdOdW07XG4gICAgICB9XG5cbiAgICAgIHZhciBhID0gW10sXG4gICAgICAgICAgY2hpbGQgPSB0aGlzLl9maXJzdDtcblxuICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5fc3RhcnQgPj0gaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFR3ZWVuKSB7XG4gICAgICAgICAgICB0d2VlbnMgJiYgYS5wdXNoKGNoaWxkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGltZWxpbmVzICYmIGEucHVzaChjaGlsZCk7XG4gICAgICAgICAgICBuZXN0ZWQgJiYgYS5wdXNoLmFwcGx5KGEsIGNoaWxkLmdldENoaWxkcmVuKHRydWUsIHR3ZWVucywgdGltZWxpbmVzKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGE7XG4gICAgfTtcblxuICAgIF9wcm90bzIuZ2V0QnlJZCA9IGZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgICAgIHZhciBhbmltYXRpb25zID0gdGhpcy5nZXRDaGlsZHJlbigxLCAxLCAxKSxcbiAgICAgICAgICBpID0gYW5pbWF0aW9ucy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgaWYgKGFuaW1hdGlvbnNbaV0udmFycy5pZCA9PT0gaWQpIHtcbiAgICAgICAgICByZXR1cm4gYW5pbWF0aW9uc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8yLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShjaGlsZCkge1xuICAgICAgaWYgKF9pc1N0cmluZyhjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlTGFiZWwoY2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX2lzRnVuY3Rpb24oY2hpbGQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmtpbGxUd2VlbnNPZihjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSh0aGlzLCBjaGlsZCk7XG5cbiAgICAgIGlmIChjaGlsZCA9PT0gdGhpcy5fcmVjZW50KSB7XG4gICAgICAgIHRoaXMuX3JlY2VudCA9IHRoaXMuX2xhc3Q7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdW5jYWNoZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvMi50b3RhbFRpbWUgPSBmdW5jdGlvbiB0b3RhbFRpbWUoX3RvdGFsVGltZTIsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RUaW1lO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9mb3JjaW5nID0gMTtcblxuICAgICAgaWYgKCF0aGlzLl9kcCAmJiB0aGlzLl90cykge1xuICAgICAgICB0aGlzLl9zdGFydCA9IF9yb3VuZChfdGlja2VyLnRpbWUgLSAodGhpcy5fdHMgPiAwID8gX3RvdGFsVGltZTIgLyB0aGlzLl90cyA6ICh0aGlzLnRvdGFsRHVyYXRpb24oKSAtIF90b3RhbFRpbWUyKSAvIC10aGlzLl90cykpO1xuICAgICAgfVxuXG4gICAgICBfQW5pbWF0aW9uLnByb3RvdHlwZS50b3RhbFRpbWUuY2FsbCh0aGlzLCBfdG90YWxUaW1lMiwgc3VwcHJlc3NFdmVudHMpO1xuXG4gICAgICB0aGlzLl9mb3JjaW5nID0gMDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLmFkZExhYmVsID0gZnVuY3Rpb24gYWRkTGFiZWwobGFiZWwsIHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmxhYmVsc1tsYWJlbF0gPSBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgX3Byb3RvMi5yZW1vdmVMYWJlbCA9IGZ1bmN0aW9uIHJlbW92ZUxhYmVsKGxhYmVsKSB7XG4gICAgICBkZWxldGUgdGhpcy5sYWJlbHNbbGFiZWxdO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIF9wcm90bzIuYWRkUGF1c2UgPSBmdW5jdGlvbiBhZGRQYXVzZShwb3NpdGlvbiwgY2FsbGJhY2ssIHBhcmFtcykge1xuICAgICAgdmFyIHQgPSBUd2Vlbi5kZWxheWVkQ2FsbCgwLCBjYWxsYmFjayB8fCBfZW1wdHlGdW5jLCBwYXJhbXMpO1xuICAgICAgdC5kYXRhID0gXCJpc1BhdXNlXCI7XG4gICAgICB0aGlzLl9oYXNQYXVzZSA9IDE7XG4gICAgICByZXR1cm4gX2FkZFRvVGltZWxpbmUodGhpcywgdCwgX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvMi5yZW1vdmVQYXVzZSA9IGZ1bmN0aW9uIHJlbW92ZVBhdXNlKHBvc2l0aW9uKSB7XG4gICAgICB2YXIgY2hpbGQgPSB0aGlzLl9maXJzdDtcbiAgICAgIHBvc2l0aW9uID0gX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pO1xuXG4gICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLl9zdGFydCA9PT0gcG9zaXRpb24gJiYgY2hpbGQuZGF0YSA9PT0gXCJpc1BhdXNlXCIpIHtcbiAgICAgICAgICBfcmVtb3ZlRnJvbVBhcmVudChjaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8yLmtpbGxUd2VlbnNPZiA9IGZ1bmN0aW9uIGtpbGxUd2VlbnNPZih0YXJnZXRzLCBwcm9wcywgb25seUFjdGl2ZSkge1xuICAgICAgdmFyIHR3ZWVucyA9IHRoaXMuZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSksXG4gICAgICAgICAgaSA9IHR3ZWVucy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgX292ZXJ3cml0aW5nVHdlZW4gIT09IHR3ZWVuc1tpXSAmJiB0d2VlbnNbaV0ua2lsbCh0YXJnZXRzLCBwcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLmdldFR3ZWVuc09mID0gZnVuY3Rpb24gZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSkge1xuICAgICAgdmFyIGEgPSBbXSxcbiAgICAgICAgICBwYXJzZWRUYXJnZXRzID0gdG9BcnJheSh0YXJnZXRzKSxcbiAgICAgICAgICBjaGlsZCA9IHRoaXMuX2ZpcnN0LFxuICAgICAgICAgIGlzR2xvYmFsVGltZSA9IF9pc051bWJlcihvbmx5QWN0aXZlKSxcbiAgICAgICAgICBjaGlsZHJlbjtcblxuICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFR3ZWVuKSB7XG4gICAgICAgICAgaWYgKF9hcnJheUNvbnRhaW5zQW55KGNoaWxkLl90YXJnZXRzLCBwYXJzZWRUYXJnZXRzKSAmJiAoaXNHbG9iYWxUaW1lID8gKCFfb3ZlcndyaXRpbmdUd2VlbiB8fCBjaGlsZC5faW5pdHRlZCAmJiBjaGlsZC5fdHMpICYmIGNoaWxkLmdsb2JhbFRpbWUoMCkgPD0gb25seUFjdGl2ZSAmJiBjaGlsZC5nbG9iYWxUaW1lKGNoaWxkLnRvdGFsRHVyYXRpb24oKSkgPiBvbmx5QWN0aXZlIDogIW9ubHlBY3RpdmUgfHwgY2hpbGQuaXNBY3RpdmUoKSkpIHtcbiAgICAgICAgICAgIGEucHVzaChjaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKChjaGlsZHJlbiA9IGNoaWxkLmdldFR3ZWVuc09mKHBhcnNlZFRhcmdldHMsIG9ubHlBY3RpdmUpKS5sZW5ndGgpIHtcbiAgICAgICAgICBhLnB1c2guYXBwbHkoYSwgY2hpbGRyZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGE7XG4gICAgfTtcblxuICAgIF9wcm90bzIudHdlZW5UbyA9IGZ1bmN0aW9uIHR3ZWVuVG8ocG9zaXRpb24sIHZhcnMpIHtcbiAgICAgIHZhcnMgPSB2YXJzIHx8IHt9O1xuXG4gICAgICB2YXIgdGwgPSB0aGlzLFxuICAgICAgICAgIGVuZFRpbWUgPSBfcGFyc2VQb3NpdGlvbih0bCwgcG9zaXRpb24pLFxuICAgICAgICAgIF92YXJzID0gdmFycyxcbiAgICAgICAgICBzdGFydEF0ID0gX3ZhcnMuc3RhcnRBdCxcbiAgICAgICAgICBfb25TdGFydCA9IF92YXJzLm9uU3RhcnQsXG4gICAgICAgICAgb25TdGFydFBhcmFtcyA9IF92YXJzLm9uU3RhcnRQYXJhbXMsXG4gICAgICAgICAgdHdlZW4gPSBUd2Vlbi50byh0bCwgX3NldERlZmF1bHRzKHZhcnMsIHtcbiAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIGxhenk6IGZhbHNlLFxuICAgICAgICB0aW1lOiBlbmRUaW1lLFxuICAgICAgICBvdmVyd3JpdGU6IFwiYXV0b1wiLFxuICAgICAgICBkdXJhdGlvbjogdmFycy5kdXJhdGlvbiB8fCBNYXRoLmFicygoZW5kVGltZSAtIChzdGFydEF0ICYmIFwidGltZVwiIGluIHN0YXJ0QXQgPyBzdGFydEF0LnRpbWUgOiB0bC5fdGltZSkpIC8gdGwudGltZVNjYWxlKCkpIHx8IF90aW55TnVtLFxuICAgICAgICBvblN0YXJ0OiBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgICAgICAgIHRsLnBhdXNlKCk7XG4gICAgICAgICAgdmFyIGR1cmF0aW9uID0gdmFycy5kdXJhdGlvbiB8fCBNYXRoLmFicygoZW5kVGltZSAtIHRsLl90aW1lKSAvIHRsLnRpbWVTY2FsZSgpKTtcbiAgICAgICAgICB0d2Vlbi5fZHVyICE9PSBkdXJhdGlvbiAmJiBfc2V0RHVyYXRpb24odHdlZW4sIGR1cmF0aW9uLCAwLCAxKS5yZW5kZXIodHdlZW4uX3RpbWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgIF9vblN0YXJ0ICYmIF9vblN0YXJ0LmFwcGx5KHR3ZWVuLCBvblN0YXJ0UGFyYW1zIHx8IFtdKTtcbiAgICAgICAgfVxuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gdHdlZW47XG4gICAgfTtcblxuICAgIF9wcm90bzIudHdlZW5Gcm9tVG8gPSBmdW5jdGlvbiB0d2VlbkZyb21Ubyhmcm9tUG9zaXRpb24sIHRvUG9zaXRpb24sIHZhcnMpIHtcbiAgICAgIHJldHVybiB0aGlzLnR3ZWVuVG8odG9Qb3NpdGlvbiwgX3NldERlZmF1bHRzKHtcbiAgICAgICAgc3RhcnRBdDoge1xuICAgICAgICAgIHRpbWU6IF9wYXJzZVBvc2l0aW9uKHRoaXMsIGZyb21Qb3NpdGlvbilcbiAgICAgICAgfVxuICAgICAgfSwgdmFycykpO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLnJlY2VudCA9IGZ1bmN0aW9uIHJlY2VudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZWNlbnQ7XG4gICAgfTtcblxuICAgIF9wcm90bzIubmV4dExhYmVsID0gZnVuY3Rpb24gbmV4dExhYmVsKGFmdGVyVGltZSkge1xuICAgICAgaWYgKGFmdGVyVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGFmdGVyVGltZSA9IHRoaXMuX3RpbWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZ2V0TGFiZWxJbkRpcmVjdGlvbih0aGlzLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBhZnRlclRpbWUpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvMi5wcmV2aW91c0xhYmVsID0gZnVuY3Rpb24gcHJldmlvdXNMYWJlbChiZWZvcmVUaW1lKSB7XG4gICAgICBpZiAoYmVmb3JlVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGJlZm9yZVRpbWUgPSB0aGlzLl90aW1lO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2dldExhYmVsSW5EaXJlY3Rpb24odGhpcywgX3BhcnNlUG9zaXRpb24odGhpcywgYmVmb3JlVGltZSksIDEpO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLmN1cnJlbnRMYWJlbCA9IGZ1bmN0aW9uIGN1cnJlbnRMYWJlbCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnNlZWsodmFsdWUsIHRydWUpIDogdGhpcy5wcmV2aW91c0xhYmVsKHRoaXMuX3RpbWUgKyBfdGlueU51bSk7XG4gICAgfTtcblxuICAgIF9wcm90bzIuc2hpZnRDaGlsZHJlbiA9IGZ1bmN0aW9uIHNoaWZ0Q2hpbGRyZW4oYW1vdW50LCBhZGp1c3RMYWJlbHMsIGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICAgIGlmIChpZ25vcmVCZWZvcmVUaW1lID09PSB2b2lkIDApIHtcbiAgICAgICAgaWdub3JlQmVmb3JlVGltZSA9IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZCA9IHRoaXMuX2ZpcnN0LFxuICAgICAgICAgIGxhYmVscyA9IHRoaXMubGFiZWxzLFxuICAgICAgICAgIHA7XG5cbiAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQuX3N0YXJ0ID49IGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICAgICAgICBjaGlsZC5fc3RhcnQgKz0gYW1vdW50O1xuICAgICAgICAgIGNoaWxkLl9lbmQgKz0gYW1vdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgaWYgKGFkanVzdExhYmVscykge1xuICAgICAgICBmb3IgKHAgaW4gbGFiZWxzKSB7XG4gICAgICAgICAgaWYgKGxhYmVsc1twXSA+PSBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgICAgICAgICBsYWJlbHNbcF0gKz0gYW1vdW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3VuY2FjaGUodGhpcyk7XG4gICAgfTtcblxuICAgIF9wcm90bzIuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRhdGUoKSB7XG4gICAgICB2YXIgY2hpbGQgPSB0aGlzLl9maXJzdDtcbiAgICAgIHRoaXMuX2xvY2sgPSAwO1xuXG4gICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQuaW52YWxpZGF0ZSgpO1xuICAgICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX0FuaW1hdGlvbi5wcm90b3R5cGUuaW52YWxpZGF0ZS5jYWxsKHRoaXMpO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoaW5jbHVkZUxhYmVscykge1xuICAgICAgaWYgKGluY2x1ZGVMYWJlbHMgPT09IHZvaWQgMCkge1xuICAgICAgICBpbmNsdWRlTGFiZWxzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3QsXG4gICAgICAgICAgbmV4dDtcblxuICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIG5leHQgPSBjaGlsZC5fbmV4dDtcbiAgICAgICAgdGhpcy5yZW1vdmUoY2hpbGQpO1xuICAgICAgICBjaGlsZCA9IG5leHQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3RpbWUgPSB0aGlzLl90VGltZSA9IHRoaXMuX3BUaW1lID0gMDtcbiAgICAgIGluY2x1ZGVMYWJlbHMgJiYgKHRoaXMubGFiZWxzID0ge30pO1xuICAgICAgcmV0dXJuIF91bmNhY2hlKHRoaXMpO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLnRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbiB0b3RhbER1cmF0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgbWF4ID0gMCxcbiAgICAgICAgICBzZWxmID0gdGhpcyxcbiAgICAgICAgICBjaGlsZCA9IHNlbGYuX2xhc3QsXG4gICAgICAgICAgcHJldlN0YXJ0ID0gX2JpZ051bSxcbiAgICAgICAgICBwcmV2LFxuICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgIHBhcmVudDtcblxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYudGltZVNjYWxlKChzZWxmLl9yZXBlYXQgPCAwID8gc2VsZi5kdXJhdGlvbigpIDogc2VsZi50b3RhbER1cmF0aW9uKCkpIC8gKHNlbGYucmV2ZXJzZWQoKSA/IC12YWx1ZSA6IHZhbHVlKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLl9kaXJ0eSkge1xuICAgICAgICBwYXJlbnQgPSBzZWxmLnBhcmVudDtcblxuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICBwcmV2ID0gY2hpbGQuX3ByZXY7XG4gICAgICAgICAgY2hpbGQuX2RpcnR5ICYmIGNoaWxkLnRvdGFsRHVyYXRpb24oKTtcbiAgICAgICAgICBzdGFydCA9IGNoaWxkLl9zdGFydDtcblxuICAgICAgICAgIGlmIChzdGFydCA+IHByZXZTdGFydCAmJiBzZWxmLl9zb3J0ICYmIGNoaWxkLl90cyAmJiAhc2VsZi5fbG9jaykge1xuICAgICAgICAgICAgc2VsZi5fbG9jayA9IDE7XG4gICAgICAgICAgICBfYWRkVG9UaW1lbGluZShzZWxmLCBjaGlsZCwgc3RhcnQgLSBjaGlsZC5fZGVsYXksIDEpLl9sb2NrID0gMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJldlN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN0YXJ0IDwgMCAmJiBjaGlsZC5fdHMpIHtcbiAgICAgICAgICAgIG1heCAtPSBzdGFydDtcblxuICAgICAgICAgICAgaWYgKCFwYXJlbnQgJiYgIXNlbGYuX2RwIHx8IHBhcmVudCAmJiBwYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcpIHtcbiAgICAgICAgICAgICAgc2VsZi5fc3RhcnQgKz0gc3RhcnQgLyBzZWxmLl90cztcbiAgICAgICAgICAgICAgc2VsZi5fdGltZSAtPSBzdGFydDtcbiAgICAgICAgICAgICAgc2VsZi5fdFRpbWUgLT0gc3RhcnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuc2hpZnRDaGlsZHJlbigtc3RhcnQsIGZhbHNlLCAtMWU5OTkpO1xuICAgICAgICAgICAgcHJldlN0YXJ0ID0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZC5fZW5kID4gbWF4ICYmIGNoaWxkLl90cyAmJiAobWF4ID0gY2hpbGQuX2VuZCk7XG4gICAgICAgICAgY2hpbGQgPSBwcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgX3NldER1cmF0aW9uKHNlbGYsIHNlbGYgPT09IF9nbG9iYWxUaW1lbGluZSAmJiBzZWxmLl90aW1lID4gbWF4ID8gc2VsZi5fdGltZSA6IG1heCwgMSwgMSk7XG5cbiAgICAgICAgc2VsZi5fZGlydHkgPSAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZi5fdER1cjtcbiAgICB9O1xuXG4gICAgVGltZWxpbmUudXBkYXRlUm9vdCA9IGZ1bmN0aW9uIHVwZGF0ZVJvb3QodGltZSkge1xuICAgICAgaWYgKF9nbG9iYWxUaW1lbGluZS5fdHMpIHtcbiAgICAgICAgX2xhenlTYWZlUmVuZGVyKF9nbG9iYWxUaW1lbGluZSwgX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUodGltZSwgX2dsb2JhbFRpbWVsaW5lKSk7XG5cbiAgICAgICAgX2xhc3RSZW5kZXJlZEZyYW1lID0gX3RpY2tlci5mcmFtZTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aWNrZXIuZnJhbWUgPj0gX25leHRHQ0ZyYW1lKSB7XG4gICAgICAgIF9uZXh0R0NGcmFtZSArPSBfY29uZmlnLmF1dG9TbGVlcCB8fCAxMjA7XG4gICAgICAgIHZhciBjaGlsZCA9IF9nbG9iYWxUaW1lbGluZS5fZmlyc3Q7XG4gICAgICAgIGlmICghY2hpbGQgfHwgIWNoaWxkLl90cykgaWYgKF9jb25maWcuYXV0b1NsZWVwICYmIF90aWNrZXIuX2xpc3RlbmVycy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgd2hpbGUgKGNoaWxkICYmICFjaGlsZC5fdHMpIHtcbiAgICAgICAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hpbGQgfHwgX3RpY2tlci5zbGVlcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBUaW1lbGluZTtcbiAgfShBbmltYXRpb24pO1xuXG4gIF9zZXREZWZhdWx0cyhUaW1lbGluZS5wcm90b3R5cGUsIHtcbiAgICBfbG9jazogMCxcbiAgICBfaGFzUGF1c2U6IDAsXG4gICAgX2ZvcmNpbmc6IDBcbiAgfSk7XG5cbiAgdmFyIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuID0gZnVuY3Rpb24gX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4odGFyZ2V0LCBwcm9wLCBzdGFydCwgZW5kLCBzZXR0ZXIsIHN0cmluZ0ZpbHRlciwgZnVuY1BhcmFtKSB7XG4gICAgdmFyIHB0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgdGFyZ2V0LCBwcm9wLCAwLCAxLCBfcmVuZGVyQ29tcGxleFN0cmluZywgbnVsbCwgc2V0dGVyKSxcbiAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICBtYXRjaEluZGV4ID0gMCxcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBzdGFydE51bXMsXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBlbmROdW0sXG4gICAgICAgIGNodW5rLFxuICAgICAgICBzdGFydE51bSxcbiAgICAgICAgaGFzUmFuZG9tLFxuICAgICAgICBhO1xuICAgIHB0LmIgPSBzdGFydDtcbiAgICBwdC5lID0gZW5kO1xuICAgIHN0YXJ0ICs9IFwiXCI7XG4gICAgZW5kICs9IFwiXCI7XG5cbiAgICBpZiAoaGFzUmFuZG9tID0gfmVuZC5pbmRleE9mKFwicmFuZG9tKFwiKSkge1xuICAgICAgZW5kID0gX3JlcGxhY2VSYW5kb20oZW5kKTtcbiAgICB9XG5cbiAgICBpZiAoc3RyaW5nRmlsdGVyKSB7XG4gICAgICBhID0gW3N0YXJ0LCBlbmRdO1xuICAgICAgc3RyaW5nRmlsdGVyKGEsIHRhcmdldCwgcHJvcCk7XG4gICAgICBzdGFydCA9IGFbMF07XG4gICAgICBlbmQgPSBhWzFdO1xuICAgIH1cblxuICAgIHN0YXJ0TnVtcyA9IHN0YXJ0Lm1hdGNoKF9jb21wbGV4U3RyaW5nTnVtRXhwKSB8fCBbXTtcblxuICAgIHdoaWxlIChyZXN1bHQgPSBfY29tcGxleFN0cmluZ051bUV4cC5leGVjKGVuZCkpIHtcbiAgICAgIGVuZE51bSA9IHJlc3VsdFswXTtcbiAgICAgIGNodW5rID0gZW5kLnN1YnN0cmluZyhpbmRleCwgcmVzdWx0LmluZGV4KTtcblxuICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgIGNvbG9yID0gKGNvbG9yICsgMSkgJSA1O1xuICAgICAgfSBlbHNlIGlmIChjaHVuay5zdWJzdHIoLTUpID09PSBcInJnYmEoXCIpIHtcbiAgICAgICAgY29sb3IgPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5kTnVtICE9PSBzdGFydE51bXNbbWF0Y2hJbmRleCsrXSkge1xuICAgICAgICBzdGFydE51bSA9IHBhcnNlRmxvYXQoc3RhcnROdW1zW21hdGNoSW5kZXggLSAxXSkgfHwgMDtcbiAgICAgICAgcHQuX3B0ID0ge1xuICAgICAgICAgIF9uZXh0OiBwdC5fcHQsXG4gICAgICAgICAgcDogY2h1bmsgfHwgbWF0Y2hJbmRleCA9PT0gMSA/IGNodW5rIDogXCIsXCIsXG4gICAgICAgICAgczogc3RhcnROdW0sXG4gICAgICAgICAgYzogZW5kTnVtLmNoYXJBdCgxKSA9PT0gXCI9XCIgPyBwYXJzZUZsb2F0KGVuZE51bS5zdWJzdHIoMikpICogKGVuZE51bS5jaGFyQXQoMCkgPT09IFwiLVwiID8gLTEgOiAxKSA6IHBhcnNlRmxvYXQoZW5kTnVtKSAtIHN0YXJ0TnVtLFxuICAgICAgICAgIG06IGNvbG9yICYmIGNvbG9yIDwgNCA/IE1hdGgucm91bmQgOiAwXG4gICAgICAgIH07XG4gICAgICAgIGluZGV4ID0gX2NvbXBsZXhTdHJpbmdOdW1FeHAubGFzdEluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHB0LmMgPSBpbmRleCA8IGVuZC5sZW5ndGggPyBlbmQuc3Vic3RyaW5nKGluZGV4LCBlbmQubGVuZ3RoKSA6IFwiXCI7XG4gICAgcHQuZnAgPSBmdW5jUGFyYW07XG5cbiAgICBpZiAoX3JlbEV4cC50ZXN0KGVuZCkgfHwgaGFzUmFuZG9tKSB7XG4gICAgICBwdC5lID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLl9wdCA9IHB0O1xuICAgIHJldHVybiBwdDtcbiAgfSxcbiAgICAgIF9hZGRQcm9wVHdlZW4gPSBmdW5jdGlvbiBfYWRkUHJvcFR3ZWVuKHRhcmdldCwgcHJvcCwgc3RhcnQsIGVuZCwgaW5kZXgsIHRhcmdldHMsIG1vZGlmaWVyLCBzdHJpbmdGaWx0ZXIsIGZ1bmNQYXJhbSkge1xuICAgIF9pc0Z1bmN0aW9uKGVuZCkgJiYgKGVuZCA9IGVuZChpbmRleCB8fCAwLCB0YXJnZXQsIHRhcmdldHMpKTtcbiAgICB2YXIgY3VycmVudFZhbHVlID0gdGFyZ2V0W3Byb3BdLFxuICAgICAgICBwYXJzZWRTdGFydCA9IHN0YXJ0ICE9PSBcImdldFwiID8gc3RhcnQgOiAhX2lzRnVuY3Rpb24oY3VycmVudFZhbHVlKSA/IGN1cnJlbnRWYWx1ZSA6IGZ1bmNQYXJhbSA/IHRhcmdldFtwcm9wLmluZGV4T2YoXCJzZXRcIikgfHwgIV9pc0Z1bmN0aW9uKHRhcmdldFtcImdldFwiICsgcHJvcC5zdWJzdHIoMyldKSA/IHByb3AgOiBcImdldFwiICsgcHJvcC5zdWJzdHIoMyldKGZ1bmNQYXJhbSkgOiB0YXJnZXRbcHJvcF0oKSxcbiAgICAgICAgc2V0dGVyID0gIV9pc0Z1bmN0aW9uKGN1cnJlbnRWYWx1ZSkgPyBfc2V0dGVyUGxhaW4gOiBmdW5jUGFyYW0gPyBfc2V0dGVyRnVuY1dpdGhQYXJhbSA6IF9zZXR0ZXJGdW5jLFxuICAgICAgICBwdDtcblxuICAgIGlmIChfaXNTdHJpbmcoZW5kKSkge1xuICAgICAgaWYgKH5lbmQuaW5kZXhPZihcInJhbmRvbShcIikpIHtcbiAgICAgICAgZW5kID0gX3JlcGxhY2VSYW5kb20oZW5kKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZC5jaGFyQXQoMSkgPT09IFwiPVwiKSB7XG4gICAgICAgIGVuZCA9IHBhcnNlRmxvYXQocGFyc2VkU3RhcnQpICsgcGFyc2VGbG9hdChlbmQuc3Vic3RyKDIpKSAqIChlbmQuY2hhckF0KDApID09PSBcIi1cIiA/IC0xIDogMSkgKyAoZ2V0VW5pdChwYXJzZWRTdGFydCkgfHwgMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcnNlZFN0YXJ0ICE9PSBlbmQpIHtcbiAgICAgIGlmICghaXNOYU4ocGFyc2VkU3RhcnQgKiBlbmQpKSB7XG4gICAgICAgIHB0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgdGFyZ2V0LCBwcm9wLCArcGFyc2VkU3RhcnQgfHwgMCwgZW5kIC0gKHBhcnNlZFN0YXJ0IHx8IDApLCB0eXBlb2YgY3VycmVudFZhbHVlID09PSBcImJvb2xlYW5cIiA/IF9yZW5kZXJCb29sZWFuIDogX3JlbmRlclBsYWluLCAwLCBzZXR0ZXIpO1xuICAgICAgICBmdW5jUGFyYW0gJiYgKHB0LmZwID0gZnVuY1BhcmFtKTtcbiAgICAgICAgbW9kaWZpZXIgJiYgcHQubW9kaWZpZXIobW9kaWZpZXIsIHRoaXMsIHRhcmdldCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9wdCA9IHB0O1xuICAgICAgfVxuXG4gICAgICAhY3VycmVudFZhbHVlICYmICEocHJvcCBpbiB0YXJnZXQpICYmIF9taXNzaW5nUGx1Z2luKHByb3AsIGVuZCk7XG4gICAgICByZXR1cm4gX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4uY2FsbCh0aGlzLCB0YXJnZXQsIHByb3AsIHBhcnNlZFN0YXJ0LCBlbmQsIHNldHRlciwgc3RyaW5nRmlsdGVyIHx8IF9jb25maWcuc3RyaW5nRmlsdGVyLCBmdW5jUGFyYW0pO1xuICAgIH1cbiAgfSxcbiAgICAgIF9wcm9jZXNzVmFycyA9IGZ1bmN0aW9uIF9wcm9jZXNzVmFycyh2YXJzLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzLCB0d2Vlbikge1xuICAgIF9pc0Z1bmN0aW9uKHZhcnMpICYmICh2YXJzID0gX3BhcnNlRnVuY09yU3RyaW5nKHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKSk7XG5cbiAgICBpZiAoIV9pc09iamVjdCh2YXJzKSB8fCB2YXJzLnN0eWxlICYmIHZhcnMubm9kZVR5cGUgfHwgX2lzQXJyYXkodmFycykgfHwgX2lzVHlwZWRBcnJheSh2YXJzKSkge1xuICAgICAgcmV0dXJuIF9pc1N0cmluZyh2YXJzKSA/IF9wYXJzZUZ1bmNPclN0cmluZyh2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykgOiB2YXJzO1xuICAgIH1cblxuICAgIHZhciBjb3B5ID0ge30sXG4gICAgICAgIHA7XG5cbiAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgY29weVtwXSA9IF9wYXJzZUZ1bmNPclN0cmluZyh2YXJzW3BdLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvcHk7XG4gIH0sXG4gICAgICBfY2hlY2tQbHVnaW4gPSBmdW5jdGlvbiBfY2hlY2tQbHVnaW4ocHJvcGVydHksIHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKSB7XG4gICAgdmFyIHBsdWdpbiwgcHQsIHB0TG9va3VwLCBpO1xuXG4gICAgaWYgKF9wbHVnaW5zW3Byb3BlcnR5XSAmJiAocGx1Z2luID0gbmV3IF9wbHVnaW5zW3Byb3BlcnR5XSgpKS5pbml0KHRhcmdldCwgcGx1Z2luLnJhd1ZhcnMgPyB2YXJzW3Byb3BlcnR5XSA6IF9wcm9jZXNzVmFycyh2YXJzW3Byb3BlcnR5XSwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cywgdHdlZW4pLCB0d2VlbiwgaW5kZXgsIHRhcmdldHMpICE9PSBmYWxzZSkge1xuICAgICAgdHdlZW4uX3B0ID0gcHQgPSBuZXcgUHJvcFR3ZWVuKHR3ZWVuLl9wdCwgdGFyZ2V0LCBwcm9wZXJ0eSwgMCwgMSwgcGx1Z2luLnJlbmRlciwgcGx1Z2luLCAwLCBwbHVnaW4ucHJpb3JpdHkpO1xuXG4gICAgICBpZiAodHdlZW4gIT09IF9xdWlja1R3ZWVuKSB7XG4gICAgICAgIHB0TG9va3VwID0gdHdlZW4uX3B0TG9va3VwW3R3ZWVuLl90YXJnZXRzLmluZGV4T2YodGFyZ2V0KV07XG4gICAgICAgIGkgPSBwbHVnaW4uX3Byb3BzLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgcHRMb29rdXBbcGx1Z2luLl9wcm9wc1tpXV0gPSBwdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwbHVnaW47XG4gIH0sXG4gICAgICBfb3ZlcndyaXRpbmdUd2VlbixcbiAgICAgIF9pbml0VHdlZW4gPSBmdW5jdGlvbiBfaW5pdFR3ZWVuKHR3ZWVuLCB0aW1lKSB7XG4gICAgdmFyIHZhcnMgPSB0d2Vlbi52YXJzLFxuICAgICAgICBlYXNlID0gdmFycy5lYXNlLFxuICAgICAgICBzdGFydEF0ID0gdmFycy5zdGFydEF0LFxuICAgICAgICBpbW1lZGlhdGVSZW5kZXIgPSB2YXJzLmltbWVkaWF0ZVJlbmRlcixcbiAgICAgICAgbGF6eSA9IHZhcnMubGF6eSxcbiAgICAgICAgb25VcGRhdGUgPSB2YXJzLm9uVXBkYXRlLFxuICAgICAgICBvblVwZGF0ZVBhcmFtcyA9IHZhcnMub25VcGRhdGVQYXJhbXMsXG4gICAgICAgIGNhbGxiYWNrU2NvcGUgPSB2YXJzLmNhbGxiYWNrU2NvcGUsXG4gICAgICAgIHJ1bkJhY2t3YXJkcyA9IHZhcnMucnVuQmFja3dhcmRzLFxuICAgICAgICB5b3lvRWFzZSA9IHZhcnMueW95b0Vhc2UsXG4gICAgICAgIGtleWZyYW1lcyA9IHZhcnMua2V5ZnJhbWVzLFxuICAgICAgICBhdXRvUmV2ZXJ0ID0gdmFycy5hdXRvUmV2ZXJ0LFxuICAgICAgICBkdXIgPSB0d2Vlbi5fZHVyLFxuICAgICAgICBwcmV2U3RhcnRBdCA9IHR3ZWVuLl9zdGFydEF0LFxuICAgICAgICB0YXJnZXRzID0gdHdlZW4uX3RhcmdldHMsXG4gICAgICAgIHBhcmVudCA9IHR3ZWVuLnBhcmVudCxcbiAgICAgICAgZnVsbFRhcmdldHMgPSBwYXJlbnQgJiYgcGFyZW50LmRhdGEgPT09IFwibmVzdGVkXCIgPyBwYXJlbnQucGFyZW50Ll90YXJnZXRzIDogdGFyZ2V0cyxcbiAgICAgICAgYXV0b092ZXJ3cml0ZSA9IHR3ZWVuLl9vdmVyd3JpdGUgPT09IFwiYXV0b1wiLFxuICAgICAgICB0bCA9IHR3ZWVuLnRpbWVsaW5lLFxuICAgICAgICBjbGVhblZhcnMsXG4gICAgICAgIGksXG4gICAgICAgIHAsXG4gICAgICAgIHB0LFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIGhhc1ByaW9yaXR5LFxuICAgICAgICBnc0RhdGEsXG4gICAgICAgIGhhcm5lc3MsXG4gICAgICAgIHBsdWdpbixcbiAgICAgICAgcHRMb29rdXAsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBoYXJuZXNzVmFycyxcbiAgICAgICAgb3ZlcndyaXR0ZW47XG4gICAgdGwgJiYgKCFrZXlmcmFtZXMgfHwgIWVhc2UpICYmIChlYXNlID0gXCJub25lXCIpO1xuICAgIHR3ZWVuLl9lYXNlID0gX3BhcnNlRWFzZShlYXNlLCBfZGVmYXVsdHMuZWFzZSk7XG4gICAgdHdlZW4uX3lFYXNlID0geW95b0Vhc2UgPyBfaW52ZXJ0RWFzZShfcGFyc2VFYXNlKHlveW9FYXNlID09PSB0cnVlID8gZWFzZSA6IHlveW9FYXNlLCBfZGVmYXVsdHMuZWFzZSkpIDogMDtcblxuICAgIGlmICh5b3lvRWFzZSAmJiB0d2Vlbi5feW95byAmJiAhdHdlZW4uX3JlcGVhdCkge1xuICAgICAgeW95b0Vhc2UgPSB0d2Vlbi5feUVhc2U7XG4gICAgICB0d2Vlbi5feUVhc2UgPSB0d2Vlbi5fZWFzZTtcbiAgICAgIHR3ZWVuLl9lYXNlID0geW95b0Vhc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0bCkge1xuICAgICAgaGFybmVzcyA9IHRhcmdldHNbMF0gPyBfZ2V0Q2FjaGUodGFyZ2V0c1swXSkuaGFybmVzcyA6IDA7XG4gICAgICBoYXJuZXNzVmFycyA9IGhhcm5lc3MgJiYgdmFyc1toYXJuZXNzLnByb3BdO1xuICAgICAgY2xlYW5WYXJzID0gX2NvcHlFeGNsdWRpbmcodmFycywgX3Jlc2VydmVkUHJvcHMpO1xuICAgICAgcHJldlN0YXJ0QXQgJiYgcHJldlN0YXJ0QXQucmVuZGVyKC0xLCB0cnVlKS5raWxsKCk7XG5cbiAgICAgIGlmIChzdGFydEF0KSB7XG4gICAgICAgIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLl9zdGFydEF0ID0gVHdlZW4uc2V0KHRhcmdldHMsIF9zZXREZWZhdWx0cyh7XG4gICAgICAgICAgZGF0YTogXCJpc1N0YXJ0XCIsXG4gICAgICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcbiAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICBpbW1lZGlhdGVSZW5kZXI6IHRydWUsXG4gICAgICAgICAgbGF6eTogX2lzTm90RmFsc2UobGF6eSksXG4gICAgICAgICAgc3RhcnRBdDogbnVsbCxcbiAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICBvblVwZGF0ZTogb25VcGRhdGUsXG4gICAgICAgICAgb25VcGRhdGVQYXJhbXM6IG9uVXBkYXRlUGFyYW1zLFxuICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IGNhbGxiYWNrU2NvcGUsXG4gICAgICAgICAgc3RhZ2dlcjogMFxuICAgICAgICB9LCBzdGFydEF0KSkpO1xuXG4gICAgICAgIGlmIChpbW1lZGlhdGVSZW5kZXIpIHtcbiAgICAgICAgICBpZiAodGltZSA+IDApIHtcbiAgICAgICAgICAgIGF1dG9SZXZlcnQgfHwgKHR3ZWVuLl9zdGFydEF0ID0gMCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChkdXIgJiYgISh0aW1lIDwgMCAmJiBwcmV2U3RhcnRBdCkpIHtcbiAgICAgICAgICAgIHRpbWUgJiYgKHR3ZWVuLl96VGltZSA9IHRpbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChydW5CYWNrd2FyZHMgJiYgZHVyKSB7XG4gICAgICAgIGlmIChwcmV2U3RhcnRBdCkge1xuICAgICAgICAgICFhdXRvUmV2ZXJ0ICYmICh0d2Vlbi5fc3RhcnRBdCA9IDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWUgJiYgKGltbWVkaWF0ZVJlbmRlciA9IGZhbHNlKTtcbiAgICAgICAgICBwID0gX3NldERlZmF1bHRzKHtcbiAgICAgICAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXG4gICAgICAgICAgICBkYXRhOiBcImlzRnJvbVN0YXJ0XCIsXG4gICAgICAgICAgICBsYXp5OiBpbW1lZGlhdGVSZW5kZXIgJiYgX2lzTm90RmFsc2UobGF6eSksXG4gICAgICAgICAgICBpbW1lZGlhdGVSZW5kZXI6IGltbWVkaWF0ZVJlbmRlcixcbiAgICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgICBwYXJlbnQ6IHBhcmVudFxuICAgICAgICAgIH0sIGNsZWFuVmFycyk7XG4gICAgICAgICAgaGFybmVzc1ZhcnMgJiYgKHBbaGFybmVzcy5wcm9wXSA9IGhhcm5lc3NWYXJzKTtcblxuICAgICAgICAgIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLl9zdGFydEF0ID0gVHdlZW4uc2V0KHRhcmdldHMsIHApKTtcblxuICAgICAgICAgIGlmICghaW1tZWRpYXRlUmVuZGVyKSB7XG4gICAgICAgICAgICBfaW5pdFR3ZWVuKHR3ZWVuLl9zdGFydEF0LCBfdGlueU51bSk7XG4gICAgICAgICAgfSBlbHNlIGlmICghdGltZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0d2Vlbi5fcHQgPSAwO1xuICAgICAgbGF6eSA9IGR1ciAmJiBfaXNOb3RGYWxzZShsYXp5KSB8fCBsYXp5ICYmICFkdXI7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldHNbaV07XG4gICAgICAgIGdzRGF0YSA9IHRhcmdldC5fZ3NhcCB8fCBfaGFybmVzcyh0YXJnZXRzKVtpXS5fZ3NhcDtcbiAgICAgICAgdHdlZW4uX3B0TG9va3VwW2ldID0gcHRMb29rdXAgPSB7fTtcbiAgICAgICAgX2xhenlMb29rdXBbZ3NEYXRhLmlkXSAmJiBfbGF6eVR3ZWVucy5sZW5ndGggJiYgX2xhenlSZW5kZXIoKTtcbiAgICAgICAgaW5kZXggPSBmdWxsVGFyZ2V0cyA9PT0gdGFyZ2V0cyA/IGkgOiBmdWxsVGFyZ2V0cy5pbmRleE9mKHRhcmdldCk7XG5cbiAgICAgICAgaWYgKGhhcm5lc3MgJiYgKHBsdWdpbiA9IG5ldyBoYXJuZXNzKCkpLmluaXQodGFyZ2V0LCBoYXJuZXNzVmFycyB8fCBjbGVhblZhcnMsIHR3ZWVuLCBpbmRleCwgZnVsbFRhcmdldHMpICE9PSBmYWxzZSkge1xuICAgICAgICAgIHR3ZWVuLl9wdCA9IHB0ID0gbmV3IFByb3BUd2Vlbih0d2Vlbi5fcHQsIHRhcmdldCwgcGx1Z2luLm5hbWUsIDAsIDEsIHBsdWdpbi5yZW5kZXIsIHBsdWdpbiwgMCwgcGx1Z2luLnByaW9yaXR5KTtcblxuICAgICAgICAgIHBsdWdpbi5fcHJvcHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcHRMb29rdXBbbmFtZV0gPSBwdDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHBsdWdpbi5wcmlvcml0eSAmJiAoaGFzUHJpb3JpdHkgPSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFybmVzcyB8fCBoYXJuZXNzVmFycykge1xuICAgICAgICAgIGZvciAocCBpbiBjbGVhblZhcnMpIHtcbiAgICAgICAgICAgIGlmIChfcGx1Z2luc1twXSAmJiAocGx1Z2luID0gX2NoZWNrUGx1Z2luKHAsIGNsZWFuVmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIGZ1bGxUYXJnZXRzKSkpIHtcbiAgICAgICAgICAgICAgcGx1Z2luLnByaW9yaXR5ICYmIChoYXNQcmlvcml0eSA9IDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHRMb29rdXBbcF0gPSBwdCA9IF9hZGRQcm9wVHdlZW4uY2FsbCh0d2VlbiwgdGFyZ2V0LCBwLCBcImdldFwiLCBjbGVhblZhcnNbcF0sIGluZGV4LCBmdWxsVGFyZ2V0cywgMCwgdmFycy5zdHJpbmdGaWx0ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHR3ZWVuLl9vcCAmJiB0d2Vlbi5fb3BbaV0gJiYgdHdlZW4ua2lsbCh0YXJnZXQsIHR3ZWVuLl9vcFtpXSk7XG5cbiAgICAgICAgaWYgKGF1dG9PdmVyd3JpdGUgJiYgdHdlZW4uX3B0KSB7XG4gICAgICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSB0d2VlbjtcblxuICAgICAgICAgIF9nbG9iYWxUaW1lbGluZS5raWxsVHdlZW5zT2YodGFyZ2V0LCBwdExvb2t1cCwgdHdlZW4uZ2xvYmFsVGltZSgwKSk7XG5cbiAgICAgICAgICBvdmVyd3JpdHRlbiA9ICF0d2Vlbi5wYXJlbnQ7XG4gICAgICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdHdlZW4uX3B0ICYmIGxhenkgJiYgKF9sYXp5TG9va3VwW2dzRGF0YS5pZF0gPSAxKTtcbiAgICAgIH1cblxuICAgICAgaGFzUHJpb3JpdHkgJiYgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSh0d2Vlbik7XG4gICAgICB0d2Vlbi5fb25Jbml0ICYmIHR3ZWVuLl9vbkluaXQodHdlZW4pO1xuICAgIH1cblxuICAgIHR3ZWVuLl9mcm9tID0gIXRsICYmICEhdmFycy5ydW5CYWNrd2FyZHM7XG4gICAgdHdlZW4uX29uVXBkYXRlID0gb25VcGRhdGU7XG4gICAgdHdlZW4uX2luaXR0ZWQgPSAoIXR3ZWVuLl9vcCB8fCB0d2Vlbi5fcHQpICYmICFvdmVyd3JpdHRlbjtcbiAgfSxcbiAgICAgIF9hZGRBbGlhc2VzVG9WYXJzID0gZnVuY3Rpb24gX2FkZEFsaWFzZXNUb1ZhcnModGFyZ2V0cywgdmFycykge1xuICAgIHZhciBoYXJuZXNzID0gdGFyZ2V0c1swXSA/IF9nZXRDYWNoZSh0YXJnZXRzWzBdKS5oYXJuZXNzIDogMCxcbiAgICAgICAgcHJvcGVydHlBbGlhc2VzID0gaGFybmVzcyAmJiBoYXJuZXNzLmFsaWFzZXMsXG4gICAgICAgIGNvcHksXG4gICAgICAgIHAsXG4gICAgICAgIGksXG4gICAgICAgIGFsaWFzZXM7XG5cbiAgICBpZiAoIXByb3BlcnR5QWxpYXNlcykge1xuICAgICAgcmV0dXJuIHZhcnM7XG4gICAgfVxuXG4gICAgY29weSA9IF9tZXJnZSh7fSwgdmFycyk7XG5cbiAgICBmb3IgKHAgaW4gcHJvcGVydHlBbGlhc2VzKSB7XG4gICAgICBpZiAocCBpbiBjb3B5KSB7XG4gICAgICAgIGFsaWFzZXMgPSBwcm9wZXJ0eUFsaWFzZXNbcF0uc3BsaXQoXCIsXCIpO1xuICAgICAgICBpID0gYWxpYXNlcy5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIGNvcHlbYWxpYXNlc1tpXV0gPSBjb3B5W3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvcHk7XG4gIH0sXG4gICAgICBfcGFyc2VGdW5jT3JTdHJpbmcgPSBmdW5jdGlvbiBfcGFyc2VGdW5jT3JTdHJpbmcodmFsdWUsIHR3ZWVuLCBpLCB0YXJnZXQsIHRhcmdldHMpIHtcbiAgICByZXR1cm4gX2lzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUuY2FsbCh0d2VlbiwgaSwgdGFyZ2V0LCB0YXJnZXRzKSA6IF9pc1N0cmluZyh2YWx1ZSkgJiYgfnZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIpID8gX3JlcGxhY2VSYW5kb20odmFsdWUpIDogdmFsdWU7XG4gIH0sXG4gICAgICBfc3RhZ2dlclR3ZWVuUHJvcHMgPSBfY2FsbGJhY2tOYW1lcyArIFwicmVwZWF0LHJlcGVhdERlbGF5LHlveW8scmVwZWF0UmVmcmVzaCx5b3lvRWFzZVwiLFxuICAgICAgX3N0YWdnZXJQcm9wc1RvU2tpcCA9IChfc3RhZ2dlclR3ZWVuUHJvcHMgKyBcIixpZCxzdGFnZ2VyLGRlbGF5LGR1cmF0aW9uLHBhdXNlZCxzY3JvbGxUcmlnZ2VyXCIpLnNwbGl0KFwiLFwiKTtcblxuICB2YXIgVHdlZW4gPSBmdW5jdGlvbiAoX0FuaW1hdGlvbjIpIHtcbiAgICBfaW5oZXJpdHNMb29zZShUd2VlbiwgX0FuaW1hdGlvbjIpO1xuXG4gICAgZnVuY3Rpb24gVHdlZW4odGFyZ2V0cywgdmFycywgdGltZSwgc2tpcEluaGVyaXQpIHtcbiAgICAgIHZhciBfdGhpczM7XG5cbiAgICAgIGlmICh0eXBlb2YgdmFycyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICB0aW1lLmR1cmF0aW9uID0gdmFycztcbiAgICAgICAgdmFycyA9IHRpbWU7XG4gICAgICAgIHRpbWUgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBfdGhpczMgPSBfQW5pbWF0aW9uMi5jYWxsKHRoaXMsIHNraXBJbmhlcml0ID8gdmFycyA6IF9pbmhlcml0RGVmYXVsdHModmFycyksIHRpbWUpIHx8IHRoaXM7XG4gICAgICB2YXIgX3RoaXMzJHZhcnMgPSBfdGhpczMudmFycyxcbiAgICAgICAgICBkdXJhdGlvbiA9IF90aGlzMyR2YXJzLmR1cmF0aW9uLFxuICAgICAgICAgIGRlbGF5ID0gX3RoaXMzJHZhcnMuZGVsYXksXG4gICAgICAgICAgaW1tZWRpYXRlUmVuZGVyID0gX3RoaXMzJHZhcnMuaW1tZWRpYXRlUmVuZGVyLFxuICAgICAgICAgIHN0YWdnZXIgPSBfdGhpczMkdmFycy5zdGFnZ2VyLFxuICAgICAgICAgIG92ZXJ3cml0ZSA9IF90aGlzMyR2YXJzLm92ZXJ3cml0ZSxcbiAgICAgICAgICBrZXlmcmFtZXMgPSBfdGhpczMkdmFycy5rZXlmcmFtZXMsXG4gICAgICAgICAgZGVmYXVsdHMgPSBfdGhpczMkdmFycy5kZWZhdWx0cyxcbiAgICAgICAgICBzY3JvbGxUcmlnZ2VyID0gX3RoaXMzJHZhcnMuc2Nyb2xsVHJpZ2dlcixcbiAgICAgICAgICB5b3lvRWFzZSA9IF90aGlzMyR2YXJzLnlveW9FYXNlLFxuICAgICAgICAgIHBhcmVudCA9IF90aGlzMy5wYXJlbnQsXG4gICAgICAgICAgcGFyc2VkVGFyZ2V0cyA9IChfaXNBcnJheSh0YXJnZXRzKSB8fCBfaXNUeXBlZEFycmF5KHRhcmdldHMpID8gX2lzTnVtYmVyKHRhcmdldHNbMF0pIDogXCJsZW5ndGhcIiBpbiB2YXJzKSA/IFt0YXJnZXRzXSA6IHRvQXJyYXkodGFyZ2V0cyksXG4gICAgICAgICAgdGwsXG4gICAgICAgICAgaSxcbiAgICAgICAgICBjb3B5LFxuICAgICAgICAgIGwsXG4gICAgICAgICAgcCxcbiAgICAgICAgICBjdXJUYXJnZXQsXG4gICAgICAgICAgc3RhZ2dlckZ1bmMsXG4gICAgICAgICAgc3RhZ2dlclZhcnNUb01lcmdlO1xuICAgICAgX3RoaXMzLl90YXJnZXRzID0gcGFyc2VkVGFyZ2V0cy5sZW5ndGggPyBfaGFybmVzcyhwYXJzZWRUYXJnZXRzKSA6IF93YXJuKFwiR1NBUCB0YXJnZXQgXCIgKyB0YXJnZXRzICsgXCIgbm90IGZvdW5kLiBodHRwczovL2dyZWVuc29jay5jb21cIiwgIV9jb25maWcubnVsbFRhcmdldFdhcm4pIHx8IFtdO1xuICAgICAgX3RoaXMzLl9wdExvb2t1cCA9IFtdO1xuICAgICAgX3RoaXMzLl9vdmVyd3JpdGUgPSBvdmVyd3JpdGU7XG5cbiAgICAgIGlmIChrZXlmcmFtZXMgfHwgc3RhZ2dlciB8fCBfaXNGdW5jT3JTdHJpbmcoZHVyYXRpb24pIHx8IF9pc0Z1bmNPclN0cmluZyhkZWxheSkpIHtcbiAgICAgICAgdmFycyA9IF90aGlzMy52YXJzO1xuICAgICAgICB0bCA9IF90aGlzMy50aW1lbGluZSA9IG5ldyBUaW1lbGluZSh7XG4gICAgICAgICAgZGF0YTogXCJuZXN0ZWRcIixcbiAgICAgICAgICBkZWZhdWx0czogZGVmYXVsdHMgfHwge31cbiAgICAgICAgfSk7XG4gICAgICAgIHRsLmtpbGwoKTtcbiAgICAgICAgdGwucGFyZW50ID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpO1xuXG4gICAgICAgIGlmIChrZXlmcmFtZXMpIHtcbiAgICAgICAgICBfc2V0RGVmYXVsdHModGwudmFycy5kZWZhdWx0cywge1xuICAgICAgICAgICAgZWFzZTogXCJub25lXCJcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGtleWZyYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChmcmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRsLnRvKHBhcnNlZFRhcmdldHMsIGZyYW1lLCBcIj5cIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbCA9IHBhcnNlZFRhcmdldHMubGVuZ3RoO1xuICAgICAgICAgIHN0YWdnZXJGdW5jID0gc3RhZ2dlciA/IGRpc3RyaWJ1dGUoc3RhZ2dlcikgOiBfZW1wdHlGdW5jO1xuXG4gICAgICAgICAgaWYgKF9pc09iamVjdChzdGFnZ2VyKSkge1xuICAgICAgICAgICAgZm9yIChwIGluIHN0YWdnZXIpIHtcbiAgICAgICAgICAgICAgaWYgKH5fc3RhZ2dlclR3ZWVuUHJvcHMuaW5kZXhPZihwKSkge1xuICAgICAgICAgICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZSB8fCAoc3RhZ2dlclZhcnNUb01lcmdlID0ge30pO1xuICAgICAgICAgICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZVtwXSA9IHN0YWdnZXJbcF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBjb3B5ID0ge307XG5cbiAgICAgICAgICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICAgICAgICAgIGlmIChfc3RhZ2dlclByb3BzVG9Ta2lwLmluZGV4T2YocCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgY29weVtwXSA9IHZhcnNbcF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29weS5zdGFnZ2VyID0gMDtcbiAgICAgICAgICAgIHlveW9FYXNlICYmIChjb3B5LnlveW9FYXNlID0geW95b0Vhc2UpO1xuICAgICAgICAgICAgc3RhZ2dlclZhcnNUb01lcmdlICYmIF9tZXJnZShjb3B5LCBzdGFnZ2VyVmFyc1RvTWVyZ2UpO1xuICAgICAgICAgICAgY3VyVGFyZ2V0ID0gcGFyc2VkVGFyZ2V0c1tpXTtcbiAgICAgICAgICAgIGNvcHkuZHVyYXRpb24gPSArX3BhcnNlRnVuY09yU3RyaW5nKGR1cmF0aW9uLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyksIGksIGN1clRhcmdldCwgcGFyc2VkVGFyZ2V0cyk7XG4gICAgICAgICAgICBjb3B5LmRlbGF5ID0gKCtfcGFyc2VGdW5jT3JTdHJpbmcoZGVsYXksIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgaSwgY3VyVGFyZ2V0LCBwYXJzZWRUYXJnZXRzKSB8fCAwKSAtIF90aGlzMy5fZGVsYXk7XG5cbiAgICAgICAgICAgIGlmICghc3RhZ2dlciAmJiBsID09PSAxICYmIGNvcHkuZGVsYXkpIHtcbiAgICAgICAgICAgICAgX3RoaXMzLl9kZWxheSA9IGRlbGF5ID0gY29weS5kZWxheTtcbiAgICAgICAgICAgICAgX3RoaXMzLl9zdGFydCArPSBkZWxheTtcbiAgICAgICAgICAgICAgY29weS5kZWxheSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRsLnRvKGN1clRhcmdldCwgY29weSwgc3RhZ2dlckZ1bmMoaSwgY3VyVGFyZ2V0LCBwYXJzZWRUYXJnZXRzKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGwuZHVyYXRpb24oKSA/IGR1cmF0aW9uID0gZGVsYXkgPSAwIDogX3RoaXMzLnRpbWVsaW5lID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGR1cmF0aW9uIHx8IF90aGlzMy5kdXJhdGlvbihkdXJhdGlvbiA9IHRsLmR1cmF0aW9uKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMzLnRpbWVsaW5lID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKG92ZXJ3cml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBfb3ZlcndyaXRpbmdUd2VlbiA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKTtcblxuICAgICAgICBfZ2xvYmFsVGltZWxpbmUua2lsbFR3ZWVuc09mKHBhcnNlZFRhcmdldHMpO1xuXG4gICAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuID0gMDtcbiAgICAgIH1cblxuICAgICAgcGFyZW50ICYmIF9wb3N0QWRkQ2hlY2tzKHBhcmVudCwgX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpKTtcblxuICAgICAgaWYgKGltbWVkaWF0ZVJlbmRlciB8fCAhZHVyYXRpb24gJiYgIWtleWZyYW1lcyAmJiBfdGhpczMuX3N0YXJ0ID09PSBfcm91bmQocGFyZW50Ll90aW1lKSAmJiBfaXNOb3RGYWxzZShpbW1lZGlhdGVSZW5kZXIpICYmIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyhfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMykpICYmIHBhcmVudC5kYXRhICE9PSBcIm5lc3RlZFwiKSB7XG4gICAgICAgIF90aGlzMy5fdFRpbWUgPSAtX3RpbnlOdW07XG5cbiAgICAgICAgX3RoaXMzLnJlbmRlcihNYXRoLm1heCgwLCAtZGVsYXkpKTtcbiAgICAgIH1cblxuICAgICAgc2Nyb2xsVHJpZ2dlciAmJiBfc2Nyb2xsVHJpZ2dlcihfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyksIHNjcm9sbFRyaWdnZXIpO1xuICAgICAgcmV0dXJuIF90aGlzMztcbiAgICB9XG5cbiAgICB2YXIgX3Byb3RvMyA9IFR3ZWVuLnByb3RvdHlwZTtcblxuICAgIF9wcm90bzMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gICAgICB2YXIgcHJldlRpbWUgPSB0aGlzLl90aW1lLFxuICAgICAgICAgIHREdXIgPSB0aGlzLl90RHVyLFxuICAgICAgICAgIGR1ciA9IHRoaXMuX2R1cixcbiAgICAgICAgICB0VGltZSA9IHRvdGFsVGltZSA+IHREdXIgLSBfdGlueU51bSAmJiB0b3RhbFRpbWUgPj0gMCA/IHREdXIgOiB0b3RhbFRpbWUgPCBfdGlueU51bSA/IDAgOiB0b3RhbFRpbWUsXG4gICAgICAgICAgdGltZSxcbiAgICAgICAgICBwdCxcbiAgICAgICAgICBpdGVyYXRpb24sXG4gICAgICAgICAgY3ljbGVEdXJhdGlvbixcbiAgICAgICAgICBwcmV2SXRlcmF0aW9uLFxuICAgICAgICAgIGlzWW95byxcbiAgICAgICAgICByYXRpbyxcbiAgICAgICAgICB0aW1lbGluZSxcbiAgICAgICAgICB5b3lvRWFzZTtcblxuICAgICAgaWYgKCFkdXIpIHtcbiAgICAgICAgX3JlbmRlclplcm9EdXJhdGlvblR3ZWVuKHRoaXMsIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgIH0gZWxzZSBpZiAodFRpbWUgIT09IHRoaXMuX3RUaW1lIHx8ICF0b3RhbFRpbWUgfHwgZm9yY2UgfHwgdGhpcy5fc3RhcnRBdCAmJiB0aGlzLl96VGltZSA8IDAgIT09IHRvdGFsVGltZSA8IDApIHtcbiAgICAgICAgdGltZSA9IHRUaW1lO1xuICAgICAgICB0aW1lbGluZSA9IHRoaXMudGltZWxpbmU7XG5cbiAgICAgICAgaWYgKHRoaXMuX3JlcGVhdCkge1xuICAgICAgICAgIGN5Y2xlRHVyYXRpb24gPSBkdXIgKyB0aGlzLl9yRGVsYXk7XG4gICAgICAgICAgdGltZSA9IF9yb3VuZCh0VGltZSAlIGN5Y2xlRHVyYXRpb24pO1xuXG4gICAgICAgICAgaWYgKHRUaW1lID09PSB0RHVyKSB7XG4gICAgICAgICAgICBpdGVyYXRpb24gPSB0aGlzLl9yZXBlYXQ7XG4gICAgICAgICAgICB0aW1lID0gZHVyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVyYXRpb24gPSB+fih0VGltZSAvIGN5Y2xlRHVyYXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoaXRlcmF0aW9uICYmIGl0ZXJhdGlvbiA9PT0gdFRpbWUgLyBjeWNsZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgICAgICAgIGl0ZXJhdGlvbi0tO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aW1lID4gZHVyICYmICh0aW1lID0gZHVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpc1lveW8gPSB0aGlzLl95b3lvICYmIGl0ZXJhdGlvbiAmIDE7XG5cbiAgICAgICAgICBpZiAoaXNZb3lvKSB7XG4gICAgICAgICAgICB5b3lvRWFzZSA9IHRoaXMuX3lFYXNlO1xuICAgICAgICAgICAgdGltZSA9IGR1ciAtIHRpbWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcHJldkl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0aGlzLl90VGltZSwgY3ljbGVEdXJhdGlvbik7XG5cbiAgICAgICAgICBpZiAodGltZSA9PT0gcHJldlRpbWUgJiYgIWZvcmNlICYmIHRoaXMuX2luaXR0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRpbWVsaW5lICYmIHRoaXMuX3lFYXNlICYmIF9wcm9wYWdhdGVZb3lvRWFzZSh0aW1lbGluZSwgaXNZb3lvKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudmFycy5yZXBlYXRSZWZyZXNoICYmICFpc1lveW8gJiYgIXRoaXMuX2xvY2spIHtcbiAgICAgICAgICAgICAgdGhpcy5fbG9jayA9IGZvcmNlID0gMTtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoX3JvdW5kKGN5Y2xlRHVyYXRpb24gKiBpdGVyYXRpb24pLCB0cnVlKS5pbnZhbGlkYXRlKCkuX2xvY2sgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5faW5pdHRlZCkge1xuICAgICAgICAgIGlmIChfYXR0ZW1wdEluaXRUd2Vlbih0aGlzLCB0b3RhbFRpbWUgPCAwID8gdG90YWxUaW1lIDogdGltZSwgZm9yY2UsIHN1cHByZXNzRXZlbnRzKSkge1xuICAgICAgICAgICAgdGhpcy5fdFRpbWUgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGR1ciAhPT0gdGhpcy5fZHVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RUaW1lID0gdFRpbWU7XG4gICAgICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuXG4gICAgICAgIGlmICghdGhpcy5fYWN0ICYmIHRoaXMuX3RzKSB7XG4gICAgICAgICAgdGhpcy5fYWN0ID0gMTtcbiAgICAgICAgICB0aGlzLl9sYXp5ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbyA9ICh5b3lvRWFzZSB8fCB0aGlzLl9lYXNlKSh0aW1lIC8gZHVyKTtcblxuICAgICAgICBpZiAodGhpcy5fZnJvbSkge1xuICAgICAgICAgIHRoaXMucmF0aW8gPSByYXRpbyA9IDEgLSByYXRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWUgJiYgIXByZXZUaW1lICYmICFzdXBwcmVzc0V2ZW50cyAmJiBfY2FsbGJhY2sodGhpcywgXCJvblN0YXJ0XCIpO1xuICAgICAgICBwdCA9IHRoaXMuX3B0O1xuXG4gICAgICAgIHdoaWxlIChwdCkge1xuICAgICAgICAgIHB0LnIocmF0aW8sIHB0LmQpO1xuICAgICAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lbGluZSAmJiB0aW1lbGluZS5yZW5kZXIodG90YWxUaW1lIDwgMCA/IHRvdGFsVGltZSA6ICF0aW1lICYmIGlzWW95byA/IC1fdGlueU51bSA6IHRpbWVsaW5lLl9kdXIgKiByYXRpbywgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB8fCB0aGlzLl9zdGFydEF0ICYmICh0aGlzLl96VGltZSA9IHRvdGFsVGltZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX29uVXBkYXRlICYmICFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICAgIHRvdGFsVGltZSA8IDAgJiYgdGhpcy5fc3RhcnRBdCAmJiB0aGlzLl9zdGFydEF0LnJlbmRlcih0b3RhbFRpbWUsIHRydWUsIGZvcmNlKTtcblxuICAgICAgICAgIF9jYWxsYmFjayh0aGlzLCBcIm9uVXBkYXRlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcmVwZWF0ICYmIGl0ZXJhdGlvbiAhPT0gcHJldkl0ZXJhdGlvbiAmJiB0aGlzLnZhcnMub25SZXBlYXQgJiYgIXN1cHByZXNzRXZlbnRzICYmIHRoaXMucGFyZW50ICYmIF9jYWxsYmFjayh0aGlzLCBcIm9uUmVwZWF0XCIpO1xuXG4gICAgICAgIGlmICgodFRpbWUgPT09IHRoaXMuX3REdXIgfHwgIXRUaW1lKSAmJiB0aGlzLl90VGltZSA9PT0gdFRpbWUpIHtcbiAgICAgICAgICB0b3RhbFRpbWUgPCAwICYmIHRoaXMuX3N0YXJ0QXQgJiYgIXRoaXMuX29uVXBkYXRlICYmIHRoaXMuX3N0YXJ0QXQucmVuZGVyKHRvdGFsVGltZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgKHRvdGFsVGltZSB8fCAhZHVyKSAmJiAodFRpbWUgPT09IHRoaXMuX3REdXIgJiYgdGhpcy5fdHMgPiAwIHx8ICF0VGltZSAmJiB0aGlzLl90cyA8IDApICYmIF9yZW1vdmVGcm9tUGFyZW50KHRoaXMsIDEpO1xuXG4gICAgICAgICAgaWYgKCFzdXBwcmVzc0V2ZW50cyAmJiAhKHRvdGFsVGltZSA8IDAgJiYgIXByZXZUaW1lKSAmJiAodFRpbWUgfHwgcHJldlRpbWUpKSB7XG4gICAgICAgICAgICBfY2FsbGJhY2sodGhpcywgdFRpbWUgPT09IHREdXIgPyBcIm9uQ29tcGxldGVcIiA6IFwib25SZXZlcnNlQ29tcGxldGVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3Byb20gJiYgISh0VGltZSA8IHREdXIgJiYgdGhpcy50aW1lU2NhbGUoKSA+IDApICYmIHRoaXMuX3Byb20oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIF9wcm90bzMudGFyZ2V0cyA9IGZ1bmN0aW9uIHRhcmdldHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0cztcbiAgICB9O1xuXG4gICAgX3Byb3RvMy5pbnZhbGlkYXRlID0gZnVuY3Rpb24gaW52YWxpZGF0ZSgpIHtcbiAgICAgIHRoaXMuX3B0ID0gdGhpcy5fb3AgPSB0aGlzLl9zdGFydEF0ID0gdGhpcy5fb25VcGRhdGUgPSB0aGlzLl9hY3QgPSB0aGlzLl9sYXp5ID0gMDtcbiAgICAgIHRoaXMuX3B0TG9va3VwID0gW107XG4gICAgICB0aGlzLnRpbWVsaW5lICYmIHRoaXMudGltZWxpbmUuaW52YWxpZGF0ZSgpO1xuICAgICAgcmV0dXJuIF9BbmltYXRpb24yLnByb3RvdHlwZS5pbnZhbGlkYXRlLmNhbGwodGhpcyk7XG4gICAgfTtcblxuICAgIF9wcm90bzMua2lsbCA9IGZ1bmN0aW9uIGtpbGwodGFyZ2V0cywgdmFycykge1xuICAgICAgaWYgKHZhcnMgPT09IHZvaWQgMCkge1xuICAgICAgICB2YXJzID0gXCJhbGxcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0YXJnZXRzICYmICghdmFycyB8fCB2YXJzID09PSBcImFsbFwiKSkge1xuICAgICAgICB0aGlzLl9sYXp5ID0gMDtcblxuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX2ludGVycnVwdCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy50aW1lbGluZSkge1xuICAgICAgICB2YXIgdER1ciA9IHRoaXMudGltZWxpbmUudG90YWxEdXJhdGlvbigpO1xuICAgICAgICB0aGlzLnRpbWVsaW5lLmtpbGxUd2VlbnNPZih0YXJnZXRzLCB2YXJzLCBfb3ZlcndyaXRpbmdUd2VlbiAmJiBfb3ZlcndyaXRpbmdUd2Vlbi52YXJzLm92ZXJ3cml0ZSAhPT0gdHJ1ZSkuX2ZpcnN0IHx8IF9pbnRlcnJ1cHQodGhpcyk7XG4gICAgICAgIHRoaXMucGFyZW50ICYmIHREdXIgIT09IHRoaXMudGltZWxpbmUudG90YWxEdXJhdGlvbigpICYmIF9zZXREdXJhdGlvbih0aGlzLCB0aGlzLl9kdXIgKiB0aGlzLnRpbWVsaW5lLl90RHVyIC8gdER1ciwgMCwgMSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGFyc2VkVGFyZ2V0cyA9IHRoaXMuX3RhcmdldHMsXG4gICAgICAgICAga2lsbGluZ1RhcmdldHMgPSB0YXJnZXRzID8gdG9BcnJheSh0YXJnZXRzKSA6IHBhcnNlZFRhcmdldHMsXG4gICAgICAgICAgcHJvcFR3ZWVuTG9va3VwID0gdGhpcy5fcHRMb29rdXAsXG4gICAgICAgICAgZmlyc3RQVCA9IHRoaXMuX3B0LFxuICAgICAgICAgIG92ZXJ3cml0dGVuUHJvcHMsXG4gICAgICAgICAgY3VyTG9va3VwLFxuICAgICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzLFxuICAgICAgICAgIHByb3BzLFxuICAgICAgICAgIHAsXG4gICAgICAgICAgcHQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKCghdmFycyB8fCB2YXJzID09PSBcImFsbFwiKSAmJiBfYXJyYXlzTWF0Y2gocGFyc2VkVGFyZ2V0cywga2lsbGluZ1RhcmdldHMpKSB7XG4gICAgICAgIHZhcnMgPT09IFwiYWxsXCIgJiYgKHRoaXMuX3B0ID0gMCk7XG4gICAgICAgIHJldHVybiBfaW50ZXJydXB0KHRoaXMpO1xuICAgICAgfVxuXG4gICAgICBvdmVyd3JpdHRlblByb3BzID0gdGhpcy5fb3AgPSB0aGlzLl9vcCB8fCBbXTtcblxuICAgICAgaWYgKHZhcnMgIT09IFwiYWxsXCIpIHtcbiAgICAgICAgaWYgKF9pc1N0cmluZyh2YXJzKSkge1xuICAgICAgICAgIHAgPSB7fTtcblxuICAgICAgICAgIF9mb3JFYWNoTmFtZSh2YXJzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBbbmFtZV0gPSAxO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFycyA9IHA7XG4gICAgICAgIH1cblxuICAgICAgICB2YXJzID0gX2FkZEFsaWFzZXNUb1ZhcnMocGFyc2VkVGFyZ2V0cywgdmFycyk7XG4gICAgICB9XG5cbiAgICAgIGkgPSBwYXJzZWRUYXJnZXRzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBpZiAofmtpbGxpbmdUYXJnZXRzLmluZGV4T2YocGFyc2VkVGFyZ2V0c1tpXSkpIHtcbiAgICAgICAgICBjdXJMb29rdXAgPSBwcm9wVHdlZW5Mb29rdXBbaV07XG5cbiAgICAgICAgICBpZiAodmFycyA9PT0gXCJhbGxcIikge1xuICAgICAgICAgICAgb3ZlcndyaXR0ZW5Qcm9wc1tpXSA9IHZhcnM7XG4gICAgICAgICAgICBwcm9wcyA9IGN1ckxvb2t1cDtcbiAgICAgICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzID0ge307XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzID0gb3ZlcndyaXR0ZW5Qcm9wc1tpXSA9IG92ZXJ3cml0dGVuUHJvcHNbaV0gfHwge307XG4gICAgICAgICAgICBwcm9wcyA9IHZhcnM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yIChwIGluIHByb3BzKSB7XG4gICAgICAgICAgICBwdCA9IGN1ckxvb2t1cCAmJiBjdXJMb29rdXBbcF07XG5cbiAgICAgICAgICAgIGlmIChwdCkge1xuICAgICAgICAgICAgICBpZiAoIShcImtpbGxcIiBpbiBwdC5kKSB8fCBwdC5kLmtpbGwocCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0odGhpcywgcHQsIFwiX3B0XCIpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGVsZXRlIGN1ckxvb2t1cFtwXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1ck92ZXJ3cml0ZVByb3BzICE9PSBcImFsbFwiKSB7XG4gICAgICAgICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzW3BdID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5faW5pdHRlZCAmJiAhdGhpcy5fcHQgJiYgZmlyc3RQVCAmJiBfaW50ZXJydXB0KHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnRvID0gZnVuY3Rpb24gdG8odGFyZ2V0cywgdmFycykge1xuICAgICAgcmV0dXJuIG5ldyBUd2Vlbih0YXJnZXRzLCB2YXJzLCBhcmd1bWVudHNbMl0pO1xuICAgIH07XG5cbiAgICBUd2Vlbi5mcm9tID0gZnVuY3Rpb24gZnJvbSh0YXJnZXRzLCB2YXJzKSB7XG4gICAgICByZXR1cm4gbmV3IFR3ZWVuKHRhcmdldHMsIF9wYXJzZVZhcnMoYXJndW1lbnRzLCAxKSk7XG4gICAgfTtcblxuICAgIFR3ZWVuLmRlbGF5ZWRDYWxsID0gZnVuY3Rpb24gZGVsYXllZENhbGwoZGVsYXksIGNhbGxiYWNrLCBwYXJhbXMsIHNjb3BlKSB7XG4gICAgICByZXR1cm4gbmV3IFR3ZWVuKGNhbGxiYWNrLCAwLCB7XG4gICAgICAgIGltbWVkaWF0ZVJlbmRlcjogZmFsc2UsXG4gICAgICAgIGxhenk6IGZhbHNlLFxuICAgICAgICBvdmVyd3JpdGU6IGZhbHNlLFxuICAgICAgICBkZWxheTogZGVsYXksXG4gICAgICAgIG9uQ29tcGxldGU6IGNhbGxiYWNrLFxuICAgICAgICBvblJldmVyc2VDb21wbGV0ZTogY2FsbGJhY2ssXG4gICAgICAgIG9uQ29tcGxldGVQYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgb25SZXZlcnNlQ29tcGxldGVQYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgY2FsbGJhY2tTY29wZTogc2NvcGVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUd2Vlbi5mcm9tVG8gPSBmdW5jdGlvbiBmcm9tVG8odGFyZ2V0cywgZnJvbVZhcnMsIHRvVmFycykge1xuICAgICAgcmV0dXJuIG5ldyBUd2Vlbih0YXJnZXRzLCBfcGFyc2VWYXJzKGFyZ3VtZW50cywgMikpO1xuICAgIH07XG5cbiAgICBUd2Vlbi5zZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0cywgdmFycykge1xuICAgICAgdmFycy5kdXJhdGlvbiA9IDA7XG4gICAgICB2YXJzLnJlcGVhdERlbGF5IHx8ICh2YXJzLnJlcGVhdCA9IDApO1xuICAgICAgcmV0dXJuIG5ldyBUd2Vlbih0YXJnZXRzLCB2YXJzKTtcbiAgICB9O1xuXG4gICAgVHdlZW4ua2lsbFR3ZWVuc09mID0gZnVuY3Rpb24ga2lsbFR3ZWVuc09mKHRhcmdldHMsIHByb3BzLCBvbmx5QWN0aXZlKSB7XG4gICAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmtpbGxUd2VlbnNPZih0YXJnZXRzLCBwcm9wcywgb25seUFjdGl2ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBUd2VlbjtcbiAgfShBbmltYXRpb24pO1xuXG4gIF9zZXREZWZhdWx0cyhUd2Vlbi5wcm90b3R5cGUsIHtcbiAgICBfdGFyZ2V0czogW10sXG4gICAgX2xhenk6IDAsXG4gICAgX3N0YXJ0QXQ6IDAsXG4gICAgX29wOiAwLFxuICAgIF9vbkluaXQ6IDBcbiAgfSk7XG5cbiAgX2ZvckVhY2hOYW1lKFwic3RhZ2dlclRvLHN0YWdnZXJGcm9tLHN0YWdnZXJGcm9tVG9cIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBUd2VlbltuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZSgpLFxuICAgICAgICAgIHBhcmFtcyA9IF9zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICAgIHBhcmFtcy5zcGxpY2UobmFtZSA9PT0gXCJzdGFnZ2VyRnJvbVRvXCIgPyA1IDogNCwgMCwgMCk7XG4gICAgICByZXR1cm4gdGxbbmFtZV0uYXBwbHkodGwsIHBhcmFtcyk7XG4gICAgfTtcbiAgfSk7XG5cbiAgdmFyIF9zZXR0ZXJQbGFpbiA9IGZ1bmN0aW9uIF9zZXR0ZXJQbGFpbih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIHJldHVybiB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG4gIH0sXG4gICAgICBfc2V0dGVyRnVuYyA9IGZ1bmN0aW9uIF9zZXR0ZXJGdW5jKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eV0odmFsdWUpO1xuICB9LFxuICAgICAgX3NldHRlckZ1bmNXaXRoUGFyYW0gPSBmdW5jdGlvbiBfc2V0dGVyRnVuY1dpdGhQYXJhbSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSkge1xuICAgIHJldHVybiB0YXJnZXRbcHJvcGVydHldKGRhdGEuZnAsIHZhbHVlKTtcbiAgfSxcbiAgICAgIF9zZXR0ZXJBdHRyaWJ1dGUgPSBmdW5jdGlvbiBfc2V0dGVyQXR0cmlidXRlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRhcmdldC5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHZhbHVlKTtcbiAgfSxcbiAgICAgIF9nZXRTZXR0ZXIgPSBmdW5jdGlvbiBfZ2V0U2V0dGVyKHRhcmdldCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gX2lzRnVuY3Rpb24odGFyZ2V0W3Byb3BlcnR5XSkgPyBfc2V0dGVyRnVuYyA6IF9pc1VuZGVmaW5lZCh0YXJnZXRbcHJvcGVydHldKSAmJiB0YXJnZXQuc2V0QXR0cmlidXRlID8gX3NldHRlckF0dHJpYnV0ZSA6IF9zZXR0ZXJQbGFpbjtcbiAgfSxcbiAgICAgIF9yZW5kZXJQbGFpbiA9IGZ1bmN0aW9uIF9yZW5kZXJQbGFpbihyYXRpbywgZGF0YSkge1xuICAgIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDAsIGRhdGEpO1xuICB9LFxuICAgICAgX3JlbmRlckJvb2xlYW4gPSBmdW5jdGlvbiBfcmVuZGVyQm9vbGVhbihyYXRpbywgZGF0YSkge1xuICAgIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgISEoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pLCBkYXRhKTtcbiAgfSxcbiAgICAgIF9yZW5kZXJDb21wbGV4U3RyaW5nID0gZnVuY3Rpb24gX3JlbmRlckNvbXBsZXhTdHJpbmcocmF0aW8sIGRhdGEpIHtcbiAgICB2YXIgcHQgPSBkYXRhLl9wdCxcbiAgICAgICAgcyA9IFwiXCI7XG5cbiAgICBpZiAoIXJhdGlvICYmIGRhdGEuYikge1xuICAgICAgcyA9IGRhdGEuYjtcbiAgICB9IGVsc2UgaWYgKHJhdGlvID09PSAxICYmIGRhdGEuZSkge1xuICAgICAgcyA9IGRhdGEuZTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHB0KSB7XG4gICAgICAgIHMgPSBwdC5wICsgKHB0Lm0gPyBwdC5tKHB0LnMgKyBwdC5jICogcmF0aW8pIDogTWF0aC5yb3VuZCgocHQucyArIHB0LmMgKiByYXRpbykgKiAxMDAwMCkgLyAxMDAwMCkgKyBzO1xuICAgICAgICBwdCA9IHB0Ll9uZXh0O1xuICAgICAgfVxuXG4gICAgICBzICs9IGRhdGEuYztcbiAgICB9XG5cbiAgICBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcywgZGF0YSk7XG4gIH0sXG4gICAgICBfcmVuZGVyUHJvcFR3ZWVucyA9IGZ1bmN0aW9uIF9yZW5kZXJQcm9wVHdlZW5zKHJhdGlvLCBkYXRhKSB7XG4gICAgdmFyIHB0ID0gZGF0YS5fcHQ7XG5cbiAgICB3aGlsZSAocHQpIHtcbiAgICAgIHB0LnIocmF0aW8sIHB0LmQpO1xuICAgICAgcHQgPSBwdC5fbmV4dDtcbiAgICB9XG4gIH0sXG4gICAgICBfYWRkUGx1Z2luTW9kaWZpZXIgPSBmdW5jdGlvbiBfYWRkUGx1Z2luTW9kaWZpZXIobW9kaWZpZXIsIHR3ZWVuLCB0YXJnZXQsIHByb3BlcnR5KSB7XG4gICAgdmFyIHB0ID0gdGhpcy5fcHQsXG4gICAgICAgIG5leHQ7XG5cbiAgICB3aGlsZSAocHQpIHtcbiAgICAgIG5leHQgPSBwdC5fbmV4dDtcbiAgICAgIHB0LnAgPT09IHByb3BlcnR5ICYmIHB0Lm1vZGlmaWVyKG1vZGlmaWVyLCB0d2VlbiwgdGFyZ2V0KTtcbiAgICAgIHB0ID0gbmV4dDtcbiAgICB9XG4gIH0sXG4gICAgICBfa2lsbFByb3BUd2VlbnNPZiA9IGZ1bmN0aW9uIF9raWxsUHJvcFR3ZWVuc09mKHByb3BlcnR5KSB7XG4gICAgdmFyIHB0ID0gdGhpcy5fcHQsXG4gICAgICAgIGhhc05vbkRlcGVuZGVudFJlbWFpbmluZyxcbiAgICAgICAgbmV4dDtcblxuICAgIHdoaWxlIChwdCkge1xuICAgICAgbmV4dCA9IHB0Ll9uZXh0O1xuXG4gICAgICBpZiAocHQucCA9PT0gcHJvcGVydHkgJiYgIXB0Lm9wIHx8IHB0Lm9wID09PSBwcm9wZXJ0eSkge1xuICAgICAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0odGhpcywgcHQsIFwiX3B0XCIpO1xuICAgICAgfSBlbHNlIGlmICghcHQuZGVwKSB7XG4gICAgICAgIGhhc05vbkRlcGVuZGVudFJlbWFpbmluZyA9IDE7XG4gICAgICB9XG5cbiAgICAgIHB0ID0gbmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gIWhhc05vbkRlcGVuZGVudFJlbWFpbmluZztcbiAgfSxcbiAgICAgIF9zZXR0ZXJXaXRoTW9kaWZpZXIgPSBmdW5jdGlvbiBfc2V0dGVyV2l0aE1vZGlmaWVyKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBkYXRhKSB7XG4gICAgZGF0YS5tU2V0KHRhcmdldCwgcHJvcGVydHksIGRhdGEubS5jYWxsKGRhdGEudHdlZW4sIHZhbHVlLCBkYXRhLm10KSwgZGF0YSk7XG4gIH0sXG4gICAgICBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5ID0gZnVuY3Rpb24gX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eShwYXJlbnQpIHtcbiAgICB2YXIgcHQgPSBwYXJlbnQuX3B0LFxuICAgICAgICBuZXh0LFxuICAgICAgICBwdDIsXG4gICAgICAgIGZpcnN0LFxuICAgICAgICBsYXN0O1xuXG4gICAgd2hpbGUgKHB0KSB7XG4gICAgICBuZXh0ID0gcHQuX25leHQ7XG4gICAgICBwdDIgPSBmaXJzdDtcblxuICAgICAgd2hpbGUgKHB0MiAmJiBwdDIucHIgPiBwdC5wcikge1xuICAgICAgICBwdDIgPSBwdDIuX25leHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChwdC5fcHJldiA9IHB0MiA/IHB0Mi5fcHJldiA6IGxhc3QpIHtcbiAgICAgICAgcHQuX3ByZXYuX25leHQgPSBwdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpcnN0ID0gcHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChwdC5fbmV4dCA9IHB0Mikge1xuICAgICAgICBwdDIuX3ByZXYgPSBwdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhc3QgPSBwdDtcbiAgICAgIH1cblxuICAgICAgcHQgPSBuZXh0O1xuICAgIH1cblxuICAgIHBhcmVudC5fcHQgPSBmaXJzdDtcbiAgfTtcblxuICB2YXIgUHJvcFR3ZWVuID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFByb3BUd2VlbihuZXh0LCB0YXJnZXQsIHByb3AsIHN0YXJ0LCBjaGFuZ2UsIHJlbmRlcmVyLCBkYXRhLCBzZXR0ZXIsIHByaW9yaXR5KSB7XG4gICAgICB0aGlzLnQgPSB0YXJnZXQ7XG4gICAgICB0aGlzLnMgPSBzdGFydDtcbiAgICAgIHRoaXMuYyA9IGNoYW5nZTtcbiAgICAgIHRoaXMucCA9IHByb3A7XG4gICAgICB0aGlzLnIgPSByZW5kZXJlciB8fCBfcmVuZGVyUGxhaW47XG4gICAgICB0aGlzLmQgPSBkYXRhIHx8IHRoaXM7XG4gICAgICB0aGlzLnNldCA9IHNldHRlciB8fCBfc2V0dGVyUGxhaW47XG4gICAgICB0aGlzLnByID0gcHJpb3JpdHkgfHwgMDtcbiAgICAgIHRoaXMuX25leHQgPSBuZXh0O1xuXG4gICAgICBpZiAobmV4dCkge1xuICAgICAgICBuZXh0Ll9wcmV2ID0gdGhpcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX3Byb3RvNCA9IFByb3BUd2Vlbi5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG80Lm1vZGlmaWVyID0gZnVuY3Rpb24gbW9kaWZpZXIoZnVuYywgdHdlZW4sIHRhcmdldCkge1xuICAgICAgdGhpcy5tU2V0ID0gdGhpcy5tU2V0IHx8IHRoaXMuc2V0O1xuICAgICAgdGhpcy5zZXQgPSBfc2V0dGVyV2l0aE1vZGlmaWVyO1xuICAgICAgdGhpcy5tID0gZnVuYztcbiAgICAgIHRoaXMubXQgPSB0YXJnZXQ7XG4gICAgICB0aGlzLnR3ZWVuID0gdHdlZW47XG4gICAgfTtcblxuICAgIHJldHVybiBQcm9wVHdlZW47XG4gIH0oKTtcblxuICBfZm9yRWFjaE5hbWUoX2NhbGxiYWNrTmFtZXMgKyBcInBhcmVudCxkdXJhdGlvbixlYXNlLGRlbGF5LG92ZXJ3cml0ZSxydW5CYWNrd2FyZHMsc3RhcnRBdCx5b3lvLGltbWVkaWF0ZVJlbmRlcixyZXBlYXQscmVwZWF0RGVsYXksZGF0YSxwYXVzZWQscmV2ZXJzZWQsbGF6eSxjYWxsYmFja1Njb3BlLHN0cmluZ0ZpbHRlcixpZCx5b3lvRWFzZSxzdGFnZ2VyLGluaGVyaXQscmVwZWF0UmVmcmVzaCxrZXlmcmFtZXMsYXV0b1JldmVydCxzY3JvbGxUcmlnZ2VyXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIF9yZXNlcnZlZFByb3BzW25hbWVdID0gMTtcbiAgfSk7XG5cbiAgX2dsb2JhbHMuVHdlZW5NYXggPSBfZ2xvYmFscy5Ud2VlbkxpdGUgPSBUd2VlbjtcbiAgX2dsb2JhbHMuVGltZWxpbmVMaXRlID0gX2dsb2JhbHMuVGltZWxpbmVNYXggPSBUaW1lbGluZTtcbiAgX2dsb2JhbFRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKHtcbiAgICBzb3J0Q2hpbGRyZW46IGZhbHNlLFxuICAgIGRlZmF1bHRzOiBfZGVmYXVsdHMsXG4gICAgYXV0b1JlbW92ZUNoaWxkcmVuOiB0cnVlLFxuICAgIGlkOiBcInJvb3RcIixcbiAgICBzbW9vdGhDaGlsZFRpbWluZzogdHJ1ZVxuICB9KTtcbiAgX2NvbmZpZy5zdHJpbmdGaWx0ZXIgPSBfY29sb3JTdHJpbmdGaWx0ZXI7XG4gIHZhciBfZ3NhcCA9IHtcbiAgICByZWdpc3RlclBsdWdpbjogZnVuY3Rpb24gcmVnaXN0ZXJQbHVnaW4oKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gX2NyZWF0ZVBsdWdpbihjb25maWcpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICB0aW1lbGluZTogZnVuY3Rpb24gdGltZWxpbmUodmFycykge1xuICAgICAgcmV0dXJuIG5ldyBUaW1lbGluZSh2YXJzKTtcbiAgICB9LFxuICAgIGdldFR3ZWVuc09mOiBmdW5jdGlvbiBnZXRUd2VlbnNPZih0YXJnZXRzLCBvbmx5QWN0aXZlKSB7XG4gICAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmdldFR3ZWVuc09mKHRhcmdldHMsIG9ubHlBY3RpdmUpO1xuICAgIH0sXG4gICAgZ2V0UHJvcGVydHk6IGZ1bmN0aW9uIGdldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHVuaXQsIHVuY2FjaGUpIHtcbiAgICAgIF9pc1N0cmluZyh0YXJnZXQpICYmICh0YXJnZXQgPSB0b0FycmF5KHRhcmdldClbMF0pO1xuXG4gICAgICB2YXIgZ2V0dGVyID0gX2dldENhY2hlKHRhcmdldCB8fCB7fSkuZ2V0LFxuICAgICAgICAgIGZvcm1hdCA9IHVuaXQgPyBfcGFzc1Rocm91Z2ggOiBfbnVtZXJpY0lmUG9zc2libGU7XG5cbiAgICAgIHVuaXQgPT09IFwibmF0aXZlXCIgJiYgKHVuaXQgPSBcIlwiKTtcbiAgICAgIHJldHVybiAhdGFyZ2V0ID8gdGFyZ2V0IDogIXByb3BlcnR5ID8gZnVuY3Rpb24gKHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXQoKF9wbHVnaW5zW3Byb3BlcnR5XSAmJiBfcGx1Z2luc1twcm9wZXJ0eV0uZ2V0IHx8IGdldHRlcikodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkpO1xuICAgICAgfSA6IGZvcm1hdCgoX3BsdWdpbnNbcHJvcGVydHldICYmIF9wbHVnaW5zW3Byb3BlcnR5XS5nZXQgfHwgZ2V0dGVyKSh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSk7XG4gICAgfSxcbiAgICBxdWlja1NldHRlcjogZnVuY3Rpb24gcXVpY2tTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCkge1xuICAgICAgdGFyZ2V0ID0gdG9BcnJheSh0YXJnZXQpO1xuXG4gICAgICBpZiAodGFyZ2V0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFyIHNldHRlcnMgPSB0YXJnZXQubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIGdzYXAucXVpY2tTZXR0ZXIodCwgcHJvcGVydHksIHVuaXQpO1xuICAgICAgICB9KSxcbiAgICAgICAgICAgIGwgPSBzZXR0ZXJzLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHZhciBpID0gbDtcblxuICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgIHNldHRlcnNbaV0odmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0ID0gdGFyZ2V0WzBdIHx8IHt9O1xuXG4gICAgICB2YXIgUGx1Z2luID0gX3BsdWdpbnNbcHJvcGVydHldLFxuICAgICAgICAgIGNhY2hlID0gX2dldENhY2hlKHRhcmdldCksXG4gICAgICAgICAgcCA9IGNhY2hlLmhhcm5lc3MgJiYgKGNhY2hlLmhhcm5lc3MuYWxpYXNlcyB8fCB7fSlbcHJvcGVydHldIHx8IHByb3BlcnR5LFxuICAgICAgICAgIHNldHRlciA9IFBsdWdpbiA/IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcCA9IG5ldyBQbHVnaW4oKTtcbiAgICAgICAgX3F1aWNrVHdlZW4uX3B0ID0gMDtcbiAgICAgICAgcC5pbml0KHRhcmdldCwgdW5pdCA/IHZhbHVlICsgdW5pdCA6IHZhbHVlLCBfcXVpY2tUd2VlbiwgMCwgW3RhcmdldF0pO1xuICAgICAgICBwLnJlbmRlcigxLCBwKTtcbiAgICAgICAgX3F1aWNrVHdlZW4uX3B0ICYmIF9yZW5kZXJQcm9wVHdlZW5zKDEsIF9xdWlja1R3ZWVuKTtcbiAgICAgIH0gOiBjYWNoZS5zZXQodGFyZ2V0LCBwKTtcblxuICAgICAgcmV0dXJuIFBsdWdpbiA/IHNldHRlciA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gc2V0dGVyKHRhcmdldCwgcCwgdW5pdCA/IHZhbHVlICsgdW5pdCA6IHZhbHVlLCBjYWNoZSwgMSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgaXNUd2VlbmluZzogZnVuY3Rpb24gaXNUd2VlbmluZyh0YXJnZXRzKSB7XG4gICAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmdldFR3ZWVuc09mKHRhcmdldHMsIHRydWUpLmxlbmd0aCA+IDA7XG4gICAgfSxcbiAgICBkZWZhdWx0czogZnVuY3Rpb24gZGVmYXVsdHModmFsdWUpIHtcbiAgICAgIHZhbHVlICYmIHZhbHVlLmVhc2UgJiYgKHZhbHVlLmVhc2UgPSBfcGFyc2VFYXNlKHZhbHVlLmVhc2UsIF9kZWZhdWx0cy5lYXNlKSk7XG4gICAgICByZXR1cm4gX21lcmdlRGVlcChfZGVmYXVsdHMsIHZhbHVlIHx8IHt9KTtcbiAgICB9LFxuICAgIGNvbmZpZzogZnVuY3Rpb24gY29uZmlnKHZhbHVlKSB7XG4gICAgICByZXR1cm4gX21lcmdlRGVlcChfY29uZmlnLCB2YWx1ZSB8fCB7fSk7XG4gICAgfSxcbiAgICByZWdpc3RlckVmZmVjdDogZnVuY3Rpb24gcmVnaXN0ZXJFZmZlY3QoX3JlZikge1xuICAgICAgdmFyIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICAgICAgZWZmZWN0ID0gX3JlZi5lZmZlY3QsXG4gICAgICAgICAgcGx1Z2lucyA9IF9yZWYucGx1Z2lucyxcbiAgICAgICAgICBkZWZhdWx0cyA9IF9yZWYuZGVmYXVsdHMsXG4gICAgICAgICAgZXh0ZW5kVGltZWxpbmUgPSBfcmVmLmV4dGVuZFRpbWVsaW5lO1xuICAgICAgKHBsdWdpbnMgfHwgXCJcIikuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbk5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbk5hbWUgJiYgIV9wbHVnaW5zW3BsdWdpbk5hbWVdICYmICFfZ2xvYmFsc1twbHVnaW5OYW1lXSAmJiBfd2FybihuYW1lICsgXCIgZWZmZWN0IHJlcXVpcmVzIFwiICsgcGx1Z2luTmFtZSArIFwiIHBsdWdpbi5cIik7XG4gICAgICB9KTtcblxuICAgICAgX2VmZmVjdHNbbmFtZV0gPSBmdW5jdGlvbiAodGFyZ2V0cywgdmFycywgdGwpIHtcbiAgICAgICAgcmV0dXJuIGVmZmVjdCh0b0FycmF5KHRhcmdldHMpLCBfc2V0RGVmYXVsdHModmFycyB8fCB7fSwgZGVmYXVsdHMpLCB0bCk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoZXh0ZW5kVGltZWxpbmUpIHtcbiAgICAgICAgVGltZWxpbmUucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24gKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYWRkKF9lZmZlY3RzW25hbWVdKHRhcmdldHMsIF9pc09iamVjdCh2YXJzKSA/IHZhcnMgOiAocG9zaXRpb24gPSB2YXJzKSAmJiB7fSwgdGhpcyksIHBvc2l0aW9uKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlZ2lzdGVyRWFzZTogZnVuY3Rpb24gcmVnaXN0ZXJFYXNlKG5hbWUsIGVhc2UpIHtcbiAgICAgIF9lYXNlTWFwW25hbWVdID0gX3BhcnNlRWFzZShlYXNlKTtcbiAgICB9LFxuICAgIHBhcnNlRWFzZTogZnVuY3Rpb24gcGFyc2VFYXNlKGVhc2UsIGRlZmF1bHRFYXNlKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IF9wYXJzZUVhc2UoZWFzZSwgZGVmYXVsdEVhc2UpIDogX2Vhc2VNYXA7XG4gICAgfSxcbiAgICBnZXRCeUlkOiBmdW5jdGlvbiBnZXRCeUlkKGlkKSB7XG4gICAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmdldEJ5SWQoaWQpO1xuICAgIH0sXG4gICAgZXhwb3J0Um9vdDogZnVuY3Rpb24gZXhwb3J0Um9vdCh2YXJzLCBpbmNsdWRlRGVsYXllZENhbGxzKSB7XG4gICAgICBpZiAodmFycyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHZhcnMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lKHZhcnMpLFxuICAgICAgICAgIGNoaWxkLFxuICAgICAgICAgIG5leHQ7XG4gICAgICB0bC5zbW9vdGhDaGlsZFRpbWluZyA9IF9pc05vdEZhbHNlKHZhcnMuc21vb3RoQ2hpbGRUaW1pbmcpO1xuXG4gICAgICBfZ2xvYmFsVGltZWxpbmUucmVtb3ZlKHRsKTtcblxuICAgICAgdGwuX2RwID0gMDtcbiAgICAgIHRsLl90aW1lID0gdGwuX3RUaW1lID0gX2dsb2JhbFRpbWVsaW5lLl90aW1lO1xuICAgICAgY2hpbGQgPSBfZ2xvYmFsVGltZWxpbmUuX2ZpcnN0O1xuXG4gICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuXG4gICAgICAgIGlmIChpbmNsdWRlRGVsYXllZENhbGxzIHx8ICEoIWNoaWxkLl9kdXIgJiYgY2hpbGQgaW5zdGFuY2VvZiBUd2VlbiAmJiBjaGlsZC52YXJzLm9uQ29tcGxldGUgPT09IGNoaWxkLl90YXJnZXRzWzBdKSkge1xuICAgICAgICAgIF9hZGRUb1RpbWVsaW5lKHRsLCBjaGlsZCwgY2hpbGQuX3N0YXJ0IC0gY2hpbGQuX2RlbGF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkID0gbmV4dDtcbiAgICAgIH1cblxuICAgICAgX2FkZFRvVGltZWxpbmUoX2dsb2JhbFRpbWVsaW5lLCB0bCwgMCk7XG5cbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuICAgIHV0aWxzOiB7XG4gICAgICB3cmFwOiB3cmFwLFxuICAgICAgd3JhcFlveW86IHdyYXBZb3lvLFxuICAgICAgZGlzdHJpYnV0ZTogZGlzdHJpYnV0ZSxcbiAgICAgIHJhbmRvbTogcmFuZG9tLFxuICAgICAgc25hcDogc25hcCxcbiAgICAgIG5vcm1hbGl6ZTogbm9ybWFsaXplLFxuICAgICAgZ2V0VW5pdDogZ2V0VW5pdCxcbiAgICAgIGNsYW1wOiBjbGFtcCxcbiAgICAgIHNwbGl0Q29sb3I6IHNwbGl0Q29sb3IsXG4gICAgICB0b0FycmF5OiB0b0FycmF5LFxuICAgICAgbWFwUmFuZ2U6IG1hcFJhbmdlLFxuICAgICAgcGlwZTogcGlwZSxcbiAgICAgIHVuaXRpemU6IHVuaXRpemUsXG4gICAgICBpbnRlcnBvbGF0ZTogaW50ZXJwb2xhdGUsXG4gICAgICBzaHVmZmxlOiBzaHVmZmxlXG4gICAgfSxcbiAgICBpbnN0YWxsOiBfaW5zdGFsbCxcbiAgICBlZmZlY3RzOiBfZWZmZWN0cyxcbiAgICB0aWNrZXI6IF90aWNrZXIsXG4gICAgdXBkYXRlUm9vdDogVGltZWxpbmUudXBkYXRlUm9vdCxcbiAgICBwbHVnaW5zOiBfcGx1Z2lucyxcbiAgICBnbG9iYWxUaW1lbGluZTogX2dsb2JhbFRpbWVsaW5lLFxuICAgIGNvcmU6IHtcbiAgICAgIFByb3BUd2VlbjogUHJvcFR3ZWVuLFxuICAgICAgZ2xvYmFsczogX2FkZEdsb2JhbCxcbiAgICAgIFR3ZWVuOiBUd2VlbixcbiAgICAgIFRpbWVsaW5lOiBUaW1lbGluZSxcbiAgICAgIEFuaW1hdGlvbjogQW5pbWF0aW9uLFxuICAgICAgZ2V0Q2FjaGU6IF9nZXRDYWNoZSxcbiAgICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbTogX3JlbW92ZUxpbmtlZExpc3RJdGVtXG4gICAgfVxuICB9O1xuXG4gIF9mb3JFYWNoTmFtZShcInRvLGZyb20sZnJvbVRvLGRlbGF5ZWRDYWxsLHNldCxraWxsVHdlZW5zT2ZcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gX2dzYXBbbmFtZV0gPSBUd2VlbltuYW1lXTtcbiAgfSk7XG5cbiAgX3RpY2tlci5hZGQoVGltZWxpbmUudXBkYXRlUm9vdCk7XG5cbiAgX3F1aWNrVHdlZW4gPSBfZ3NhcC50byh7fSwge1xuICAgIGR1cmF0aW9uOiAwXG4gIH0pO1xuXG4gIHZhciBfZ2V0UGx1Z2luUHJvcFR3ZWVuID0gZnVuY3Rpb24gX2dldFBsdWdpblByb3BUd2VlbihwbHVnaW4sIHByb3ApIHtcbiAgICB2YXIgcHQgPSBwbHVnaW4uX3B0O1xuXG4gICAgd2hpbGUgKHB0ICYmIHB0LnAgIT09IHByb3AgJiYgcHQub3AgIT09IHByb3AgJiYgcHQuZnAgIT09IHByb3ApIHtcbiAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHB0O1xuICB9LFxuICAgICAgX2FkZE1vZGlmaWVycyA9IGZ1bmN0aW9uIF9hZGRNb2RpZmllcnModHdlZW4sIG1vZGlmaWVycykge1xuICAgIHZhciB0YXJnZXRzID0gdHdlZW4uX3RhcmdldHMsXG4gICAgICAgIHAsXG4gICAgICAgIGksXG4gICAgICAgIHB0O1xuXG4gICAgZm9yIChwIGluIG1vZGlmaWVycykge1xuICAgICAgaSA9IHRhcmdldHMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHB0ID0gdHdlZW4uX3B0TG9va3VwW2ldW3BdO1xuXG4gICAgICAgIGlmIChwdCAmJiAocHQgPSBwdC5kKSkge1xuICAgICAgICAgIGlmIChwdC5fcHQpIHtcbiAgICAgICAgICAgIHB0ID0gX2dldFBsdWdpblByb3BUd2VlbihwdCwgcCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcHQgJiYgcHQubW9kaWZpZXIgJiYgcHQubW9kaWZpZXIobW9kaWZpZXJzW3BdLCB0d2VlbiwgdGFyZ2V0c1tpXSwgcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gICAgICBfYnVpbGRNb2RpZmllclBsdWdpbiA9IGZ1bmN0aW9uIF9idWlsZE1vZGlmaWVyUGx1Z2luKG5hbWUsIG1vZGlmaWVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICByYXdWYXJzOiAxLFxuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhcnMsIHR3ZWVuKSB7XG4gICAgICAgIHR3ZWVuLl9vbkluaXQgPSBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICAgICAgICB2YXIgdGVtcCwgcDtcblxuICAgICAgICAgIGlmIChfaXNTdHJpbmcodmFycykpIHtcbiAgICAgICAgICAgIHRlbXAgPSB7fTtcblxuICAgICAgICAgICAgX2ZvckVhY2hOYW1lKHZhcnMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZW1wW25hbWVdID0gMTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXJzID0gdGVtcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobW9kaWZpZXIpIHtcbiAgICAgICAgICAgIHRlbXAgPSB7fTtcblxuICAgICAgICAgICAgZm9yIChwIGluIHZhcnMpIHtcbiAgICAgICAgICAgICAgdGVtcFtwXSA9IG1vZGlmaWVyKHZhcnNbcF0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXJzID0gdGVtcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfYWRkTW9kaWZpZXJzKHR3ZWVuLCB2YXJzKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBnc2FwID0gX2dzYXAucmVnaXN0ZXJQbHVnaW4oe1xuICAgIG5hbWU6IFwiYXR0clwiLFxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldHMpIHtcbiAgICAgIHZhciBwLCBwdDtcblxuICAgICAgZm9yIChwIGluIHZhcnMpIHtcbiAgICAgICAgcHQgPSB0aGlzLmFkZCh0YXJnZXQsIFwic2V0QXR0cmlidXRlXCIsICh0YXJnZXQuZ2V0QXR0cmlidXRlKHApIHx8IDApICsgXCJcIiwgdmFyc1twXSwgaW5kZXgsIHRhcmdldHMsIDAsIDAsIHApO1xuICAgICAgICBwdCAmJiAocHQub3AgPSBwKTtcblxuICAgICAgICB0aGlzLl9wcm9wcy5wdXNoKHApO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6IFwiZW5kQXJyYXlcIixcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHRhcmdldCwgdmFsdWUpIHtcbiAgICAgIHZhciBpID0gdmFsdWUubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHRoaXMuYWRkKHRhcmdldCwgaSwgdGFyZ2V0W2ldIHx8IDAsIHZhbHVlW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIF9idWlsZE1vZGlmaWVyUGx1Z2luKFwicm91bmRQcm9wc1wiLCBfcm91bmRNb2RpZmllciksIF9idWlsZE1vZGlmaWVyUGx1Z2luKFwibW9kaWZpZXJzXCIpLCBfYnVpbGRNb2RpZmllclBsdWdpbihcInNuYXBcIiwgc25hcCkpIHx8IF9nc2FwO1xuICBUd2Vlbi52ZXJzaW9uID0gVGltZWxpbmUudmVyc2lvbiA9IGdzYXAudmVyc2lvbiA9IFwiMy41LjFcIjtcbiAgX2NvcmVSZWFkeSA9IDE7XG5cbiAgaWYgKF93aW5kb3dFeGlzdHMoKSkge1xuICAgIF93YWtlKCk7XG4gIH1cblxuICB2YXIgUG93ZXIwID0gX2Vhc2VNYXAuUG93ZXIwLFxuICAgICAgUG93ZXIxID0gX2Vhc2VNYXAuUG93ZXIxLFxuICAgICAgUG93ZXIyID0gX2Vhc2VNYXAuUG93ZXIyLFxuICAgICAgUG93ZXIzID0gX2Vhc2VNYXAuUG93ZXIzLFxuICAgICAgUG93ZXI0ID0gX2Vhc2VNYXAuUG93ZXI0LFxuICAgICAgTGluZWFyID0gX2Vhc2VNYXAuTGluZWFyLFxuICAgICAgUXVhZCA9IF9lYXNlTWFwLlF1YWQsXG4gICAgICBDdWJpYyA9IF9lYXNlTWFwLkN1YmljLFxuICAgICAgUXVhcnQgPSBfZWFzZU1hcC5RdWFydCxcbiAgICAgIFF1aW50ID0gX2Vhc2VNYXAuUXVpbnQsXG4gICAgICBTdHJvbmcgPSBfZWFzZU1hcC5TdHJvbmcsXG4gICAgICBFbGFzdGljID0gX2Vhc2VNYXAuRWxhc3RpYyxcbiAgICAgIEJhY2sgPSBfZWFzZU1hcC5CYWNrLFxuICAgICAgU3RlcHBlZEVhc2UgPSBfZWFzZU1hcC5TdGVwcGVkRWFzZSxcbiAgICAgIEJvdW5jZSA9IF9lYXNlTWFwLkJvdW5jZSxcbiAgICAgIFNpbmUgPSBfZWFzZU1hcC5TaW5lLFxuICAgICAgRXhwbyA9IF9lYXNlTWFwLkV4cG8sXG4gICAgICBDaXJjID0gX2Vhc2VNYXAuQ2lyYztcblxuICB2YXIgX3dpbiQxLFxuICAgICAgX2RvYyQxLFxuICAgICAgX2RvY0VsZW1lbnQsXG4gICAgICBfcGx1Z2luSW5pdHRlZCxcbiAgICAgIF90ZW1wRGl2LFxuICAgICAgX3RlbXBEaXZTdHlsZXIsXG4gICAgICBfcmVjZW50U2V0dGVyUGx1Z2luLFxuICAgICAgX3dpbmRvd0V4aXN0cyQxID0gZnVuY3Rpb24gX3dpbmRvd0V4aXN0cygpIHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgfSxcbiAgICAgIF90cmFuc2Zvcm1Qcm9wcyA9IHt9LFxuICAgICAgX1JBRDJERUcgPSAxODAgLyBNYXRoLlBJLFxuICAgICAgX0RFRzJSQUQgPSBNYXRoLlBJIC8gMTgwLFxuICAgICAgX2F0YW4yID0gTWF0aC5hdGFuMixcbiAgICAgIF9iaWdOdW0kMSA9IDFlOCxcbiAgICAgIF9jYXBzRXhwID0gLyhbQS1aXSkvZyxcbiAgICAgIF9ob3Jpem9udGFsRXhwID0gLyg/OmxlZnR8cmlnaHR8d2lkdGh8bWFyZ2lufHBhZGRpbmd8eCkvaSxcbiAgICAgIF9jb21wbGV4RXhwID0gL1tcXHMsXFwoXVxcUy8sXG4gICAgICBfcHJvcGVydHlBbGlhc2VzID0ge1xuICAgIGF1dG9BbHBoYTogXCJvcGFjaXR5LHZpc2liaWxpdHlcIixcbiAgICBzY2FsZTogXCJzY2FsZVgsc2NhbGVZXCIsXG4gICAgYWxwaGE6IFwib3BhY2l0eVwiXG4gIH0sXG4gICAgICBfcmVuZGVyQ1NTUHJvcCA9IGZ1bmN0aW9uIF9yZW5kZXJDU1NQcm9wKHJhdGlvLCBkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCBNYXRoLnJvdW5kKChkYXRhLnMgKyBkYXRhLmMgKiByYXRpbykgKiAxMDAwMCkgLyAxMDAwMCArIGRhdGEudSwgZGF0YSk7XG4gIH0sXG4gICAgICBfcmVuZGVyUHJvcFdpdGhFbmQgPSBmdW5jdGlvbiBfcmVuZGVyUHJvcFdpdGhFbmQocmF0aW8sIGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHJhdGlvID09PSAxID8gZGF0YS5lIDogTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDAgKyBkYXRhLnUsIGRhdGEpO1xuICB9LFxuICAgICAgX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nID0gZnVuY3Rpb24gX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nKHJhdGlvLCBkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyA/IE1hdGgucm91bmQoKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwICsgZGF0YS51IDogZGF0YS5iLCBkYXRhKTtcbiAgfSxcbiAgICAgIF9yZW5kZXJSb3VuZGVkQ1NTUHJvcCA9IGZ1bmN0aW9uIF9yZW5kZXJSb3VuZGVkQ1NTUHJvcChyYXRpbywgZGF0YSkge1xuICAgIHZhciB2YWx1ZSA9IGRhdGEucyArIGRhdGEuYyAqIHJhdGlvO1xuICAgIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCB+fih2YWx1ZSArICh2YWx1ZSA8IDAgPyAtLjUgOiAuNSkpICsgZGF0YS51LCBkYXRhKTtcbiAgfSxcbiAgICAgIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlID0gZnVuY3Rpb24gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWUocmF0aW8sIGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHJhdGlvID8gZGF0YS5lIDogZGF0YS5iLCBkYXRhKTtcbiAgfSxcbiAgICAgIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlT25seUF0RW5kID0gZnVuY3Rpb24gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWVPbmx5QXRFbmQocmF0aW8sIGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHJhdGlvICE9PSAxID8gZGF0YS5iIDogZGF0YS5lLCBkYXRhKTtcbiAgfSxcbiAgICAgIF9zZXR0ZXJDU1NTdHlsZSA9IGZ1bmN0aW9uIF9zZXR0ZXJDU1NTdHlsZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIHJldHVybiB0YXJnZXQuc3R5bGVbcHJvcGVydHldID0gdmFsdWU7XG4gIH0sXG4gICAgICBfc2V0dGVyQ1NTUHJvcCA9IGZ1bmN0aW9uIF9zZXR0ZXJDU1NQcm9wKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpO1xuICB9LFxuICAgICAgX3NldHRlclRyYW5zZm9ybSA9IGZ1bmN0aW9uIF9zZXR0ZXJUcmFuc2Zvcm0odGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdGFyZ2V0Ll9nc2FwW3Byb3BlcnR5XSA9IHZhbHVlO1xuICB9LFxuICAgICAgX3NldHRlclNjYWxlID0gZnVuY3Rpb24gX3NldHRlclNjYWxlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRhcmdldC5fZ3NhcC5zY2FsZVggPSB0YXJnZXQuX2dzYXAuc2NhbGVZID0gdmFsdWU7XG4gIH0sXG4gICAgICBfc2V0dGVyU2NhbGVXaXRoUmVuZGVyID0gZnVuY3Rpb24gX3NldHRlclNjYWxlV2l0aFJlbmRlcih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSwgcmF0aW8pIHtcbiAgICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXA7XG4gICAgY2FjaGUuc2NhbGVYID0gY2FjaGUuc2NhbGVZID0gdmFsdWU7XG4gICAgY2FjaGUucmVuZGVyVHJhbnNmb3JtKHJhdGlvLCBjYWNoZSk7XG4gIH0sXG4gICAgICBfc2V0dGVyVHJhbnNmb3JtV2l0aFJlbmRlciA9IGZ1bmN0aW9uIF9zZXR0ZXJUcmFuc2Zvcm1XaXRoUmVuZGVyKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBkYXRhLCByYXRpbykge1xuICAgIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcDtcbiAgICBjYWNoZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0ocmF0aW8sIGNhY2hlKTtcbiAgfSxcbiAgICAgIF90cmFuc2Zvcm1Qcm9wID0gXCJ0cmFuc2Zvcm1cIixcbiAgICAgIF90cmFuc2Zvcm1PcmlnaW5Qcm9wID0gX3RyYW5zZm9ybVByb3AgKyBcIk9yaWdpblwiLFxuICAgICAgX3N1cHBvcnRzM0QsXG4gICAgICBfY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIF9jcmVhdGVFbGVtZW50KHR5cGUsIG5zKSB7XG4gICAgdmFyIGUgPSBfZG9jJDEuY3JlYXRlRWxlbWVudE5TID8gX2RvYyQxLmNyZWF0ZUVsZW1lbnROUygobnMgfHwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIpLnJlcGxhY2UoL15odHRwcy8sIFwiaHR0cFwiKSwgdHlwZSkgOiBfZG9jJDEuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICByZXR1cm4gZS5zdHlsZSA/IGUgOiBfZG9jJDEuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgfSxcbiAgICAgIF9nZXRDb21wdXRlZFByb3BlcnR5ID0gZnVuY3Rpb24gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgc2tpcFByZWZpeEZhbGxiYWNrKSB7XG4gICAgdmFyIGNzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpO1xuICAgIHJldHVybiBjc1twcm9wZXJ0eV0gfHwgY3MuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eS5yZXBsYWNlKF9jYXBzRXhwLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpKSB8fCBjcy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KSB8fCAhc2tpcFByZWZpeEZhbGxiYWNrICYmIF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX2NoZWNrUHJvcFByZWZpeChwcm9wZXJ0eSkgfHwgcHJvcGVydHksIDEpIHx8IFwiXCI7XG4gIH0sXG4gICAgICBfcHJlZml4ZXMgPSBcIk8sTW96LG1zLE1zLFdlYmtpdFwiLnNwbGl0KFwiLFwiKSxcbiAgICAgIF9jaGVja1Byb3BQcmVmaXggPSBmdW5jdGlvbiBfY2hlY2tQcm9wUHJlZml4KHByb3BlcnR5LCBlbGVtZW50LCBwcmVmZXJQcmVmaXgpIHtcbiAgICB2YXIgZSA9IGVsZW1lbnQgfHwgX3RlbXBEaXYsXG4gICAgICAgIHMgPSBlLnN0eWxlLFxuICAgICAgICBpID0gNTtcblxuICAgIGlmIChwcm9wZXJ0eSBpbiBzICYmICFwcmVmZXJQcmVmaXgpIHtcbiAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICB9XG5cbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcGVydHkuc3Vic3RyKDEpO1xuXG4gICAgd2hpbGUgKGktLSAmJiAhKF9wcmVmaXhlc1tpXSArIHByb3BlcnR5IGluIHMpKSB7fVxuXG4gICAgcmV0dXJuIGkgPCAwID8gbnVsbCA6IChpID09PSAzID8gXCJtc1wiIDogaSA+PSAwID8gX3ByZWZpeGVzW2ldIDogXCJcIikgKyBwcm9wZXJ0eTtcbiAgfSxcbiAgICAgIF9pbml0Q29yZSA9IGZ1bmN0aW9uIF9pbml0Q29yZSgpIHtcbiAgICBpZiAoX3dpbmRvd0V4aXN0cyQxKCkgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICBfd2luJDEgPSB3aW5kb3c7XG4gICAgICBfZG9jJDEgPSBfd2luJDEuZG9jdW1lbnQ7XG4gICAgICBfZG9jRWxlbWVudCA9IF9kb2MkMS5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICBfdGVtcERpdiA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIpIHx8IHtcbiAgICAgICAgc3R5bGU6IHt9XG4gICAgICB9O1xuICAgICAgX3RlbXBEaXZTdHlsZXIgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIF90cmFuc2Zvcm1Qcm9wID0gX2NoZWNrUHJvcFByZWZpeChfdHJhbnNmb3JtUHJvcCk7XG4gICAgICBfdHJhbnNmb3JtT3JpZ2luUHJvcCA9IF90cmFuc2Zvcm1Qcm9wICsgXCJPcmlnaW5cIjtcbiAgICAgIF90ZW1wRGl2LnN0eWxlLmNzc1RleHQgPSBcImJvcmRlci13aWR0aDowO2xpbmUtaGVpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGU7cGFkZGluZzowXCI7XG4gICAgICBfc3VwcG9ydHMzRCA9ICEhX2NoZWNrUHJvcFByZWZpeChcInBlcnNwZWN0aXZlXCIpO1xuICAgICAgX3BsdWdpbkluaXR0ZWQgPSAxO1xuICAgIH1cbiAgfSxcbiAgICAgIF9nZXRCQm94SGFjayA9IGZ1bmN0aW9uIF9nZXRCQm94SGFjayhzd2FwSWZQb3NzaWJsZSkge1xuICAgIHZhciBzdmcgPSBfY3JlYXRlRWxlbWVudChcInN2Z1wiLCB0aGlzLm93bmVyU1ZHRWxlbWVudCAmJiB0aGlzLm93bmVyU1ZHRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ4bWxuc1wiKSB8fCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpLFxuICAgICAgICBvbGRQYXJlbnQgPSB0aGlzLnBhcmVudE5vZGUsXG4gICAgICAgIG9sZFNpYmxpbmcgPSB0aGlzLm5leHRTaWJsaW5nLFxuICAgICAgICBvbGRDU1MgPSB0aGlzLnN0eWxlLmNzc1RleHQsXG4gICAgICAgIGJib3g7XG5cbiAgICBfZG9jRWxlbWVudC5hcHBlbmRDaGlsZChzdmcpO1xuXG4gICAgc3ZnLmFwcGVuZENoaWxkKHRoaXMpO1xuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIGlmIChzd2FwSWZQb3NzaWJsZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYmJveCA9IHRoaXMuZ2V0QkJveCgpO1xuICAgICAgICB0aGlzLl9nc2FwQkJveCA9IHRoaXMuZ2V0QkJveDtcbiAgICAgICAgdGhpcy5nZXRCQm94ID0gX2dldEJCb3hIYWNrO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2dzYXBCQm94KSB7XG4gICAgICBiYm94ID0gdGhpcy5fZ3NhcEJCb3goKTtcbiAgICB9XG5cbiAgICBpZiAob2xkUGFyZW50KSB7XG4gICAgICBpZiAob2xkU2libGluZykge1xuICAgICAgICBvbGRQYXJlbnQuaW5zZXJ0QmVmb3JlKHRoaXMsIG9sZFNpYmxpbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2xkUGFyZW50LmFwcGVuZENoaWxkKHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9kb2NFbGVtZW50LnJlbW92ZUNoaWxkKHN2Zyk7XG5cbiAgICB0aGlzLnN0eWxlLmNzc1RleHQgPSBvbGRDU1M7XG4gICAgcmV0dXJuIGJib3g7XG4gIH0sXG4gICAgICBfZ2V0QXR0cmlidXRlRmFsbGJhY2tzID0gZnVuY3Rpb24gX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyh0YXJnZXQsIGF0dHJpYnV0ZXNBcnJheSkge1xuICAgIHZhciBpID0gYXR0cmlidXRlc0FycmF5Lmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZXNBcnJheVtpXSkpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlc0FycmF5W2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gICAgICBfZ2V0QkJveCA9IGZ1bmN0aW9uIF9nZXRCQm94KHRhcmdldCkge1xuICAgIHZhciBib3VuZHM7XG5cbiAgICB0cnkge1xuICAgICAgYm91bmRzID0gdGFyZ2V0LmdldEJCb3goKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYm91bmRzID0gX2dldEJCb3hIYWNrLmNhbGwodGFyZ2V0LCB0cnVlKTtcbiAgICB9XG5cbiAgICBib3VuZHMgJiYgKGJvdW5kcy53aWR0aCB8fCBib3VuZHMuaGVpZ2h0KSB8fCB0YXJnZXQuZ2V0QkJveCA9PT0gX2dldEJCb3hIYWNrIHx8IChib3VuZHMgPSBfZ2V0QkJveEhhY2suY2FsbCh0YXJnZXQsIHRydWUpKTtcbiAgICByZXR1cm4gYm91bmRzICYmICFib3VuZHMud2lkdGggJiYgIWJvdW5kcy54ICYmICFib3VuZHMueSA/IHtcbiAgICAgIHg6ICtfZ2V0QXR0cmlidXRlRmFsbGJhY2tzKHRhcmdldCwgW1wieFwiLCBcImN4XCIsIFwieDFcIl0pIHx8IDAsXG4gICAgICB5OiArX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyh0YXJnZXQsIFtcInlcIiwgXCJjeVwiLCBcInkxXCJdKSB8fCAwLFxuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9IDogYm91bmRzO1xuICB9LFxuICAgICAgX2lzU1ZHID0gZnVuY3Rpb24gX2lzU1ZHKGUpIHtcbiAgICByZXR1cm4gISEoZS5nZXRDVE0gJiYgKCFlLnBhcmVudE5vZGUgfHwgZS5vd25lclNWR0VsZW1lbnQpICYmIF9nZXRCQm94KGUpKTtcbiAgfSxcbiAgICAgIF9yZW1vdmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB7XG4gICAgaWYgKHByb3BlcnR5KSB7XG4gICAgICB2YXIgc3R5bGUgPSB0YXJnZXQuc3R5bGU7XG5cbiAgICAgIGlmIChwcm9wZXJ0eSBpbiBfdHJhbnNmb3JtUHJvcHMgJiYgcHJvcGVydHkgIT09IF90cmFuc2Zvcm1PcmlnaW5Qcm9wKSB7XG4gICAgICAgIHByb3BlcnR5ID0gX3RyYW5zZm9ybVByb3A7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdHlsZS5yZW1vdmVQcm9wZXJ0eSkge1xuICAgICAgICBpZiAocHJvcGVydHkuc3Vic3RyKDAsIDIpID09PSBcIm1zXCIgfHwgcHJvcGVydHkuc3Vic3RyKDAsIDYpID09PSBcIndlYmtpdFwiKSB7XG4gICAgICAgICAgcHJvcGVydHkgPSBcIi1cIiArIHByb3BlcnR5O1xuICAgICAgICB9XG5cbiAgICAgICAgc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUocHJvcGVydHkpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgICAgIF9hZGROb25Ud2VlbmluZ1BUID0gZnVuY3Rpb24gX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBiZWdpbm5pbmcsIGVuZCwgb25seVNldEF0RW5kKSB7XG4gICAgdmFyIHB0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCAwLCAxLCBvbmx5U2V0QXRFbmQgPyBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCA6IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlKTtcbiAgICBwbHVnaW4uX3B0ID0gcHQ7XG4gICAgcHQuYiA9IGJlZ2lubmluZztcbiAgICBwdC5lID0gZW5kO1xuXG4gICAgcGx1Z2luLl9wcm9wcy5wdXNoKHByb3BlcnR5KTtcblxuICAgIHJldHVybiBwdDtcbiAgfSxcbiAgICAgIF9ub25Db252ZXJ0aWJsZVVuaXRzID0ge1xuICAgIGRlZzogMSxcbiAgICByYWQ6IDEsXG4gICAgdHVybjogMVxuICB9LFxuICAgICAgX2NvbnZlcnRUb1VuaXQgPSBmdW5jdGlvbiBfY29udmVydFRvVW5pdCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgdW5pdCkge1xuICAgIHZhciBjdXJWYWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpIHx8IDAsXG4gICAgICAgIGN1clVuaXQgPSAodmFsdWUgKyBcIlwiKS50cmltKCkuc3Vic3RyKChjdXJWYWx1ZSArIFwiXCIpLmxlbmd0aCkgfHwgXCJweFwiLFxuICAgICAgICBzdHlsZSA9IF90ZW1wRGl2LnN0eWxlLFxuICAgICAgICBob3Jpem9udGFsID0gX2hvcml6b250YWxFeHAudGVzdChwcm9wZXJ0eSksXG4gICAgICAgIGlzUm9vdFNWRyA9IHRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwic3ZnXCIsXG4gICAgICAgIG1lYXN1cmVQcm9wZXJ0eSA9IChpc1Jvb3RTVkcgPyBcImNsaWVudFwiIDogXCJvZmZzZXRcIikgKyAoaG9yaXpvbnRhbCA/IFwiV2lkdGhcIiA6IFwiSGVpZ2h0XCIpLFxuICAgICAgICBhbW91bnQgPSAxMDAsXG4gICAgICAgIHRvUGl4ZWxzID0gdW5pdCA9PT0gXCJweFwiLFxuICAgICAgICB0b1BlcmNlbnQgPSB1bml0ID09PSBcIiVcIixcbiAgICAgICAgcHgsXG4gICAgICAgIHBhcmVudCxcbiAgICAgICAgY2FjaGUsXG4gICAgICAgIGlzU1ZHO1xuXG4gICAgaWYgKHVuaXQgPT09IGN1clVuaXQgfHwgIWN1clZhbHVlIHx8IF9ub25Db252ZXJ0aWJsZVVuaXRzW3VuaXRdIHx8IF9ub25Db252ZXJ0aWJsZVVuaXRzW2N1clVuaXRdKSB7XG4gICAgICByZXR1cm4gY3VyVmFsdWU7XG4gICAgfVxuXG4gICAgY3VyVW5pdCAhPT0gXCJweFwiICYmICF0b1BpeGVscyAmJiAoY3VyVmFsdWUgPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgXCJweFwiKSk7XG4gICAgaXNTVkcgPSB0YXJnZXQuZ2V0Q1RNICYmIF9pc1NWRyh0YXJnZXQpO1xuXG4gICAgaWYgKHRvUGVyY2VudCAmJiAoX3RyYW5zZm9ybVByb3BzW3Byb3BlcnR5XSB8fCB+cHJvcGVydHkuaW5kZXhPZihcImFkaXVzXCIpKSkge1xuICAgICAgcmV0dXJuIF9yb3VuZChjdXJWYWx1ZSAvIChpc1NWRyA/IHRhcmdldC5nZXRCQm94KClbaG9yaXpvbnRhbCA/IFwid2lkdGhcIiA6IFwiaGVpZ2h0XCJdIDogdGFyZ2V0W21lYXN1cmVQcm9wZXJ0eV0pICogYW1vdW50KTtcbiAgICB9XG5cbiAgICBzdHlsZVtob3Jpem9udGFsID8gXCJ3aWR0aFwiIDogXCJoZWlnaHRcIl0gPSBhbW91bnQgKyAodG9QaXhlbHMgPyBjdXJVbml0IDogdW5pdCk7XG4gICAgcGFyZW50ID0gfnByb3BlcnR5LmluZGV4T2YoXCJhZGl1c1wiKSB8fCB1bml0ID09PSBcImVtXCIgJiYgdGFyZ2V0LmFwcGVuZENoaWxkICYmICFpc1Jvb3RTVkcgPyB0YXJnZXQgOiB0YXJnZXQucGFyZW50Tm9kZTtcblxuICAgIGlmIChpc1NWRykge1xuICAgICAgcGFyZW50ID0gKHRhcmdldC5vd25lclNWR0VsZW1lbnQgfHwge30pLnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJlbnQgfHwgcGFyZW50ID09PSBfZG9jJDEgfHwgIXBhcmVudC5hcHBlbmRDaGlsZCkge1xuICAgICAgcGFyZW50ID0gX2RvYyQxLmJvZHk7XG4gICAgfVxuXG4gICAgY2FjaGUgPSBwYXJlbnQuX2dzYXA7XG5cbiAgICBpZiAoY2FjaGUgJiYgdG9QZXJjZW50ICYmIGNhY2hlLndpZHRoICYmIGhvcml6b250YWwgJiYgY2FjaGUudGltZSA9PT0gX3RpY2tlci50aW1lKSB7XG4gICAgICByZXR1cm4gX3JvdW5kKGN1clZhbHVlIC8gY2FjaGUud2lkdGggKiBhbW91bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAodG9QZXJjZW50IHx8IGN1clVuaXQgPT09IFwiJVwiKSAmJiAoc3R5bGUucG9zaXRpb24gPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIFwicG9zaXRpb25cIikpO1xuICAgICAgcGFyZW50ID09PSB0YXJnZXQgJiYgKHN0eWxlLnBvc2l0aW9uID0gXCJzdGF0aWNcIik7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoX3RlbXBEaXYpO1xuICAgICAgcHggPSBfdGVtcERpdlttZWFzdXJlUHJvcGVydHldO1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKF90ZW1wRGl2KTtcbiAgICAgIHN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXG4gICAgICBpZiAoaG9yaXpvbnRhbCAmJiB0b1BlcmNlbnQpIHtcbiAgICAgICAgY2FjaGUgPSBfZ2V0Q2FjaGUocGFyZW50KTtcbiAgICAgICAgY2FjaGUudGltZSA9IF90aWNrZXIudGltZTtcbiAgICAgICAgY2FjaGUud2lkdGggPSBwYXJlbnRbbWVhc3VyZVByb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3JvdW5kKHRvUGl4ZWxzID8gcHggKiBjdXJWYWx1ZSAvIGFtb3VudCA6IHB4ICYmIGN1clZhbHVlID8gYW1vdW50IC8gcHggKiBjdXJWYWx1ZSA6IDApO1xuICB9LFxuICAgICAgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkge1xuICAgIHZhciB2YWx1ZTtcbiAgICBfcGx1Z2luSW5pdHRlZCB8fCBfaW5pdENvcmUoKTtcblxuICAgIGlmIChwcm9wZXJ0eSBpbiBfcHJvcGVydHlBbGlhc2VzICYmIHByb3BlcnR5ICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICBwcm9wZXJ0eSA9IF9wcm9wZXJ0eUFsaWFzZXNbcHJvcGVydHldO1xuXG4gICAgICBpZiAofnByb3BlcnR5LmluZGV4T2YoXCIsXCIpKSB7XG4gICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkuc3BsaXQoXCIsXCIpWzBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChfdHJhbnNmb3JtUHJvcHNbcHJvcGVydHldICYmIHByb3BlcnR5ICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICB2YWx1ZSA9IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHVuY2FjaGUpO1xuICAgICAgdmFsdWUgPSBwcm9wZXJ0eSAhPT0gXCJ0cmFuc2Zvcm1PcmlnaW5cIiA/IHZhbHVlW3Byb3BlcnR5XSA6IF9maXJzdFR3b09ubHkoX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtT3JpZ2luUHJvcCkpICsgXCIgXCIgKyB2YWx1ZS56T3JpZ2luICsgXCJweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRhcmdldC5zdHlsZVtwcm9wZXJ0eV07XG5cbiAgICAgIGlmICghdmFsdWUgfHwgdmFsdWUgPT09IFwiYXV0b1wiIHx8IHVuY2FjaGUgfHwgfih2YWx1ZSArIFwiXCIpLmluZGV4T2YoXCJjYWxjKFwiKSkge1xuICAgICAgICB2YWx1ZSA9IF9zcGVjaWFsUHJvcHNbcHJvcGVydHldICYmIF9zcGVjaWFsUHJvcHNbcHJvcGVydHldKHRhcmdldCwgcHJvcGVydHksIHVuaXQpIHx8IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHx8IF9nZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB8fCAocHJvcGVydHkgPT09IFwib3BhY2l0eVwiID8gMSA6IDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bml0ICYmICF+KHZhbHVlICsgXCJcIikuaW5kZXhPZihcIiBcIikgPyBfY29udmVydFRvVW5pdCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgdW5pdCkgKyB1bml0IDogdmFsdWU7XG4gIH0sXG4gICAgICBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nID0gZnVuY3Rpb24gX3R3ZWVuQ29tcGxleENTU1N0cmluZyh0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoIXN0YXJ0IHx8IHN0YXJ0ID09PSBcIm5vbmVcIikge1xuICAgICAgdmFyIHAgPSBfY2hlY2tQcm9wUHJlZml4KHByb3AsIHRhcmdldCwgMSksXG4gICAgICAgICAgcyA9IHAgJiYgX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBwLCAxKTtcblxuICAgICAgaWYgKHMgJiYgcyAhPT0gc3RhcnQpIHtcbiAgICAgICAgcHJvcCA9IHA7XG4gICAgICAgIHN0YXJ0ID0gcztcbiAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gXCJib3JkZXJDb2xvclwiKSB7XG4gICAgICAgIHN0YXJ0ID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBcImJvcmRlclRvcENvbG9yXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIHRhcmdldC5zdHlsZSwgcHJvcCwgMCwgMSwgX3JlbmRlckNvbXBsZXhTdHJpbmcpLFxuICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgIG1hdGNoSW5kZXggPSAwLFxuICAgICAgICBhLFxuICAgICAgICByZXN1bHQsXG4gICAgICAgIHN0YXJ0VmFsdWVzLFxuICAgICAgICBzdGFydE51bSxcbiAgICAgICAgY29sb3IsXG4gICAgICAgIHN0YXJ0VmFsdWUsXG4gICAgICAgIGVuZFZhbHVlLFxuICAgICAgICBlbmROdW0sXG4gICAgICAgIGNodW5rLFxuICAgICAgICBlbmRVbml0LFxuICAgICAgICBzdGFydFVuaXQsXG4gICAgICAgIHJlbGF0aXZlLFxuICAgICAgICBlbmRWYWx1ZXM7XG4gICAgcHQuYiA9IHN0YXJ0O1xuICAgIHB0LmUgPSBlbmQ7XG4gICAgc3RhcnQgKz0gXCJcIjtcbiAgICBlbmQgKz0gXCJcIjtcblxuICAgIGlmIChlbmQgPT09IFwiYXV0b1wiKSB7XG4gICAgICB0YXJnZXQuc3R5bGVbcHJvcF0gPSBlbmQ7XG4gICAgICBlbmQgPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIHByb3ApIHx8IGVuZDtcbiAgICAgIHRhcmdldC5zdHlsZVtwcm9wXSA9IHN0YXJ0O1xuICAgIH1cblxuICAgIGEgPSBbc3RhcnQsIGVuZF07XG5cbiAgICBfY29sb3JTdHJpbmdGaWx0ZXIoYSk7XG5cbiAgICBzdGFydCA9IGFbMF07XG4gICAgZW5kID0gYVsxXTtcbiAgICBzdGFydFZhbHVlcyA9IHN0YXJ0Lm1hdGNoKF9udW1XaXRoVW5pdEV4cCkgfHwgW107XG4gICAgZW5kVmFsdWVzID0gZW5kLm1hdGNoKF9udW1XaXRoVW5pdEV4cCkgfHwgW107XG5cbiAgICBpZiAoZW5kVmFsdWVzLmxlbmd0aCkge1xuICAgICAgd2hpbGUgKHJlc3VsdCA9IF9udW1XaXRoVW5pdEV4cC5leGVjKGVuZCkpIHtcbiAgICAgICAgZW5kVmFsdWUgPSByZXN1bHRbMF07XG4gICAgICAgIGNodW5rID0gZW5kLnN1YnN0cmluZyhpbmRleCwgcmVzdWx0LmluZGV4KTtcblxuICAgICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgICBjb2xvciA9IChjb2xvciArIDEpICUgNTtcbiAgICAgICAgfSBlbHNlIGlmIChjaHVuay5zdWJzdHIoLTUpID09PSBcInJnYmEoXCIgfHwgY2h1bmsuc3Vic3RyKC01KSA9PT0gXCJoc2xhKFwiKSB7XG4gICAgICAgICAgY29sb3IgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZFZhbHVlICE9PSAoc3RhcnRWYWx1ZSA9IHN0YXJ0VmFsdWVzW21hdGNoSW5kZXgrK10gfHwgXCJcIikpIHtcbiAgICAgICAgICBzdGFydE51bSA9IHBhcnNlRmxvYXQoc3RhcnRWYWx1ZSkgfHwgMDtcbiAgICAgICAgICBzdGFydFVuaXQgPSBzdGFydFZhbHVlLnN1YnN0cigoc3RhcnROdW0gKyBcIlwiKS5sZW5ndGgpO1xuICAgICAgICAgIHJlbGF0aXZlID0gZW5kVmFsdWUuY2hhckF0KDEpID09PSBcIj1cIiA/ICsoZW5kVmFsdWUuY2hhckF0KDApICsgXCIxXCIpIDogMDtcblxuICAgICAgICAgIGlmIChyZWxhdGl2ZSkge1xuICAgICAgICAgICAgZW5kVmFsdWUgPSBlbmRWYWx1ZS5zdWJzdHIoMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG4gICAgICAgICAgZW5kVW5pdCA9IGVuZFZhbHVlLnN1YnN0cigoZW5kTnVtICsgXCJcIikubGVuZ3RoKTtcbiAgICAgICAgICBpbmRleCA9IF9udW1XaXRoVW5pdEV4cC5sYXN0SW5kZXggLSBlbmRVbml0Lmxlbmd0aDtcblxuICAgICAgICAgIGlmICghZW5kVW5pdCkge1xuICAgICAgICAgICAgZW5kVW5pdCA9IGVuZFVuaXQgfHwgX2NvbmZpZy51bml0c1twcm9wXSB8fCBzdGFydFVuaXQ7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gZW5kLmxlbmd0aCkge1xuICAgICAgICAgICAgICBlbmQgKz0gZW5kVW5pdDtcbiAgICAgICAgICAgICAgcHQuZSArPSBlbmRVbml0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdGFydFVuaXQgIT09IGVuZFVuaXQpIHtcbiAgICAgICAgICAgIHN0YXJ0TnVtID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wLCBzdGFydFZhbHVlLCBlbmRVbml0KSB8fCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHB0Ll9wdCA9IHtcbiAgICAgICAgICAgIF9uZXh0OiBwdC5fcHQsXG4gICAgICAgICAgICBwOiBjaHVuayB8fCBtYXRjaEluZGV4ID09PSAxID8gY2h1bmsgOiBcIixcIixcbiAgICAgICAgICAgIHM6IHN0YXJ0TnVtLFxuICAgICAgICAgICAgYzogcmVsYXRpdmUgPyByZWxhdGl2ZSAqIGVuZE51bSA6IGVuZE51bSAtIHN0YXJ0TnVtLFxuICAgICAgICAgICAgbTogY29sb3IgJiYgY29sb3IgPCA0ID8gTWF0aC5yb3VuZCA6IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHB0LmMgPSBpbmRleCA8IGVuZC5sZW5ndGggPyBlbmQuc3Vic3RyaW5nKGluZGV4LCBlbmQubGVuZ3RoKSA6IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHB0LnIgPSBwcm9wID09PSBcImRpc3BsYXlcIiAmJiBlbmQgPT09IFwibm9uZVwiID8gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWVPbmx5QXRFbmQgOiBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoX3JlbEV4cC50ZXN0KGVuZCkpIHtcbiAgICAgIHB0LmUgPSAwO1xuICAgIH1cblxuICAgIHRoaXMuX3B0ID0gcHQ7XG4gICAgcmV0dXJuIHB0O1xuICB9LFxuICAgICAgX2tleXdvcmRUb1BlcmNlbnQgPSB7XG4gICAgdG9wOiBcIjAlXCIsXG4gICAgYm90dG9tOiBcIjEwMCVcIixcbiAgICBsZWZ0OiBcIjAlXCIsXG4gICAgcmlnaHQ6IFwiMTAwJVwiLFxuICAgIGNlbnRlcjogXCI1MCVcIlxuICB9LFxuICAgICAgX2NvbnZlcnRLZXl3b3Jkc1RvUGVyY2VudGFnZXMgPSBmdW5jdGlvbiBfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyh2YWx1ZSkge1xuICAgIHZhciBzcGxpdCA9IHZhbHVlLnNwbGl0KFwiIFwiKSxcbiAgICAgICAgeCA9IHNwbGl0WzBdLFxuICAgICAgICB5ID0gc3BsaXRbMV0gfHwgXCI1MCVcIjtcblxuICAgIGlmICh4ID09PSBcInRvcFwiIHx8IHggPT09IFwiYm90dG9tXCIgfHwgeSA9PT0gXCJsZWZ0XCIgfHwgeSA9PT0gXCJyaWdodFwiKSB7XG4gICAgICB2YWx1ZSA9IHg7XG4gICAgICB4ID0geTtcbiAgICAgIHkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzcGxpdFswXSA9IF9rZXl3b3JkVG9QZXJjZW50W3hdIHx8IHg7XG4gICAgc3BsaXRbMV0gPSBfa2V5d29yZFRvUGVyY2VudFt5XSB8fCB5O1xuICAgIHJldHVybiBzcGxpdC5qb2luKFwiIFwiKTtcbiAgfSxcbiAgICAgIF9yZW5kZXJDbGVhclByb3BzID0gZnVuY3Rpb24gX3JlbmRlckNsZWFyUHJvcHMocmF0aW8sIGRhdGEpIHtcbiAgICBpZiAoZGF0YS50d2VlbiAmJiBkYXRhLnR3ZWVuLl90aW1lID09PSBkYXRhLnR3ZWVuLl9kdXIpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBkYXRhLnQsXG4gICAgICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICAgICAgcHJvcHMgPSBkYXRhLnUsXG4gICAgICAgICAgY2FjaGUgPSB0YXJnZXQuX2dzYXAsXG4gICAgICAgICAgcHJvcCxcbiAgICAgICAgICBjbGVhclRyYW5zZm9ybXMsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKHByb3BzID09PSBcImFsbFwiIHx8IHByb3BzID09PSB0cnVlKSB7XG4gICAgICAgIHN0eWxlLmNzc1RleHQgPSBcIlwiO1xuICAgICAgICBjbGVhclRyYW5zZm9ybXMgPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHMgPSBwcm9wcy5zcGxpdChcIixcIik7XG4gICAgICAgIGkgPSBwcm9wcy5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKC0taSA+IC0xKSB7XG4gICAgICAgICAgcHJvcCA9IHByb3BzW2ldO1xuXG4gICAgICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wc1twcm9wXSkge1xuICAgICAgICAgICAgY2xlYXJUcmFuc2Zvcm1zID0gMTtcbiAgICAgICAgICAgIHByb3AgPSBwcm9wID09PSBcInRyYW5zZm9ybU9yaWdpblwiID8gX3RyYW5zZm9ybU9yaWdpblByb3AgOiBfdHJhbnNmb3JtUHJvcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBwcm9wKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2xlYXJUcmFuc2Zvcm1zKSB7XG4gICAgICAgIF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1Qcm9wKTtcblxuICAgICAgICBpZiAoY2FjaGUpIHtcbiAgICAgICAgICBjYWNoZS5zdmcgJiYgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTtcblxuICAgICAgICAgIF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIDEpO1xuXG4gICAgICAgICAgY2FjaGUudW5jYWNoZSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gICAgICBfc3BlY2lhbFByb3BzID0ge1xuICAgIGNsZWFyUHJvcHM6IGZ1bmN0aW9uIGNsZWFyUHJvcHMocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBlbmRWYWx1ZSwgdHdlZW4pIHtcbiAgICAgIGlmICh0d2Vlbi5kYXRhICE9PSBcImlzRnJvbVN0YXJ0XCIpIHtcbiAgICAgICAgdmFyIHB0ID0gcGx1Z2luLl9wdCA9IG5ldyBQcm9wVHdlZW4ocGx1Z2luLl9wdCwgdGFyZ2V0LCBwcm9wZXJ0eSwgMCwgMCwgX3JlbmRlckNsZWFyUHJvcHMpO1xuICAgICAgICBwdC51ID0gZW5kVmFsdWU7XG4gICAgICAgIHB0LnByID0gLTEwO1xuICAgICAgICBwdC50d2VlbiA9IHR3ZWVuO1xuXG4gICAgICAgIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAgICAgX2lkZW50aXR5MkRNYXRyaXggPSBbMSwgMCwgMCwgMSwgMCwgMF0sXG4gICAgICBfcm90YXRpb25hbFByb3BlcnRpZXMgPSB7fSxcbiAgICAgIF9pc051bGxUcmFuc2Zvcm0gPSBmdW5jdGlvbiBfaXNOdWxsVHJhbnNmb3JtKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBcIm1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiIHx8IHZhbHVlID09PSBcIm5vbmVcIiB8fCAhdmFsdWU7XG4gIH0sXG4gICAgICBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5ID0gZnVuY3Rpb24gX2dldENvbXB1dGVkVHJhbnNmb3JtTWF0cml4QXNBcnJheSh0YXJnZXQpIHtcbiAgICB2YXIgbWF0cml4U3RyaW5nID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtUHJvcCk7XG5cbiAgICByZXR1cm4gX2lzTnVsbFRyYW5zZm9ybShtYXRyaXhTdHJpbmcpID8gX2lkZW50aXR5MkRNYXRyaXggOiBtYXRyaXhTdHJpbmcuc3Vic3RyKDcpLm1hdGNoKF9udW1FeHApLm1hcChfcm91bmQpO1xuICB9LFxuICAgICAgX2dldE1hdHJpeCA9IGZ1bmN0aW9uIF9nZXRNYXRyaXgodGFyZ2V0LCBmb3JjZTJEKSB7XG4gICAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwIHx8IF9nZXRDYWNoZSh0YXJnZXQpLFxuICAgICAgICBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgICAgbWF0cml4ID0gX2dldENvbXB1dGVkVHJhbnNmb3JtTWF0cml4QXNBcnJheSh0YXJnZXQpLFxuICAgICAgICBwYXJlbnQsXG4gICAgICAgIG5leHRTaWJsaW5nLFxuICAgICAgICB0ZW1wLFxuICAgICAgICBhZGRlZFRvRE9NO1xuXG4gICAgaWYgKGNhY2hlLnN2ZyAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpKSB7XG4gICAgICB0ZW1wID0gdGFyZ2V0LnRyYW5zZm9ybS5iYXNlVmFsLmNvbnNvbGlkYXRlKCkubWF0cml4O1xuICAgICAgbWF0cml4ID0gW3RlbXAuYSwgdGVtcC5iLCB0ZW1wLmMsIHRlbXAuZCwgdGVtcC5lLCB0ZW1wLmZdO1xuICAgICAgcmV0dXJuIG1hdHJpeC5qb2luKFwiLFwiKSA9PT0gXCIxLDAsMCwxLDAsMFwiID8gX2lkZW50aXR5MkRNYXRyaXggOiBtYXRyaXg7XG4gICAgfSBlbHNlIGlmIChtYXRyaXggPT09IF9pZGVudGl0eTJETWF0cml4ICYmICF0YXJnZXQub2Zmc2V0UGFyZW50ICYmIHRhcmdldCAhPT0gX2RvY0VsZW1lbnQgJiYgIWNhY2hlLnN2Zykge1xuICAgICAgdGVtcCA9IHN0eWxlLmRpc3BsYXk7XG4gICAgICBzdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG5cbiAgICAgIGlmICghcGFyZW50IHx8ICF0YXJnZXQub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgIGFkZGVkVG9ET00gPSAxO1xuICAgICAgICBuZXh0U2libGluZyA9IHRhcmdldC5uZXh0U2libGluZztcblxuICAgICAgICBfZG9jRWxlbWVudC5hcHBlbmRDaGlsZCh0YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICBtYXRyaXggPSBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5KHRhcmdldCk7XG4gICAgICB0ZW1wID8gc3R5bGUuZGlzcGxheSA9IHRlbXAgOiBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBcImRpc3BsYXlcIik7XG5cbiAgICAgIGlmIChhZGRlZFRvRE9NKSB7XG4gICAgICAgIG5leHRTaWJsaW5nID8gcGFyZW50Lmluc2VydEJlZm9yZSh0YXJnZXQsIG5leHRTaWJsaW5nKSA6IHBhcmVudCA/IHBhcmVudC5hcHBlbmRDaGlsZCh0YXJnZXQpIDogX2RvY0VsZW1lbnQucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZm9yY2UyRCAmJiBtYXRyaXgubGVuZ3RoID4gNiA/IFttYXRyaXhbMF0sIG1hdHJpeFsxXSwgbWF0cml4WzRdLCBtYXRyaXhbNV0sIG1hdHJpeFsxMl0sIG1hdHJpeFsxM11dIDogbWF0cml4O1xuICB9LFxuICAgICAgX2FwcGx5U1ZHT3JpZ2luID0gZnVuY3Rpb24gX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgb3JpZ2luLCBvcmlnaW5Jc0Fic29sdXRlLCBzbW9vdGgsIG1hdHJpeEFycmF5LCBwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbykge1xuICAgIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcCxcbiAgICAgICAgbWF0cml4ID0gbWF0cml4QXJyYXkgfHwgX2dldE1hdHJpeCh0YXJnZXQsIHRydWUpLFxuICAgICAgICB4T3JpZ2luT2xkID0gY2FjaGUueE9yaWdpbiB8fCAwLFxuICAgICAgICB5T3JpZ2luT2xkID0gY2FjaGUueU9yaWdpbiB8fCAwLFxuICAgICAgICB4T2Zmc2V0T2xkID0gY2FjaGUueE9mZnNldCB8fCAwLFxuICAgICAgICB5T2Zmc2V0T2xkID0gY2FjaGUueU9mZnNldCB8fCAwLFxuICAgICAgICBhID0gbWF0cml4WzBdLFxuICAgICAgICBiID0gbWF0cml4WzFdLFxuICAgICAgICBjID0gbWF0cml4WzJdLFxuICAgICAgICBkID0gbWF0cml4WzNdLFxuICAgICAgICB0eCA9IG1hdHJpeFs0XSxcbiAgICAgICAgdHkgPSBtYXRyaXhbNV0sXG4gICAgICAgIG9yaWdpblNwbGl0ID0gb3JpZ2luLnNwbGl0KFwiIFwiKSxcbiAgICAgICAgeE9yaWdpbiA9IHBhcnNlRmxvYXQob3JpZ2luU3BsaXRbMF0pIHx8IDAsXG4gICAgICAgIHlPcmlnaW4gPSBwYXJzZUZsb2F0KG9yaWdpblNwbGl0WzFdKSB8fCAwLFxuICAgICAgICBib3VuZHMsXG4gICAgICAgIGRldGVybWluYW50LFxuICAgICAgICB4LFxuICAgICAgICB5O1xuXG4gICAgaWYgKCFvcmlnaW5Jc0Fic29sdXRlKSB7XG4gICAgICBib3VuZHMgPSBfZ2V0QkJveCh0YXJnZXQpO1xuICAgICAgeE9yaWdpbiA9IGJvdW5kcy54ICsgKH5vcmlnaW5TcGxpdFswXS5pbmRleE9mKFwiJVwiKSA/IHhPcmlnaW4gLyAxMDAgKiBib3VuZHMud2lkdGggOiB4T3JpZ2luKTtcbiAgICAgIHlPcmlnaW4gPSBib3VuZHMueSArICh+KG9yaWdpblNwbGl0WzFdIHx8IG9yaWdpblNwbGl0WzBdKS5pbmRleE9mKFwiJVwiKSA/IHlPcmlnaW4gLyAxMDAgKiBib3VuZHMuaGVpZ2h0IDogeU9yaWdpbik7XG4gICAgfSBlbHNlIGlmIChtYXRyaXggIT09IF9pZGVudGl0eTJETWF0cml4ICYmIChkZXRlcm1pbmFudCA9IGEgKiBkIC0gYiAqIGMpKSB7XG4gICAgICB4ID0geE9yaWdpbiAqIChkIC8gZGV0ZXJtaW5hbnQpICsgeU9yaWdpbiAqICgtYyAvIGRldGVybWluYW50KSArIChjICogdHkgLSBkICogdHgpIC8gZGV0ZXJtaW5hbnQ7XG4gICAgICB5ID0geE9yaWdpbiAqICgtYiAvIGRldGVybWluYW50KSArIHlPcmlnaW4gKiAoYSAvIGRldGVybWluYW50KSAtIChhICogdHkgLSBiICogdHgpIC8gZGV0ZXJtaW5hbnQ7XG4gICAgICB4T3JpZ2luID0geDtcbiAgICAgIHlPcmlnaW4gPSB5O1xuICAgIH1cblxuICAgIGlmIChzbW9vdGggfHwgc21vb3RoICE9PSBmYWxzZSAmJiBjYWNoZS5zbW9vdGgpIHtcbiAgICAgIHR4ID0geE9yaWdpbiAtIHhPcmlnaW5PbGQ7XG4gICAgICB0eSA9IHlPcmlnaW4gLSB5T3JpZ2luT2xkO1xuICAgICAgY2FjaGUueE9mZnNldCA9IHhPZmZzZXRPbGQgKyAodHggKiBhICsgdHkgKiBjKSAtIHR4O1xuICAgICAgY2FjaGUueU9mZnNldCA9IHlPZmZzZXRPbGQgKyAodHggKiBiICsgdHkgKiBkKSAtIHR5O1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZS54T2Zmc2V0ID0gY2FjaGUueU9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgY2FjaGUueE9yaWdpbiA9IHhPcmlnaW47XG4gICAgY2FjaGUueU9yaWdpbiA9IHlPcmlnaW47XG4gICAgY2FjaGUuc21vb3RoID0gISFzbW9vdGg7XG4gICAgY2FjaGUub3JpZ2luID0gb3JpZ2luO1xuICAgIGNhY2hlLm9yaWdpbklzQWJzb2x1dGUgPSAhIW9yaWdpbklzQWJzb2x1dGU7XG4gICAgdGFyZ2V0LnN0eWxlW190cmFuc2Zvcm1PcmlnaW5Qcm9wXSA9IFwiMHB4IDBweFwiO1xuXG4gICAgaWYgKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvKSB7XG4gICAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieE9yaWdpblwiLCB4T3JpZ2luT2xkLCB4T3JpZ2luKTtcblxuICAgICAgX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8sIGNhY2hlLCBcInlPcmlnaW5cIiwgeU9yaWdpbk9sZCwgeU9yaWdpbik7XG5cbiAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ4T2Zmc2V0XCIsIHhPZmZzZXRPbGQsIGNhY2hlLnhPZmZzZXQpO1xuXG4gICAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieU9mZnNldFwiLCB5T2Zmc2V0T2xkLCBjYWNoZS55T2Zmc2V0KTtcbiAgICB9XG5cbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIsIHhPcmlnaW4gKyBcIiBcIiArIHlPcmlnaW4pO1xuICB9LFxuICAgICAgX3BhcnNlVHJhbnNmb3JtID0gZnVuY3Rpb24gX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgdW5jYWNoZSkge1xuICAgIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcCB8fCBuZXcgR1NDYWNoZSh0YXJnZXQpO1xuXG4gICAgaWYgKFwieFwiIGluIGNhY2hlICYmICF1bmNhY2hlICYmICFjYWNoZS51bmNhY2hlKSB7XG4gICAgICByZXR1cm4gY2FjaGU7XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgICBpbnZlcnRlZFNjYWxlWCA9IGNhY2hlLnNjYWxlWCA8IDAsXG4gICAgICAgIHB4ID0gXCJweFwiLFxuICAgICAgICBkZWcgPSBcImRlZ1wiLFxuICAgICAgICBvcmlnaW4gPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1PcmlnaW5Qcm9wKSB8fCBcIjBcIixcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgeixcbiAgICAgICAgc2NhbGVYLFxuICAgICAgICBzY2FsZVksXG4gICAgICAgIHJvdGF0aW9uLFxuICAgICAgICByb3RhdGlvblgsXG4gICAgICAgIHJvdGF0aW9uWSxcbiAgICAgICAgc2tld1gsXG4gICAgICAgIHNrZXdZLFxuICAgICAgICBwZXJzcGVjdGl2ZSxcbiAgICAgICAgeE9yaWdpbixcbiAgICAgICAgeU9yaWdpbixcbiAgICAgICAgbWF0cml4LFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgY29zLFxuICAgICAgICBzaW4sXG4gICAgICAgIGEsXG4gICAgICAgIGIsXG4gICAgICAgIGMsXG4gICAgICAgIGQsXG4gICAgICAgIGExMixcbiAgICAgICAgYTIyLFxuICAgICAgICB0MSxcbiAgICAgICAgdDIsXG4gICAgICAgIHQzLFxuICAgICAgICBhMTMsXG4gICAgICAgIGEyMyxcbiAgICAgICAgYTMzLFxuICAgICAgICBhNDIsXG4gICAgICAgIGE0MyxcbiAgICAgICAgYTMyO1xuICAgIHggPSB5ID0geiA9IHJvdGF0aW9uID0gcm90YXRpb25YID0gcm90YXRpb25ZID0gc2tld1ggPSBza2V3WSA9IHBlcnNwZWN0aXZlID0gMDtcbiAgICBzY2FsZVggPSBzY2FsZVkgPSAxO1xuICAgIGNhY2hlLnN2ZyA9ICEhKHRhcmdldC5nZXRDVE0gJiYgX2lzU1ZHKHRhcmdldCkpO1xuICAgIG1hdHJpeCA9IF9nZXRNYXRyaXgodGFyZ2V0LCBjYWNoZS5zdmcpO1xuXG4gICAgaWYgKGNhY2hlLnN2Zykge1xuICAgICAgdDEgPSAhY2FjaGUudW5jYWNoZSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIpO1xuXG4gICAgICBfYXBwbHlTVkdPcmlnaW4odGFyZ2V0LCB0MSB8fCBvcmlnaW4sICEhdDEgfHwgY2FjaGUub3JpZ2luSXNBYnNvbHV0ZSwgY2FjaGUuc21vb3RoICE9PSBmYWxzZSwgbWF0cml4KTtcbiAgICB9XG5cbiAgICB4T3JpZ2luID0gY2FjaGUueE9yaWdpbiB8fCAwO1xuICAgIHlPcmlnaW4gPSBjYWNoZS55T3JpZ2luIHx8IDA7XG5cbiAgICBpZiAobWF0cml4ICE9PSBfaWRlbnRpdHkyRE1hdHJpeCkge1xuICAgICAgYSA9IG1hdHJpeFswXTtcbiAgICAgIGIgPSBtYXRyaXhbMV07XG4gICAgICBjID0gbWF0cml4WzJdO1xuICAgICAgZCA9IG1hdHJpeFszXTtcbiAgICAgIHggPSBhMTIgPSBtYXRyaXhbNF07XG4gICAgICB5ID0gYTIyID0gbWF0cml4WzVdO1xuXG4gICAgICBpZiAobWF0cml4Lmxlbmd0aCA9PT0gNikge1xuICAgICAgICBzY2FsZVggPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG4gICAgICAgIHNjYWxlWSA9IE1hdGguc3FydChkICogZCArIGMgKiBjKTtcbiAgICAgICAgcm90YXRpb24gPSBhIHx8IGIgPyBfYXRhbjIoYiwgYSkgKiBfUkFEMkRFRyA6IDA7XG4gICAgICAgIHNrZXdYID0gYyB8fCBkID8gX2F0YW4yKGMsIGQpICogX1JBRDJERUcgKyByb3RhdGlvbiA6IDA7XG4gICAgICAgIHNrZXdYICYmIChzY2FsZVkgKj0gTWF0aC5jb3Moc2tld1ggKiBfREVHMlJBRCkpO1xuXG4gICAgICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgICAgICB4IC09IHhPcmlnaW4gLSAoeE9yaWdpbiAqIGEgKyB5T3JpZ2luICogYyk7XG4gICAgICAgICAgeSAtPSB5T3JpZ2luIC0gKHhPcmlnaW4gKiBiICsgeU9yaWdpbiAqIGQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhMzIgPSBtYXRyaXhbNl07XG4gICAgICAgIGE0MiA9IG1hdHJpeFs3XTtcbiAgICAgICAgYTEzID0gbWF0cml4WzhdO1xuICAgICAgICBhMjMgPSBtYXRyaXhbOV07XG4gICAgICAgIGEzMyA9IG1hdHJpeFsxMF07XG4gICAgICAgIGE0MyA9IG1hdHJpeFsxMV07XG4gICAgICAgIHggPSBtYXRyaXhbMTJdO1xuICAgICAgICB5ID0gbWF0cml4WzEzXTtcbiAgICAgICAgeiA9IG1hdHJpeFsxNF07XG4gICAgICAgIGFuZ2xlID0gX2F0YW4yKGEzMiwgYTMzKTtcbiAgICAgICAgcm90YXRpb25YID0gYW5nbGUgKiBfUkFEMkRFRztcblxuICAgICAgICBpZiAoYW5nbGUpIHtcbiAgICAgICAgICBjb3MgPSBNYXRoLmNvcygtYW5nbGUpO1xuICAgICAgICAgIHNpbiA9IE1hdGguc2luKC1hbmdsZSk7XG4gICAgICAgICAgdDEgPSBhMTIgKiBjb3MgKyBhMTMgKiBzaW47XG4gICAgICAgICAgdDIgPSBhMjIgKiBjb3MgKyBhMjMgKiBzaW47XG4gICAgICAgICAgdDMgPSBhMzIgKiBjb3MgKyBhMzMgKiBzaW47XG4gICAgICAgICAgYTEzID0gYTEyICogLXNpbiArIGExMyAqIGNvcztcbiAgICAgICAgICBhMjMgPSBhMjIgKiAtc2luICsgYTIzICogY29zO1xuICAgICAgICAgIGEzMyA9IGEzMiAqIC1zaW4gKyBhMzMgKiBjb3M7XG4gICAgICAgICAgYTQzID0gYTQyICogLXNpbiArIGE0MyAqIGNvcztcbiAgICAgICAgICBhMTIgPSB0MTtcbiAgICAgICAgICBhMjIgPSB0MjtcbiAgICAgICAgICBhMzIgPSB0MztcbiAgICAgICAgfVxuXG4gICAgICAgIGFuZ2xlID0gX2F0YW4yKC1jLCBhMzMpO1xuICAgICAgICByb3RhdGlvblkgPSBhbmdsZSAqIF9SQUQyREVHO1xuXG4gICAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICAgIGNvcyA9IE1hdGguY29zKC1hbmdsZSk7XG4gICAgICAgICAgc2luID0gTWF0aC5zaW4oLWFuZ2xlKTtcbiAgICAgICAgICB0MSA9IGEgKiBjb3MgLSBhMTMgKiBzaW47XG4gICAgICAgICAgdDIgPSBiICogY29zIC0gYTIzICogc2luO1xuICAgICAgICAgIHQzID0gYyAqIGNvcyAtIGEzMyAqIHNpbjtcbiAgICAgICAgICBhNDMgPSBkICogc2luICsgYTQzICogY29zO1xuICAgICAgICAgIGEgPSB0MTtcbiAgICAgICAgICBiID0gdDI7XG4gICAgICAgICAgYyA9IHQzO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5nbGUgPSBfYXRhbjIoYiwgYSk7XG4gICAgICAgIHJvdGF0aW9uID0gYW5nbGUgKiBfUkFEMkRFRztcblxuICAgICAgICBpZiAoYW5nbGUpIHtcbiAgICAgICAgICBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgICAgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgICAgICAgIHQxID0gYSAqIGNvcyArIGIgKiBzaW47XG4gICAgICAgICAgdDIgPSBhMTIgKiBjb3MgKyBhMjIgKiBzaW47XG4gICAgICAgICAgYiA9IGIgKiBjb3MgLSBhICogc2luO1xuICAgICAgICAgIGEyMiA9IGEyMiAqIGNvcyAtIGExMiAqIHNpbjtcbiAgICAgICAgICBhID0gdDE7XG4gICAgICAgICAgYTEyID0gdDI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm90YXRpb25YICYmIE1hdGguYWJzKHJvdGF0aW9uWCkgKyBNYXRoLmFicyhyb3RhdGlvbikgPiAzNTkuOSkge1xuICAgICAgICAgIHJvdGF0aW9uWCA9IHJvdGF0aW9uID0gMDtcbiAgICAgICAgICByb3RhdGlvblkgPSAxODAgLSByb3RhdGlvblk7XG4gICAgICAgIH1cblxuICAgICAgICBzY2FsZVggPSBfcm91bmQoTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIgKyBjICogYykpO1xuICAgICAgICBzY2FsZVkgPSBfcm91bmQoTWF0aC5zcXJ0KGEyMiAqIGEyMiArIGEzMiAqIGEzMikpO1xuICAgICAgICBhbmdsZSA9IF9hdGFuMihhMTIsIGEyMik7XG4gICAgICAgIHNrZXdYID0gTWF0aC5hYnMoYW5nbGUpID4gMC4wMDAyID8gYW5nbGUgKiBfUkFEMkRFRyA6IDA7XG4gICAgICAgIHBlcnNwZWN0aXZlID0gYTQzID8gMSAvIChhNDMgPCAwID8gLWE0MyA6IGE0MykgOiAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FjaGUuc3ZnKSB7XG4gICAgICAgIHQxID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTtcbiAgICAgICAgY2FjaGUuZm9yY2VDU1MgPSB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwiXCIpIHx8ICFfaXNOdWxsVHJhbnNmb3JtKF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybVByb3ApKTtcbiAgICAgICAgdDEgJiYgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCB0MSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKE1hdGguYWJzKHNrZXdYKSA+IDkwICYmIE1hdGguYWJzKHNrZXdYKSA8IDI3MCkge1xuICAgICAgaWYgKGludmVydGVkU2NhbGVYKSB7XG4gICAgICAgIHNjYWxlWCAqPSAtMTtcbiAgICAgICAgc2tld1ggKz0gcm90YXRpb24gPD0gMCA/IDE4MCA6IC0xODA7XG4gICAgICAgIHJvdGF0aW9uICs9IHJvdGF0aW9uIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NhbGVZICo9IC0xO1xuICAgICAgICBza2V3WCArPSBza2V3WCA8PSAwID8gMTgwIDogLTE4MDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYWNoZS54ID0gKChjYWNoZS54UGVyY2VudCA9IHggJiYgTWF0aC5yb3VuZCh0YXJnZXQub2Zmc2V0V2lkdGggLyAyKSA9PT0gTWF0aC5yb3VuZCgteCkgPyAtNTAgOiAwKSA/IDAgOiB4KSArIHB4O1xuICAgIGNhY2hlLnkgPSAoKGNhY2hlLnlQZXJjZW50ID0geSAmJiBNYXRoLnJvdW5kKHRhcmdldC5vZmZzZXRIZWlnaHQgLyAyKSA9PT0gTWF0aC5yb3VuZCgteSkgPyAtNTAgOiAwKSA/IDAgOiB5KSArIHB4O1xuICAgIGNhY2hlLnogPSB6ICsgcHg7XG4gICAgY2FjaGUuc2NhbGVYID0gX3JvdW5kKHNjYWxlWCk7XG4gICAgY2FjaGUuc2NhbGVZID0gX3JvdW5kKHNjYWxlWSk7XG4gICAgY2FjaGUucm90YXRpb24gPSBfcm91bmQocm90YXRpb24pICsgZGVnO1xuICAgIGNhY2hlLnJvdGF0aW9uWCA9IF9yb3VuZChyb3RhdGlvblgpICsgZGVnO1xuICAgIGNhY2hlLnJvdGF0aW9uWSA9IF9yb3VuZChyb3RhdGlvblkpICsgZGVnO1xuICAgIGNhY2hlLnNrZXdYID0gc2tld1ggKyBkZWc7XG4gICAgY2FjaGUuc2tld1kgPSBza2V3WSArIGRlZztcbiAgICBjYWNoZS50cmFuc2Zvcm1QZXJzcGVjdGl2ZSA9IHBlcnNwZWN0aXZlICsgcHg7XG5cbiAgICBpZiAoY2FjaGUuek9yaWdpbiA9IHBhcnNlRmxvYXQob3JpZ2luLnNwbGl0KFwiIFwiKVsyXSkgfHwgMCkge1xuICAgICAgc3R5bGVbX3RyYW5zZm9ybU9yaWdpblByb3BdID0gX2ZpcnN0VHdvT25seShvcmlnaW4pO1xuICAgIH1cblxuICAgIGNhY2hlLnhPZmZzZXQgPSBjYWNoZS55T2Zmc2V0ID0gMDtcbiAgICBjYWNoZS5mb3JjZTNEID0gX2NvbmZpZy5mb3JjZTNEO1xuICAgIGNhY2hlLnJlbmRlclRyYW5zZm9ybSA9IGNhY2hlLnN2ZyA/IF9yZW5kZXJTVkdUcmFuc2Zvcm1zIDogX3N1cHBvcnRzM0QgPyBfcmVuZGVyQ1NTVHJhbnNmb3JtcyA6IF9yZW5kZXJOb24zRFRyYW5zZm9ybXM7XG4gICAgY2FjaGUudW5jYWNoZSA9IDA7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9LFxuICAgICAgX2ZpcnN0VHdvT25seSA9IGZ1bmN0aW9uIF9maXJzdFR3b09ubHkodmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlID0gdmFsdWUuc3BsaXQoXCIgXCIpKVswXSArIFwiIFwiICsgdmFsdWVbMV07XG4gIH0sXG4gICAgICBfYWRkUHhUcmFuc2xhdGUgPSBmdW5jdGlvbiBfYWRkUHhUcmFuc2xhdGUodGFyZ2V0LCBzdGFydCwgdmFsdWUpIHtcbiAgICB2YXIgdW5pdCA9IGdldFVuaXQoc3RhcnQpO1xuICAgIHJldHVybiBfcm91bmQocGFyc2VGbG9hdChzdGFydCkgKyBwYXJzZUZsb2F0KF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgXCJ4XCIsIHZhbHVlICsgXCJweFwiLCB1bml0KSkpICsgdW5pdDtcbiAgfSxcbiAgICAgIF9yZW5kZXJOb24zRFRyYW5zZm9ybXMgPSBmdW5jdGlvbiBfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSkge1xuICAgIGNhY2hlLnogPSBcIjBweFwiO1xuICAgIGNhY2hlLnJvdGF0aW9uWSA9IGNhY2hlLnJvdGF0aW9uWCA9IFwiMGRlZ1wiO1xuICAgIGNhY2hlLmZvcmNlM0QgPSAwO1xuXG4gICAgX3JlbmRlckNTU1RyYW5zZm9ybXMocmF0aW8sIGNhY2hlKTtcbiAgfSxcbiAgICAgIF96ZXJvRGVnID0gXCIwZGVnXCIsXG4gICAgICBfemVyb1B4ID0gXCIwcHhcIixcbiAgICAgIF9lbmRQYXJlbnRoZXNpcyA9IFwiKSBcIixcbiAgICAgIF9yZW5kZXJDU1NUcmFuc2Zvcm1zID0gZnVuY3Rpb24gX3JlbmRlckNTU1RyYW5zZm9ybXMocmF0aW8sIGNhY2hlKSB7XG4gICAgdmFyIF9yZWYgPSBjYWNoZSB8fCB0aGlzLFxuICAgICAgICB4UGVyY2VudCA9IF9yZWYueFBlcmNlbnQsXG4gICAgICAgIHlQZXJjZW50ID0gX3JlZi55UGVyY2VudCxcbiAgICAgICAgeCA9IF9yZWYueCxcbiAgICAgICAgeSA9IF9yZWYueSxcbiAgICAgICAgeiA9IF9yZWYueixcbiAgICAgICAgcm90YXRpb24gPSBfcmVmLnJvdGF0aW9uLFxuICAgICAgICByb3RhdGlvblkgPSBfcmVmLnJvdGF0aW9uWSxcbiAgICAgICAgcm90YXRpb25YID0gX3JlZi5yb3RhdGlvblgsXG4gICAgICAgIHNrZXdYID0gX3JlZi5za2V3WCxcbiAgICAgICAgc2tld1kgPSBfcmVmLnNrZXdZLFxuICAgICAgICBzY2FsZVggPSBfcmVmLnNjYWxlWCxcbiAgICAgICAgc2NhbGVZID0gX3JlZi5zY2FsZVksXG4gICAgICAgIHRyYW5zZm9ybVBlcnNwZWN0aXZlID0gX3JlZi50cmFuc2Zvcm1QZXJzcGVjdGl2ZSxcbiAgICAgICAgZm9yY2UzRCA9IF9yZWYuZm9yY2UzRCxcbiAgICAgICAgdGFyZ2V0ID0gX3JlZi50YXJnZXQsXG4gICAgICAgIHpPcmlnaW4gPSBfcmVmLnpPcmlnaW4sXG4gICAgICAgIHRyYW5zZm9ybXMgPSBcIlwiLFxuICAgICAgICB1c2UzRCA9IGZvcmNlM0QgPT09IFwiYXV0b1wiICYmIHJhdGlvICYmIHJhdGlvICE9PSAxIHx8IGZvcmNlM0QgPT09IHRydWU7XG5cbiAgICBpZiAoek9yaWdpbiAmJiAocm90YXRpb25YICE9PSBfemVyb0RlZyB8fCByb3RhdGlvblkgIT09IF96ZXJvRGVnKSkge1xuICAgICAgdmFyIGFuZ2xlID0gcGFyc2VGbG9hdChyb3RhdGlvblkpICogX0RFRzJSQUQsXG4gICAgICAgICAgYTEzID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgIGEzMyA9IE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgICBjb3M7XG5cbiAgICAgIGFuZ2xlID0gcGFyc2VGbG9hdChyb3RhdGlvblgpICogX0RFRzJSQUQ7XG4gICAgICBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICB4ID0gX2FkZFB4VHJhbnNsYXRlKHRhcmdldCwgeCwgYTEzICogY29zICogLXpPcmlnaW4pO1xuICAgICAgeSA9IF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHksIC1NYXRoLnNpbihhbmdsZSkgKiAtek9yaWdpbik7XG4gICAgICB6ID0gX2FkZFB4VHJhbnNsYXRlKHRhcmdldCwgeiwgYTMzICogY29zICogLXpPcmlnaW4gKyB6T3JpZ2luKTtcbiAgICB9XG5cbiAgICBpZiAodHJhbnNmb3JtUGVyc3BlY3RpdmUgIT09IF96ZXJvUHgpIHtcbiAgICAgIHRyYW5zZm9ybXMgKz0gXCJwZXJzcGVjdGl2ZShcIiArIHRyYW5zZm9ybVBlcnNwZWN0aXZlICsgX2VuZFBhcmVudGhlc2lzO1xuICAgIH1cblxuICAgIGlmICh4UGVyY2VudCB8fCB5UGVyY2VudCkge1xuICAgICAgdHJhbnNmb3JtcyArPSBcInRyYW5zbGF0ZShcIiArIHhQZXJjZW50ICsgXCIlLCBcIiArIHlQZXJjZW50ICsgXCIlKSBcIjtcbiAgICB9XG5cbiAgICBpZiAodXNlM0QgfHwgeCAhPT0gX3plcm9QeCB8fCB5ICE9PSBfemVyb1B4IHx8IHogIT09IF96ZXJvUHgpIHtcbiAgICAgIHRyYW5zZm9ybXMgKz0geiAhPT0gX3plcm9QeCB8fCB1c2UzRCA/IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCIsIFwiICsgeSArIFwiLCBcIiArIHogKyBcIikgXCIgOiBcInRyYW5zbGF0ZShcIiArIHggKyBcIiwgXCIgKyB5ICsgX2VuZFBhcmVudGhlc2lzO1xuICAgIH1cblxuICAgIGlmIChyb3RhdGlvbiAhPT0gX3plcm9EZWcpIHtcbiAgICAgIHRyYW5zZm9ybXMgKz0gXCJyb3RhdGUoXCIgKyByb3RhdGlvbiArIF9lbmRQYXJlbnRoZXNpcztcbiAgICB9XG5cbiAgICBpZiAocm90YXRpb25ZICE9PSBfemVyb0RlZykge1xuICAgICAgdHJhbnNmb3JtcyArPSBcInJvdGF0ZVkoXCIgKyByb3RhdGlvblkgKyBfZW5kUGFyZW50aGVzaXM7XG4gICAgfVxuXG4gICAgaWYgKHJvdGF0aW9uWCAhPT0gX3plcm9EZWcpIHtcbiAgICAgIHRyYW5zZm9ybXMgKz0gXCJyb3RhdGVYKFwiICsgcm90YXRpb25YICsgX2VuZFBhcmVudGhlc2lzO1xuICAgIH1cblxuICAgIGlmIChza2V3WCAhPT0gX3plcm9EZWcgfHwgc2tld1kgIT09IF96ZXJvRGVnKSB7XG4gICAgICB0cmFuc2Zvcm1zICs9IFwic2tldyhcIiArIHNrZXdYICsgXCIsIFwiICsgc2tld1kgKyBfZW5kUGFyZW50aGVzaXM7XG4gICAgfVxuXG4gICAgaWYgKHNjYWxlWCAhPT0gMSB8fCBzY2FsZVkgIT09IDEpIHtcbiAgICAgIHRyYW5zZm9ybXMgKz0gXCJzY2FsZShcIiArIHNjYWxlWCArIFwiLCBcIiArIHNjYWxlWSArIF9lbmRQYXJlbnRoZXNpcztcbiAgICB9XG5cbiAgICB0YXJnZXQuc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtcyB8fCBcInRyYW5zbGF0ZSgwLCAwKVwiO1xuICB9LFxuICAgICAgX3JlbmRlclNWR1RyYW5zZm9ybXMgPSBmdW5jdGlvbiBfcmVuZGVyU1ZHVHJhbnNmb3JtcyhyYXRpbywgY2FjaGUpIHtcbiAgICB2YXIgX3JlZjIgPSBjYWNoZSB8fCB0aGlzLFxuICAgICAgICB4UGVyY2VudCA9IF9yZWYyLnhQZXJjZW50LFxuICAgICAgICB5UGVyY2VudCA9IF9yZWYyLnlQZXJjZW50LFxuICAgICAgICB4ID0gX3JlZjIueCxcbiAgICAgICAgeSA9IF9yZWYyLnksXG4gICAgICAgIHJvdGF0aW9uID0gX3JlZjIucm90YXRpb24sXG4gICAgICAgIHNrZXdYID0gX3JlZjIuc2tld1gsXG4gICAgICAgIHNrZXdZID0gX3JlZjIuc2tld1ksXG4gICAgICAgIHNjYWxlWCA9IF9yZWYyLnNjYWxlWCxcbiAgICAgICAgc2NhbGVZID0gX3JlZjIuc2NhbGVZLFxuICAgICAgICB0YXJnZXQgPSBfcmVmMi50YXJnZXQsXG4gICAgICAgIHhPcmlnaW4gPSBfcmVmMi54T3JpZ2luLFxuICAgICAgICB5T3JpZ2luID0gX3JlZjIueU9yaWdpbixcbiAgICAgICAgeE9mZnNldCA9IF9yZWYyLnhPZmZzZXQsXG4gICAgICAgIHlPZmZzZXQgPSBfcmVmMi55T2Zmc2V0LFxuICAgICAgICBmb3JjZUNTUyA9IF9yZWYyLmZvcmNlQ1NTLFxuICAgICAgICB0eCA9IHBhcnNlRmxvYXQoeCksXG4gICAgICAgIHR5ID0gcGFyc2VGbG9hdCh5KSxcbiAgICAgICAgYTExLFxuICAgICAgICBhMjEsXG4gICAgICAgIGExMixcbiAgICAgICAgYTIyLFxuICAgICAgICB0ZW1wO1xuXG4gICAgcm90YXRpb24gPSBwYXJzZUZsb2F0KHJvdGF0aW9uKTtcbiAgICBza2V3WCA9IHBhcnNlRmxvYXQoc2tld1gpO1xuICAgIHNrZXdZID0gcGFyc2VGbG9hdChza2V3WSk7XG5cbiAgICBpZiAoc2tld1kpIHtcbiAgICAgIHNrZXdZID0gcGFyc2VGbG9hdChza2V3WSk7XG4gICAgICBza2V3WCArPSBza2V3WTtcbiAgICAgIHJvdGF0aW9uICs9IHNrZXdZO1xuICAgIH1cblxuICAgIGlmIChyb3RhdGlvbiB8fCBza2V3WCkge1xuICAgICAgcm90YXRpb24gKj0gX0RFRzJSQUQ7XG4gICAgICBza2V3WCAqPSBfREVHMlJBRDtcbiAgICAgIGExMSA9IE1hdGguY29zKHJvdGF0aW9uKSAqIHNjYWxlWDtcbiAgICAgIGEyMSA9IE1hdGguc2luKHJvdGF0aW9uKSAqIHNjYWxlWDtcbiAgICAgIGExMiA9IE1hdGguc2luKHJvdGF0aW9uIC0gc2tld1gpICogLXNjYWxlWTtcbiAgICAgIGEyMiA9IE1hdGguY29zKHJvdGF0aW9uIC0gc2tld1gpICogc2NhbGVZO1xuXG4gICAgICBpZiAoc2tld1gpIHtcbiAgICAgICAgc2tld1kgKj0gX0RFRzJSQUQ7XG4gICAgICAgIHRlbXAgPSBNYXRoLnRhbihza2V3WCAtIHNrZXdZKTtcbiAgICAgICAgdGVtcCA9IE1hdGguc3FydCgxICsgdGVtcCAqIHRlbXApO1xuICAgICAgICBhMTIgKj0gdGVtcDtcbiAgICAgICAgYTIyICo9IHRlbXA7XG5cbiAgICAgICAgaWYgKHNrZXdZKSB7XG4gICAgICAgICAgdGVtcCA9IE1hdGgudGFuKHNrZXdZKTtcbiAgICAgICAgICB0ZW1wID0gTWF0aC5zcXJ0KDEgKyB0ZW1wICogdGVtcCk7XG4gICAgICAgICAgYTExICo9IHRlbXA7XG4gICAgICAgICAgYTIxICo9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYTExID0gX3JvdW5kKGExMSk7XG4gICAgICBhMjEgPSBfcm91bmQoYTIxKTtcbiAgICAgIGExMiA9IF9yb3VuZChhMTIpO1xuICAgICAgYTIyID0gX3JvdW5kKGEyMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGExMSA9IHNjYWxlWDtcbiAgICAgIGEyMiA9IHNjYWxlWTtcbiAgICAgIGEyMSA9IGExMiA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHR4ICYmICF+KHggKyBcIlwiKS5pbmRleE9mKFwicHhcIikgfHwgdHkgJiYgIX4oeSArIFwiXCIpLmluZGV4T2YoXCJweFwiKSkge1xuICAgICAgdHggPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIFwieFwiLCB4LCBcInB4XCIpO1xuICAgICAgdHkgPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIFwieVwiLCB5LCBcInB4XCIpO1xuICAgIH1cblxuICAgIGlmICh4T3JpZ2luIHx8IHlPcmlnaW4gfHwgeE9mZnNldCB8fCB5T2Zmc2V0KSB7XG4gICAgICB0eCA9IF9yb3VuZCh0eCArIHhPcmlnaW4gLSAoeE9yaWdpbiAqIGExMSArIHlPcmlnaW4gKiBhMTIpICsgeE9mZnNldCk7XG4gICAgICB0eSA9IF9yb3VuZCh0eSArIHlPcmlnaW4gLSAoeE9yaWdpbiAqIGEyMSArIHlPcmlnaW4gKiBhMjIpICsgeU9mZnNldCk7XG4gICAgfVxuXG4gICAgaWYgKHhQZXJjZW50IHx8IHlQZXJjZW50KSB7XG4gICAgICB0ZW1wID0gdGFyZ2V0LmdldEJCb3goKTtcbiAgICAgIHR4ID0gX3JvdW5kKHR4ICsgeFBlcmNlbnQgLyAxMDAgKiB0ZW1wLndpZHRoKTtcbiAgICAgIHR5ID0gX3JvdW5kKHR5ICsgeVBlcmNlbnQgLyAxMDAgKiB0ZW1wLmhlaWdodCk7XG4gICAgfVxuXG4gICAgdGVtcCA9IFwibWF0cml4KFwiICsgYTExICsgXCIsXCIgKyBhMjEgKyBcIixcIiArIGExMiArIFwiLFwiICsgYTIyICsgXCIsXCIgKyB0eCArIFwiLFwiICsgdHkgKyBcIilcIjtcbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHRlbXApO1xuXG4gICAgaWYgKGZvcmNlQ1NTKSB7XG4gICAgICB0YXJnZXQuc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdGVtcDtcbiAgICB9XG4gIH0sXG4gICAgICBfYWRkUm90YXRpb25hbFByb3BUd2VlbiA9IGZ1bmN0aW9uIF9hZGRSb3RhdGlvbmFsUHJvcFR3ZWVuKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgc3RhcnROdW0sIGVuZFZhbHVlLCByZWxhdGl2ZSkge1xuICAgIHZhciBjYXAgPSAzNjAsXG4gICAgICAgIGlzU3RyaW5nID0gX2lzU3RyaW5nKGVuZFZhbHVlKSxcbiAgICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSkgKiAoaXNTdHJpbmcgJiYgfmVuZFZhbHVlLmluZGV4T2YoXCJyYWRcIikgPyBfUkFEMkRFRyA6IDEpLFxuICAgICAgICBjaGFuZ2UgPSByZWxhdGl2ZSA/IGVuZE51bSAqIHJlbGF0aXZlIDogZW5kTnVtIC0gc3RhcnROdW0sXG4gICAgICAgIGZpbmFsVmFsdWUgPSBzdGFydE51bSArIGNoYW5nZSArIFwiZGVnXCIsXG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgcHQ7XG5cbiAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgIGRpcmVjdGlvbiA9IGVuZFZhbHVlLnNwbGl0KFwiX1wiKVsxXTtcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJzaG9ydFwiKSB7XG4gICAgICAgIGNoYW5nZSAlPSBjYXA7XG5cbiAgICAgICAgaWYgKGNoYW5nZSAhPT0gY2hhbmdlICUgKGNhcCAvIDIpKSB7XG4gICAgICAgICAgY2hhbmdlICs9IGNoYW5nZSA8IDAgPyBjYXAgOiAtY2FwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiY3dcIiAmJiBjaGFuZ2UgPCAwKSB7XG4gICAgICAgIGNoYW5nZSA9IChjaGFuZ2UgKyBjYXAgKiBfYmlnTnVtJDEpICUgY2FwIC0gfn4oY2hhbmdlIC8gY2FwKSAqIGNhcDtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImNjd1wiICYmIGNoYW5nZSA+IDApIHtcbiAgICAgICAgY2hhbmdlID0gKGNoYW5nZSAtIGNhcCAqIF9iaWdOdW0kMSkgJSBjYXAgLSB+fihjaGFuZ2UgLyBjYXApICogY2FwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBsdWdpbi5fcHQgPSBwdCA9IG5ldyBQcm9wVHdlZW4ocGx1Z2luLl9wdCwgdGFyZ2V0LCBwcm9wZXJ0eSwgc3RhcnROdW0sIGNoYW5nZSwgX3JlbmRlclByb3BXaXRoRW5kKTtcbiAgICBwdC5lID0gZmluYWxWYWx1ZTtcbiAgICBwdC51ID0gXCJkZWdcIjtcblxuICAgIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgICByZXR1cm4gcHQ7XG4gIH0sXG4gICAgICBfYWRkUmF3VHJhbnNmb3JtUFRzID0gZnVuY3Rpb24gX2FkZFJhd1RyYW5zZm9ybVBUcyhwbHVnaW4sIHRyYW5zZm9ybXMsIHRhcmdldCkge1xuICAgIHZhciBzdHlsZSA9IF90ZW1wRGl2U3R5bGVyLnN0eWxlLFxuICAgICAgICBzdGFydENhY2hlID0gdGFyZ2V0Ll9nc2FwLFxuICAgICAgICBleGNsdWRlID0gXCJwZXJzcGVjdGl2ZSxmb3JjZTNELHRyYW5zZm9ybU9yaWdpbixzdmdPcmlnaW5cIixcbiAgICAgICAgZW5kQ2FjaGUsXG4gICAgICAgIHAsXG4gICAgICAgIHN0YXJ0VmFsdWUsXG4gICAgICAgIGVuZFZhbHVlLFxuICAgICAgICBzdGFydE51bSxcbiAgICAgICAgZW5kTnVtLFxuICAgICAgICBzdGFydFVuaXQsXG4gICAgICAgIGVuZFVuaXQ7XG4gICAgc3R5bGUuY3NzVGV4dCA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5jc3NUZXh0ICsgXCI7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jaztcIjtcbiAgICBzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm1zO1xuXG4gICAgX2RvYyQxLmJvZHkuYXBwZW5kQ2hpbGQoX3RlbXBEaXZTdHlsZXIpO1xuXG4gICAgZW5kQ2FjaGUgPSBfcGFyc2VUcmFuc2Zvcm0oX3RlbXBEaXZTdHlsZXIsIDEpO1xuXG4gICAgZm9yIChwIGluIF90cmFuc2Zvcm1Qcm9wcykge1xuICAgICAgc3RhcnRWYWx1ZSA9IHN0YXJ0Q2FjaGVbcF07XG4gICAgICBlbmRWYWx1ZSA9IGVuZENhY2hlW3BdO1xuXG4gICAgICBpZiAoc3RhcnRWYWx1ZSAhPT0gZW5kVmFsdWUgJiYgZXhjbHVkZS5pbmRleE9mKHApIDwgMCkge1xuICAgICAgICBzdGFydFVuaXQgPSBnZXRVbml0KHN0YXJ0VmFsdWUpO1xuICAgICAgICBlbmRVbml0ID0gZ2V0VW5pdChlbmRWYWx1ZSk7XG4gICAgICAgIHN0YXJ0TnVtID0gc3RhcnRVbml0ICE9PSBlbmRVbml0ID8gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwLCBzdGFydFZhbHVlLCBlbmRVbml0KSA6IHBhcnNlRmxvYXQoc3RhcnRWYWx1ZSk7XG4gICAgICAgIGVuZE51bSA9IHBhcnNlRmxvYXQoZW5kVmFsdWUpO1xuICAgICAgICBwbHVnaW4uX3B0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCBzdGFydENhY2hlLCBwLCBzdGFydE51bSwgZW5kTnVtIC0gc3RhcnROdW0sIF9yZW5kZXJDU1NQcm9wKTtcbiAgICAgICAgcGx1Z2luLl9wdC51ID0gZW5kVW5pdCB8fCAwO1xuXG4gICAgICAgIHBsdWdpbi5fcHJvcHMucHVzaChwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfZG9jJDEuYm9keS5yZW1vdmVDaGlsZChfdGVtcERpdlN0eWxlcik7XG4gIH07XG5cbiAgX2ZvckVhY2hOYW1lKFwicGFkZGluZyxtYXJnaW4sV2lkdGgsUmFkaXVzXCIsIGZ1bmN0aW9uIChuYW1lLCBpbmRleCkge1xuICAgIHZhciB0ID0gXCJUb3BcIixcbiAgICAgICAgciA9IFwiUmlnaHRcIixcbiAgICAgICAgYiA9IFwiQm90dG9tXCIsXG4gICAgICAgIGwgPSBcIkxlZnRcIixcbiAgICAgICAgcHJvcHMgPSAoaW5kZXggPCAzID8gW3QsIHIsIGIsIGxdIDogW3QgKyBsLCB0ICsgciwgYiArIHIsIGIgKyBsXSkubWFwKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICByZXR1cm4gaW5kZXggPCAyID8gbmFtZSArIHNpZGUgOiBcImJvcmRlclwiICsgc2lkZSArIG5hbWU7XG4gICAgfSk7XG5cbiAgICBfc3BlY2lhbFByb3BzW2luZGV4ID4gMSA/IFwiYm9yZGVyXCIgKyBuYW1lIDogbmFtZV0gPSBmdW5jdGlvbiAocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBlbmRWYWx1ZSwgdHdlZW4pIHtcbiAgICAgIHZhciBhLCB2YXJzO1xuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDQpIHtcbiAgICAgICAgYSA9IHByb3BzLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgIHJldHVybiBfZ2V0KHBsdWdpbiwgcHJvcCwgcHJvcGVydHkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFycyA9IGEuam9pbihcIiBcIik7XG4gICAgICAgIHJldHVybiB2YXJzLnNwbGl0KGFbMF0pLmxlbmd0aCA9PT0gNSA/IGFbMF0gOiB2YXJzO1xuICAgICAgfVxuXG4gICAgICBhID0gKGVuZFZhbHVlICsgXCJcIikuc3BsaXQoXCIgXCIpO1xuICAgICAgdmFycyA9IHt9O1xuICAgICAgcHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCwgaSkge1xuICAgICAgICByZXR1cm4gdmFyc1twcm9wXSA9IGFbaV0gPSBhW2ldIHx8IGFbKGkgLSAxKSAvIDIgfCAwXTtcbiAgICAgIH0pO1xuICAgICAgcGx1Z2luLmluaXQodGFyZ2V0LCB2YXJzLCB0d2Vlbik7XG4gICAgfTtcbiAgfSk7XG5cbiAgdmFyIENTU1BsdWdpbiA9IHtcbiAgICBuYW1lOiBcImNzc1wiLFxuICAgIHJlZ2lzdGVyOiBfaW5pdENvcmUsXG4gICAgdGFyZ2V0VGVzdDogZnVuY3Rpb24gdGFyZ2V0VGVzdCh0YXJnZXQpIHtcbiAgICAgIHJldHVybiB0YXJnZXQuc3R5bGUgJiYgdGFyZ2V0Lm5vZGVUeXBlO1xuICAgIH0sXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0cykge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5fcHJvcHMsXG4gICAgICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICAgICAgc3RhcnRWYWx1ZSxcbiAgICAgICAgICBlbmRWYWx1ZSxcbiAgICAgICAgICBlbmROdW0sXG4gICAgICAgICAgc3RhcnROdW0sXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBzcGVjaWFsUHJvcCxcbiAgICAgICAgICBwLFxuICAgICAgICAgIHN0YXJ0VW5pdCxcbiAgICAgICAgICBlbmRVbml0LFxuICAgICAgICAgIHJlbGF0aXZlLFxuICAgICAgICAgIGlzVHJhbnNmb3JtUmVsYXRlZCxcbiAgICAgICAgICB0cmFuc2Zvcm1Qcm9wVHdlZW4sXG4gICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgc21vb3RoLFxuICAgICAgICAgIGhhc1ByaW9yaXR5O1xuICAgICAgX3BsdWdpbkluaXR0ZWQgfHwgX2luaXRDb3JlKCk7XG5cbiAgICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICAgIGlmIChwID09PSBcImF1dG9Sb3VuZFwiKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBlbmRWYWx1ZSA9IHZhcnNbcF07XG5cbiAgICAgICAgaWYgKF9wbHVnaW5zW3BdICYmIF9jaGVja1BsdWdpbihwLCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHR5cGUgPSB0eXBlb2YgZW5kVmFsdWU7XG4gICAgICAgIHNwZWNpYWxQcm9wID0gX3NwZWNpYWxQcm9wc1twXTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgZW5kVmFsdWUgPSBlbmRWYWx1ZS5jYWxsKHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKTtcbiAgICAgICAgICB0eXBlID0gdHlwZW9mIGVuZFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09IFwic3RyaW5nXCIgJiYgfmVuZFZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIpKSB7XG4gICAgICAgICAgZW5kVmFsdWUgPSBfcmVwbGFjZVJhbmRvbShlbmRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3BlY2lhbFByb3ApIHtcbiAgICAgICAgICBpZiAoc3BlY2lhbFByb3AodGhpcywgdGFyZ2V0LCBwLCBlbmRWYWx1ZSwgdHdlZW4pKSB7XG4gICAgICAgICAgICBoYXNQcmlvcml0eSA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHAuc3Vic3RyKDAsIDIpID09PSBcIi0tXCIpIHtcbiAgICAgICAgICB0aGlzLmFkZChzdHlsZSwgXCJzZXRQcm9wZXJ0eVwiLCBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZ2V0UHJvcGVydHlWYWx1ZShwKSArIFwiXCIsIGVuZFZhbHVlICsgXCJcIiwgaW5kZXgsIHRhcmdldHMsIDAsIDAsIHApO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBzdGFydFZhbHVlID0gX2dldCh0YXJnZXQsIHApO1xuICAgICAgICAgIHN0YXJ0TnVtID0gcGFyc2VGbG9hdChzdGFydFZhbHVlKTtcbiAgICAgICAgICByZWxhdGl2ZSA9IHR5cGUgPT09IFwic3RyaW5nXCIgJiYgZW5kVmFsdWUuY2hhckF0KDEpID09PSBcIj1cIiA/ICsoZW5kVmFsdWUuY2hhckF0KDApICsgXCIxXCIpIDogMDtcblxuICAgICAgICAgIGlmIChyZWxhdGl2ZSkge1xuICAgICAgICAgICAgZW5kVmFsdWUgPSBlbmRWYWx1ZS5zdWJzdHIoMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG5cbiAgICAgICAgICBpZiAocCBpbiBfcHJvcGVydHlBbGlhc2VzKSB7XG4gICAgICAgICAgICBpZiAocCA9PT0gXCJhdXRvQWxwaGFcIikge1xuICAgICAgICAgICAgICBpZiAoc3RhcnROdW0gPT09IDEgJiYgX2dldCh0YXJnZXQsIFwidmlzaWJpbGl0eVwiKSA9PT0gXCJoaWRkZW5cIiAmJiBlbmROdW0pIHtcbiAgICAgICAgICAgICAgICBzdGFydE51bSA9IDA7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBzdHlsZSwgXCJ2aXNpYmlsaXR5XCIsIHN0YXJ0TnVtID8gXCJpbmhlcml0XCIgOiBcImhpZGRlblwiLCBlbmROdW0gPyBcImluaGVyaXRcIiA6IFwiaGlkZGVuXCIsICFlbmROdW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocCAhPT0gXCJzY2FsZVwiICYmIHAgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgICAgICAgICAgcCA9IF9wcm9wZXJ0eUFsaWFzZXNbcF07XG4gICAgICAgICAgICAgIH5wLmluZGV4T2YoXCIsXCIpICYmIChwID0gcC5zcGxpdChcIixcIilbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlzVHJhbnNmb3JtUmVsYXRlZCA9IHAgaW4gX3RyYW5zZm9ybVByb3BzO1xuXG4gICAgICAgICAgaWYgKGlzVHJhbnNmb3JtUmVsYXRlZCkge1xuICAgICAgICAgICAgaWYgKCF0cmFuc2Zvcm1Qcm9wVHdlZW4pIHtcbiAgICAgICAgICAgICAgY2FjaGUgPSB0YXJnZXQuX2dzYXA7XG4gICAgICAgICAgICAgIGNhY2hlLnJlbmRlclRyYW5zZm9ybSB8fCBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0KTtcbiAgICAgICAgICAgICAgc21vb3RoID0gdmFycy5zbW9vdGhPcmlnaW4gIT09IGZhbHNlICYmIGNhY2hlLnNtb290aDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtUHJvcFR3ZWVuID0gdGhpcy5fcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCBzdHlsZSwgX3RyYW5zZm9ybVByb3AsIDAsIDEsIGNhY2hlLnJlbmRlclRyYW5zZm9ybSwgY2FjaGUsIDAsIC0xKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtUHJvcFR3ZWVuLmRlcCA9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwID09PSBcInNjYWxlXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCBjYWNoZSwgXCJzY2FsZVlcIiwgY2FjaGUuc2NhbGVZLCByZWxhdGl2ZSA/IHJlbGF0aXZlICogZW5kTnVtIDogZW5kTnVtIC0gY2FjaGUuc2NhbGVZKTtcbiAgICAgICAgICAgICAgcHJvcHMucHVzaChcInNjYWxlWVwiLCBwKTtcbiAgICAgICAgICAgICAgcCArPSBcIlhcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJ0cmFuc2Zvcm1PcmlnaW5cIikge1xuICAgICAgICAgICAgICBlbmRWYWx1ZSA9IF9jb252ZXJ0S2V5d29yZHNUb1BlcmNlbnRhZ2VzKGVuZFZhbHVlKTtcblxuICAgICAgICAgICAgICBpZiAoY2FjaGUuc3ZnKSB7XG4gICAgICAgICAgICAgICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgZW5kVmFsdWUsIDAsIHNtb290aCwgMCwgdGhpcyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kVW5pdCA9IHBhcnNlRmxvYXQoZW5kVmFsdWUuc3BsaXQoXCIgXCIpWzJdKSB8fCAwO1xuICAgICAgICAgICAgICAgIGVuZFVuaXQgIT09IGNhY2hlLnpPcmlnaW4gJiYgX2FkZE5vblR3ZWVuaW5nUFQodGhpcywgY2FjaGUsIFwiek9yaWdpblwiLCBjYWNoZS56T3JpZ2luLCBlbmRVbml0KTtcblxuICAgICAgICAgICAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIHN0eWxlLCBwLCBfZmlyc3RUd29Pbmx5KHN0YXJ0VmFsdWUpLCBfZmlyc3RUd29Pbmx5KGVuZFZhbHVlKSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJzdmdPcmlnaW5cIikge1xuICAgICAgICAgICAgICBfYXBwbHlTVkdPcmlnaW4odGFyZ2V0LCBlbmRWYWx1ZSwgMSwgc21vb3RoLCAwLCB0aGlzKTtcblxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocCBpbiBfcm90YXRpb25hbFByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4odGhpcywgY2FjaGUsIHAsIHN0YXJ0TnVtLCBlbmRWYWx1ZSwgcmVsYXRpdmUpO1xuXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInNtb290aE9yaWdpblwiKSB7XG4gICAgICAgICAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIGNhY2hlLCBcInNtb290aFwiLCBjYWNoZS5zbW9vdGgsIGVuZFZhbHVlKTtcblxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJmb3JjZTNEXCIpIHtcbiAgICAgICAgICAgICAgY2FjaGVbcF0gPSBlbmRWYWx1ZTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgICAgICAgICAgX2FkZFJhd1RyYW5zZm9ybVBUcyh0aGlzLCBlbmRWYWx1ZSwgdGFyZ2V0KTtcblxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKCEocCBpbiBzdHlsZSkpIHtcbiAgICAgICAgICAgIHAgPSBfY2hlY2tQcm9wUHJlZml4KHApIHx8IHA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzVHJhbnNmb3JtUmVsYXRlZCB8fCAoZW5kTnVtIHx8IGVuZE51bSA9PT0gMCkgJiYgKHN0YXJ0TnVtIHx8IHN0YXJ0TnVtID09PSAwKSAmJiAhX2NvbXBsZXhFeHAudGVzdChlbmRWYWx1ZSkgJiYgcCBpbiBzdHlsZSkge1xuICAgICAgICAgICAgc3RhcnRVbml0ID0gKHN0YXJ0VmFsdWUgKyBcIlwiKS5zdWJzdHIoKHN0YXJ0TnVtICsgXCJcIikubGVuZ3RoKTtcbiAgICAgICAgICAgIGVuZE51bSB8fCAoZW5kTnVtID0gMCk7XG4gICAgICAgICAgICBlbmRVbml0ID0gZ2V0VW5pdChlbmRWYWx1ZSkgfHwgKHAgaW4gX2NvbmZpZy51bml0cyA/IF9jb25maWcudW5pdHNbcF0gOiBzdGFydFVuaXQpO1xuICAgICAgICAgICAgc3RhcnRVbml0ICE9PSBlbmRVbml0ICYmIChzdGFydE51bSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkpO1xuICAgICAgICAgICAgdGhpcy5fcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCBpc1RyYW5zZm9ybVJlbGF0ZWQgPyBjYWNoZSA6IHN0eWxlLCBwLCBzdGFydE51bSwgcmVsYXRpdmUgPyByZWxhdGl2ZSAqIGVuZE51bSA6IGVuZE51bSAtIHN0YXJ0TnVtLCBlbmRVbml0ID09PSBcInB4XCIgJiYgdmFycy5hdXRvUm91bmQgIT09IGZhbHNlICYmICFpc1RyYW5zZm9ybVJlbGF0ZWQgPyBfcmVuZGVyUm91bmRlZENTU1Byb3AgOiBfcmVuZGVyQ1NTUHJvcCk7XG4gICAgICAgICAgICB0aGlzLl9wdC51ID0gZW5kVW5pdCB8fCAwO1xuXG4gICAgICAgICAgICBpZiAoc3RhcnRVbml0ICE9PSBlbmRVbml0KSB7XG4gICAgICAgICAgICAgIHRoaXMuX3B0LmIgPSBzdGFydFZhbHVlO1xuICAgICAgICAgICAgICB0aGlzLl9wdC5yID0gX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoIShwIGluIHN0eWxlKSkge1xuICAgICAgICAgICAgaWYgKHAgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgIHRoaXMuYWRkKHRhcmdldCwgcCwgdGFyZ2V0W3BdLCBlbmRWYWx1ZSwgaW5kZXgsIHRhcmdldHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX21pc3NpbmdQbHVnaW4ocCwgZW5kVmFsdWUpO1xuXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nLmNhbGwodGhpcywgdGFyZ2V0LCBwLCBzdGFydFZhbHVlLCBlbmRWYWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcHJvcHMucHVzaChwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBoYXNQcmlvcml0eSAmJiBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5KHRoaXMpO1xuICAgIH0sXG4gICAgZ2V0OiBfZ2V0LFxuICAgIGFsaWFzZXM6IF9wcm9wZXJ0eUFsaWFzZXMsXG4gICAgZ2V0U2V0dGVyOiBmdW5jdGlvbiBnZXRTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSwgcGx1Z2luKSB7XG4gICAgICB2YXIgcCA9IF9wcm9wZXJ0eUFsaWFzZXNbcHJvcGVydHldO1xuICAgICAgcCAmJiBwLmluZGV4T2YoXCIsXCIpIDwgMCAmJiAocHJvcGVydHkgPSBwKTtcbiAgICAgIHJldHVybiBwcm9wZXJ0eSBpbiBfdHJhbnNmb3JtUHJvcHMgJiYgcHJvcGVydHkgIT09IF90cmFuc2Zvcm1PcmlnaW5Qcm9wICYmICh0YXJnZXQuX2dzYXAueCB8fCBfZ2V0KHRhcmdldCwgXCJ4XCIpKSA/IHBsdWdpbiAmJiBfcmVjZW50U2V0dGVyUGx1Z2luID09PSBwbHVnaW4gPyBwcm9wZXJ0eSA9PT0gXCJzY2FsZVwiID8gX3NldHRlclNjYWxlIDogX3NldHRlclRyYW5zZm9ybSA6IChfcmVjZW50U2V0dGVyUGx1Z2luID0gcGx1Z2luIHx8IHt9KSAmJiAocHJvcGVydHkgPT09IFwic2NhbGVcIiA/IF9zZXR0ZXJTY2FsZVdpdGhSZW5kZXIgOiBfc2V0dGVyVHJhbnNmb3JtV2l0aFJlbmRlcikgOiB0YXJnZXQuc3R5bGUgJiYgIV9pc1VuZGVmaW5lZCh0YXJnZXQuc3R5bGVbcHJvcGVydHldKSA/IF9zZXR0ZXJDU1NTdHlsZSA6IH5wcm9wZXJ0eS5pbmRleE9mKFwiLVwiKSA/IF9zZXR0ZXJDU1NQcm9wIDogX2dldFNldHRlcih0YXJnZXQsIHByb3BlcnR5KTtcbiAgICB9LFxuICAgIGNvcmU6IHtcbiAgICAgIF9yZW1vdmVQcm9wZXJ0eTogX3JlbW92ZVByb3BlcnR5LFxuICAgICAgX2dldE1hdHJpeDogX2dldE1hdHJpeFxuICAgIH1cbiAgfTtcbiAgZ3NhcC51dGlscy5jaGVja1ByZWZpeCA9IF9jaGVja1Byb3BQcmVmaXg7XG5cbiAgKGZ1bmN0aW9uIChwb3NpdGlvbkFuZFNjYWxlLCByb3RhdGlvbiwgb3RoZXJzLCBhbGlhc2VzKSB7XG4gICAgdmFyIGFsbCA9IF9mb3JFYWNoTmFtZShwb3NpdGlvbkFuZFNjYWxlICsgXCIsXCIgKyByb3RhdGlvbiArIFwiLFwiICsgb3RoZXJzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgX3RyYW5zZm9ybVByb3BzW25hbWVdID0gMTtcbiAgICB9KTtcblxuICAgIF9mb3JFYWNoTmFtZShyb3RhdGlvbiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIF9jb25maWcudW5pdHNbbmFtZV0gPSBcImRlZ1wiO1xuICAgICAgX3JvdGF0aW9uYWxQcm9wZXJ0aWVzW25hbWVdID0gMTtcbiAgICB9KTtcblxuICAgIF9wcm9wZXJ0eUFsaWFzZXNbYWxsWzEzXV0gPSBwb3NpdGlvbkFuZFNjYWxlICsgXCIsXCIgKyByb3RhdGlvbjtcblxuICAgIF9mb3JFYWNoTmFtZShhbGlhc2VzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIHNwbGl0ID0gbmFtZS5zcGxpdChcIjpcIik7XG4gICAgICBfcHJvcGVydHlBbGlhc2VzW3NwbGl0WzFdXSA9IGFsbFtzcGxpdFswXV07XG4gICAgfSk7XG4gIH0pKFwieCx5LHosc2NhbGUsc2NhbGVYLHNjYWxlWSx4UGVyY2VudCx5UGVyY2VudFwiLCBcInJvdGF0aW9uLHJvdGF0aW9uWCxyb3RhdGlvblksc2tld1gsc2tld1lcIiwgXCJ0cmFuc2Zvcm0sdHJhbnNmb3JtT3JpZ2luLHN2Z09yaWdpbixmb3JjZTNELHNtb290aE9yaWdpbix0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiLCBcIjA6dHJhbnNsYXRlWCwxOnRyYW5zbGF0ZVksMjp0cmFuc2xhdGVaLDg6cm90YXRlLDg6cm90YXRpb25aLDg6cm90YXRlWiw5OnJvdGF0ZVgsMTA6cm90YXRlWVwiKTtcblxuICBfZm9yRWFjaE5hbWUoXCJ4LHkseix0b3AscmlnaHQsYm90dG9tLGxlZnQsd2lkdGgsaGVpZ2h0LGZvbnRTaXplLHBhZGRpbmcsbWFyZ2luLHBlcnNwZWN0aXZlXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgX2NvbmZpZy51bml0c1tuYW1lXSA9IFwicHhcIjtcbiAgfSk7XG5cbiAgZ3NhcC5yZWdpc3RlclBsdWdpbihDU1NQbHVnaW4pO1xuXG4gIHZhciBnc2FwV2l0aENTUyA9IGdzYXAucmVnaXN0ZXJQbHVnaW4oQ1NTUGx1Z2luKSB8fCBnc2FwLFxuICAgICAgVHdlZW5NYXhXaXRoQ1NTID0gZ3NhcFdpdGhDU1MuY29yZS5Ud2VlbjtcblxuICBleHBvcnRzLkJhY2sgPSBCYWNrO1xuICBleHBvcnRzLkJvdW5jZSA9IEJvdW5jZTtcbiAgZXhwb3J0cy5DU1NQbHVnaW4gPSBDU1NQbHVnaW47XG4gIGV4cG9ydHMuQ2lyYyA9IENpcmM7XG4gIGV4cG9ydHMuQ3ViaWMgPSBDdWJpYztcbiAgZXhwb3J0cy5FbGFzdGljID0gRWxhc3RpYztcbiAgZXhwb3J0cy5FeHBvID0gRXhwbztcbiAgZXhwb3J0cy5MaW5lYXIgPSBMaW5lYXI7XG4gIGV4cG9ydHMuUG93ZXIwID0gUG93ZXIwO1xuICBleHBvcnRzLlBvd2VyMSA9IFBvd2VyMTtcbiAgZXhwb3J0cy5Qb3dlcjIgPSBQb3dlcjI7XG4gIGV4cG9ydHMuUG93ZXIzID0gUG93ZXIzO1xuICBleHBvcnRzLlBvd2VyNCA9IFBvd2VyNDtcbiAgZXhwb3J0cy5RdWFkID0gUXVhZDtcbiAgZXhwb3J0cy5RdWFydCA9IFF1YXJ0O1xuICBleHBvcnRzLlF1aW50ID0gUXVpbnQ7XG4gIGV4cG9ydHMuU2luZSA9IFNpbmU7XG4gIGV4cG9ydHMuU3RlcHBlZEVhc2UgPSBTdGVwcGVkRWFzZTtcbiAgZXhwb3J0cy5TdHJvbmcgPSBTdHJvbmc7XG4gIGV4cG9ydHMuVGltZWxpbmVMaXRlID0gVGltZWxpbmU7XG4gIGV4cG9ydHMuVGltZWxpbmVNYXggPSBUaW1lbGluZTtcbiAgZXhwb3J0cy5Ud2VlbkxpdGUgPSBUd2VlbjtcbiAgZXhwb3J0cy5Ud2Vlbk1heCA9IFR3ZWVuTWF4V2l0aENTUztcbiAgZXhwb3J0cy5kZWZhdWx0ID0gZ3NhcFdpdGhDU1M7XG4gIGV4cG9ydHMuZ3NhcCA9IGdzYXBXaXRoQ1NTO1xuXG4gIGlmICh0eXBlb2Yod2luZG93KSA9PT0gJ3VuZGVmaW5lZCcgfHwgd2luZG93ICE9PSBleHBvcnRzKSB7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTt9IGVsc2Uge2RlbGV0ZSB3aW5kb3cuZGVmYXVsdDt9XG5cbn0pKSk7XG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgYXNzaWduPU9iamVjdC5hc3NpZ24uYmluZChPYmplY3QpO21vZHVsZS5leHBvcnRzPWFzc2lnbjttb2R1bGUuZXhwb3J0cy5kZWZhdWx0PW1vZHVsZS5leHBvcnRzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JqZWN0LWFzc2lnbi5qcy5tYXAiLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL3Byb2plY3RzL3RlbGFxdWEtdGhlLWxhbmRpbmctcGFnZVwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGlzYWJlXFxcXERldmVsb3BwZXJcXFxcbXlQb3J0Zm9saW9cXFxcc3JjXFxcXHBhZ2VzXFxcXHByb2plY3RzXFxcXHRlbGFxdWEtdGhlLWxhbmRpbmctcGFnZS5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkNvbnRhY3RfY29udGFpbmVyX19YaUEwdyB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJhY2tncm91bmQ6ICMyNjJmNDM7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uQ29udGFjdF9jb250YWluZXJfX1hpQTB3IC5Db250YWN0X2NvbnRhY3RfX3hkb0pNIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDUwcHggMCA1MHB4IDEwMHB4O1xcbiAgbWluLWhlaWdodDogMTUwcHg7XFxuICBjb2xvcjogI2Q4OGE4MztcXG59XFxuLkNvbnRhY3RfY29udGFpbmVyX19YaUEwdyBoMyB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEwMHB4O1xcbiAgY29sb3I6ICNkODhhODM7XFxuICBmb250LWZhbWlseTogXFxcIkdpbHJveS1FeHRyYUJvbGRcXFwiO1xcbn1cXG4uQ29udGFjdF9jb250YWluZXJfX1hpQTB3IGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uQ29udGFjdF9jb250YWluZXJfX1hpQTB3IHAge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uQ29udGFjdF9jb250YWluZXJfX1hpQTB3IC5Db250YWN0X3NvY2lhbF9fM3JydjUge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLkNvbnRhY3RfY29udGFpbmVyX19YaUEwdyAuQ29udGFjdF9zb2NpYWxfXzNycnY1IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG4uQ29udGFjdF9jb250YWluZXJfX1hpQTB3IC5Db250YWN0X3NvY2lhbF9fM3JydjUgYTpob3ZlciBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBDb250YWN0X3Byb2plY3RzLWFuaW1hdGlvbl9fMU9FZmogMC43cyBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBDb250YWN0X3Byb2plY3RzLWFuaW1hdGlvbl9fMU9FZmogMC43cyBpbmZpbml0ZTtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBjb2xvcjogI2Q4OGE4MztcXG59XFxuLkNvbnRhY3RfY29udGFpbmVyX19YaUEwdyAuQ29udGFjdF9zb2NpYWxfXzNycnY1IGEgaW1nIHtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuLkNvbnRhY3RfY29udGFpbmVyX19YaUEwdyAuQ29udGFjdF9zb2NpYWxfXzNycnY1IGEgc3BhbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBDb250YWN0X3Byb2plY3RzLWFuaW1hdGlvbl9fMU9FZmoge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgQ29udGFjdF9wcm9qZWN0cy1hbmltYXRpb25fXzFPRWZqIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vQ29udGFjdC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBTE07RUFNTixrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EscUJBQUE7RUFBQSxhQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUFISjtBQUtJO0VBQ0kscUJBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQXBCQTtBQWlCUjtBQU1JO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0ExQkE7RUEyQkEsK0JBQUE7QUFKUjtBQU9JO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUxSO0FBUUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQU5SO0FBU0k7RUFDRSxxQkFBQTtFQUFBLGFBQUE7QUFQTjtBQVNNO0VBQ0UscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUFI7QUFTUTtFQUNFLGVBQUE7RUFDQSxrRUFBQTtVQUFBLDBEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0ExREY7QUFtRFI7QUFVUTtFQUNFLFlBQUE7QUFSVjtBQVdRO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0FBVFY7O0FBZUE7RUFDSTtJQUNFLFVBQUE7RUFaSjtFQWNFO0lBQ0UsVUFBQTtFQVpKO0FBQ0Y7O0FBTUE7RUFDSTtJQUNFLFVBQUE7RUFaSjtFQWNFO0lBQ0UsVUFBQTtFQVpKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJyb3duOiAjZDg4YTgzO1xcclxcbiRibHU6ICMzOTQzNTk7XFxyXFxuJGRhcmtCbHU6ICMyNjJmNDM7XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQ6ICRkYXJrQmx1O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbiAgICAuY29udGFjdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIG1hcmdpbjogNTBweCAwIDUwcHggMTAwcHg7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICAgIGNvbG9yOiAkYnJvd247XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaDMge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMDBweDtcXHJcXG4gICAgICAgIGNvbG9yOiAkYnJvd247XFxyXFxuICAgICAgICBmb250LWZhbWlseTogXFxcIkdpbHJveS1FeHRyYUJvbGRcXFwiO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGEge1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zb2NpYWwge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAgICAgYSB7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIgc3BhbiB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgICAgICAgYW5pbWF0aW9uOiBwcm9qZWN0cy1hbmltYXRpb24gLjdzIGluZmluaXRlO1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgICAgICAgIGNvbG9yOiAkYnJvd247XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcHJvamVjdHMtYW5pbWF0aW9uIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkNvbnRhY3RfY29udGFpbmVyX19YaUEwd1wiLFxuXHRcImNvbnRhY3RcIjogXCJDb250YWN0X2NvbnRhY3RfX3hkb0pNXCIsXG5cdFwic29jaWFsXCI6IFwiQ29udGFjdF9zb2NpYWxfXzNycnY1XCIsXG5cdFwicHJvamVjdHMtYW5pbWF0aW9uXCI6IFwiQ29udGFjdF9wcm9qZWN0cy1hbmltYXRpb25fXzFPRWZqXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkxheW91dF9jb250YWluZXJfXzJRTFlXIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5MYXlvdXRfY29udGFpbmVyX18yUUxZVyAuTGF5b3V0X2NvbnRhaW5lcklubmVyX18xSjlrUiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuLkxheW91dF9jb250YWluZXJfXzJRTFlXI0xheW91dF9jb2xvcl9fMXozUDcge1xcbiAgYmFja2dyb3VuZDogIzM5NDM1OTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0xheW91dC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFBO0VBQUEsYUFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLHFCQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsVUFBQTtBQUNKO0FBRUU7RUFDRSxtQkFBQTtBQUFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gIC5jb250YWluZXJJbm5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmI2NvbG9yIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzM5NDM1OTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTGF5b3V0X2NvbnRhaW5lcl9fMlFMWVdcIixcblx0XCJjb250YWluZXJJbm5lclwiOiBcIkxheW91dF9jb250YWluZXJJbm5lcl9fMUo5a1JcIixcblx0XCJjb2xvclwiOiBcIkxheW91dF9jb2xvcl9fMXozUDdcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuUHJvamVjdEl0ZW1fY29udGFpbmVyX18yTjgwWiB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW4tYm90dG9tOiA0MDBweDtcXG59XFxuLlByb2plY3RJdGVtX2NvbnRhaW5lcl9fMk44MFogLlByb2plY3RJdGVtX2hlcm9fXzJhUmRnIHtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uUHJvamVjdEl0ZW1fY29udGFpbmVyX18yTjgwWiAuUHJvamVjdEl0ZW1faGVyb19fMmFSZGcgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDkwJSk7XFxuICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDkwJSk7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuLlByb2plY3RJdGVtX2NvbnRhaW5lcl9fMk44MFogLlByb2plY3RJdGVtX2hlcm9fXzJhUmRnIC5Qcm9qZWN0SXRlbV9oZXJvVGl0bGVfXzNBNy1YIHtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0xMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLlByb2plY3RJdGVtX2NvbnRhaW5lcl9fMk44MFogLlByb2plY3RJdGVtX2hlcm9fXzJhUmRnIC5Qcm9qZWN0SXRlbV9oZXJvVGl0bGVfXzNBNy1YIGgxIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogN3Z3O1xcbiAgY29sb3I6ICNkODhhODM7XFxufVxcbi5Qcm9qZWN0SXRlbV9jb250YWluZXJfXzJOODBaIC5Qcm9qZWN0SXRlbV9kZXNjcmlwdGlvbl9fMTdSaE0ge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMTAwcHggMCA1MHB4IDA7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIC5Qcm9qZWN0SXRlbV9jb250YWluZXJfXzJOODBaIC5Qcm9qZWN0SXRlbV9kZXNjcmlwdGlvbl9fMTdSaE0ge1xcbiAgICBtYXJnaW46IDUwcHggMCAwO1xcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuLlByb2plY3RJdGVtX2NvbnRhaW5lcl9fMk44MFogLlByb2plY3RJdGVtX2Rlc2NyaXB0aW9uX18xN1JoTSBwIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG4uUHJvamVjdEl0ZW1fY29udGFpbmVyX18yTjgwWiAuUHJvamVjdEl0ZW1fZGVzY3JpcHRpb25fXzE3UmhNIC5Qcm9qZWN0SXRlbV9kZXNjcmlwdGlvbkxlZnRfXzJKejhVIHtcXG4gIHdpZHRoOiA0MCU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLlByb2plY3RJdGVtX2NvbnRhaW5lcl9fMk44MFogLlByb2plY3RJdGVtX2Rlc2NyaXB0aW9uX18xN1JoTSAuUHJvamVjdEl0ZW1fZGVzY3JpcHRpb25MZWZ0X18ySno4VSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG4uUHJvamVjdEl0ZW1fY29udGFpbmVyX18yTjgwWiAuUHJvamVjdEl0ZW1fZGVzY3JpcHRpb25fXzE3UmhNIC5Qcm9qZWN0SXRlbV9kZXNjcmlwdGlvbkxlZnRfXzJKejhVIGRpdiB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgbWluLWhlaWdodDogNTBweDtcXG59XFxuLlByb2plY3RJdGVtX2NvbnRhaW5lcl9fMk44MFogLlByb2plY3RJdGVtX2Rlc2NyaXB0aW9uX18xN1JoTSAuUHJvamVjdEl0ZW1fZGVzY3JpcHRpb25MZWZ0X18ySno4VSBkaXYgLlByb2plY3RJdGVtX3RpdGxlQ29udGFpbmVyX18yMnEzUSwgLlByb2plY3RJdGVtX2NvbnRhaW5lcl9fMk44MFogLlByb2plY3RJdGVtX2Rlc2NyaXB0aW9uX18xN1JoTSAuUHJvamVjdEl0ZW1fZGVzY3JpcHRpb25MZWZ0X18ySno4VSBkaXYgLlByb2plY3RJdGVtX2NvbnRlbnRDb250YWluZXJfXzI0RWhZIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtaW4taGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XFxuICBtYXJnaW46IDA7XFxufVxcbi5Qcm9qZWN0SXRlbV9jb250YWluZXJfXzJOODBaIC5Qcm9qZWN0SXRlbV9kZXNjcmlwdGlvbl9fMTdSaE0gLlByb2plY3RJdGVtX2Rlc2NyaXB0aW9uUmlnaHRfXzM4OHZ1IHtcXG4gIHdpZHRoOiA0MCU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLlByb2plY3RJdGVtX2NvbnRhaW5lcl9fMk44MFogLlByb2plY3RJdGVtX2Rlc2NyaXB0aW9uX18xN1JoTSAuUHJvamVjdEl0ZW1fZGVzY3JpcHRpb25SaWdodF9fMzg4dnUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuLlByb2plY3RJdGVtX2NvbnRhaW5lcl9fMk44MFogLlByb2plY3RJdGVtX2Rlc2NyaXB0aW9uX18xN1JoTSAuUHJvamVjdEl0ZW1fZGVzY3JpcHRpb25SaWdodF9fMzg4dnUgZGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbn1cXG4uUHJvamVjdEl0ZW1fY29udGFpbmVyX18yTjgwWiAuUHJvamVjdEl0ZW1fZGVzY3JpcHRpb25fXzE3UmhNIC5Qcm9qZWN0SXRlbV9kZXNjcmlwdGlvblJpZ2h0X18zODh2dSBkaXYgLlByb2plY3RJdGVtX3RpdGxlQ29udGFpbmVyX18yMnEzUSwgLlByb2plY3RJdGVtX2NvbnRhaW5lcl9fMk44MFogLlByb2plY3RJdGVtX2Rlc2NyaXB0aW9uX18xN1JoTSAuUHJvamVjdEl0ZW1fZGVzY3JpcHRpb25SaWdodF9fMzg4dnUgZGl2IC5Qcm9qZWN0SXRlbV9jb250ZW50Q29udGFpbmVyX18yNEVoWSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWluLWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uUHJvamVjdEl0ZW1fY29udGFpbmVyX18yTjgwWiAuUHJvamVjdEl0ZW1fZGVzY3JpcHRpb25fXzE3UmhNIC5Qcm9qZWN0SXRlbV9kZXNjcmlwdGlvblJpZ2h0X18zODh2dSAuUHJvamVjdEl0ZW1fZGVzY3JpcHRpb25SaWdodExpbmtfXzJmSFNmIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uUHJvamVjdEl0ZW1fY29udGFpbmVyX18yTjgwWiAuUHJvamVjdEl0ZW1fZGVzY3JpcHRpb25fXzE3UmhNIC5Qcm9qZWN0SXRlbV9kZXNjcmlwdGlvblJpZ2h0X18zODh2dSAuUHJvamVjdEl0ZW1fZGVzY3JpcHRpb25SaWdodExpbmtfXzJmSFNmIGEge1xcbiAgY29sb3I6ICNkODhhODM7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLlByb2plY3RJdGVtX2NvbnRhaW5lcl9fMk44MFogLlByb2plY3RJdGVtX2Rlc2NyaXB0aW9uX18xN1JoTSAuUHJvamVjdEl0ZW1fZGVzY3JpcHRpb25SaWdodF9fMzg4dnUgZGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcbi5Qcm9qZWN0SXRlbV9jb250YWluZXJfXzJOODBaIC5Qcm9qZWN0SXRlbV9pbWFnZXNfX3JmbjFDIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY5MHB4KSB7XFxuICAuUHJvamVjdEl0ZW1fY29udGFpbmVyX18yTjgwWiAuUHJvamVjdEl0ZW1faW1hZ2VzX19yZm4xQyB7XFxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG4uUHJvamVjdEl0ZW1fY29udGFpbmVyX18yTjgwWiAuUHJvamVjdEl0ZW1faW1hZ2VzX19yZm4xQyBpbWcge1xcbiAgbWF4LXdpZHRoOiAyNXZ3O1xcbiAgaGVpZ2h0OiAzODBweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjkwcHgpIHtcXG4gIC5Qcm9qZWN0SXRlbV9jb250YWluZXJfXzJOODBaIC5Qcm9qZWN0SXRlbV9pbWFnZXNfX3JmbjFDIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gICAgbWluLWhlaWdodDogMzgwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLlByb2plY3RJdGVtX2NvbnRhaW5lcl9fMk44MFogLlByb2plY3RJdGVtX2ltYWdlc19fcmZuMUMgaW1nIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgfVxcbn1cXG4uUHJvamVjdEl0ZW1fY29udGFpbmVyX18yTjgwWiAuUHJvamVjdEl0ZW1faW1hZ2VzX19yZm4xQyBpbWcuUHJvamVjdEl0ZW1faW1hZ2VUd29fXzF5bnNnIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcbi5Qcm9qZWN0SXRlbV9jb250YWluZXJfXzJOODBaIC5Qcm9qZWN0SXRlbV9pbWFnZXNfX3JmbjFDIGltZy5Qcm9qZWN0SXRlbV9pbWFnZVRocmVlX18xTWpGayB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAuUHJvamVjdEl0ZW1fY29udGFpbmVyX18yTjgwWiAuUHJvamVjdEl0ZW1faW1hZ2VzX19yZm4xQyBpbWcuUHJvamVjdEl0ZW1faW1hZ2VUaHJlZV9fMU1qRmsge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjkwcHgpIHtcXG4gIC5Qcm9qZWN0SXRlbV9jb250YWluZXJfXzJOODBaIC5Qcm9qZWN0SXRlbV9pbWFnZXNfX3JmbjFDIGltZy5Qcm9qZWN0SXRlbV9pbWFnZVRocmVlX18xTWpGayB7XFxuICAgIG1hcmdpbjogNTBweCAwIDEwMHB4IDA7XFxuICB9XFxufVxcbi5Qcm9qZWN0SXRlbV9jb250YWluZXJfXzJOODBaIC5Qcm9qZWN0SXRlbV9pbWFnZXNfX3JmbjFDIGltZyNQcm9qZWN0SXRlbV90YWJsZXRJbWFnZV9fZjg2dGwge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY5MHB4KSB7XFxuICAuUHJvamVjdEl0ZW1fY29udGFpbmVyX18yTjgwWiAuUHJvamVjdEl0ZW1faW1hZ2VzX19yZm4xQyBpbWcjUHJvamVjdEl0ZW1fdGFibGV0SW1hZ2VfX2Y4NnRsIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5Qcm9qZWN0SXRlbV9jb250YWluZXJfXzJOODBaIC5Qcm9qZWN0SXRlbV9pbWFnZXNfX3JmbjFDIGltZyNQcm9qZWN0SXRlbV90YWJsZXRJbWFnZV9fZjg2dGwge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjIwcHg7XFxuICB9XFxufVxcbi5Qcm9qZWN0SXRlbV9jb250YWluZXJfXzJOODBaIC5Qcm9qZWN0SXRlbV9pbWFnZXNfX3JmbjFDIGltZyNQcm9qZWN0SXRlbV9tb2JpbGVJbWFnZV9fMXVPb2Mge1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIGhlaWdodDogNjcwcHg7XFxuICAvKkBpbmNsdWRlIG1vYmlsZSB7XFxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgfSBcXG5cXG4gIEBpbmNsdWRlIHRhYmxldCB7XFxuICAgIHdpZHRoOiAxODBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gIH0qL1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjkwcHgpIHtcXG4gIC5Qcm9qZWN0SXRlbV9jb250YWluZXJfXzJOODBaIC5Qcm9qZWN0SXRlbV9pbWFnZXNfX3JmbjFDIGltZyNQcm9qZWN0SXRlbV9tb2JpbGVJbWFnZV9fMXVPb2Mge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICAvKm1heC13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogODAwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsqL1xcbiAgfVxcbn1cXG4uUHJvamVjdEl0ZW1fY29udGFpbmVyX18yTjgwWiBoMywgLlByb2plY3RJdGVtX2NvbnRhaW5lcl9fMk44MFogLlByb2plY3RJdGVtX3NjcmVlbl9fMzhDZTcge1xcbiAgY29sb3I6ICMyNjJmNDM7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLlByb2plY3RJdGVtX2NvbnRhaW5lcl9fMk44MFogaDMsIC5Qcm9qZWN0SXRlbV9jb250YWluZXJfXzJOODBaIC5Qcm9qZWN0SXRlbV9zY3JlZW5fXzM4Q2U3IHtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgfVxcbn1cXG4uUHJvamVjdEl0ZW1fY29udGFpbmVyX18yTjgwWiBoMyB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5Qcm9qZWN0SXRlbV9jb250YWluZXJfXzJOODBaIC5Qcm9qZWN0SXRlbV9zY3JlZW5UaXRsZV9fMkpSTGYge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY5MHB4KSB7XFxuICAuUHJvamVjdEl0ZW1fY29udGFpbmVyX18yTjgwWiAuUHJvamVjdEl0ZW1fc2NyZWVuVGl0bGVfXzJKUkxmI1Byb2plY3RJdGVtX3NjcmVlblRpdGxlTW9iaWxlX182Ynd6bCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi5Qcm9qZWN0SXRlbV9jb250YWluZXJfXzJOODBaIC5Qcm9qZWN0SXRlbV9zY3JlZW5UaXRsZV9fMkpSTGYgLlByb2plY3RJdGVtX3NjcmVlbl9fMzhDZTcge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9Qcm9qZWN0SXRlbS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFrQ0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBakNGO0FBbUNFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUFqQ0o7QUFtQ0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxpQkFBQTtBQWpDTjtBQW9DSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQWxDTjtBQW9DTTtFQUVFLFNBQUE7RUFDQSxjQUFBO0VBQ0EsY0EvREE7QUE0QlI7QUF3Q0U7RUFDRSxxQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUF0Q0o7QUFsQkU7RUFxREE7SUFNSSxnQkFBQTtJQUNBLDhCQUFBO1lBQUEsc0JBQUE7RUFyQ0o7QUFDRjtBQXVDSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQXJDTjtBQXdDSTtFQUNFLFVBQUE7QUF0Q047QUEvQkU7RUFvRUU7SUFJSSxXQUFBO0VBckNOO0FBQ0Y7QUF1Q007RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBckNSO0FBdUNNO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7QUFyQ1I7QUEwQ0k7RUFDRSxVQUFBO0FBeENOO0FBaERFO0VBdUZFO0lBSUksV0FBQTtFQXZDTjtBQUNGO0FBeUNNO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQXZDUjtBQXlDTTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0FBdkNSO0FBMkNNO0VBQ0UscUJBQUE7RUFBQSxhQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLGdCQUFBO0FBekNSO0FBMkNRO0VBQ0UsY0E5SEY7RUErSEUsbUJBQUE7RUFDQSx5QkFBQTtBQXpDVjtBQTZDTTtFQUNFLG1CQUFBO0FBM0NSO0FBZ0RFO0VBQ0UscUJBQUE7RUFBQSxhQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUE5Q0o7QUExRUU7RUFvSEE7SUFPSSw4QkFBQTtZQUFBLHNCQUFBO0VBN0NKO0FBQ0Y7QUErQ0k7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBN0NOO0FBcEZFO0VBOEhFO0lBTUksZUFBQTtJQUNBLHNCQUFBO0lBQ0EsaUJBQUE7RUE1Q047QUFDRjtBQXBGRTtFQXVIRTtJQVlJLFlBQUE7SUFDQSxhQUFBO0VBM0NOO0FBQ0Y7QUE2Q007RUFDRSxnQkFBQTtBQTNDUjtBQThDTTtFQUNFLGlCQUFBO0FBNUNSO0FBOUdFO0VBeUpJO0lBSUksZ0JBQUE7RUEzQ1I7QUFDRjtBQTVHRTtFQWtKSTtJQU9JLHNCQUFBO0VBekNSO0FBQ0Y7QUE0Q007RUFFRSxhQUFBO0FBM0NSO0FBcEhFO0VBNkpJO0lBS0ksMEJBQUE7SUFDQSxpQkFBQTtFQTFDUjtBQUNGO0FBbkhFO0VBc0pJO0lBVUksWUFBQTtJQUNBLGFBQUE7RUF6Q1I7QUFDRjtBQTRDTTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQVVBOzs7Ozs7O0lBQUE7QUE1Q1I7QUE1SUU7RUE0S0k7SUFNSSxhQUFBO0lBQ0E7OzJCQUFBO0VBaENSO0FBQ0Y7QUFpREU7RUFDRSxjQTFOTTtBQTJLVjtBQWhKRTtFQThMQTtJQUlJLGVBQUE7RUE5Q0o7QUFDRjtBQWlERTtFQUNFLFNBQUE7QUEvQ0o7QUFrREU7RUFDRSxnQkFBQTtBQWhESjtBQWxLRTtFQW9ORTtJQUVJLGFBQUE7RUFoRE47QUFDRjtBQW1ESTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQWpETlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYnJvd246ICNkODhhODM7XFxyXFxuJGJsdTogIzM5NDM1OTtcXHJcXG4kZGFya0JsdTogIzI2MmY0MztcXHJcXG5cXHJcXG4vLyBTbWFsbCB0YWJsZXRzIGFuZCBsYXJnZSBzbWFydHBob25lcyAobGFuZHNjYXBlIHZpZXcpXFxyXFxuJHNjcmVlbi1zbS1taW46IDQ4MHB4O1xcclxcblxcclxcbi8vVGhlIHJvYWQgYmV0d2VlbiBsYXJnZSBzbWF0cGhvbmUgYW5kIHNtYWxsIHRhYmxldFxcclxcbiRzY3JlZW4tc20tbWF4OiA2OTBweDtcXHJcXG4gXFxyXFxuLy8gVGFibGV0cyAocG9ydHJhaXQgdmlldylcXHJcXG4kc2NyZWVuLW1kLW1pbjogNzY4cHg7XFxyXFxuXFxyXFxuLy8gU21hbGwgZGV2aWNlc1xcclxcbkBtaXhpbiBtb2JpbGUge1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JHNjcmVlbi1zbS1taW59KSB7XFxyXFxuICAgICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vIFNtYWxsIHRhYmxldFxcclxcbkBtaXhpbiBzbWFsbCB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogI3skc2NyZWVuLXNtLW1heH0pIHtcXHJcXG4gICAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gTWVkaXVtIGRldmljZXNcXHJcXG5AbWl4aW4gdGFibGV0IHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRzY3JlZW4tbWQtbWlufSkge1xcclxcbiAgICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDQwMHB4O1xcclxcblxcclxcbiAgLmhlcm8ge1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoOTAlKTtcXHJcXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVyb1RpdGxlIHtcXHJcXG4gICAgICBoZWlnaHQ6IDEzMHB4O1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBib3R0b206IC0xMHB4O1xcclxcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgICAgaDEge1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDd2dztcXHJcXG4gICAgICAgIGNvbG9yOiAkYnJvd247XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICB9XFxyXFxuICAuZGVzY3JpcHRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW46IDEwMHB4IDAgNTBweCAwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgbWFyZ2luOiA1MHB4IDAgMDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGVzY3JpcHRpb25MZWZ0IHtcXHJcXG4gICAgICB3aWR0aDogNDAlO1xcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgXFxyXFxuICAgICAgZGl2IHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xcclxcblxcclxcbiAgICAgIC50aXRsZUNvbnRhaW5lciwgLmNvbnRlbnRDb250YWluZXIge1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kZXNjcmlwdGlvblJpZ2h0IHtcXHJcXG4gICAgICB3aWR0aDogNDAlO1xcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgICBcXHJcXG4gICAgICBkaXYge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxyXFxuXFxyXFxuICAgICAgLnRpdGxlQ29udGFpbmVyLCAuY29udGVudENvbnRhaW5lciB7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmRlc2NyaXB0aW9uUmlnaHRMaW5rIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICBjb2xvcjogJGJyb3duO1xcclxcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBkaXYge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbWFnZXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgXFxyXFxuICAgIEBpbmNsdWRlIHNtYWxsIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAyNXZ3O1xcclxcbiAgICAgIGhlaWdodDogMzgwcHg7XFxyXFxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgc21hbGwge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM4MHB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSB0YWJsZXQge1xcclxcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJi5pbWFnZVR3byB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAmLmltYWdlVGhyZWUge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XFxyXFxuXFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwge1xcclxcbiAgICAgICAgICBtYXJnaW46IDUwcHggMCAxMDBweCAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAmI3RhYmxldEltYWdlIHtcXHJcXG4gICAgICAgIC8vbWF4LXdpZHRoOiAzMHZ3O1xcclxcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcXHJcXG5cXHJcXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsIHtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgQGluY2x1ZGUgdGFibGV0IHtcXHJcXG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDIyMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgICBcXHJcXG4gICAgICAmI21vYmlsZUltYWdlIHtcXHJcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxuICAgICAgICBoZWlnaHQ6IDY3MHB4O1xcclxcbiAgICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuXFxyXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbCB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgIC8qbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICBtaW4taGVpZ2h0OiA4MDBweDtcXHJcXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkOyovXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAvKkBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcclxcbiAgICAgICAgfSBcXHJcXG5cXHJcXG4gICAgICAgIEBpbmNsdWRlIHRhYmxldCB7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxODBweDtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gICAgICAgIH0qL1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGgzLCAuc2NyZWVuIHtcXHJcXG4gICAgY29sb3I6ICRkYXJrQmx1O1xcclxcblxcclxcbiAgICBAaW5jbHVkZSB0YWJsZXQge1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgaDMge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zY3JlZW5UaXRsZSB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgICYjc2NyZWVuVGl0bGVNb2JpbGUge1xcclxcbiAgICAgIEBpbmNsdWRlIHNtYWxsIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zY3JlZW4ge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlByb2plY3RJdGVtX2NvbnRhaW5lcl9fMk44MFpcIixcblx0XCJoZXJvXCI6IFwiUHJvamVjdEl0ZW1faGVyb19fMmFSZGdcIixcblx0XCJoZXJvVGl0bGVcIjogXCJQcm9qZWN0SXRlbV9oZXJvVGl0bGVfXzNBNy1YXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJQcm9qZWN0SXRlbV9kZXNjcmlwdGlvbl9fMTdSaE1cIixcblx0XCJkZXNjcmlwdGlvbkxlZnRcIjogXCJQcm9qZWN0SXRlbV9kZXNjcmlwdGlvbkxlZnRfXzJKejhVXCIsXG5cdFwidGl0bGVDb250YWluZXJcIjogXCJQcm9qZWN0SXRlbV90aXRsZUNvbnRhaW5lcl9fMjJxM1FcIixcblx0XCJjb250ZW50Q29udGFpbmVyXCI6IFwiUHJvamVjdEl0ZW1fY29udGVudENvbnRhaW5lcl9fMjRFaFlcIixcblx0XCJkZXNjcmlwdGlvblJpZ2h0XCI6IFwiUHJvamVjdEl0ZW1fZGVzY3JpcHRpb25SaWdodF9fMzg4dnVcIixcblx0XCJkZXNjcmlwdGlvblJpZ2h0TGlua1wiOiBcIlByb2plY3RJdGVtX2Rlc2NyaXB0aW9uUmlnaHRMaW5rX18yZkhTZlwiLFxuXHRcImltYWdlc1wiOiBcIlByb2plY3RJdGVtX2ltYWdlc19fcmZuMUNcIixcblx0XCJpbWFnZVR3b1wiOiBcIlByb2plY3RJdGVtX2ltYWdlVHdvX18xeW5zZ1wiLFxuXHRcImltYWdlVGhyZWVcIjogXCJQcm9qZWN0SXRlbV9pbWFnZVRocmVlX18xTWpGa1wiLFxuXHRcInRhYmxldEltYWdlXCI6IFwiUHJvamVjdEl0ZW1fdGFibGV0SW1hZ2VfX2Y4NnRsXCIsXG5cdFwibW9iaWxlSW1hZ2VcIjogXCJQcm9qZWN0SXRlbV9tb2JpbGVJbWFnZV9fMXVPb2NcIixcblx0XCJzY3JlZW5cIjogXCJQcm9qZWN0SXRlbV9zY3JlZW5fXzM4Q2U3XCIsXG5cdFwic2NyZWVuVGl0bGVcIjogXCJQcm9qZWN0SXRlbV9zY3JlZW5UaXRsZV9fMkpSTGZcIixcblx0XCJzY3JlZW5UaXRsZU1vYmlsZVwiOiBcIlByb2plY3RJdGVtX3NjcmVlblRpdGxlTW9iaWxlX182Ynd6bFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE2LjEzLjEnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgc3VzcGVuc2U6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIEJFRk9SRV9TTEFTSF9SRSA9IC9eKC4qKVtcXFxcXFwvXS87XG5mdW5jdGlvbiBkZXNjcmliZUNvbXBvbmVudEZyYW1lIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICB2YXIgc291cmNlSW5mbyA9ICcnO1xuXG4gIGlmIChzb3VyY2UpIHtcbiAgICB2YXIgcGF0aCA9IHNvdXJjZS5maWxlTmFtZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBwYXRoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG5cbiAgICB7XG4gICAgICAvLyBJbiBERVYsIGluY2x1ZGUgY29kZSBmb3IgYSBjb21tb24gc3BlY2lhbCBjYXNlOlxuICAgICAgLy8gcHJlZmVyIFwiZm9sZGVyL2luZGV4LmpzXCIgaW5zdGVhZCBvZiBqdXN0IFwiaW5kZXguanNcIi5cbiAgICAgIGlmICgvXmluZGV4XFwuLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKEJFRk9SRV9TTEFTSF9SRSk7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIHBhdGhCZWZvcmVTbGFzaCA9IG1hdGNoWzFdO1xuXG4gICAgICAgICAgaWYgKHBhdGhCZWZvcmVTbGFzaCkge1xuICAgICAgICAgICAgdmFyIGZvbGRlck5hbWUgPSBwYXRoQmVmb3JlU2xhc2gucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcbiAgICAgICAgICAgIGZpbGVOYW1lID0gZm9sZGVyTmFtZSArICcvJyArIGZpbGVOYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNvdXJjZUluZm8gPSAnIChhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBzb3VyY2UubGluZU51bWJlciArICcpJztcbiAgfSBlbHNlIGlmIChvd25lck5hbWUpIHtcbiAgICBzb3VyY2VJbmZvID0gJyAoY3JlYXRlZCBieSAnICsgb3duZXJOYW1lICsgJyknO1xuICB9XG5cbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyBzb3VyY2VJbmZvO1xufVxuXG52YXIgUmVzb2x2ZWQgPSAxO1xuZnVuY3Rpb24gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KGxhenlDb21wb25lbnQpIHtcbiAgcmV0dXJuIGxhenlDb21wb25lbnQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQgPyBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gXCJQcm9maWxlclwiO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB0aGVuYWJsZSA9IHR5cGU7XG4gICAgICAgICAgdmFyIHJlc29sdmVkVGhlbmFibGUgPSByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQodGhlbmFibGUpO1xuXG4gICAgICAgICAgaWYgKHJlc29sdmVkVGhlbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHJlc29sdmVkVGhlbmFibGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG5cbntcbiAgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50LnR5cGUpO1xuICAgICAgdmFyIG93bmVyID0gY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX293bmVyO1xuICAgICAgc3RhY2sgKz0gZGVzY3JpYmVDb21wb25lbnRGcmFtZShuYW1lLCBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fc291cmNlLCBvd25lciAmJiBnZXRDb21wb25lbnROYW1lKG93bmVyLnR5cGUpKTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBhY3QoKSB0byB0cmFjayB3aGV0aGVyIHlvdSdyZSBpbnNpZGUgYW4gYWN0KCkgc2NvcGUuXG4gKi9cbnZhciBJc1NvbWVSZW5kZXJlckFjdGluZyA9IHtcbiAgY3VycmVudDogZmFsc2Vcbn07XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gIElzU29tZVJlbmRlcmVyQWN0aW5nOiBJc1NvbWVSZW5kZXJlckFjdGluZyxcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduOiBfYXNzaWduXG59O1xuXG57XG4gIF9hc3NpZ24oUmVhY3RTaGFyZWRJbnRlcm5hbHMsIHtcbiAgICAvLyBUaGVzZSBzaG91bGQgbm90IGJlIGluY2x1ZGVkIGluIHByb2R1Y3Rpb24uXG4gICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTogUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSxcbiAgICAvLyBTaGltIGZvciBSZWFjdCBET00gMTYuMC4wIHdoaWNoIHN0aWxsIGRlc3RydWN0dXJlZCAoYnV0IG5vdCB1c2VkKSB0aGlzLlxuICAgIC8vIFRPRE86IHJlbW92ZSBpbiBSZWFjdCAxNy4wLlxuICAgIFJlYWN0Q29tcG9uZW50VHJlZUhvb2s6IHt9XG4gIH0pO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBoYXNFeGlzdGluZ1N0YWNrID0gYXJncy5sZW5ndGggPiAwICYmIHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnICYmIGFyZ3NbYXJncy5sZW5ndGggLSAxXS5pbmRleE9mKCdcXG4gICAgaW4nKSA9PT0gMDtcblxuICAgIGlmICghaGFzRXhpc3RpbmdTdGFjaykge1xuICAgICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuXG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmICghIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0gKCcnICsga2V5KS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG5cbnZhciBQT09MX1NJWkUgPSAxMDtcbnZhciB0cmF2ZXJzZUNvbnRleHRQb29sID0gW107XG5cbmZ1bmN0aW9uIGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChtYXBSZXN1bHQsIGtleVByZWZpeCwgbWFwRnVuY3Rpb24sIG1hcENvbnRleHQpIHtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IHRyYXZlcnNlQ29udGV4dFBvb2wucG9wKCk7XG4gICAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbWFwRnVuY3Rpb247XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gICAgcmV0dXJuIHRyYXZlcnNlQ29udGV4dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0OiBtYXBSZXN1bHQsXG4gICAgICBrZXlQcmVmaXg6IGtleVByZWZpeCxcbiAgICAgIGZ1bmM6IG1hcEZ1bmN0aW9uLFxuICAgICAgY29udGV4dDogbWFwQ29udGV4dCxcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCkge1xuICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuXG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCA8IFBPT0xfU0laRSkge1xuICAgIHRyYXZlcnNlQ29udGV4dFBvb2wucHVzaCh0cmF2ZXJzZUNvbnRleHQpO1xuICB9XG59XG4vKipcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lU29GYXIgTmFtZSBvZiB0aGUga2V5IHBhdGggc28gZmFyLlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHRvIGludm9rZSB3aXRoIGVhY2ggY2hpbGQgZm91bmQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgVXNlZCB0byBwYXNzIGluZm9ybWF0aW9uIHRocm91Z2hvdXQgdGhlIHRyYXZlcnNhbFxuICogcHJvY2Vzcy5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sIG5hbWVTb0ZhciwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkcmVuLCAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIpO1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgY29udmVydGluZyBjaGlsZHJlbiB0byAnICsgJ2FuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuXG4gICAgICB7XG4gICAgICAgIGFkZGVuZHVtID0gJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nICsgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKCBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS5cIiArIGFkZGVuZHVtICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuLyoqXG4gKiBUcmF2ZXJzZXMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLCBidXRcbiAqIG1pZ2h0IGFsc28gYmUgc3BlY2lmaWVkIHRocm91Z2ggYXR0cmlidXRlczpcbiAqXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sIC4uLilgXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMubGVmdFBhbmVsQ2hpbGRyZW4sIC4uLilgXG4gKlxuICogVGhlIGB0cmF2ZXJzZUNvbnRleHRgIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlXG4gKiBlbnRpcmUgdHJhdmVyc2FsLiBJdCBjYW4gYmUgdXNlZCB0byBzdG9yZSBhY2N1bXVsYXRpb25zIG9yIGFueXRoaW5nIGVsc2UgdGhhdFxuICogdGhlIGNhbGxiYWNrIG1pZ2h0IGZpbmQgcmVsZXZhbnQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBvYmplY3QuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgVG8gaW52b2tlIHVwb24gdHJhdmVyc2luZyBlYWNoIGNoaWxkLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IENvbnRleHQgZm9yIHRyYXZlcnNhbC5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBjb21wb25lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gY29tcG9uZW50IEEgY29tcG9uZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIGNvbXBvbmVudCAhPT0gbnVsbCAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xufVxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5cblxuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG4gIHZhciBtYXBwZWRDaGlsZCA9IGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChtYXBwZWRDaGlsZCwgcmVzdWx0LCBjaGlsZEtleSwgZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cblxuICAgIHJlc3VsdC5wdXNoKG1hcHBlZENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCBhcnJheSwgcHJlZml4LCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBlc2NhcGVkUHJlZml4ID0gJyc7XG5cbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG5cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBrZXksIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmMsIGNvbnRleHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgbnVsbCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09IG51bGwgJiYgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVycm9yKCdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfY3RvcjogY3RvcixcbiAgICAvLyBSZWFjdCB1c2VzIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlcztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIGlmICghKGRpc3BhdGNoZXIgIT09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vZmIubWUvcmVhY3QtaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9mYi5tZS9ydWxlcy1vZi1ob29rcycgOiAnJyk7XG4gICAgfSAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG5cblxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICB7XG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuICB9XG5cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0pO1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChmcmFnbWVudCk7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbntcblxuICB0cnkge1xuICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICB2YXIgdGVzdE1hcCA9IG5ldyBNYXAoW1tmcm96ZW5PYmplY3QsIG51bGxdXSk7XG4gICAgdmFyIHRlc3RTZXQgPSBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTsgLy8gVGhpcyBpcyBuZWNlc3NhcnkgZm9yIFJvbGx1cCB0byBub3QgY29uc2lkZXIgdGhlc2UgdW51c2VkLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwL2lzc3Vlcy8xNzcxXG4gICAgLy8gVE9ETzogd2UgY2FuIHJlbW92ZSB0aGVzZSBpZiBSb2xsdXAgZml4ZXMgdGhlIGJ1Zy5cblxuICAgIHRlc3RNYXAuc2V0KDAsIDApO1xuICAgIHRlc3RTZXQuYWRkKDApO1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG5leHBvcnRzLlN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29udGFjdC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8aDM+PGk+U2F5IGhpITwvaT48L2gzPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0fT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzptZXNzaWUubnBAZGlnaXRhbC12aWxsYWdlLmZyXCI+PGk+bWVzc2llLm5wQGRpZ2l0YWwtdmlsbGFnZS5mcjwvaT48L2E+XHJcbiAgICAgICAgICAgIDxwIGlkPXtzdHlsZXMubnVtfT48aT4rMzMgNyA2OCAyNSAwOCAwMTwvaT48L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsfT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL01lc3NpZTg4XCJcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2dpdGh1Yi5zdmdcIiBhbHQ9XCJhcnJvd1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Z2l0aHViPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9wYXRoZS1tZXNzaWUtbnVuZ2ktcGFtYnUvXCJcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xpbmtlZGluLnN2Z1wiIGFsdD1cImFycm93XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5saW5rZWRpbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3QiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vQ29udGFjdC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9Db250YWN0Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0NvbnRhY3QubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4vQ29udGFjdC5jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9MYXlvdXQubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBjb2xvciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBpZD17Y29sb3IgJiYgc3R5bGVzLmNvbG9yfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJJbm5lcn0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0xheW91dC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9MYXlvdXQubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vTGF5b3V0Lm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0LmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwL2Rpc3QvZ3NhcFwiO1xyXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1Byb2plY3RJdGVtLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xyXG5cclxuY29uc3QgUHJvamVjdEl0ZW0gPSAoe1xyXG4gIGhlcm9JbWFnZSxcclxuICB0aXRsZSxcclxuICByb2xlLFxyXG4gIGNoYWxsZW5nZXMsXHJcbiAgdGVjaG5vcyxcclxuICBsaW5rVG9TZWVMaXZlLFxyXG4gIGltYWdlT25lLFxyXG4gIGltYWdlVHdvLFxyXG4gIGltYWdlVGhyZWUsXHJcbiAgdGFibGV0SW1hZ2VPbmUsXHJcbiAgdGFibGV0SW1hZ2VUd28sXHJcbiAgdGFibGV0SW1hZ2VUaHJlZSxcclxuICBtb2JpbGVJbWFnZU9uZSxcclxuICBtb2JpbGVJbWFnZVR3byxcclxuICBtb2JpbGVJbWFnZVRocmVlXHJcbn0pID0+IHtcclxuXHJcbiAgbGV0IGhlcm9UaXRsZSA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgaW1hZ2UgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGRlc2NyaXB0aW9uUm9sZVRpdGxlID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBkZXNjcmlwdGlvblRlY2hvc1RpdGxlID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBkZXNjcmlwdGlvbkNoYWxsZW5nZVRpdGxlID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBkZXNjcmlwdGlvblJvbGVDb250ZW50ID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBkZXNjcmlwdGlvblRlY2hvc0NvbnRlbnQgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGRlc2NyaXB0aW9uQ2hhbGxlbmdlQ29udGVudCA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgZGVzY3JpcHRpb25MaW5rID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBkZXNjcmlwdGlvbkltYWdlRGVza3RvcDEgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGRlc2NyaXB0aW9uSW1hZ2VEZXNrdG9wMiA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgZGVzY3JpcHRpb25JbWFnZURlc2t0b3AzID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBkZXNjcmlwdGlvbkltYWdlVGFibGV0MSA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgZGVzY3JpcHRpb25JbWFnZVRhYmxldDIgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGRlc2NyaXB0aW9uSW1hZ2VUYWJsZXQzID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBkZXNjcmlwdGlvbkltYWdlTW9iaWxlMSA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgZGVzY3JpcHRpb25JbWFnZU1vYmlsZTIgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGRlc2NyaXB0aW9uSW1hZ2VNb2JpbGUzID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBkZXNrdG9wVGl0bGUgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IHRhYmxldFRpdGxlID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBtb2JpbGVUaXRsZSA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdzYXAuZnJvbShoZXJvVGl0bGUsIHtcclxuICAgICAgeTogMjAwLFxyXG4gICAgICBlYXNlOiBcImJhY2tcIixcclxuICAgICAgZGVsYXk6IDAuNSxcclxuICAgICAgZHVyYXRpb246IDEuMVxyXG4gICAgfSk7XHJcbiAgICBnc2FwLmZyb20oaW1hZ2UsIHtcclxuICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICB9KTtcclxuICAgIGdzYXAuZnJvbShkZXNjcmlwdGlvblJvbGVUaXRsZSwge1xyXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgdHJpZ2dlcjogZGVzY3JpcHRpb25Sb2xlVGl0bGUsXHJcbiAgICAgICAgdG9nZ2xlQWN0aW9uczogXCJwbGF5XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHk6IDIwMCxcclxuICAgICAgZHVyYXRpb246IC41XHJcbiAgICB9KTtcclxuICAgIGdzYXAuZnJvbShkZXNjcmlwdGlvblRlY2hvc1RpdGxlLCB7XHJcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcclxuICAgICAgICB0cmlnZ2VyOiBkZXNjcmlwdGlvblRlY2hvc1RpdGxlLFxyXG4gICAgICAgIHRvZ2dsZUFjdGlvbnM6IFwicGxheVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB5OiAyMDAsXHJcbiAgICAgIGR1cmF0aW9uOiAuNVxyXG4gICAgfSk7XHJcbiAgICBnc2FwLmZyb20oZGVzY3JpcHRpb25DaGFsbGVuZ2VUaXRsZSwge1xyXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgdHJpZ2dlcjogZGVzY3JpcHRpb25DaGFsbGVuZ2VUaXRsZSxcclxuICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXlcIixcclxuICAgICAgfSxcclxuICAgICAgeTogMjAwLFxyXG4gICAgICBkdXJhdGlvbjogLjVcclxuICAgIH0pO1xyXG4gICAgZ3NhcC5mcm9tKGRlc2NyaXB0aW9uUm9sZUNvbnRlbnQsIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IGRlc2NyaXB0aW9uUm9sZUNvbnRlbnQsXHJcbiAgICAgICAgdG9nZ2xlQWN0aW9uczogXCJwbGF5XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHk6IDIwMCxcclxuICAgICAgZHVyYXRpb246IC41LFxyXG4gICAgICBkZWxheTogLjJcclxuICAgIH0pO1xyXG4gICAgZ3NhcC5mcm9tKGRlc2NyaXB0aW9uVGVjaG9zQ29udGVudCwge1xyXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgdHJpZ2dlcjogZGVzY3JpcHRpb25UZWNob3NDb250ZW50LFxyXG4gICAgICAgIHRvZ2dsZUFjdGlvbnM6IFwicGxheVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB5OiAyMDAsXHJcbiAgICAgIGR1cmF0aW9uOiAuNSxcclxuICAgICAgZGVsYXk6IC4yXHJcbiAgICB9KTtcclxuICAgIGdzYXAuZnJvbShkZXNjcmlwdGlvbkNoYWxsZW5nZUNvbnRlbnQsIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IGRlc2NyaXB0aW9uQ2hhbGxlbmdlQ29udGVudCxcclxuICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXlcIixcclxuICAgICAgfSxcclxuICAgICAgeTogMjAwLFxyXG4gICAgICBkdXJhdGlvbjogLjUsXHJcbiAgICAgIGRlbGF5OiAuMlxyXG4gICAgfSk7XHJcbiAgICBnc2FwLmZyb20oZGVzY3JpcHRpb25MaW5rLCB7XHJcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcclxuICAgICAgICB0cmlnZ2VyOiBkZXNjcmlwdGlvbkxpbmssXHJcbiAgICAgICAgdG9nZ2xlQWN0aW9uczogXCJwbGF5XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHg6IDIwMCxcclxuICAgICAgZHVyYXRpb246IC41LFxyXG4gICAgICBkZWxheTogLjJcclxuICAgIH0pO1xyXG4gICAgZ3NhcC5mcm9tKGRlc2t0b3BUaXRsZSwge1xyXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgdHJpZ2dlcjogZGVza3RvcFRpdGxlLFxyXG4gICAgICAgIHRvZ2dsZUFjdGlvbnM6IFwicmVzdGFydCBwbGF5IHJldmVyc2VcIixcclxuICAgICAgICBlbmQ6IFwidG9wIDk0JVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB5OiAyMDAsXHJcbiAgICAgIGR1cmF0aW9uOiAuNVxyXG4gICAgfSk7XHJcbiAgICBnc2FwLmZyb20odGFibGV0VGl0bGUsIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IHRhYmxldFRpdGxlLFxyXG4gICAgICAgIHRvZ2dsZUFjdGlvbnM6IFwicmVzdGFydCBwbGF5IHJldmVyc2VcIixcclxuICAgICAgICBlbmQ6IFwidG9wIDk0JVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB5OiAyMDAsXHJcbiAgICAgIGR1cmF0aW9uOiAuNVxyXG4gICAgfSk7XHJcbiAgICBnc2FwLmZyb20obW9iaWxlVGl0bGUsIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IG1vYmlsZVRpdGxlLFxyXG4gICAgICAgIHRvZ2dsZUFjdGlvbnM6IFwicmVzdGFydCBwbGF5IHJldmVyc2VcIixcclxuICAgICAgICBlbmQ6IFwidG9wIDk0JVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB5OiAyMDAsXHJcbiAgICAgIGR1cmF0aW9uOiAuNVxyXG4gICAgfSk7XHJcbiAgICBnc2FwLmZyb20oZGVzY3JpcHRpb25JbWFnZURlc2t0b3AxLCB7XHJcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcclxuICAgICAgICB0cmlnZ2VyOiBkZXNjcmlwdGlvbkltYWdlRGVza3RvcDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIHk6IDIwMCxcclxuICAgICAgZHVyYXRpb246IC44LFxyXG4gICAgICBkZWxheTogLjIsXHJcbiAgICB9KTtcclxuICAgIGdzYXAuZnJvbShkZXNjcmlwdGlvbkltYWdlRGVza3RvcDIsIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IGRlc2NyaXB0aW9uSW1hZ2VEZXNrdG9wMixcclxuICAgICAgfSxcclxuICAgICAgeTogMjAwLFxyXG4gICAgICBkdXJhdGlvbjogLjgsXHJcbiAgICAgIGRlbGF5OiAuMyxcclxuICAgIH0pO1xyXG4gICAgZ3NhcC5mcm9tKGRlc2NyaXB0aW9uSW1hZ2VEZXNrdG9wMywge1xyXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgdHJpZ2dlcjogZGVzY3JpcHRpb25JbWFnZURlc2t0b3AzLFxyXG4gICAgICB9LFxyXG4gICAgICB5OiAyMDAsXHJcbiAgICAgIGR1cmF0aW9uOiAuOCxcclxuICAgICAgZGVsYXk6IC40LFxyXG4gICAgfSk7XHJcbiAgICBnc2FwLmZyb20oZGVzY3JpcHRpb25JbWFnZVRhYmxldDEsIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IGRlc2NyaXB0aW9uSW1hZ2VUYWJsZXQxLFxyXG4gICAgICB9LFxyXG4gICAgICB5OiAyMDAsXHJcbiAgICAgIGR1cmF0aW9uOiAuOCxcclxuICAgICAgZGVsYXk6IC4yLFxyXG4gICAgfSk7XHJcbiAgICBnc2FwLmZyb20oZGVzY3JpcHRpb25JbWFnZVRhYmxldDIsIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IGRlc2NyaXB0aW9uSW1hZ2VUYWJsZXQyLFxyXG4gICAgICB9LFxyXG4gICAgICB5OiAyMDAsXHJcbiAgICAgIGR1cmF0aW9uOiAuOCxcclxuICAgICAgZGVsYXk6IC4zLFxyXG4gICAgfSk7XHJcbiAgICBnc2FwLmZyb20oZGVzY3JpcHRpb25JbWFnZVRhYmxldDMsIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IGRlc2NyaXB0aW9uSW1hZ2VUYWJsZXQzLFxyXG4gICAgICB9LFxyXG4gICAgICB5OiAyMDAsXHJcbiAgICAgIGR1cmF0aW9uOiAuOCxcclxuICAgICAgZGVsYXk6IC40LFxyXG4gICAgfSk7XHJcbiAgICBnc2FwLmZyb20oZGVzY3JpcHRpb25JbWFnZU1vYmlsZTEsIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IGRlc2NyaXB0aW9uSW1hZ2VNb2JpbGUxLFxyXG4gICAgICB9LFxyXG4gICAgICB5OiAyMDAsXHJcbiAgICAgIGR1cmF0aW9uOiAuOCxcclxuICAgICAgZGVsYXk6IC4yLFxyXG4gICAgfSk7XHJcbiAgICBnc2FwLmZyb20oZGVzY3JpcHRpb25JbWFnZU1vYmlsZTIsIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IGRlc2NyaXB0aW9uSW1hZ2VNb2JpbGUyLFxyXG4gICAgICB9LFxyXG4gICAgICB5OiAyMDAsXHJcbiAgICAgIGR1cmF0aW9uOiAuOCxcclxuICAgICAgZGVsYXk6IC4zLFxyXG4gICAgfSk7XHJcbiAgICBnc2FwLmZyb20oZGVzY3JpcHRpb25JbWFnZU1vYmlsZTMsIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IGRlc2NyaXB0aW9uSW1hZ2VNb2JpbGUzLFxyXG4gICAgICB9LFxyXG4gICAgICB5OiAyMDAsXHJcbiAgICAgIGR1cmF0aW9uOiAuOCxcclxuICAgICAgZGVsYXk6IC40LFxyXG4gICAgfSk7XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XHJcbiAgICAgICAgPGltZyBcclxuICAgICAgICBzcmM9e2hlcm9JbWFnZX0gXHJcbiAgICAgICAgYWx0PVwiUHJvamVjdCBTY3JlZW5cIiBcclxuICAgICAgICByZWY9eyhlbCkgPT4gKGltYWdlID0gZWwpfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1RpdGxlfT5cclxuICAgICAgICAgIDxoMSByZWY9eyhlbCkgPT4gKGhlcm9UaXRsZSA9IGVsKX0+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9uTGVmdH0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8aDMgcmVmPXsoZWwpID0+IChkZXNjcmlwdGlvblJvbGVUaXRsZSA9IGVsKX0+Um9sZSA6PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxwIHJlZj17KGVsKSA9PiAoZGVzY3JpcHRpb25Sb2xlQ29udGVudCA9IGVsKX0+e3JvbGV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGgzIHJlZj17KGVsKSA9PiAoZGVzY3JpcHRpb25DaGFsbGVuZ2VUaXRsZSA9IGVsKX0+Q2hhbGxlbmdlczwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxwIHJlZj17KGVsKSA9PiAoZGVzY3JpcHRpb25DaGFsbGVuZ2VDb250ZW50ID0gZWwpfT57Y2hhbGxlbmdlc308L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvblJpZ2h0fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxoMyByZWY9eyhlbCkgPT4gKGRlc2NyaXB0aW9uVGVjaG9zVGl0bGUgPSBlbCl9PlRlY2hub3MgOjwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxwIHJlZj17KGVsKSA9PiAoZGVzY3JpcHRpb25UZWNob3NDb250ZW50ID0gZWwpfT57dGVjaG5vc308L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9uUmlnaHRMaW5rfT5cclxuICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgIGhyZWY9e2xpbmtUb1NlZUxpdmV9IFxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiBcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgIHJlZj17KGVsKSA9PiAoZGVzY3JpcHRpb25MaW5rPSBlbCl9XHJcbiAgICAgICAgICAgID5TZWUgbGl2ZTwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2NyZWVuVGl0bGV9PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnNjcmVlbn0gcmVmPXsoZWwpID0+IChkZXNrdG9wVGl0bGU9IGVsKX0+REVTS1RPUDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VzfT5cclxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZU9uZX0gYWx0PVwiXCIgcmVmPXsoZWwpID0+IChkZXNjcmlwdGlvbkltYWdlRGVza3RvcDE9IGVsKX0vPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlVHdvfSBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZVR3b30gIHJlZj17KGVsKSA9PiAoZGVzY3JpcHRpb25JbWFnZURlc2t0b3AyPSBlbCl9Lz5cclxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVRocmVlfSBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZVRocmVlfSAgcmVmPXsoZWwpID0+IChkZXNjcmlwdGlvbkltYWdlRGVza3RvcDMgPSBlbCl9Lz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNjcmVlblRpdGxlfT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zY3JlZW59IHJlZj17KGVsKSA9PiAodGFibGV0VGl0bGU9IGVsKX0+VEFCTEVUPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZXN9PlxyXG4gICAgICAgICAgPGltZyBzcmM9e3RhYmxldEltYWdlT25lfSBhbHQ9XCJcIiBpZD17c3R5bGVzLnRhYmxldEltYWdlfSByZWY9eyhlbCkgPT4gKGRlc2NyaXB0aW9uSW1hZ2VUYWJsZXQxPSBlbCl9IC8+XHJcbiAgICAgICAgICA8aW1nIHNyYz17dGFibGV0SW1hZ2VUd299IGFsdD1cIlwiIGlkPXtzdHlsZXMudGFibGV0SW1hZ2V9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlVHdvfSByZWY9eyhlbCkgPT4gKGRlc2NyaXB0aW9uSW1hZ2VUYWJsZXQyID0gZWwpfSAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9e3RhYmxldEltYWdlVGhyZWV9IGFsdD1cIlwiIGlkPXtzdHlsZXMudGFibGV0SW1hZ2V9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlVGhyZWV9IHJlZj17KGVsKSA9PiAoZGVzY3JpcHRpb25JbWFnZVRhYmxldDMgPSBlbCl9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zY3JlZW5UaXRsZX0gaWQ9e3N0eWxlcy5zY3JlZW5UaXRsZU1vYmlsZX0+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc2NyZWVufSByZWY9eyhlbCkgPT4gKG1vYmlsZVRpdGxlPSBlbCl9Pk1PQklMRTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VzfT5cclxuICAgICAgICAgIDxpbWcgc3JjPXttb2JpbGVJbWFnZU9uZX0gYWx0PVwiXCIgaWQ9e3N0eWxlcy5tb2JpbGVJbWFnZX0gcmVmPXsoZWwpID0+IChkZXNjcmlwdGlvbkltYWdlTW9iaWxlMT0gZWwpfSAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9e21vYmlsZUltYWdlVHdvfSBhbHQ9XCJcIiBpZD17c3R5bGVzLm1vYmlsZUltYWdlfSBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZVR3b30gcmVmPXsoZWwpID0+IChkZXNjcmlwdGlvbkltYWdlTW9iaWxlMj0gZWwpfSAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9e21vYmlsZUltYWdlVGhyZWV9IGFsdD1cIlwiIGlkPXtzdHlsZXMubW9iaWxlSW1hZ2V9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlVGhyZWV9IHJlZj17KGVsKSA9PiAoZGVzY3JpcHRpb25JbWFnZU1vYmlsZTMgPSBlbCl9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlByZXZpb3VzIFByb2plY3QgLyBuZXh0IFByb2plY3Q8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RJdGVtO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vUHJvamVjdEl0ZW0ubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vUHJvamVjdEl0ZW0ubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vUHJvamVjdEl0ZW0ubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFByb2plY3RJdGVtIGZyb20gXCIuL1Byb2plY3RJdGVtLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdEl0ZW07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBQcm9qZWN0SXRlbSBmcm9tIFwiLi9Qcm9qZWN0SXRlbVwiO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250YWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IHRlbGFxdWFMYW5kaW5nUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKCAgIFxyXG4gICAgPExheW91dCBjb2xvcj5cclxuICAgICAgPFByb2plY3RJdGVtXHJcbiAgICAgICAgaGVyb0ltYWdlPVwiL2ltYWdlcy90ZWxhcXVhLnBuZ1wiXHJcbiAgICAgICAgdGl0bGU9XCJUZWxhcXVhXCJcclxuICAgICAgICByb2xlPVwiV0VCIERFVkVMT1BNRU5UXCJcclxuICAgICAgICBjaGFsbGVuZ2VzPVwiTGVhcm4gTmV4dGpzLCBpMThuLCBUeXBlU2NyaXB0LCB0aGUgU2NydW0gd29ya2Zsb3cgYW5kIHRoZW4sIG1pZ3JhdGluZyB0aGUgcHJvamVjdCB0byBnYXRzYnkuIEFsbCB0aGlzIGluIGxlc3MgdGhhbiAzIG1vbnRoc1wiXHJcbiAgICAgICAgdGVjaG5vcz1cIk5leHRKcywgR2F0c2J5SnMsIFJlYWN0SnMsIFR5cGVTY3JpcHQsIFN0eWxlZC1Db21wb25lbnRzLCBpMThuXHJcbiAgICAgICAgKGZvciB0cmFuc2xhdGlvbiApXCJcclxuICAgICAgICBsaW5rVG9TZWVMaXZlPVwiaHR0cHM6Ly93d3cudGVsYXF1YS5jb20vXCJcclxuICAgICAgICBpbWFnZU9uZT1cIi9pbWFnZXMvdGVsYXF1YS5wbmdcIlxyXG4gICAgICAgIGltYWdlVHdvPVwiL2ltYWdlcy9hZ3JvbW90ZS5wbmdcIlxyXG4gICAgICAgIGltYWdlVGhyZWU9XCIvaW1hZ2VzL2hvd0l0V29ya3MucG5nXCJcclxuICAgICAgICB0YWJsZXRJbWFnZU9uZT1cIi9pbWFnZXMvYWdyb21vdGVUYWJsZXQucG5nXCJcclxuICAgICAgICB0YWJsZXRJbWFnZVR3bz1cIi9pbWFnZXMvdGFibGV0UHJlc2VuY2UucG5nXCJcclxuICAgICAgICB0YWJsZXRJbWFnZVRocmVlPVwiL2ltYWdlcy90YWJsZXRTb2x1dGlvbi5wbmdcIlxyXG4gICAgICAgIG1vYmlsZUltYWdlT25lPVwiL2ltYWdlcy9tb2JpbGVBcHAucG5nXCJcclxuICAgICAgICBtb2JpbGVJbWFnZVR3bz1cIi9pbWFnZXMvbW9iaWxlSG93SXRXb3Jrcy5wbmdcIlxyXG4gICAgICAgIG1vYmlsZUltYWdlVGhyZWU9XCIvaW1hZ2VzL21vYmlsZUFncm8ucG5nXCIgXHJcbiAgICAgICAgcHJldmlvdXNMaW5rPVwiL1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxDb250YWN0IC8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGVsYXF1YUxhbmRpbmdQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9