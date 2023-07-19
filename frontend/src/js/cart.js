const emptyCartEl = document.querySelector('#noOrder');
const itemCount = document.querySelector('#count');
const containerEl = document.querySelector('#productSide');
const loginEl = document.querySelector('#loginFirst');
const grandEl = document.querySelector('#grandtotal');
const totalEl = document.querySelector('#total');
const discountEl = document.querySelector('#totalDiscount');
const checkoutBtn = document.querySelector('#checkout');
const serverURI = 'https://shy-red-rabbit-sari.cyclic.app/orders/'
let token;

checkoutBtn.addEventListener('click', async ()=>{
    try{
        let res = await fetch(`${serverURI}checkout`, {
            headers:{
                'Content-type': 'application/json',
                authorization: `Bearer ${token}`
            },
            method: 'PATCH'
        })
        if(res.ok){
            res = await res.json();
            alert(res.msg);
            window.location.href = 'index.html';
        }else{
            res = await res.json();
            alert(res.msg);
        }
    }catch(err){
        alert('Something went wrong!!!')
    }
})

window.addEventListener('load', ()=>{
    token = localStorage.getItem('token') || '';
    if(!token){
        loginEl.style.display = 'flex';
        return;
    }
    fetchAndRender();
})

const fetchAndRender = async()=>{
    try{
        let list = await fetch(serverURI, {
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
    if(data.length===0){
        emptyCartEl.style.display='flex';
        return;
    }
    let total = 0;
    let count = 0;
    let discount = 0;
    let arr = data.map((el)=>{
        total+= el.price * el.qty;
        count+= el.qty;
        discount+=el.discount * el.qty;
        return individualCard(el);
    })
    containerEl.innerHTML = arr.join('\n');
    itemCount.innerText = count;
    grandEl.innerText = 'Rs. '+total;
    totalEl.innerText = 'Rs. '+total;
    discountEl.innerText = 'Rs. '+discount;
    let addIncre = document.querySelectorAll('.incre');
    let addDecre = document.querySelectorAll('.decre');
    let removeBtn = document.querySelectorAll('.removeEl');
    removeBtn.forEach((el)=>{
        el.addEventListener('click', (evnt)=>{
            const id = evnt.target.getAttribute('data-id');
            removeItem(id);
        })
    })
    addIncre.forEach((el)=>{
        el.addEventListener('click', (evnt)=>{
            const id = evnt.target.getAttribute('data-id');
            increQty(id);
        })
    })
    addDecre.forEach((el)=>{
        el.addEventListener('click', (evnt)=>{
            const id = evnt.target.getAttribute('data-id');
            decreQty(id);
        })
    })
}

const removeItem = async (id)=>{
    try{
        let res = await fetch(`${serverURI}${id}`,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${token}`
            }
        })
        if(res.ok){
            fetchAndRender();
        }else{
            res = await res.json();
            alert(res.msg);
        }
    }catch(err){
        console.log(err);
        alert('Try Again');
    }
}

const increQty = async (id)=>{
    try{
        let res = await fetch(`${serverURI}/increQty/${id}`,{
            method:'PATCH',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${token}`
            }
        });
        if(res.ok){
            fetchAndRender();
        }else{
            res = await res.json();
            alert(res.msg)
        }
    }catch(err){
        console.log(err);
        alert('Try Again Later');
    }
}
const decreQty = async (id)=>{
    try{
        let res = await fetch(`${serverURI}decreQty/${id}`,{
            method:'PATCH',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${token}`
            }
        });
        if(res.ok){
            fetchAndRender();
        }else{
            res = await res.json();
            alert(res.msg)
        }
    }catch(err){
        console.log(err);
        alert('Try Again Later');
    }
}


const individualCard = (el)=>{
    let str = `
    <div class='card'>
    <img src='${el.img}'> 
    <div class='right'>
    <p>${el.title}</p>
    <h3>Rs. ${el.price}</h3>
    <div>
    <div>
    <button class='decre' data-id='${el._id}'>
    <img data-id='${el._id}' src="https://images.dailyobjects.com/marche/icons/minus-1.png?tr=cm-pad_resize,v-2,w-14,dpr-1">
    </button>
    <span>${el.qty}</span>
    <button class='incre' data-id='${el._id}'>
    <img data-id='${el._id}' src="https://images.dailyobjects.com/marche/icons/plus.png?tr=cm-pad_resize,v-2,w-14,dpr-1">
    </button>
    </div>
    <img class='removeEl' src='https://images.dailyobjects.com/marche/icons/bin.png?tr=cm-pad_resize,v-2,w-20,dpr-1' data-id='${el._id}'>
    </div>
    </div>
    </div>
    `;
    return str;
}
