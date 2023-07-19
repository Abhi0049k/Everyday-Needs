// starting Navbar Dropdown 


// ending Navbar Dropdown 

// Fetching products 

let token = localStorage.getItem('token');

const ServerURI = 'http://localhost:8998/products/all'

let mainbody = document.querySelector('body');

async function fetching() {
    let res = await fetch(ServerURI);
    res = await res.json();
    display(res);
}

fetching();

// end fetching products

// starting creating card

let productContainerEl = document.querySelector('#productContainer');
function display(data) {
    productContainerEl.innerHTML = '';
    data.forEach((el, index) => {
        let row = document.createElement('div');
        let linking = document.createElement('a');
        let img = document.createElement('img');
        img.src = el.img[0];
        img.addEventListener('mouseover', function () {
            img.src = el.img[1];
        })
        img.addEventListener('mouseleave', function () {
            img.src = el.img[0];
        })
        linking.append(img);
        linking.setAttribute('href', `./${el.category}/product${index + 1}.html`);
        let title = document.createElement('p');
        title.innerText = el.title;
        let price = document.createElement('h4');
        let actualprice = document.createElement('span');
        actualprice.setAttribute('class', 'actual');
        actualprice.innerText = "Rs." + el.price
        let deleted = document.createElement('del');
        deleted.setAttribute('class', 'deleted');
        deleted.innerText = el.deleteValue;
        price.append(actualprice, deleted);
        let offer = document.createElement('h5');
        offer.innerText = el.offer + "*";
        row.append(linking, title, price, offer);
        productContainerEl.append(row)
    })
}
// end creating card