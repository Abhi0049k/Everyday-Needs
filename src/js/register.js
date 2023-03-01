const url = 'https://everydayneeds-json-api.onrender.com/users';

const formEl = document.querySelector('form');
const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const passEl = document.querySelector('#password');

formEl.addEventListener('submit', async function(evnt){
    evnt.preventDefault();
    const obj = {
        name: nameEl.value,
        email: emailEl.value,
        password: passEl.value,
        order: []
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
            window.location.href = 'login.html'
        }
    }catch(err){
        console.log(err);
    }
})