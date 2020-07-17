function getSumDigits(number) {
    function iter(number, acc) {
        let lastDigit = number % 10;

        if (number === 0 && acc < 10) {
            return acc;
        }

        if (number === 0 && acc >= 10) {
            let lastDig = acc % 10;
            return iter(parseInt((acc - lastDig) / 10), lastDig);
        }
        return iter(parseInt((number - lastDigit) / 10), acc + lastDigit);
    }
    return iter(number, 0);
}
console.log(getSumDigits(29));