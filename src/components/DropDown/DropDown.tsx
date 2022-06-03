import * as Style from './style';
import DropDownIcon from '../Svgs/DropDownIcon';
import { dropdownOptions } from '../../utils/data';
import { useSelector, useDispatch } from 'react-redux';
import { sortData } from '../../store/slices/dataSlice';

import {
  changeDropDownItem,
  toggleDropDown,
} from '../../store/slices/dropDownSlice';

import { RootState } from '../../store/store';
import CheckIcon from '../Svgs/CheckIcon';

const DropDown = () => {
  const { dropItemSelected, isOpen } = useSelector(
    (state: RootState) => state.dropDownSelected
  );

  const dispatch = useDispatch();

  const handleDispatch = (option: string) => {
    dispatch(changeDropDownItem(option));
    dispatch(sortData(option));
  };

  return (
    <Style.Container>
      <Style.Button onClick={() => dispatch(toggleDropDown(null))}>
        <Style.Span>Sort by:</Style.Span>
        <Style.Span capitalize='capitalize' weight='bold'>
          {dropItemSelected}
        </Style.Span>
        <DropDownIcon isOpen={isOpen} />
      </Style.Button>

      {isOpen && (
        <Style.Ul>
          {dropdownOptions.map((option) => {
            return (
              <Style.Li key={option}>
                <Style.ButtonItem
                  className={dropItemSelected === option ? 'active' : undefined}
                  onClick={() => handleDispatch(option)}
                >
                  {option} {dropItemSelected === option && <CheckIcon />}
                </Style.ButtonItem>
              </Style.Li>
            );
          })}
        </Style.Ul>
      )}
    </Style.Container>
  );
};
export default DropDown;
