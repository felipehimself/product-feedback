import * as Style from './styles';
import { H1, P, Button } from '../../shared/sharedComponents';
import NoFeedbackIcon from '../Svgs/NoFeedbackIcon';
import STYLES from '../../constants/styles';
const NoFeedBack = () => {
  return (
    <Style.Section>
      <NoFeedbackIcon />
      <H1>There is no feedback yet.</H1>
      <P maxWidth='42rem' align='center' margin='0 0 2rem 0'>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </P>
      <Button bgColor={STYLES.colors.colorPurple}>+ Add Feedback</Button>
    </Style.Section>
  );
};
export default NoFeedBack;
