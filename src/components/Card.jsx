import React from "react";
import { Link } from "react-router-dom";

const Card = ({ song }) => {
  return (
    <Link to={`/detail/${song.id}`}>
      <div className=" bg-gray-100 p-4 w-60 rounded-md shadow-md hover:scale-90 transition">
        <div className="">
          <img
            src={
              song.thumbnail
                ? song.thumbnail
                : "https://i.pinimg.com/564x/bd/c0/70/bdc070b00b55ff63e2adde80ebcbea95.jpg"
            }
            alt=""
            className="mx-auto"
          />
          <h1 className="text-xl text-center my-3 truncate font-semibold">
            {song.title}
          </h1>
          <p className=" text-slate-500 text-center">{song.artists[0].name}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
