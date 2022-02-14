import { useContext } from 'react';
import { CharactersContext } from "../../GlobalContext/charactersContext";

import './styles.css'

export interface InputProps {
  type: string;
  id?: string;
  placeholder?: string;
}

export function Input(props: InputProps) {
  const charactersContext = useContext(CharactersContext);
  const { searchByCharacterName } = charactersContext;

  return (
    <div className='input__container'>
      <input className="input__character-name" onChange={event => searchByCharacterName(event.target.value)} {...props} />
    </div>
  )
}