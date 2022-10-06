const React = require('react');
const Layout = require('./Layout');

module.exports = function Comment(props) {
  console.log('IN COMMENT Views--------->', props);
  return (
    <div className="comment"> Здесь блок Views Коментарии</div>
  )
};