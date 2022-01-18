const description = `
    퀵 정렬: 대표적인 분할 정복 알고리즘
    특정한 값을 기준으로 큰 숫자와 작은 숫자를 나눈다.
    쪼개서 각자 정렬
    O(N * logN) 
    최악일 경우 O(N^2)
    Pivot 기준값
`

function sort(numbers) {
   quickSort(numbers, 0, numbers.length - 1);
   return numbers;
}

function quickSort(data, start, end) {
    if (start >= end) return;

    let i = start + 1;
    let j = end;
    let temp;

    while (i <= j) {
        while (data[i] <= data[start]){
            i++
        }
        while (data[j] >= data[start] && j > start) {
            j--;
        }
        if (i > j) {
            temp = data[j];
            data[j] = data[start];
        } else {
            temp = data[j];
            data[j] = data[i];
            data[i] = temp;
        }
    }

    quickSort(data, start, j - 1);
    quickSort(data, j + 1, end);
}

const numbers = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
console.info('input: ', numbers, 'result:', sort(numbers));