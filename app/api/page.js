import NavBar from "../navBar";
import Itunes from "./itunes";

 export default async function Page() {
   //https://itunes.apple.com/search?parameterkeyvalue
   const term1 = "underscores and friends"
  
   const cleanTerm = (term) => {
    return term.replaceAll(" ", "+")
   }

   try {
    const response = await fetch(`https://itunes.apple.com/search?term=${cleanTerm(term1)}`)
    const data = await response.json
    console.log(data)
   } catch (error) {
    console.error("Error:", error)
   }


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
