"use client";
import { useEffect, useState } from "react";
import SearchBar from "./search-bar";

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

  const convertMillisToTime = (mil) => {
    const minutes = Math.floor(mil / 60000);
    const seconds = Math.floor((mil / 1000) % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    // return `Mils: ${mil} || Minutes: ${minutes} || Seconds: ${seconds}`
  };

  console.log(results);
  return (
    <div>
      <main className="px-5">
        <SearchBar setAPISearch={setSearch} />
        <ul>
          {results.map((searchItem) => {
            return (
              <li key={searchItem.trackId} className="my-10">
                <img src={searchItem.artworkUrl100} alt=""></img>
                <h2>
                  <a href={searchItem.trackViewUrl}>{searchItem.trackName}</a>
                </h2>
                <p>By {searchItem.artistName}</p>

                <dl className="flex gap-2">
                  <dt className="font-bold">Duration: </dt>
                  <dd>{convertMillisToTime(searchItem.trackTimeMillis)}</dd>

                  <dt className="font-bold">Genre: </dt>
                  <dd>{searchItem.primaryGenreName}</dd>

                  <dt className="font-bold">Album: </dt>
                  <dd>{searchItem.collectionName}</dd>
                </dl>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
