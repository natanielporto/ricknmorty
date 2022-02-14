import { useContext } from "react";
import { CharactersContext } from "../../GlobalContext/charactersContext";
import './styles.css';

export const ListSelection = () => {
  const charactersContext = useContext(CharactersContext);
  const { listOrFavorites, setListOrFavorites } = charactersContext;

  return (
    <div className="listSelection__container">
      <button onClick={() => setListOrFavorites('list')} className={`${listOrFavorites === 'list' ? 'list' : ''}`}>List</button>
      <button onClick={() => setListOrFavorites('favorites')} className={`${listOrFavorites === 'favorites' ? 'favorites' : ''}`}>Favorites</button>
    </div>
  )
}

