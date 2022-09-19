//映画を1列で表示するコンポーネント
//オブジェクトに型注釈をつける
//isolateModulesに関するエラーが出たときの対処：https://zenn.dev/ryo_kawamata/articles/0f63b7ffdaed97

import { useState } from "react";

//Propsで型注釈をつけておく方が管理しやすいから？
type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};
type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

//引数に方を適用
export const Row = ({ title, fetchUrl }: Props) => {
  //個々の映画のCardを配列で受け取っていく
  //useStateに型を定義したい時は、こんな感じで記述する！
  const [movies, setMovies] = useState<Movie[]>([]);
};
