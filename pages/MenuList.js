import { useState } from 'react';
import styles from '../styles/Menulist.module.scss';
import menuJson from "./menu.json";

function MenuList() {
  // メニュー初期表示、menuをstate
  const [menu1, setMenu1] = useState(menuJson.monday[0]);
  const [menu2, setMenu2] = useState(menuJson.thuesday[0]);
  const [menu3, setMenu3] = useState(menuJson.wednesday[0]);
  const [menu4, setMenu4] = useState(menuJson.thursday[0]);
  const [menu5, setMenu5] = useState(menuJson.friday[0]);

  // 表示する初期値を設定するため、jsonから設定したい値をmenuに指定。
  // のちにランダム表示させたいので、setMenuしてmenuを操作できるようにする

  // 作るを押したときの処理
  function roll () {
    // menuJsonの配列内の数に乱数を掛ける。その後、小数点以下を四捨五入した計算結果をmenuJsonから取り出す。setMenuにいれて、menuへ渡す
    setMenu1(
      menuJson.monday[
        Math.floor(Math.random() * menuJson.monday.length)
      ]
    );
    setMenu2(
      menuJson.thuesday[
        Math.floor(Math.random() * menuJson.thuesday.length)
      ]
    );
    setMenu3(
      menuJson.wednesday[
        Math.floor(Math.random() * menuJson.wednesday.length)
      ]
    );
    setMenu4(
      menuJson.thursday[
        Math.floor(Math.random() * menuJson.thursday.length)
      ]
    );
    setMenu5(
      menuJson.friday[
        Math.floor(Math.random() * menuJson.friday.length)
      ]
    );
  }

  //  曜日ごとの変更
  function roll_monday () {
    setMenu1(
      menuJson.monday[
        Math.floor(Math.random() * menuJson.monday.length)
      ]
    );
  }

  function roll_thuesday () {
    setMenu2(
      menuJson.thuesday[
        Math.floor(Math.random() * menuJson.thuesday.length)
      ]
    );
  }

  function roll_wednesday () {
    setMenu3(
      menuJson.wednesday[
        Math.floor(Math.random() * menuJson.wednesday.length)
      ]
    );
  }

  function roll_thursday () {
    setMenu4(
      menuJson.thursday[
        Math.floor(Math.random() * menuJson.thursday.length)
      ]
    );
  }

  function roll_friday () {
    setMenu5(
      menuJson.friday[
        Math.floor(Math.random() * menuJson.friday.length)
      ]
    );
  }

  return(
    <div className="container menuList">
      <h1 className="h1 mb-4">週間献立</h1>
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