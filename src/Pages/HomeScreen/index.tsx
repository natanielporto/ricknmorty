import { useContext } from "react";
import { FavoritesSection } from "../../Components/FavoritesSection";
import Header from "../../Components/Header";
import InteractiveFields from "../../Components/InteractiveFields";
import { ListSection } from "../../Components/ListSection";

import { ListSelection } from "../../Components/ListSelection";
import { CharactersContext } from "../../GlobalContext/charactersContext";
import './styles.css'

export default function HomeScreen() {
  const charactersContext = useContext(CharactersContext);
  const { locationsList, listOrFavorites } = charactersContext;

  return (
    <section className="body__container">
      <Header />
      <InteractiveFields type="text" id="characterName" placeholder="Character name..." />
      <InteractiveFields type="dropdown" locationsList={locationsList} />
      <ListSelection />
      {listOrFavorites === 'list' ? <ListSection /> : <FavoritesSection />}
    </section>
  );
}
