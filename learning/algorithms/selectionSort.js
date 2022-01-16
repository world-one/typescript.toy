const description = `
    선택정렬: 가장 작은걸 선택해서 앞으로 보낸다.
        - 느리고, 비효율적인 알고리즘 중 하나
    등차수열
    10 + 9 + 8 + ... + 1
    -> 10 * (10 + 1) / 2
    -> N * (N + 1) / 2
    -> O(N * N)
    -> O(N^2)
`

function sort(numbers) {
    let sortedNumbers = [...numbers];
    for (let i = 0, len = numbers.length; i < len; i++) {
        let min, minIndex;
        for (let j = i; j < len; j++) {
            const foundNumber = sortedNumbers[j];
            if (min > foundNumber || !min) {
                min = foundNumber;
                minIndex = j;
            }
        }

        sortedNumbers[minIndex] = sortedNumbers[i];
        sortedNumbers[i] = min;
    }

    return sortedNumbers;

}


const numbers = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
console.info('input: ', numbers, 'result:', sort(numbers));