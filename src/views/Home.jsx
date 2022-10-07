const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ newUser, teaMark }) {
  console.log(newUser);
  console.log(teaMark);
  return (
    <Layout newUser={newUser}>
      <h1>Hello user! {' '} {newUser}</h1>
      <div className="container">
        <div id="map" className="map"> </div>
        <script defer src="/js/script.js"></script>
        <script src="https://api-maps.yandex.ru/2.1/?apikey=a7006369-0322-492b-a3b1-cc11d76d3ed5&lang=ru_RU" type="text/javascript"></script> 
      </div>
    </Layout>
  );
};
