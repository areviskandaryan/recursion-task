const concatArrays = (arr) => {
    function iter(arr, acc) {
        if (arr.length === 0) {
            return acc;
        }
        const [first, ...rest] = arr;

        if (Array.isArray(first)) {
            return iter([...first, ...rest], acc);
        }

        return iter(rest, [...acc, first]);
    }
    return iter(arr, []);
};
console.log(concatArrays([1, [3, 4, [1, 2]], 10]));