import axios from "axios";
import { debounce } from "lodash";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
  const [name, setName] = useState("");
  const [songs, setSongs] = useState([]);
  const getSongs = async () => {
    const { data } = await axios.get(
      "https://youtube-music-downloader-mp3.p.rapidapi.com/v2/search",
      {
        params: { query: `${name}` },
        headers: {
          "X-RapidAPI-Key":
            "a3de92da31mshb22cb40c375ca74p1a3995jsn5bc34d031aca",
          "X-RapidAPI-Host": "youtube-music-downloader-mp3.p.rapidapi.com",
        },
      }
    );
    setSongs(data?.result?.songs);
    console.log(data);
  };
  useEffect(() => {
    getSongs();
  }, [name]);
  return (
    <div className=" container mx-auto">
      <input
        type="text"
        className=" outline-none border-b-2 border-gray-400 py-2"
        placeholder="Search songs"
        // value={name}
        onChange={debounce((e) => setName(e.target.value), 1000)}
      />
      <div className="flex flex-wrap gap-5 justify-center my-5">
        {songs?.map((song) => (
          <Card song={song} key={song.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
