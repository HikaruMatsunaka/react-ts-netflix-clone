//上部のバナーを作る

import { useEffect, useState } from "react";
import instance from "../instance";
import { requests } from "../request";
import "../banner.css";

//オブジェクトに型注釈をつける
//プロパティの?や！についてはこちら:https://zenn.dev/oreo2990/articles/3d780560c5e552
//簡単に言うと、無くても何も注意されなくなる。
type moviePropas = {
  title?: string;
  name?: string;
  original_name?: string;
  backdrop_path?: string;
  overview?: string;
};

export const Banner = () => {
  const [movie, setMovie] = useState<moviePropas>({});
  useEffect(() => {
    async function fetchData() {
      //データを取ってくる
      const request = await instance.get(requests.feachNetflixOriginals);
      //取ってきたデータから目的のデータを取り出す
      setMovie(
        request.data.results[
          //resultからランダムに取ってくる
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  //文字数指定
  function truncate(str: any, n: number) {
    if (str !== undefined) {
      return str.length > n ? str?.substr(0, n - 1) + "..." : str;
    }
  }

  return (
    <header
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="Banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="Banner-buttons">
          <button className="Banner-button">Play</button>
          <button className="Banner-button">My List</button>
        </div>

        <h1 className="Banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="Banner-fadeBottom" />
    </header>
  );
};
