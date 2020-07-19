/**
 * @description check whether all digits are odd or not
 * @param {number}
 * @return {boolean} - true or false
 */

const findAllOddDigits = (number) => {
    let lDigit = number % 10;

    if (lDigit % 2 === 0) {
        return false;
    }

    if (number - lDigit === 0) {
        return true;
    }

    return findAllOddDigits((number - lDigit) / 10);
};

console.log(findAllOddDigits(771133));