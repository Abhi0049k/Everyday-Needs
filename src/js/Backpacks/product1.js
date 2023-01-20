let info =  {
    "title": "All Beige Pedal Daypack",
    "price": 1699,
    "category": "backpack",
    "offer": "FREE DUFFLE BAG/ WALLET",
    "img": [
        "https://images.dailyobjects.com/marche/product-images/1201/all-beige-pedal-daypack-images/All-Beige-Pedal-Daypack-13t.jpg?tr=cm-pad_crop,v-2,w-352,h-434,dpr-1",
        "https://images.dailyobjects.com/marche/product-images/1201/all-beige-pedal-daypack-images/All-Beige-Pedal-Daypack-vw.png?tr=cm-pad_resize,v-2,w-768,h-653,dpr-1",
        "https://images.dailyobjects.com/marche/product-images/1201/all-beige-pedal-daypack-images/All-Beige-Pedal-Daypack-12t.jpg?tr=cm-pad_crop,v-2,w-768,h-653,dpr-1",
        "https://images.dailyobjects.com/marche/product-images/1201/all-beige-pedal-daypack-images/All-Beige-Pedal-Daypack-13t.jpg?tr=cm-pad_crop,v-2,w-768,h-653,dpr-1",
        "https://images.dailyobjects.com/marche/product-images/1201/all-beige-pedal-daypack-images/All-Beige-Pedal-Daypack-14t.jpg?tr=cm-pad_crop,v-2,w-768,h-653,dpr-1"
    ],
    "deleteValue": 2499,
    "type": "pedal",
    "qty": 1
};


let imgcontainer = document.querySelector('#ProductContainer .left img');
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
    // cartItem.push(info);
    if(finding(cartItem, info)===true){
        console.log('Already added')
    }else{
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

let mbody = document.querySelector('body');
function poup(str){
    console.log('clikc;')
    let pop = document.createElement('div');
    pop.innerText = str;
    pop.setAttribute('class', 'float');
    mbody.append(pop);
}