const currencyEl_one = document.getElementById('currency-one')
const amount_one = document.getElementById('amount-one')
const currencyEl_two = document.getElementById('currency-two')
const amount_two = document.getElementById('amount-two')

const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')

//fetch exchange rates and update the DOM
const calculate = () => {
  const currency_one = currencyEl_one.value
  const currency_two = currencyEl_two.value

  fetch(`https://v6.exchangerate-api.com/v6/da49406bb25443ed6343295a/latest/${currency_one}`)
  .then((res) => res.json())
  .then((data) => {
    const rate = data.conversion_rates[currency_two]
    
    rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

    amount_two.value = (amount_one.value * rate).toFixed(2)
    console.log(rate)
  })
}

// event listeners
currencyEl_one.addEventListener('change', calculate)
amount_one.addEventListener('input', calculate)
currencyEl_two.addEventListener('change', calculate)
amount_two.addEventListener('input', calculate)

// swap

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value
  currencyEl_one.value = currencyEl_two.value
  currencyEl_two.value = temp

  calculate()
})