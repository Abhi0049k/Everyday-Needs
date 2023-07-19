const title = document.querySelector('title');
const serverURI = 'http://localhost:8998';
const imgContainer = document.querySelector('#ProductContainer .left img');
const rightContainer = document.querySelector('#ProductContainer .right');
const recentContainer = document.querySelector('#recentlyViewed');

let token;
let recentItem;
window.addEventListener('load', () => {
    token = localStorage.getItem('token') || '';
    let productId = localStorage.getItem('productId');
    recentItem = JSON.parse(localStorage.getItem('recent'))||[];
    fetchData(productId);
    displayRecentViewed(recentItem);
})

const displayRecentViewed=(data)=>{
    if(data.length===0)
    return document.querySelector('.recentContainer').style.display='none'
    let arr = data.map((el)=> individualCard(el));
    recentContainer.innerHTML = arr.join('\n');
    let allATC = document.querySelectorAll('.atc');
    allATC.forEach((el)=>{
        el.addEventListener('click', (evnt)=>{
            if(token){
                addtoCart(evnt.target.getAttribute('data-id'));
                recentItem = recentItem.filter((el)=>el._id!==evnt.target.getAttribute('data-id'));
                displayRecentViewed(recentItem);
                localStorage.setItem('recent', JSON.stringify(recentItem));
            }else{
                alert('Login First');
            }
        })
    })
    let allDelete = document.querySelectorAll('.removeRecent');
    allDelete.forEach((el)=>{
        el.addEventListener('click', (evnt)=>{
            recentItem = recentItem.filter((el)=> el._id!==evnt.target.getAttribute('data-id'));
            displayRecentViewed(recentItem);
            localStorage.setItem('recent', JSON.stringify(recentItem))
        })
    })
}

const addtoCart = async (id)=>{
    try{
        let res = await fetch(`${serverURI}/orders/placeOrder`, {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify({productId: id})
        })
        if(res.ok){
            res = await res.json();
            alert('Product added to the cart');
        }else{
            res = await res.json();
            alert(res.msg);
        }
    }catch(err){
        alert('Something Went Wrong!, Try Again');
        console.log(err);
    }
}

const individualCard = (el)=>{
    let str = `
    <div>
    <img src='${el.img}'>
    <p>${el.title}</p>
    <h5>Rs. ${el.price}</h5>
    <button class='atc' data-id='${el._id}'>Add To Cart</button>
    <button style='margin-top: 5px; background-color: #F44336' data-id='${el._id}' class='removeRecent'><img src='https://images.dailyobjects.com/marche/icons/bin.png?tr=cm-pad_resize,v-2,w-20,dpr-1'></button>
    </div>
    `;
    return str;
}

const fetchData = async (id) => {
    try {
        let info = await fetch(`${serverURI}/products/${id}`)
        info = await info.json();
        displayInfo(info);
    } catch (err) {
        console.log(err);
        alert('Something went wrong, Refresh the page');
    }
}


const displayInfo = (el) => {
    title.innerHTML = 'Everyday Needs | '+ el.category.toUpperCase();
    imgContainer.src = el.img[0];
    let count = 0;
    let leftBtn = document.querySelector('#ProductContainer .left .leftbtn')
    leftBtn.addEventListener('click', () => {
        count--;
        imgContainer.src = el.img[Math.abs(count % el.img.length)];
    })
    let rightBtn = document.querySelector('#ProductContainer .left .rightbtn');
    rightBtn.addEventListener('click', () => {
        count++;
        imgContainer.src = el.img[Math.abs(count % el.img.length)];
    })
    let info = productDetails(el);
    rightContainer.innerHTML = info;
    let addCart = document.querySelector('#addToCart');
    addCart.addEventListener('click', (evnt)=>{
        if(!token){
            return alert('Login First');
        }else{
            addtoCart(evnt.target.getAttribute('data-id'));
        }
    })
}


const productDetails = (el) => {
    let str = `
    <p id='title'>${el.title}</p>
    <div class='pricingSection'>
    <h1><span id='price'>Rs. ${el.price}</span><del id='deleted'>${el.deleteValue}</del></h1>
    <p>Inclusive of all taxes</p>
    </div>
    <p>Extra 10% cashback upto INR 500 with <img src='https://images.dailyobjects.com/marche/icons/zest-updated.png?tr=cm-pad_resize,v-2,h-18,dpr-1'></p>
    <button id='addToCart' data-id='${el._id}'>ADD TO CART</button>
    <div class='disSection'>
    <i class='fa-solid fa-tag'></i>
    <h4>${el.offer}</h4>
    </div>
    <div class="checking">
    <input type="text" placeholder="Enter Pincode To Check Delivery">
    <button>CHECK</button>
    </div>
    <div class="productInfo">
    <div class="first">
    <span>Product Details</span> 
    <i class="fa-solid fa-arrow-right"></i>
    </div>
    <div class="second">
    <span>Specifications</span> 
    <i class="fa-solid fa-arrow-right"></i>
    </div>
    <div class="third">
    <span>Delivery & Returns</span> 
    <i class="fa-solid fa-arrow-right"></i>
    </div>
    </div>
    `;
    return str;
}
