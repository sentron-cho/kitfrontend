// import req from "./00_request";
// const req = require("./00_request");

window.onload = function() {
    // console.log("안녕하세요")
    // const item = request.login("sentron1");
    // if(item) console.log(item)
    // else console.log("아이디가 없습니다.")
}

const login = function() {
    const id = document.getElementById("email");
    const pwd = document.getElementById("pass");

    console.log(id.value, pwd.value);
    if(!id.value || !pwd.value) {
        alert("아이디 또는 비밀번호를 입력하세요.");
    } else {
        const item = request.login(id.value, pwd.value);
        if(item) {
            console.log("로그인 성공");
            window.location.href = "./02_facebook_main.html";
        } else {
            alert("아이디 또는 비밀번호를 찾을 수 없습니다.");
        }
    }

}