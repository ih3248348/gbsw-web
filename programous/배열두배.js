function solution(numbers) {
    let sum = [];
    for(let i = 0; i < numbers.length; i++) {
        sum.push(numbers[i]*2)
    }
    return sum
}
console.log(solution([1, 2, 3, 4, 5]));
