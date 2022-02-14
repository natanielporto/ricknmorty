import { CharactersLocations } from '../../GlobalContext/charactersContext';
import { Dropdown, DropdownProps } from '../Dropdown';
import { Input, InputProps } from '../Input';

interface InteractiveFieldsProps {
  type: string;
  locationsList?: CharactersLocations[];
  id?: string;
  placeholder?: string;	
}

type InteractiveFieldsFinalProps = InputProps | DropdownProps & InteractiveFieldsProps;

export default function InteractiveFields(props: InteractiveFieldsFinalProps)  {
  if (props.type === 'dropdown') {
    return <Dropdown {...props}  />;
  }

  if (props.type === 'text') {
    return <Input {...props} />;
  }

  return <div />
}