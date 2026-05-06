// draw(n) 함수를 작성하시오.
function draw(number) {
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            str += "*";
            //console.log("*" * j);// js에서는 문자열에 곱셈
        }
        console.log(str);
    }
}

console.log(draw(5));
// *
// **
// ***
// ****
// *****

