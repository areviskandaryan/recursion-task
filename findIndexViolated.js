function findIndexViolated(arr, n) {
    if (n == arr.length - 1) return -1;

    if (arr[n + 1] < arr[n]) {
        return n + 1;
    }
    return findIndexViolated(arr, n + 1);
}
console.log(findIndexViolated([2, 12, -15, -48, -64], 0));