"use client"
import NavBar from "../navBar";
import Itunes from "./itunes";

 export default function Page() {

  return (
    <div>
      <NavBar />
      <main>
            <h1>Hi I'm cool api page</h1>
            <Itunes></Itunes>
      </main>
    </div>
  );
}
