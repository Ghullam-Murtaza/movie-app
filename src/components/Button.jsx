export const Button = () => {
  const handleClick = (text) => {
    alert(text);
  };

  

  return <button onClick={()=> handleClick("Sending data now...")}>Send Now</button>;
};
