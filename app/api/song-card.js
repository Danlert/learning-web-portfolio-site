export default function SongCard({
  trackId,
  artworkUrl100,
  trackViewUrl,
  trackName,
  artistName,
  trackTimeMillis,
  primaryGenreName,
  collectionName,
}) {
  const convertMillisToTime = (mil) => {
    const minutes = Math.floor(mil / 60000);
    const seconds = Math.floor((mil / 1000) % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    // return `Mils: ${mil} || Minutes: ${minutes} || Seconds: ${seconds}`
  };
  return (
    <li key={trackId} className="my-10">
      <img src={artworkUrl100} alt=""></img>
      <h2>
        <a href={trackViewUrl}>{trackName}</a>
      </h2>
      <p>By {artistName}</p>

      <dl className="flex gap-2">
        <dt className="font-bold">Duration: </dt>
        <dd>{convertMillisToTime(trackTimeMillis)}</dd>

        <dt className="font-bold">Genre: </dt>
        <dd>{primaryGenreName}</dd>

        <dt className="font-bold">Album: </dt>
        <dd>{collectionName}</dd>
      </dl>
    </li>
  );
}
