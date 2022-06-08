import * as Style from './styles';
import { Navigate } from '../shared/shared';
import LampIcon from '../Svgs/LampIcon';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import DropDown from '../DropDown/DropDown';

const Topbar = () => {
  const { termToFilter } = useSelector((state: RootState) => state.filterTerm);
  const { data } = useSelector((state: RootState) => state.data);

  const dataLength = () => {
    if (termToFilter === 'all') return data.length;
    return data.filter((suggestion) => suggestion.category === termToFilter)
      .length;
  };

  return (
    <Style.Topbar>
      <Style.Container>
        <Style.FlexContainer>
          <LampIcon />
          <Style.Title>{dataLength()} Suggestions</Style.Title>
        </Style.FlexContainer>
        <DropDown />
        <Navigate to='add-feedback'>+ Add Feedback</Navigate>
      </Style.Container>
    </Style.Topbar>
  );
};
export default Topbar;
