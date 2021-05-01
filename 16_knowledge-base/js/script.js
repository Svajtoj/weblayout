document.addEventListener('DOMContentLoaded', () => {
  // Селект

  const element = document.querySelector('.select-section__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    position: 'bottom',
    itemSelectText: ' ',
  });

  // Яндекс карта

  ymaps.ready(init);

  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      center: [48.872185073737896, 2.3542149999999555],
      zoom: 15
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: `Париж, ул. дю Фобур Сен Дени 54`,
      balloonContent: 'Франция, Иль-де-Франс, Париж, X округ Парижа, улица дю Фобур Сен Дени 54'
    }, {

      iconLayout: 'default#image',
      iconImageHref: 'img/Subtract.svg',
      iconImageSize: [48, 48],
    }),

      myMap.geoObjects.add(myPlacemark);
  }

  // Scroll

  new SimpleBar(document.getElementById('scroll'), {
    scrollbarMaxSize: 73,
    autoHide: false
  });

  // Маска для поля формы (телефон)

  const selector = document.querySelector('input[type = "tel"]');
  const im = Inputmask("+7 (999) 999-99-99");

  im.mask(selector);

  // Валидация формы

  new JustValidate('.form-order', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 10
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
      email: {
        required: true,
        email: true
      },
    },
    messages: {
      name: 'Как вас зовут?',
      tel: 'Укажите ваш телефон',
      email: 'Укажите ваш e-mail',
    },
    colorWrong: '#ff5c00',
  });
});
