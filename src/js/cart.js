function finding(el) {
    let flag = false;
    data.forEach((element) => {
        if (element.title = el.title)
            flag = true;
    })
    return flag;
}

let cartEl = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cartEl);

let containerEl = document.querySelector('#productSide');

function display(data) {
    let total = 0;
    let count = 0;
    containerEl.innerHTML = '';
    data.forEach((el, i) => {
        let card = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.img[0];
        let right = document.createElement('div');
        let title = document.createElement('p');
        title.innerText = el.title;
        let price = document.createElement('h3');
        price.innerText = "Rs." + el.price;
        let changes = document.createElement('div');
        let decreasing = document.createElement('button');
        let minus = document.createElement('img');
        minus.src = 'https://images.dailyobjects.com/marche/icons/minus-1.png?tr=cm-pad_resize,v-2,w-14,dpr-1';
        decreasing.append(minus);
        decreasing.addEventListener('click', function () {
            el.qty--;
            localStorage.setItem('cart', JSON.stringify(data));
            display(data);
        })
        let qty = document.createElement('span');
        qty.innerText = el.qty;
        let increasing = document.createElement('button');
        let plus = document.createElement('img');
        plus.src = 'https://images.dailyobjects.com/marche/icons/plus.png?tr=cm-pad_resize,v-2,w-14,dpr-1';
        increasing.append(plus);
        increasing.addEventListener('click', function () {
            el.qty++;
            localStorage.setItem('cart', JSON.stringify(data));
            display(data);
        })
        let remove = document.createElement('img')
        remove.src = "https://images.dailyobjects.com/marche/icons/bin.png?tr=cm-pad_resize,v-2,w-20,dpr-1";
        remove.addEventListener('click', function () {
            data.splice(i, 1);
            localStorage.setItem('cart', JSON.stringify(data));
            display(data);
        })
        changes.append(decreasing, qty, increasing);
        let totalchanges = document.createElement('div');
        totalchanges.append(changes, remove);
        right.append(title, price, totalchanges);
        right.setAttribute('class', 'right');
        card.append(img, right)
        containerEl.append(card);
        total += Number(el.qty) * Number(el.price)
        console.log(total);
        count++;
    })
    document.querySelector('#purchaseContainer #billSide .summary .pricing .first #count').innerText = count;
    document.querySelector('#purchaseContainer #billSide .summary .pricing .first #total').innerText = 'Rs.' + total;
    document.querySelector('#purchaseContainer #billSide .summary .pricing .first #grandtotal').innerText = 'Rs.' + total;
}

display(cartEl);