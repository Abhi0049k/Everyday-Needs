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

let gifting = document.querySelector('#nav > #pages a:nth-child(8)');
let dropgift = document.querySelector('#gifts');

gifting.addEventListener('mouseenter', function(){
    dropgift.style.display = 'flex';
})
gifting.addEventListener('mouseleave', function(){
    dropgift.style.display = 'none';
})
dropgift.addEventListener('mouseenter', function(){
    dropgift.style.display = 'flex';
})
dropgift.addEventListener('mouseleave', function(){
    dropgift.style.display = 'none';
})

let shop_categoriesCard = [
    {
        img:'https://images.dailyobjects.com/marche/assets/images/other/cases-ups.jpg?tr=cm-pad_crop,v-2,w-1001,dpr-1',
        title: 'Cases'
    },
    {
        img:'https://images.dailyobjects.com/marche/assets/images/other/laptop-sleeve-ups.jpg?tr=cm-pad_crop,v-2,w-1001,dpr-1',
        title: 'Laptop Sleeves'
    },
    {
        img:'https://images.dailyobjects.com/marche/assets/images/other/charging-solution-ups.jpg?tr=cm-pad_crop,v-2,w-1001,dpr-1',
        title: 'Charging Solutions'
    },
    {
        img:'https://images.dailyobjects.com/marche/assets/images/other/tote-ups.jpg?tr=cm-pad_crop,v-2,w-1001,dpr-1',
        title: 'Tote Bags'
    },
    {
        img:'https://images.dailyobjects.com/marche/assets/images/other/crossbody-ups.jpg?tr=cm-pad_crop,v-2,w-1001,dpr-1',
        title:'Crossbody Bags'
    },
    {
        img:'https://images.dailyobjects.com/marche/assets/images/other/backpack-ups.jpg?tr=cm-pad_crop,v-2,w-1001,dpr-1',
        title:'Backpack'
    },
    {
        img:'https://images.dailyobjects.com/marche/assets/images/other/deskmat-ups.jpg?tr=cm-pad_crop,v-2,w-1001,dpr-1',
        title:'Desk Mat'
    },
    {
        img:'https://images.dailyobjects.com/marche/assets/images/other/watchbands-ups.jpg?tr=cm-pad_crop,v-2,w-1001,dpr-1',
        title:'Watchbands'
    }
]




function funcleft(){
    document.querySelector('#shop-categories > .right > .card:nth-child(2) img').setAttribute('src', shop_categoriesCard[0].img);
    document.querySelector('#shop-categories > .right > .card:nth-child(2) p').innerText = shop_categoriesCard[0].title;
    document.querySelector('#shop-categories > .right > .card:nth-child(3) img').setAttribute('src', shop_categoriesCard[1].img);
    document.querySelector('#shop-categories > .right > .card:nth-child(3) p').innerText = shop_categoriesCard[1].title;
    document.querySelector('#shop-categories > .right > .card:nth-child(4) img').setAttribute('src', shop_categoriesCard[2].img);
    document.querySelector('#shop-categories > .right > .card:nth-child(4) p').innerText = shop_categoriesCard[2].title;
    document.querySelector('#shop-categories > .right > .card:nth-child(5) img').setAttribute('src', shop_categoriesCard[3].img);
    document.querySelector('#shop-categories > .right > .card:nth-child(5) p').innerText = shop_categoriesCard[3].title;
}
function funcright(){
    document.querySelector('#shop-categories > .right > .card:nth-child(2) img').setAttribute('src', shop_categoriesCard[4].img);
    document.querySelector('#shop-categories > .right > .card:nth-child(2) p').innerText = shop_categoriesCard[4].title;
    document.querySelector('#shop-categories > .right > .card:nth-child(3) img').setAttribute('src', shop_categoriesCard[5].img);
    document.querySelector('#shop-categories > .right > .card:nth-child(3) p').innerText = shop_categoriesCard[5].title;
    document.querySelector('#shop-categories > .right > .card:nth-child(4) img').setAttribute('src', shop_categoriesCard[6].img);
    document.querySelector('#shop-categories > .right > .card:nth-child(4) p').innerText = shop_categoriesCard[6].title;
    document.querySelector('#shop-categories > .right > .card:nth-child(5) img').setAttribute('src', shop_categoriesCard[7].img);
    document.querySelector('#shop-categories > .right > .card:nth-child(5) p').innerText = shop_categoriesCard[7].title;
}