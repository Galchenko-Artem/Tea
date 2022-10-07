ymaps.ready(init);

// const comButtton = document.getElementById('showCommentButton');

// comButtton.onclick = function () {
//     console.log('On CLick');
// }

async function getMark() {
    const resul = await fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // body: 'foo=bar&lorem=ipsum'
    })


    const teaMark = await resul.json()

    console.log(resul);
    console.log('TeaMark', teaMark);





}

async function getgeo() {
    const myGeocoder = await ymaps.geocode("Moscow");
    console.log(myGeocoder);
}


const allMArk = getMark()
// getgeo()




// fetch('https://example.com/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })









function init(){
    // Создание карты.
    // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/map-docpage/
    let myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчнию: «широта, долгота».
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 2,
        // Элементы управления
        // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
        controls: [
            'typeSelector', // Переключатель слоев карты
        ]
    });

    const address = 'Москва, ул. Льва Толстого, 16';

    // Ищем координаты указанного адреса
    // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/geocode-docpage/
    const geocoder = ymaps.geocode(address);

    // После того, как поиск вернул результат, вызывается callback-функция
    geocoder.then(
        function (res) {
            var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
            console.log(coordinates);
        })












    // Собственное изображение для метки с контентом
    let placemark4 = new ymaps.Placemark([55.79741725173239, 37.775391805417016], {
        hintContent: 'Чай пуэр',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '/img/leaf.png',
        // Размеры метки.
        iconImageSize: [20, 20],
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
document.addEventListener('submit', async (event) => {
    event.preventDefault();
    const url = event.target.action;
    console.log("▶ ⇛ url", url);
    const method = event.target.method;
    const title = event.target.title.value;
    const description = event.target.description.value;

    const body = JSON.stringify({
        title,
        description,
    });

})