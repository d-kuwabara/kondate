import React, { Component } from "react";
import MenuItem from "./MenuItem";
import styles from '../styles/Menulist.module.scss';

class MenuList extends Component {
    // props のデフォルト値をいれる
    static defaultProps = {
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

    // propsを初期化
    constructor(props) {
        super(props);
        this.state = {
          menu1: "さばの味噌煮",
          menu2: "焼きそば",
          menu3: "チキンステーキ",
          menu4: "カレーライス",
          menu5: "豚バラキャベツ"
        };
        this.roll = this.roll.bind(this);
        this.roll_monday = this.roll_monday.bind(this);
        this.roll_thuesday = this.roll_thuesday.bind(this);
        this.roll_wednesday = this.roll_wednesday.bind(this);
        this.roll_thursday = this.roll_thursday.bind(this);
        this.roll_friday = this.roll_friday.bind(this);
    }

    roll() {
        // 月曜のメニューを取得
        const newMenu1 = this.props.sides_monday[
            // Math.floorで整数のみ　Math.randomで乱数　.lengthで配列の数を取得計算し、出力するメニューを決定
            Math.floor(Math.random() * this.props.sides_monday.length)
        ];

        // 火曜のメニューを取得
        const newMenu2 = this.props.sides_thuesday[
            Math.floor(Math.random() * this.props.sides_thuesday.length)
        ];
    
        // 水曜のメニューを取得
        const newMenu3 = this.props.sides_wednesday[
            Math.floor(Math.random() * this.props.sides_wednesday.length)
        ];
    
        // 木曜のメニューを取得
        const newMenu4 = this.props.sides_thursday[
            Math.floor(Math.random() * this.props.sides_thursday.length)
        ];
    
        // 金曜のメニューを取得
        const newMenu5 = this.props.sides_friday[
            Math.floor(Math.random() * this.props.sides_friday.length)
        ];
        // メニューを反映
        this.setState({
            menu1: newMenu1,
            menu2: newMenu2,
            menu3: newMenu3,
            menu4: newMenu4,
            menu5: newMenu5
        });
    }

    roll_monday() {
      const newMenu1 = this.props.sides_monday[
          Math.floor(Math.random() * this.props.sides_monday.length)
      ];
      this.setState({
          menu1: newMenu1
      });
    }

    roll_thuesday() {
      const newMenu2 = this.props.sides_thuesday[
          Math.floor(Math.random() * this.props.sides_thuesday.length)
      ];
      this.setState({
          menu2: newMenu2
      });
    }

    roll_wednesday() {
      const newMenu3 = this.props.sides_wednesday[
          Math.floor(Math.random() * this.props.sides_wednesday.length)
      ];
      this.setState({
          menu3: newMenu3
      });
    }

    roll_thursday() {
      const newMenu4 = this.props.sides_thursday[
          Math.floor(Math.random() * this.props.sides_thursday.length)
      ];
      this.setState({
          menu4: newMenu4
      });
    }

    roll_friday() {
      // 月曜のメニューを取得
      const newMenu5 = this.props.sides_friday[
          Math.floor(Math.random() * this.props.sides_friday.length)
      ];
      this.setState({
          menu5: newMenu5
      });
    }

    render() {
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
                    {/* 初期値にstateの値を表示 */}
                    <MenuItem face={this.state.menu1} />
                  </td>
                  <td className={styles.menuChange}>
                    <button onClick={this.roll_monday} className="btn btn-secondary">変える</button>
                  </td>
                </tr>
                <tr>
                  <td className={styles.days}>火</td>
                  <td className={styles.menuName}>
                    <MenuItem face={this.state.menu2} />
                  </td>
                  <td className={styles.menuChange}>
                    <button onClick={this.roll_thuesday} className="btn btn-secondary">変える</button>
                  </td>
                </tr>
                <tr>
                  <td className={styles.days}>水</td>
                  <td className={styles.menuName}>
                    <MenuItem face={this.state.menu3} />
                  </td>
                  <td className={styles.menuChange}>
                    <button onClick={this.roll_wednesday} className="btn btn-secondary">変える</button>
                  </td>
                </tr>
                <tr>
                  <td className={styles.days}>木</td>
                  <td className={styles.menuName}>
                    <MenuItem face={this.state.menu4} />
                  </td>
                  <td className={styles.menuChange}>
                    <button onClick={this.roll_thursday} className="btn btn-secondary">変える</button>
                  </td>
                </tr>
                <tr>
                  <td className={styles.days}>金</td>
                  <td className={styles.menuName}>
                    <MenuItem face={this.state.menu5} />
                  </td>
                  <td className={styles.menuChange}>
                    <button onClick={this.roll_friday} className="btn btn-secondary">変える</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mx-auto d-block col-6">
              <button onClick={this.roll} className="btn btn-primary mx-auto">
                今週の献立メニューをつくる！
              </button>
            </div>
          </div>
        );
    }
}

export default MenuList;