ymaps.ready(init);

function init() {
  const center = [56.30447946643729, 43.9406767936969];
  // Создание карты.
  if (document.querySelector('#map')) {
    var myMap = new ymaps.Map("map", {
        center: center,
        zoom: 16,
        controls: ['zoomControl'],
      }),
      // Создание макета балуна на основе Twitter Bootstrap.
      MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="popover top">' +
        '<a class="close" href="">&times;</a>' +
        '<div class="arrow"></div>' +
        '<div class="popover-inner content-baloon">' +
        '$[[options.contentLayout observeSize minWidth=235 maxWidth=300 maxHeight=350]]' +
        '</div>' +
        '</div>', {
          /**
           * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
           * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
           * @function
           * @name build
           */
          build: function () {
            this.constructor.superclass.build.call(this);

            this._$element = $('.popover', this.getParentElement());

            this.applyElementOffset();

            this._$element.find('.close')
              .on('click', $.proxy(this.onCloseClick, this));
          },

          /**
           * Удаляет содержимое макета из DOM.
           * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
           * @function
           * @name clear
           */
          clear: function () {
            this._$element.find('.close')
              .off('click');

            this.constructor.superclass.clear.call(this);
          },

          /**
           * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
           * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
           * @function
           * @name onSublayoutSizeChange
           */
          onSublayoutSizeChange: function () {
            MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

            if (!this._isElement(this._$element)) {
              return;
            }

            this.applyElementOffset();

            this.events.fire('shapechange');
          },

          /**
           * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
           * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
           * @function
           * @name applyElementOffset
           */
          applyElementOffset: function () {
            this._$element.css({
              left: -(this._$element[0].offsetWidth / 2),
              top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
            });
          },

          /**
           * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
           * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
           * @function
           * @name onCloseClick
           */
          onCloseClick: function (e) {
            e.preventDefault();

            this.events.fire('userclose');
          },

          /**
           * Используется для автопозиционирования (balloonAutoPan).
           * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
           * @function
           * @name getClientBounds
           * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
           */
          getShape: function () {
            if (!this._isElement(this._$element)) {
              return MyBalloonLayout.superclass.getShape.call(this);
            }

            var position = this._$element.position();

            return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
              [position.left, position.top], [
                position.left + this._$element[0].offsetWidth,
                position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
              ]
            ]));
          },

          /**
           * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
           * @function
           * @private
           * @name _isElement
           * @param {jQuery} [element] Элемент.
           * @returns {Boolean} Флаг наличия.
           */
          _isElement: function (element) {
            return element && element[0] && element.find('.arrow')[0];
          }
        }),

// Создание вложенного макета содержимого балуна.
      MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
        '<h3 class="popover-title heading-reset">$[properties.balloonHeader]</h3>' +
        '<div class="popover-content">$[properties.balloonContent]</div>' +
        '<div class="popover-city">$[properties.balloonCity]</div>'
      ),

// Создание метки с пользовательским макетом балуна.
      myPlacemark = window.myPlacemark = new ymaps.Placemark([56.30478548277234, 43.93734078894453], {
        balloonHeader: 'Мы здесь!',
        balloonContent: 'ул. Октябрьской революции, д.43,офис 407',
        balloonCity: 'г. Нижний Новгород',
      }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/marker.png',
        iconImageSize: [30, 50],
        iconImageOffset: [-10, -20],
        balloonShadow: false,
        balloonLayout: MyBalloonLayout,
        balloonContentLayout: MyBalloonContentLayout,
        balloonPanelMaxMapArea: 0
      });

    myMap.geoObjects.add(myPlacemark);
  }
}
