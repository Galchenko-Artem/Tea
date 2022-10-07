// ymaps.ready(init);


async function getMark(){
  console.log('IN GETMARK');
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

      });
    }
    getMark()
    
    
