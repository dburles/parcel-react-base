/** @jsx jsx */
import { jsx } from 'theme-ui';

const Button = props => {
  return (
    <button
      {...props}
      sx={{
        py: 2,
        px: 3,
        border: 'none',
        borderRadius: 3,
        fontSize: 2,
        variant: 'buttons.primary',
      }}
    />
  );
};

export default Button;
