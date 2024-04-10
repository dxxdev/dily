const randomNumbersArr = (arr) => {
  if (arr.length >= 5) {
    let randomNumbersArrLength = 0;
    let returnedArr = [];
    while (randomNumbersArrLength < 5) {
      let randomNumber = Math.floor(Math.random() * arr.length);
      if (!returnedArr.includes(randomNumber)) {
        returnedArr.push(randomNumber);
        randomNumbersArrLength++;
      }
    }
    return returnedArr;
  } else if (arr.length < 5 && arr.length > 0) {
    let randomNumbersArrLength = 0;
    let returnedArr = [];
    while (randomNumbersArrLength < arr.length) {
      let randomNumber = Math.floor(Math.random() * arr.length);
      if (!returnedArr.includes(randomNumber)) {
        returnedArr.push(randomNumber);
        randomNumbersArrLength++;
      }
    }
    return returnedArr;
  } else {
    return;
  }
};

export default randomNumbersArr;
