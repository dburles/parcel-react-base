import { useModifiers } from 'mystical';
import PropTypes from 'prop-types';

const modifiers = {
  default: {
    padding: '2 3',
    border: 'none',
    borderRadius: '3px',
    fontSize: 2,
  },
  variant: {
    primary: {
      // you can reference other values defined in the theme
      color: 'white',
      backgroundColor: 'primary',
    },
    secondary: {
      color: 'text',
      backgroundColor: 'yellow',
    },
  },
};

const Button = ({ variant = 'primary', ...props }) => {
  const modifierStyle = useModifiers({ variant }, modifiers);
  return <button {...props} css={modifierStyle} />;
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button;
