import { useState,useEffect } from 'react';
import styles from '../styles/Menulist.module.scss';
import menuJson from "./menu.json";

function MenuList() {

  // メニュー初期表示、menuをstate
  const [mon, setmon] = useState(menuJson.fish);
  const [thues, setthues] = useState(menuJson.noodle);
  const [wednes, setwednes] = useState(menuJson.chicken);
  const [thurs, setthurs] = useState(menuJson.rice);
  const [fri, setfri] = useState(menuJson.pork);

  // メニュー初期表示、menuをstate
  const [menu1, setMenu1] = useState(random_roll(mon));
  const [menu2, setMenu2] = useState(random_roll(thues));
  const [menu3, setMenu3] = useState(random_roll(wednes));
  const [menu4, setMenu4] = useState(random_roll(thurs));
  const [menu5, setMenu5] = useState(random_roll(fri));

  function random_roll(week) {
    return week.menu[Math.floor(Math.random() * week.menu.length)]
  }

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

  //  曜日ごとの変更
  function roll_monday () {
    setMenu1(random_roll(mon));
  }

  function roll_thuesday () {
    setMenu2(random_roll(thues));
  }

  function roll_wednesday () {
    setMenu3(random_roll(wednes));
  }

  function roll_thursday () {
    setMenu4(random_roll(thurs));
  }

  function roll_friday () {
    setMenu5(random_roll(fri));
  }

  const handleChangemon = e => setmon(getgenrejson(e.target.value));
  const handleChangethues = e => setthues(getgenrejson(e.target.value));
  const handleChangewednes = e => setwednes(getgenrejson(e.target.value));
  const handleChangethurs = e => setthurs(getgenrejson(e.target.value));
  const handleChangefri = e => setfri(getgenrejson(e.target.value));

  return(
    <div className="container menuList">
      <h1 className="h1 mb-4">週間献立</h1>
      <select value={mon.slug} onChange={handleChangemon}>
        <option value="fish">魚</option>
        <option value="noodle">麺</option>
        <option value="chicken">鶏</option>
        <option value="rice">米</option>
        <option value="pork">豚</option>
      </select>
      <select value={thues.slug} onChange={handleChangethues}>
        <option value="fish">魚</option>
        <option value="noodle">麺</option>
        <option value="chicken">鶏</option>
        <option value="rice">米</option>
        <option value="pork">豚</option>
      </select>
      <select value={wednes.slug} onChange={handleChangewednes}>
        <option value="fish">魚</option>
        <option value="noodle">麺</option>
        <option value="chicken">鶏</option>
        <option value="rice">米</option>
        <option value="pork">豚</option>
      </select>
      <select value={thurs.slug} onChange={handleChangethurs}>
        <option value="fish">魚</option>
        <option value="noodle">麺</option>
        <option value="chicken">鶏</option>
        <option value="rice">米</option>
        <option value="pork">豚</option>
      </select>
      <select value={fri.slug} onChange={handleChangefri}>
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