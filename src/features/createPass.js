function createPass(str, value) {
  let result = "";
  const length = str.length;
  for (let i = 1; i <= value; i++) {
    const random = Math.floor(Math.random() * length);
    result += str[random];
  }
  return result;
}

export { createPass };
