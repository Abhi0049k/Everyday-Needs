const url = 'https://everydayneeds-json-api.onrender.com/users';

const emailEl = document.querySelector('#email');
const passEl = document.querySelector('#password');
const formEl = document.querySelector('form');

formEl.addEventListener("submit", async function(evnt){
    evnt.preventDefault();
    let email = emailEl.value;
    let password = passEl.value;
    try{
        let res = await fetch(`${url}`);
        if(res.ok){
            res = await res.json();
            checking(res, email, password);
        }
    }catch(err){
        console.log(err);
    }
})


function checking(res, email, password){
    let id;
    let list = res.filter((el)=>{
        if(el.email==email && el.password==password){
            id = el.id
            return true;
        }
    })
    localStorage.setItem('email', email);
    localStorage.setItem('id', id);
    localStorage.setItem(`orders`, JSON.stringify([]));
    window.location.href = 'index.html'
}