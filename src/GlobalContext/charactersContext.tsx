import React, { createContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS, GET_ALL_LOCATIONS_AND_RESIDENTS } from '../GraphQL/Queries';

export interface Character {
  id: string;
  name: string;
  status: string;
  image: string;
}

export interface ListOfCharacters extends Character{
  location: {
    name: string;
  }
}

export interface CharactersLocations extends ListOfCharacters{
  residents: {
    id: string;
    name: string;
    status: string;
  }
}

interface CharactersList {
  charactersList: ListOfCharacters[];
  locationsList: CharactersLocations[];
  page: number,
  setPage: (value: number) => void,
  listOrFavorites: "list" | "favorites",
  setListOrFavorites: (value: "list" | "favorites") => void,
  favoriteCharactere: (character: ListOfCharacters) => void,
  removeFavoriteCharactere: (character: ListOfCharacters) => void,
  favorites: ListOfCharacters[],
  setFavorites: (value: ListOfCharacters[]) => void,
  searchByCharacterName: (value: string) => void,
  searchByLocationName: (value: string) => void,
}

interface CharactersProviderProps {
  children: React.ReactNode;
}

export const CharactersContext = createContext<CharactersList>([] as unknown as CharactersList);

export function CharactersProvider (props: CharactersProviderProps)  {
  const { children } = props;
  const [imutableListOfCharacters, setImutableListOfCharacters] = useState<ListOfCharacters[]>([]);
  const [charactersList, setCharactersList] = useState<ListOfCharacters[]>([]);
  const [locationsList, setLocationsList] = useState<CharactersLocations[]>([]);
  const [listOrFavorites, setListOrFavorites] = useState<"list" | "favorites">('list');
  const [favorites, setFavorites] = useState<ListOfCharacters[]>([]);
  
  const [page, setPage] = useState<number>(1);

  useQuery(GET_ALL_CHARACTERS, {
    variables: {
      page,
    },
    onCompleted: data => {
      setImutableListOfCharacters(data.characters.results);
      setCharactersList(data.characters.results);
    }
  });

  useQuery(GET_ALL_LOCATIONS_AND_RESIDENTS, {
    onCompleted: data => {
      setLocationsList(data.locations.results);
    }
  });
 
  const favoriteCharactere = (character: ListOfCharacters) => {
    const newFavorites = [...favorites, character];
    setCharactersList(charactersList.filter(char => char.id !== character.id));
    setFavorites(newFavorites);
  };
  
  const removeFavoriteCharactere = (character: ListOfCharacters) => {
    const newFavorites = favorites.filter(favorite => favorite.id !== character.id);
    if(newFavorites.length === 0) return setCharactersList(imutableListOfCharacters)
    return setFavorites(newFavorites);
  };

  const searchByCharacterName = (value: string) => {
    const result = charactersList.filter(character => character.name.toLowerCase().includes(value.toLowerCase()));
    return setCharactersList(result);
  };

   const searchByLocationName = (value: string) => {
    if(value === "All Locations") return setCharactersList(imutableListOfCharacters);

    const result = imutableListOfCharacters.filter(character => character.location.name === value);
    return setCharactersList(result);
  };

  return <CharactersContext.Provider value={{
      charactersList,
      locationsList,
      page,
      setPage,
      listOrFavorites,
      setListOrFavorites,
      favorites,
      setFavorites,
      favoriteCharactere,
      removeFavoriteCharactere,
      searchByCharacterName,
      searchByLocationName
  }}>{children}</CharactersContext.Provider>
  
}
