const inputPrice = document.querySelector('#price')
const inputPeople = document.querySelector('#people')
const selectTip = document.querySelector('#tip')
const cost = document.querySelector('.cost')
const error = document.querySelector('.error')
const countBtn = document.querySelector('.count')
const costInfo = document.querySelector('.cost-info')

const checkField = () => {

    if(inputPrice.value !== '' && inputPeople.value!== '') {

        countBill(parseFloat(inputPrice.value,10), parseInt(inputPeople.value, 10), parseFloat(selectTip.value, 10))
        error.textContent = ''

    } else {
        error.textContent = 'Uzupełnij wszystkie dane.'
        costInfo.style.display = 'none'
    }

}

const countBill = (price, peopleNumber, tip) => {
    let bill = (price + (price * tip)) / peopleNumber
    bill = bill.toFixed(2)
    costInfo.style.display = 'block'
    cost.textContent = bill
}

countBtn.addEventListener('click', checkField)