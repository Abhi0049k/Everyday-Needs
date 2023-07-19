let arrivals = document.querySelector('#nav > #pages a:nth-child(1)');
let dropArrivals = document.querySelector('#newArrivals');

arrivals.addEventListener("mouseenter", function () {
    dropArrivals.style.display = 'flex'
})
arrivals.addEventListener("mouseleave", function () {
    dropArrivals.style.display = 'none'
})

dropArrivals.addEventListener('mouseenter', function () {
    dropArrivals.style.display = 'flex'
})
dropArrivals.addEventListener('mouseleave', function () {
    dropArrivals.style.display = 'none'
})

let casesSleeve = document.querySelector('#nav > #pages a:nth-child(2)');
let dropCases = document.querySelector('#casesSleeves');

casesSleeve.addEventListener('mouseenter', function () {
    dropCases.style.display = 'flex';
})
casesSleeve.addEventListener('mouseleave', function () {
    dropCases.style.display = 'none';
})
dropCases.addEventListener('mouseenter', function () {
    dropCases.style.display = 'flex'
})
dropCases.addEventListener('mouseleave', function () {
    dropCases.style.display = 'none'
})

let accessories = document.querySelector('#nav > #pages a:nth-child(3)');
let dropAccess = document.querySelector('#accessories');

accessories.addEventListener('mouseenter', function () {
    dropAccess.style.display = 'flex';
})
accessories.addEventListener('mouseleave', function () {
    dropAccess.style.display = 'none';
})
dropAccess.addEventListener('mouseenter', function () {
    dropAccess.style.display = 'flex'
})
dropAccess.addEventListener('mouseleave', function () {
    dropAccess.style.display = 'none'
})

let bagWallets = document.querySelector('#nav > #pages a:nth-child(5)')
let dropWallets = document.querySelector('#bagsWallets');

bagWallets.addEventListener('mouseenter', function () {
    dropWallets.style.display = 'flex';
})
bagWallets.addEventListener('mouseleave', function () {
    dropWallets.style.display = 'none';
})
dropWallets.addEventListener('mouseenter', function () {
    dropWallets.style.display = 'flex';
})
dropWallets.addEventListener('mouseleave', function () {
    dropWallets.style.display = 'none';
})


let homeOffice = document.querySelector('#nav > #pages a:nth-child(6)');
let dropHome = document.querySelector('#homeOffice');

homeOffice.addEventListener('mouseenter', function () {
    dropHome.style.display = 'flex';
});
homeOffice.addEventListener('mouseleave', function () {
    dropHome.style.display = 'none';
});
dropHome.addEventListener('mouseenter', function () {
    dropHome.style.display = 'flex';
});
dropHome.addEventListener('mouseleave', function () {
    dropHome.style.display = 'none';
});

let collections = document.querySelector('#nav > #pages a:nth-child(7)');
let dropCollection = document.querySelector('#collections');

collections.addEventListener('mouseenter', function () {
    dropCollection.style.display = 'flex';
})
collections.addEventListener('mouseleave', function () {
    dropCollection.style.display = 'none';
})
dropCollection.addEventListener('mouseenter', function () {
    dropCollection.style.display = 'flex';
})
dropCollection.addEventListener('mouseleave', function () {
    dropCollection.style.display = 'none';
})
