const description = `
    퀵 정렬: 대표적인 분할 정복 알고리즘
    특정한 값을 기준으로 큰 숫자와 작은 숫자를 나눈다.
    쪼개서 각자 정렬
    O(N * logN) 
    거의 정렬된 경우, 최악일 경우 O(N^2)
    Pivot 기준값
`

function sort(numbers) {
    let result = [...numbers];
    quickSort(result, 0, numbers.length - 1);
    return result;
}

function quickSort(data, baseIndex, lastIndex) {
    if (baseIndex >= lastIndex) return;

    const pivot = data[baseIndex]
    let leftIndex = baseIndex + 1;
    let rightIndex = lastIndex;
    let temp;

    while (leftIndex <= rightIndex) {
        while (pivot >= data[leftIndex]){
            leftIndex++;
        }
        while (pivot <= data[rightIndex] && rightIndex > baseIndex) {
            rightIndex--;
        }
        if (leftIndex > rightIndex) {
            temp = data[rightIndex];
            data[rightIndex] = data[baseIndex];
            data[baseIndex] = temp;
        } else {
            temp = data[rightIndex];
            data[rightIndex] = data[leftIndex];
            data[leftIndex] = temp;
        }
    }
    quickSort(data, baseIndex, rightIndex - 1);
    quickSort(data, rightIndex + 1, lastIndex);
}

const numbers = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
console.info('input: ', numbers, 'result:', sort(numbers));