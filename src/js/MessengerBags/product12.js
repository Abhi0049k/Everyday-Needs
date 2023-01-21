let info = {
    "title": "Khaki Beige City Compact Fleet Messenger Bag",
            "price": 3499,
            "category": "messengerbag",
            "offer": "FREE DUFFLE BAG/ WALLET",
            "deleteValue": 4999,
            "type": "fleet",
            "img": [
                "https://images.dailyobjects.com/marche/product-images/undefined/undefined-images/Khaki-Beige-City-Compact-Messenger-Bag-7.jpg?tr=cm-pad_crop,v-2,w-170,h-210,dpr-1",
                "https://images.dailyobjects.com/marche/product-images/undefined/undefined-images/Khaki-Beige-City-Compact-Messenger-Bag.png?tr=cm-pad_resize,v-2,w-384,h-644,dpr-1",
                "https://images.dailyobjects.com/marche/product-images/undefined/undefined-images/Khaki-Beige-City-Compact-Messenger-Bag-1.png?tr=cm-pad_resize,v-2,w-384,h-644,dpr-1",
                "https://images.dailyobjects.com/marche/product-images/undefined/undefined-images/Khaki-Beige-City-Compact-Messenger-Bag-7.jpg?tr=cm-pad_crop,v-2,w-384,h-644,dpr-1",
                "https://images.dailyobjects.com/marche/product-images/undefined/undefined-images/Khaki-Beige-City-Compact-Messenger-Bag-8.jpg?tr=cm-pad_crop,v-2,w-384,h-644,dpr-1"
            ],
    "qty": 1
};


let imgcontainer = document.querySelector('#ProductContainer .left img');
imgcontainer.src = info.img[0];
let count = 0;
let leftbtn = document.querySelector('#ProductContainer .left .leftbtn');
leftbtn.addEventListener('click', function () {
    count--;
    imgcontainer.src = info.img[Math.abs(count % info.img.length)];
})

let rightbtn = document.querySelector('#ProductContainer .left .rightbtn');
rightbtn.addEventListener('click', function () {
    count++;
    imgcontainer.src = info.img[Math.abs(count % info.img.length)];
})

let cartItem = JSON.parse(localStorage.getItem('cart')) || [];

let addToCart = document.querySelector('#ProductContainer .right > button');
addToCart.addEventListener('click', function () {
    if (finding(cartItem, info) === true) {
        poup('Already added')
    } else if (finding(cartItem, info) === false) {
        cartItem.push(info);
        localStorage.setItem('cart', JSON.stringify(cartItem));
        poup('Added To Cart');
    }
})

function finding(cartItem, info) {
    let flag = false;
    cartItem.forEach((el) => {
        if (el.title == info.title) {
            flag = true;
        }
    })
    return flag;
}

let title = document.querySelector('#title');
title.innerText = info.title;
let price = document.querySelector('#price');
price.innerText = 'Rs.' + info.price
let deleteValue = document.querySelector('#deleted');
deleteValue.innerText = info.deleteValue;

let mbody = document.querySelector('body');
function poup(str) {
    let pop = document.createElement('div');
    pop.innerText = str;
    pop.setAttribute('class', 'float');
    mbody.append(pop);
    setTimeout(() => {
        pop.style.display = 'none';
    }, '2000');
}

let recentItem = JSON.parse(localStorage.getItem('recent')) || [];

let recentContainer = document.querySelector('#recentlyViewed');
function display(data) {
    recentContainer.innerHTML = '';
    data.forEach((el) => {
        let card = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.img[0];
        let title = document.createElement('p');
        title.innerText = el.title;
        let price = document.createElement('h5');
        price.innerText = 'Rs.' + el.price;
        let addbtn = document.createElement('button');
        addbtn.addEventListener('click', function () {
            if (finding(cartItem, info) === true) {
                poup('Already added')
            } else if (finding(cartItem, info) === false) {
                cartItem.push(info);
                localStorage.setItem('cart', JSON.stringify(cartItem));
                poup('Added To Cart');
            }
        })
        addbtn.innerText = 'Add To Cart';
        card.append(img, title, price, addbtn);
        recentContainer.append(card);
    })
}

display(recentItem);