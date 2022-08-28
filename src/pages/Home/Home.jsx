import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TradingCard from "../../components/TradingCard/TradingCard";
import "./Home.scss";
const API_URL = process.env.REACT_APP_API_URL;

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const res = await axios.get(`${API_URL}/character/?page=1`);
      setData(res.data);
    }
    getCharacters();
  }, []);

  const cards =
    data.results &&
    data.results.map((character) => {
      const { name, url, image } = character;
      return (
        <TradingCard key={url} image={image} character={character}>
          {name}
        </TradingCard>
      );
    });

  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
      <Link to={"/introduction"}> Introduction </Link>
      <div className="trading-container">{cards}</div>
      {/* Reto: Mostrar la data de la API (TIME FOR CARDS THANK GOD YOU BUILT THEM IN JSON) */}
    </>
  );
}

// function populateLocalStorage(args) {
//   for (const [key, value] of Object.entries(args)) {
//     localStorage.setItem(`${key}`, `${value}`);
//   }
// }
