import Button, { ButtonProps } from '@mui/material/Button';

interface CustomButtonProps extends ButtonProps {
  gradient?: 'to-left' | 'to-right' | 'to-top' | 'to-bottom';
}

const CustomButton: React.FC<CustomButtonProps> = ({ gradient, ...props }) => {
  const gradientStyle = {
    background: gradient
      ? `linear-gradient(${gradient.replace('to-', '')}, #42a5f5, #478ed1)`
      : undefined,
  };

  return <Button {...props} style={gradientStyle} />;
};

export default CustomButton;
