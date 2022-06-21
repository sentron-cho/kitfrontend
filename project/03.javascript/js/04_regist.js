window.onload = function() {
    // 화면의 element들이 모두 로딩된 후 호출된다.
    // 일반적으로 document 안의 element 조작을 위해서는
    // 이것이 호출 된 후에 작업을 진행한다.
}

const regist = function() {
    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const year = document.querySelector("#year");
    const month = document.querySelector("#month");
    const day = document.querySelector("#day");

    const gender = document.querySelectorAll(".gender");

    console.dir({firstname: firstname.value, lastname: lastname.value, email: email.value, password: password.value, year: year.value, month: month.value, day: day.value});
    console.dir(gender)

    let type = '';
    for (const radio of gender) {
        if(radio.checked) {
            console.dir(radio)
            type = radio.labels[0].textContent
        }
    }

    // 각각의 데이터들에 대하여 validation을 체크하자..
    if(!lastname.value) return alert('성을 입력하세요.');
    if(!firstname.value) return alert('이름을 입력하세요.');
    if(!password.value) return alert('비밀번호를 입력하세요.');
    if(!type) return alert('성별을 입력하세요.');

    // 비밀번호를 8자에서 16자 이내로 제한한다.
    if(password.value.length < 8 || password.value.length > 16 ) return alert('비밀번호는 8~16 문자로 입력하세요.');
    
    // 정상적으로 회원가입이 되었을 경우....
    const text = lastname.value + firstname.value + "(" + type + ")" + "님 회원가입을 축하합니다.";
    alert(text);

    const json = {
        name: lastname.value+firstname.value, 
        email: email.value, 
        password: password.value, 
        year: year.value, 
        month: month.value, 
        day: day.value,
        gender: type
    }

    request.regist(json)

    // 0.5(500ms)초후 로그인 화면으로 이동한다.
    // setTimeout(() => {
    //     window.location.href = './01_facebook_index.html';
    // }, 500);
}