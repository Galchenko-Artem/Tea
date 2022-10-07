async function getMark(){
    const resul = await fetch('/',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
    });
    const teas = await resul.json()
ymaps.ready(() => {
    const myMap = new ymaps.Map("maps", {
        center:[55.943233465759036,37.26191203676665],
        zoom:2,
        controls: [
            'typeSelector',
            'fullscreenControl', 
          ]
    },{
        searchControlProvider: 'yandex#search',
    });
     teas.forEach((tea) =>{
        const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
          );
          const geocode =  ymaps.geocode(tea.location);
          geocode.then((res)=>{
            const firstGeoObject = res.geoObjects.get(0);
            const coords = firstGeoObject.geometry.getCoordinates();
            const mark = new ymaps.Placemark(coords, {
              hintContent: tea.title,
            }, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: '/img/leaf.png',
                iconImageSize: [24, 24],
                iconImageOffset: [-24, -24],
                iconContentOffset: [15, 15],
                iconContentLayout: MyIconContentLayout,
            });
            mark.events.add('click', () => {
              window.location.assign(`tea/${tea.id}`);
            });
            myMap.geoObjects.add(mark);
          });
        });
      });
    }
    getMark()
    
      
  