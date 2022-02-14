import React, {useContext} from 'react';
import { CharactersContext } from "../../GlobalContext/charactersContext";

import './styles.css';

export interface DropdownProps {
  type: string;
  locationsList?: {id: string, name: string}[];
}

export const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  const charactersContext = useContext(CharactersContext);
  const { searchByLocationName } = charactersContext;

  const { locationsList } = props;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    return searchByLocationName(e.target.value);
  };

  return (
    <div className='locations__container'>
      {locationsList && locationsList.length > 0 && (
        <select className="locations__select" onChange={event => handleChange(event)}>
          <option selected>All Locations</option>
          {locationsList.map((object) => (
            <option key={object.id} data-count={object.id} value={object.name}>{object.name}</option>
            ))}
        </select>
        ) 
      }
    </div>
  );
};