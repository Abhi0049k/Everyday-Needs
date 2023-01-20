let arrivals = document.querySelector('#nav > #pages a:nth-child(1)');
let dropArrivals = document.querySelector('#newArrivals');

arrivals.addEventListener("mouseenter", function(){
    dropArrivals.style.display = 'flex'
})
arrivals.addEventListener("mouseleave", function(){
    dropArrivals.style.display = 'none'
})

dropArrivals.addEventListener('mouseenter', function(){
    dropArrivals.style.display = 'flex'
})
dropArrivals.addEventListener('mouseleave', function(){
    dropArrivals.style.display = 'none'
})

let casesSleeve = document.querySelector('#nav > #pages a:nth-child(2)');
let dropCases = document.querySelector('#casesSleeves');

casesSleeve.addEventListener('mouseenter', function(){
    dropCases.style.display = 'flex';
})
casesSleeve.addEventListener('mouseleave', function(){
    dropCases.style.display = 'none';
})
dropCases.addEventListener('mouseenter', function(){
    dropCases.style.display = 'flex'
})
dropCases.addEventListener('mouseleave', function(){
    dropCases.style.display = 'none'
})

let accessories = document.querySelector('#nav > #pages a:nth-child(3)');
let dropAccess = document.querySelector('#accessories');

accessories.addEventListener('mouseenter', function(){
    dropAccess.style.display = 'flex';
})
accessories.addEventListener('mouseleave', function(){
    dropAccess.style.display = 'none';
})
dropAccess.addEventListener('mouseenter', function(){
    dropAccess.style.display = 'flex'
})
dropAccess.addEventListener('mouseleave', function(){
    dropAccess.style.display = 'none'
})

let bagWallets = document.querySelector('#nav > #pages a:nth-child(5)')
let dropWallets = document.querySelector('#bagsWallets');

bagWallets.addEventListener('mouseenter', function(){
    dropWallets.style.display = 'flex';
})
bagWallets.addEventListener('mouseleave', function(){
    dropWallets.style.display = 'none';
})
dropWallets.addEventListener('mouseenter', function(){
    dropWallets.style.display = 'flex';
})
dropWallets.addEventListener('mouseleave', function(){
    dropWallets.style.display = 'none';
})


let homeOffice = document.querySelector('#nav > #pages a:nth-child(6)');
let dropHome = document.querySelector('#homeOffice');

homeOffice.addEventListener('mouseenter', function(){
    dropHome.style.display = 'flex';
});
homeOffice.addEventListener('mouseleave', function(){
    dropHome.style.display = 'none';
});
dropHome.addEventListener('mouseenter', function(){
    dropHome.style.display = 'flex';
});
dropHome.addEventListener('mouseleave', function(){
    dropHome.style.display = 'none';
});

let collections = document.querySelector('#nav > #pages a:nth-child(7)');
let dropCollection = document.querySelector('#collections');

collections.addEventListener('mouseenter', function(){
    dropCollection.style.display = 'flex';
})
collections.addEventListener('mouseleave', function(){
    dropCollection.style.display = 'none';
})
dropCollection.addEventListener('mouseenter', function(){
    dropCollection.style.display = 'flex';
})
dropCollection.addEventListener('mouseleave', function(){
    dropCollection.style.display = 'none';
})

let subscribers = JSON.parse(localStorage.getItem('subscriber'))||[];

let mainbody = document.querySelector('body');
let btn = document.querySelector('#exclusiveAccess button');
btn.addEventListener('click', function(){
    let email = document.querySelector('#exclusiveAccess input').value;
    subscribers.push(email);
    localStorage.setItem("subscriber", JSON.stringify(subscribers));
    popup();
})

function popup(){
    let lert = document.createElement('div');
    lert.innerText = 'Subscription Successful';
    lert.setAttribute('id', 'floating');
    mainbody.append(lert);
    setTimeout(()=>{
        lert.style.display = "none"
    }, '2000');
}

let url = 'product.json';
let fetchdata = [];
async function fetching(){
    let res = await fetch(url);
    res = await res.json();
    fetchdata = [...res.Watchbands];
    console.log(fetchdata);
    display(fetchdata);
}

fetching();

let productContainerEl = document.querySelector('#productContainer');
function display(data){
    productContainerEl.innerHTML = '';
    data.forEach((el, index)=>{
        let row = document.createElement('div');
        let linking = document.createElement('a');
        
        let img = document.createElement('img');
        img.src = el.img[0];
        linking.append(img);
        linking.setAttribute('href', `./Watchbands/product${index+1}.html`);
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
        row.append(linking, title, price, offer);
        productContainerEl.append(row)
    })
}


let inp = document.querySelector('#container form');

inp.addEventListener('submit',function(event){
   event.preventDefault();
   let vl = document.querySelector('#container form .item').value;
   if(vl == ''){
       display(fetchdata); 
   }else{
    let list = fetchdata.filter((el)=>{
        return el.title.toUpperCase().includes(vl.toUpperCase());
    })
    display(list);
   }
})