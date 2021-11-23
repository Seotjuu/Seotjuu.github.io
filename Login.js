var a = "seotju123";
var b = '1234';

function check() {
    if (id.value == "" && pw.value == "") {
        alert("로그인 정보를 입력해주세요 !!");
    } else if (pw.value == "") {
        alert("비밀번호를 입력해주세요 !!");
        location.reload;
    } else if (id.value == "") {
        alert("아이디를 입력해주세요 !!");
        location.reload;
    } else if (id.value == a && pw.value == b) {
        alert("로그인 성공 !!");
        sessionStorage.id = a, sessionStorage.pw = b;
        console.log(sessionStorage);
        location.reload();
    } else {
        alert("아이디 및 비밀번호를 다시 입력해주세요 !!");
    }
}

_wresize();

function _wresize() {
    if (window.outerWidth < 600) {
        document.querySelector('.Header-box').classList.add('mobile-header');
        document.querySelector('.Footer-box').classList.add('mobile');
        document.querySelector('.Header-A').classList.add('mobile');
        document.querySelector('.Header-B').classList.add('mobile');
    } else {
        document.querySelector('.Header-box').classList.remove('mobile-header');
        document.querySelector('.Footer-box').classList.remove('mobile');
        document.querySelector('.Header-A').classList.remove('mobile');
        document.querySelector('.Header-B').classList.remove('mobile');
    }
}