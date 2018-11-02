// @flow


import * as React from 'react';
import {
  Button, Col, Jumbotron, Row, Thumbnail,
} from 'react-bootstrap';
import * as Grid from 'react-bootstrap/lib/Grid';
import {
  Link,
} from 'react-router-dom';

const Home = () => {
  const thumbnail = 'https://placehold.jp/242x200.png';
  const thumbnail1 = 'https://1.bp.blogspot.com/-Q9jOqnVqGuo/W64DqXTxwfI/AAAAAAABPIk/mn0XoaVlL2s_Sphqb-5WielV75A6JIEowCLcBGAs/s800/job_yarigai_sausyu.png';
  const thumbnail2 = 'https://4.bp.blogspot.com/-02mTT_mAcF0/V4SA7PnHXwI/AAAAAAAA8OE/bMCTmcMMax8gZjBqtKsP-mBuX_8955-QACLcB/s800/computer_hub_loop_setsuzoku.png';
  const thumbnail3 = 'https://4.bp.blogspot.com/-4xxTe_qeV1E/Vd7FkNUlwjI/AAAAAAAAxFc/8u9MNKtg7gg/s800/syachiku.png';
  return (
    <div>
      <Jumbotron>
        <h1>Hello, different world</h1>
        <h2>こんにちわ、異世界</h2>
        <p>
          本文は記事ライセンスに創作認めフリーですます以下、規定するれフェアが理解物十分の該当見解をされても満たすで、方針の権利は、著作する言語を引用基づいことによる防止必要ででてなりんあっ。また、デュアルの著作物は、コンテンツの出所疑わ著作十分ましパブリックで漏洩でき、その権利をしれて記事が制定しことで該当行われます。一方を、演説権利を陳述なられがいる方針をたとえする満たすことは、利用でます、場合によっては公表国の著作として方針上の問題はしことを、お-名は、同様の参考が満たさて条件に記載なるんているたます。引用定めて、それの閲覧も無いなどなるますた。
        </p>
        <p>
          <Button bsStyle="primary">もう知りたくない</Button>
        </p>
      </Jumbotron>

      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail src={thumbnail1} alt="242x200">
              <h3><Link to="/hello">Hello</Link></h3>
              <p>Description</p>
              <p>
                彼らは昔恐らくそのお話目というものの時にしただ。もしほかが観念院はおおかたその懊悩たでくらいを放ってみましをも話あるなますて、そうにはさたまいたくましょ。個性を直さないつもりはけっして事実がもしだたた。
                やはり嘉納さんが矛盾探照灯始終説明を存じで先この権利そこか料簡にというお開始たましですたて、その結果もこれか主人外国にいば、木下さんののが男の私でとうとうご吟味とすれて私ごまかしでご発展が思っように大分ご観念がしでしょますから、同時にもし［＃「からいうましながらいないものをありですまし。あるいはまたお弟がしのはそう非常と入っますから、その道具とは云いですでという人間が歩くてっうな。
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={thumbnail2} alt="242x200">
              <h3><Link to="/hello_lambda">Hello Lambda</Link></h3>
              <p>Description</p>
              <p>
                畑はかっこうのぼんやりトマトみちへゴーシュをし舌まします。ではまもなくくたくたございんという鼠たです。

                下手でしましのましはたまたぎてしまいはもうじぶんがのまっ黒たちのうちをはぐるぐる気の毒なでて、何なんて室をしれものなまし。し過ぎそれはゴーシュがないまして近くのおいの窓汁に弾く第二セロ手の病気でいうてしまっました。ぶんはさっき叩きてしまっまし。
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={thumbnail3} alt="242x200">
              <h3><Link to="/fizz_buzz">Fizz Buzz</Link></h3>
              <p>Description</p>
              <p>
                ここは晩同時にどんな乱暴屋に従ってのの後にあるだっう。もし毎号を存在者もけっしてその意味ないなかっまでで教えがならですをは沙汰行くだだて、当然とも思うなんうた。個人に作るでのはもう今日からどうもですんで。いったい岡田さんに存在肉あいにく公言でなるず校長こうしたろどちらか不足がというお持ないますですたと、ある将来も誰か腹国家をなっので、嘉納さんの事に英語のあれからさぞお認定と起りてこれ根本にお力説にするようについに同理解にありますなくが、余計よく講演を嫌うたからいるですのを悟っですある。またはまたご気とするものもまだ非常とするうて、その道徳ではおらますてといった慣例をしからいれたでしょ。
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Home;