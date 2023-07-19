const baseServerURI = 'http://localhost:8998/';
const personalInfoEl = document.querySelector('#personalInfo');
const personalOrderEl = document.querySelector('#personalOrder');
const usernameEl = document.querySelector('#username');
const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const logoutEl = document.querySelector('#logout');
const personalInfoContainer = document.querySelector('#personalInfoContainer');
const formEl = document.querySelector('#personalInfoContainer form');
const personalOrderContainerEl = document.querySelector('#personalOrderContainer');
const mainContainer = document.querySelector('#container');
const heading = document.querySelector('#container>h1');
const userAccessContainer = document.querySelector('#userAccess');
const loginFirstEl = document.querySelector('#loginFirst');
let token;



personalInfoEl.addEventListener('click', ()=>{
    displayNone();
    personalInfoContainer.style.display = 'block';
})

personalOrderEl.addEventListener('click', ()=>{
    displayNone();
    fetchOrders();
    personalOrderContainerEl.style.display = 'block';
})

const displayNone = ()=>{
    personalInfoContainer.style.display = 'none';
    personalOrderContainerEl.style.display = 'none';
}

formEl.addEventListener('submit', (evnt)=>{
    evnt.preventDefault();
    let obj = {};
    obj.name = nameEl.value;
    obj.email = emailEl.value;
    updateUserDetails(obj);
})

const updateUserDetails = async(obj)=>{
    try{
        let res = await fetch(`${baseServerURI}users/update`, {
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(obj),
            method: 'PATCH'
        });
        if(res.ok){
            alert('UserDetails updated');
        }else{
            alert('Something went wrong');
        }
    }catch(err){
        console.log(err);
        alert('Something went wrong');
    }
}

logoutEl.addEventListener('click', async()=>{
    try{
        let res = await fetch(`${baseServerURI}users/logout`,{
            headers:{
                'Content-type': 'application/json',
                authorization: `Bearer ${token}`
            }
        })
        if(res.ok){
            alert('Logout Successful');
            localStorage.removeItem('token');
            window.location.href = 'index.html';
        }else{
            res = await res.json();
            alert(res.msg);
        }
    }catch(err){
        console.log(err);
        alert('Something went wrong');
    }
})

window.addEventListener('load', ()=>{
    token = localStorage.getItem('token');
    if(!token){
        heading.style.display = 'none';
        userAccessContainer.style.display = 'none';
        loginFirstEl.style.display = 'flex';
        return;
    }
    fetchUser();
})

const fetchOrders = async()=>{
    try{
        let list = await fetch(`${baseServerURI}orders/bookedOrders`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${token}`
            }
        });
        list = await list.json();
        displayOrders(list);
    }catch(err){
        alert('Something went wrong');
        console.log(err);
    }
}

const displayOrders = (data)=>{
    let arr = data.map((el)=>{
        return individualCard(el);
    })
    personalOrderContainerEl.innerHTML = arr.join('\n');
}

const individualCard = (el)=>{
    let str = `
    <div class='card'>
    <img src='${el.img}'> 
    <div class='right'>
    <p>${el.title}</p>
    <h3>Rs. ${el.price}</h3>
    <div>
    <span>${el.qty}</span>
    </div>
    </div>
    </div>
    `;
    return str;
}

const fetchUser = async()=>{
    try{
        let userDetails = await fetch(`${baseServerURI}users/`, {
            headers: {
                'Content-type': 'application/jsn',
                authorization: `Bearer ${token}`
            }
        });
        if(userDetails.ok){
            userDetails = await userDetails.json();
            nameEl.value = userDetails.name;
            emailEl.value = userDetails.email;
            usernameEl.innerText = userDetails.name;
        }
    }catch(err){
        alert('Something went wrong');
    }
}