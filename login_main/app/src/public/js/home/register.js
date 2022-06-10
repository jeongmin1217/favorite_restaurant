'use strict';

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirm-password"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

async function register() {
    if(!id.value) {
        return alert("아이디를 입력해주세요.")
    }
<<<<<<< HEAD

=======
>>>>>>> release_v0.2.0
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
<<<<<<< HEAD

=======
    
>>>>>>> release_v0.2.0
    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
    };

<<<<<<< HEAD
    console.log("id : ", req.id);
    try {
        const response = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req),
        });
        console.log("테스트 : ", response);
    } catch(e) {
        console.log(e);
    }
=======
    fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            location.href = "/login";
          } else {
            if (res.err) return alert(res.err);
            alert(res.msg);
          }
        })
        .catch((err) => {
          console.error("회원가입 중 에러 발생");
        });
    
    // try {
    //     const response = await fetch("/register", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(req),
    //     });
    //     console.log("테스트 : ", response);
    // } catch(e) {
    //     console.log(e);
    // }
>>>>>>> release_v0.2.0

}