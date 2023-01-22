import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  // const [download, setDownload] = useState("");
  const getUrl = async () => {
    const { data } = await axios.get(
      "https://youtube-music-downloader-mp3.p.rapidapi.com/get_download_url",
      {
        params: { id, ext: "mp3" },
        headers: {
          "X-RapidAPI-Key":
            "a3de92da31mshb22cb40c375ca74p1a3995jsn5bc34d031aca",
          "X-RapidAPI-Host": "youtube-music-downloader-mp3.p.rapidapi.com",
        },
      }
    );
    // setDownload(data.result.download_url);
    console.log(data);
    location.href = data.result.download_url;
  };
  // useEffect(() => {
  //   getUrl();
  // }, []);
  return (
    <div>
      <button
        onClick={() => getUrl()}
        className="p-3 bg-blue-400 rounded-md block w-40 text-center m-3 text-white">
        Download
      </button>
    </div>
  );
};

export default Detail;
