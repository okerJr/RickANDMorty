import React from "react";

export default function Characters(props) {
  console.log(props);
  const { characters } = props;
  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home">Home</span>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name}></img>
            </div>
            <div>
                <h3>{character.name}</h3>
                <h6>{character.status ==="Alive" ? (
                    <>
                    <span className="alive">Alive</span>
                    
                    </>
                ):(
                    <>
                    <span className="dead">Dead</span>
                    </>
                )}</h6>
                <p>
                    <span className="text-gray">Episodios: </span>
                    <span>{character.episode.length}</span>
                </p>
                <p>
                    <span className="text-gray">Especies: </span>
                    <span>{character.species}</span>
                </p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
