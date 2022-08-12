const description = `
    삽입정렬: 각 숫자를 적절한 위에 삽입, 필요할 때만
    등차수열
    10 + 9 + 8 + ... + 1
    -> 10 * (10 + 1) / 2
    -> N * (N + 1) / 2
    -> O(N * N)
    -> O(N^2) 
    같은 시간복잡도를 가진 선택정렬과 버블정렬보다 효율적이다. 
    거의 정렬된 상태일 경우 삽입 정렬은 어떤 알고리즘보다 빠르다.
`

function sort(numbers) {
    let sortedNumbers = [...numbers];
    for (let i = 0, len = numbers.length; i < len; i++) {
        const currentNumber = sortedNumbers[i];
        for (let j = i; j > 0; j--) {
            if (sortedNumbers[j - 1] <= currentNumber) break;
            
            sortedNumbers[j] = sortedNumbers[j - 1];
            sortedNumbers[j - 1] = currentNumber;
        }
    }

    return sortedNumbers;

}


const numbers = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
console.info('input: ', numbers, 'result:', sort(numbers));