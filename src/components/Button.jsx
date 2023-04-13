export const Button = (props) => {
  return (
    <button className="theme-btn" onClick={props.handleButtonClick}>
      {props.title}
    </button>
  );
};
