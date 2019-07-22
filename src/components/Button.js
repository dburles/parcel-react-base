/** @jsx jsx */
import { jsx } from 'theme-ui';

const Button = props => {
  return (
    <button
      sx={{
        py: 2,
        px: 3,
        border: 'none',
        borderRadius: 3,
        fontSize: 2,
        variant: 'buttons.primary',
      }}
      {...props}
    />
  );
};

export default Button;
