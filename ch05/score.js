const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("점수를 입력하세요. : ", function (score) {
     if (score > 100||score <0){
        console.log("범위를 벗어났습니다");
    }else if (91<=score ){
    console.log("A학점");
    }else if (81<=score){
    console.log("B학점");
    }else if (71<=score ){
    console.log("C학점");
    }else if (61<=score){
    console.log("D학점");
    }else{
    console.log("F학점");
    }
    rl.close()
    

});


