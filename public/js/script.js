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
        zoom:1,
        // Элементы управления
        // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
        controls: [
            'typeSelector', // Переключатель слоев карты
            'fullscreenControl', // Полноэкранный режим
        ]
    });
    // Собственное изображение для метки с контентом
    var placemark4 = new ymaps.Placemark([55.79741725173239, 37.775391805417016], {
        hintContent: '>>>>',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '//codd-wd.ru/wp-content/examples/pic/web-app-development-q32.png',
        // Размеры метки.
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-16, -16],
    });
  
    // После того как метка была создана, добавляем её на карту.
    myMap.geoObjects.add(placemark4);
}