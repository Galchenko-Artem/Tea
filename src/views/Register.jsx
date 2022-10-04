const React = require('react');
const Layout = require('./Layout');

function Registration() {
  return (
    <Layout title="Registration">
          <h1>Регистрация</h1>
          <form name="registrationForm" action="/registration" method="POST">
            <div className="mb-3">
              <label htmlFor="exampleInputName1" className="form-label">Имя</label>
              <input type="text" name="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Введите имя" />
              </div>
              <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input type="text" name="email" className="form-control" id="exampleInputEmail" aria-describedby="nameHelp" placeholder="Введите почту" />
              <div id="nameHelp" className="form-text" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
              <input type="password" name="password" className="form-control" placeholder="Введите пароль" id="exampleInputPasswordexampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Registrate</button>
        </form>
    </Layout>
  );
}

module.exports = Registration;