function solution(my_string, letter) {
    var answer='';
    //string도 배열처럼 인덱스 접근과 길이 체크 가능
    for (let i =0; i< my_string.length; i++) {
        if(my_string[i] !== letter) {
            answer += my_string[i]
        }
    }
    return answer;
}
console.log(solution('abcdef', 'f'))

//String.replace(찾을 문자, 변환할 문자) - 문자를 최초 1회 찾고 변환한 뒤 종료한다.
//String.replaceAll