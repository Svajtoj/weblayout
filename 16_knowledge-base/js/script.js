document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.select-section__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    position: 'bottom',
    itemSelectText: ' ',
  });

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

  new SimpleBar(document.getElementById('scroll'), {
    scrollbarMaxSize: 73,
    autoHide: false
  });
});
