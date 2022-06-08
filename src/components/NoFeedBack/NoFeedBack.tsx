import * as Style from './styles';
import { H1, P, Navigate } from '../shared/shared';
import NoFeedbackIcon from '../Svgs/NoFeedbackIcon';

const NoFeedBack = () => {
  return (
    <Style.Section>
      <NoFeedbackIcon />
      <H1>There is no feedback yet.</H1>
      <P maxWidth='42rem' align='center' margin='0 0 2rem 0'>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </P>
      <Navigate to='add-feedback'>+ Add Feedback</Navigate>
    </Style.Section>
  );
};
export default NoFeedBack;
