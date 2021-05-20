import PropTypes from 'prop-types';

const Button = ({ children, color = 'blue', ...props }) => {
  return (
    <button
      {...props}
      css={{
        padding: '3 4',
        textAlign: 'left',
        whiteSpace: 'nowrap',
        borderWidth: 0,
        borderRadius: '3',
        color: `${color}.100`,
        fontSize: 'base',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        backgroundColor: `${color}.500`,
        boxShadow: 'md',
        ':hover:not(:disabled)': {
          backgroundColor: `${color}.400`,
        },
        ':disabled': {
          opacity: 0.5,
        },
      }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
