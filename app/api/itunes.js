"use client";
import { useEffect, useState } from "react";
import SearchBar from "./search-bar";
import SongCard from "./song-card";

export default function Itunes() {
  let [results, setResults] = useState([]);
  let [search, setSearch] = useState("");

  const cleanTerm = (term) => {
    return term.replaceAll(" ", "+");
  };

  async function searchItunes() {
    try {
      const response = await fetch(
        `https://itunes.apple.com/search?limit=25&entity=musicTrack&term=${cleanTerm(search)}`,
      );
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    searchItunes();
    console.log("^ useeffect");
  }, [search]);

  ;

  console.log(results);
  return (
    <div>
      <main className="px-5">
        <SearchBar setAPISearch={setSearch} />
        <ul>
          {results.map((searchItem) => {
            return (
              <SongCard {...searchItem}></SongCard>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
