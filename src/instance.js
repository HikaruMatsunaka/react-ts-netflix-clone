//axiosについてはこちらを参照:https://reffect.co.jp/vue/vue-axios-learn#axios
//簡単に言うと、非同期にHTTP通信を行えて。サーバからデータの取得、送信をすることで読取、削除、追加、更新ができる。
import axios from "axios";

//インスタンスを作成
//インスタンツについてはこちら:https://qiita.com/komo_ta/items/a5b4b5ea43cb8db2db2a
//クラスとインスタンスの関係：クラスという設計図を基に作成した実体(インスタンス)
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
