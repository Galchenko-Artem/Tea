const React = require('react');
const Layout = require('./Layout');
const Comment = require('./comment')

module.exports = function TeaDescr({ result, newUser, comments }) {
  console.log('In DESC RENDER result', comments);
  let imgLink = `${result.imgLink}`
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
          <div className="col-sm-2"></div>
          <div className="col-sm-4">
            <div >
              <img src={imgLink} className="image" alt="tea" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="descr">{result.descriptions}</div>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>

      <button id="comButtton" type="button" className="btn btn-primary">Коментарии</button>
      <script defer src='/js/teapageScript.js'></script>
      <Comment comments={comments}></Comment>


    </Layout >
  )
};