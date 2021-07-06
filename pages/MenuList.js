import React, { Component, useState } from "react";
import styles from '../styles/Menulist.module.scss';

function MenuList() {
  const [monday, setmonday] = useState(0);
  const [thuesday, setthuesday] = useState(0);
  const [wednesday, setwednesday] = useState(0);
  const [thursday, setthursday] = useState(0);
  const [friday, setfriday] = useState(0);

  const menu = {
    sides_monday: [
        "さばの味噌煮",
        "さばの塩やき",
        "白身魚のムニエル",
        "鮭のちゃんちゃん焼",
        "鮭のホイル蒸し",
        "寿司"
    ],
    sides_thuesday: [
        "焼きそば",
        "ナポリタン",
        "焼きうどん",
        "冷やし中華",
        "たぬきそば",
        "ラーメン"
    ],
    sides_wednesday: [
        "チキンステーキ",
        "からあげ",
        "親子丼",
        "鶏もも肉のポン酢ソテー",
        "鶏の甘酢炒め",
        "キャベツと鶏もも肉のマヨ焼き"
    ],
    sides_thursday: [
        "カレーライス",
        "チャーハン",
        "オムライス",
        "ガパオライス",
        "チキンライス",
        "リゾット"
    ],
    sides_friday: [
        "豚バラキャベツ",
        "豚テキ",
        "生姜焼き",
        "豚肉のポン酢ソテー",
        "豚肉の梅生姜焼き",
        "人参の豚肉巻き"
    ]
  };

    return (
      <div className="container menuList">
        <h1 className="h1 mb-4">週間献立</h1>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>曜日</th>
              <th>メニュー</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.days}>月</td>
              <td className={styles.menuName}>
                <p>{menu.sides_monday[monday]}</p>
              </td>
              <td className={styles.menuChange}>
                <button onClick={() => setmonday(Math.floor(Math.random() * menu.sides_monday.length))} className="btn btn-secondary">変える</button>
              </td>
            </tr>
            <tr>
              <td className={styles.days}>火</td>
              <td className={styles.menuName}>
                <p>{menu.sides_thuesday[thuesday]}</p>
              </td>
              <td className={styles.menuChange}>
                <button onClick={() => setthuesday(Math.floor(Math.random() * menu.sides_thuesday.length))} className="btn btn-secondary">変える</button>
              </td>
            </tr>
            <tr>
              <td className={styles.days}>水</td>
              <td className={styles.menuName}>
                <p>{menu.sides_wednesday[wednesday]}</p>
              </td>
              <td className={styles.menuChange}>
                <button onClick={() => setwednesday(Math.floor(Math.random() * menu.sides_wednesday.length))} className="btn btn-secondary">変える</button>
              </td>
            </tr>
            <tr>
              <td className={styles.days}>木</td>
              <td className={styles.menuName}>
                <p>{menu.sides_thursday[thursday]}</p>
              </td>
              <td className={styles.menuChange}>
                <button onClick={() => setthursday(Math.floor(Math.random() * menu.sides_thursday.length))} className="btn btn-secondary">変える</button>
              </td>
            </tr>
            <tr>
              <td className={styles.days}>金</td>
              <td className={styles.menuName}>
                <p>{menu.sides_friday[friday]}</p>
              </td>
              <td className={styles.menuChange}>
                <button onClick={() => setfriday(Math.floor(Math.random() * menu.sides_friday.length))} className="btn btn-secondary">変える</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mx-auto d-block col-6">
          <button onClick={roll()} className="btn btn-primary mx-auto">
            今週の献立メニューをつくる！
          </button>
        </div>
      </div>
    );

}
function roll() {
    // roll_monday();
    // roll_thuesday();
    // roll_wednesday();
    // roll_thursday();
    // roll_friday();
}
function roll_monday() {
  
}

function roll_thuesday(menu) {
  
}

function roll_wednesday(menu) {
  
}

function roll_thursday(menu) {
  
}

function roll_friday(menu) {
  
}

export default MenuList;