const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <link rel="stylesheet" href="css/home.css" />
      <h1>Добро пожаловать в мир чая! {' '} {newUser}</h1>
      <div id="maps" className="map"> </div>
     <script src="https://api-maps.yandex.ru/2.1/?apikey=a7006369-0322-492b-a3b1-cc11d76d3ed5&lang=ru_RU" type="text/javascript"></script>
     <div className='info'>
        <p>
        Наш сайт посвящен чаю и всему, что с ним связано. На страницах нашего сайта Вы найдете информацию о различных сортах чая, от традиционного черного до изысканного белого. Мы расскажем о том, где выращиваются и как производятся различные сорта чая, а также о том, как их правильно приготовить. Вы узнаете о том, какими положительными свойствами обладает чай, и какие меры предосторожности стоит соблюдать при его употреблении. А также вы сможете высказать свое мнение о различных марках чая.
        </p>
        <p>
        А вы знали? Что согласно китайской культуре, чай был открыт культурным героем Шэнь-нуном, покровителем земледелия и медицины, одним из Трёх Великих, создавших все ремёсла и искусства.

        По преданию, Шэнь-нун путешествовал в поисках целебных трав с котлом на треножнике, в котором кипятил воду для целебных отваров. Однажды в котёл с кипятком упали несколько листочков чайного дерева. Отвар показался вкусным и вызвал бодрость. С тех пор Шэнь-нун не пил других напитков.

        Другой миф,  приписывает изобретение чая знаменитому буддистскому проповеднику, основателю чань-буддизма Бодхидхарме. По преданию, Бодхидхарма предавался медитации, но уснул. Проснувшись, в гневе он вырвал ресницы и бросил на землю. На следующий день в этом месте выросли саженцы чайного дерева. Бодхидхарма попробовал отвар из листьев и обнаружил, что они прогоняют сон.  Также считается, что в этом месте вырос тот чай, который называется байхао («белые ресницы»), от которого произошло русское «байховый». Церемония чаепития считается очень важной в практиках и учении чань-буддизма. Существует поговорка «Чай и чань имеют один вкус».
        </p>
      </div>
    </Layout>
  );
};
