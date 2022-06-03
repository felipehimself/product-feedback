import * as Style from './styles';
import STYLES from '../../constants/styles';
import { Button } from '../../shared/sharedComponents';
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
          <Style.H2>{dataLength()} Suggestions</Style.H2>
        </Style.FlexContainer>
        <DropDown />
        <Button bgColor={STYLES.colors.colorPurple}>+ Add Feedback</Button>
      </Style.Container>
    </Style.Topbar>
  );
};
export default Topbar;
