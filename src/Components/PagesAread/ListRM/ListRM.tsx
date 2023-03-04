import axios from "axios";
import { useEffect, useState } from "react";
import { CharactModel, Result } from "../../../Models/RickAndMorty";
import RMItem from "../RMItem/RMItem";
import "./ListRM.css";

function ListRM(): JSX.Element {
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState<Result[]>([]);
  // const statusAlive = characters.filter((s) => s.status == "Alive");
  // const speciesHuman = characters.filter((s) => s.species == "Human");
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name", "status", "species"]);
  const [filterParam, setFilterParam] = useState("All");

  // function search(characters: any[]) {
  //   return characters.filter((character: { [x: string]: { toString: () => string; }; }) => {
  //       return searchParam.some((newCharacter) => {
  //           return (
  //               character[newCharacter]
  //                   .toString()
  //                   .toLowerCase()
  //                   .indexOf(q.toLowerCase()) > -1
  //           );
  //       });
  //   });

  function search(characters: any[]) {
    return characters.filter(
      (character: { [x: string]: { toString: () => string } }) => {
        return searchParam.some((newCharacter) => {
          if (character.status == filterParam) {
            return searchParam.some((newCharacter) => {
              return (
                character[newCharacter]
                  .toString()
                  .toLowerCase()
                  .indexOf(q.toLowerCase()) > -1
              );
            });

          
          } 
          if (character.species == filterParam) {
            return searchParam.some((newCharacter) => {
              return (
                character[newCharacter]
                  .toString()
                  .toLowerCase()
                  .indexOf(q.toLowerCase()) > -1
              );
            });

        
          }
          else if ("All" == filterParam) {
            return searchParam.some((newCharacter) => {
              return (
                character[newCharacter]
                  .toString()
                  .toLowerCase()
                  .indexOf(q.toLowerCase()) > -1
              );
            });
          }
        });
      }
    );
  }

  useEffect(() => {
    axios
      .get<CharactModel>(url)
      .then((res) => setCharacters(res.data.results))
      .catch((err) => console.log("Ooo nooo!!!" + err));
  }, []);

  return (
    <div className="ListRM ">
      {/* <div className="box">
            <h1>Filter status by:</h1>
            <button onClick={status}>Alive</button>
            <button>Unknown</button>
        </div>
        <div className="box">
            <h1>Filter species by:</h1>
            <button >Human</button>
            <button >Align</button>
        </div>     */}

      <div className="search-wrapper">
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          {/* <span className="sr-only">Search characters here</span> */}
        </label>

      </div>
      <div className="select row">
        <select
          onChange={(e) => {
            setFilterParam(e.target.value);
          }}
          className="custom-select"
          aria-label="Filter Characters By Status"
        >
          <option value="All">Filter By Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
        </select>
        <span className="focus"></span>

        <select
          onChange={(e) => {
            setFilterParam(e.target.value);
          }}
          className="custom-select"
          aria-label="Filter Characters By Species"
        >
          <option value="All">Filter By Species</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
        <span className="focus"></span>
      </div>

      
      <div className="select">
        
      </div>

      <ul className="card-grid">
        {search(characters).map((c, idx) => (
          <RMItem  key={"item"+idx} res={c} />
        ))}
      </ul>
      {/* {characters.length > 0 ? (
        <>
          {characters.map((c, idx) => (
            <RMItem res={c} />
          ))}{" "}
        </>
      ) : (
        <p>Sorry No Characters</p>
      )} */}
      {/* {characters.length>0 
            ? <>{characters.map((c, idx)=> <p key={"t"+idx}>{c.id},{c.name}</p>)} </>
            : <p>Sorry No Characters</p>} */}
    </div>
  );
}

export default ListRM;
