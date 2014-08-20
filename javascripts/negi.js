$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  var hero = $('#hero').height();
  if(scroll > hero)
    $('.negiSpace').remove();
  else
    if($('.negiSpace').length == 0)
      negi(window, document, undefined);
});
negi(window, document, undefined);
function negi(window, document, undefined) {
  var render = {};
  (function (render) {
      var requestAnimationFrame = (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(callback){return window.setTimeout(function() { callback(Date.now()); }, 1000/16);}).bind(window);
      var cancelAnimationFrame = (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitcancelAnimationFrame || window.mscancelAnimationFrame || window.clearTimeout).bind(window);
      var _renderList = {};
      var _renderCount = 0;
      var _pageStartTime = -1;

      function _renderThreadFactory(id, renderer) {
          function sRenderThread(tick) {
              if (_renderList[id].playing) {
                  if (_renderList[id].start == -1) _renderList[id].start = tick;
                  renderer(tick - _renderList[id].start + _renderList[id].shift);
                  if (!_renderList[id]) return;
                  _renderList[id].frameId = requestAnimationFrame(sRenderThread);
                  _renderList[id].lastTime = tick;
              }
          }
          return sRenderThread;
      }
      render.setRender = function setRender(renderThread, shift) {
          var renderNow = _renderCount, renderThread;
          shift = shift || 0;
          _renderCount++;
          _renderList[renderNow] = {
              frameId: 0,
              playing: true,
              thread: renderThread,
              lastTime: 0,
              shift: shift,
              start: -1
          };
          renderThread = _renderThreadFactory(renderNow, renderThread);
          requestAnimationFrame(renderThread);
          return renderNow;
      };
      render.clearRender = function clearRender(id) {
          if (_renderList[id] !== undefined) {
              if (_renderList[id].playing) {
                  cancelAnimationFrame(_renderList[id].frameId);
              }
              _renderList[id] = undefined;
              return true;
          } else {
              return false;
          }
      };
      render._init = function _init() {
          function getFirstRender() {
              function firstThread(tick) {
                  _pageStartTime = tick;
              }
              return firstThread;
          }
          var firstThread = getFirstRender();
          requestAnimationFrame(firstThread);
      };
      render._init();
  }(render));

  var __prefix = (function () {
          var getStyle = window.getComputedStyle, style, match, prefix = '';
          if (getStyle) {
              style = getStyle(document.documentElement, '');
              style = Array.prototype.join.call(style, '');
              match = style.match(/-(?:O|Moz|webkit|ms)-/i);
              if (match) {
                  prefix = match[0];
              }
          }
          return prefix;
      })();

  var s = document.getElementsByTagName('style')[0],
      is = document.createElement('style');
  is.innerHTML = '.negi{position:absolute;top:50%;left:50%;z-index:99999;display:block;}.negiSpace{position:absolute;top:0;left:0;bottom:0;right:0;'+__prefix+'transform-origin:50% 50%;transform-origin:50% 50%;'+__prefix+'transform-style:preserve-3d;transform-style:preserve-3d;'+__prefix+'perspective:1000px;perspective:1000px;'+__prefix+'perspective-origin:50% 50%;;perspective-origin:50% 50%;'+__prefix+'pointer-events:none;pointer-events:none;}';
  if (s === undefined) {
      s = document.getElementsByTagName('head')[0];
      //s = document.getElementById('hero')[0];
      s.appendChild(is);
  } else {
      if (s.parentNode.lastChild == s) {
          s.parentNode.appendChild(is);
      } else {
          s.parentNode.insertBefore(is, s.nextSibling);
      }
  }
  var negiSpace, _negiSpace;
  negiSpace = document.createElement('div');
  negiSpace.setAttribute('class', 'negiSpace');
  if (document.getElementsByClassName('negiSpace')) {
      _negiSpace = document.getElementsByClassName('negiSpace')[0];
      //document.getElementsByTagName('body')[0].insertBefore(negiSpace, document.getElementsByTagName('body')[0].nextSilbing);
      document.getElementById('hero').insertBefore(negiSpace, document.getElementById('hero').nextSilbing);
  } else {
      //document.getElementsByTagName('body')[0].appendChild(negiSpace);
      document.getElementById('hero').appendChild(negiSpace);
  }

  var __negisrc = [
          'images/icons/icon1.svg',
          'images/icons/icon2.svg',
          'images/icons/icon3.svg',
          'images/icons/icon4.svg',
          'images/icons/icon5.svg',
          'images/icons/icon6.svg',
          'images/icons/icon7.svg',
          'images/icons/icon-id1.svg',
          'images/icons/icon-id2.svg',
          'images/icons/icon-id3.svg',
      ];

  var Negi = (function () {
      function Negi() {
          this.requestAnimationFrame = (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || setTimeout).bind(window);
          this.cancelAnimationFrame = (window.cancelAnimationFrame || window.mozcancelAnimationFrame || window.webkitcancelAnimationFrame || window.mscancelAnimationFrame || clearTimeout).bind(window);
          this.__instances = [];
      }

      Negi.prototype.init = function() {
          this.__instances = [];

          var instance, transform;

          // detect mobile
          function isMobile(){
            return (
              (navigator.userAgent.match(/Android/i)) ||
              (navigator.userAgent.match(/webOS/i)) ||
              (navigator.userAgent.match(/iPhone/i)) ||
              (navigator.userAgent.match(/iPod/i)) ||
              (navigator.userAgent.match(/iPad/i)) ||
              (navigator.userAgent.match(/BlackBerry/))
            );
          }
          if(!isMobile())
            var customZpos = 100;
          else
            var customZpos = 300;


          for ( var zpos= -3000; zpos < 1000; zpos+=customZpos ) {
              //更改上方第三個數值，可改變發散濃度，預設值：20
              instance = document.createElement('img');
              instance.setAttribute('class', 'negi');
              instance.setAttribute('src', __negisrc[Math.ceil(Math.random()*10) - 1]);
              //設定圖片數量

              transform = {};
              transform[__prefix+'transform'] = 'translate3d('+(Math.random() * 1000 - 500)+'px, '+(Math.random() * 1000 - 500)+'px, '+zpos+'px) rotateZ(1deg)';
              transform['transform'] = transform[__prefix+'transform'];
              transform['z-index'] = (89999 + zpos).toString();

              this.setInlineCSS(instance, transform);

              negiSpace.insertBefore(instance, negiSpace.nextSibling);
              this.__instances.push(instance);
          }
      };

      Negi.prototype.start = function() {
          this.init();
          var __oldTime = 0
          var __loop = (function(tick) {
              //alert(tick);
              var __between = tick - __oldTime;
              __oldTime = tick
              var instance, style, transform, translate, _translate, z = 0, rotateZ, r = 1;
              for(var i=0; i<this.__instances.length; i++) {
                  instance = this.__instances[i];
                  style = this.getInlineCSS(instance);
                  transform = style[__prefix+'transform'] || style['transform'];
                  translate = transform.match(/translate3d\(([0-9\-.]+)px, ([0-9\-.]+)px, ([0-9\-.]+)px\)/g)[0];
                  _translate = translate.replace('translate3d(', '').replace(/px/g, '').replace(')', '').split(', ');
                  rotateZ = transform.match(/rotateZ\([0-9]+deg\)/g)[0];
                  z = parseInt(_translate[2]) + Math.floor(__between * 2);
                  r = parseInt(rotateZ.replace('rotateZ(', '').replace(')', '')) + Math.floor(__between / 2);

                  if (z>1000) {
                      z = (z + 2000) % 3000 - 2000;
                      _translate[0] = Math.random() * 1000 - 500;
                      _translate[1] = Math.random() * 1000 - 500;
                  }

                  _translate[2] = z + 'px';

                  transform = transform.replace(translate, 'translate3d('+_translate.join('px, ')+')');
                  //transform = transform.replace(rotateZ, 'rotateZ('+r+'deg)');
                  style = {};
                  style[__prefix+'transform'] = transform;
                  style['transform'] = style[__prefix+'transform'];
                  style['z-index'] = (89999 + z).toString();
                  style['opacity'] = z < -1000 ? (z + 2000)/1000 : z > 600 ? (2600 - z)/2000 : 1;
                  this.setInlineCSS(instance, style);
                  this.__instances[i] = instance;
              }
          }).bind(this);

          render.setRender(__loop);
      };

      Negi.prototype.getInlineCSS = function (element) {
          if (element.__style) {
              return element.__style;
          }
          var style = element.getAttribute('style') || '';
          var regexp = /([^:\s]+)\s*:\s*([^;]+)/g;
          var data = {};
          style.replace(regexp, function (origin, key, value) {
              data[key] = value.trim();
          });

          element.__style = data;

          return data;
      };
      Negi.prototype.setInlineCSS = function(element, style) {
          var oldStyle = this.getInlineCSS(element),
              newStyle = [], i;

          for (i in style) {
              if (style.hasOwnProperty(i)) {
                  oldStyle[i] = style[i];
              }
          }
          for (i in oldStyle) {
              if (oldStyle.hasOwnProperty(i)) {
                  newStyle.push(i + ': ' + oldStyle[i]);
              }
          }

          element.setAttribute('style', newStyle.join('; '));
      };

      return Negi;
  })();

  (new Negi()).start();
};
