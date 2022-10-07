const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <h1>Hello user! {' '} {newUser}</h1>
      <div id="maps" className="map"> </div>
     <script src="https://api-maps.yandex.ru/2.1/?apikey=66aa6850-5430-4a22-8e63-26a8fe081633&lang=ru_RU" type="text/javascript"></script>
    </Layout>
  );
};
