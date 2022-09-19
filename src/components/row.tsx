//映画を1列で表示するコンポーネント
//オブジェクトに型注釈をつける
//isolateModulesに関するエラーが出たときの対処：https://zenn.dev/ryo_kawamata/articles/0f63b7ffdaed97

import { useEffect, useState } from "react";
import instance from "../instance";
import "../row.css";

const base_url = "https://image.tmdb.org/t/p/original";

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

type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

//引数に方を適用
export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  //個々の映画のCardを配列で受け取っていく
  //useStateで型を定義したい時は、こんな感じで記述する！
  const [movies, setMovies] = useState<Movie[]>([]);

  const [trailerUrl, setTrailerUrl] = useState<string | null>("");

  //useEffectに関してはこの2つの動画を参照
  //https://www.youtube.com/watch?v=f8iXdpbvvH8&list=PLX8Rsrpnn3IWPoM7-1YPDksRRkamRY25k&index=8
  //https://www.youtube.com/watch?v=Ejr2vj527j4&list=PLX8Rsrpnn3IWPoM7-1YPDksRRkamRY25k&index=9
  //APIやデータベースから非同期通信でデータを取って戻って(fetch)する。もしくは、値が変わったら再度取って戻ってくる。
  //useEffectを使って、非同期処理の発火をfetchUrlが変わる仕様に。
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  //fetchUrlに関して依存関係を持たせる。

  const opts: Options = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // const handleClick = async (movie: Movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     let trailerurl = await instance.get(`/tv/${movie.id}/videos?api_key=~~~`);
  //     setTrailerUrl(trailerurl.data.results[0]?.key);
  //   }
  // };

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {/**map関数で、movieに代入した配列を当てはめていく */}
        {movies.map((movie, i) => (
          <img
            key={movie.id}
            className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            // onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
    </div>
  );
};
// function handleClick(movie: Movie): void {
//   throw new Error("Function not implemented.");
// }
