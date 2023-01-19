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


let newarrivalCard = [
    {
        img: 'https://images.dailyobjects.com/marche/assets/images/other/group-6681.jpg?tr=cm-pad_crop,v-2,w-1001,dpr-1',
        avail: 'Available in 6 colors',
        title: 'Pedal Backpack'
    },
    {
        img: 'https://images.dailyobjects.com/marche/assets/images/other/group-6676.jpg?tr=cm-pad_crop,v-2,w-1001,dpr-1',
        avail: 'Available in 2 colors',
        title: 'Clock & Dock',
    },
    {
        img: 'https://images.dailyobjects.com/marche/assets/images/other/group-6679.jpg?tr=cm-pad_crop,v-2,w-1001,dpr-1',
        avail: 'Available in 3 colors',
        title: 'Urban Briefcase'
    },
    {
        img: 'https://images.dailyobjects.com/marche/assets/images/other/group-6680.jpg?tr=cm-pad_crop,v-2,w-1001,dpr-1',
        avail: 'Available in 4 colors',
        title: 'Align Notebooks'
    },
    {
        img:'https://images.dailyobjects.com/marche/assets/images/other/group-6678.jpg?tr=cm-pad_crop,v-2,w-1001,dpr-1',
        avail: 'Available in Black color',
        title: 'Surge 4-in-1 Cable'
    },
    {
        img: 'https://images.dailyobjects.com/marche/assets/images/other/group-6677.jpg?tr=cm-pad_crop,v-2,w-1001,dpr-1',
        avail: 'Available in 9 colors',
        title: 'Macbook Cases'
    }
]

function fleft(){
    document.querySelector('#newarrivalsection > .right > .card:nth-child(2) img').setAttribute('src', newarrivalCard[0].img);
    document.querySelector('#newarrivalsection > .right > .card:nth-child(2) h6').innerText = newarrivalCard[0].avail;
    document.querySelector('#newarrivalsection > .right > .card:nth-child(2) p').innerText = newarrivalCard[0].title;
    document.querySelector('#newarrivalsection > .right > .card:nth-child(3) img').setAttribute('src', newarrivalCard[1].img);
    document.querySelector('#newarrivalsection > .right > .card:nth-child(3) h6').innerText = newarrivalCard[1].avail;
    document.querySelector('#newarrivalsection > .right > .card:nth-child(3) p').innerText = newarrivalCard[1].title;
    document.querySelector('#newarrivalsection > .right > .card:nth-child(4) img').setAttribute('src', newarrivalCard[2].img);
    document.querySelector('#newarrivalsection > .right > .card:nth-child(4) h6').innerText = newarrivalCard[2].avail;
    document.querySelector('#newarrivalsection > .right > .card:nth-child(4) p').innerText = newarrivalCard[2].title;
    document.querySelector('#newarrivalsection > .right > .card:nth-child(5) img').setAttribute('src', newarrivalCard[3].img);
    document.querySelector('#newarrivalsection > .right > .card:nth-child(5) h6').innerText = newarrivalCard[3].avail;
    document.querySelector('#newarrivalsection > .right > .card:nth-child(5) p').innerText = newarrivalCard[3].title;
}
function fright(){
    document.querySelector('#newarrivalsection > .right > .card:nth-child(2) img').setAttribute('src', newarrivalCard[2].img);
    document.querySelector('#newarrivalsection > .right > .card:nth-child(2) h6').innerText = newarrivalCard[2].avail;
    document.querySelector('#newarrivalsection > .right > .card:nth-child(2) p').innerText = newarrivalCard[2].title;
    document.querySelector('#newarrivalsection > .right > .card:nth-child(3) img').setAttribute('src', newarrivalCard[3].img);
    document.querySelector('#newarrivalsection > .right > .card:nth-child(3) h6').innerText = newarrivalCard[3].avail;
    document.querySelector('#newarrivalsection > .right > .card:nth-child(3) p').innerText = newarrivalCard[3].title;
    document.querySelector('#newarrivalsection > .right > .card:nth-child(4) img').setAttribute('src', newarrivalCard[4].img);
    document.querySelector('#newarrivalsection > .right > .card:nth-child(4) h6').innerText = newarrivalCard[4].avail;
    document.querySelector('#newarrivalsection > .right > .card:nth-child(4) p').innerText = newarrivalCard[4].title;
    document.querySelector('#newarrivalsection > .right > .card:nth-child(5) img').setAttribute('src', newarrivalCard[5].img);
    document.querySelector('#newarrivalsection > .right > .card:nth-child(5) h6').innerText = newarrivalCard[5].avail;
    document.querySelector('#newarrivalsection > .right > .card:nth-child(5) p').innerText = newarrivalCard[5].title;
}


let subscribers = JSON.parse(localStorage.getItem('subscriber'))||[];

let mainbody = document.querySelector('body');
let btn = document.querySelector('#exclusiveAccess button');
btn.addEventListener('click', function(){
    let email = document.querySelector('#exclusiveAccess input').value;
    subscribers.push(email);
    localStorage.setItem("subscriber", JSON.stringify(subscribers));
})

let url = 'product.json';
let fetchdata = [];
async function fetching(){
    let res = await fetch(url);
    res = await res.json();
    console.log(res);
}

fetching();
