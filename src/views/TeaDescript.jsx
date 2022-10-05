const React = require('react');
const Layout = require('./Layout');
const Comment = require('./comment')

module.exports = function TeaDescr(props) {
  console.log('In DESC RENDER', props);
  let imgLink = `${props.imgLink}`
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col"></div>
          <div className="headline">{props.title}</div>
        </div>

        <div className="row teabox">
          <div className="col">
            <div >
              <img src={imgLink} className="image" alt="tea" />
            </div>
          </div>
          <div className="col">
            <div className="descr">{props.descriptions}</div>
          </div>
        </div>
        <Comment></Comment>
      </div>

    </Layout >
  )
};