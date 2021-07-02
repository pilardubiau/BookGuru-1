const IsButtonDisable = (input) => {
  return !!Object.values(input).filter((item) => item.length < 2).length;
};

export default IsButtonDisable;
