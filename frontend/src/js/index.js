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

