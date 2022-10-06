const React = require('react');
const Layout = require('./Layout');
const Comment = require('./comment')

module.exports = function TeaDescr({ result, newUser }) {
  console.log('In DESC RENDER result', result);
  let imgLink = `${result.imgLink}`
  const test = <Comment data={imgLink} />
  return (
    <Layout newUser={newUser}>
      <div className="container-fluid teawrap">
        <div className="row">
          <div className="col"></div>
          <div className="headline">
            <p> {result.title}</p>
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
            <div className="descr">{result.descriptions}</div>
          </div>
        </div>
      </div>


      <button type="button" className="btn btn-primary">Коментарии</button>
      <Comment></Comment>

    </Layout >
  )
};