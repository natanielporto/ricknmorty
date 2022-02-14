import { useContext } from 'react';
import { CharactersContext } from "../../GlobalContext/charactersContext";

import './styles.css';

export const ListSection = () => {
  const charactersContext = useContext(CharactersContext);
  const { charactersList, favoriteCharactere } = charactersContext;

  return (
    <>
      {charactersList.map(character => 
        (
          <div className="character__container" key={character.id} onClick={() => favoriteCharactere(character)}>
            <img src={character.image} alt="" className={`character__image ${character.status.toLowerCase()}`} />
            <div className={"character__data__container"}>
              <span className='character__name'>{character.name}</span>
              <span className={`character__status ${character.status.toLowerCase()}`}>{character.status}</span>
            </div>
          </div>
          )
        )
      }    
    </>
  )
};