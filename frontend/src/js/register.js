const url = 'http://localhost:8998/users/register';

const formEl = document.querySelector('form');
const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const passEl = document.querySelector('#password');

formEl.addEventListener('submit', async function(evnt){
    evnt.preventDefault();
    const obj = {
        name: nameEl.value,
        email: emailEl.value,
        password: passEl.value
    }
    try{
        let res = await fetch(url, {
            headers:{
                'Content-Type': 'application/json'
            }, 
            method: 'POST',
            body: JSON.stringify(obj)
        })
        if(res.ok){
            res = await res.json();
            alert(res.msg);
            window.location.href = 'login.html'
        }
    }catch(err){
        res = await res.json();
        alert(res.msg);
    }
})