const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <h1>Hello user! {' '} {newUser}</h1>
      <div id="map" className="map"> </div>
      <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
    </Layout>
  );
};
