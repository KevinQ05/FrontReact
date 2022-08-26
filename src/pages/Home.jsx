import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  /* Executes before the render, but asynchronously
  So info is ready after call
  Similar to componentDidMount(), can be used for loading
  Immune to re-renders thanks to the empty array [], will not "useEffect" again
  NEVER FORGET THE EMPTY ARRAY (BAD DESIGN ON REAKT'S PART? JAJAJAJAJ)
  It's called dependency list, see https://stackoverflow.com/questions/58579426/in-useeffect-whats-the-difference-between-providing-no-dependency-array-and-an
  En producción se ejecuta 1 vez así y en desarrollo 2 veces */
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
      <Link to={"/introduction"}> Introduction </Link>
      <button>Call RickyMartin API</button>
      {/* Reto: Mostrar la data de la API (TIME FOR CARDS THANK GOD YOU BUILT THEM IN JSON) */}
    </>
  );
}
