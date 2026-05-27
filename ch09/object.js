// new 키워드 사용하는 것이 정상방법
//const obj = new Object()

const obj = {
    name: "이하윤",
    age: 27,
    sayHello: function (msg) {
        console.log("안녕하세요." + msg);
    },
};

obj.sayHello("테스트 입니다");

obj.name = "이하윤2" // 속성 값 수정가능 

//첫 선언 때 없던 속성인 경우, 동적으로 추가된다.
obj.gender = "female";
// delete 키워드를 사용해 속성을 지정해 삭제 할 수 있다.
delete obj.gender;

console.log(obj["name"]);
console.log(obj.name);

//대괄호 혹은 . 이요하여 프로퍼티 참조 가능
// obj["name"];
// obj.name

let id = "1234";
let pw = "5678";

const obj2 = {
    id: id,
    pw: pw,
};

console.log(obj2);
