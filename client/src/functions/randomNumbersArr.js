const randomNumbersArr = (arr, limit) => {
  let idArr = arr.map((item) => item.id - 1);
  if (idArr.length >= limit) {
    let randomNumbersArrLength = 0;
    let returnedArr = [];
    while (randomNumbersArrLength < 5) {
      let randomNumber = Math.floor(Math.random() * idArr.length)
      if (!returnedArr.includes(idArr[randomNumber])) {
        returnedArr.push(idArr[randomNumber]);
        randomNumbersArrLength++;
      }
    }
    return returnedArr;
  } else if (idArr.length < 5 && idArr.length > 0) {
    let randomNumbersArrLength = 0;
    let returnedArr = [];
    while (randomNumbersArrLength < idArr.length) {
      let randomNumber = Math.floor(Math.random() * idArr.length)
      if (!returnedArr.includes(idArr[randomNumber])) {
        returnedArr.push(idArr[randomNumber]);
        randomNumbersArrLength++;
      }
    }
    return returnedArr;
  } else {
    return;
  }
};

export default randomNumbersArr;
