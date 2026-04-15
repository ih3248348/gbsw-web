function solution(numbers) {
    var answer = 0;
    
    numbers.sort((a, b) => b - a );//{식}
    // 이 식에서 만약 양수 -> b를 a보다 앞에 위치시킨다.
    // 이 식에서 만약 0 -> 아무것도 안한다.
    // 이 식에서 만약 음수 -> a보다 b보다 앞에 위치 시킨다.
    
    return numbers[0] * numbers[1];
}