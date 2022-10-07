const React = require('react');
const Layout = require('./Layout');

module.exports = function Comment({ comments }) {

  console.log('IN COMMENT Views--------->', comments);
  return (

    <div className="commentBlock">
      {/* <div className="comment"> */}
      {(comments.length)
        ? comments.map((el) => (

          <><div className="container-fluid"><div className="row"><div className="col-4 commetUser">{el.usName}</div><div className="col-8 commetbody">{el.body}</div></div></div></>)) : <p></p>
      }
    </div >
  )

};