const inputPrice = document.querySelector('#price')
const inputPeople = document.querySelector('#people')
const selectTip = document.querySelector('#tip')
const cost = document.querySelector('.cost')
const error = document.querySelector('.error')
const countBtn = document.querySelector('.count')

const checkField = () => {

    if(inputPrice.value !== '' && inputPeople.value!== '') {

        countBill(parseInt(inputPrice.value,10), parseInt(inputPeople.value, 10), parseFloat(selectTip.value, 10))

    } else {
        error.textContent = 'Uzupełnij wszystkie dane.'
        cost.textContent = ''
    }

}

const countBill = (price, peopleNumber, tip) => {
    console.log(tip);
    let bill = (price + (price * tip)) / peopleNumber
    bill = bill.toFixed(2)
    cost.textContent = bill
}

countBtn.addEventListener('click', checkField)