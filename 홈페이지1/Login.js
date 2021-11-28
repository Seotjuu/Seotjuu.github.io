
sessionStorage.setItem("seotju123", "1234");
console.log(sessionStorage);

var a = "seotju123";
var b = sessionStorage.seotju123;


function check() {
    if(id.value == "" && pw.value == ""){
        alert("로그인 정보를 입력해주세요 !!");
    }

    else if(pw.value == ""){
        alert("비밀번호를 입력해주세요 !!");
        location.reload;
    }

    else if(id.value == ""){
        alert("아이디를 입력해주세요 !!");
        location.reload;
    }
    
    else if(id.value == a && pw.value == b){
        alert("로그인 성공 !!");
        location.href = 'index.html';
        
    }

    else{
        alert("아이디 및 비밀번호를 다시 입력해주세요 !!");
    }
}
