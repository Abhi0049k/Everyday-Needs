let info =  {
    "title": "Ivory - Olive 9 to 9 Backpack",
            "price": 3499,
            "category": "backpack",
            "offer": "FREE DUFFLE BAG/ WALLET",
            "img": [
                "https://images.dailyobjects.com/marche/product-images/1201/natural-white---olive-9-to-9-backpack-images/Natural-White-Olive-9-to-9-Backpack-9t.jpg?tr=cm-pad_crop,v-2,w-352,h-434,dpr-1",
                "https://images.dailyobjects.com/marche/product-images/1201/natural-white---olive-9-to-9-backpack-images/Natural-White-Olive-9-to-9-Backpack.png?tr=cm-pad_resize,v-2,w-768,h-653,dpr-1",
                "https://images.dailyobjects.com/marche/product-images/1201/natural-white---olive-9-to-9-backpack-images/Natural-White-Olive-9-to-9-Backpack-1s.png?tr=cm-pad_resize,v-2,w-768,h-653,dpr-1",
                "https://images.dailyobjects.com/marche/product-images/1201/natural-white---olive-9-to-9-backpack-images/Natural-White-Olive-9-to-9-Backpack-2n.png?tr=cm-pad_resize,v-2,w-768,h-653,dpr-1",
                "https://images.dailyobjects.com/marche/product-images/1201/natural-white---olive-9-to-9-backpack-images/Natural-White-Olive-9-to-9-Backpack-3r.png?tr=cm-pad_resize,v-2,w-768,h-653,dpr-1"
            ],
            "deleteValue": 5999,
            "type": "08:01",
    "qty": 1
};


let imgcontainer = document.querySelector('#ProductContainer .left img');
imgcontainer.src = info.img[0];
let count = 0;
let leftbtn = document.querySelector('#ProductContainer .left .leftbtn');
leftbtn.addEventListener('click', function(){
    count--;
    imgcontainer.src = info.img[Math.abs(count%info.img.length)];
})

let rightbtn = document.querySelector('#ProductContainer .left .rightbtn');
rightbtn.addEventListener('click', function(){
    count++;
    imgcontainer.src = info.img[Math.abs(count%info.img.length)];
})

let cartItem = JSON.parse(localStorage.getItem('cart'))||[];

let addToCart = document.querySelector('#ProductContainer .right > button');
addToCart.addEventListener('click', function(){
    if(finding(cartItem, info)===true){
        poup('Already added')
    }else if(finding(cartItem, info)===false){
        cartItem.push(info);
        localStorage.setItem('cart',JSON.stringify(cartItem));
        poup('Added To Cart');
    }
})

function finding(cartItem , info){
    let flag = false;
    cartItem.forEach((el)=>{
        if(el.title == info.title){
            flag = true;
        }
    })
    return flag;
}

let title = document.querySelector('#title');
title.innerText = info.title;
let price = document.querySelector('#price');
price.innerText = 'Rs.'+info.price
let deleteValue = document.querySelector('#deleted');
deleteValue.innerText = info.deleteValue;

let mbody = document.querySelector('body');
function poup(str){
    let pop = document.createElement('div');
    pop.innerText = str;
    pop.setAttribute('class', 'float');
    mbody.append(pop);
    setTimeout(()=>{
        pop.style.display = 'none';
    }, '2000');
}

let recentItem = JSON.parse(localStorage.getItem('recent'))||[];

let recentContainer = document.querySelector('#recentlyViewed');
function display(data){
    recentContainer.innerHTML = '';
    data.forEach((el)=>{
        let card = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.img[0];
        let title = document.createElement('p');
        title.innerText = el.title;
        let price = document.createElement('h5');
        price.innerText = 'Rs.'+el.price;
        let addbtn = document.createElement('button');
        addbtn.addEventListener('click', function(){
            if(finding(cartItem, info)===true){
                poup('Already added')
            }else if(finding(cartItem, info)===false){
                cartItem.push(info);
                localStorage.setItem('cart',JSON.stringify(cartItem));
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