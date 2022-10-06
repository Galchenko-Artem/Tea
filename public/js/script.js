ymaps.ready(init);

function init(){
    // Создание карты.
    // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/map-docpage/
    let myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчнию: «широта, долгота».
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom:2,
        // Элементы управления
        // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
        controls: [
            'typeSelector', // Переключатель слоев карты
            'fullscreenControl', // Полноэкранный режим
        ]
    });
    // Собственное изображение для метки с контентом
    let placemark4 = new ymaps.Placemark([55.79741725173239, 37.775391805417016], {
        hintContent: '>>>>',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '//codd-wd.ru/wp-content/examples/pic/web-app-development-q32.png',
        // Размеры метки.
        iconImageSize: [10, 10],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-16, -16],
    });
    // После того как метка была создана, добавляем её на карту.
    myMap.geoObjects.add(placemark4);
  }




    // async function getTeaData() {
    //     const response = await fetch('/home/tea', {
    //       method: 'POST',
    //       headers: {
    //         'Content-type': 'application/json',
    //       },
    //       body: JSON.stringify({}),
    //     });
      
    //     const teas = await response.json();
      
    //     ymaps.ready(() => {
    //       const myMap = new ymaps.Map('home_map', {
    //         // center: [55.751574, 37.573856],
    //         center: [33.080569, 78.444949],
    //         zoom: 3.5,
    //         controls: ['zoomControl'],
    //       }, {
    //         searchControlProvider: 'yandex#search',
    //       });
    //       teas.forEach((tea) => {
    //         const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    //           '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
    //         );
    //         const geocode = ymaps.geocode(tea.location);
    //         geocode.then((res) => {
    //           const firstGeoObject = res.geoObjects.get(0);
    //           const coords = firstGeoObject.geometry.getCoordinates();
    //           const mark = new ymaps.Placemark(coords, {
    //             hintContent: tea.title,
    //           }, {
    //             iconLayout: 'default#imageWithContent',
    //             iconImageHref: tea.image_url,
    //             iconImageSize: [24, 24],
    //             iconImageOffset: [-24, -24],
    //             iconContentOffset: [15, 15],
    //             iconContentLayout: MyIconContentLayout,
    //           });
    //           mark.events.add('click', () => {
    //             window.location.assign(`tea/${tea.id}`);
    //           });
    //           myMap.geoObjects.add(mark);
    //         });
    //       });
    //     });
    //   }
    //   getTeaData();