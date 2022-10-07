let comButtton = document.querySelector('#comButtton');

comButtton.addEventListener('click', async (event) => {
  event.preventDefault();


  let div = document.createElement('div');
  let commentBlock = document.querySelector('.commentBlock');

  if (document.querySelector('.commentBlock')) {
    if (comButtton.innerText === 'Коментарии') {
      comButtton.innerText = 'Скрыть Коментарии';
      commentBlock.style.display = 'block'
    } else {
      comButtton.innerText = 'Коментарии'
      commentBlock.style.display = 'none'
    }


  }
});

