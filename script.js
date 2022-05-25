'use strict';

//variables
const inputArea = document.querySelector('.field-area');
const fullName = document.querySelector('.full-name');
const dateOfBirth = document.querySelector('.d-o-b');
const calcBtn = document.querySelector('.calc-btn');
const restartBtn = document.querySelector('.restart-btn');
const alert = document.querySelector('.alert-window');
const nameDesign = document.querySelector('.entire-name-text');
const result = document.querySelector('.result');
const resultText = document.querySelector('.result-text');
const nameDesignText1 = document.querySelector('.name-text');
const nameDesignText2 = document.querySelector('.age-text');

/// App working on console
// const ageCalc = {
//   ageDisp: function (name) {
//     const call = this.age(ageArr);
//     console.log(`${name}, you're ${call} years old`);
//   },
//   age: function (birthYear) {
//     let currentYear = new Date();
//     return currentYear.getFullYear() - birthYear;
//   },
// };

// const nameArr = prompt("What's Your Name?");
// const ageArr = Number(prompt("What's Your Birth Year?"));
// ageCalc.ageDisp(nameArr);
// ageCalc.age(ageArr);

const dispCurrentYear = function () {
  let currentYear = new Date();
  dateOfBirth.value = currentYear.getFullYear();
};
dispCurrentYear();
//display the age function
const displayMessage = function (message) {
  resultText.textContent = message;
};

const checkAge = function () {
  let nameDetails = fullName.value;
  let ageDetails = Number(dateOfBirth.value);
  // console.log(details, typeof details);

  if (!nameDetails || !ageDetails) {
    alert.classList.remove('hidden');
    nameDesignText1.style.padding = '25px 15% 20px 0px';
    nameDesignText2.style.padding = '0px';
  } else if (nameDetails && ageDetails) {
    alert.classList.add('hidden');
    inputArea.classList.add('hidden');
    result.classList.remove('hidden');
    nameDesignText1.style.padding = '40px 15% 40px 0px';
    nameDesignText2.style.padding = '20px 0 0px 0';
    calcBtn.classList.add('hidden');
    restartBtn.classList.remove('hidden');

    const ageCalc = function () {
      //function to add both the age and the name together
      const nameDisp = function (name) {
        const call = ageDisp(ageDetails);
        // console.log(`${name}, you're ${call} years old`);
        displayMessage(`${name}, You're ${call} Years Old`);
        result.style.padding = '0 30px 0 0';
        if (ageDisp(ageDetails) === 0) {
          displayMessage(`${name}, You're A Less Than A Year Old`);
        }
      };
      //function to calculate the age
      const ageDisp = function (birthYear) {
        let currentYear = new Date();
        return currentYear.getFullYear() - birthYear;
      };
      nameDisp(nameDetails);
      ageDisp(ageDetails);
    };
    ageCalc();
  }
};
calcBtn.addEventListener('click', checkAge);
restartBtn.addEventListener('click', function () {
  fullName.value = '';
  dateOfBirth.value = '';
  inputArea.classList.remove('hidden');
  result.classList.add('hidden');
  restartBtn.classList.add('hidden');
  calcBtn.classList.remove('hidden');
  dispCurrentYear();
});

//you stopped in your calculation
