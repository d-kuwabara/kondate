import { useState,useEffect } from 'react';
import styles from '../styles/Menulist.module.scss';
import menuJson from "./menu.json";

function MenuList() {

  // メニュー初期表示、menuをstate
  const [mon, setmon] = useState(menuJson.fish);
  const [thues, setthues] = useState(menuJson.fish);
  const [wednes, setwednes] = useState(menuJson.fish);
  const [thurs, setthurs] = useState(menuJson.fish);
  const [fri, setfri] = useState(menuJson.fish);

  // メニュー初期表示、menuをstate
  const [menu1, setMenu1] = useState(menuJson.fish.menu[0]);
  const [menu2, setMenu2] = useState(menuJson.fish.menu[0]);
  const [menu3, setMenu3] = useState(menuJson.fish.menu[0]);
  const [menu4, setMenu4] = useState(menuJson.fish.menu[0]);
  const [menu5, setMenu5] = useState(menuJson.fish.menu[0]);

  // 表示する初期値を設定するため、jsonから設定したい値をmenuに指定。
  // のちにランダム表示させたいので、setMenuしてmenuを操作できるようにする

  // 作るを押したときの処理
  function roll () {

   // menuJsonの配列内の数に乱数を掛ける。その後、小数点以下を四捨五入した計算結果をmenuJsonから取り出す。setMenuにいれて、menuへ渡す
    roll_monday();
    roll_thuesday();
    roll_wednesday();
    roll_thursday();
    roll_friday();
    
  }

function getgenrejson(selectgenre) {
  switch (selectgenre){
    case "fish":
      return menuJson.fish;
      break;
    case "noodle":
      return menuJson.noodle;
      break;
    case "chicken":
      return menuJson.chicken;
      break;
    case "rice":
      return menuJson.rice;
      break;
    case "pork":
      return menuJson.pork;
      break;
    default:
      
  }
}
useEffect(() => {
  roll();
  }, []);

  //  曜日ごとの変更
  function roll_monday () {
    setMenu1(
      mon.menu[
        Math.floor(Math.random() * mon.menu.length)
      ]
    );
  }

  function roll_thuesday () {
    setMenu2(
      thues.menu[
        Math.floor(Math.random() * thues.menu.length)
      ]
    );
  }

  function roll_wednesday () {
    setMenu3(
      wednes.menu[
        Math.floor(Math.random() * wednes.menu.length)
      ]
    );
  }

  function roll_thursday () {
    setMenu4(
      thurs.menu[
        Math.floor(Math.random() * thurs.menu.length)
      ]
    );
  }

  function roll_friday () {
    setMenu5(
      fri.menu[
        Math.floor(Math.random() * fri.menu.length)
      ]
    );
  }
  const handleChangemon = e => setmon(getgenrejson(e.target.value));
  const handleChangethues = e => setthues(getgenrejson(e.target.value));
  const handleChangewednes = e => setwednes(getgenrejson(e.target.value));
  const handleChangethurs = e => setthurs(getgenrejson(e.target.value));
  const handleChangefri = e => setfri(getgenrejson(e.target.value));

  return(
    <div className="container menuList">
      <h1 className="h1 mb-4">週間献立</h1>
      <select val={mon.slug} onChange={handleChangemon}>
        <option value="fish">魚</option>
        <option value="noodle">麺</option>
        <option value="chicken">鶏</option>
        <option value="rice">米</option>
        <option value="pork">豚</option>
      </select>
      <select val={thues.slug} onChange={handleChangethues}>
        <option value="fish">魚</option>
        <option value="noodle">麺</option>
        <option value="chicken">鶏</option>
        <option value="rice">米</option>
        <option value="pork">豚</option>
      </select>
      <select val={wednes.slug} onChange={handleChangewednes}>
        <option value="fish">魚</option>
        <option value="noodle">麺</option>
        <option value="chicken">鶏</option>
        <option value="rice">米</option>
        <option value="pork">豚</option>
      </select>
      <select val={thurs.slug} onChange={handleChangethurs}>
        <option value="fish">魚</option>
        <option value="noodle">麺</option>
        <option value="chicken">鶏</option>
        <option value="rice">米</option>
        <option value="pork">豚</option>
      </select>
      <select val={fri.slug} onChange={handleChangefri}>
        <option value="fish">魚</option>
        <option value="noodle">麺</option>
        <option value="chicken">鶏</option>
        <option value="rice">米</option>
        <option value="pork">豚</option>
      </select>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>曜日</th>
            <th>メニュー</th>
            <th>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.days}>月</td>
            <td className={styles.menuName}>
              {menu1}
            </td>
            <td className="menuChange">
              <button onClick={roll_monday} className="btn btn-secondary mx-auto">
                変える
              </button>
            </td>
          </tr>
          <tr>
            <td className={styles.days}>火</td>
            <td className={styles.menuName}>
              {menu2}
            </td>
            <td className="menuChange">
              <button onClick={roll_thuesday} className="btn btn-secondary mx-auto">
                変える
              </button>
            </td>
          </tr>
          <tr>
            <td className={styles.days}>水</td>
            <td className={styles.menuName}>
              {menu3}
            </td>
            <td className="menuChange">
              <button onClick={roll_wednesday} className="btn btn-secondary mx-auto">
                変える
              </button>
            </td>
          </tr>
          <tr>
            <td className={styles.days}>木</td>
            <td className={styles.menuName}>
              {menu4}
            </td>
            <td className="menuChange">
              <button onClick={roll_thursday} className="btn btn-secondary mx-auto">
                変える
              </button>
            </td>
          </tr>
          <tr>
            <td className={styles.days}>金</td>
            <td className={styles.menuName}>
              {menu5}
            </td>
            <td className="menuChange">
              <button onClick={roll_friday} className="btn btn-secondary mx-auto">
                変える
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mx-auto d-block col-6">
        <button onClick={roll} className="btn btn-primary mx-auto">
          今週の献立メニューをつくる！
        </button>
      </div>
    </div>
  );
};


export default MenuList;