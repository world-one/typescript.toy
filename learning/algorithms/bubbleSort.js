const description = `
    버블정렬: 가까이 있는 두 숫자끼리 비교하여 작은 값을 앞으로 보내기
        - 구현은 가장 쉬우나 가장 효율성이 떨어진다.
        - 가장 큰 값이 우측 끝으로 이동하게 된다.
    등차수열
    10 + 9 + 8 + ... + 1
    -> 10 * (10 + 1) / 2
    -> N * (N + 1) / 2
    -> O(N * N)
    -> O(N^2)

    선택정렬과 같은 시간복잡도를 가지고 있다.
    하지만 실제로는 선택정렬보다는 느리게 동작한다.
    계속 자리를 바꾸는 연산이 들어가기 때문에 작업하는 시간이 늘어난다.
`

function sort() {
    let sortedNumbers = [...numbers];
    for (let i = 0, len = numbers.length; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            const nextIndex = j + 1;
            if (!sortedNumbers[nextIndex]) break;

            const currentNumber = sortedNumbers[j];
            if (currentNumber > sortedNumbers[nextIndex]) {
                sortedNumbers[j] = sortedNumbers[nextIndex];
                sortedNumbers[nextIndex] = currentNumber;
            }
        }
    }

    return sortedNumbers;
}



const numbers = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
console.info('input: ', numbers, 'result:', sort(numbers));