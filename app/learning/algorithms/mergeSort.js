const description = `
    병합 정렬: 
    반으로 나누고 계산하여 나중에 합친다.
    쪼개서 각자 정렬
    O(N * logN) 
    
`

function sort(numbers, firstIndex, lastIndex) {
    let result = [...numbers];
    if (firstIndex < lastIndex) {
        const middleIndex = Math.floor((firstIndex + lastIndex) / 2);
        // console.log(firstIndex, lastIndex, middleIndex);
        sort(result, firstIndex, middleIndex);
        sort(result, middleIndex + 1, lastIndex);
        mergeSort(result, firstIndex, lastIndex, middleIndex);
    }
    return result;
}

function mergeSort(data, firstIndex, lastIndex, middleIndex) {
    // console.log(firstIndex, middleIndex, lastIndex);
    let i = firstIndex;
    let j = middleIndex + 1;
    let k = firstIndex; 
    let sorted = [];
    console.log(i, middleIndex, j, lastIndex);
    while (i <= middleIndex && j <= lastIndex) {
        if (data[i] <= data[j]) {
            sorted[k] = data[i];
            i++;
        } else {
            sorted[k] = data[j];
            j++;
        }
        console.log({sorted});
    }
    if (i > middleIndex) {
        for (let t = j; t <= firstIndex; t++) {
            sorted[k] = data[t];
            k++;
        }
    } else {
        for (let t = i; t <= middleIndex; t++) {
            sorted[k] = data[t];
            k++;
        }
    }
    for (let t = firstIndex; t <= lastIndex; t++) {
        data[t] = sorted[t];
    }
    // console.log({data});
}


const numbers = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
sort(numbers, 0, numbers.length - 1);
console.info('input: ', numbers, 'result:', sort(numbers, 0, numbers.length - 1) );