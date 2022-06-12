// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

let invalidBatch = [];
/// ----- validate function -----------------------------------------------------------------------------------------------//

//* remove last no , duble every other element ,sum all elements , if element>9 => add two digits , sum up all digits including last digt , mob 10 , if return 10 || 0 true

const validateCred = (arr) => {
  let totalEvenValue = 0;
  let totalOddValue = 0;
  let lastdigit = arr.pop();
  arr.reverse();
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      if (arr[i] * 2 >= 10) {
        let evenValue = arr[i] * 2 - 9;
        totalEvenValue += evenValue;
      } else {
        let singleValue = arr[i] * 2;
        totalEvenValue += singleValue;
      }
    } else {
      totalOddValue += arr[i];
    }
  }

  console.log("full total 01   - ", totalOddValue + totalEvenValue + lastdigit);
  return (totalOddValue + totalEvenValue + lastdigit) % 10 === 0;
};

console.log("Should print true -", validateCred(valid2));

/// -----  End validate function -----------------------------------------------------------------------------------------------//

/// -----  Find Invalid card  function -----------------------------------------------------------------------------------------------//

const findInvalidCards = (cardArr) => {
  for (let i = 0; i < cardArr.length; i++) {
    let currCard = cardArr[i];
    //console.log('current card : ', currCard);
    if (!validateCred(currCard)) {
      invalidBatch.push(currCard);
    }
  }
  return invalidBatch;
};

//console.log("shouldent print anything ", findInvalidCards([valid2]));
//console.log("inavlid array - ", findInvalidCards(batch));
console.log(
  findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])
);

/// -----  End  Find Invalid card  function -----------------------------------------------------------------------------------------------//

/// ----- invalid card companies function -----------------------------------------------------------------------------------------------//

const idInvalidCardCompanies = (invalidArr) => {
  let invalidCompanies = [];
  for (let i = 0; i < invalidArr.length; i++) {
    let singleArray = invalidArr[i][0];
    switch (singleArray) {
      case 3:
        invalidCompanies.push("Amex");
        break;
      case 4:
        invalidCompanies.push("Visa");
        break;
      case 5:
        invalidCompanies.push("MasterCard");
        break;
      case 6:
        invalidCompanies.push("Discover");
        break;
      default:
        console.log("no company");
    }
  }
  return invalidCompanies;
};
/// -----  End  Find Invalid card  function -----------------------------------------------------------------------------------------------//

console.log(idInvalidCardCompanies([invalid1]));
console.log(idInvalidCardCompanies(invalidBatch));
