function findAllOddDigits(num) {
    let digit = num % 10;

    if (digit % 2 == 0) {
        return "not odd";
    }

    if (num == 0) return "odd";

    return findAllOddDigits(parseInt(num / 10));
}
console.log(findAllOddDigits(0));