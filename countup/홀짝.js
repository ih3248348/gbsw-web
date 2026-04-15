function solution(num_list) {
    let count = 0; // 짝수의 개수

    for(let i = 0; i<num_list.length; i++){
        if (num_list[i]%2 === 0) {
            //짝수인 경우
            count++; 
        }
    }

    return [count, num_list.length - count]
}

console.log(solution([1, 3, 5, 7]));