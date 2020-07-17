const removeFirstElem = (arr) => {
    function iter(arr, acc) {
        if (arr.length === 0 || arr.length === 1) {
            return [];
        }

        const [first, ...rest] = arr;

        if (acc.length === arr.length) {
            return arr;
        }

        return iter(rest, rest);
    }
    return iter(arr, []);
};

console.log(removeFirstElem([6, 78, "n", 0, 1]));