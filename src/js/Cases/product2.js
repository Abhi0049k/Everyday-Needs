let info = {
    "title": "MagSafe Flekt Silicone Case Cover For iPhone 14 Pro Max",
    "price": 1799,
    "category": "cases",
    "offer": "BUY 1 GET 1 FREE",
    "deleteValue": 2499,
    "type": "iphone",
    "img": [
        "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-magsafe-flekt-silicone-case-cover-for-iphone-14-pro-max-images/DailyObjects-MagSafe-Flekt-Silicone-Case-Cover-For-iPhone-14-Pro-Max.png?tr=cm-pad_resize,v-2,w-170,h-210,dpr-1",
        "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-magsafe-flekt-silicone-case-cover-for-iphone-14-pro-max-images/DailyObjects-MagSafe-Flekt-Silicone-Case-Cover-For-iPhone-14-Pro-Max-1.png?tr=cm-pad_resize,v-2,w-768,h-653,dpr-1",
        "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-magsafe-flekt-silicone-case-cover-for-iphone-14-pro-max-images/DailyObjects-MagSafe-Flekt-Silicone-Case-Cover-For-iPhone-14-Pro-Max-2.png?tr=cm-pad_resize,v-2,w-768,h-653,dpr-1",
        "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-magsafe-flekt-silicone-case-cover-for-iphone-14-pro-max-images/DailyObjects-MagSafe-Flekt-Silicone-Case-Cover-For-iPhone-14-Pro-Max-3.png?tr=cm-pad_resize,v-2,w-768,h-653,dpr-1",
        "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-magsafe-flekt-silicone-case-cover-for-iphone-14-pro-max-images/DailyObjects-MagSafe-Flekt-Silicone-Case-Cover-For-iPhone-14-Pro-Max-4.png?tr=cm-pad_resize,v-2,w-768,h-653,dpr-1",
        "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-magsafe-flekt-silicone-case-cover-for-iphone-14-pro-max-images/DailyObjects-MagSafe-Flekt-Silicone-Case-Cover-For-iPhone-14-Pro-Max-5.png?tr=cm-pad_resize,v-2,w-768,h-653,dpr-1",
        "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-magsafe-flekt-silicone-case-cover-for-iphone-14-pro-max-images/DailyObjects-MagSafe-Flekt-Silicone-Case-Cover-For-iPhone-14-Pro-Max-6.png?tr=cm-pad_resize,v-2,w-768,h-653,dpr-1",
        "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-magsafe-flekt-silicone-case-cover-for-iphone-14-pro-max-images/DailyObjects-MagSafe-Flekt-Silicone-Case-Cover-For-iPhone-14-Pro-Max-7.png?tr=cm-pad_resize,v-2,w-768,h-653,dpr-1",
        "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-magsafe-flekt-silicone-case-cover-for-iphone-14-pro-max-images/DailyObjects-MagSafe-Flekt-Silicone-Case-Cover-For-iPhone-14-Pro-Max-8.png?tr=cm-pad_resize,v-2,w-768,h-653,dpr-1",
        "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-magsafe-flekt-silicone-case-cover-for-iphone-14-pro-max-images/DailyObjects-MagSafe-Flekt-Silicone-Case-Cover-For-iPhone-14-Pro-Max-9.png?tr=cm-pad_resize,v-2,w-768,h-653,dpr-1"
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
        let removebtn = document.createElement('button');
        let content = document.createElement('img');
        content.src = 'https://images.dailyobjects.com/marche/icons/bin.png?tr=cm-pad_resize,v-2,w-20,dpr-1';
        removebtn.append(content);
        removebtn.style.marginTop = '5px'
        removebtn.style.backgroundColor = '#F44336'
        removebtn.addEventListener('click', function(){
            data.splice(index, 1);
            localStorage.setItem('recent', JSON.stringify(data));
            display(data);
        })
        card.append(img, title, price, addbtn, removebtn);
        recentContainer.append(card);
    })
}

display(recentItem);