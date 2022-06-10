'use strict';

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirm-password"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if(!id.value) {
        return alert("아이디를 입력해주세요.")
    }

    if(!name.value) {
        return alert("이름을 입력해주세요.")
    }
    if(!password.value) {
        return alert("비밀번호를 입력해주세요.")
    }
    if(!confirmPassword.value) {
        return alert("비밀번호를 확인해주세요.")
    }
    if (password.value !== confirmPassword.value) {
        return alert("비밀번호가 일치하지 않습니다.")
    }

    const req = {
        id : id.value,
        name : name.value,
        password : password.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                //성공하면 이동
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("회원가입 중 에러 발생");
        });
}