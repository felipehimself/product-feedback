import { NavigateLink } from './styles';
import ArrowLeftIcon from '../Svgs/ArrowLeftIcon';

const Goback: React.FC<{ to: string; color?: string; txtColor?: string }> = ({
  to,
  color,
  txtColor,
}) => {
  return (
    <NavigateLink style={{ color: txtColor }} to={to}>
      <ArrowLeftIcon color={color} />
      Go Back
    </NavigateLink>
  );
};
export default Goback;
