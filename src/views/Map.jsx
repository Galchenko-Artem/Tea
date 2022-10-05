const React = require('react');
const Layout = require('./Layout');

function Map() {
  return (
    <Layout>
     <div id="map" className="map"> </div>
     <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
    </Layout>
  );
};

module.exports = Map;