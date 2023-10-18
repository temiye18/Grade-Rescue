import ButtonStyled from "./styles";

const Button = ({ type, onClick, className, loading = false, disabled }) => {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    ></ButtonStyled>
  );
};

export default Button;
