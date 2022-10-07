const React = require('react');
const Layout = require('./Layout');

module.exports = function Personal(props) {
  return (
    <Layout >
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">@</span>
          <input name="title" type="text" class="form-control" placeholder="Название чая" aria-label="Имя пользователя" aria-describedby="addon-wrapping"/>
        </div>

        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">@</span>
          <input name="descriptions" type="text" class="form-control" placeholder="Описание" aria-label="Имя пользователя" aria-describedby="addon-wrapping"/>
       </div>

       <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">@</span>
          <input name="location" type="text" class="form-control" placeholder="Локация" aria-label="Имя пользователя" aria-describedby="addon-wrapping"/>
       </div>

       <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">@</span>
          <input type="text" class="form-control" placeholder="Картинка" aria-label="Имя пользователя" aria-describedby="addon-wrapping"/>
       </div>

       <div class="d-grid gap-2">
          <button name="imgLink" class="btn btn-primary" type="button">Создать запись!!!</button>
       </div>
      
    </Layout>
  );
};
