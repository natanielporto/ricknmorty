import { useContext } from 'react';
import { CharactersContext } from "../../GlobalContext/charactersContext";

import './styles.css';

export const FavoritesSection = () => {
  const charactersContext = useContext(CharactersContext);
  const { favorites, removeFavoriteCharactere } = charactersContext;

  return (
    <>
      {favorites.length > 0 ? (favorites.map(character => 
        (
          <div className="character__container" key={character.id} onClick={() => removeFavoriteCharactere(character)}>
            <img src={character.image} alt="" className={`character__image ${character.status.toLowerCase()}`} />
            <div className={"character__data__container"}>
              <span className='character__name'>{character.name}</span>
              <span className={`character__status ${character.status.toLowerCase()}`}>{character.status}</span>
            </div>
          </div>
        ))
          ) : (
          <span className="character__no-favorites">No favorites selected</span>
        )
      }    
    </>
  )
};