
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
function promoCodeApply() {
    const inputPomoCode = document.getElementById('input-code');
    const totalCostComp = document.getElementById('total-cost');
    const totalCostCompNum = parseInt(totalCostComp).innerText;
    const inputPomoCodeDigit = parseInt(inputPomoCode).value;
    if (inputPomoCodeDigit == 'stevekaku') {
        const newTotal = (totalCostCompNum * 20) / 100;
        totalCostCompNum = newTotal;
    }
}
document.getElementById('apply-button').addEventListener('click', function () {
    promoCodeApply()
})



//-------------tried this system but can't shoing output

// document.getElementById('memory-8gb').addEventListener('click', function () {
//     const memory8gb = document.getElementById('memory-cost');
//     memory8gb.innerText = 0;
// })
// document.getElementById('memory-16gb').addEventListener('click', function () {
//     const memory16gb = document.getElementById('memory-cost');
//     const memory16gbFloat = parseFloat(memory16gb);
//     memory16gb.innerText = 180;

//     //total price
//     const totalPrice = document.getElementById('total-price');
//     const totalPriceText = totalPrice.innerText;
//     totalPrice.innerText = parseFloat(totalPriceText) + memory16gbFloat;

//     //total cost 
//     const totalCost = document.getElementById('total-cost');
//     const totalCostText = totalCost.innerText;
//     const totalCostFloat = parseFloat(totalCostText);
//     const totalCostNew = totalCostFloat + memory16gb;
//     totalCost.innerText = totalCostNew;
//     // totalCost.innerText = parseFloat(totalCostText) + memory16gb;
// })





// const storage256 = document.getElementById('256gb-storage');
// const storage512 = document.getElementById('512gb-storage');
// const storage1Tb = document.getElementById('1tb-storage');
// const extraStorage = document.getElementById('storage-cost');

// storage256.addEventListener('click', function () {
//     extraStorage.innerText = 0;
// })
// storage512.addEventListener('click', function () {
//     extraStorage.innerText = 100;
// })
// storage1Tb.addEventListener('click', function () {
//     extraStorage.innerText = 180;
// })





// //-------------------------memory cost---------------------------
// function memoryItemsCost(inputid) {
//     const memoryPrice = document.getElementById('memory-cost');
//     const memoryPriceNumber = memoryPrice.innerText;

//     if (inputid == true) {
//         memoryPrice.innerText = parseInt(memoryPriceNumber) + 180;
//     }
//     else if (memoryPriceNumber > 0) {
//         memoryPrice.innerText = parseInt(memoryPriceNumber) - 180;
//     }
//     // memoryPrice.innerText = memoryPriceNumber;

//     // total price
//     const totalPrice = document.getElementById('total-price');
//     totalPrice.innerText = parseInt(memoryPriceNumber) + 1299;
//     // total cost
//     const totalCost = document.getElementById('total-cost');
//     totalCost.innerText = parseInt(memoryPriceNumber) + 1299;
// }

// document.getElementById('memory-8gb').addEventListener('click', function () {
//     memoryItemsCost(true);
// })
// document.getElementById('memory-16gb').addEventListener('click', function () {
//     memoryItemsCost(false);
// })
