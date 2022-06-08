import { useState } from 'react';

import DropDownIcon from '../Svgs/DropDownIcon';
import { dropdownOptions } from '../../utils/data';
import { useDispatch } from 'react-redux';
import { sortData } from '../../store/slices/dataSlice';
import * as Style from './style';
import CheckIcon from '../Svgs/CheckIcon';

const DropDown = () => {
  const [itemSelected, setItemSelected] = useState('most upvotes');
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const dispatch = useDispatch();

  const handleDispatch = (option: string) => {
    setIsOpenDropdown(false);
    setItemSelected(option);
    dispatch(sortData(option));
  };

  return (
    <Style.DropdownContainer>
      <Style.Button onClick={() => setIsOpenDropdown((prev) => !prev)}>
        <Style.Span>Sort by:</Style.Span>
        <Style.Span capitalize='capitalize' weight='bold'>
          {itemSelected}
        </Style.Span>
        <DropDownIcon isOpen={isOpenDropdown} />
      </Style.Button>

      {isOpenDropdown && (
        <Style.Ul>
          {dropdownOptions.map((option) => {
            return (
              <Style.Li key={option}>
                <Style.ButtonItem
                  className={itemSelected === option ? 'active' : undefined}
                  onClick={() => handleDispatch(option)}
                >
                  {option} {itemSelected === option && <CheckIcon />}
                </Style.ButtonItem>
              </Style.Li>
            );
          })}
        </Style.Ul>
      )}
    </Style.DropdownContainer>
  );
};
export default DropDown;
