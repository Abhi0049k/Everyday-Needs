const url = 'https://shy-red-rabbit-sari.cyclic.app/users/login';

const emailEl = document.querySelector('#email');
const passEl = document.querySelector('#password');
const formEl = document.querySelector('form');

formEl.addEventListener("submit", async function(evnt){
    evnt.preventDefault();
    let email = emailEl.value;
    let password = passEl.value;
    try{
        let res = await fetch(`${url}`,{
            method: 'POST', 
            body: JSON.stringify({email, password}),
            headers: {
                'Content-type': 'application/json'
            }
        });
        if(res.ok){
            res = await res.json();
            localStorage.setItem('token', res.token);
            alert(res.msg);
            window.location.href = 'index.html';
        }else{
            res = await res.json();
            alert(res.msg);
        }
    }catch(err){
        alert('Something went wrong, Try Again later')
    }
})