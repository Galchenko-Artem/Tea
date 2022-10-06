const React = require('react');
const Layout = require('./Layout');
const Comment = require('./comment')

module.exports = function TeaDescr(props) {
  console.log('In DESC RENDER', props);
  let imgLink = `${props.imgLink}`
  const test = <Comment data={imgLink} />
  return (
    <Layout>
      <div className="container-fluid teawrap">
        <div className="row">
          <div className="col"></div>
          <div className="headline">
            <p> {props.title}</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row teabox">
          <div className="col-sm-6">
            <div >
              <img src={imgLink} className="image" alt="tea" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="descr">{props.descriptions}</div>
          </div>
        </div>
      </div>


      <button type="button" className="btn btn-primary">Коментарии</button>

    </Layout >
  )
};