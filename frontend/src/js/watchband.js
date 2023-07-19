let url = 'http://localhost:8998/products/all?category=watchband';
let fetchdata = [];
async function fetching() {
    let res = await fetch(url);
    res = await res.json();
    console.log(res);
    display(res);
}
fetching();

let recentlyViewed = JSON.parse(localStorage.getItem('recent')) || [];

let productContainerEl = document.querySelector('#productContainer');
function display(data) {
    productContainerEl.innerHTML = '';
    data.forEach((el, index)=>{
        let row = document.createElement('div');
        let linking = document.createElement('a');
        
        let img = document.createElement('img');
        img.src = el.img[0];
        img.addEventListener('mouseover', function(){
            img.src = el.img[1];
        })
        img.addEventListener('mouseleave', function(){
            img.src = el.img[0];
        })
        linking.append(img);
        let title = document.createElement('p');
        title.innerText = el.title;
        let price = document.createElement('h4');
        let actualprice = document.createElement('span');
        actualprice.setAttribute('class', 'actual');
        actualprice.innerText = "Rs."+el.price
        let deleted = document.createElement('del');
        deleted.setAttribute('class', 'deleted');
        deleted.innerText = el.deleteValue;
        price.append(actualprice, deleted);
        let offer = document.createElement('h5');
        offer.innerText = el.offer+"*";
        row.addEventListener('click', function(){
            recentlyViewed.push(el);
            localStorage.setItem('recent', JSON.stringify(recentlyViewed));
        })
        row.append(linking, title, price, offer);
        row.addEventListener('click', ()=>{
            localStorage.setItem('productId', el._id);
            window.location.href = 'product.html'
        })
        productContainerEl.append(row)
    })
}

let inp = document.querySelector('#container form');

inp.addEventListener('submit', function (event) {
    event.preventDefault();
    let vl = document.querySelector('#container form .item').value;
    if (vl == '') {
        display(fetchdata);
    } else {
        let list = fetchdata.filter((el) => {
            return el.title.toUpperCase().includes(vl.toUpperCase());
        })
        display(list);
    }
})