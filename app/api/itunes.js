import { useEffect, useState } from "react";
import SearchBar from "./search-bar";

export default function Itunes() {
  let [results, setResults] = useState([]);
  let [search, setSearch] = useState("")
  //https://itunes.apple.com/search?parameterkeyvalue
  const term1 = "jane remover";

  const cleanTerm = (term) => {
    return term.replaceAll(" ", "+");
  };

  async function searchItunes() {
    try {
      const response = await fetch(
        `https://itunes.apple.com/search?limit=25&entity=musicTrack&term=${cleanTerm(term1)}`,
      );
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    // searchItunes();
    console.log("^ useeffect");
  }, []);

  const convertMillisToTime = (mil) => {
    const minutes = Math.floor(mil / 60000);
    const seconds = Math.floor((mil / 1000) % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    // return `Mils: ${mil} || Minutes: ${minutes} || Seconds: ${seconds}`
  };

  console.log(results);
  return (
    <div>
      <main>
        <SearchBar setAPISearch={setSearch}/>
        <ul>
          {results.map((searchItem) => {
            return (
              <li key={searchItem.trackId} className="my-10">
                <img src={searchItem.artworkUrl100} alt="track "></img>
                <p>
                  {searchItem.trackName} by {searchItem.artistName}
                </p>
                <a href={searchItem.trackViewUrl}>Link</a>
                <p>Time: {convertMillisToTime(searchItem.trackTimeMillis)}</p>
                <p>Genre: {searchItem.primaryGenreName}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
