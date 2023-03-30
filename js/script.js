const inputPrice = document.querySelector('#price')
const inputPeople = document.querySelector('#people')
const selectTip = document.querySelector('#tip')
const cost = document.querySelector('.cost')
const error = document.querySelector('.error')
const btn = document.querySelector('.count')

const checkField = () => {
    if(inputPrice.value !== '' && inputPeople.value!== '') {
        billCombiner(parseInt(inputPrice.value,10), parseInt(inputPeople.value, 10), parseInt(selectTip.value, 10))
    } else {
        error.textContent = 'Uzupełnij wszystkie dane.'
        cost.textContent = ''
    }
}

const billCombiner = (price, peopleNumber, tip) => {
    let bill = (price + (price * tip)) / peopleNumber
    bill = bill.toFixed(2)
    cost.textContent = bill
}

btn.addEventListener('click', checkField)
