import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageSelector from "../../components/PageSelector/PageSelector";
import ThemeSelector from "../../components/ThemeSelector/ThemeSelector";
import TradingCard from "../../components/TradingCard/TradingCard";
import "./Home.scss";
const API_URL = process.env.REACT_APP_API_URL;

export default function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState({
    current: 1,
    hasPrevious: false,
    hasNext: true,
  });

  async function getCharacters(pageNumber = page.current) {
    const res = await axios.get(`${API_URL}/character/?page=${pageNumber}`);
    setData(res.data);
    setPage({
      current: pageNumber,
      hasPrevious: res.data.info.prev != null,
      hasNext: res.data.info.next != null,
    });
  }

  function handlePageChange(mode) {
    let current = page.current;
    if (mode === "forward") {
      current += 1;
      getCharacters(current);
    } else if (mode === "back") {
      current -= 1;
      getCharacters(current);
    }
  }

  useEffect(() => {
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
      <div className="proto-nav">
        <h1>Home</h1>
        <Link to={"/introduction"}> Introduction </Link>
        <ThemeSelector />
      </div>
      <div className="spacer"></div>
      <PageSelector
        visibleLeft={page.hasPrevious}
        leftClick={() => handlePageChange("back")}
        current={page.current}
        rightClick={() => handlePageChange("forward")}
        visibleRight={page.hasNext}
      />
      <div className="trading-container">{cards}</div>
      <PageSelector
        visibleLeft={page.hasPrevious}
        leftClick={() => handlePageChange("back")}
        current={page.current}
        rightClick={() => handlePageChange("forward")}
        visibleRight={page.hasNext}
      />
      {/* Reto: Mostrar la data de la API (TIME FOR CARDS THANK GOD YOU BUILT THEM IN JSON) */}
    </>
  );
}
