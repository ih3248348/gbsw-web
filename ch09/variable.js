// var는 함수 스코프
var a = 10;

function test() {
    if (true) {
        var b = 5;
    }
    // var는 함수 스코프로, 해당 함수 내에서 어디서든 참조가 가능하다.
    console.log(b); // 변수 참조 가능 
}

function test() {
    if (true) {
        let c = 5;
        const d = 5;
    }
}
