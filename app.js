
const memory8gb = document.getElementById('memory-8gb');
const memory16gb = document.getElementById('memory-16gb');
const extraMemory = document.getElementById('memory-cost');
//total price
const totalPrice = document.getElementById('total-price');
totalPrice.innerText = '1299';
//total cost
const totalCost = document.getElementById('total-cost');
totalCost.innerText = '1299'
//fixed price
const fixedPrice = document.getElementById('fixed-price');

// add event listener
memory8gb.addEventListener('click', function () {
    extraMemory.innerText = '0';
    updateToal()
})
memory16gb.addEventListener('click', function () {
    extraMemory.innerText = '180';
    updateToal()
})

function updateToal() {
    const mainPrice = parseFloat(fixedPrice.innerText);
    const memoryCost = parseFloat(extraMemory.innerText);
    const totalCostNew = parseFloat(totalCost.innerText);
    const grandTotal = mainPrice + memoryCost;
    totalPrice.innerText = grandTotal + totalCostNew;
}



//Storage cost

const storage256gb = document.getElementById('256gb-storage');
const storage512gb = document.getElementById('512gb-storage');
const storage1Tb = document.getElementById('1tb-storage');

const extraStorage = document.getElementById('storage-cost');
//total price
const totalStoragePrice = document.getElementById('total-price');
totalStoragePrice.innerText = '1299';
//fixed price
const fixedPriceStorage = document.getElementById('fixed-price')

// add event listener
storage256gb.addEventListener('click', function () {
    extraStorage.innerText = '0';
    updateToalStorage()
})
storage512gb.addEventListener('click', function () {
    extraStorage.innerText = '100';
    updateToalStorage()
})
storage1Tb.addEventListener('click', function () {
    extraStorage.innerText = '180';
    updateToalStorage()
})

function updateToalStorage() {
    const mainStoragePrice = parseFloat(fixedPrice.innerText);
    const storageCost = parseFloat(extraStorage.innerText);
    const grandTotalStorage = mainStoragePrice + storageCost;
    totalStoragePrice.innerText = grandTotalStorage;
}




//delivery cost
const deliveryCost = document.getElementById('delivery-cost');
const deliveryCost20 = document.getElementById('delivery-cost-20');
const deliveryCharg = document.getElementById('delivery-charg');
//total price
const totalDeliveryCost = document.getElementById('total-price');
totalDeliveryCost.innerText = '1299';
//fixed price
const deliveryFixedPrice = document.getElementById('fixed-price');

// add event listener
deliveryCost.addEventListener('click', function () {
    extraDeliveryCharg.innerText = '0';
    updateToalDelivery()
})
deliveryCost20.addEventListener('click', function () {
    extraDeliveryCharg.innerText = '20';
    updateToalDelivery()
})

function updateToalDelivery() {
    const deliveryPrice = parseFloat(deliveryFixedPrice.innerText);
    const deliveryCost = parseFloat(extraDeliveryCharg.innerText);
    const grandTotalDelivery = deliveryPrice + deliveryCost;
    totalDeliveryCost.innerText = grandTotalDelivery;
}



//promo code use
document.getElementById('apply-button').addEventListener('click', function () {
    const inputPomo = document.getElementById('input-code');
    const inputPomoCode = inputPomo.value;
    const newTotal = document.getElementById('total-cost');
    const newTotalText = newTotal.innerText;
    if (inputPomoCode == 'stevekaku') {
        newTotalText = (inputPomoCode * ('20 %')) / 100;
        inputPomoCode = newTotal;
    }
})

